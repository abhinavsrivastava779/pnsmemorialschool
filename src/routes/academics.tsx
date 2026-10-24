import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, BookOpen } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { TiltImage } from "@/components/site/TiltImage";
import { PageHeader } from "@/components/site/PageHeader";
import { site, images } from "@/lib/assets";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics | PNS Memorial School, Bahraich" },
      {
        name: "description",
        content:
          "Academics at PNS Memorial School — UP Board English Medium classes from Nursery to Class 8, school timings 8:00 AM to 2:00 PM.",
      },
      { property: "og:title", content: "Academics at PNS Memorial School" },
      {
        property: "og:description",
        content:
          "English-medium UP Board classes from Nursery to Class 8 in Bahraich.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Academics,
});

function Academics() {
  return (
    <>
      <PageHeader
        title="Academics"
        subtitle={`${site.board} classes from ${site.classes}. School timings: ${site.timings}.`}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: BookOpen,
                  title: "Medium & Board",
                  text: site.board,
                },
                {
                  icon: Clock,
                  title: "School Hours",
                  text: site.timings,
                },
                {
                  icon: BookOpen,
                  title: "Classes Offered",
                  text: site.classes,
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 120}>
                  <div className="flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold text-primary">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Our Classrooms
              </h2>
              <div className="gold-rule mx-auto mt-4 h-px w-40" />
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                Learning at every stage — from the first years in Nursery to
                the middle school classes — is active, guided and personal.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                src: images.classroomActivity,
                alt: "Activity-based learning in the classroom",
                stage: "Early Years",
                text: "Nursery onwards — learning through play, stories, songs and hands-on activities that build language and confidence.",
              },
              {
                src: images.classroomLearning,
                alt: "Students learning in class",
                stage: "Primary Classes",
                text: "Classes 1 to 5 — strong foundations in English, Hindi and Mathematics, with regular reading, writing and practice.",
              },
              {
                src: images.classroomTeaching,
                alt: "Teacher teaching in the classroom",
                stage: "Middle Classes",
                text: "Classes 6 to 8 — subject teaching with attention to study habits, understanding and exam readiness for the years ahead.",
              },
            ].map((card, i) => (
              <Reveal key={card.stage} delay={i * 140}>
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                  <div className="img-hover-zoom aspect-[4/3]">
                    <img
                      src={card.src}
                      alt={card.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-primary">
                      {card.stage}
                    </h3>
                    <div className="mt-2 h-px w-12 bg-gold" />
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {card.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-gold/40 bg-card p-8 text-center shadow-sm sm:p-10">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Admissions enquiry
            </h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              For details about classes, seats and the admission process, call
              the school or send an enquiry — we will respond during school hours.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-colors hover:bg-gold-deep hover:text-primary-foreground"
            >
              Send an Enquiry
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
