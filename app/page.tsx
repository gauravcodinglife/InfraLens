import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="mb-2 text-sm font-semibold text-sky-300">Pre-Deployment Infrastructure Safety</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Know if your IaC change will break the business before merge.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            InfraLens analyzes Terraform plans in pull requests, scores risk, and explains business impact in plain English.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-400"
            >
              Open Dashboard
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-slate-600 px-4 py-2 font-medium text-slate-100 hover:border-slate-400"
            >
              View Integration Docs
            </Link>
          </div>
        </div>
        <article className="rounded-xl border border-white/10 bg-slate-900 p-5">
          <h2 className="text-lg font-semibold">Latest PR Analysis</h2>
          <p className="mt-2 text-sm text-slate-300">
            <strong>Repo:</strong> payments/infra
          </p>
          <p className="text-sm text-slate-300">
            <strong>PR #214:</strong> Restrict SG ingress
          </p>
          <div className="mt-3 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-300">
            ðŸŸ¢ Safe Â· 18/100
          </div>
          <p className="mt-3 text-sm text-slate-300">No production-impacting resource deletions detected.</p>
        </article>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 pb-8 sm:px-6 md:grid-cols-3">
        {[
          {
            title: "Inside Pull Request",
            body: "Comments directly on PRs with impact summaries, risk level, and affected services.",
          },
          {
            title: "Business Context",
            body: "Maps cloud resource IDs to service tags for faster reviewer confidence.",
          },
          {
            title: "Fast Feedback",
            body: "Asynchronous processing targets under two minutes from push to comment.",
          },
        ].map((item) => (
          <article key={item.title} className="rounded-xl border border-white/10 bg-slate-900 p-5">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-slate-300">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <article className="rounded-xl border border-white/10 bg-slate-900 p-5">
          <h2 className="text-xl font-semibold">Example PR Comment</h2>
          <div className="mt-3 rounded-lg border border-dashed border-white/20 p-4 text-slate-300">
            <p className="font-semibold text-slate-100">InfraLens Analysis Complete</p>
            <p className="mt-2 inline-block rounded-full bg-amber-500/20 px-3 py-1 text-sm text-amber-300">
              ðŸŸ  Review Â· Risk Score 62/100
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>You are modifying production database security group rules.</li>
              <li>Public ingress is not added, but existing policy is tightened.</li>
              <li>Affected service: Billing API.</li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}

