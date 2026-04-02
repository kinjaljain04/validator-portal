import {
  growthTimeline,
  leaderboardHealth,
  leaderboardPrivacyNote,
  leaderboardRows,
  leaderboardSpotlight,
  operatorDistribution,
  regionalDistribution,
} from "@/lib/portal-data";
import { createMetadata } from "@/lib/metadata";
import { MetricCard, Panel, PortalShell, SectionHeader, StatusPill, TopActionLink } from "@/components/portal-shell";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Leaderboard",
  description: "Public validator rankings, network health, regional distribution, and growth across Canton.",
  path: "/leaderboard",
});

export default function LeaderboardPage() {
  return (
    <PortalShell
      eyebrow="Leaderboard"
      title="Public infrastructure quality across Canton validators, regions, and operator types."
      description="The leaderboard gives institutions and operators a transparent view of uptime quality, distribution, and competitive standing without exposing private hosted-party detail."
      actions={
        <>
          <TopActionLink href="/dashboard" label="Open Dashboard" />
          <TopActionLink href="/request-access" label="Request Access" secondary />
        </>
      }
    >
      <div className="grid gap-4 xl:grid-cols-4">
        {leaderboardHealth.map((metric) => (
          <MetricCard key={metric.label} label={metric.label} value={metric.value} detail="Network-wide health indicator" tone="blue" />
        ))}
      </div>

      <Panel>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {['Sort: Uptime', 'Sort: CC earned', 'Sort: Longevity', 'Sort: Hosted parties'].map((item, index) => (
              <span key={item} className={`rounded-full border px-4 py-2 text-sm ${index === 0 ? 'border-cyan-300/30 bg-cyan-300/10 text-white' : 'border-white/10 bg-white/[0.04] text-slate-300'}`}>{item}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {['Region: All', 'Operator: All', 'Environment: All three'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">{item}</span>
            ))}
          </div>
        </div>
      </Panel>

      <div className="grid gap-4 lg:grid-cols-3">
        {leaderboardSpotlight.map((spotlight, index) => (
          <Panel key={spotlight.rank} className={`overflow-hidden ${index === 0 ? 'border-amber-300/20 bg-amber-400/10' : index === 1 ? 'border-slate-300/15 bg-slate-200/10' : 'border-orange-300/15 bg-orange-300/10'}`}>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-200/60">Rank {spotlight.rank}</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">{spotlight.name}</h2>
            <p className="mt-4 text-lg text-slate-100">{spotlight.metric}</p>
            <div className="mt-6 flex items-center justify-between text-sm text-slate-200/70">
              <span>{spotlight.location}</span>
              <span>{spotlight.tenure}</span>
            </div>
          </Panel>
        ))}
      </div>

      <Panel>
        <SectionHeader title="Main rankings table" description="Sortable standings for uptime, earnings, longevity, and hosted-party scale across the active validator set." />
        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white/[0.04] text-slate-400">
              <tr>
                <th className="px-4 py-3 font-medium">Rank</th>
                <th className="px-4 py-3 font-medium">Validator</th>
                <th className="px-4 py-3 font-medium">Region</th>
                <th className="px-4 py-3 font-medium">Longevity</th>
                <th className="px-4 py-3 font-medium">30d uptime</th>
                <th className="px-4 py-3 font-medium">CC earned</th>
                <th className="px-4 py-3 font-medium">Hosted parties</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 bg-slate-950/35 text-slate-200">
              {leaderboardRows.map((row, index) => (
                <tr key={row.rank} className={index === 0 ? 'bg-cyan-300/6' : undefined}>
                  <td className="px-4 py-3 font-medium text-white">{row.rank}</td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium text-white">{row.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">{row.type}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">{row.region}</td>
                  <td className="px-4 py-3">{row.tenure}</td>
                  <td className="px-4 py-3">
                    <div className="min-w-[140px]">
                      <div className="flex items-center justify-between gap-3"><span>{row.uptime}</span><ArrowUpRight className="h-4 w-4 text-slate-500" /></div>
                      <div className="mt-2 h-2 rounded-full bg-white/5"><div className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" style={{ width: row.uptime }} /></div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{row.rewards}</td>
                  <td className="px-4 py-3">{row.parties}</td>
                  <td className="px-4 py-3"><StatusPill tone={row.status === 'Active' ? 'green' : 'amber'} label={row.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <div className="grid gap-6 xl:grid-cols-2">
        <Panel>
          <SectionHeader title="Geographic distribution" description="Regional diversification indicates whether Canton infrastructure is globally resilient or concentrated." />
          <div className="mt-6 space-y-5">
            {regionalDistribution.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between gap-4 text-sm text-slate-300">
                  <span>{item.label}</span>
                  <span className="font-medium text-white">{item.value}</span>
                </div>
                <div className="mt-2 h-3 rounded-full bg-white/5"><div className="h-3 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" style={{ width: item.width }} /></div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <SectionHeader title="Operator type mix" description="Institutional banks, NaaS providers, and infrastructure firms all contribute to network composition." />
          <div className="mt-6 space-y-5">
            {operatorDistribution.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between gap-4 text-sm text-slate-300">
                  <span>{item.label}</span>
                  <span className="font-medium text-white">{item.value}</span>
                </div>
                <div className="mt-2 h-3 rounded-full bg-white/5"><div className="h-3 rounded-full bg-gradient-to-r from-violet-300 to-fuchsia-500" style={{ width: item.width }} /></div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <Panel>
        <SectionHeader title="Validator growth" description="The growth line makes the scale story legible in seconds: validator count increased rapidly while operational tooling lagged behind." />
        <div className="mt-8 flex items-end gap-4 overflow-x-auto pb-2">
          {growthTimeline.map((point) => (
            <div key={point.month} className="flex min-w-[120px] flex-col items-center gap-3">
              <div className="flex h-[240px] w-full items-end rounded-[2rem] border border-white/10 bg-slate-950/35 p-3">
                <div className="w-full rounded-2xl bg-gradient-to-t from-cyan-400 via-blue-500 to-violet-400" style={{ height: `${Math.max(point.validators / 4, 24)}px` }} />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-white">{point.month}</p>
                <p className="text-xs text-slate-500">{point.validators} validators</p>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <Panel className="border-white/10 bg-white/[0.03]">
        <SectionHeader title="Privacy notice" description="Transparency is designed to support confidence without exposing private hosted-party detail." />
        <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-300">{leaderboardPrivacyNote}</p>
      </Panel>
    </PortalShell>
  );
}
