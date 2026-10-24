import { Reveal } from "@/components/site/Reveal";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

/** Consistent navy banner at the top of every inner page. */
export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <h1 className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl">
            {title}
          </h1>
          <div className="mt-4 h-px w-40 bg-gradient-to-r from-gold to-transparent" />
          {subtitle && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
