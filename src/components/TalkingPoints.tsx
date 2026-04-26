import { talkingPoints, questionsToAsk } from '../data/fieldNotes';

export default function TalkingPoints() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-rule border border-rule mb-12">
        <div className="bg-page p-6 sm:p-8">
          <p className="eyebrow mb-4">Say</p>
          <ul className="space-y-3">
            {talkingPoints.say.map((line, i) => (
              <li key={i} className="flex gap-3 text-[15px] text-ink leading-[1.55]">
                <span className="text-muted font-mono shrink-0">+</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card p-6 sm:p-8">
          <p className="eyebrow mb-4">Avoid</p>
          <ul className="space-y-3">
            {talkingPoints.avoid.map((line, i) => (
              <li
                key={i}
                className="flex gap-3 text-[15px] text-graphite leading-[1.55] line-through decoration-muted/40"
              >
                <span className="text-muted font-mono shrink-0 no-underline">−</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className="eyebrow mb-4">Questions to ask the panel</p>
        <ol className="space-y-3 max-w-prose">
          {questionsToAsk.map((q, i) => (
            <li key={i} className="flex gap-4 text-[15px] text-graphite leading-[1.55]">
              <span className="font-mono text-xs text-muted tabular-nums pt-1 shrink-0">
                Q{String(i + 1).padStart(2, '0')}
              </span>
              <span>{q}</span>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
