"use client";

import { AppNav } from "@/components/AppNav";
import { Hero } from "@/components/hero";
import { ArchitectureSection } from "@/components/sections/architecture";
import { ComparisonSection } from "@/components/sections/comparison";
import { CTASection } from "@/components/sections/cta";
import { FooterSection } from "@/components/sections/footer";
import { PricingSection } from "@/components/sections/pricing";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <AppNav />
      <Hero />
      <Leva hidden />
      <ProblemSection />
      <SolutionSection />
      <ArchitectureSection />
      <ComparisonSection />
      <PricingSection />
      <CTASection />
      <FooterSection />
    </>
  );
}
