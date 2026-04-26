// VideoHero — the demo video sits here, per the sketch.
// Drop your <video> file in /public and wire up `videoSrc` below.
// For now this renders a clean placeholder card with the title overlaid.

interface VideoHeroProps {
  title?: string;
  videoSrc?: string; // optional: path under /public, e.g. '/ma-oss-1075-walkthrough.mp4'
  posterSrc?: string;
}

export default function VideoHero({
  title = 'Your first ML Michelangelo OSS pull request: pipeline reruns and auto-flip',
  videoSrc,
  posterSrc,
}: VideoHeroProps) {
  return (
    <section className="border-t border-rule py-12 sm:py-16">
      <div className="mx-auto max-w-notes px-6">
        <p className="eyebrow mb-4">Demo video</p>

        <figure className="bg-card border border-rule">
          <div className="aspect-video w-full bg-ink relative overflow-hidden">
            {videoSrc ? (
              <video
                controls
                poster={posterSrc}
                className="w-full h-full object-cover"
                preload="metadata"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-page px-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-page/60 mb-4">
                    Walkthrough · ~4 min
                  </p>
                  <p className="font-serif text-2xl sm:text-3xl leading-tight max-w-2xl mx-auto">
                    {title}
                  </p>
                  <p className="mt-6 text-xs text-page/50 font-mono">
                    [ video file goes here · /public/walkthrough.mp4 ]
                  </p>
                </div>
              </div>
            )}
          </div>
          <figcaption className="px-6 py-4 border-t border-rule text-sm text-muted flex items-center justify-between">
            <span className="font-mono text-xs">FILE: ma-oss-1075-walkthrough.mp4</span>
            <span className="font-mono text-xs">UBER · MA OSS</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
