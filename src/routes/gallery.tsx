import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { Lightbox } from "@/components/site/Lightbox";
import { mainGallery } from "@/lib/assets";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery | PNS Memorial School, Bahraich" },
      {
        name: "description",
        content:
          "Photos from PNS Memorial School, Bahraich — classrooms, assemblies, sports, project exhibitions and cultural celebrations.",
      },
      { property: "og:title", content: "Photo Gallery — PNS Memorial School" },
      {
        property: "og:description",
        content:
          "Classrooms, assemblies, sports, exhibitions and cultural events at PNS Memorial School, Bahraich.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <PageHeader
        title="Photo Gallery"
        subtitle="Glimpses of school life — classrooms, assemblies, sports, projects and celebrations at PNS Memorial School."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
            {mainGallery.map((image, i) => (
              <Reveal key={image.src + i} delay={(i % 4) * 90}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="img-hover-zoom group block w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
                  aria-label={`Enlarge photo: ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform"
                  />
                  <span className="block px-3 py-2.5 text-left text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
                    {image.alt}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Click any photo to view it enlarged. Use the arrow keys to browse.
          </p>
        </div>
      </section>

      {openIndex !== null && (
        <Lightbox
          images={mainGallery}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </>
  );
}
