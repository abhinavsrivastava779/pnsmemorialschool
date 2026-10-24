import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Phone, GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { TiltImage } from "@/components/site/TiltImage";
import { site, images } from "@/lib/assets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "PNS Memorial School | UP Board English Medium School, Bahraich",
      },
      {
        name: "description",
        content:
          "Welcome to PNS Memorial School, Sufipura, Brahmnipura, Bahraich — UP Board English Medium school from Nursery to Class 8, open 8:00 AM to 2:00 PM. Enquire at 9838719499.",
      },
      { property: "og:title", content: "PNS Memorial School | Bahraich" },
      {
        property: "og:description",
        content:
          "UP Board English Medium school from Nursery to Class 8 in Bahraich, Uttar Pradesh. Timings 8:00 AM – 2:00 PM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden sm:min-h-[85vh]">
        <img
          src={images.heroFront}
          alt="Front of PNS Memorial School"
          className="hero-kenburns absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20">
          <Reveal>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/60 bg-primary/40 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold backdrop-blur">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              {site.board} · {site.classes}
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-6xl">
              PNS Memorial School
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/90 sm:text-lg">
              Nurturing young minds in Bahraich with care, discipline and a
              strong English-medium foundation from Nursery to Class 8.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-lg transition-colors hover:bg-gold-deep hover:text-primary-foreground"
              >
                Enquire Now
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/50 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                View Gallery
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quick facts strip */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
          {[
            {
              icon: Clock,
              title: "School Timings",
              text: site.timings,
            },
            {
              icon: BookOpen,
              title: "Classes",
              text: `${site.classes} · ${site.board}`,
            },
            {
              icon: Phone,
              title: "Admissions Enquiry",
              text: `Call ${site.phone} or send an enquiry`,
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="flex items-center gap-4">
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
      </section>

      {/* Welcome */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <TiltImage
              src={images.campusGroup}
              alt="Students on the school campus"
              className="aspect-[4/3]"
            />
          </Reveal>
          <Reveal delay={150}>
            <p className="text-xs font-bold tracking-[0.2em] text-gold-deep uppercase">
              Welcome to our school
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              A warm, caring place to learn and grow
            </h2>
            <div className="gold-rule mt-5 h-px w-32" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              PNS Memorial School in Sufipura, Brahmnipura, Bahraich welcomes
              children from Nursery to Class 8. As an English-medium school
              affiliated to the UP Board, we focus on steady academic progress,
              good habits and happy classrooms.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our teachers know every child by name, and our days bring together
              lessons, activities, sports and celebrations on one friendly campus.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold-deep transition-colors hover:text-primary"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Leadership messages */}
      <section className="bg-secondary/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Messages from Our Leadership
              </h2>
              <div className="gold-rule mx-auto mt-4 h-px w-40" />
            </div>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {[
              {
                photo: images.director,
                name: site.director,
                role: site.directorRole,
                to: "/directors-message",
                label: "Read the Director's Message",
              },
              {
                photo: images.principal,
                name: site.principal,
                role: site.principalRole,
                to: "/principals-message",
                label: "Read the Principal's Message",
              },
            ].map((person, i) => (
              <Reveal key={person.to} delay={i * 150}>
                <Link
                  to={person.to}
                  className="group flex items-center gap-6 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-lg sm:p-6"
                >
                  <img
                    src={person.photo}
                    alt={`${person.role} of ${site.name}`}
                    className="h-24 w-24 shrink-0 rounded-2xl border border-gold/40 object-cover sm:h-28 sm:w-28"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-display text-xl font-semibold text-primary">
                      {person.name}
                    </p>
                    <p className="text-sm font-semibold text-gold-deep">{person.role}</p>
                    <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors group-hover:text-gold-deep">
                      {person.label}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Life at school */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Life at PNS Memorial School
              </h2>
              <div className="gold-rule mx-auto mt-4 h-px w-40" />
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                Classrooms, assemblies, sports, projects and cultural
                celebrations — every day brings something to smile about.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { src: images.classroomActivity, alt: "Classroom activity" },
              { src: images.assembly, alt: "School assembly" },
              { src: images.culturalPerformance, alt: "Cultural performance" },
            ].map((img, i) => (
              <Reveal key={img.src} delay={i * 140}>
                <TiltImage src={img.src} alt={img.alt} className="aspect-[4/3]" />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-10 text-center">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Explore the full gallery
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="px-4 pb-20 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-7xl rounded-3xl bg-primary px-6 py-14 text-center shadow-xl sm:px-12">
            <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
              We would love to meet you
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/85 sm:text-base">
              Call us on {site.phone} between school hours ({site.timings}) or
              send an enquiry and we will get back to you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${site.phoneIntl}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-colors hover:bg-gold-deep hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {site.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/50 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Send an Enquiry
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
