import { hashtags, meta } from '../data/fieldNotes';

export default function Footer() {
  return (
    <footer className="border-t border-rule mt-16 pt-12 pb-20">
      <div className="mx-auto max-w-notes px-6">
        <div className="flex flex-wrap gap-x-3 gap-y-2 mb-8">
          {hashtags.map((tag) => (
            <span key={tag} className="font-mono text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs text-muted">
          <p>
            Built with React, TypeScript, and Tailwind as a static field-notes artifact for AI
            infrastructure analysis.
          </p>
          <p className="sm:text-right">
            {meta.disclaimer}
          </p>
        </div>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {meta.author} · jademelody.com
        </p>
      </div>
    </footer>
  );
}
