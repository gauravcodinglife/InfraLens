export default function DocsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <section>
        <h1 className="text-3xl font-semibold">Quickstart Docs</h1>
        <p className="mt-2 text-slate-300">Connect GitHub and start analyzing Terraform plans in minutes.</p>
      </section>

      <section className="mt-6 space-y-4">
        <article className="rounded-xl border border-white/10 bg-slate-900 p-5">
          <h2 className="text-xl font-semibold">1. Install GitHub App</h2>
          <p className="mt-2 text-slate-300">
            Install InfraLens on target repositories and grant pull request read/write access.
          </p>
        </article>

        <article className="rounded-xl border border-white/10 bg-slate-900 p-5">
          <h2 className="text-xl font-semibold">2. Add CI Step</h2>
          <pre className="mt-2 overflow-x-auto rounded-lg border border-white/10 bg-slate-950 p-3 text-sm text-slate-300">
{`terraform init
terraform plan -out=tfplan
terraform show -json tfplan > plan.json
curl -X POST https://api.infralens.io/api/v1/analyze \\
  -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json" \\
  -d @plan.json`}
          </pre>
        </article>

        <article className="rounded-xl border border-white/10 bg-slate-900 p-5">
          <h2 className="text-xl font-semibold">3. Configure AWS Read-Only Role</h2>
          <p className="mt-2 text-slate-300">
            Use a least-privilege IAM role and attach read-only policies. InfraLens never performs write actions.
          </p>
        </article>
      </section>
    </div>
  );
}
