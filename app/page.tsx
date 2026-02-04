"use client";

import { Hero } from "@/components/hero";
import { ArchitectureSection } from "@/components/sections/architecture";
import { ComparisonSection } from "@/components/sections/comparison";
import { CTASection } from "@/components/sections/cta";
import { FooterSection } from "@/components/sections/footer";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <Hero />
      <Leva hidden />
      <ProblemSection />
      <SolutionSection />
      <ArchitectureSection />
      <ComparisonSection />
      <CTASection />
      <FooterSection />
    </>
  );
}
