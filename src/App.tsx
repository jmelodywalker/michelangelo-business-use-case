import Header from './components/Header';
import VideoHero from './components/VideoHero';
import ProjectsRow from './components/ProjectsRow';
import IssueWalkthrough from './components/IssueWalkthrough';
import Section from './components/Section';
import EvidenceTable from './components/EvidenceTable';
import ArchitectureMap from './components/ArchitectureMap';
import TalkingPoints from './components/TalkingPoints';
import SourceArticle from './components/SourceArticle';
import Footer from './components/Footer';
import {
  executiveSummary,
  ossVsInHouse,
  publicVsInferred,
  reusableAngles,
} from './data/fieldNotes';

export default function App() {
  return (
    <div className="min-h-screen bg-page text-ink">
      <Header />

      {/* HERO: video, three project cards, issue walkthrough — the sketch order */}
      <VideoHero />
      <ProjectsRow />
      <IssueWalkthrough />

      {/* DEEPER ANALYSIS — for the curious reader / portfolio shareability */}
      <Section number="01" title="Executive summary">
        <ul className="space-y-4 max-w-prose">
          {executiveSummary.map((line, i) => (
            <li key={i} className="flex gap-4 text-[16px] text-graphite leading-[1.6] font-serif">
              <span className="font-mono text-xs text-muted tabular-nums pt-1 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        number="02"
        title="Corporate objective mapping"
        intro="A read of how Michelangelo functions might map to Uber's stated technology objectives, with confidence ratings on each row."
      >
        <EvidenceTable />
      </Section>

      <Section
        number="03"
        title="Architecture interpretation"
        intro="Layered view of the platform stack as described in public engineering materials. Read bottom-up — hardware to business use case."
      >
        <ArchitectureMap />
      </Section>

      <Section
        number="04"
        title="Open source vs in-house"
        intro="Two columns. The strategic value lives in the conversion between them."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-rule border border-rule mb-8">
          <div className="bg-page p-6 sm:p-8">
            <p className="eyebrow mb-4">Open source provides</p>
            <ul className="space-y-2">
              {ossVsInHouse.oss.map((item, i) => (
                <li key={i} className="text-[15px] text-graphite leading-[1.55]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-6 sm:p-8">
            <p className="eyebrow mb-4">In-house platform provides</p>
            <ul className="space-y-2">
              {ossVsInHouse.inHouse.map((item, i) => (
                <li key={i} className="text-[15px] text-graphite leading-[1.55]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="font-serif text-[18px] leading-[1.55] text-ink max-w-prose italic border-l-2 border-ink pl-5">
          {ossVsInHouse.closer}
        </p>
      </Section>

      <Section number="05" title="Public vs inferred vs needs validation">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule">
          <div className="bg-page p-6">
            <p className="eyebrow mb-4">Public</p>
            <ul className="space-y-3">
              {publicVsInferred.public.map((item, i) => (
                <li key={i} className="text-sm text-graphite leading-[1.55]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card p-6">
            <p className="eyebrow mb-4">Inferred</p>
            <ul className="space-y-3">
              {publicVsInferred.inferred.map((item, i) => (
                <li key={i} className="text-sm text-graphite leading-[1.55]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-page p-6 border-t md:border-t-0 md:border-l border-dashed border-ink">
            <p className="eyebrow mb-4">Needs validation</p>
            <ul className="space-y-3">
              {publicVsInferred.needsValidation.map((item, i) => (
                <li key={i} className="text-sm text-graphite leading-[1.55]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        number="06"
        title="Talking points + questions"
        intro="What to lead with. What to step around. What to ask back."
      >
        <TalkingPoints />
      </Section>

      <Section
        number="07"
        title="Reusable content angles"
        intro="The work above is portable. Here is where each piece can land."
      >
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
          {reusableAngles.map((angle, i) => (
            <li key={i} className="bg-page p-5 flex items-baseline gap-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted shrink-0 w-32">
                {angle.format}
              </span>
              <span className="font-serif text-[16px] text-ink leading-snug">{angle.title}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section number="08" title="Source article">
        <SourceArticle />
      </Section>

      <Footer />
    </div>
  );
}
