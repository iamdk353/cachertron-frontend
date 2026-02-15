import { ArrowRightLeft, CheckCircle, X } from "lucide-react";
import CardSwap, { Card } from "../CardSwap";
import {
  IconArrowsLeftRight,
  IconShieldCheck,
  IconLockOpen,
  IconLayersLinked,
} from "@tabler/icons-react";

export function ComparisonSection() {
  const features = [
    {
      name: "Switch Providers",
      traditional: "Rewrite Required",
      cachetron: "Config Change",
    },
    { name: "Downtime Risk", traditional: "High", cachetron: "Minimal" },
    { name: "Vendor Lock-In", traditional: "Yes", cachetron: "No" },
    { name: "Infra Flexibility", traditional: "Low", cachetron: "High" },
  ];

  return (
    <section
      id="comparison"
      className="py-20 md:py-24 px-4 bg-background border-b border-border/40"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-2 md:flex-row md:gap-0">
        <div>
          {" "}
          <h2 className="text-4xl md:text-5xl font-sentient mb-4 text-balance">
            Why Cachetron <br className="hidden md:inline" />
            <i className="font-light">Stands Apart.</i>
          </h2>
          <p className="text-foreground/60 mb-12 text-lg">
            Compare traditional cache setups with Cachetron's abstraction layer
            approach.
          </p>
        </div>

        <div
          style={{ height: "400px", position: "relative" }}
          className="-mt-70 md:-mt-40 md:ml-70"
        >
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card className="p-6 border border-border/40 hover:border-primary/50 transition-all duration-300">
              <div className="w-full pb-4 flex items-center border-b border-border/40 mb-4">
                <IconArrowsLeftRight className="text-primary" size={22} />
                <p className="pl-3 font-semibold">Switch Providers</p>
              </div>

              <ul className="space-y-2 text-sm text-foreground/70 list-disc pl-5">
                <li>Change backend via config.json</li>
                <li>No business logic changes</li>
                <li>Deploy instantly without rewrites</li>
              </ul>
            </Card>
            <Card className="p-6 border border-border/40 hover:border-primary/50 transition-all duration-300">
              <div className="w-full pb-4 flex items-center border-b border-border/40 mb-4">
                <IconShieldCheck className="text-primary" size={22} />
                <p className="pl-3 font-semibold">Minimal Downtime Risk</p>
              </div>

              <ul className="space-y-2 text-sm text-foreground/70 list-disc pl-5">
                <li>No large-scale rewrites</li>
                <li>Safer deployments</li>
                <li>Reduced migration instability</li>
              </ul>
            </Card>
            <Card className="p-6 border border-border/40 hover:border-primary/50 transition-all duration-300">
              <div className="w-full pb-4 flex items-center border-b border-border/40 mb-4">
                <IconLockOpen className="text-primary" size={22} />
                <p className="pl-3 font-semibold">No Vendor Lock-In</p>
              </div>

              <ul className="space-y-2 text-sm text-foreground/70 list-disc pl-5">
                <li>Provider-agnostic architecture</li>
                <li>Future-ready infrastructure</li>
                <li>Freedom to evolve stack</li>
              </ul>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
}
