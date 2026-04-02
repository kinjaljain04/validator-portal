/**
 * ============================================================================
 * SITE CONFIGURATION
 * ============================================================================
 *
 * Customize your landing page by editing the values below.
 * All text, links, and settings are centralized here for easy editing.
 */

export const siteConfig = {
  name: "CCVelidator Portal",
  tagline: "Unified operations, analytics, and communication infrastructure for Canton validators.",
  description:
    "Enterprise-grade validator operations workspace for monitoring health, tracking rewards, coordinating upgrades, and managing compliance across Canton environments.",
  url: "https://validator-portal.canton.network",
  twitter: "@cantonnetwork",

  nav: {
    cta: {
      text: "Open Dashboard",
      href: "#cta",
    },
    signIn: {
      text: "Sign in",
      href: "#cta",
    },
  },
} as const;

/**
 * ============================================================================
 * FEATURE FLAGS
 * ============================================================================
 *
 * Toggle features on/off without touching component code.
 */
export const features = {
  smoothScroll: true,
  darkMode: true,
} as const;

/**
 * ============================================================================
 * THEME CONFIGURATION
 * ============================================================================
 *
 * Colors are defined in globals.css using CSS custom properties.
 * This config controls which theme features are enabled.
 */
export const themeConfig = {
  defaultTheme: "dark" as const,
  enableSystem: true,
} as const;
