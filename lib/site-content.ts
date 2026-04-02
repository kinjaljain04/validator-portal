export const landingNavLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Problem", href: "#problem" },
  { label: "Modules", href: "#modules" },
  { label: "Growth", href: "#growth" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "FAQ", href: "#faq" },
] as const;

export const overviewMetrics = [
  { label: "Active validators", value: "980+" },
  { label: "Super validators", value: "26" },
  { label: "Assets on-chain", value: "$6T+" },
  { label: "Daily repo volume", value: "$280B" },
  { label: "Daily transactions", value: "600k+" },
  { label: "Network uptime", value: "99.5%" },
] as const;

export const operationsGapRows = [
  {
    operation: "Performance tracking",
    currentTool: "Google Sheets",
    problem: "Manual updates, stale snapshots, inconsistent formats.",
    portalCapability: "Real-time health monitoring with shared operational visibility.",
  },
  {
    operation: "Reward monitoring",
    currentTool: "Individual Scan API queries",
    problem: "Requires technical effort and offers no historical context.",
    portalCapability: "Historical earnings analytics, projections, and exportable records.",
  },
  {
    operation: "Foundation communication",
    currentTool: "Telegram, Slack, email",
    problem: "Messages get lost and there is no audit trail.",
    portalCapability: "Structured announcements, tickets, incidents, and acknowledgment tracking.",
  },
  {
    operation: "Upgrade coordination",
    currentTool: "Announcements and inbox threads",
    problem: "No readiness confirmation or rollout visibility.",
    portalCapability: "Deadline-aware upgrade notices with readiness confirmation.",
  },
] as const;

export const landingModules = [
  {
    title: "Node Health Dashboard",
    badge: "Operations",
    description:
      "Track liveness, uptime, missed rounds, version status, and environment health from one operator-first workspace.",
    highlights: ["DevNet, TestNet, MainNet", "Alerting and refresh telemetry"],
  },
  {
    title: "Rewards Analytics",
    badge: "Finance",
    description:
      "Follow daily and historical Canton Coin earnings, compare against network peers, and prepare clean accounting exports.",
    highlights: ["Reward breakdowns", "Projection and halving impact"],
  },
  {
    title: "Communication Hub",
    badge: "Coordination",
    description:
      "Replace fragmented chat workflows with auditable announcements, support tickets, incident timelines, and upgrade notices.",
    highlights: ["Read receipts", "Upgrade readiness tracking"],
  },
  {
    title: "Compliance & Profile",
    badge: "Governance",
    description:
      "Monitor validator standing against Foundation requirements, manage identity data, and maintain operational readiness.",
    highlights: ["15-day streak tracking", "24/7 contact verification"],
  },
  {
    title: "Public Leaderboard",
    badge: "Transparency",
    description:
      "Show network health through uptime rankings, growth signals, hosted-party visibility, and public infrastructure quality.",
    highlights: ["Rankings and filters", "Regional distribution insights"],
  },
  {
    title: "Open Source Foundation",
    badge: "Platform",
    description:
      "Ship a self-hostable, extensible portal that validators and NaaS providers can adopt, customize, and contribute to.",
    highlights: ["Permissive licensing", "Shared operational baseline"],
  },
] as const;

export const growthStats = [
  { label: "Network launch", value: "24 validators", note: "July 2024" },
  { label: "Current scale", value: "980+ validators", note: "March 2026" },
  { label: "Growth factor", value: "24x", note: "in under two years" },
  { label: "2026 target", value: "1,000+ validators", note: "projected" },
] as const;

export const institutionalValidators = [
  "Goldman Sachs",
  "HSBC",
  "BNP Paribas",
  "Circle",
  "Chainlink",
  "Binance.US",
  "Crypto.com",
  "Gemini",
  "Kraken",
  "P2P.org",
  "Kiln",
  "IntellectEU",
  "Obsidian Systems",
  "Tradeweb",
] as const;

export const leaderboardPreview = [
  {
    rank: "01",
    name: "North Harbor Infrastructure",
    type: "Institutional",
    uptime: "99.98%",
    rewards: "14,260 CC",
    region: "North America",
  },
  {
    rank: "02",
    name: "Atlas Validator Services",
    type: "NaaS Provider",
    uptime: "99.95%",
    rewards: "13,940 CC",
    region: "Europe",
  },
  {
    rank: "03",
    name: "Summit Node Operations",
    type: "Independent",
    uptime: "99.92%",
    rewards: "13,410 CC",
    region: "Asia Pacific",
  },
] as const;

export const competitiveRows = [
  {
    feature: "Node health monitoring",
    cantonScan: false,
    theTie: false,
    ccTools: false,
    cantonMonitor: true,
    validatorPortal: true,
  },
  {
    feature: "Reward analytics",
    cantonScan: false,
    theTie: true,
    ccTools: true,
    cantonMonitor: false,
    validatorPortal: true,
  },
  {
    feature: "Foundation communication",
    cantonScan: false,
    theTie: false,
    ccTools: false,
    cantonMonitor: false,
    validatorPortal: true,
  },
  {
    feature: "Upgrade coordination",
    cantonScan: false,
    theTie: false,
    ccTools: false,
    cantonMonitor: false,
    validatorPortal: true,
  },
  {
    feature: "Compliance tracking",
    cantonScan: false,
    theTie: false,
    ccTools: false,
    cantonMonitor: false,
    validatorPortal: true,
  },
  {
    feature: "Multi-environment workspace",
    cantonScan: false,
    theTie: false,
    ccTools: false,
    cantonMonitor: false,
    validatorPortal: true,
  },
] as const;

export const landingFaqs = [
  {
    question: "How is this different from CantonScan or other analytics tools?",
    answer:
      "The portal is not a block explorer or a read-only analytics dashboard. It is an operational workspace for validator operators, combining health monitoring, rewards visibility, upgrade coordination, Foundation communication, and compliance tracking in one place.",
  },
  {
    question: "Who is the portal designed for?",
    answer:
      "It is designed for Canton validators, super validators, Node-as-a-Service providers, and Foundation operations teams that need a structured way to monitor infrastructure and coordinate operational work.",
  },
  {
    question: "What data powers the experience?",
    answer:
      "The portal is designed around public Scan API endpoints, validator health endpoints, and Foundation-provided communication data. The interface aggregates that information into a workflow that matches a validator operator’s daily routine.",
  },
  {
    question: "Which parts are public and which parts are private?",
    answer:
      "The overview and leaderboard act as the public transparency layer. The dashboard, rewards, communications, and compliance views are private authenticated workspace pages for validator operators.",
  },
  {
    question: "Why build the frontend first?",
    answer:
      "A premium frontend lets the product team validate information architecture, page hierarchy, and operator workflows before backend integration. It also creates a realistic foundation for stakeholder reviews and future development.",
  },
] as const;
