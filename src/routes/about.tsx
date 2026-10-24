import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { TiltImage } from "@/components/site/TiltImage";
import { PageHeader } from "@/components/site/PageHeader";
import { site, images } from "@/lib/assets";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | PNS Memorial School, Bahraich" },
      {
        name: "description",
        content:
          "About PNS Memorial School, Sufipura, Brahmnipura, Bahraich — UP Board English Medium school for Nursery to Class 8, led by Dr. Virendra Kumar Srivastava and Principal Kalpana Srivastava.",
      },
      { property: "og:title", content: "About PNS Memorial School" },
      {
        property: "og:description",
        content:
          "An English-medium UP Board school in Bahraich for children from Nursery to Class 8.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        title="About Our School"
        subtitle={`${site.name} — ${site.board}, ${site.classes}, in Sufipura, Brahmnipura, Bahraich, Uttar Pradesh.`}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Who we are
            </h2>
            <div className="gold-rule mt-5 h-px w-32" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              PNS Memorial School is an English-medium school affiliated to the
              UP Board, serving families in and around Sufipura, Brahmnipura,
              Bahraich. We teach children from Nursery right up to Class 8,
              with school hours from {site.timings}.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our campus is a colourful, welcoming space where children learn
              in bright classrooms, take part in assemblies, sports, exhibitions
              and cultural events, and grow up with good values along with
              good marks.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The school is led by {site.directorRole.toLowerCase()}{" "}
              <strong className="text-foreground">{site.director}</strong> and
              Principal <strong className="text-foreground">{site.principal}</strong>.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <TiltImage
              src={images.entranceDisplay}
              alt="Entrance of PNS Memorial School"
              className="aspect-[3/4] max-h-[560px]"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/50 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-3">
          {[
            {
              title: "Our Aim",
              text: "To give every child a strong English-medium foundation and the confidence to keep learning throughout life.",
            },
            {
              title: "Our Approach",
              text: "Caring teachers, activity-based lessons and regular attention to each student's progress, in a disciplined and happy environment.",
            },
            {
              title: "Our Campus",
              text: "A lively campus with classrooms, assemblies, sports activities, project exhibitions and cultural celebrations through the year.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 130}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-sm">
                <h3 className="font-display text-2xl font-semibold text-primary">
                  {item.title}
                </h3>
                <div className="mt-3 h-px w-16 bg-gold" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <TiltImage
              src={images.achievement}
              alt="Student achievement display"
              className="aspect-[2/3]"
            />
          </Reveal>
          <Reveal delay={150} className="lg:col-span-3">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Our students, our pride
            </h2>
            <div className="gold-rule mt-5 h-px w-32" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              From classroom work to project exhibitions and cultural
              performances, our students take part in everything the school
              year brings. Walk through our gallery to see assemblies,
              sports, exhibitions and celebrations at PNS Memorial School.
            </p>
            <Link
              to="/gallery"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-soft"
            >
              View the Gallery
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
