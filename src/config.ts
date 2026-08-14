import type { Locale } from "@/i18n/translations";

// ─── Types ────────────────────────────────────────────────────────────────────

export type EngineeringPage = {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  markdownContent: string;
};

export type Project = {
  name: string;
  description: string;
  link: string;
  pageSlug?: string;
  skills: string[];
};

export type ExperienceItem = {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  dateRange: string;
  achievements: string[];
};

export type NavigationStrings = {
  home: string;
  about: string;
  projects: string;
  experience: string;
  education: string;
  pages: string;
  contact: string;
  aria: {
    toggleTheme: string;
    toggleMenu: string;
    toggleLanguage: string;
  };
};

export type LocaleContent = {
  title: string;
  seo: {
    description: string;
  };
  navigation: NavigationStrings;
  social: {
    aria: {
      email: string;
      linkedin: string;
      github: string;
    };
  };
  hero: {
    namePrefix: string;
    imageAlt: string;
    buttons: {
      primary: string;
      resume: string;
      resumeLoading: string;
    };
  };
  about: {
    sectionTitle: string;
    skillsLabel: string;
    body: string;
    skills: string[];
  };
  projects: {
    sectionTitle: string;
    deepDiveLabel: string;
    sourceCodeLabel: string;
    items: Project[];
  };
  engineeringPages: {
    overheadLabel: string;
    title: string;
    description: string;
  };
  pages: EngineeringPage[];
  experience: {
    sectionTitle: string;
    items: ExperienceItem[];
  };
  education: {
    sectionTitle: string;
    items: EducationItem[];
  };
  contact: {
    sectionTitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
      sentConfirmation: string;
      emailSubjectTemplate: string;
      emailBodyTemplate: string;
    };
    labels: {
      availability: string;
      responseTime: string;
      timezone: string;
      domains: string;
      channels: string;
    };
    availability: {
      status: string;
      workMode: string;
    };
    responseTime: string;
    timezone: string;
    domains: string[];
    channels: {
      linkedin: { label: string };
      github: { label: string };
    };
  };
  footer: {
    copyright: string;
    builtWithLabel: string;
    builtWithName: string;
  };
};

//////////////////////////////////////////////////////////////////
// Shared / Locale-Independent Data
// Controls: identity, theme, and the actual addresses/URLs/slugs
// used for routing and linking. None of this is user-facing copy —
// see src/i18n/translations.ts and the `content` export below for
// all localized text (English and Spanish).
//////////////////////////////////////////////////////////////////

export const siteConfig = {
  name: "Vicente Mosquera",

  //////////////////////////////////////////////////////////////////
  // Theme
  // Controls: --accent-color CSS variable applied globally.
  // accentColorLight is used in light mode and the PDF resume header.
  // accentColorDark is used in dark mode.
  //////////////////////////////////////////////////////////////////

  accentColorLight: "#420191",
  accentColorDark: "#9b6dff",

  //////////////////////////////////////////////////////////////////
  // Social Links
  // Controls: social icon hrefs in Hero, Header, and Footer.
  // aria labels are localized — see content.<locale>.social.aria.
  //////////////////////////////////////////////////////////////////

  social: {
    email: "vicentemosqueralujan@gmail.com",
    linkedin: "https://linkedin.com/in/vicentemosqueralujan",
    github: "https://github.com/vicentemosqueralujan",
    handles: {
      linkedin: "vicentemosqueralujan",
      github: "vicentemosqueralujan",
    },
  },

  //////////////////////////////////////////////////////////////////
  // Home Page — Hero Section
  // Controls: portrait image path.
  //////////////////////////////////////////////////////////////////

  hero: {
    image: "/vicente.png",
  },

  //////////////////////////////////////////////////////////////////
  // Contact
  // toEmail is used for the mailto href in the form submission script.
  //////////////////////////////////////////////////////////////////

  contact: {
    toEmail: "vicentemosqueralujan@gmail.com",
  },

  //////////////////////////////////////////////////////////////////
  // Footer
  // builtWithUrl is a link, not user-facing copy.
  //////////////////////////////////////////////////////////////////

  footer: {
    builtWithUrl: "https://nextjs.org",
  },
};

//////////////////////////////////////////////////////////////////
// English Content (default locale)
//////////////////////////////////////////////////////////////////

const en: LocaleContent = {
  title: "Systems Administrator | IT Automation",

  seo: {
    description:
      "Building intelligent systems that automate, scale, and deliver. Specializing in AI workflows, infrastructure automation, and backend engineering.",
  },

  navigation: {
    home: "Home",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    pages: "Pages",
    contact: "Contact",
    aria: {
      toggleTheme: "Toggle theme",
      toggleMenu: "Toggle navigation menu",
      toggleLanguage: "Switch language",
    },
  },

  social: {
    aria: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },

  hero: {
    namePrefix: "I'm",
    imageAlt: "Portrait of Vicente Mosquera",
    buttons: {
      primary: "View Projects",
      resume: "Download resume",
      resumeLoading: "Generating PDF...",
    },
  },

  about: {
    sectionTitle: "About Me",
    skillsLabel: "Skills",
    body: "Systems Administrator with 6+ years of experience in infrastructure support, endpoint management, and IT operations. Skilled in Windows Server, Linux, Active Directory, Microsoft 365, Intune, NinjaOne, PowerShell, Python, and workflow automation. Experienced in designing automation solutions, integrating APIs, and improving operational efficiency through monitoring, scripting, and process optimization. Bilingual in English and Spanish.",
    skills: [
      "System Administration",
      "IT Automation",
      "Windows Server",
      "Linux",
      "Active Directory",
      "Microsoft 365",
      "Intune",
      "NinjaOne",
      "Python",
      "PowerShell",
      "REST APIs",
      "n8n",
      "Docker",
      "Git",
      "Infrastructure Monitoring",
      "Endpoint Management",
    ],
  },

  projects: {
    sectionTitle: "Projects",
    deepDiveLabel: "Read page",
    sourceCodeLabel: "View source",
    items: [
      {
        name: "Automated Asset Inventory Workflow",
        description:
          "An event-driven n8n data orchestration pipeline that reconciles hardware and software inventory across an RMM platform, HR records, and IT tracking sheets. A 5-branch parallel index build applies hybrid source-of-truth rules per field, then pushes structured, health-scored inventory records to a database, a spreadsheet, and Prometheus for live Grafana dashboarding — with automated floor-plan diffing to flag unauthorized hardware moves.",
        link: "",
        pageSlug: "automated-asset-inventory-workflow",
        skills: ["n8n", "REST API", "Google Sheets", "NocoDB", "Prometheus", "JavaScript"],
      },
      {
        name: "FarmBot — Render Farm Status Engine",
        description:
          "An n8n automation engine polling a distributed render farm via Prometheus exporters on a 3-minute cron cycle. Processes slash commands from a chat platform through a Google Apps Script bridge and dispatches rich status cards with binary severity classification. Supports on-demand reports, scheduled window broadcasts, and automated overnight file delivery via SSH and cloud storage.",
        link: "",
        pageSlug: "farmbot-render-farm-status-engine",
        skills: ["n8n", "Google Apps Script", "Prometheus", "SSH", "Google Drive", "JavaScript"],
      },
      {
        name: "Morningbot — Infrastructure Telemetry Reporter",
        description:
          "A chronological telemetry reporter dispatching daily infrastructure health snapshots, system metrics, and operations digests. Triggers via cron at 08:30, fetches non-closed support tickets from a ticketing API via OAuth2, and computes SLA risk scores, technician workload rankings, and customer distribution. Formats a structured Markdown digest and delivers it to a Microsoft Teams channel through a Power Automate webhook.",
        link: "",
        pageSlug: "morningbot-infrastructure-telemetry-reporter",
        skills: ["n8n", "OAuth2", "Power Automate", "Microsoft Teams", "JavaScript", "REST API"],
      },
      {
        name: "Adopta y Deja Tu Huella",
        description:
          "A full-stack pet adoption and animal welfare platform connecting shelters with prospective adopters. Features structured pet listings with breed, age, and health metadata, an adoption request workflow with status tracking, and a shelter management interface for updating animal availability. Built to streamline the adoption journey from discovery to placement.",
        link: "https://github.com/vicentemosqueralujan/adoptaydejatuhuella",
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      },
      {
        name: "Rick and Morty Guess Game",
        description:
          "An interactive character-guessing game built on the Rick and Morty REST API. Fetches randomized character data asynchronously, dynamically renders character cards, and challenges players to identify characters from the show. Features score tracking, streak mechanics, and progressive difficulty driven by client-side state management.",
        link: "https://github.com/vicentemosqueralujan/rick-and-morty-guess-game",
        skills: ["JavaScript", "REST API", "CSS", "HTML"],
      },
      {
        name: "NebulaPortfolio Template",
        description:
          "A premium, minimalist portfolio architecture featuring frosted glassmorphism elements, dynamic theme synchronization, and single-file data configurations. Optimized for open-source scaling.",
        link: "https://github.com/vicentemosqueralujan/nebulaportfolio",
        skills: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "FriendlyPassGen",
        description:
          "A sleek, Apple-inspired friendly password generator built with Next.js, TypeScript, and Tailwind CSS. Runs 100% locally with zero data tracking. Optimized for Vercel.",
        link: "https://github.com/vicentemosqueralujan/friendlypassgen",
        skills: ["Next.js", "TypeScript", "Python", "JavaScript"],
      },
    ],
  },

  engineeringPages: {
    overheadLabel: "Engineering Documentation",
    title: "Pages",
    description:
      "Deep operational write-ups on the engineering challenges, architectural decisions, and technical journeys behind each project.",
  },

  pages: [
    {
      id: "automated-asset-inventory-workflow",
      title: "Automated Asset Inventory Workflow",
      subtitle:
        "Event-driven n8n pipeline for hardware/software inventory reconciliation across RMM, HR, and IT data sources.",
      slug: "automated-asset-inventory-workflow",
      markdownContent: `## Overview

Asset data spread across three disconnected systems — an RMM platform (NinjaOne), an HR records spreadsheet, and an internal IT tracking sheet — would drift out of sync within days of any onboarding, offboarding, or device swap. This n8n pipeline runs on a weekday schedule and reconciles all three into one authoritative inventory, then exposes it as live metrics on a Grafana dashboard.

## How It Works

1. **Trigger**: A cron schedule fires on weekday mornings.
2. **HR pre-refresh**: A working HR sheet copy is cleared and re-populated from the production HR source before anything else runs, so downstream lookups never read a stale contract record.
3. **Parallel ingest (5 branches)**: The RMM API (filtered to the managed organization, excluding virtual machines), the HR sheet, an Active Directory export, an IT tracking sheet, and a physical floor-plan sheet are each fetched and normalized independently. Each branch produces its own lookup index, so a slow or failing source never blocks the others.
4. **Barrier merge**: All five streams converge behind wait nodes into a single merge step once every branch has resolved.
5. **Hybrid enrichment**: One record per device is built by uniting the RMM device set with the IT sheet's hostname set (FQDNs normalized, domain suffixes stripped). Each field picks its authoritative source — hardware specs come from the RMM, manual assignments and physical location come from the IT sheet, and department/contract dates come from HR with an Active Directory fallback.
6. **Persist**: The enriched record is upserted into a Google Sheets working copy and into a structured database table, both keyed on hostname.
7. **Derive metrics**: A scoring step computes a 0–100 device health score (disk usage, inactivity, offline state, contract status), a disk status label, a device state (\`AVAILABLE\` / \`IN_USE\` / \`IDLE\`), and days remaining on the assigned contract.
8. **Publish**: The computed fields are serialized into Prometheus exposition format and pushed to a metrics gateway, which a Grafana dashboard queries continuously.
9. **Floor-plan diff-and-patch**: In parallel, current seat assignments are diffed against the floor-plan sheet's last known state; only cells that actually changed are written back, avoiding unnecessary spreadsheet API calls.

### Source-of-Truth Rules

Device hostname, serial number, processor, memory, and OS are authoritative from the RMM — they auto-update after any hardware or software change. Seat, GPU, and physical location are authoritative from the IT sheet — they survive OS reinstalls that would otherwise wipe RMM-reported context. Department and contract dates are authoritative from HR, falling back to the AD organizational unit when HR has no record.

## Returned Value / Deliverable

- **Structured inventory rows**: One record per device, upserted into a database table and a human-readable spreadsheet, each tagged \`ACTIVE_DEVICE\` or \`INVENTORY_ONLY\` depending on whether it currently reports to the RMM.
- **Prometheus metric vectors**: A full metric family per device — device presence, disk usage/capacity, RAM tier, online/offline state, health score, device state, contract status and days remaining, location, seat, GPU, OS build, and an "expiring contracts" series for HR follow-up.
- **Live Grafana dashboard**: Panels covering total/available device counts, a filterable full-inventory table, disk usage by device, contracts expiring soon, and breakdowns by location, department, GPU, OS version, RAM tier, and hardware model.
- **Floor-plan sync**: The seating spreadsheet is kept in lockstep with actual assignments, surfacing any desk change that wasn't accompanied by a corresponding HR ticket.

## Challenges

The main engineering challenge was handling partial failures gracefully across five independent data sources feeding one merge point — a slow spreadsheet API response couldn't be allowed to stall the RMM branch, and a single malformed row couldn't be allowed to break the whole run. Every field lookup uses null-safe accessors with explicit fallbacks, and the health-scoring and Prometheus-serialization steps coerce every numeric input before arithmetic, so a missing or malformed source field degrades a single label to "unknown" rather than failing the run.

## Outcome

Inventory drift across the three source systems dropped sharply after rollout, and the floor-plan diffing step surfaced desk reassignments that had no corresponding record in the HR system — catching unauthorized hardware moves within a single run cycle instead of at the next manual audit.`,
    },
    {
      id: "morningbot-infrastructure-telemetry-reporter",
      title: "Morningbot — Infrastructure Telemetry Reporter",
      subtitle:
        "Daily infrastructure health digest delivered to Microsoft Teams via OAuth2, ticket SLA scoring, and structured Markdown formatting.",
      slug: "morningbot-infrastructure-telemetry-reporter",
      markdownContent: `## Overview

The operations team started each morning manually checking a ticketing board to build a mental model of overnight support load. Morningbot automates this into a single structured digest posted to a Microsoft Teams channel every weekday at 08:30.

## How It Works

1. **Trigger**: A schedule node fires every weekday morning.
2. **Fetch**: An HTTP request authenticates via OAuth2 against the RMM platform's ticketing API and pulls every ticket currently sitting on the support board — the endpoint's own board filter is relied on to exclude closed tickets server-side.
3. **Parse and classify**: A code step walks the raw ticket array through a chain of null-safe accessors (status, priority, assignee, organization, tags, timestamps can each arrive under several different field names depending on how the ticket was created) and buckets every ticket by numeric status ID into new / open / pending / on-hold / project / approved.
4. **Aggregate**: From the open-ticket set, the pipeline computes SLA age buckets (red: 24h+, orange: 1–24h, green: under 1h), a weighted health-score percentage, a top-10 technician workload ranking, a top-10 customer ranking, tag/status/form distributions, and the three longest-open tickets with direct deep links.
5. **Format**: All of the above is assembled into a single Spanish-language Markdown report — summary counts, SLA risk, technician bar chart, customer breakdown, and the oldest open tickets in detail.
6. **Deliver**: The full structured payload is POSTed to a Power Automate webhook, which is responsible for routing the report text into the Teams channel. The HTTP node is configured to continue on error rather than fail the run, so a delivery hiccup never blocks the next day's execution — it's logged as a non-fatal delivery failure instead.

### SLA Health Score

\`\`\`javascript
healthScore = openTickets.length === 0
  ? 100
  : Math.round(((slaGreen + slaOrange * 0.5) / openTickets.length) * 100)
\`\`\`

Tickets under an hour old count fully toward a healthy score, tickets between 1–24 hours count at half weight, and tickets past 24 hours count as full risk — so the score degrades smoothly as the backlog ages rather than snapping between states.

## Returned Value / Deliverable

The pipeline returns one structured JSON object per run, containing:

\`\`\`json
{
  "mensaje": "<Markdown report>",
  "markdown": "<Markdown report>",
  "totalTickets": 28,
  "openTickets": 24,
  "criticalTickets": 1,
  "healthScore": 60,
  "generatedAt": "2026-06-10T06:30:00.000Z"
}
\`\`\`

The Markdown fields are what actually reach the Teams channel; the numeric fields travel alongside for any downstream consumer that wants raw metrics rather than formatted text. The operational impact is a shared, consistent starting point for the morning standup — a per-technician workload view, an SLA-age-weighted risk score, and the oldest unattended tickets surfaced automatically instead of being reconstructed by hand from a live board every morning.

## Challenges

Ticket data from an RMM platform's board API is polymorphic — the same logical field (assignee, organization, timestamp) can arrive under several different property names depending on how a ticket was created or integrated. Every accessor in the parsing step resolves through an explicit fallback chain and lands on a safe default ("Unknown", "Sin Cliente") rather than throwing, so a partially-populated ticket degrades one line of the report instead of failing the whole run.`,
    },
    {
      id: "farmbot-render-farm-status-engine",
      title: "FarmBot — Render Farm Status Engine",
      subtitle:
        "n8n automation engine monitoring a Thinkbox Deadline render farm via Prometheus exporters, dispatching binary-severity status cards to Google Chat through a Google Apps Script command bridge.",
      slug: "farmbot-render-farm-status-engine",
      markdownContent: `## Overview

FarmBot is an n8n automation engine that monitors a Thinkbox Deadline render farm and delivers real-time status cards to Google Chat. A Google Apps Script webhook ingests artist slash commands into a Google Sheets queue, which n8n polls on a 3-minute cron cycle to process and dispatch farm reports — covering on-demand requests, scheduled window broadcasts, and automated overnight/weekend file deliveries.

## How It Works

1. **Command capture**: An artist types \`/report\` or \`/alerts\` in Google Chat. A Google Apps Script \`doPost()\` endpoint receives the slash command, appends a \`Pending\` row to a request queue sheet, and upserts a user registry keyed by email — then immediately returns an acknowledgement card so the artist isn't left waiting on the synchronous webhook.
2. **Poll cycle**: An n8n cron trigger fires every 3 minutes, reads the current time in the studio's local timezone, and routes execution through a switch gate into one of four branches.
3. **Route resolution**:
   - **Weekend Report** (Monday morning): fetch the latest weekend render report file over SSH, upload it to a shared Drive folder, and fan out one card per active chat space.
   - **Night Report** (Tuesday–Friday morning): same pattern for the overnight report file.
   - **Window Broadcast** (three fixed times daily): pull live node and job telemetry, compute farm status, and push it to every space that opted into scheduled updates.
   - **On-Demand** (all other times): drain the pending request queue in FIFO order, resolving each artist's \`/report\` or \`/alerts\` command against live telemetry.
4. **Telemetry parsing**: Node-level metrics (total/rendering/idle/offline/stalled nodes, utilization percentage, five tracked render pools) and job-level metrics (rendering/queued/failed job counts, remaining tasks, estimated finish time) are pulled from two separate Prometheus exporters and parsed into a single structured object.
5. **Alerts path extra step**: For \`/alerts\`, the pipeline first SSHs into the render management host to confirm the core render-management services are actually running before pulling telemetry — if they're down, it skips straight to a hard-coded critical card instead of attempting a metric fetch that would only fail.
6. **Card dispatch**: A structured Google Chat Card V2 payload is built per recipient and POSTed to the Chat API, with automatic retry on transient failures.

## Binary Severity Engine

Every execution resolves to exactly one of two states — there is no intermediate "warning" tier. **Critical** fires only if both telemetry exporters are unreachable, if only the node exporter is down (worker capacity can't be assessed), or if stalled nodes exceed 50% of active capacity. Everything else — including the job exporter being offline on its own, an elevated failed-job count, or an idle farm — resolves to **Healthy**. Stall-density is computed with a cascading fallback denominator so an offline farm (zero nodes reporting) collapses to \`0\` rather than \`NaN\` or a divide-by-zero error.

## Returned Value / Deliverable

- **Google Chat Card V2 messages**: The system's actual output unit. Every path — on-demand reply, scheduled broadcast, or overnight delivery — ends in one or more structured cards posted to specific chat spaces, each carrying a binary status badge (🟢 Healthy / 🔴 Critical), utilization and pool breakdowns, or a downloadable report link.
- **Archived report files**: Overnight and weekend \`.xlsx\` render reports are uploaded to a shared Drive folder before the notification card is sent, so the card's download link always points at a durable copy.
- **Operational impact**: Artists and supervisors get farm status on demand instead of needing render-farm-console access, and the automated night/weekend reports mean nobody has to be online after hours to confirm the farm kept running.

## Error Handling

Queue and registry reads run with automatic retry and are configured to always output data, so an empty result is a valid "nothing pending" state rather than a failure. Telemetry fetches are configured to continue on failure, setting explicit error flags that downstream logic checks — a missing job exporter degrades the report's queue section to "unavailable" without ever escalating to a critical status on its own. The SSH health check ahead of the alerts path is the only branch that intentionally short-circuits telemetry entirely, since a confirmed core-service outage makes a metrics fetch pointless.`,
    },
  ],

  experience: {
    sectionTitle: "Experience",
    items: [
      {
        company: "Xatélite",
        title: "Systems Administrator | IT Automation",
        dateRange: "September 2025 - Present",
        bullets: [
          "Provided Level 1/2 technical support, managing ticketing workflows, endpoint operations, and user lifecycles within Active Directory and Office 365 environments.",
          "Designed event-driven n8n data orchestration pipelines to automate asset inventory reconciliation, dynamic hardware allocations, and system syncing.",
          "Engineered self-healing watchdog automation layers and telemetry monitoring using n8n, Prometheus, and JavaScript to track system health and risk scores.",
          "Developed Python desktop tools and specialized network utilities (Wake-on-LAN) for infrastructure orchestration via RMM platforms (NinjaOne).",
          "Built automated telemetry pipelines using OAuth2, GraphQL, and webhooks to deliver infrastructure snapshots and documentation directly to MS Teams.",
          "Administered secure Synology NAS environments, Proxmox virtual machines, and FortiGate firewalls, ensuring reliable network and share permissions.",
        ],
      },
      {
        company: "TIPSA",
        title: "System Administrator",
        dateRange: "May 2025 - August 2025",
        bullets: [
          "Deployed Snipe-IT on Windows Server 2019 and FOG Project on Ubuntu Server to automate workstation imaging.",
          "Administered SimpliVity virtualization, VMware VMs, and Veeam backup infrastructure with full policy configuration.",
          "Configured WizyEMM MDM for Android device management and monitored NAS RAID health and automated backups.",
          "Maintained Fortinet firewalls and corporate security platforms including SentinelOne and Darktrace.",
          "Provided advanced technical support, hardware provisioning, and enterprise audiovisual setups.",
        ],
      },
      {
        company: "Enalta",
        title: "IT Technician",
        dateRange: "May 2023 - May 2025",
        bullets: [
          "Delivered Level 1/2 technical support via Jira Service Management, phone, and email workflows.",
          "Administered user lifecycles, mailboxes, and permissions within Active Directory and Exchange Admin Center.",
          "Enrolled and managed 200+ Android Samsung devices using Microsoft Intune MDM policies.",
          "Deployed and supervised 200 iPads leveraging AirWatch MDM infrastructure.",
          "Customized Jira service workflows, screens, and automation rules for operational optimization.",
        ],
      },
      {
        company: "Spectrum",
        title: "IT Technician",
        dateRange: "July 2024 - August 2024",
        bullets: [
          "Provided end-user technical support for Windows client operating systems and Microsoft Azure environments.",
          "Administered Active Directory accounts and provided dedicated platform support for SAP Business One (B1).",
          "Maintained corporate IT inventory tracking data and delivered interactive meeting room technical support.",
        ],
      },
      {
        company: "Inetum",
        title: "IT Technician",
        dateRange: "April 2021 - May 2023",
        bullets: [
          "Resolved technical incidents and administered Active Directory user accounts and access permissions.",
          "Supported enterprise networking infrastructure, troubleshooting VPN, LAN/WAN, and MPLS connections.",
          "Managed employee IT onboarding processes and provided engineering support for corporate audiovisual systems.",
        ],
      },
      {
        company: "Randstad",
        title: "IT Support",
        dateRange: "July 2020 - April 2021",
        bullets: [
          "Resolved hardware and software incidents through Jira Service Desk, phone, and email channels.",
          "Administered Active Directory, managing user creation, security permissions, and password resets.",
          "Installed, configured, and maintained workplace endpoints, computer hardware, and printing systems.",
          "Delivered technical support for hardware, software, and audiovisual systems in production studios and meeting rooms.",
        ],
      },
      {
        company: "Randstad",
        title: "IT Support Intern",
        dateRange: "September 2019 - June 2020",
        bullets: [
          "Supported hardware and software incident resolution via Jira Service Desk ticketing, phone, and email.",
          "Learned Active Directory administration basics including account configuration, permissions, and password management.",
          "Assisted with deployment, configuration, and preventive maintenance of computer systems and printing hardware.",
          "Aided in the technical support of software, hardware, and audiovisual infrastructure within meeting rooms and studios.",
        ],
      },
    ],
  },

  education: {
    sectionTitle: "Education",
    items: [
      {
        school: "iFP. Innovación en Formación Profesional",
        degree: "Web Application Development (DAW)",
        dateRange: "Feb 2026 - Feb 2027",
        achievements: [
          "Specialization in web application development",
          "Software engineering and modern web technologies",
          "Full-stack application design and implementation",
        ],
      },
      {
        school: "iFP. Innovación en Formación Profesional",
        degree: "Multiplatform Application Development (DAM)",
        dateRange: "Sep 2021 - Feb 2024",
        achievements: [
          "Object-oriented programming and software engineering",
          "Database design and application development",
          "Desktop, mobile, and multiplatform application development",
        ],
      },
      {
        school: "Erin College",
        degree: "B2 English Course",
        dateRange: "May 2024 - Jun 2024",
        achievements: [
          "Immersive English language program in Dublin, Ireland",
          "Professional and technical communication skills",
          "International academic experience",
        ],
      },
      {
        school: "IES Alonso de Avellaneda",
        degree: "Technician in Microcomputer Systems and Networks (SMR)",
        dateRange: "Sep 2018 - Jul 2020",
        achievements: [
          "Computer systems installation and maintenance",
          "Network administration and troubleshooting",
          "Hardware repair and IT support fundamentals",
        ],
      },
    ],
  },

  contact: {
    sectionTitle: "Contact",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Project Details",
      messagePlaceholder: "Describe your project or inquiry...",
      submitButton: "Send Message",
      sentConfirmation: "Sent ✓",
      emailSubjectTemplate: "Project Inquiry from {name}",
      emailBodyTemplate: "Name: {name}\nEmail: {email}\n\nProject Details:\n{message}",
    },
    labels: {
      availability: "Availability",
      responseTime: "Response Time",
      timezone: "Timezone",
      domains: "Domains",
      channels: "Channels",
    },
    availability: {
      status: "Open to opportunities",
      workMode: "Remote",
    },
    responseTime: "Usually within 24–48 hours",
    timezone: "WEST UTC+1 — Europe",
    domains: ["IT Automation", "Systems Admin", "AI Workflows"],
    channels: {
      linkedin: { label: "LinkedIn" },
      github: { label: "GitHub" },
    },
  },

  footer: {
    copyright: "All rights reserved.",
    builtWithLabel: "Built with",
    builtWithName: "Next.js",
  },
};

//////////////////////////////////////////////////////////////////
// Spanish Content
//////////////////////////////////////////////////////////////////

const es: LocaleContent = {
  title: "Administrador de Sistemas | Automatización de TI",

  seo: {
    description:
      "Construyendo sistemas inteligentes que automatizan, escalan y entregan resultados. Especializado en flujos de trabajo de IA, automatización de infraestructura e ingeniería backend.",
  },

  navigation: {
    home: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos",
    experience: "Experiencia",
    education: "Educación",
    pages: "Páginas",
    contact: "Contacto",
    aria: {
      toggleTheme: "Cambiar tema",
      toggleMenu: "Alternar menú de navegación",
      toggleLanguage: "Cambiar idioma",
    },
  },

  social: {
    aria: {
      email: "Correo electrónico",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },

  hero: {
    namePrefix: "Soy",
    imageAlt: "Retrato de Vicente Mosquera",
    buttons: {
      primary: "Ver Proyectos",
      resume: "Descargar currículum",
      resumeLoading: "Generando PDF...",
    },
  },

  about: {
    sectionTitle: "Sobre Mí",
    skillsLabel: "Habilidades",
    body: "Administrador de Sistemas con más de 6 años de experiencia en soporte de infraestructura, gestión de endpoints y operaciones de TI. Con dominio de Windows Server, Linux, Active Directory, Microsoft 365, Intune, NinjaOne, PowerShell, Python y automatización de flujos de trabajo. Con experiencia en el diseño de soluciones de automatización, integración de APIs y mejora de la eficiencia operativa mediante monitorización, scripting y optimización de procesos. Bilingüe en inglés y español.",
    skills: [
      "Administración de Sistemas",
      "Automatización de TI",
      "Windows Server",
      "Linux",
      "Active Directory",
      "Microsoft 365",
      "Intune",
      "NinjaOne",
      "Python",
      "PowerShell",
      "APIs REST",
      "n8n",
      "Docker",
      "Git",
      "Monitorización de Infraestructura",
      "Gestión de Endpoints",
    ],
  },

  projects: {
    sectionTitle: "Proyectos",
    deepDiveLabel: "Leer página",
    sourceCodeLabel: "Ver código",
    items: [
      {
        name: "Flujo de Inventario de Activos Automatizado",
        description:
          "Un pipeline de orquestación de datos en n8n basado en eventos que reconcilia el inventario de hardware y software entre una plataforma RMM, registros de RR. HH. y hojas de seguimiento de TI. Una construcción de índices en 5 ramas paralelas aplica reglas híbridas de fuente de verdad por campo, y luego envía registros de inventario estructurados y puntuados por estado de salud a una base de datos, una hoja de cálculo y Prometheus para paneles de Grafana en tiempo real — con comparación automática de planos de planta para detectar movimientos de hardware no autorizados.",
        link: "",
        pageSlug: "automated-asset-inventory-workflow",
        skills: ["n8n", "API REST", "Google Sheets", "NocoDB", "Prometheus", "JavaScript"],
      },
      {
        name: "FarmBot — Motor de Estado de Granja de Render",
        description:
          "Un motor de automatización en n8n que consulta una granja de render distribuida a través de exportadores de Prometheus en un ciclo cron de 3 minutos. Procesa comandos de barra diagonal desde una plataforma de chat a través de un puente en Google Apps Script y envía tarjetas de estado enriquecidas con clasificación de severidad binaria. Soporta informes a demanda, difusiones programadas por franjas horarias y entrega automática de archivos nocturnos vía SSH y almacenamiento en la nube.",
        link: "",
        pageSlug: "farmbot-render-farm-status-engine",
        skills: ["n8n", "Google Apps Script", "Prometheus", "SSH", "Google Drive", "JavaScript"],
      },
      {
        name: "Morningbot — Reportero de Telemetría de Infraestructura",
        description:
          "Un reportero de telemetría cronológico que envía instantáneas diarias del estado de salud de la infraestructura, métricas del sistema y resúmenes de operaciones. Se activa mediante cron a las 08:30, obtiene los tickets de soporte no cerrados desde una API de ticketing vía OAuth2, y calcula puntuaciones de riesgo de SLA, rankings de carga de trabajo por técnico y distribución de clientes. Formatea un resumen estructurado en Markdown y lo entrega a un canal de Microsoft Teams mediante un webhook de Power Automate.",
        link: "",
        pageSlug: "morningbot-infrastructure-telemetry-reporter",
        skills: ["n8n", "OAuth2", "Power Automate", "Microsoft Teams", "JavaScript", "API REST"],
      },
      {
        name: "Adopta y Deja Tu Huella",
        description:
          "Una plataforma full-stack de adopción de mascotas y bienestar animal que conecta refugios con posibles adoptantes. Cuenta con listados estructurados de mascotas con metadatos de raza, edad y salud, un flujo de solicitud de adopción con seguimiento de estado, y una interfaz de gestión para refugios que actualiza la disponibilidad de los animales. Diseñada para agilizar el proceso de adopción desde el descubrimiento hasta la colocación.",
        link: "https://github.com/vicentemosqueralujan/adoptaydejatuhuella",
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      },
      {
        name: "Rick and Morty Guess Game",
        description:
          "Un juego interactivo de adivinar personajes construido sobre la API REST de Rick and Morty. Obtiene datos de personajes aleatorios de forma asíncrona, renderiza dinámicamente tarjetas de personajes y reta a los jugadores a identificar personajes de la serie. Incluye seguimiento de puntuación, mecánicas de rachas y dificultad progresiva gestionada mediante estado del lado del cliente.",
        link: "https://github.com/vicentemosqueralujan/rick-and-morty-guess-game",
        skills: ["JavaScript", "API REST", "CSS", "HTML"],
      },
      {
        name: "Plantilla NebulaPortfolio",
        description:
          "Una arquitectura de portafolio premium y minimalista con elementos de glassmorphism esmerilado, sincronización de tema dinámica y configuraciones de datos en un único archivo. Optimizada para escalado de código abierto.",
        link: "https://github.com/vicentemosqueralujan/nebulaportfolio",
        skills: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "FriendlyPassGen",
        description:
          "Un generador de contraseñas amigables, elegante e inspirado en Apple, construido con Next.js, TypeScript y Tailwind CSS. Funciona 100% en local sin ningún rastreo de datos. Optimizado para Vercel.",
        link: "https://github.com/vicentemosqueralujan/friendlypassgen",
        skills: ["Next.js", "TypeScript", "Python", "JavaScript"],
      },
    ],
  },

  engineeringPages: {
    overheadLabel: "Documentación de Ingeniería",
    title: "Páginas",
    description:
      "Análisis operativos detallados sobre los retos de ingeniería, decisiones arquitectónicas y trayectorias técnicas detrás de cada proyecto.",
  },

  pages: [
    {
      id: "automated-asset-inventory-workflow",
      title: "Flujo de Inventario de Activos Automatizado",
      subtitle:
        "Pipeline en n8n basado en eventos para la reconciliación de inventario de hardware/software entre fuentes de datos de RMM, RR. HH. y TI.",
      slug: "automated-asset-inventory-workflow",
      markdownContent: `## Resumen

Los datos de activos, repartidos entre tres sistemas desconectados entre sí — una plataforma RMM (NinjaOne), una hoja de cálculo de registros de RR. HH. y una hoja interna de seguimiento de TI — se desincronizaban en cuestión de días tras cualquier alta, baja o cambio de equipo. Este pipeline en n8n se ejecuta según un horario de días laborables y reconcilia los tres sistemas en un único inventario autoritativo, exponiéndolo después como métricas en tiempo real en un panel de Grafana.

## Cómo Funciona

1. **Disparador**: Un horario cron se activa las mañanas de días laborables.
2. **Prerefresco de RR. HH.**: Una copia de trabajo de la hoja de RR. HH. se vacía y se repuebla desde la fuente de producción de RR. HH. antes de que se ejecute cualquier otra cosa, de modo que las búsquedas posteriores nunca lean un registro de contrato obsoleto.
3. **Ingesta paralela (5 ramas)**: La API del RMM (filtrada a la organización gestionada, excluyendo máquinas virtuales), la hoja de RR. HH., una exportación de Active Directory, una hoja de seguimiento de TI y una hoja física de plano de planta se obtienen y normalizan de forma independiente. Cada rama produce su propio índice de búsqueda, de modo que una fuente lenta o fallida nunca bloquea a las demás.
4. **Fusión de barrera**: Los cinco flujos convergen detrás de nodos de espera hacia un único paso de fusión una vez que cada rama se ha resuelto.
5. **Enriquecimiento híbrido**: Se construye un registro por dispositivo uniendo el conjunto de dispositivos del RMM con el conjunto de nombres de host de la hoja de TI (FQDN normalizados, sufijos de dominio eliminados). Cada campo elige su fuente autoritativa — las especificaciones de hardware provienen del RMM, las asignaciones manuales y la ubicación física provienen de la hoja de TI, y el departamento y las fechas de contrato provienen de RR. HH. con respaldo de Active Directory.
6. **Persistencia**: El registro enriquecido se inserta o actualiza en una copia de trabajo de Google Sheets y en una tabla de base de datos estructurada, ambas indexadas por nombre de host.
7. **Cálculo de métricas**: Un paso de puntuación calcula una puntuación de salud del dispositivo de 0 a 100 (uso de disco, inactividad, estado offline, estado del contrato), una etiqueta de estado de disco, un estado del dispositivo (\`AVAILABLE\` / \`IN_USE\` / \`IDLE\`) y los días restantes del contrato asignado.
8. **Publicación**: Los campos calculados se serializan en formato de exposición de Prometheus y se envían a un gateway de métricas, que un panel de Grafana consulta continuamente.
9. **Diferenciación y parcheo del plano de planta**: En paralelo, las asignaciones de puestos actuales se comparan con el último estado conocido de la hoja del plano de planta; solo se reescriben las celdas que realmente cambiaron, evitando llamadas innecesarias a la API de la hoja de cálculo.

### Reglas de Fuente de Verdad

El nombre de host, número de serie, procesador, memoria y sistema operativo del dispositivo son autoritativos desde el RMM — se actualizan automáticamente tras cualquier cambio de hardware o software. El puesto, la GPU y la ubicación física son autoritativos desde la hoja de TI — sobreviven a reinstalaciones del sistema operativo que de otro modo borrarían el contexto reportado por el RMM. El departamento y las fechas de contrato son autoritativos desde RR. HH., recurriendo a la unidad organizativa de AD cuando RR. HH. no tiene registro.

## Valor Entregado / Resultado

- **Filas de inventario estructuradas**: Un registro por dispositivo, insertado o actualizado en una tabla de base de datos y en una hoja de cálculo legible por humanos, cada uno etiquetado como \`ACTIVE_DEVICE\` o \`INVENTORY_ONLY\` según si actualmente reporta al RMM.
- **Vectores de métricas de Prometheus**: Una familia completa de métricas por dispositivo — presencia del dispositivo, uso/capacidad de disco, nivel de RAM, estado online/offline, puntuación de salud, estado del dispositivo, estado del contrato y días restantes, ubicación, puesto, GPU, versión del sistema operativo, y una serie de "contratos por vencer" para seguimiento de RR. HH.
- **Panel de Grafana en vivo**: Paneles que cubren el total de dispositivos y dispositivos disponibles, una tabla de inventario completo filtrable, uso de disco por dispositivo, contratos próximos a vencer, y desgloses por ubicación, departamento, GPU, versión de sistema operativo, nivel de RAM y modelo de hardware.
- **Sincronización del plano de planta**: La hoja de asientos se mantiene sincronizada con las asignaciones reales, revelando cualquier cambio de puesto que no vino acompañado de un ticket de RR. HH. correspondiente.

## Retos

El principal reto de ingeniería fue manejar con elegancia los fallos parciales entre cinco fuentes de datos independientes que alimentan un único punto de fusión — una respuesta lenta de la API de la hoja de cálculo no podía bloquear la rama del RMM, y una fila mal formada no podía romper toda la ejecución. Cada búsqueda de campo usa accesores seguros ante valores nulos con respaldos explícitos, y los pasos de puntuación de salud y serialización a Prometheus convierten cada valor numérico antes de operar aritméticamente, de modo que un campo de origen ausente o mal formado degrada una única etiqueta a "desconocido" en lugar de hacer fallar toda la ejecución.

## Resultado

La desincronización de inventario entre los tres sistemas de origen se redujo drásticamente tras el despliegue, y el paso de comparación del plano de planta reveló reasignaciones de puestos sin registro correspondiente en el sistema de RR. HH. — detectando movimientos de hardware no autorizados en un único ciclo de ejecución en lugar de en la siguiente auditoría manual.`,
    },
    {
      id: "morningbot-infrastructure-telemetry-reporter",
      title: "Morningbot — Reportero de Telemetría de Infraestructura",
      subtitle:
        "Resumen diario del estado de salud de la infraestructura entregado a Microsoft Teams vía OAuth2, puntuación de SLA de tickets y formato Markdown estructurado.",
      slug: "morningbot-infrastructure-telemetry-reporter",
      markdownContent: `## Resumen

El equipo de operaciones empezaba cada mañana revisando manualmente un tablero de tickets para formarse una idea mental de la carga de soporte de la noche anterior. Morningbot automatiza esto en un único resumen estructurado publicado en un canal de Microsoft Teams cada día laborable a las 08:30.

## Cómo Funciona

1. **Disparador**: Un nodo de horario se activa cada mañana de día laborable.
2. **Obtención**: Una solicitud HTTP se autentica vía OAuth2 contra la API de ticketing de la plataforma RMM y obtiene todos los tickets que están actualmente en el tablero de soporte — se confía en el propio filtro de tablero del endpoint para excluir tickets cerrados en el servidor.
3. **Análisis y clasificación**: Un paso de código recorre el array de tickets crudo a través de una cadena de accesores seguros ante valores nulos (estado, prioridad, asignado, organización, etiquetas, marcas de tiempo pueden llegar bajo varios nombres de campo distintos según cómo se creó el ticket) y clasifica cada ticket por su ID de estado numérico en nuevo / abierto / pendiente / en espera / proyecto / aprobado.
4. **Agregación**: A partir del conjunto de tickets abiertos, el pipeline calcula grupos de antigüedad de SLA (rojo: 24h o más, naranja: 1–24h, verde: menos de 1h), un porcentaje ponderado de puntuación de salud, un ranking de carga de trabajo por técnico (top 10), un ranking de clientes (top 10), distribuciones por etiqueta/estado/formulario, y los tres tickets abiertos más antiguos con enlaces directos.
5. **Formato**: Todo lo anterior se ensambla en un único informe en Markdown en español — recuentos resumidos, riesgo de SLA, gráfico de barras por técnico, desglose por cliente, y los tickets abiertos más antiguos en detalle.
6. **Entrega**: El payload estructurado completo se envía mediante POST a un webhook de Power Automate, responsable de encaminar el texto del informe al canal de Teams. El nodo HTTP está configurado para continuar en caso de error en lugar de fallar la ejecución, de modo que un fallo de entrega nunca bloquea la ejecución del día siguiente — en su lugar, se registra como un fallo de entrega no crítico.

### Puntuación de Salud del SLA

\`\`\`javascript
healthScore = openTickets.length === 0
  ? 100
  : Math.round(((slaGreen + slaOrange * 0.5) / openTickets.length) * 100)
\`\`\`

Los tickets con menos de una hora de antigüedad cuentan al máximo hacia una puntuación saludable, los tickets entre 1 y 24 horas cuentan a mitad de peso, y los tickets con más de 24 horas cuentan como riesgo total — de modo que la puntuación se degrada de forma progresiva a medida que el backlog envejece, en lugar de saltar entre estados.

## Valor Entregado / Resultado

El pipeline devuelve un objeto JSON estructurado por ejecución, que contiene:

\`\`\`json
{
  "mensaje": "<Informe en Markdown>",
  "markdown": "<Informe en Markdown>",
  "totalTickets": 28,
  "openTickets": 24,
  "criticalTickets": 1,
  "healthScore": 60,
  "generatedAt": "2026-06-10T06:30:00.000Z"
}
\`\`\`

Los campos en Markdown son los que realmente llegan al canal de Teams; los campos numéricos viajan junto a ellos para cualquier consumidor posterior que prefiera métricas en bruto en lugar de texto formateado. El impacto operativo es un punto de partida compartido y consistente para la reunión diaria de la mañana — una vista de carga de trabajo por técnico, una puntuación de riesgo ponderada por antigüedad de SLA, y los tickets desatendidos más antiguos, todo generado automáticamente en lugar de reconstruido a mano desde un tablero en vivo cada mañana.

## Retos

Los datos de tickets de la API de tablero de una plataforma RMM son polimórficos — el mismo campo lógico (asignado, organización, marca de tiempo) puede llegar bajo varios nombres de propiedad diferentes según cómo se creó o integró el ticket. Cada accesor en el paso de análisis se resuelve mediante una cadena de respaldo explícita y termina en un valor seguro por defecto ("Unknown", "Sin Cliente") en lugar de lanzar un error, de modo que un ticket parcialmente completado degrada una línea del informe en lugar de hacer fallar toda la ejecución.`,
    },
    {
      id: "farmbot-render-farm-status-engine",
      title: "FarmBot — Motor de Estado de Granja de Render",
      subtitle:
        "Motor de automatización en n8n que monitoriza una granja de render Thinkbox Deadline vía exportadores de Prometheus, enviando tarjetas de estado de severidad binaria a Google Chat mediante un puente de comandos en Google Apps Script.",
      slug: "farmbot-render-farm-status-engine",
      markdownContent: `## Resumen

FarmBot es un motor de automatización en n8n que monitoriza una granja de render Thinkbox Deadline y entrega tarjetas de estado en tiempo real a Google Chat. Un webhook de Google Apps Script recoge los comandos de barra diagonal de los artistas en una cola de Google Sheets, que n8n consulta en un ciclo cron de 3 minutos para procesar y enviar informes de la granja — cubriendo solicitudes a demanda, difusiones programadas por franjas y entregas automáticas de archivos nocturnos/de fin de semana.

## Cómo Funciona

1. **Captura de comandos**: Un artista escribe \`/report\` o \`/alerts\` en Google Chat. Un endpoint \`doPost()\` de Google Apps Script recibe el comando de barra diagonal, añade una fila \`Pending\` a una hoja de cola de solicitudes, y actualiza o inserta un registro de usuario indexado por correo electrónico — devolviendo inmediatamente una tarjeta de confirmación para que el artista no quede esperando en el webhook síncrono.
2. **Ciclo de consulta**: Un disparador cron de n8n se activa cada 3 minutos, lee la hora actual en la zona horaria local del estudio, y encamina la ejecución a través de una puerta de conmutación hacia una de cuatro ramas.
3. **Resolución de ruta**:
   - **Informe de Fin de Semana** (lunes por la mañana): obtiene el último archivo de informe de render del fin de semana vía SSH, lo sube a una carpeta compartida de Drive, y lo distribuye en una tarjeta por cada espacio de chat activo.
   - **Informe Nocturno** (martes a viernes por la mañana): el mismo patrón para el archivo de informe nocturno.
   - **Difusión por Franja** (tres horarios fijos al día): obtiene telemetría en vivo de nodos y trabajos, calcula el estado de la granja, y lo envía a cada espacio suscrito a actualizaciones programadas.
   - **A Demanda** (todos los demás momentos): vacía la cola de solicitudes pendientes en orden FIFO, resolviendo el comando \`/report\` o \`/alerts\` de cada artista contra la telemetría en vivo.
4. **Análisis de telemetría**: Las métricas a nivel de nodo (nodos totales/renderizando/inactivos/offline/estancados, porcentaje de utilización, cinco pools de render monitorizados) y las métricas a nivel de trabajo (trabajos renderizando/en cola/fallidos, tareas restantes, hora estimada de finalización) se obtienen desde dos exportadores de Prometheus distintos y se combinan en un único objeto estructurado.
5. **Paso adicional en la ruta de alertas**: Para \`/alerts\`, el pipeline primero se conecta vía SSH al host de gestión de render para confirmar que los servicios centrales de gestión de render están realmente en ejecución antes de obtener telemetría — si están caídos, salta directamente a una tarjeta crítica predefinida en lugar de intentar una obtención de métricas que solo fallaría.
6. **Envío de tarjetas**: Se construye un payload estructurado de Google Chat Card V2 por destinatario y se envía mediante POST a la API de Chat, con reintento automático en fallos transitorios.

## Motor de Severidad Binaria

Cada ejecución se resuelve en exactamente uno de dos estados — no hay un nivel intermedio de "advertencia". El estado **Crítico** se activa solo si ambos exportadores de telemetría son inalcanzables, si únicamente el exportador de nodos está caído (no se puede evaluar la capacidad de los workers), o si los nodos estancados superan el 50% de la capacidad activa. Todo lo demás — incluyendo que el exportador de trabajos esté caído por sí solo, un recuento elevado de trabajos fallidos, o una granja inactiva — se resuelve como **Saludable**. La densidad de estancamiento se calcula con un denominador de respaldo en cascada, de modo que una granja offline (cero nodos reportando) colapsa a \`0\` en lugar de \`NaN\` o un error de división por cero.

## Valor Entregado / Resultado

- **Mensajes Google Chat Card V2**: La unidad de salida real del sistema. Cada ruta — respuesta a demanda, difusión programada, o entrega nocturna — termina en una o más tarjetas estructuradas publicadas en espacios de chat específicos, cada una con una insignia de estado binaria (🟢 Saludable / 🔴 Crítico), desgloses de utilización y pools, o un enlace de descarga del informe.
- **Archivos de informe archivados**: Los informes de render \`.xlsx\` nocturnos y de fin de semana se suben a una carpeta compartida de Drive antes de enviarse la tarjeta de notificación, de modo que el enlace de descarga de la tarjeta siempre apunta a una copia duradera.
- **Impacto operativo**: Artistas y supervisores obtienen el estado de la granja a demanda sin necesitar acceso a la consola de la granja de render, y los informes nocturnos/de fin de semana automatizados significan que nadie tiene que estar conectado fuera de horario para confirmar que la granja siguió funcionando.

## Manejo de Errores

Las lecturas de cola y registro se ejecutan con reintento automático y están configuradas para siempre devolver datos, de modo que un resultado vacío es un estado válido de "nada pendiente" en lugar de un fallo. Las obtenciones de telemetría están configuradas para continuar en caso de fallo, estableciendo indicadores de error explícitos que la lógica posterior verifica — un exportador de trabajos ausente degrada la sección de cola del informe a "no disponible" sin nunca escalar a un estado crítico por sí solo. La comprobación de salud vía SSH antes de la ruta de alertas es la única rama que intencionadamente corta por completo la telemetría, ya que una interrupción confirmada de un servicio central hace que una obtención de métricas sea inútil.`,
    },
  ],

  experience: {
    sectionTitle: "Experiencia",
    items: [
      {
        company: "Xatélite",
        title: "Administrador de Sistemas | Automatización de TI",
        dateRange: "Septiembre 2025 - Presente",
        bullets: [
          "Proporcioné soporte técnico de Nivel 1/2, gestionando flujos de trabajo de ticketing, operaciones de endpoints y ciclos de vida de usuarios en entornos de Active Directory y Office 365.",
          "Diseñé pipelines de orquestación de datos en n8n basados en eventos para automatizar la reconciliación de inventario de activos, asignaciones dinámicas de hardware y sincronización de sistemas.",
          "Diseñé capas de automatización de vigilancia autorreparables y monitorización de telemetría usando n8n, Prometheus y JavaScript para seguir el estado de salud del sistema y las puntuaciones de riesgo.",
          "Desarrollé herramientas de escritorio en Python y utilidades de red especializadas (Wake-on-LAN) para la orquestación de infraestructura vía plataformas RMM (NinjaOne).",
          "Construí pipelines de telemetría automatizados usando OAuth2, GraphQL y webhooks para entregar instantáneas de infraestructura y documentación directamente a MS Teams.",
          "Administré entornos seguros de NAS Synology, máquinas virtuales de Proxmox y firewalls FortiGate, garantizando permisos de red y de recursos compartidos fiables.",
        ],
      },
      {
        company: "TIPSA",
        title: "Administrador de Sistemas",
        dateRange: "Mayo 2025 - Agosto 2025",
        bullets: [
          "Desplegué Snipe-IT en Windows Server 2019 y FOG Project en Ubuntu Server para automatizar la imagen de estaciones de trabajo.",
          "Administré virtualización SimpliVity, máquinas virtuales VMware e infraestructura de copias de seguridad Veeam con configuración completa de políticas.",
          "Configuré el MDM WizyEMM para la gestión de dispositivos Android y supervisé el estado RAID de NAS y las copias de seguridad automatizadas.",
          "Mantuve firewalls Fortinet y plataformas de seguridad corporativa incluyendo SentinelOne y Darktrace.",
          "Proporcioné soporte técnico avanzado, aprovisionamiento de hardware y montajes audiovisuales empresariales.",
        ],
      },
      {
        company: "Enalta",
        title: "Técnico de TI",
        dateRange: "Mayo 2023 - Mayo 2025",
        bullets: [
          "Presté soporte técnico de Nivel 1/2 mediante Jira Service Management, teléfono y flujos de correo electrónico.",
          "Administré ciclos de vida de usuarios, buzones de correo y permisos en Active Directory y Exchange Admin Center.",
          "Registré y gestioné más de 200 dispositivos Android Samsung usando políticas MDM de Microsoft Intune.",
          "Desplegué y supervisé 200 iPads utilizando infraestructura MDM de AirWatch.",
          "Personalicé flujos de trabajo, pantallas y reglas de automatización de servicios de Jira para la optimización operativa.",
        ],
      },
      {
        company: "Spectrum",
        title: "Técnico de TI",
        dateRange: "Julio 2024 - Agosto 2024",
        bullets: [
          "Proporcioné soporte técnico a usuarios finales para sistemas operativos cliente Windows y entornos de Microsoft Azure.",
          "Administré cuentas de Active Directory y proporcioné soporte de plataforma dedicado para SAP Business One (B1).",
          "Mantuve los datos de seguimiento del inventario de TI corporativo y presté soporte técnico interactivo en salas de reuniones.",
        ],
      },
      {
        company: "Inetum",
        title: "Técnico de TI",
        dateRange: "Abril 2021 - Mayo 2023",
        bullets: [
          "Resolví incidencias técnicas y administré cuentas de usuario y permisos de acceso de Active Directory.",
          "Soporté infraestructura de red empresarial, solucionando problemas de VPN, conexiones LAN/WAN y MPLS.",
          "Gestioné los procesos de incorporación de TI de empleados y proporcioné soporte de ingeniería para sistemas audiovisuales corporativos.",
        ],
      },
      {
        company: "Randstad",
        title: "Soporte de TI",
        dateRange: "Julio 2020 - Abril 2021",
        bullets: [
          "Resolví incidencias de hardware y software a través de Jira Service Desk, teléfono y canales de correo electrónico.",
          "Administré Active Directory, gestionando la creación de usuarios, permisos de seguridad y restablecimientos de contraseña.",
          "Instalé, configuré y mantuve endpoints del lugar de trabajo, hardware informático y sistemas de impresión.",
          "Presté soporte técnico para sistemas de hardware, software y audiovisuales en estudios de producción y salas de reuniones.",
        ],
      },
      {
        company: "Randstad",
        title: "Becario de Soporte de TI",
        dateRange: "Septiembre 2019 - Junio 2020",
        bullets: [
          "Apoyé la resolución de incidencias de hardware y software mediante ticketing de Jira Service Desk, teléfono y correo electrónico.",
          "Aprendí los fundamentos de administración de Active Directory incluyendo configuración de cuentas, permisos y gestión de contraseñas.",
          "Colaboré en el despliegue, configuración y mantenimiento preventivo de sistemas informáticos y hardware de impresión.",
          "Ayudé en el soporte técnico de infraestructura de software, hardware y audiovisual dentro de salas de reuniones y estudios.",
        ],
      },
    ],
  },

  education: {
    sectionTitle: "Educación",
    items: [
      {
        school: "iFP. Innovación en Formación Profesional",
        degree: "Desarrollo de Aplicaciones Web (DAW)",
        dateRange: "Feb 2026 - Feb 2027",
        achievements: [
          "Especialización en desarrollo de aplicaciones web",
          "Ingeniería de software y tecnologías web modernas",
          "Diseño e implementación de aplicaciones full-stack",
        ],
      },
      {
        school: "iFP. Innovación en Formación Profesional",
        degree: "Desarrollo de Aplicaciones Multiplataforma (DAM)",
        dateRange: "Sep 2021 - Feb 2024",
        achievements: [
          "Programación orientada a objetos e ingeniería de software",
          "Diseño de bases de datos y desarrollo de aplicaciones",
          "Desarrollo de aplicaciones de escritorio, móviles y multiplataforma",
        ],
      },
      {
        school: "Erin College",
        degree: "Curso de Inglés B2",
        dateRange: "May 2024 - Jun 2024",
        achievements: [
          "Programa de inmersión en inglés en Dublín, Irlanda",
          "Habilidades de comunicación profesional y técnica",
          "Experiencia académica internacional",
        ],
      },
      {
        school: "IES Alonso de Avellaneda",
        degree: "Técnico en Sistemas Microinformáticos y Redes (SMR)",
        dateRange: "Sep 2018 - Jul 2020",
        achievements: [
          "Instalación y mantenimiento de sistemas informáticos",
          "Administración de redes y resolución de problemas",
          "Reparación de hardware y fundamentos de soporte técnico",
        ],
      },
    ],
  },

  contact: {
    sectionTitle: "Contacto",
    form: {
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tu@ejemplo.com",
      messageLabel: "Detalles del Proyecto",
      messagePlaceholder: "Describe tu proyecto o consulta...",
      submitButton: "Enviar Mensaje",
      sentConfirmation: "Enviado ✓",
      emailSubjectTemplate: "Consulta de Proyecto de {name}",
      emailBodyTemplate: "Nombre: {name}\nCorreo electrónico: {email}\n\nDetalles del Proyecto:\n{message}",
    },
    labels: {
      availability: "Disponibilidad",
      responseTime: "Tiempo de Respuesta",
      timezone: "Zona Horaria",
      domains: "Áreas",
      channels: "Canales",
    },
    availability: {
      status: "Abierto a oportunidades",
      workMode: "Remoto",
    },
    responseTime: "Normalmente en 24–48 horas",
    timezone: "WEST UTC+1 — Europa",
    domains: ["Automatización de TI", "Administración de Sistemas", "Flujos de Trabajo de IA"],
    channels: {
      linkedin: { label: "LinkedIn" },
      github: { label: "GitHub" },
    },
  },

  footer: {
    copyright: "Todos los derechos reservados.",
    builtWithLabel: "Construido con",
    builtWithName: "Next.js",
  },
};

export const content: Record<Locale, LocaleContent> = { en, es };
