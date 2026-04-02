"use client";

import { competitiveRows } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const tools = [
  { key: "cantonScan", label: "CantonScan" },
  { key: "theTie", label: "The Tie" },
  { key: "ccTools", label: "CC Tools" },
  { key: "cantonMonitor", label: "Canton Monitor" },
  { key: "validatorPortal", label: "CCVelidator Portal" },
] as const;

type ToolKey = (typeof tools)[number]["key"];

function AvailabilityCell({ available, highlight = false }: { available: boolean; highlight?: boolean }) {
  return (
    <div className={cn("flex items-center justify-center p-4", highlight ? "bg-cyan-300/10" : "bg-background/85")}>
      <span
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold",
          available
            ? highlight
              ? "border-cyan-300/30 bg-cyan-300/15 text-cyan-100"
              : "border-emerald-300/20 bg-emerald-300/10 text-emerald-200"
            : "border-white/10 bg-white/[0.04] text-slate-500"
        )}
      >
        {available ? "✓" : "—"}
      </span>
    </div>
  );
}

export function CompetitiveGap() {
  return (
    <section id="comparison" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-360 px-6 sm:px-12 lg:px-24 2xl:max-w-450 3xl:max-w-550">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-foreground/45">Competitive gap</p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground lg:text-5xl">
            Existing Canton tools cover fragments of the workflow. The portal is the operational layer that connects them.
          </h2>
          <p className="mt-4 text-base leading-7 text-foreground/65 lg:text-lg">
            This makes the product boundary clear: the portal is not trying to replace public analytics pages, it is closing the missing operational, coordination, and compliance gaps around them.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-foreground/10 bg-muted/25 backdrop-blur-xl">
          <div className="grid gap-px bg-foreground/10 lg:grid-cols-[1.2fr_repeat(5,minmax(0,0.75fr))]">
            <div className="bg-background/70 p-4 text-xs uppercase tracking-[0.24em] text-foreground/45">Feature</div>
            {tools.map((tool) => (
              <div
                key={tool.key}
                className={cn(
                  "p-4 text-center text-xs uppercase tracking-[0.24em]",
                  tool.key === "validatorPortal" ? "bg-cyan-300/10 text-cyan-100" : "bg-background/70 text-foreground/45"
                )}
              >
                {tool.label}
              </div>
            ))}

            {competitiveRows.map((row, index) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="contents"
              >
                <div className="bg-background/85 p-4 text-sm font-medium text-foreground lg:text-base">{row.feature}</div>
                {tools.map((tool) => (
                  <AvailabilityCell
                    key={tool.key}
                    available={row[tool.key as ToolKey]}
                    highlight={tool.key === "validatorPortal"}
                  />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
