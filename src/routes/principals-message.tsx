import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { site, images } from "@/lib/assets";

export const Route = createFileRoute("/principals-message")({
  head: () => ({
    meta: [
      { title: "Principal's Message | PNS Memorial School" },
      {
        name: "description",
        content:
          "A message from Kalpana Srivastava, Principal of PNS Memorial School, Bahraich.",
      },
      { property: "og:title", content: "Principal's Message — PNS Memorial School" },
      {
        property: "og:description",
        content:
          "Words of welcome and guidance from the Principal of PNS Memorial School, Bahraich.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrincipalsMessage,
});

function PrincipalsMessage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="lg:sticky lg:top-28">
            <img
              src={images.principal}
              alt="Kalpana Srivastava, Principal of PNS Memorial School"
              className="w-full rounded-3xl border border-gold/40 object-cover shadow-lg"
              style={{ aspectRatio: "3/4" }}
            />
            <div className="mt-6 text-center">
              <p className="font-display text-2xl font-bold text-primary">
                {site.principal}
              </p>
              <p className="mt-1 text-sm font-semibold tracking-wide text-gold-deep uppercase">
                {site.principalRole}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <p className="text-xs font-bold tracking-[0.2em] text-gold-deep uppercase">
            Principal's Message
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            "Every child deserves a patient hand and a bright classroom"
          </h1>
          <div className="gold-rule mt-5 h-px w-32" />

          <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>Dear parents, students and well-wishers,</p>
            <p>
              Welcome to PNS Memorial School. The years a child spends with us
              — from Nursery to Class 8 — are the years that shape how they
              think, speak and approach the world. Our teachers take this
              responsibility to heart, giving attention to every child and
              celebrating every small step of progress.
            </p>
            <p>
              In our classrooms you will find questions being asked, activities
              being enjoyed and effort being praised. Alongside academics, we
              give equal importance to good manners, honesty and kindness,
              because these are the qualities that stay with a child for life.
            </p>
            <p>
              I warmly invite parents to be a part of their child's school
              journey — meet us, ask questions and share your thoughts. Working
              together, we can give our children the strong, happy start they
              deserve.
            </p>
            <p className="font-semibold text-foreground">With warm regards,</p>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-5">
            <p className="font-display text-xl font-semibold text-primary">
              {site.principal}
            </p>
            <p className="text-sm text-muted-foreground">
              {site.principalRole}, {site.name}
            </p>
          </div>

          <p className="mt-6 text-xs italic text-muted-foreground/80">
            Draft message prepared for the school's review and approval; the
            final approved text will be published here.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
