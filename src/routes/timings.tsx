import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, GraduationCap, BookOpen, MapPin, Phone, Mail } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { site } from "@/lib/assets";

export const Route = createFileRoute("/timings")({
  head: () => ({
    meta: [
      { title: "School Timings | PNS Memorial School, Bahraich" },
      {
        name: "description",
        content:
          "School timings at PNS Memorial School, Bahraich — 8:00 AM to 2:00 PM, UP Board English Medium, Nursery to Class 8.",
      },
      { property: "og:title", content: "School Timings — PNS Memorial School" },
      {
        property: "og:description",
        content: "School hours 8:00 AM to 2:00 PM at PNS Memorial School, Bahraich.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Timings,
});

function Timings() {
  return (
    <>
      <PageHeader
        title="School Timings"
        subtitle="Plan your visit and your child's day around our school hours."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl border border-gold/40 bg-card p-8 text-center shadow-sm sm:p-12">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
                <Clock className="h-8 w-8" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold text-primary sm:text-5xl">
                8:00 AM – 2:00 PM
              </h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                School hours at PNS Memorial School
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: GraduationCap,
                title: "Classes",
                text: `${site.classes}`,
              },
              {
                icon: BookOpen,
                title: "Medium & Board",
                text: site.board,
              },
              {
                icon: MapPin,
                title: "Campus",
                text: site.address,
              },
              {
                icon: Phone,
                title: "During school hours",
                text: `Call ${site.phone} or write to ${site.email}`,
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 110}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-primary">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-12 rounded-2xl bg-secondary/60 p-6 text-center">
              <p className="text-sm leading-relaxed text-muted-foreground">
                For exact holiday dates, daily schedule details or a campus
                visit, please contact the school office during working hours.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-colors hover:bg-gold-deep hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact the School
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
