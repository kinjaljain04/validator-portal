"use client";

import { brandName, requestAccessHighlights } from "@/lib/portal-data";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function PortalCta() {
  return (
    <section id="cta" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-360 px-6 sm:px-12 lg:px-24 2xl:max-w-450 3xl:max-w-550">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] border border-foreground/10 bg-[radial-gradient(circle_at_top,_rgba(130,92,255,0.16),_transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 backdrop-blur-2xl lg:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/40 px-4 py-2 text-xs uppercase tracking-[0.24em] text-foreground/55">
                <ShieldCheck className="h-4 w-4" />
                Operational workspace access
              </div>
              <h2 className="mt-6 text-3xl font-medium tracking-tight text-foreground lg:text-5xl">
                Bring validator operations, rewards, communication, and compliance into one enterprise surface.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-foreground/65 lg:text-lg">
                {brandName} is designed for validators, NaaS providers, and Foundation teams that need a production-grade operational layer without fragmented tooling.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
                >
                  Open Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/request-access"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/10 bg-background/45 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/70"
                >
                  Request Access
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-foreground/10 bg-background/55 p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">What access enables</p>
              <div className="mt-6 space-y-4">
                {requestAccessHighlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-foreground/10 bg-muted/30 p-4 text-sm leading-7 text-foreground/70">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
