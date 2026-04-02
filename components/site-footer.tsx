import { landingNavLinks } from "@/lib/site-content";
import Link from "next/link";

const footerLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Modules", href: "#modules" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "FAQ", href: "#faq" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-10 lg:py-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold tracking-[0.18em] text-cyan-300">
              CV
            </span>
            <div>
              <p className="text-base font-semibold text-white">CCVelidator Portal</p>
              <p className="text-sm text-slate-400">Unified operations, analytics, and communication infrastructure.</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
            Built for Canton validators, super validators, Node-as-a-Service providers, and Foundation operations teams that need a serious operational layer.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Navigation</p>
          <div className="mt-5 grid gap-3">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Workspace paths</p>
          <div className="mt-5 grid gap-3 text-sm text-slate-300">
            {landingNavLinks.slice(0, 4).map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
            <Link href="/" className="transition-colors hover:text-white">
              Public landing
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>© 2026 CCVelidator Portal. Designed as institutional-grade validator infrastructure software.</p>
          <p>Public overview and operational workspace for Canton validator teams.</p>
        </div>
      </div>
    </footer>
  );
}
