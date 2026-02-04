import { useRef } from "react";
import VariableProximity from "../VariableProximity";

export function SolutionSection() {
  const containerRef = useRef(null);
  return (
    <section
      id="solution"
      className="py-24 md:py-32 px-4 bg-background border-b border-border/40"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-sentient mb-8 text-balance">
          Decouple Infrastructure from <br className="hidden md:inline" />
          <i className="font-light">Application Logic.</i>
        </h2>

        <p className="text-base md:text-lg text-foreground/70 max-w-2xl mb-8">
          Cachetron introduces a unified caching abstraction layer that isolates
          provider-specific logic from your business code.
        </p>

        <div className="bg-foreground/5 border border-border/40 rounded-lg p-6 md:p-8 mb-8">
          <p className="font-mono text-sm text-foreground/60 mb-2">
            Switch providers by updating:
          </p>
          <code className="block bg-background rounded px-4 py-3 font-mono text-sm text-primary">
            "cacheProvider": "redis"
          </code>
        </div>

        <div className="space-y-3 text-foreground/70">
          <p className="text-base md:text-lg">
            No refactoring. No redeploying large code changes.
          </p>
        </div>
      </div>
    </section>
  );
}
