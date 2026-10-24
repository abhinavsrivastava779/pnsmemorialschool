import { useState, type FormEvent } from "react";

interface EnquiryFormProps {
  onSuccess: () => void;
}

const inputClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-shadow focus:border-gold focus:ring-2 focus:ring-gold/40";

/**
 * Enquiry form — submits to the school's enquiry endpoint.
 * Shows success only after the backend confirms it stored (and, once email
 * is set up, emailed) the enquiry.
 */
export function EnquiryForm({ onSuccess }: EnquiryFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      childClass: String(data.get("childClass") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    // Client-side sanity checks before sending.
    if (payload.name.length < 2 || payload.message.length < 5) {
      setError("Please fill in your name and your message.");
      setSubmitting(false);
      return;
    }
    if (!/^[0-9+\-\s]{10,15}$/.test(payload.phone)) {
      setError("Please enter a valid phone number.");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/public/enquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = (await res.json().catch(() => null)) as {
        stored?: boolean;
        emailed?: boolean;
        error?: string;
      } | null;

      if (!res.ok || !body?.stored) {
        setError(
          body?.error ??
            "Your enquiry could not be sent. Please call the school on 9838719499.",
        );
        setSubmitting(false);
        return;
      }

      form.reset();
      onSuccess();
    } catch {
      setError(
        "There was a connection problem. Please try again or call the school on 9838719499.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-foreground">
          Full name <span className="text-gold-deep">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          placeholder="Your name"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-foreground">
          Phone number <span className="text-gold-deep">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          maxLength={15}
          placeholder="10-digit mobile number"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-foreground">
          Email <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          maxLength={255}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="childClass" className="mb-1.5 block text-sm font-semibold text-foreground">
          Class seeking admission
        </label>
        <input
          id="childClass"
          name="childClass"
          type="text"
          maxLength={50}
          placeholder="e.g. Nursery, Class 3"
          className={inputClass}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">
          Your message <span className="text-gold-deep">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={2000}
          placeholder="Tell us what you would like to know — classes, admission process, fees or a campus visit."
          className={inputClass}
        />
      </div>

      {error && (
        <p
          role="alert"
          className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive sm:col-span-2"
        >
          {error}
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-accent-foreground shadow transition-colors hover:bg-gold-deep hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {submitting ? "Sending…" : "Send Enquiry"}
        </button>
      </div>
    </form>
  );
}
