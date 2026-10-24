import { useRef, type PointerEvent } from "react";

interface TiltImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Max tilt angle in degrees. Keep it subtle. */
  maxTilt?: number;
}

/**
 * A photograph inside a card that tilts gently toward the pointer,
 * giving a lightweight 3D effect. Falls back to a static card on touch.
 */
export function TiltImage({ src, alt, className = "", maxTilt = 5 }: TiltImageProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card || event.pointerType === "touch") return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateY = (x * maxTilt * 2).toFixed(2);
    const rotateX = (-y * maxTilt * 2).toFixed(2);
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className={`tilt-wrap ${className}`}>
      <div
        ref={cardRef}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        className="tilt-card img-hover-zoom h-full w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
      >
        <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      </div>
    </div>
  );
}
