import { RiskTester } from "./risk-tester";

const analyses = [
  { repo: "core/payments-infra", pr: "#392", risk: "Critical 88", service: "Checkout DB", time: "2m ago" },
  { repo: "platform/networking", pr: "#410", risk: "Review 51", service: "Edge API", time: "11m ago" },
  { repo: "ops/monitoring", pr: "#77", risk: "Safe 14", service: "Observability", time: "23m ago" },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <section>
        <h1 className="text-3xl font-semibold">Organization Overview</h1>
        <p className="mt-2 text-slate-300">Monitor risk trends and recent pull request analyses.</p>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          { label: "Analyses This Week", value: "128" },
          { label: "Critical Risks Caught", value: "9" },
          { label: "Avg Review Time Saved", value: "34%" },
        ].map((item) => (
          <article key={item.label} className="rounded-xl border border-white/10 bg-slate-900 p-5">
            <p className="text-slate-300">{item.label}</p>
            <h2 className="mt-1 text-3xl font-semibold">{item.value}</h2>
          </article>
        ))}
      </section>

      <section className="mt-6 rounded-xl border border-white/10 bg-slate-900 p-5">
        <h2 className="text-xl font-semibold">Recent Analyses</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-300">
                <th className="py-2">Repository</th>
                <th className="py-2">PR</th>
                <th className="py-2">Risk</th>
                <th className="py-2">Service</th>
                <th className="py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {analyses.map((row) => (
                <tr key={`${row.repo}-${row.pr}`} className="border-b border-white/10">
                  <td className="py-2">{row.repo}</td>
                  <td className="py-2">{row.pr}</td>
                  <td className="py-2">{row.risk}</td>
                  <td className="py-2">{row.service}</td>
                  <td className="py-2 text-slate-300">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-6">
        <RiskTester />
      </div>
    </div>
  );
}
