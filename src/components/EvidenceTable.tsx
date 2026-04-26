import { objectiveMapping } from '../data/fieldNotes';

const confidenceStyles: Record<string, string> = {
  Public: 'bg-card text-graphite',
  Inferred: 'bg-page text-muted border border-rule',
  'Needs validation': 'bg-page text-ink border border-ink border-dashed',
};

export default function EvidenceTable() {
  return (
    <div className="border border-rule overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-card">
          <tr className="text-left">
            <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-muted border-b border-rule">
              Objective
            </th>
            <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-muted border-b border-rule">
              MA function
            </th>
            <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-muted border-b border-rule">
              OSS angle
            </th>
            <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-muted border-b border-rule">
              Talking point
            </th>
            <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-muted border-b border-rule whitespace-nowrap">
              Confidence
            </th>
          </tr>
        </thead>
        <tbody>
          {objectiveMapping.map((row, i) => (
            <tr key={i} className="align-top border-b border-rule last:border-b-0">
              <td className="px-4 py-4 text-ink font-medium">{row.objective}</td>
              <td className="px-4 py-4 text-graphite">{row.function}</td>
              <td className="px-4 py-4 text-graphite">{row.ossAngle}</td>
              <td className="px-4 py-4 text-graphite font-serif text-[15px] leading-[1.5]">
                {row.talkingPoint}
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span
                  className={`font-mono text-[10px] uppercase tracking-wider px-2 py-1 ${confidenceStyles[row.confidence]}`}
                >
                  {row.confidence}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
