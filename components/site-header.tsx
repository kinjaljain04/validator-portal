"use client";

import { landingNavLinks } from "@/lib/site-content";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sectionIds = landingNavLinks.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 160;

      for (let index = sectionIds.length - 1; index >= 0; index -= 1) {
        const id = sectionIds[index];
        if (!id) continue;

        const element = document.getElementById(id);
        if (!element) continue;

        if (scrollPosition >= element.offsetTop) {
          setActiveSection(id);
          return;
        }
      }

      setActiveSection("overview");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-10">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5 lg:px-6 ${
          isScrolled
            ? "border-white/10 bg-slate-950/88 shadow-2xl shadow-black/20 backdrop-blur-xl"
            : "border-white/8 bg-slate-950/70 backdrop-blur-lg"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold tracking-[0.18em] text-cyan-300">
            CV
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold tracking-wide">CCVelidator Portal</span>
            <span className="block text-xs text-slate-400">Operations, analytics, and coordination</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {landingNavLinks.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            MainNet live
          </div>
          <a
            href="#leaderboard"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            View Leaderboard
          </a>
          <a
            href="#cta"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
          >
            Open Dashboard
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl lg:hidden">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            MainNet live
          </div>
          <nav className="flex flex-col gap-2">
            {landingNavLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 grid gap-2">
            <a
              href="#leaderboard"
              onClick={handleNavClick}
              className="rounded-2xl border border-white/10 px-4 py-3 text-center text-sm font-medium text-slate-200"
            >
              View Leaderboard
            </a>
            <a
              href="#cta"
              onClick={handleNavClick}
              className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Open Dashboard
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
