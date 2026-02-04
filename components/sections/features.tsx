import { ArrowRight, LayoutGrid, Zap, TrendingUp, Lock } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Instant Provider Switching",
      description: "Modify one config value. That's it.",
    },
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: "Clean Architecture",
      description: "Built on Strategy Pattern principles for long-term maintainability.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Safe Performance Testing",
      description: "Benchmark Redis vs Memcached in production-like environments.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Vendor Independence",
      description: "Future-proof your infrastructure decisions.",
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 px-4 bg-background border-b border-border/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-sentient mb-4 text-balance">
          Designed for Scaling <br className="hidden md:inline" />
          <i className="font-light">SaaS Teams.</i>
        </h2>
        <p className="text-foreground/60 mb-16 text-lg">
          Conversion-focused features that reduce migration effort by up to 80%.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-border/40 rounded-lg p-6 hover:border-primary/50 hover:bg-foreground/2 transition-all duration-300"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/60">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-3 text-lg">
          <div className="flex items-start gap-3">
            <span className="text-primary font-bold">•</span>
            <span>Reduce migration effort by up to 80%</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-primary font-bold">•</span>
            <span>Shorten infrastructure experimentation cycles</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-primary font-bold">•</span>
            <span>Avoid long-term cloud lock-in</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-primary font-bold">•</span>
            <span>Improve DevOps agility</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-primary font-bold">•</span>
            <span>Enable safer performance optimization</span>
          </div>
        </div>

        <p className="mt-12 text-lg text-foreground/70 italic">
          This is not a caching tool. It's <span className="text-primary font-semibold">infrastructure insurance.</span>
        </p>
      </div>
    </section>
  );
}
