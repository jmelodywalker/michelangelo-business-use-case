import type { ReactNode } from 'react';

interface SectionProps {
  number: string;
  title: string;
  children: ReactNode;
  intro?: string;
}

export default function Section({ number, title, children, intro }: SectionProps) {
  return (
    <section className="border-t border-rule py-16 sm:py-20">
      <div className="mx-auto max-w-notes px-6">
        <div className="flex items-baseline gap-6 mb-8">
          <span className="font-mono text-sm text-muted tabular-nums">§ {number}</span>
          <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-ink">
            {title}
          </h2>
        </div>
        {intro && (
          <p className="font-serif text-[18px] leading-[1.6] text-graphite max-w-prose mb-10">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
