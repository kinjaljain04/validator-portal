import { About } from "@/components/about";
import { CompetitiveGap } from "@/components/competitive-gap";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { InstitutionalValidatorWall } from "@/components/institutional-validator-wall";
import { PortalCta } from "@/components/portal-cta";
import { ProblemComparison } from "@/components/problem-comparison";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { SocialProof } from "@/components/social-proof";
import { ThemeSwitch } from "@/components/theme-switch";
import { WorkspacePreview } from "@/components/workspace-preview";
import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: `${siteConfig.name} - Validator Operations Workspace`,
  description: `Overview of ${siteConfig.name}. ${siteConfig.description}`,
  path: "/",
});

export default function HomePage(): ReactNode {
  return (
    <>
      <Header />
      <ThemeSwitch />
      <main id="main-content" className="lg:relative lg:z-10 flex-1 bg-background">
        <Hero />
        <ProblemComparison />
        <Projects />
        <Services />
        <About />
        <InstitutionalValidatorWall />
        <CompetitiveGap />
        <SocialProof />
        <WorkspacePreview />
        <Faq />
        <PortalCta />
      </main>
      <Footer />
    </>
  );
}
