import {
  earningsLog,
  halvingForecast,
  rewardBreakdown,
  rewardsComparison,
  rewardsSeries,
  rewardsSummary,
} from "@/lib/portal-data";
import { createMetadata } from "@/lib/metadata";
import { MetricCard, Panel, PortalShell, SectionHeader, StatusPill, TopActionLink } from "@/components/portal-shell";
import { Download, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Rewards",
  description: "Validator rewards analytics with earnings composition, projections, comparisons, and export-ready logs.",
  path: "/rewards",
});

const maxValue = Math.max(
  ...rewardsSeries.map((entry) => entry.liveness + entry.app + entry.superValidator)
);

export default function RewardsPage() {
  return (
    <PortalShell
      eyebrow="Rewards Analytics"
      title="Financial intelligence for liveness rewards, app activity, and network-relative performance."
      description="This page turns Canton Coin earnings into a credible operating record for operators, finance teams, and client-reporting workflows."
      actions={
        <>
          <TopActionLink href="/dashboard" label="Back to Dashboard" secondary />
          <TopActionLink href="/leaderboard" label="Open Leaderboard" />
        </>
      }
    >
      <Panel>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {['7 days', '30 days', '90 days', 'All time', 'Custom range'].map((item, index) => (
              <span
                key={item}
                className={`rounded-full border px-4 py-2 text-sm ${index === 1 ? 'border-cyan-300/30 bg-cyan-300/10 text-white' : 'border-white/10 bg-white/[0.04] text-slate-300'}`}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">Environment: MainNet</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">Validator: North Harbor Infrastructure</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-100"><Download className="h-4 w-4" /> Export CSV</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-100"><Download className="h-4 w-4" /> Export PDF</span>
          </div>
        </div>
      </Panel>

      <div className="grid gap-4 xl:grid-cols-4">
        {rewardsSummary.map((metric) => (
          <MetricCard key={metric.label} label={metric.label} value={metric.value} detail={metric.detail} tone="blue" />
        ))}
      </div>

      <Panel>
        <SectionHeader title="Daily earnings chart" description="Stacked daily earnings connect financial performance to uptime quality and hosted-party activity." />
        <div className="mt-8 flex items-end gap-3 overflow-x-auto pb-2">
          {rewardsSeries.map((entry) => {
            const total = entry.liveness + entry.app + entry.superValidator;
            const height = Math.max((total / maxValue) * 260, 48);
            const liveHeight = (entry.liveness / total) * height;
            const appHeight = (entry.app / total) * height;
            const svHeight = (entry.superValidator / total) * height;

            return (
              <div key={entry.day} className="flex min-w-[74px] flex-col items-center gap-3">
                <div className="flex h-[280px] w-full items-end justify-center rounded-[2rem] border border-white/10 bg-slate-950/35 px-3 py-4">
                  <div className="flex w-full flex-col overflow-hidden rounded-2xl">
                    <div style={{ height: `${svHeight}px` }} className="w-full bg-violet-400" />
                    <div style={{ height: `${appHeight}px` }} className="w-full bg-cyan-400" />
                    <div style={{ height: `${liveHeight}px` }} className="w-full bg-blue-500" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-white">{entry.day}</p>
                  <p className="text-xs text-slate-500">{total} CC</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-blue-500" /> Liveness</span>
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-cyan-400" /> App provider</span>
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-violet-400" /> Super validator</span>
        </div>
      </Panel>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Panel>
          <SectionHeader title="Reward type breakdown" description="Understand the earnings mix driving your validator economics." />
          <div className="mt-6 space-y-4">
            {rewardBreakdown.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between gap-4 text-sm text-slate-300">
                  <span>{item.label}</span>
                  <span className="font-medium text-white">{item.value}</span>
                </div>
                <div className="mt-2 h-3 rounded-full bg-white/5">
                  <div className="h-3 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500" style={{ width: item.width }} />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <SectionHeader title="Network comparison" description="See whether current performance is above the network average and how close it is to top-quartile economics." />
          <div className="mt-6 space-y-5">
            {rewardsComparison.map((item, index) => (
              <div key={item.label}>
                <div className="flex items-center justify-between gap-4 text-sm text-slate-300">
                  <span>{item.label}</span>
                  <span className="font-medium text-white">{item.value}</span>
                </div>
                <div className="mt-2 h-3 rounded-full bg-white/5">
                  <div
                    className={`h-3 rounded-full ${index === 0 ? 'bg-gradient-to-r from-cyan-300 to-blue-500' : index === 1 ? 'bg-gradient-to-r from-slate-400 to-slate-200' : 'bg-gradient-to-r from-violet-300 to-violet-500'}`}
                    style={{ width: item.width }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-emerald-300/15 bg-emerald-400/10 p-4">
            <p className="text-sm text-emerald-100">You are currently operating in the top 23% of validators by daily earnings rate.</p>
          </div>
        </Panel>
      </div>

      <Panel>
        <SectionHeader title="Halving impact" description="Programmatic mint changes matter for operator planning and client yield projections." />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-950/35 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Current mint rate</p>
            <p className="mt-3 text-3xl font-semibold text-white">{halvingForecast.currentMintRate}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/35 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Next halving</p>
            <p className="mt-3 text-3xl font-semibold text-white">{halvingForecast.nextHalving}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/35 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Projected post-halving earnings</p>
            <p className="mt-3 text-3xl font-semibold text-white">{halvingForecast.projectedPostHalving}</p>
          </div>
        </div>
        <div className="mt-6 flex items-start gap-3 rounded-3xl border border-blue-300/15 bg-blue-400/10 p-4 text-sm leading-7 text-slate-200">
          <TrendingUp className="mt-1 h-5 w-5 shrink-0 text-blue-200" />
          <p>{halvingForecast.narrative}</p>
        </div>
      </Panel>

      <Panel>
        <SectionHeader title="Earnings log" description="Daily accounting record for finance, reconciliation, and performance review." />
        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white/[0.04] text-slate-400">
              <tr>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Liveness</th>
                <th className="px-4 py-3 font-medium">App</th>
                <th className="px-4 py-3 font-medium">SV</th>
                <th className="px-4 py-3 font-medium">Daily total</th>
                <th className="px-4 py-3 font-medium">Cumulative</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 bg-slate-950/35 text-slate-200">
              {earningsLog.map((row, index) => (
                <tr key={row.date} className={index === 2 ? 'bg-amber-400/5' : undefined}>
                  <td className="px-4 py-3">{row.date}</td>
                  <td className="px-4 py-3">{row.liveness}</td>
                  <td className="px-4 py-3">{row.app}</td>
                  <td className="px-4 py-3">{row.superValidator}</td>
                  <td className="px-4 py-3 font-medium text-white">{row.total}</td>
                  <td className="px-4 py-3">{row.cumulative}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-5">
          <StatusPill tone="amber" label="Mar 28 earnings were below average and align with the dashboard missed-round event." />
        </div>
      </Panel>
    </PortalShell>
  );
}
