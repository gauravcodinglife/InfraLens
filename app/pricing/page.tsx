import Link from "next/link";

const plans = [
  { name: "Hobby", price: "$0/mo", features: ["1 user", "1 repo", "100 analyses/month"], cta: "Start Free" },
  {
    name: "Pro",
    price: "$29/user/mo",
    features: ["Unlimited repos", "Service mapping", "Slack critical alerts"],
    cta: "Choose Pro",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$999/mo",
    features: ["SSO + audit logs", "Custom risk rules", "Priority support"],
    cta: "Contact Sales",
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <section>
        <h1 className="text-3xl font-semibold">Simple Pricing</h1>
        <p className="mt-2 text-slate-300">Pay for confidence and fewer outages.</p>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-xl border bg-slate-900 p-5 ${
              plan.featured ? "border-blue-500 shadow-[0_0_0_1px_rgba(59,130,246,0.4)]" : "border-white/10"
            }`}
          >
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="mt-2 text-3xl font-bold">{plan.price}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-300">
              {plan.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link
              href="/dashboard"
              className="mt-5 inline-block rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-400"
            >
              {plan.cta}
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
