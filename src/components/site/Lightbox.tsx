import { useCallback, useEffect } from "react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

/** Click-to-enlarge viewer with keyboard and button navigation. */
export function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const prev = useCallback(() => {
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  const next = useCallback(() => {
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const image = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-primary/90 p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-2xl text-primary-foreground transition-colors hover:bg-primary-foreground/20"
      >
        ×
      </button>

      {images.length > 1 && (
        <button
          type="button"
          aria-label="Previous photo"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-2xl text-primary-foreground transition-colors hover:bg-primary-foreground/20 sm:left-6"
        >
          ‹
        </button>
      )}

      <figure
        className="max-h-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className="max-h-[82vh] w-auto max-w-full rounded-xl object-contain shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        />
        <figcaption className="mt-3 text-center text-sm text-primary-foreground/90">
          {image.alt}
          <span className="ml-2 opacity-70">
            ({index + 1}/{images.length})
          </span>
        </figcaption>
      </figure>

      {images.length > 1 && (
        <button
          type="button"
          aria-label="Next photo"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-2xl text-primary-foreground transition-colors hover:bg-primary-foreground/20 sm:right-6"
        >
          ›
        </button>
      )}
    </div>
  );
}
