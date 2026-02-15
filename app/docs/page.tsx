"use client";

import Link from "next/link";
import { useState } from "react";

function CodeBlock({ title, code }: { title?: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="bg-foreground/5 border border-border/40 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border/40">
        <p className="text-xs text-foreground/60 font-mono">{title}</p>
        <button
          type="button"
          onClick={handleCopy}
          className="text-[10px] uppercase tracking-widest bg-primary/20 text-primary px-2 py-1 rounded hover:bg-primary/30 transition-colors"
          aria-label="Copy code block"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="px-4 py-3 text-sm text-foreground/80 overflow-x-auto">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  );
}

export default function DocsPage() {
  const navItems = [
    { label: "Home", href: "/", isRoute: true },
    { label: "Introduction", href: "#introduction" },
    { label: "Overview", href: "#overview" },
    { label: "Key Features", href: "#key-features" },
    { label: "Installation", href: "#installation" },
    { label: "Getting Started", href: "#getting-started" },
    { label: "Core Operations", href: "#core-operations" },
    { label: "Cache Admin Config Route", href: "#admin-route" },
    { label: "Metrics & ML", href: "#metrics-ml" },
    { label: "Monitoring", href: "#monitoring" },
    { label: "CLI", href: "#cli" },
    { label: "Demo", href: "#demo" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="container py-12 md:py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground/50">
          Documentation
        </p>
        <h1 className="text-3xl md:text-5xl font-sentient mt-3">
          Cachetron - Documentation
        </h1>
        <p className="mt-4 text-foreground/70 max-w-2xl">
          A pluggable caching abstraction layer with ML-powered TTL prediction.
        </p>
      </section>

      <section className="container pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
        <div className="lg:hidden">
          <details className="bg-foreground/5 border border-border/40 rounded-lg px-4 py-3">
            <summary className="cursor-pointer text-sm text-foreground/70">
              Docs Menu
            </summary>
            <div className="mt-3 space-y-2 text-sm text-foreground/70">
              {navItems.map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block hover:text-foreground"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </details>
        </div>
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-3 text-sm text-foreground/70">
            <p className="text-foreground/40 uppercase tracking-[0.2em] text-xs">
              Docs
            </p>
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block hover:text-foreground"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block hover:text-foreground"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </aside>

        <div className="space-y-14">
          <section id="introduction" className="space-y-6 scroll-mt-24">
            <div id="overview" className="scroll-mt-24" />
            <h2 className="text-2xl md:text-3xl font-sentient">
              Introduction - Overview
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              Modern applications depend heavily on caching to deliver fast,
              scalable, and efficient performance. However, integrating directly
              with a specific caching technology - such as Redis or Memcached -
              often results in tight coupling, making it difficult to switch
              providers or extend the system over time. Developers also face the
              challenge of manually setting TTL (Time-To-Live) values, which can
              lead to poor cache utilization, wasted memory, and inconsistent
              performance across the application. This tool addresses these
              challenges by introducing a pluggable caching abstraction layer
              combined with intelligent, machine-learning-based TTL prediction.
              It provides a unified and flexible approach to caching that adapts
              to application behavior, reduces manual effort, and improves
              overall system efficiency.
            </p>
          </section>

          <section id="key-features" className="space-y-6 scroll-mt-24">
            <h3 className="text-xl md:text-2xl font-sentient">Key Features</h3>
            <ul className="list-disc pl-5 text-foreground/70 space-y-2">
              <li>Pluggable Caching Abstraction Layer</li>
              <li>Decoupled Cache Architecture</li>
              <li>ML-Powered TTL Prediction</li>
              <li>Reduced Manual Configuration</li>
              <li>Optimized Performance &amp; Scalability</li>
              <li>Easy Integration</li>
            </ul>
          </section>

          <section id="installation" className="space-y-6 scroll-mt-24">
            <h3 className="text-xl md:text-2xl font-sentient">Installation</h3>
            <div className="space-y-4">
              <p className="text-foreground/70">Install Cachetron</p>
              <CodeBlock
                title="Install Cachetron"
                code="npm install -g cachetron"
              />
              <p className="text-foreground/70 text-sm">
                The -g flag installs Cachetron globally so you can run its
                commands from anywhere. You may also install locally with npm
                install cachetron.
              </p>
              <p className="text-foreground/70 mt-4">Initialize Cachetron</p>
              <CodeBlock title="Initialize Cachetron" code="cachetron init" />
              <p className="text-foreground/70 text-sm">
                Runs the CLI initializer which creates a cachetron.json
                configuration file for your project.
              </p>
            </div>
          </section>

          <section className="space-y-6 scroll-mt-24">
            <h3 className="text-xl md:text-2xl font-sentient">
              Auto-Generated Configuration File
            </h3>
            <p className="text-foreground/70">
              After running cachetron init, Cachetron creates a default
              cachetron.json. Example for Memcached:
            </p>
            <CodeBlock
              title="cachetron.json"
              code={`{
  "type": "memcache",
  "url": "localhost:11211",
  "autoTTL": true
}`}
            />
            <p className="text-foreground/70 text-sm">
              Switching backend: change the type field to "redis", or
              "memcache".
            </p>
            <p className="text-foreground/70 text-sm">
              Manual TTL: set "autoTTL": false if you prefer to manage TTLs
              yourself.
            </p>
          </section>

          <section className="space-y-6">
            <h3 className="text-xl md:text-2xl font-sentient">
              Switching Cache Backend
            </h3>
            <p className="text-foreground/70">
              To switch backends, update cachetron.json:
            </p>
            <CodeBlock
              title="cachetron.json"
              code={`{
  "type": "redis",
  "url": "localhost:6379",
  "autoTTL": true
}`}
            />
          </section>

          <section className="space-y-6">
            <h3 className="text-xl md:text-2xl font-sentient">
              Manual TTL (Disable AutoTTL)
            </h3>
            <p className="text-foreground/70">
              If you prefer manual TTL control, set autoTTL to false:
            </p>
            <CodeBlock
              title="cachetron.json"
              code={`{
  "type": "memcache",
  "url": "localhost:11211",
  "autoTTL": false
}`}
            />
            <p className="text-foreground/70 text-sm">
              When autoTTL is disabled, set TTL in code: cache.set("user1",
              data, 120).
            </p>
          </section>

          <section id="getting-started" className="space-y-6 scroll-mt-24">
            <h3 className="text-xl md:text-2xl font-sentient">
              Getting Started
            </h3>
            <p className="text-foreground/70">
              Import Cachetron and create a proxy-backed instance (example):
            </p>
            <CodeBlock
              title="Import & Create Instance"
              code={`import { cachetron, updateCacheConfig } from "cachetron";`}
            />
          </section>

          <section id="core-operations" className="space-y-6 scroll-mt-24">
            <h3 className="text-xl md:text-2xl font-sentient">
              Core Operations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-foreground/70">Set / Get / Delete</p>
                <CodeBlock
                  title="Set"
                  code={`await cache.set("key", value, ttl);`}
                />
                <CodeBlock
                  title="Get"
                  code={`const data = await cache.get("key");`}
                />
                <CodeBlock title="Delete" code={`await cache.delete("key");`} />
              </div>
              <div className="space-y-3">
                <p className="text-foreground/70">Clear / Keys / HasKey</p>
                <CodeBlock title="Clear" code={`await cache.clear();`} />
                <CodeBlock
                  title="Keys"
                  code={`const allKeys = await cache.keys();`}
                />
                <CodeBlock
                  title="HasKey"
                  code={`const exists = await cache.hasKey("key");`}
                />
              </div>
            </div>
          </section>

          <section id="admin-route" className="space-y-6 scroll-mt-24">
            <h3 className="text-xl md:text-2xl font-sentient">
              Cache Admin Config Route
            </h3>
            <p className="text-foreground/70">
              This route allows you to update Cachetron configuration at
              runtime. You can modify cache providers, connection URLs and TTLs.
            </p>
            <CodeBlock
              title="Cache Admin Config Route"
              code={`app.post("/cache/admin/config", (req, res) => {
  try {
    updateCacheConfig(req.body);
    res.send("updated config");
  } catch (error) {
    console.log("error", error);
  }
});`}
            />
          </section>

          <section id="metrics-ml" className="space-y-6 scroll-mt-24">
            <h3 className="text-xl md:text-2xl font-sentient">
              Metrics &amp; ML
            </h3>
            <p className="text-foreground/70">
              After running node index.js Cachetron automatically creates a
              metrics.json file when your server runs. This file is used
              internally and you do not need to edit it.
            </p>
            <div className="space-y-3">
              <p className="text-foreground/70">What it contains</p>
              <ul className="list-disc pl-5 text-foreground/70 space-y-2">
                <li>time - timestamp of metric</li>
                <li>hitRatio / missRatio - current interval</li>
                <li>hitRatioLifetime / missRatioLifetime - lifetime values</li>
                <li>cacheSize - memory used</li>
                <li>dataChangeRate - how often data changes</li>
                <li>keyCount - number of cached keys</li>
                <li>avgKeySize - average entry size</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-foreground/70">How ML Uses metrics.json</p>
              <p className="text-foreground/70">
                If "autoTTL": true, Cachetron's ML model reads metrics.json to
                learn usage patterns (access frequency, data-change rate,
                hit/miss ratios, memory usage) and predicts an optimal TTL for
                each key. This happens automatically - you don't need to set TTL
                manually.
              </p>
            </div>
          </section>

          <section id="monitoring" className="space-y-6 scroll-mt-24">
            <h3 className="text-xl md:text-2xl font-sentient">
              Monitoring - Dashboard
            </h3>
            <CodeBlock title="Dashboard" code="cachetron dashboard" />
          </section>

          <section id="cli" className="space-y-6 scroll-mt-24">
            <h3 className="text-xl md:text-2xl font-sentient">CLI Commands</h3>
            <div className="space-y-3">
              <CodeBlock title="CLI" code="npm install cachetron" />
              <CodeBlock title="CLI" code="cachetron init" />
              <CodeBlock title="CLI" code="cachetron dashboard" />
            </div>
          </section>

          <section id="demo" className="space-y-6 scroll-mt-24">
            <h3 className="text-xl md:text-2xl font-sentient">
              Cachetron Server Demo
            </h3>
            <p className="text-foreground/70">
              A minimal Express server demonstrating how to use Cachetron with
              dynamic configuration updates and simple get/set operations.
            </p>
            <CodeBlock
              title="Demo"
              code={`import express, { json } from "express";
import cors from "cors";
import { cachetron, updateCacheConfig } from "cachetron";

const app = express();
app.use(cors());
app.use(json());

app.get("/", async (req, res) => {
  res.send("This is a simple cache server using cachetron");
});

app.post("/cache/admin/config", (req, res) => {
  try {
    updateCacheConfig(req.body);
    res.send("updated config");
  } catch (error) {
    console.log("error", error);
  }
});

app.post("/set", async (req, res) => {
  // ...
});

app.get("/get", async (req, res) => {
  // ...
});

const PORT = 3001;
app.listen(PORT, () =>
  console.log(\`Server running at http://localhost:\${PORT}\`)
);`}
            />
          </section>
        </div>
      </section>
    </main>
  );
}
