"use client";

import { problemComparisonRows } from "@/lib/portal-data";
import { motion } from "motion/react";

export function ProblemComparison() {
  return (
    <section id="problem" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-360 px-6 sm:px-12 lg:px-24 2xl:max-w-450 3xl:max-w-550">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-foreground/45">Today vs portal</p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground lg:text-5xl">
            Operators have network-scale responsibilities, but most workflows still live across disconnected tools.
          </h2>
          <p className="mt-4 text-base leading-7 text-foreground/65 lg:text-lg">
            The portal turns fragmented operational work into one coordinated system for performance, rewards, communication, and compliance.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-foreground/10 bg-muted/30 backdrop-blur-xl">
          <div className="grid gap-px bg-foreground/10 md:grid-cols-[0.95fr_1.2fr_1.2fr]">
            <div className="bg-background/70 p-5 text-xs uppercase tracking-[0.26em] text-foreground/45">Operational area</div>
            <div className="bg-background/70 p-5 text-xs uppercase tracking-[0.26em] text-foreground/45">How validators operate today</div>
            <div className="bg-background/70 p-5 text-xs uppercase tracking-[0.26em] text-foreground/45">What the portal provides</div>

            {problemComparisonRows.map((row, index) => (
              <motion.div
                key={row.area}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="contents"
              >
                <div className="bg-background/85 p-5">
                  <p className="text-lg font-medium tracking-tight text-foreground">{row.area}</p>
                </div>
                <div className="bg-background/85 p-5 text-sm leading-7 text-foreground/65 lg:text-base">{row.today}</div>
                <div className="bg-background/85 p-5 text-sm leading-7 text-foreground/80 lg:text-base">{row.portal}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
