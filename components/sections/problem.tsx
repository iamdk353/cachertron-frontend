export function ProblemSection() {
  return (
    <section id="problem" className="py-24 md:py-32 px-4 bg-background border-b border-border/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-sentient mb-8 text-balance">
          Your Cache Layer Is Tightly <br className="hidden md:inline" />
          <i className="font-light">Coupled to Your Code.</i>
        </h2>

        <div className="space-y-4 text-lg text-foreground/70 font-mono">
          <p>Every cache migration becomes a rewrite.</p>
          <p>Every performance experiment becomes a risk.</p>
          <p>Every infrastructure decision becomes permanent.</p>
        </div>

        <p className="mt-8 text-base md:text-lg text-foreground/60 max-w-2xl">
          Traditional setups bind business logic directly to Redis or Memcached clients — making change expensive and slow.
        </p>
      </div>
    </section>
  );
}
