import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is too short")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{10,15}$/, "Phone number looks invalid"),
  email: z
    .union([z.string().trim().email("Email looks invalid").max(255), z.literal("")])
    .optional(),
  childClass: z.string().trim().max(50).optional(),
  message: z
    .string()
    .trim()
    .min(5, "Message is too short")
    .max(2000, "Message is too long"),
});

// Simple per-IP sliding window: at most 5 enquiries per hour.
const RATE_LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000;
const attempts = new Map<string, { count: number; reset: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = attempts.get(ip);
  if (!entry || now > entry.reset) {
    attempts.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  if (entry.count > RATE_LIMIT) return true;
  // Occasional cleanup of expired entries.
  if (attempts.size > 500) {
    for (const [key, value] of attempts) {
      if (now > value.reset) attempts.delete(key);
    }
  }
  return false;
}

export const Route = createFileRoute("/api/public/enquiries")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const ip =
          request.headers
            .get("x-forwarded-for")
            ?.split(",")[0]
            ?.trim() || "unknown";

        if (isRateLimited(ip)) {
          return Response.json(
            { error: "Too many enquiries from this connection. Please try again later." },
            { status: 429 },
          );
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json(
            { error: "Invalid request." },
            { status: 400 },
          );
        }

        const parsed = enquirySchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { error: "Please check the details you entered and try again." },
            { status: 400 },
          );
        }

        const { name, phone, email, childClass, message } = parsed.data;

        try {
          const { supabaseAdmin } = await import(
            "@/integrations/supabase/client.server"
          );
          const { error } = await supabaseAdmin.from("enquiries").insert({
            name,
            phone,
            email: email || null,
            child_class: childClass || null,
            message,
          });

          if (error) {
            console.error("[enquiries] insert failed:", error.message);
            return Response.json(
              { error: "We could not receive your enquiry right now. Please call the school instead." },
              { status: 500 },
            );
          }
        } catch (err) {
          console.error("[enquiries] server error:", err);
          return Response.json(
            { error: "We could not receive your enquiry right now. Please call the school instead." },
            { status: 500 },
          );
        }

        // An owner email notification is added once the email domain is verified.
        // Until then the enquiry is safely stored and reviewed.
        return Response.json({ stored: true, emailed: false });
      },
    },
  },
});
