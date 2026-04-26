import type { ComponentType } from 'react';
import { projects } from '../data/fieldNotes';

// Mini SVG glyphs — abstract diagrams, one per project, matching the sketch.

function TokenGlyph() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-20" aria-hidden="true">
      {/* token bars increasing in length */}
      <rect x="8" y="20" width="20" height="6" fill="#111" />
      <rect x="8" y="32" width="44" height="6" fill="#111" />
      <rect x="8" y="44" width="68" height="6" fill="#111" />
      <rect x="8" y="56" width="92" height="6" fill="#111" />
      <text x="8" y="14" fontFamily="monospace" fontSize="8" fill="#5F6368">cost($) →</text>
    </svg>
  );
}

function ContextEvalGlyph() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-20" aria-hidden="true">
      {/* corpus circle, query arrow, gate */}
      <circle cx="28" cy="40" r="18" fill="none" stroke="#111" strokeWidth="1.5" />
      <text x="28" y="44" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#111">
        corpus
      </text>
      <line x1="50" y1="40" x2="78" y2="40" stroke="#111" strokeWidth="1.5" />
      <polygon points="78,36 86,40 78,44" fill="#111" />
      <rect x="88" y="28" width="24" height="24" fill="none" stroke="#111" strokeWidth="1.5" />
      <text x="100" y="44" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#111">
        ✓/✗
      </text>
    </svg>
  );
}

function TraceBenchGlyph() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-20" aria-hidden="true">
      {/* two overlapping line traces — drift visualization */}
      <polyline
        points="8,50 24,42 40,46 56,38 72,42 88,32 104,36 112,30"
        fill="none"
        stroke="#111"
        strokeWidth="1.5"
      />
      <polyline
        points="8,52 24,48 40,52 56,46 72,52 88,46 104,52 112,48"
        fill="none"
        stroke="#5F6368"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
      <text x="8" y="14" fontFamily="monospace" fontSize="8" fill="#5F6368">v(n) vs v(n-1)</text>
    </svg>
  );
}

const glyphs: Record<string, ComponentType> = {
  'Token-estimator': TokenGlyph,
  'ContextEval': ContextEvalGlyph,
  'Trace-bench': TraceBenchGlyph,
};

export default function ProjectsRow() {
  return (
    <section className="py-12 sm:py-16 border-t border-rule">
      <div className="mx-auto max-w-notes px-6">
        <p className="eyebrow mb-6">Supporting work · public repos</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-rule border border-rule">
          {projects.map((project) => {
            const Glyph = glyphs[project.name];
            return (
              <a
                key={project.name}
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-page p-6 hover:bg-card transition-colors"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-mono text-[13px] tracking-tight text-ink">
                    {project.name}
                  </h3>
                  <span className="font-mono text-[10px] text-muted">↗ repo</span>
                </div>
                <p className="text-xs text-muted uppercase tracking-wider mb-4">
                  {project.role}
                </p>
                {Glyph && <Glyph />}
                <p className="mt-4 text-sm text-graphite leading-relaxed">
                  {project.summary}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
