// ─── Types ────────────────────────────────────────────────────────────────────

export type EngineeringPage = {
    id: string;
    title: string;
    subtitle: string;
    slug: string;
    markdownContent: string;
  };
  
  //////////////////////////////////////////////////////////////////
  // Identity & Branding
  // Controls: name and professional title rendered in Hero, Header,
  // Footer, and the PDF resume. Modify here to update all instances.
  //////////////////////////////////////////////////////////////////
  
  export const siteConfig = {
    name: "Vicente Mosquera Luján",
    title: "Systems Administrator | IT Automation",
  
    //////////////////////////////////////////////////////////////////
    // Theme
    // Controls: --accent-color CSS variable applied globally.
    // accentColorLight is used in light mode and the PDF resume header.
    // accentColorDark is used in dark mode.
    // Dependency: index.astro injects these via define:vars.
    //////////////////////////////////////////////////////////////////
  
    accentColorLight: "#420191",
    accentColorDark: "#9b6dff",
  
    //////////////////////////////////////////////////////////////////
    // SEO
    // Controls: <meta name="description"> and <title> in index.astro.
    // Modify description to update the browser and search snippet.
    //////////////////////////////////////////////////////////////////
  
    seo: {
      description:
        "Building intelligent systems that automate, scale, and deliver. Specializing in AI workflows, infrastructure automation, and backend engineering.",
    },
  
    //////////////////////////////////////////////////////////////////
    // Navigation
    // Controls: nav link labels in Header and Footer (desktop + mobile).
    // aria contains accessibility labels for the theme toggle and
    // hamburger menu button.
    // Dependency: Header.astro, Footer.astro.
    //////////////////////////////////////////////////////////////////
  
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
      },
    },
  
    //////////////////////////////////////////////////////////////////
    // Social Links
    // Controls: social icon links in Hero, Header, and Footer.
    // All fields are optional — removing one hides the icon.
    // aria contains the accessible labels for each social icon link.
    //////////////////////////////////////////////////////////////////
  
    social: {
      email: "vicentemosqueralujan@gmail.com",
      linkedin: "https://linkedin.com/in/vicentemosqueralujan",
      github: "https://github.com/vicentemosqueralujan",
      aria: {
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
    },
  
    //////////////////////////////////////////////////////////////////
    // Home Page — Hero Section
    // Controls: name prefix and CTA button labels in Hero.
    // namePrefix is the text before the accent-colored name ("I'm").
    // buttons.primary triggers the PDF resume download.
    // Dependency: Hero.astro.
    //////////////////////////////////////////////////////////////////

    hero: {
      namePrefix: "I'm",
      buttons: {
        primary: "View Projects",
        resume: "Download resume",
        resumeLoading: "Generating PDF...",
      },
    },
  
    //////////////////////////////////////////////////////////////////
    // About Section
    // Controls: section heading, biography paragraph, and skill badges
    // rendered in About.astro. Skills also appear in the PDF resume.
    // Dependency: About.astro, Hero.astro (PDF resume).
    //////////////////////////////////////////////////////////////////
  
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
  
    //////////////////////////////////////////////////////////////////
    // Projects
    // Controls: section heading and project cards in Projects.astro.
    // Removing all items from items[] hides the Projects section entirely.
    // Each item: name, description, link (optional), skills (optional).
    // Dependency: Projects.astro, Header.astro, Footer.astro (guards).
    //////////////////////////////////////////////////////////////////
  
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
  
    //////////////////////////////////////////////////////////////////
    // Engineering Pages Index
    // Controls: overhead label, title, subtitle, and the first project
    // card copy rendered in src/pages/pages/index.astro.
    // Dependency: src/pages/pages/index.astro.
    //////////////////////////////////////////////////////////////////
  
    engineeringPages: {
      overheadLabel: "Engineering Documentation",
      title: "Pages",
      description:
        "Deep operational write-ups on the engineering challenges, architectural decisions, and technical journeys behind each project.",
    },
  
    //////////////////////////////////////////////////////////////////
    // Engineering Pages
    // Controls: deep-dive page content accessible at /pages and linked
    // from the hero "Explore pages" button.
    // Each item maps to a route via its slug.
    // Dependency: src/pages/pages/ route, Hero.astro (button href).
    //////////////////////////////////////////////////////////////////
  
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
    ] as EngineeringPage[],
  
    //////////////////////////////////////////////////////////////////
    // Experience
    // Controls: section heading and work history timeline in
    // Experience.astro. Removing all items hides the section.
    // Dependency: Experience.astro, Header.astro, Footer.astro (guards),
    // Hero.astro (PDF resume).
    //////////////////////////////////////////////////////////////////
  
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
  
    //////////////////////////////////////////////////////////////////
    // Education
    // Controls: section heading and education cards in Education.astro.
    // Removing all items hides the section.
    // Dependency: Education.astro, Header.astro, Footer.astro (guards),
    // Hero.astro (PDF resume).
    //////////////////////////////////////////////////////////////////
  
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
  
    //////////////////////////////////////////////////////////////////
    // Contact
    // Controls: section heading, contact form labels and placeholders,
    // availability badges, metadata labels, and channel links in
    // Contact.astro. toEmail is used for the mailto href in the form
    // submission script.
    // Dependency: Contact.astro.
    //////////////////////////////////////////////////////////////////
  
    contact: {
      sectionTitle: "Contact",
      toEmail: "vicentemosqueralujan@gmail.com",
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
        linkedin: { label: "LinkedIn", handle: "vicentemosqueralujan" },
        github: { label: "GitHub", handle: "vicentemosqueralujan" },
      },
    },
  
    //////////////////////////////////////////////////////////////////
    // Footer
    // Controls: copyright notice rendered in Footer.astro.
    // The year is computed dynamically at render time.
    // Dependency: Footer.astro.
    //////////////////////////////////////////////////////////////////
  
    footer: {
      copyright: "All rights reserved.",
      builtWithLabel: "Built with",
      builtWithUrl: "https://nextjs.org",
      builtWithName: "Next.js",
    },
  };
  