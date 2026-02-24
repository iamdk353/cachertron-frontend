const plans = [
  {
    name: "Starter",
    toneClass: "bg-emerald-400",
    price: "Free",
    audience: "For developers exploring Cachetron.",
    features: [
      "1 cache backend (Redis or Memcached)",
      "Manual TTL configuration",
      "Basic CLI access",
      "Community support",
      "Up to 10,000 requests/day",
    ],
  },
  {
    name: "Pro",
    toneClass: "bg-blue-400",
    price: " ₹4,099 / month",
    audience: "For growing teams who need intelligence.",
    features: [
      "Both Redis and Memcached support",
      "ML-powered automatic TTL prediction",
      "Real-time performance dashboard",
      "Backend switching without code changes",
      "Up to 1 million requests/day",
      "Email support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    toneClass: "bg-red-400",
    price: "Custom Pricing",
    audience: "For organizations running at scale.",
    features: [
      "Everything in Pro",
      "Unlimited requests",
      "Custom ML model fine-tuned to your workload",
      "Dedicated monitoring and alerting",
      "Role-based access control",
      "SLA guarantee",
      "Priority 24/7 support",
      "On-premise deployment option",
      "Direct integration support",
    ],
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-24 md:py-32 px-4 bg-background border-b border-border/40 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-sentient mb-4 text-balance">
          Cachetron <i className="font-light">Pricing Plans.</i>
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mb-12">
          Pick the plan that matches your traffic and control requirements.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl border p-6 md:p-8 transition-all duration-300 ${
                plan.featured
                  ? "border-primary/50 bg-primary/[0.06] shadow-[0_0_0_1px_rgba(255,199,0,0.2)]"
                  : "border-border/40 bg-foreground/[0.03]"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${plan.toneClass}`}
                />
                <h3 className="text-xl font-semibold">{plan.name}</h3>
              </div>

              <p className="text-3xl font-sentient mb-4">{plan.price}</p>
              <p className="text-foreground/70 mb-6">{plan.audience}</p>

              <ul className="space-y-3 text-foreground/75">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-12 text-lg text-foreground/70 italic text-balance">
          The bigger your system - the more Cachetron saves you. In performance,
          in engineering time, and in infrastructure costs.
        </p>
      </div>
    </section>
  );
}
