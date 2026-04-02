import { requestAccessHighlights } from "@/lib/portal-data";
import { createMetadata } from "@/lib/metadata";
import { Panel, PortalShell, SectionHeader, StatusPill, TopActionLink } from "@/components/portal-shell";
import { CheckCircle2, Mail, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Request Access",
  description: "Institutional onboarding path for validator operators, NaaS providers, and Foundation teams.",
  path: "/request-access",
});

export default function RequestAccessPage() {
  return (
    <PortalShell
      eyebrow="Request Access"
      title="Structured onboarding for validator operators, institutional teams, and Foundation collaborators."
      description="Access request flows are organized around operational readiness, communication requirements, and the level of workspace visibility needed by each team."
      actions={
        <>
          <TopActionLink href="/dashboard" label="Open Dashboard" />
          <TopActionLink href="/leaderboard" label="View Leaderboard" secondary />
        </>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Panel>
          <SectionHeader title="Access pathway" description="Designed for validators, super validators, NaaS teams, and Foundation stakeholders." />
          <div className="mt-6 space-y-4">
            {requestAccessHighlights.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-slate-950/35 p-4 text-sm leading-7 text-slate-300">{item}</div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-emerald-300/15 bg-emerald-400/10 p-4">
            <StatusPill tone="green" label="Institutional onboarding available" />
            <p className="mt-3 text-sm leading-7 text-emerald-50/85">Foundation coordination, operator verification, and workspace provisioning can be aligned through one review path.</p>
          </div>
        </Panel>

        <Panel>
          <SectionHeader title="Access request form" description="Access collection is organized around operator identity, environment scope, and the workspace permissions required by each team." />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {['Organization name', 'Primary operator', 'Role', 'Operational email', 'Validator type', 'Primary environment'].map((field) => (
              <div key={field} className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-sm text-slate-400">{field}</div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-sm text-slate-400">Requested modules: Dashboard, Rewards, Communication Hub, Compliance, Leaderboard visibility</div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-6 text-sm leading-7 text-slate-400">Operational summary: North Harbor Infrastructure is requesting workspace access for MainNet and TestNet operations, reward reconciliation, and upgrade-readiness coordination across institutional client validators.</div>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white"><Mail className="h-4 w-4" /> Submit request</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white"><ShieldCheck className="h-4 w-4" /> Attach validator details</span>
          </div>
        </Panel>
      </div>

      <Panel>
        <SectionHeader title="Onboarding expectations" description="Operators know what information is required before workspace access is provisioned." />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {[
            'Validator identity and incident contact verification',
            'Operational scope review for dashboard, rewards, and communication access',
            'Environment mapping for MainNet, TestNet, and DevNet visibility',
          ].map((step) => (
            <div key={step} className="rounded-3xl border border-white/10 bg-slate-950/35 p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-emerald-200">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{step}</p>
            </div>
          ))}
        </div>
      </Panel>
    </PortalShell>
  );
}
