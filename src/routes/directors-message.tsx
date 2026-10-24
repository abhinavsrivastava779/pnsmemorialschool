import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { site, images } from "@/lib/assets";

export const Route = createFileRoute("/directors-message")({
  head: () => ({
    meta: [
      { title: "Director's Message | PNS Memorial School" },
      {
        name: "description",
        content:
          "A message from Dr. Virendra Kumar Srivastava, Director & Manager of PNS Memorial School, Bahraich.",
      },
      { property: "og:title", content: "Director's Message — PNS Memorial School" },
      {
        property: "og:description",
        content:
          "Words of welcome and guidance from the Director & Manager of PNS Memorial School, Bahraich.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DirectorsMessage,
});

function DirectorsMessage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="lg:sticky lg:top-28">
            <img
              src={images.director}
              alt="Dr. Virendra Kumar Srivastava, Director & Manager of PNS Memorial School"
              className="w-full rounded-3xl border border-gold/40 object-cover shadow-lg"
              style={{ aspectRatio: "3/4" }}
            />
            <div className="mt-6 text-center">
              <p className="font-display text-2xl font-bold text-primary">
                {site.director}
              </p>
              <p className="mt-1 text-sm font-semibold tracking-wide text-gold-deep uppercase">
                {site.directorRole}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <p className="text-xs font-bold tracking-[0.2em] text-gold-deep uppercase">
            Director's Message
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            "Education with care, character and commitment"
          </h1>
          <div className="gold-rule mt-5 h-px w-32" />

          <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Dear parents and well-wishers,
            </p>
            <p>
              It gives me great pleasure to welcome you to PNS Memorial School.
              A school is not just a place where children complete their
              lessons — it is where their habits are formed, their confidence
              grows and their character takes shape. Since our beginning, our
              effort has been to keep these early and middle school years full
              of learning, warmth and discipline.
            </p>
            <p>
              We believe that every child who walks through our gate can learn
              and achieve. Our teachers work closely with each student, and we
              keep our doors open to parents, because education succeeds best
              when the school and the family move forward together.
            </p>
            <p>
              I invite you to visit our campus in Sufipura, Brahmnipura,
              Bahraich, meet our teachers, and see for yourself the care with
              which your child will be taught and guided.
            </p>
            <p className="font-semibold text-foreground">
              With best wishes,
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-5">
            <p className="font-display text-xl font-semibold text-primary">
              {site.director}
            </p>
            <p className="text-sm text-muted-foreground">
              {site.directorRole}, {site.name}
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
