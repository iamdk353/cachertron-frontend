"use client";

import Link from "next/link";
import { GL } from "./gl";
import { Button } from "./ui/button";
import { useState } from "react";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyInstallCommand = async () => {
    try {
      await navigator.clipboard.writeText("npm i cachetron");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className=" min-h-screen flex justify-center ">
      <GL hovering={hovering} />

      <div className="text-center relative mt-20">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Unlock your <br />
          <i className="font-light">Infrastructure </i> Freedom
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground text-shadow-2xl text-balance mt-8 max-w-[440px] mx-auto">
          Through vendor-agnostic caching infrastructure built for scalable
          backends
        </p>

        <div className="mt-8 mx-auto max-w-[440px] rounded-2xl border border-border/40 bg-background/70 backdrop-blur-sm px-4 py-4 text-left shadow-lg">
          <button
            type="button"
            onClick={handleCopyInstallCommand}
            className="cursor-copy mt-3 w-full overflow-x-auto rounded-xl border border-border/40 bg-foreground/5 px-3 py-2 text-left font-mono text-sm text-foreground/85 transition-colors hover:bg-foreground/10"
            aria-label="Copy npm install command"
          >
            <code>{copied ? "Copied!" : "npm i cachetron"}</code>
          </button>
        </div>

        <Link className="contents max-sm:hidden" href="/#contact">
          <Button
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Contact Us]
          </Button>
        </Link>
        <Link className="contents sm:hidden " href="/#contact">
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Contact Us]
          </Button>
        </Link>
      </div>
    </div>
  );
}
