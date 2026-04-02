export const brandName = "CCVelidator Portal";

export const brandTagline =
  "Unified operations, rewards intelligence, and coordination infrastructure for Canton validators.";

export const heroMetrics = [
  { label: "Active validators", value: "980+", note: "MainNet, TestNet, and DevNet operators" },
  { label: "Super validators", value: "26", note: "Global Synchronizer participants" },
  { label: "Assets on-chain", value: "$6T+", note: "Tokenized value secured on Canton" },
  { label: "Daily volume", value: "$280B", note: "Institutional-grade transactional throughput" },
  { label: "Daily transactions", value: "600k+", note: "Sustained network activity" },
  { label: "Network uptime", value: "99.95%", note: "Aggregate infrastructure availability" },
] as const;

export const institutionalValidators = [
  { name: "Goldman Sachs", type: "Institutional bank" },
  { name: "HSBC", type: "Institutional bank" },
  { name: "BNP Paribas", type: "Institutional bank" },
  { name: "Circle", type: "Issuer" },
  { name: "Chainlink", type: "Infrastructure" },
  { name: "Binance.US", type: "Exchange" },
  { name: "Crypto.com", type: "Exchange" },
  { name: "Gemini", type: "Exchange" },
  { name: "Kraken", type: "Exchange" },
  { name: "P2P.org", type: "NaaS provider" },
  { name: "Kiln", type: "NaaS provider" },
  { name: "Tradeweb", type: "Institutional platform" },
] as const;

export const problemComparisonRows = [
  {
    area: "Node health",
    today: "Operators patch together Scan API queries, spreadsheets, and environment-specific checks.",
    portal: "One workspace consolidates liveness, uptime, missed rounds, version status, and environment health.",
  },
  {
    area: "Rewards visibility",
    today: "Finance teams manually reconcile liveness rewards, app rewards, and historical round data.",
    portal: "Period-based analytics, projections, and exportable records provide one financial source of truth.",
  },
  {
    area: "Foundation communication",
    today: "Telegram, Slack, and email threads fragment announcements and erase the audit trail.",
    portal: "Structured announcements, upgrade notices, ticket threads, and acknowledgement timestamps stay visible.",
  },
  {
    area: "Upgrade readiness",
    today: "Teams rely on manual outreach with limited visibility into who is ready for rollout.",
    portal: "Deadline-aware upgrade workflows track readiness confirmations across the validator set.",
  },
  {
    area: "Compliance standing",
    today: "Requirement tracking is periodic and reactive, with no shared compliance timeline.",
    portal: "Continuous requirement tracking shows streaks, contact verification, and upgrade completion status.",
  },
] as const;

export const workspaceModules = [
  {
    title: "Private Dashboard",
    href: "/dashboard",
    label: "Operations",
    description: "Daily nerve center for uptime, missed rounds, environment health, alerting, and version alignment.",
    highlights: ["System status banner", "90-day uptime history"],
  },
  {
    title: "Rewards Analytics",
    href: "/rewards",
    label: "Finance",
    description: "Track earnings composition, compare against the network, and prepare accounting-ready exports.",
    highlights: ["Projection models", "Accounting log"],
  },
  {
    title: "Communication Hub",
    href: "/comms",
    label: "Coordination",
    description: "Persistent announcements, upgrade notices, support tickets, and incident timelines in one place.",
    highlights: ["Readiness confirmations", "SLA-aware tickets"],
  },
  {
    title: "Compliance & Profile",
    href: "/compliance",
    label: "Governance",
    description: "Monitor requirement standing, publish validator identity, and manage party-hosting inventory.",
    highlights: ["15-day streak tracking", "Foundation-ready profile data"],
  },
  {
    title: "Leaderboard",
    href: "/leaderboard",
    label: "Transparency",
    description: "Public rankings, geographic distribution, operator mix, and comparative standing across the network.",
    highlights: ["Public rankings", "Distribution insights"],
  },
] as const;

export const requestAccessHighlights = [
  "Operator onboarding review for validators and super validators",
  "Workspace configuration for institutional and NaaS teams",
  "Governance, communication, and compliance workflow access",
] as const;

export const workspaceNavItems = [
  { href: "/", label: "Overview" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/rewards", label: "Rewards" },
  { href: "/comms", label: "Communications" },
  { href: "/compliance", label: "Compliance" },
  { href: "/leaderboard", label: "Leaderboard" },
] as const;

export const dashboardBanner = {
  tone: "amber",
  title: "Action required: version mismatch on TestNet",
  description:
    "MainNet remains stable, but TestNet is still running Splice 0.3.7 while the current release is 0.3.8.",
  version: "Splice 0.3.8",
  refreshed: "Updated 42 seconds ago",
} as const;

export const dashboardMetrics = [
  { label: "Uptime (30d)", value: "99.93%", tone: "green", detail: "2 degraded windows in the last 90 days" },
  { label: "Missed rounds", value: "18 / 50", tone: "amber", detail: "Within threshold, monitor before next epoch close" },
  { label: "Liveness status", value: "Connected", tone: "green", detail: "Global Synchronizer reachable across all environments" },
  { label: "Version status", value: "1 environment behind", tone: "amber", detail: "MainNet current, TestNet pending rollout" },
] as const;

export const environmentHealth = [
  { environment: "MainNet", status: "Healthy", tone: "green", version: "0.3.8", uptime: "99.98%", logs: "Last event 6h ago" },
  { environment: "TestNet", status: "Needs upgrade", tone: "amber", version: "0.3.7", uptime: "99.61%", logs: "Upgrade deadline in 18h" },
  { environment: "DevNet", status: "Stable", tone: "green", version: "0.3.8", uptime: "99.74%", logs: "No active incidents" },
] as const;

export const uptimeHistory = [
  "green","green","green","green","amber","green","green","green","green","green","green","green",
  "green","green","green","green","green","green","amber","green","green","green","green","green",
  "green","green","green","green","green","green","green","green","green","green","green","green",
  "green","green","green","green","green","green","green","amber","green","green","green","green",
  "green","green","green","green","green","green","green","green","green","green","green","green",
  "green","green","green","green","green","green","green","green","green","green","green","green",
  "green","green","green","green","green","green","green","green","green","green","green","green",
  "green","green","green","green","green","green","green","green","green","green","green","green"
] as const;

export const missedRoundEvents = [
  { time: "2026-03-28 02:14 UTC", rounds: 6, duration: "4m 18s", cause: "Validator maintenance window" },
  { time: "2026-03-21 19:06 UTC", rounds: 4, duration: "2m 43s", cause: "Temporary network congestion" },
  { time: "2026-03-11 07:32 UTC", rounds: 8, duration: "5m 05s", cause: "Failover test on TestNet" },
] as const;

export const alertRules = [
  { condition: "Node offline for more than 2 minutes", channels: "Email, Telegram", status: "Enabled" },
  { condition: "Missed rounds exceed 40 in the current epoch", channels: "Email, Webhook", status: "Enabled" },
  { condition: "Version behind latest available", channels: "Email", status: "Enabled" },
  { condition: "Reward anomaly vs trailing 30-day average", channels: "Email, Webhook", status: "Muted" },
] as const;

export const managedNodes = [
  { validator: "North Harbor MainNet", uptime: "99.98%", missedRounds: "8 / 50", rewards: "4,980 CC", status: "Healthy" },
  { validator: "North Harbor TestNet", uptime: "99.61%", missedRounds: "18 / 50", rewards: "1,120 CC", status: "Upgrade due" },
  { validator: "Atlas Client Relay", uptime: "99.95%", missedRounds: "10 / 50", rewards: "4,310 CC", status: "Healthy" },
] as const;

export const recentAlerts = [
  { title: "TestNet version mismatch", severity: "Amber", time: "18 minutes ago" },
  { title: "MainNet refresh delayed by 24s", severity: "Info", time: "2 hours ago" },
  { title: "Reward variance returned to baseline", severity: "Resolved", time: "Yesterday" },
] as const;

export const rewardsSummary = [
  { label: "Total earned", value: "14,260 CC", detail: "Selected period: last 30 days" },
  { label: "Liveness rewards", value: "9,420 CC", detail: "66% of total earnings" },
  { label: "App rewards", value: "3,110 CC", detail: "Driven by hosted-party activity" },
  { label: "Projected next period", value: "15,040 CC", detail: "Based on current 30-day run rate" },
] as const;

export const rewardsSeries = [
  { day: "01", liveness: 290, app: 100, superValidator: 50 },
  { day: "05", liveness: 310, app: 120, superValidator: 55 },
  { day: "10", liveness: 280, app: 140, superValidator: 48 },
  { day: "15", liveness: 325, app: 135, superValidator: 62 },
  { day: "20", liveness: 305, app: 110, superValidator: 58 },
  { day: "25", liveness: 332, app: 150, superValidator: 64 },
  { day: "30", liveness: 318, app: 142, superValidator: 61 },
] as const;

export const rewardBreakdown = [
  { label: "Liveness", value: "66%", width: "66%" },
  { label: "App provider", value: "22%", width: "22%" },
  { label: "Super validator", value: "12%", width: "12%" },
] as const;

export const rewardsComparison = [
  { label: "Your daily average", value: "475 CC", width: "78%" },
  { label: "Network average", value: "361 CC", width: "59%" },
  { label: "Top quartile average", value: "522 CC", width: "86%" },
] as const;

export const halvingForecast = {
  currentMintRate: "1,840 CC / day",
  nextHalving: "2026-09-14",
  projectedPostHalving: "7,480 CC / 30 days",
  narrative: "Assuming current uptime and hosted-party activity remain stable, earnings decline 14.2% after the next halving window.",
} as const;

export const earningsLog = [
  { date: "2026-03-30", liveness: "318", app: "142", superValidator: "61", total: "521", cumulative: "14,260" },
  { date: "2026-03-29", liveness: "309", app: "138", superValidator: "59", total: "506", cumulative: "13,739" },
  { date: "2026-03-28", liveness: "240", app: "112", superValidator: "52", total: "404", cumulative: "13,233" },
  { date: "2026-03-27", liveness: "321", app: "147", superValidator: "63", total: "531", cumulative: "12,829" },
] as const;

export const communicationChannels = [
  { name: "Announcements", badge: "3 unread" },
  { name: "Upgrade Notices", badge: "1 pending" },
  { name: "My Tickets", badge: "4 open" },
  { name: "Incidents", badge: "2 active" },
  { name: "Archive", badge: "Searchable" },
] as const;

export const upgradeReadiness = {
  version: "Splice 0.3.8",
  deadline: "18 hours remaining",
  confirmed: "742 / 980 validators confirmed",
} as const;

export const announcementFeed = [
  {
    category: "Upgrade",
    subject: "Mandatory TestNet upgrade to Splice 0.3.8",
    status: "Confirmation required",
    time: "Today · 14:20 UTC",
    body: "Apply the 0.3.8 release before the readiness deadline. Confirm once rollout completes and environment checks pass.",
  },
  {
    category: "Notice",
    subject: "Updated operating guide for reward reconciliation",
    status: "Unread",
    time: "Yesterday · 09:10 UTC",
    body: "The finance operations guide now includes revised handling for hosted-party reward attribution and export workflows.",
  },
  {
    category: "Resolved",
    subject: "MainNet latency event closed",
    status: "Acknowledged",
    time: "Mar 29 · 21:05 UTC",
    body: "The brief latency spike has been resolved. No rewards impact was recorded across the validator set.",
  },
] as const;

export const ticketRows = [
  { id: "T-1184", subject: "Reward discrepancy review", assigned: "Foundation Ops", status: "Awaiting response", updated: "2h ago" },
  { id: "T-1172", subject: "TestNet upgrade validation", assigned: "Release Engineering", status: "In review", updated: "Today" },
  { id: "T-1138", subject: "Incident contact rotation", assigned: "Validator Success", status: "Resolved", updated: "Mar 28" },
] as const;

export const incidents = [
  { id: "INC-204", severity: "P2", component: "Global Synchronizer", status: "Monitoring", elapsed: "38m", note: "Latency returned to baseline after routing changes." },
  { id: "INC-201", severity: "P3", component: "TestNet", status: "Resolved", elapsed: "1d", note: "Version skew closed following staged rollout." },
] as const;

export const complianceRequirements = [
  { title: "15-day continuous operation", value: "47 days", tone: "green", detail: "Requirement satisfied with uninterrupted MainNet service." },
  { title: "Missed rounds threshold", value: "18 / 50", tone: "amber", detail: "Below the compliance boundary, continue monitoring." },
  { title: "24/7 technical contact", value: "Verified", tone: "green", detail: "noc@northharbor.io registered and tested." },
  { title: "Upgrade completion", value: "Pending on TestNet", tone: "amber", detail: "MainNet compliant, TestNet confirmation still open." },
] as const;

export const complianceHistory = [
  { epoch: "Epoch 182", operation: "Met all requirements", status: "Compliant" },
  { epoch: "Epoch 181", operation: "Missed rounds elevated during maintenance", status: "Reviewed" },
  { epoch: "Epoch 180", operation: "Contact rotation completed", status: "Compliant" },
  { epoch: "Epoch 179", operation: "Version alignment confirmed", status: "Compliant" },
] as const;

export const profileSummary = {
  organization: "North Harbor Infrastructure",
  operatorType: "Institutional",
  location: "London, United Kingdom",
  website: "northharbor.io",
  description: "Institutional-grade Canton validator focused on regulated asset infrastructure and high-availability operations.",
  joinDate: "July 2024",
  validatorId: "validator-0x8a93...2df1",
  keyManagement: "Cloud KMS with hardware-backed signing",
  lastRotation: "2026-02-11",
  contactEmail: "noc@northharbor.io",
} as const;

export const hostingInventory = [
  { party: "GS-Settlement-01", organization: "Goldman Sachs", type: "Institutional", activity: "92%", lastActive: "4m ago", status: "Active" },
  { party: "Circle-Treasury-02", organization: "Circle", type: "Issuer", activity: "86%", lastActive: "12m ago", status: "Active" },
  { party: "NH-Internal-Dev", organization: "North Harbor", type: "Internal", activity: "41%", lastActive: "2h ago", status: "Idle" },
  { party: "Tradeweb-Client-A", organization: "Tradeweb", type: "NaaS client", activity: "78%", lastActive: "18m ago", status: "Active" },
] as const;

export const naasClients = [
  { validator: "Tradeweb Custody Node", uptime: "99.97%", parties: "22", earnings: "5,820 CC" },
  { validator: "Circle Treasury Relay", uptime: "99.95%", parties: "14", earnings: "4,630 CC" },
  { validator: "Capital Markets Edge", uptime: "99.89%", parties: "11", earnings: "3,940 CC" },
] as const;

export const leaderboardHealth = [
  { label: "Active validators", value: "980+" },
  { label: "Super validators", value: "26" },
  { label: "Average uptime", value: "99.95%" },
  { label: "Missed rounds rate", value: "11 / 50 avg" },
] as const;

export const leaderboardSpotlight = [
  { rank: "01", name: "North Harbor Infrastructure", metric: "99.98% uptime", location: "United Kingdom", tenure: "20 months" },
  { rank: "02", name: "Atlas Validator Services", metric: "14,880 CC earned", location: "Germany", tenure: "18 months" },
  { rank: "03", name: "Summit Node Operations", metric: "145 hosted parties", location: "Singapore", tenure: "17 months" },
] as const;

export const leaderboardRows = [
  { rank: "01", name: "North Harbor Infrastructure", type: "Institutional", region: "Europe", tenure: "20 months", uptime: "99.98%", rewards: "14,260 CC", parties: "62", status: "Active" },
  { rank: "02", name: "Atlas Validator Services", type: "NaaS", region: "Europe", tenure: "18 months", uptime: "99.95%", rewards: "14,880 CC", parties: "88", status: "Active" },
  { rank: "03", name: "Summit Node Operations", type: "Independent", region: "APAC", tenure: "17 months", uptime: "99.93%", rewards: "13,910 CC", parties: "41", status: "Active" },
  { rank: "04", name: "Kiln Managed Canton", type: "NaaS", region: "Europe", tenure: "16 months", uptime: "99.90%", rewards: "13,440 CC", parties: "77", status: "Active" },
  { rank: "05", name: "Circle Validator Cluster", type: "Institutional", region: "North America", tenure: "15 months", uptime: "99.88%", rewards: "12,980 CC", parties: "39", status: "Degraded" },
  { rank: "06", name: "Tradeweb Operations Node", type: "Institutional", region: "North America", tenure: "14 months", uptime: "99.87%", rewards: "12,610 CC", parties: "31", status: "Active" },
] as const;

export const regionalDistribution = [
  { label: "North America", value: "38%", width: "38%" },
  { label: "Europe", value: "31%", width: "31%" },
  { label: "Asia Pacific", value: "22%", width: "22%" },
  { label: "Other", value: "9%", width: "9%" },
] as const;

export const operatorDistribution = [
  { label: "Institutional banks", value: "28%", width: "28%" },
  { label: "NaaS providers", value: "23%", width: "23%" },
  { label: "Infrastructure firms", value: "31%", width: "31%" },
  { label: "Independent operators", value: "18%", width: "18%" },
] as const;

export const growthTimeline = [
  { month: "Jul 2024", validators: 24 },
  { month: "Dec 2024", validators: 140 },
  { month: "Jun 2025", validators: 390 },
  { month: "Dec 2025", validators: 720 },
  { month: "Apr 2026", validators: 980 },
] as const;

export const leaderboardPrivacyNote =
  "Uptime percentage and active status are shown for all validators by default. Reward totals and hosted-party counts follow validator-controlled visibility settings, while detailed party identifiers remain private.";
