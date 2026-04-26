import { meta } from '../data/fieldNotes';

export default function Header() {
  return (
    <header className="border-b border-rule pt-16 pb-12 sm:pt-24 sm:pb-16">
      <div className="mx-auto max-w-notes px-6">
        <p className="eyebrow mb-6">Field report · {meta.publishedDate}</p>
        <h1 className="text-[40px] sm:text-[56px] leading-[1.05] font-semibold tracking-tight text-ink">
          {meta.title}
        </h1>
        <p className="mt-6 max-w-prose font-serif text-[19px] leading-[1.55] text-graphite">
          {meta.subtitle}
        </p>
        <p className="mt-3 text-sm text-muted">By {meta.author}</p>

        <div className="mt-10 flex flex-wrap gap-2">
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted border border-rule px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-10 text-xs text-muted italic max-w-prose">
          {meta.disclaimer}
        </p>
      </div>
    </header>
  );
}
