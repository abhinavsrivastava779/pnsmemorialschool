import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, CheckCircle2, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { site, images } from "@/lib/assets";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Enquiry | PNS Memorial School, Bahraich" },
      {
        name: "description",
        content:
          "Contact PNS Memorial School, Sufipura, Brahmnipura, Bahraich, Uttar Pradesh 271801. Phone 9838719499, email pnsmemorialschool@gmail.com. Send an admission enquiry online.",
      },
      { property: "og:title", content: "Contact PNS Memorial School" },
      {
        property: "og:description",
        content:
          "Call 9838719499, email pnsmemorialschool@gmail.com or send an online admission enquiry.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Call, write or visit — we are happy to answer your questions about admissions and school life."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: MapPin,
                title: "Address",
                content: (
                  <>
                    {site.address}
                    <a
                      href={site.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-gold-deep hover:text-primary"
                    >
                      Get directions
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </>
                ),
              },
              {
                icon: Phone,
                title: "Phone",
                content: (
                  <a
                    href={`tel:${site.phoneIntl}`}
                    className="font-semibold text-primary hover:text-gold-deep"
                  >
                    {site.phone}
                  </a>
                ),
              },
              {
                icon: Mail,
                title: "Email",
                content: (
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all font-semibold text-primary hover:text-gold-deep"
                  >
                    {site.email}
                  </a>
                ),
              },
              {
                icon: Clock,
                title: "School Timings",
                content: site.timings,
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-4 font-display text-lg font-semibold text-primary">
                    {item.title}
                  </p>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {item.content}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
              {sent ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="mx-auto h-14 w-14 text-gold-deep" aria-hidden="true" />
                  <h2 className="mt-4 font-display text-2xl font-bold text-primary sm:text-3xl">
                    Enquiry received
                  </h2>
                  <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                    Thank you for writing to us. The school office will get
                    back to you during working hours. For anything urgent,
                    please call {site.phone}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 inline-flex items-center justify-center rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold sm:text-3xl">
                    Send us an enquiry
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fill in the form and the school office will respond during
                    working hours.
                  </p>
                  <div className="mt-8">
                    <EnquiryForm onSuccess={() => setSent(true)} />
                  </div>
                </>
              )}
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-2">
            <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <div className="img-hover-zoom aspect-[4/3]">
                <img
                  src={images.admissionsPoster}
                  alt="Admissions notice displayed at the school entrance"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="px-5 py-4 text-xs text-muted-foreground">
                Admissions notice displayed at the school gate.
              </figcaption>
            </figure>
            <div className="mt-6 rounded-2xl bg-primary p-6 text-primary-foreground">
              <h3 className="font-display text-xl font-semibold text-gold">
                Visit our campus
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">
                {site.address}
              </p>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground transition-colors hover:bg-gold-deep hover:text-primary-foreground"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
