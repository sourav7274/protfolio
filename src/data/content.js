export const profile = {
  name: "Sourav Sarkar",
  role: "Full Stack Developer",
  specialization: "AI / LLM Systems",
  email: "souravsarkar6259@gmail.com",
  phone: "+91 8925743416",
  github: "https://github.com/sourav7274",
  linkedin: "https://www.linkedin.com/in/sourav-sarkar7274/",
  x: "https://x.com/sourav7274",
};

export const heroMetrics = [
  { value: "PRODUCTION", label: "SINCE SEP 2025", detail: "Carmaa Car Care" },
  { value: "<3s", label: "MEDIAN AI RESPONSE", detail: "WhatsApp sales agent" },
  { value: "+20%", label: "BOOKING CONVERSION", detail: "Lead-retargeting engine" },
  { value: "+30%", label: "USER ACQUISITION", detail: "Referral / token-wallet system" },
];

export const skillGroups = [
  {
    key: "ai",
    title: "AI / LLM",
    items: [
      "LangChain",
      "LangGraph",
      "Ollama",
      "Cloud LLM APIs (Gemini)",
      "Tool / agent orchestration",
      "Google Vision API",
    ],
  },
  {
    key: "frontend",
    title: "Frontend",
    items: [
      "React",
      "React Native",
      "Vite",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
      "WebSockets / Socket.io",
    ],
  },
  {
    key: "backend",
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT authentication",
      "LangChain agent orchestration",
    ],
  },
  {
    key: "databases",
    title: "Databases",
    items: [
      "MongoDB",
      "PostgreSQL",
      "DynamoDB",
      "Firebase schema design & data migration",
    ],
  },
  {
    key: "devops",
    title: "DevOps / Cloud",
    items: [
      "AWS (EC2, ECR, EventBridge)",
      "Docker",
      "Docker Swarm",
      "nginx",
      "Git",
      "CI/CD",
    ],
  },
  {
    key: "integrations",
    title: "Integrations",
    items: [
      "Meta APIs (WhatsApp / Facebook / Instagram)",
      "Razorpay",
      "Slack API",
      "Google Play Console",
    ],
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Carmaa Car Care",
    period: "Sep 2025 — Present",
    current: true,
    note: "Promoted from intern to full-time. I own the AI agents, the multi-tenant SaaS platform, and the production infrastructure they run on.",
    scope: [
      {
        theme: "AI sales agent",
        detail:
          "I built the WhatsApp sales agent that runs our booking funnel — intent detection, slot booking, payment collection — on a multi-provider LLM layer with failover, so one provider having a bad day doesn't take the agent down. It hands off to a human on Slack when a conversation needs one, and it sits alongside the owner's normal WhatsApp app rather than replacing it.",
      },
      {
        theme: "Multi-tenant platform",
        detail:
          "I designed the infrastructure that lets every business we onboard get its own isolated slice — data, config, resources — on a single Docker Swarm cluster, provisioned automatically with no manual setup per tenant.",
      },
      {
        theme: "Production infrastructure",
        detail:
          "I set up and run the AWS stack this all lives on: EC2, ECR, nginx at the edge for routing and TLS, EventBridge for scheduled workflows, plus our Android releases through the Play Console.",
      },
      {
        theme: "Product & growth",
        detail:
          "I built the billing system (Razorpay, feature gating, renewals), the owner-facing dashboard, and a referral/retargeting system that measurably moved booking conversion and user acquisition.",
      },
    ],
    metrics: [
      { value: "<3s", label: "median AI response time" },
      { value: "+20%", label: "booking conversion" },
      { value: "+30%", label: "user acquisition" },
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Carmaa Car Care",
    period: "May 2025 — Aug 2025",
    current: false,
    scope: [
      {
        theme: "Data layer",
        detail:
          "I restructured our MongoDB schemas to stay backward compatible through changes, and ran the migration myself so nothing broke and no data was lost along the way.",
      },
    ],
  },
];

export const openSource = [
  {
    name: "PeerTube",
    role: "Decentralized Video Platform",
    href: "https://github.com/Chocobozzz/PeerTube",
    stat: "2 merged PRs",
    contributions: [
      {
        title: "Alert users when their account logs in from a new device",
        detail:
          "PeerTube had no way to tell a user \"hey, someone just logged into your account from a device you've never used.\" I added device fingerprinting (hashed, not raw), a GeoIP + user-agent lookup, and wired it into the existing job queue so it doesn't block the login path.",
        pr: "PR #7737",
      },
      {
        title: "Fix the player controls that wouldn't stay hidden",
        detail:
          "Pausing a video should hide the controls after a moment — except a stray userActive(false) call was retriggering video.js's own activity timer, so they'd flicker back. Swapped it for direct DOM listeners that only reset the timer on real input.",
        pr: "PR #7725",
      },
    ],
  },
  {
    name: "Velonus",
    role: "Multi-Tool Security Scanner",
    href: "https://github.com/AliAmmar15/Velonus",
    stat: "PR #5",
    contributions: [
      {
        title: "Stop the same finding from showing up five times",
        detail:
          "Running multiple scanners against one codebase meant the same vulnerability showed up once per tool. Added a second pass that groups findings by (file, line, CWE) and keeps only the highest-severity report.",
        pr: "PR #5",
      },
    ],
  },
];

export const projects = [
  {
    key: "git-gandalf",
    title: "Git Gandalf",
    tagline: "A local LLM that reviews your commit before you do",
    tech: ["Node.js", "Ollama"],
    description:
      "I kept catching my own mistakes after committing — a stray API key, a push straight to main. So I built a pre-commit hook that runs staged changes through a local LLM (Ollama, nothing leaves your machine) before the commit lands. It checks for leaked secrets, branch protection, and a couple of escape hatches (safe-files, --force) for when you actually mean it.",
    howItWorks:
      "The hook diffs staged changes, prompts a local model with the rule set, and parses a structured allow/block verdict back — cheap enough to run on every commit without breaking flow, and because it's local, sensitive code never leaves the machine to get reviewed.",
    github: "https://github.com/sourav7274/git-gandalf",
    status: "AVAILABLE",
  },
];

export const education = {
  degree: "B.Tech, Mechanical Engineering",
  school: "National Institute of Technology, Durgapur",
  period: "Aug 2023",
};
