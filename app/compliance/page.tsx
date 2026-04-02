import {
  complianceHistory,
  complianceRequirements,
  hostingInventory,
  naasClients,
  profileSummary,
} from "@/lib/portal-data";
import { createMetadata } from "@/lib/metadata";
import { Panel, PortalShell, SectionHeader, StatusPill, TopActionLink } from "@/components/portal-shell";
import { Globe, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Compliance & Profile",
  description: "Validator compliance tracking, identity management, party-hosting inventory, and NaaS oversight.",
  path: "/compliance",
});

export default function CompliancePage() {
  return (
    <PortalShell
      eyebrow="Compliance & Profile"
      title="Requirement tracking, profile governance, and operating identity in one institutional workspace."
      description="Compliance combines Foundation rules with the validator identity and hosted-party information that operators need to maintain their standing on Canton."
      actions={
        <>
          <TopActionLink href="/comms" label="Open Communications" secondary />
          <TopActionLink href="/leaderboard" label="View Leaderboard" />
        </>
      }
    >
      <div className="grid gap-4 xl:grid-cols-4">
        {complianceRequirements.map((item) => (
          <Panel key={item.title} className="h-full">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.title}</p>
            <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
            <div className="mt-4">
              <StatusPill tone={item.tone === 'green' ? 'green' : 'amber'} label={item.detail} />
            </div>
          </Panel>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <Panel>
          <SectionHeader title="Compliance history" description="Historical standing by epoch provides a durable audit record for operators and Foundation reviewers." />
          <div className="mt-6 space-y-4">
            {complianceHistory.map((entry) => (
              <div key={entry.epoch} className="rounded-3xl border border-white/10 bg-slate-950/35 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{entry.epoch}</p>
                    <p className="mt-2 font-medium text-white">{entry.operation}</p>
                  </div>
                  <StatusPill tone={entry.status === 'Compliant' ? 'green' : 'amber'} label={entry.status} />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <SectionHeader title="Validator profile" description="Public-facing identity and private Foundation administration details are kept together to reduce operational drift." />
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950/35 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-200">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Public profile</p>
                  <p className="mt-1 text-xl font-semibold text-white">{profileSummary.organization}</p>
                </div>
              </div>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div><span className="text-slate-500">Operator type:</span> {profileSummary.operatorType}</div>
                <div><span className="text-slate-500">Location:</span> {profileSummary.location}</div>
                <div><span className="text-slate-500">Website:</span> {profileSummary.website}</div>
                <div><span className="text-slate-500">Join date:</span> {profileSummary.joinDate}</div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-400">{profileSummary.description}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/35 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-emerald-200">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Private administrative fields</p>
                  <p className="mt-1 text-xl font-semibold text-white">Foundation-visible data</p>
                </div>
              </div>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div><span className="text-slate-500">Validator ID:</span> {profileSummary.validatorId}</div>
                <div><span className="text-slate-500">Key management:</span> {profileSummary.keyManagement}</div>
                <div><span className="text-slate-500">Last key rotation:</span> {profileSummary.lastRotation}</div>
                <div><span className="text-slate-500">Incident contact:</span> {profileSummary.contactEmail}</div>
              </div>
            </div>
          </div>
        </Panel>
      </div>

      <Panel>
        <SectionHeader title="Party hosting inventory" description="Operators and NaaS providers can inspect which parties are hosted, how active they are, and whether attention is required." />
        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white/[0.04] text-slate-400">
              <tr>
                <th className="px-4 py-3 font-medium">Party</th>
                <th className="px-4 py-3 font-medium">Organization</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Activity</th>
                <th className="px-4 py-3 font-medium">Last active</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 bg-slate-950/35 text-slate-200">
              {hostingInventory.map((row) => (
                <tr key={row.party}>
                  <td className="px-4 py-3 font-medium text-white">{row.party}</td>
                  <td className="px-4 py-3">{row.organization}</td>
                  <td className="px-4 py-3">{row.type}</td>
                  <td className="px-4 py-3">{row.activity}</td>
                  <td className="px-4 py-3">{row.lastActive}</td>
                  <td className="px-4 py-3"><StatusPill tone={row.status === 'Active' ? 'green' : 'amber'} label={row.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <Panel>
        <SectionHeader title="NaaS provider panel" description="Managed client validators roll up into one institution-facing service view for uptime, party hosting, and earnings." />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {naasClients.map((client) => (
            <div key={client.validator} className="rounded-3xl border border-white/10 bg-slate-950/35 p-5">
              <p className="text-lg font-medium text-white">{client.validator}</p>
              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-4"><span>Uptime</span><span className="font-medium text-white">{client.uptime}</span></div>
                <div className="flex items-center justify-between gap-4"><span>Hosted parties</span><span className="font-medium text-white">{client.parties}</span></div>
                <div className="flex items-center justify-between gap-4"><span>CC earned</span><span className="font-medium text-white">{client.earnings}</span></div>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </PortalShell>
  );
}
