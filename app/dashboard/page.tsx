import {
  alertRules,
  dashboardBanner,
  dashboardMetrics,
  environmentHealth,
  managedNodes,
  missedRoundEvents,
  recentAlerts,
  uptimeHistory,
} from "@/lib/portal-data";
import { createMetadata } from "@/lib/metadata";
import { MetricCard, Panel, PortalShell, SectionHeader, StatusPill, TopActionLink } from "@/components/portal-shell";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Dashboard",
  description: "Operational dashboard for validator uptime, missed rounds, version alignment, and environment health.",
  path: "/dashboard",
});

const toneMap = {
  green: "green",
  amber: "amber",
  red: "red",
} as const;

export default function DashboardPage() {
  return (
    <PortalShell
      eyebrow="Dashboard"
      title="Daily command surface for validator uptime, liveness, missed rounds, and release alignment."
      description="The dashboard answers the first four operational questions every validator asks: is the node online, how reliable has it been, how close is it to the missed-rounds threshold, and whether every environment is on the correct release."
      actions={
        <>
          <TopActionLink href="/rewards" label="Open Rewards" />
          <TopActionLink href="/comms" label="Open Communications" secondary />
        </>
      }
    >
      <Panel className="overflow-hidden border-amber-300/15 bg-amber-400/10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-200">
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              System status banner
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white lg:text-3xl">{dashboardBanner.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-amber-50/80 lg:text-base">{dashboardBanner.description}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Current release</p>
              <p className="mt-2 text-xl font-semibold text-white">{dashboardBanner.version}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Last refresh</p>
              <p className="mt-2 text-xl font-semibold text-white">{dashboardBanner.refreshed}</p>
            </div>
          </div>
        </div>
      </Panel>

      <div className="grid gap-4 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <MetricCard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            detail={metric.detail}
            tone={toneMap[metric.tone]}
          />
        ))}
      </div>

      <Panel>
        <SectionHeader
          title="Environment status"
          description="MainNet remains the highest-priority view, with TestNet surfacing upgrade drift before it reaches production."
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {environmentHealth.map((environment) => (
            <div key={environment.environment} className="rounded-3xl border border-white/10 bg-slate-950/45 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{environment.environment}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{environment.status}</p>
                </div>
                <StatusPill tone={toneMap[environment.tone]} label={environment.status} />
              </div>
              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-3"><span>Version</span><span className="font-medium text-white">{environment.version}</span></div>
                <div className="flex items-center justify-between gap-3"><span>Uptime</span><span className="font-medium text-white">{environment.uptime}</span></div>
                <div className="flex items-center justify-between gap-3"><span>Logs</span><span className="font-medium text-cyan-200">{environment.logs}</span></div>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <Panel>
        <SectionHeader
          title="90-day uptime history"
          description="Each block captures daily reliability. Amber days indicate degradation without complete downtime."
        />
        <div className="mt-6 grid grid-cols-10 gap-2 sm:grid-cols-15 lg:grid-cols-18 xl:grid-cols-30">
          {uptimeHistory.map((status, index) => (
            <div
              key={`${status}-${index}`}
              className={`h-6 rounded-md ${status === "green" ? "bg-emerald-400/80" : status === "amber" ? "bg-amber-400/80" : "bg-rose-400/80"}`}
              title={`Day ${index + 1}`}
            />
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400">
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-emerald-400" /> Fully operational</span>
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-amber-400" /> Degraded</span>
          <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-rose-400" /> Downtime</span>
          <span>2 degraded days, 0 downtime days in the last 90 days.</span>
        </div>
      </Panel>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Panel>
          <SectionHeader
            title="Missed rounds detail"
            description="The 50-round epoch limit stays visible so operators can judge risk before compliance is affected."
          />
          <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/40 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Current epoch progress</p>
                <p className="mt-2 text-3xl font-semibold text-white">18 / 50 missed rounds</p>
              </div>
              <StatusPill tone="amber" label="Monitor through epoch close" />
            </div>
            <div className="mt-5 h-3 rounded-full bg-white/5">
              <div className="h-3 rounded-full bg-gradient-to-r from-amber-300 to-amber-500" style={{ width: "36%" }} />
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-white/[0.04] text-slate-400">
                <tr>
                  <th className="px-4 py-3 font-medium">Timestamp</th>
                  <th className="px-4 py-3 font-medium">Rounds</th>
                  <th className="px-4 py-3 font-medium">Duration</th>
                  <th className="px-4 py-3 font-medium">Probable cause</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 bg-slate-950/35 text-slate-200">
                {missedRoundEvents.map((event) => (
                  <tr key={event.time}>
                    <td className="px-4 py-3">{event.time}</td>
                    <td className="px-4 py-3 font-medium text-white">{event.rounds}</td>
                    <td className="px-4 py-3">{event.duration}</td>
                    <td className="px-4 py-3">{event.cause}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel>
          <SectionHeader
            title="Alert configuration"
            description="Operational alerting stays visible in the daily dashboard because response time matters more than buried settings."
          />
          <div className="mt-6 space-y-4">
            {alertRules.map((rule) => (
              <div key={rule.condition} className="rounded-3xl border border-white/10 bg-slate-950/40 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-white">{rule.condition}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{rule.channels}</p>
                  </div>
                  <StatusPill tone={rule.status === "Enabled" ? "green" : "amber"} label={rule.status} />
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <Panel>
          <SectionHeader
            title="Multi-node overview"
            description="Institutions and NaaS operators can monitor multiple validators from one view without drilling into each node first."
            action={<TopActionLink href="/compliance" label="Review compliance" secondary />}
          />
          <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-white/[0.04] text-slate-400">
                <tr>
                  <th className="px-4 py-3 font-medium">Validator</th>
                  <th className="px-4 py-3 font-medium">Uptime</th>
                  <th className="px-4 py-3 font-medium">Missed rounds</th>
                  <th className="px-4 py-3 font-medium">Rewards</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 bg-slate-950/35 text-slate-200">
                {managedNodes.map((node) => (
                  <tr key={node.validator}>
                    <td className="px-4 py-3 font-medium text-white">{node.validator}</td>
                    <td className="px-4 py-3">{node.uptime}</td>
                    <td className="px-4 py-3">{node.missedRounds}</td>
                    <td className="px-4 py-3">{node.rewards}</td>
                    <td className="px-4 py-3"><StatusPill tone={node.status === "Healthy" ? "green" : "amber"} label={node.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel>
          <SectionHeader title="Recent alerts" description="Latest operator-facing events across health, rewards, and release alignment." />
          <div className="mt-6 space-y-4">
            {recentAlerts.map((alert) => (
              <div key={alert.title} className="rounded-3xl border border-white/10 bg-slate-950/40 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium text-white">{alert.title}</p>
                    <p className="mt-2 text-sm text-slate-400">{alert.time}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </div>
              </div>
            ))}
            <a href="/comms" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 hover:text-white">
              View all operational events
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Panel>
      </div>
    </PortalShell>
  );
}
