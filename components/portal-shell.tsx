"use client";

import { cn } from "@/lib/utils";
import { brandName, workspaceNavItems } from "@/lib/portal-data";
import {
  Bell,
  ChevronRight,
  Circle,
  Clock3,
  LayoutGrid,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const toneClasses = {
  green: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  amber: "border-amber-400/20 bg-amber-400/10 text-amber-200",
  red: "border-rose-400/20 bg-rose-400/10 text-rose-200",
  blue: "border-sky-400/20 bg-sky-400/10 text-sky-200",
  slate: "border-white/10 bg-white/5 text-slate-200",
} as const;

type Tone = keyof typeof toneClasses;

interface PortalShellProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  actions?: ReactNode;
}

export function PortalShell({ eyebrow, title, description, children, actions }: PortalShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(79,140,255,0.18),_transparent_28%),linear-gradient(180deg,#07111F_0%,#0A1321_48%,#08101B_100%)] text-slate-100">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-slate-950/50 backdrop-blur-xl lg:flex lg:flex-col">
          <div className="border-b border-white/10 px-6 py-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold tracking-[0.24em] text-cyan-200">
                CCV
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{brandName}</p>
                <p className="text-xs text-slate-400">Institutional validator operations</p>
              </div>
            </Link>
          </div>

          <nav className="flex-1 px-4 py-6">
            <div className="mb-4 px-3 text-[11px] uppercase tracking-[0.28em] text-slate-500">Workspace</div>
            <div className="space-y-1.5">
              {workspaceNavItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition-all",
                      active
                        ? "border-cyan-300/30 bg-cyan-300/10 text-white shadow-[0_0_0_1px_rgba(103,232,249,0.14)]"
                        : "border-transparent bg-white/[0.03] text-slate-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={cn("h-4 w-4", active ? "text-cyan-200" : "text-slate-500")} />
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="border-t border-white/10 p-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                MainNet live
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Workspace states are structured to match the validator operating model from overview through compliance.
              </p>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <div className="border-b border-white/10 bg-slate-950/35 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 lg:px-10">
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <StatusPill tone="green" label="MainNet live" />
                  <StatusPill tone="blue" label="Enterprise workspace" />
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                    <Clock3 className="h-4 w-4" />
                    Updated moments ago
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                    <Bell className="h-4 w-4" />
                    3 priority events
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">{eyebrow}</p>
                  <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    {title}
                  </h1>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                    {description}
                  </p>
                </div>
                {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1 lg:hidden">
                {workspaceNavItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "inline-flex shrink-0 items-center rounded-full border px-4 py-2 text-sm transition-colors",
                        active
                          ? "border-cyan-300/30 bg-cyan-300/10 text-white"
                          : "border-white/10 bg-white/[0.04] text-slate-300"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">{children}</div>
        </main>
      </div>
    </div>
  );
}

export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_12px_48px_rgba(2,8,23,0.26)] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{title}</h2>
        {description ? <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function MetricCard({
  label,
  value,
  detail,
  tone = "slate",
}: {
  label: string;
  value: string;
  detail: string;
  tone?: Tone;
}) {
  return (
    <Panel className="h-full">
      <div className="flex h-full flex-col justify-between gap-5">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{label}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-white">{value}</p>
        </div>
        <StatusPill tone={tone} label={detail} />
      </div>
    </Panel>
  );
}

export function StatusPill({ label, tone }: { label: string; tone: Tone }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium", toneClasses[tone])}>
      <Circle className="h-2.5 w-2.5 fill-current stroke-none" />
      {label}
    </span>
  );
}

export function TopActionLink({ href, label, secondary = false }: { href: string; label: string; secondary?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all",
        secondary
          ? "border-white/10 bg-white/[0.04] text-slate-100 hover:border-white/20 hover:bg-white/[0.08]"
          : "border-cyan-300/20 bg-cyan-300/10 text-white hover:border-cyan-200/40 hover:bg-cyan-300/16"
      )}
    >
      <LayoutGrid className="h-4 w-4" />
      {label}
    </Link>
  );
}
