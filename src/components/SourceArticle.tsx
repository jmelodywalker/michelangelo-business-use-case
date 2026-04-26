import { sourceArticle } from '../data/fieldNotes';

export default function SourceArticle() {
  return (
    <div className="card p-6 sm:p-8">
      <p className="eyebrow mb-4">Primary source</p>
      <p className="font-serif text-xl sm:text-2xl leading-snug text-ink mb-2">
        {sourceArticle.title}
      </p>
      <p className="text-sm text-muted mb-1">{sourceArticle.authors}</p>
      <p className="text-sm text-muted mb-6">
        {sourceArticle.publication} · {sourceArticle.date}
      </p>

      <p className="eyebrow mb-3">Relevant points</p>
      <ul className="space-y-2 mb-6">
        {sourceArticle.relevantPoints.map((point, i) => (
          <li key={i} className="flex gap-3 text-[14.5px] text-graphite leading-[1.55]">
            <span className="text-muted font-mono shrink-0">·</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <a
        href={sourceArticle.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs text-ink underline decoration-rule underline-offset-4 hover:decoration-ink"
      >
        Read source ↗
      </a>
    </div>
  );
}
