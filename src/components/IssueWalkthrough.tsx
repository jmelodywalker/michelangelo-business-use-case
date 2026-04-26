import { issueWalkthrough } from '../data/fieldNotes';

export default function IssueWalkthrough() {
  const issue = issueWalkthrough;

  return (
    <section className="border-t border-rule py-16 sm:py-20">
      <div className="mx-auto max-w-notes px-6">
        <div className="flex items-baseline gap-6 mb-8">
          <span className="font-mono text-sm text-muted tabular-nums">issue</span>
          <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-ink">
            #{issue.number} walkthrough
          </h2>
        </div>

        <div className="card p-6 sm:p-8 mb-8">
          <p className="font-serif text-xl sm:text-2xl leading-snug text-ink mb-4">
            {issue.title}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {issue.labels.map((label) => (
              <span
                key={label}
                className="font-mono text-[10px] uppercase tracking-wider bg-page border border-rule px-2 py-1 text-graphite"
              >
                {label}
              </span>
            ))}
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm border-t border-rule pt-4">
            <div className="flex gap-3">
              <dt className="font-mono text-xs text-muted w-12 shrink-0 pt-0.5">repo:</dt>
              <dd className="min-w-0">
                <a
                  href={issue.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-ink underline decoration-rule underline-offset-4 hover:decoration-ink break-all"
                >
                  github.com/michelangelo-ai/michelangelo
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="font-mono text-xs text-muted w-12 shrink-0 pt-0.5">docs:</dt>
              <dd className="min-w-0">
                <a
                  href={issue.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-ink underline decoration-rule underline-offset-4 hover:decoration-ink break-all"
                >
                  michelangelo-ai.github.io/michelangelo
                </a>
              </dd>
            </div>
            <div className="flex gap-3 sm:col-span-2">
              <dt className="font-mono text-xs text-muted w-12 shrink-0 pt-0.5">issue:</dt>
              <dd className="min-w-0">
                <a
                  href={issue.issueUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-ink underline decoration-rule underline-offset-4 hover:decoration-ink break-all"
                >
                  {issue.issueUrl}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="eyebrow mb-3">The problem</p>
            <p className="font-serif text-[16px] leading-[1.65] text-graphite">
              {issue.problem}
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">The translation</p>
            <p className="font-serif text-[16px] leading-[1.65] text-graphite">
              {issue.translation}
            </p>
          </div>
        </div>

        <div className="border-t border-rule pt-8">
          <p className="eyebrow mb-4">Contributor path</p>
          <ol className="space-y-3 max-w-prose">
            {issue.contributorPath.map((step, i) => (
              <li key={i} className="flex gap-4 text-[15px] text-graphite leading-[1.55]">
                <span className="font-mono text-xs text-muted tabular-nums pt-1 shrink-0 w-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 bg-ink text-page p-6 sm:p-8">
          <p className="font-serif text-xl sm:text-2xl leading-snug">
            {issue.cta}
          </p>
        </div>
      </div>
    </section>
  );
}
