import {
  announcementFeed,
  communicationChannels,
  incidents,
  ticketRows,
  upgradeReadiness,
} from "@/lib/portal-data";
import { createMetadata } from "@/lib/metadata";
import { Panel, PortalShell, SectionHeader, StatusPill, TopActionLink } from "@/components/portal-shell";
import { ArrowRight, MessageSquareText, Send, ShieldAlert } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Communication Hub",
  description: "Structured validator communications, upgrade notices, support tickets, and incident timelines.",
  path: "/comms",
});

export default function CommunicationHubPage() {
  return (
    <PortalShell
      eyebrow="Communication Hub"
      title="Structured communications for announcements, tickets, incidents, and upgrade acknowledgements."
      description="The hub replaces Telegram, Slack, and email with persistent operator communication that preserves accountability and a clear audit trail."
      actions={
        <>
          <TopActionLink href="/dashboard" label="Return to Dashboard" secondary />
          <TopActionLink href="/compliance" label="Open Compliance" />
        </>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[0.34fr_0.66fr]">
        <div className="space-y-6">
          <Panel>
            <SectionHeader title="Channels" description="The operator flow is organized by message type instead of chat noise." />
            <div className="mt-6 space-y-3">
              {communicationChannels.map((channel, index) => (
                <div key={channel.name} className={`rounded-3xl border p-4 ${index === 0 ? 'border-cyan-300/20 bg-cyan-300/10' : 'border-white/10 bg-slate-950/35'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium text-white">{channel.name}</p>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{channel.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel>
            <SectionHeader title="Upgrade readiness" description="Always visible when a release deadline is active." />
            <div className="mt-6 rounded-3xl border border-amber-300/20 bg-amber-400/10 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-amber-100/70">Active release</p>
              <p className="mt-3 text-3xl font-semibold text-white">{upgradeReadiness.version}</p>
              <p className="mt-3 text-sm text-amber-100/80">{upgradeReadiness.deadline}</p>
              <div className="mt-4 h-3 rounded-full bg-white/10">
                <div className="h-3 rounded-full bg-gradient-to-r from-amber-300 to-emerald-300" style={{ width: '75%' }} />
              </div>
              <p className="mt-4 text-sm text-slate-100">{upgradeReadiness.confirmed}</p>
            </div>
          </Panel>

          <Panel>
            <SectionHeader title="Submission flow" description="High-priority issues route through structured support rather than ad-hoc messaging." />
            <div className="mt-6 space-y-4 text-sm text-slate-300">
              {['Severity classification', 'Category routing', 'Threaded response timeline', 'Acknowledgement timestamps'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">{item}</div>
              ))}
            </div>
          </Panel>
        </div>

        <div className="space-y-6">
          <Panel>
            <SectionHeader title="Announcement feed" description="Foundation broadcasts, upgrade notices, and resolved incident summaries stay durable and searchable." />
            <div className="mt-6 space-y-4">
              {announcementFeed.map((entry, index) => (
                <div key={entry.subject} className={`rounded-3xl border p-5 ${index === 0 ? 'border-amber-300/20 bg-amber-400/10' : 'border-white/10 bg-slate-950/35'}`}>
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                        <span>{entry.category}</span>
                        <span>{entry.time}</span>
                      </div>
                      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{entry.subject}</h2>
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{entry.body}</p>
                    </div>
                    <StatusPill tone={index === 0 ? 'amber' : index === 1 ? 'blue' : 'green'} label={entry.status} />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white">
                      <MessageSquareText className="h-4 w-4" />
                      Mark as read
                    </span>
                    {index === 0 ? (
                      <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-100">
                        <Send className="h-4 w-4" />
                        Confirm ready
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <Panel>
              <SectionHeader title="My tickets" description="Support threads are tracked with explicit ownership and status changes." />
              <div className="mt-6 space-y-4">
                {ticketRows.map((ticket) => (
                  <div key={ticket.id} className="rounded-3xl border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{ticket.id}</p>
                        <p className="mt-2 font-medium text-white">{ticket.subject}</p>
                        <p className="mt-2 text-sm text-slate-400">{ticket.assigned} · {ticket.updated}</p>
                      </div>
                      <StatusPill tone={ticket.status === 'Resolved' ? 'green' : ticket.status === 'Awaiting response' ? 'amber' : 'blue'} label={ticket.status} />
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel>
              <SectionHeader title="Incident channel" description="Severity, status, and timeline updates stay centralized for network events." />
              <div className="mt-6 space-y-4">
                {incidents.map((incident) => (
                  <div key={incident.id} className="rounded-3xl border border-white/10 bg-slate-950/35 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{incident.id} · {incident.component}</p>
                        <p className="mt-2 font-medium text-white">{incident.note}</p>
                        <p className="mt-2 text-sm text-slate-400">{incident.elapsed}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <StatusPill tone={incident.status === 'Resolved' ? 'green' : 'amber'} label={incident.status} />
                        <span className="inline-flex items-center gap-2 rounded-full border border-rose-300/15 bg-rose-400/10 px-3 py-1.5 text-xs text-rose-100">
                          <ShieldAlert className="h-3.5 w-3.5" />
                          {incident.severity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          <Panel>
            <SectionHeader title="New support request" description="Capture severity, routing, and context with a structured submission flow." />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {['Severity: High', 'Category: Upgrade Problem', 'Assigned SLA: 4 hours', 'Preferred callback: noc@northharbor.io'].map((field) => (
                <div key={field} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4 text-sm text-slate-300">{field}</div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/35 p-4 text-sm leading-7 text-slate-300">
              Subject: TestNet upgrade readiness confirmation remains blocked by dependency validation in the preflight pipeline.
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-cyan-200">
              Submit ticket
              <ArrowRight className="h-4 w-4" />
            </div>
          </Panel>
        </div>
      </div>
    </PortalShell>
  );
}
