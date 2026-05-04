"use client";

import { useState } from "react";

const riskMessages: Record<string, string> = {
  "db-delete": "Critical 92/100: Deleting production DB can cause immediate data loss and downtime.",
  "sg-open": "Review 66/100: Public ingress on sensitive ports raises attack surface significantly.",
  "tag-change": "Safe 12/100: Tag-only change with no runtime behavior impact detected.",
};

export function RiskTester() {
  const [message, setMessage] = useState("Select a scenario to view score impact.");

  return (
    <section className="rounded-xl border border-white/10 bg-slate-900 p-5">
      <h2 className="text-xl font-semibold">Risk Rule Tester</h2>
      <p className="mt-2 text-slate-300">Try how InfraLens scores common infrastructure actions.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setMessage(riskMessages["db-delete"])}
          className="rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white hover:bg-blue-400"
        >
          Delete Production DB
        </button>
        <button
          type="button"
          onClick={() => setMessage(riskMessages["sg-open"])}
          className="rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white hover:bg-blue-400"
        >
          Open SG to Public
        </button>
        <button
          type="button"
          onClick={() => setMessage(riskMessages["tag-change"])}
          className="rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white hover:bg-blue-400"
        >
          Tag-only Change
        </button>
      </div>
      <p className="mt-3 text-slate-300">{message}</p>
    </section>
  );
}
