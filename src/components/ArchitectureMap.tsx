import { architectureLayers } from '../data/fieldNotes';

export default function ArchitectureMap() {
  return (
    <div className="border border-rule">
      {architectureLayers.map((layer, i) => (
        <div
          key={layer.title}
          className={`grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-0 ${
            i !== architectureLayers.length - 1 ? 'border-b border-rule' : ''
          }`}
        >
          <div className="bg-card px-4 py-4 border-b sm:border-b-0 sm:border-r border-rule">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted mb-1">
              Layer {String(architectureLayers.length - i).padStart(2, '0')}
            </p>
            <p className="font-medium text-ink text-[15px]">{layer.title}</p>
          </div>
          <div className="px-4 py-4 flex flex-wrap gap-x-4 gap-y-2">
            {layer.items.map((item) => (
              <span key={item} className="font-mono text-xs text-graphite">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
