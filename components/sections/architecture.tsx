export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 md:py-32 px-4 bg-background border-b border-border/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-sentient mb-16 text-balance">
          A Thin Layer. <br className="hidden md:inline" />
          <i className="font-light">A Massive Advantage.</i>
        </h2>

        <div className="bg-foreground/5 border border-border/40 rounded-lg p-8 md:p-12">
          <div className="space-y-6 text-center">
            <div className="text-lg font-mono">Application</div>
            <div className="text-foreground/50">↓</div>
            <div className="text-lg font-mono text-primary">Cachetron Interface</div>
            <div className="text-foreground/50">↓</div>
            <div className="text-lg font-mono">Provider Adapter</div>
            <div className="text-foreground/50">↓</div>
            <div className="text-lg font-mono">Redis | Memcached</div>
          </div>
        </div>

        <p className="mt-12 text-base md:text-lg text-foreground/70">
          Cachetron isolates change at the lowest possible layer — keeping your core system stable.
        </p>
      </div>
    </section>
  );
}
