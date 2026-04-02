"use client";

import { institutionalValidators } from "@/lib/portal-data";
import { motion } from "motion/react";

export function InstitutionalValidatorWall() {
  return (
    <section id="validator-wall" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-360 px-6 sm:px-12 lg:px-24 2xl:max-w-450 3xl:max-w-550">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-foreground/45">Institutional validator wall</p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground lg:text-5xl">
            Built for the institutions, infrastructure firms, and providers operating Canton at scale.
          </h2>
          <p className="mt-4 text-base leading-7 text-foreground/65 lg:text-lg">
            The network is already operated by banks, exchanges, infrastructure providers, and NaaS teams that require auditable workflows and high-availability tooling.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {institutionalValidators.map((validator, index) => (
            <motion.div
              key={validator.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="group rounded-3xl border border-foreground/10 bg-muted/40 p-5 backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-foreground/10 bg-background/60 text-sm font-semibold uppercase tracking-[0.22em] text-foreground/80">
                  {validator.name
                    .split(" ")
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")}
                </div>
                <span className="rounded-full border border-foreground/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-foreground/50">
                  {validator.type}
                </span>
              </div>
              <p className="mt-6 text-xl font-medium tracking-tight text-foreground">{validator.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
