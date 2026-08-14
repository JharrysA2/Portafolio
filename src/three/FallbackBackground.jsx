export default function FallbackBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink" aria-hidden="true">
      <div className="absolute -left-32 top-10 h-[26rem] w-[26rem] animate-pulse rounded-full bg-acid/10 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-[22rem] w-[22rem] animate-pulse rounded-full bg-acid-dim/20 blur-3xl [animation-delay:1s]" />
      <div className="absolute bottom-0 left-1/4 h-[20rem] w-[20rem] animate-pulse rounded-full bg-acid/10 blur-3xl [animation-delay:2s]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#05070a_85%)]" />
    </div>
  );
}
