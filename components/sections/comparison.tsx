import { CheckCircle, X } from "lucide-react";

export function ComparisonSection() {
  const features = [
    { name: "Switch Providers", traditional: "Rewrite Required", cachetron: "Config Change" },
    { name: "Downtime Risk", traditional: "High", cachetron: "Minimal" },
    { name: "Vendor Lock-In", traditional: "Yes", cachetron: "No" },
    { name: "Infra Flexibility", traditional: "Low", cachetron: "High" },
  ];

  return (
    <section id="comparison" className="py-24 md:py-32 px-4 bg-background border-b border-border/40">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-sentient mb-4 text-balance">
          Why Cachetron <br className="hidden md:inline" />
          <i className="font-light">Stands Apart.</i>
        </h2>
        <p className="text-foreground/60 mb-12 text-lg">
          Compare traditional cache setups with Cachetron's abstraction layer approach.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/40">
                <th className="text-left py-4 px-4 font-semibold">Feature</th>
                <th className="text-left py-4 px-4 font-semibold">Traditional Setup</th>
                <th className="text-left py-4 px-4 font-semibold text-primary">Cachetron</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-border/40 hover:bg-foreground/2">
                  <td className="py-4 px-4">{feature.name}</td>
                  <td className="py-4 px-4 text-foreground/60">{feature.traditional}</td>
                  <td className="py-4 px-4 text-primary font-semibold">{feature.cachetron}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
