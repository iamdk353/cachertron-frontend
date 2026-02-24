import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pill } from "../pill";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 px-4 backdrop-blur-xs border-b border-border/40">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-sentient mb-6 text-balance">
          Stop Rewriting Infrastructure. <br className="hidden md:inline" />
          <i className="font-light">Start Controlling It.</i>
        </h2>

        <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
          Cachetron gives you the freedom to evolve your backend without
          touching business logic.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link className="contents" href="#integrate">
            <Button className="">[Contact Us]</Button>
          </Link>
          <a
            className="contents"
            href="mailto:?subject=Request%20Technical%20Overview%20-%20Cachetron&body=Hi%20Cachetron%20team%2C%0A%0AI%27d%20like%20to%20request%20the%20technical%20overview.%0A%0AThanks."
          >
            <Pill className="h-17">[Request Technical Overview]</Pill>
          </a>
        </div>
      </div>
    </section>
  );
}
