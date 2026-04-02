import {
  competitiveRows,
  growthStats,
  institutionalValidators,
  landingFaqs,
  landingModules,
  leaderboardPreview,
  operationsGapRows,
  overviewMetrics,
} from "@/lib/site-content";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

function Cell({ value }: { value: boolean }) {
  return value ? (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
      <Check className="h-4 w-4" />
    </span>
  ) : (
    <span className="text-sm font-medium text-slate-500">—</span>
  );
}

export function LandingPageContent() {
  return (
    <main id="main-content" className="bg-slate-950 text-white">
      <section
        id="overview"
        className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(79,140,255,0.22),transparent_32%),radial-gradient(circle_at_right,rgba(0,194,168,0.14),transparent_24%),#020817] pt-36 sm:pt-40"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 pb-20 sm:px-6 lg:px-10 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.8fr)] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                Canton infrastructure operations
              </div>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Enterprise operations infrastructure for the teams that keep Canton live.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                The CCVelidator Portal unifies node health, reward visibility, Foundation coordination,
                upgrade readiness, and compliance tracking into one premium operator workspace.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
                >
                  Open Dashboard
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#leaderboard"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View Leaderboard
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-blue-950/20 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-300">Network status</p>
                  <p className="mt-1 text-2xl font-semibold text-white">All systems operational</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  MainNet live
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Current release</p>
                  <p className="mt-2 text-lg font-semibold text-white">Canton 3.4.2</p>
                  <p className="mt-1 text-sm text-slate-400">No version mismatch detected across production nodes.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Upgrade readiness</p>
                  <p className="mt-2 text-lg font-semibold text-white">742 / 980 confirmed</p>
                  <p className="mt-1 text-sm text-slate-400">Foundation can monitor rollout completion in real time.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {overviewMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/8 bg-slate-950/65 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{metric.label}</p>
                <p className="mt-3 text-2xl font-semibold text-white">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="problem" className="border-b border-white/10 bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Operational gap</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Validators should not need spreadsheets, inbox threads, and chat fragments to run critical infrastructure.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                As Canton scales toward a thousand validators, fragmented tooling becomes an operational risk.
                This portal creates a single workspace for health monitoring, communication, upgrade coordination, and compliance visibility.
              </p>
            </div>

            <div className="overflow-x-auto rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="grid min-w-[880px] grid-cols-[1.1fr_0.9fr_1fr_1.1fr] gap-px bg-white/10 text-sm">
                <div className="bg-slate-950/90 px-4 py-4 font-semibold text-white">Operation</div>
                <div className="bg-slate-950/90 px-4 py-4 font-semibold text-white">Current tool</div>
                <div className="bg-slate-950/90 px-4 py-4 font-semibold text-white">Current problem</div>
                <div className="bg-slate-950/90 px-4 py-4 font-semibold text-white">Portal capability</div>
                {operationsGapRows.map((row) => (
                  <div key={row.operation} className="contents">
                    <div className="bg-slate-950/80 px-4 py-4 text-slate-100">{row.operation}</div>
                    <div className="bg-slate-950/80 px-4 py-4 text-slate-300">{row.currentTool}</div>
                    <div className="bg-slate-950/80 px-4 py-4 text-slate-400">{row.problem}</div>
                    <div className="bg-slate-950/80 px-4 py-4 text-slate-200">{row.portalCapability}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="border-b border-white/10 bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Platform map</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Six modules define the full validator operator workflow.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              From daily monitoring to public network transparency, each module is designed around a specific validator workflow and operational need.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {landingModules.map((module, index) => (
              <article
                key={module.title}
                className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-xl shadow-black/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                      {module.badge}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{module.title}</h3>
                  </div>
                  <span className="text-sm font-medium text-slate-500">0{index + 1}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{module.description}</p>
                <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                  {module.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3 text-sm text-slate-200">
                      <span className="h-2 w-2 rounded-full bg-cyan-300" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="growth" className="border-b border-white/10 bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Why now</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Canton grew into institutional-scale infrastructure without a dedicated validator operations layer.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                The product story is strongest when it ties platform growth to operational complexity. The network multiplied in scale,
                while validators kept coordinating with fragmented tools not built for a 980+ operator ecosystem.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {growthStats.map((stat) => (
                <div key={stat.label} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Institutional trust</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The network is run by institutions, infrastructure providers, and operators who expect professional tooling.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              A premium landing page should immediately communicate that this portal serves serious operators, not casual observers.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {institutionalValidators.map((validator) => (
              <div
                key={validator}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-slate-100"
              >
                {validator}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="leaderboard" className="border-b border-white/10 bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Public transparency layer</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                The leaderboard makes network quality visible to validators, institutions, and the wider Canton ecosystem.
              </h2>
            </div>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-white"
            >
              Open operator workspace
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Network health bar</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Active validators</p>
                  <p className="mt-2 text-2xl font-semibold text-white">980+</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Super validators</p>
                  <p className="mt-2 text-2xl font-semibold text-white">26</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Avg uptime</p>
                  <p className="mt-2 text-2xl font-semibold text-white">99.5%</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Missed rounds rate</p>
                  <p className="mt-2 text-2xl font-semibold text-white">0.8%</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="grid min-w-[780px] grid-cols-[80px_1.3fr_0.8fr_0.7fr_0.9fr] gap-px bg-white/10 text-sm">
                <div className="bg-slate-950/90 px-4 py-4 font-semibold text-white">Rank</div>
                <div className="bg-slate-950/90 px-4 py-4 font-semibold text-white">Validator</div>
                <div className="bg-slate-950/90 px-4 py-4 font-semibold text-white">Type</div>
                <div className="bg-slate-950/90 px-4 py-4 font-semibold text-white">Uptime</div>
                <div className="bg-slate-950/90 px-4 py-4 font-semibold text-white">30d rewards</div>
                {leaderboardPreview.map((row) => (
                  <div key={row.rank} className="contents">
                    <div className="bg-slate-950/80 px-4 py-4 text-base font-semibold text-cyan-200">{row.rank}</div>
                    <div className="bg-slate-950/80 px-4 py-4">
                      <p className="font-medium text-white">{row.name}</p>
                      <p className="mt-1 text-xs text-slate-500">{row.region}</p>
                    </div>
                    <div className="bg-slate-950/80 px-4 py-4 text-slate-300">{row.type}</div>
                    <div className="bg-slate-950/80 px-4 py-4 text-slate-200">{row.uptime}</div>
                    <div className="bg-slate-950/80 px-4 py-4 text-slate-200">{row.rewards}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Competitive gap</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Existing Canton tools answer parts of the question. The portal owns the operational workspace.
            </h2>
          </div>
          <div className="overflow-x-auto rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="grid min-w-[900px] grid-cols-[1.3fr_repeat(5,minmax(80px,1fr))] gap-px bg-white/10 text-sm">
              <div className="bg-slate-950/90 px-4 py-4 font-semibold text-white">Feature</div>
              <div className="bg-slate-950/90 px-4 py-4 text-center font-semibold text-white">CantonScan</div>
              <div className="bg-slate-950/90 px-4 py-4 text-center font-semibold text-white">The Tie</div>
              <div className="bg-slate-950/90 px-4 py-4 text-center font-semibold text-white">CC Tools</div>
              <div className="bg-slate-950/90 px-4 py-4 text-center font-semibold text-white">Canton Monitor</div>
              <div className="bg-slate-950/90 px-4 py-4 text-center font-semibold text-cyan-200">Validator Portal</div>
              {competitiveRows.map((row) => (
                <div key={row.feature} className="contents">
                  <div className="bg-slate-950/80 px-4 py-4 font-medium text-slate-100">{row.feature}</div>
                  <div className="bg-slate-950/80 px-4 py-4 text-center"><Cell value={row.cantonScan} /></div>
                  <div className="bg-slate-950/80 px-4 py-4 text-center"><Cell value={row.theTie} /></div>
                  <div className="bg-slate-950/80 px-4 py-4 text-center"><Cell value={row.ccTools} /></div>
                  <div className="bg-slate-950/80 px-4 py-4 text-center"><Cell value={row.cantonMonitor} /></div>
                  <div className="bg-slate-950/80 px-4 py-4 text-center"><Cell value={row.validatorPortal} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="border-b border-white/10 bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
          <div className="rounded-[32px] border border-cyan-400/20 bg-[linear-gradient(180deg,rgba(79,140,255,0.15),rgba(2,8,23,0.9))] p-8 sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Ready to operationalize Canton validator management</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Build the public trust layer now, then connect the operator workspace to live validator data next.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              This frontend establishes the right narrative and information hierarchy for institutional stakeholders,
              validators, NaaS providers, and Foundation operations teams.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#overview"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950"
              >
                Review landing narrative
              </a>
              <a
                href="#modules"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
              >
                Explore product modules
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Questions stakeholders will ask on the first review.
            </h2>
          </div>
          <div className="space-y-4">
            {landingFaqs.map((faq) => (
              <article key={faq.question} className="rounded-[24px] border border-white/10 bg-white/5 p-6 sm:p-7">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
