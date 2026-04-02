"use client";

import { workspaceModules } from "@/lib/portal-data";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function WorkspacePreview() {
  return (
    <section id="workspace" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-360 px-6 sm:px-12 lg:px-24 2xl:max-w-450 3xl:max-w-550">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-foreground/45">Workspace surface</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground lg:text-5xl">
              Every page in the portal is shaped around a validator operator&apos;s real daily flow.
            </h2>
            <p className="mt-4 text-base leading-7 text-foreground/65 lg:text-lg">
              Overview leads into dashboard, rewards, communication, compliance, and leaderboard views that feel like a complete enterprise workspace even before backend wiring.
            </p>
          </div>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Open Dashboard
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {workspaceModules.map((module, index) => (
            <motion.div
              key={module.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="group rounded-3xl border border-foreground/10 bg-muted/30 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-foreground/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                  {module.label}
                </span>
                <ArrowRight className="h-4 w-4 text-foreground/35 transition-transform group-hover:translate-x-1 group-hover:text-foreground/80" />
              </div>
              <h3 className="mt-6 text-2xl font-medium tracking-tight text-foreground">{module.title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/65">{module.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {module.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-foreground/10 px-3 py-1 text-xs tracking-[0.14em] text-foreground/55"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              <Link href={module.href} className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
                View page
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
