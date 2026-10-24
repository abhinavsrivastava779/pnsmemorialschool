import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { TiltImage } from "@/components/site/TiltImage";
import { site, staffGallery } from "@/lib/assets";

export const Route = createFileRoute("/teachers-staff")({
  head: () => ({
    meta: [
      { title: "Teachers & Staff | PNS Memorial School, Bahraich" },
      {
        name: "description",
        content:
          "Meet the teachers and staff of PNS Memorial School, Bahraich — the team that guides children from Nursery to Class 8.",
      },
      { property: "og:title", content: "Teachers & Staff — PNS Memorial School" },
      {
        property: "og:description",
        content:
          "The team that guides children from Nursery to Class 8 at PNS Memorial School, Bahraich.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeachersStaff,
});

function TeachersStaff() {
  return (
    <>
      <PageHeader
        title="Teachers & Staff"
        subtitle="The team behind our classrooms — teachers and staff who know every child by name."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <TiltImage
              src={staffGallery[0].src}
              alt={staffGallery[0].alt}
              className="aspect-[16/10]"
            />
          </Reveal>
          <Reveal delay={150}>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Guided by caring hands
            </h2>
            <div className="gold-rule mt-5 h-px w-32" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our teachers and staff give PNS Memorial School its warmth. From
              the first day in Nursery to the final years of middle school,
              they plan lessons patiently, encourage questions and keep in
              close touch with parents about each child's progress.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The school is led by {site.directorRole.toLowerCase()}{" "}
              <strong className="text-foreground">{site.director}</strong> and
              Principal <strong className="text-foreground">{site.principal}</strong>,
              supported by a team of teachers and staff who work together
              across classrooms, events and everyday school life.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/50 pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-0">
          <Reveal>
            <div className="text-center sm:pt-16">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Our team at work and at school events
              </h2>
              <div className="gold-rule mx-auto mt-4 h-px w-40" />
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {staffGallery.slice(1).map((image, i) => (
              <Reveal key={image.src} delay={(i % 3) * 120}>
                <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <div className="img-hover-zoom aspect-[16/9]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-xs font-medium text-muted-foreground">
                    {image.alt}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-soft"
              >
                Get in touch with us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
