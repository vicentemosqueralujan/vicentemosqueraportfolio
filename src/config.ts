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
            "An event-driven n8n data orchestration pipeline aggregating, transforming, and syncing dynamic hardware and software inventory allocations. Reconciles device data from an RMM platform, HR records, and IT sheets via a 5-branch parallel index build, applying hybrid source-of-truth rules per field. Outputs structured inventory records to a database, a spreadsheet, and a Prometheus Pushgateway for Grafana dashboarding — with automated floor plan diffing and health score computation.",
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
          name: "Wiki Automated PDF Exporter",
          description:
            "A document lifecycle pipeline converting Wiki.js pages to self-contained PDFs via GraphQL ingestion, differential processing, and Gotenberg rendering. Diffs page timestamps against a JSON cache to process only modified entries, base64-embeds all referenced images, renders branded self-contained HTML, and syncs compiled PDFs to cloud storage. Performs atomic cache writes with backup-then-swap to prevent corruption on failure.",
          link: "",
          pageSlug: "wiki-automated-pdf-exporter",
          skills: ["n8n", "Wiki.js", "GraphQL", "Gotenberg", "Google Drive", "SSH", "PDF"],
        },
        {
          name: "Automated Worker Recovery System",
          description:
            "A self-healing watchdog automation layer detecting stalled render farm nodes via NinjaOne polling and executing targeted reboots through a dual-credential segregation model. Applies a dual-condition AND gate — requiring both a confirmed stall state and a validated session identity — before issuing any reboot command. Offline nodes are routed to a skip branch and logged in an HTML recovery report.",
          link: "",
          pageSlug: "automated-worker-recovery-system",
          skills: ["n8n", "NinjaOne RMM", "JavaScript", "OAuth2", "Automation", "Infrastructure"],
        },
        {
          name: "WoL Service — Multi-Client Deployment",
          description:
            "A Bash-driven Wake-on-LAN proxy service on Ubuntu Server managed by NinjaOne RMM. Runs ping health sweeps against a CSV-configured device pool on a 5-minute cron interval, broadcasts UDP magic packets to offline nodes, waits for boot, verifies recovery, and logs results with structured JSON output. Includes a full deployment blueprint with GPO-enforced BIOS and NIC configuration for Windows 11 workstations.",
          link: "",
          pageSlug: "wake-on-lan-multi-client-deployment",
          skills: ["Bash", "Wake-on-LAN", "NinjaOne RMM", "Network Automation", "Linux", "Ubuntu"],
        },
        {
          name: "Automated WoL Service Workflow",
          description:
            "An n8n workflow automating Wake-on-LAN recovery for offline infrastructure nodes on a 10-minute polling interval. Runs SSH-driven ping health checks, evaluates offline state via binary routing, broadcasts UDP magic packets, waits for boot, executes post-boot verification, and delivers a structured HTML recovery report via email. Terminates in sub-second time with no broadcast sent when all nodes are online.",
          link: "",
          pageSlug: "automated-wol-service-workflow",
          skills: ["n8n", "Bash", "SSH", "Wake-on-LAN", "Linux", "Automation"],
        },
        {
          name: "Licenses Dashboard — Foundry & Houdini",
          description:
            "A Grafana dashboard infrastructure providing unified telemetry across Foundry and Houdini license pools. Tracks allocation density, per-seat utilization, and per-pool expiration thresholds with expiry-keyed colorization. Features an active sessions table for real-time per-artist and per-workstation license checkout tracing across all product pools.",
          link: "",
          pageSlug: "licenses-dashboard-foundry-houdini",
          skills: ["Grafana", "Prometheus", "Dashboard", "License Management"],
        },
        {
          name: "Licenses Exporter — Foundry & Houdini",
          description:
            "Parallel Python micro-services fetching license telemetry from remote Foundry and Houdini licensing engines via isolated SSH bridges with forced-command key restrictions. Parses licensing output into labeled Prometheus metrics on local HTTP endpoints, with background-threaded polling and full registry clear cycles to prevent stale metric contamination.",
          link: "",
          pageSlug: "licenses-exporter-foundry-houdini",
          skills: ["Python", "Flask", "Prometheus", "SSH", "Linux"],
        },
        {
          name: "IT Assets Dashboard",
          description:
            "A public-facing Grafana dashboard delivering real-time workstation inventory, contract expiration tracking, critical disk usage alerts, and hardware demographic distributions across a production fleet. Backed by Prometheus metrics pushed from an asset inventory workflow, with a vanity URL via Nginx Proxy Manager and threshold-driven urgency colorization for expiring contracts and high-risk disk volumes.",
          link: "",
          pageSlug: "it-assets-dashboard",
          skills: ["Grafana", "Prometheus", "Nginx", "Infrastructure Monitoring"],
        },
        {
          name: "Farm1 Temperature & Power Monitoring",
          description:
            "An HPE OneView REST API telemetry pipeline pushing thermal and power metrics from enterprise blade servers to Prometheus Pushgateway via a session-cached systemd timer. Evolved from a Flask exporter that exceeded per-client session limits to a push architecture running 4 fetches per day with persistent cached session tokens, eliminating session limit risk entirely.",
          link: "",
          pageSlug: "farm1-temperature-power-monitoring",
          skills: ["Python", "HPE OneView", "Prometheus", "Grafana", "systemd", "REST API"],
        },
        {
          name: "Farm2 Temperature & Reboot Monitoring",
          description:
            "An out-of-band IPMI telemetry pipeline covering 16 render nodes across two BMC VLANs, tracking CPU temperatures and SEL reboot events via parallel Python exporters scraped by Prometheus. Resolved VLAN reachability by deploying a tagged virtual NIC in bridge mode, enabling full fleet visibility with NaN suppression via PromQL reachability gating.",
          link: "",
          pageSlug: "farm2-temperature-reboot-monitoring",
          skills: ["Python", "IPMI", "Prometheus", "Grafana", "Linux", "Networking"],
        },
        {
          name: "Random Secure Friendly Password",
          description:
            "An interactive Python Flask web service generating high-entropy human-readable passphrases using Python's secrets library. Exposes a clean browser UI and a structured JSON API producing passphrases from curated vocabulary with randomized separators and numeric suffixes. Deployed as a persistent systemd daemon behind a TLS-terminating reverse proxy with access restricted to authorized internal network clients.",
          link: "",
          pageSlug: "random-secure-friendly-password",
          skills: ["Python", "Flask", "Gunicorn", "Nginx", "Tailwind CSS", "Security"],
        },
        {
          name: "Compact Image GUI Tool",
          description:
            "A desktop Python application for high-efficiency batch image optimization and format transcoding. Built with CustomTkinter and Pillow, it provides a clean native UI for selecting source and destination folders, real-time progress tracking, and multi-threaded batch conversion of PNG, BMP, and TIFF images to compressed JPEG output with per-run savings summaries.",
          link: "",
          pageSlug: "compact-image-gui-tool",
          skills: ["Python", "CustomTkinter", "Pillow", "Threading", "Desktop GUI"],
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
  
  This pipeline was built to solve a recurring operational problem: asset data spread across three disconnected systems — an RMM platform (NinjaOne), an HR records spreadsheet, and an internal IT tracking sheet — would drift out of sync within days of any onboarding, offboarding, or device swap.
  
  ## The Core Architecture
  
  The workflow is structured as a 5-branch parallel index build triggered on a scheduled interval. Each branch is responsible for fetching and normalizing data from one source, producing a standardized record shape before any merging begins. This design isolates failures: if the HR API is slow, the RMM branch completes independently.
  
  ### Source-of-Truth Rules
  
  Not all fields are equal. Device hostname and serial number are authoritative from the RMM. Employee name and department come from HR. Assignment history is reconciled using a hybrid rule: RMM wins for current assignment if updated within the last 48 hours; otherwise the IT sheet value is preserved.
  
  This rule was necessary after discovering that NinjaOne would sometimes cache stale device-user associations for up to 36 hours after a reassignment was processed.
  
  ## Output Targets
  
  - **NocoDB**: Structured inventory table with full field history.
  - **Google Sheets**: Human-readable export for the IT team.
  - **Prometheus Pushgateway**: Metrics for Grafana dashboarding — device count by department, unassigned device ratio, stale-assignment rate.
  
  ## The Floor Plan Diffing Step
  
  One non-obvious requirement: the IT team maintains a physical floor plan with device placement. After each sync, the pipeline computes a diff against the previous run's floor plan snapshot and flags any device that changed desk assignment without a corresponding ticket in the HR system. This caught two unauthorized hardware moves during the first month of deployment.
  
  ## Health Score Computation
  
  Each device record gets a computed health score (0–100) based on: last check-in age, OS patch level, disk health from SMART data, and open critical alerts. The score feeds directly into the Grafana dashboard and triggers a Teams notification if any device drops below 40.
  
  ## Challenges
  
  The main engineering challenge was handling partial failures gracefully. If the Google Sheets write fails, the NocoDB write should not roll back — the two outputs are independent. I implemented a fire-and-forget pattern per output branch with error logging to a dedicated audit table, rather than treating the entire sync as an atomic transaction.
  
  ## Outcome
  
  Inventory drift dropped from ~15 discrepancies per week to under 2. The floor plan diffing feature alone surfaced 4 unauthorized hardware moves in the first quarter.`,
      },
      {
        id: "wiki-automated-pdf-exporter",
        title: "Wiki Automated PDF Exporter",
        subtitle:
          "Document lifecycle pipeline converting Wiki.js pages into self-contained, image-embedded PDFs synced to cloud storage.",
        slug: "wiki-automated-pdf-exporter",
        markdownContent: `## Overview
  
  The documentation team needed a way to distribute wiki content as portable PDFs — offline-readable, branded, and always reflecting the latest approved version. The manual export process was taking 2–3 hours per week and producing inconsistent results.
  
  ## GraphQL Ingestion
  
  Wiki.js exposes a GraphQL API. The pipeline queries all pages under a specific tree path, returning title, content (Markdown), updatedAt, and a list of embedded image paths. The first challenge was pagination — the API returns a maximum of 50 pages per query, so the pipeline builds a cursor-based loop until all pages are fetched.
  
  ## Differential Processing
  
  To avoid re-rendering unchanged pages, the pipeline maintains a JSON cache file mapping page IDs to their last-known \`updatedAt\` timestamp. On each run, only pages with a newer timestamp enter the render queue. This reduced average run time from ~8 minutes to under 90 seconds for typical weekly update volumes.
  
  The cache write uses an atomic backup-then-swap pattern: write to \`cache.json.tmp\`, then rename to \`cache.json\`. This prevents a partial write from corrupting the cache on power loss or container restart.
  
  ## Image Embedding
  
  Wiki pages reference images by relative path. The renderer fetches each image, converts it to base64, and inlines it directly into the HTML before passing to Gotenberg. This was necessary because Gotenberg runs in a separate container with no access to the Wiki.js file system.
  
  The base64 embedding step also solved a subtle rendering bug: some images were served by Wiki.js with a session cookie requirement. By fetching them server-side (where the pipeline has a service account token), the embedded images always render correctly regardless of the PDF consumer's authentication state.
  
  ## Gotenberg Rendering
  
  Gotenberg accepts an HTML payload and returns a PDF. The pipeline builds a minimal self-contained HTML document per page: reset CSS, branded header/footer with page number, and the Markdown-converted body. Tables and code blocks receive explicit width constraints to prevent overflow in the PDF output.
  
  ## Cloud Sync
  
  Compiled PDFs are uploaded to a Google Drive folder. The pipeline checks for an existing file with the same name; if found, it updates the file in place (preserving share links) rather than creating a duplicate.
  
  ## Challenges
  
  The hardest part was Markdown-to-HTML fidelity. Wiki.js uses a custom Markdown dialect with callout blocks (\`:::warning\`, \`:::info\`) that standard parsers ignore. I wrote a pre-processing step that converts these to styled \`<div>\` blocks before passing to the Markdown renderer.
  
  ## Outcome
  
  PDF export is now fully automated, runs nightly, and produces consistent output. The team distributes PDFs to external stakeholders without any manual intervention.`,
      },
      {
        id: "morningbot-infrastructure-telemetry-reporter",
        title: "Morningbot — Infrastructure Telemetry Reporter",
        subtitle:
          "Daily infrastructure health digest delivered to Microsoft Teams via OAuth2, ticket SLA scoring, and structured Markdown formatting.",
        slug: "morningbot-infrastructure-telemetry-reporter",
        markdownContent: `## Overview
  
  The operations team started each morning manually checking three dashboards and a ticketing system to build a mental model of overnight infrastructure health. Morningbot automates this into a single structured digest delivered to a Teams channel at 08:30.
  
  ## OAuth2 Ticket Fetching
  
  The ticketing system (Autotask) requires OAuth2 with client credentials flow. The pipeline exchanges a client ID and secret for a bearer token, then queries all non-closed tickets created or updated in the last 24 hours. Token expiry is handled by storing the expiry timestamp alongside the token and refreshing proactively 60 seconds before expiry.
  
  ## SLA Risk Scoring
  
  Each ticket receives a computed SLA risk score based on: time elapsed since creation, ticket priority, SLA response target for that priority, and whether the ticket has been responded to. The formula produces a 0–100 score where 80+ triggers a visual warning indicator in the digest.
  
  This scoring revealed a pattern that wasn't visible in the raw ticketing dashboard: medium-priority tickets created late Friday consistently breached SLA by Monday morning because the automatic SLA clock didn't pause over weekends. The scoring logic now accounts for business hours when computing elapsed SLA time.
  
  ## Technician Workload Ranking
  
  The digest includes a per-technician workload table: open ticket count, average ticket age, and SLA breach count. This was added after a retrospective where a technician was silently overloaded for two weeks before anyone noticed.
  
  The ranking is sorted by a composite score (open count × average age), not raw count, to surface technicians with a small number of very old tickets.
  
  ## Customer Distribution
  
  A pie-chart-style text block shows ticket volume by customer. This helps the team identify if a single customer is generating disproportionate load — a signal that a proactive check-in or escalation is warranted.
  
  ## Teams Delivery
  
  The digest is formatted as a structured Markdown document and delivered via a Power Automate webhook. Power Automate was chosen over a direct Teams API call because the organization's Teams tenant restricts direct bot registrations to Azure AD app admins, but webhook connectors are self-service.
  
  ## Challenges
  
  The main challenge was formatting fidelity. Teams Markdown support is inconsistent — tables render in some clients but not others, and nested lists are unreliable. I settled on a flat structure with emoji indicators (🔴/🟡/🟢) for status, which renders consistently across desktop, mobile, and web Teams clients.
  
  ## Outcome
  
  The morning standup now starts from a shared baseline instead of three people giving different numbers. SLA breach rate dropped 18% in the first 6 weeks after deployment, attributed to earlier visibility of at-risk tickets.`,
      },
      {
        id: "farmbot-render-farm-status-engine",
        title: "FarmBot — Render Farm Status Engine",
        subtitle:
          "n8n automation engine monitoring a Thinkbox Deadline render farm via Prometheus exporters, dispatching binary-severity status cards to Google Chat through a Google Apps Script command bridge.",
        slug: "farmbot-render-farm-status-engine",
        markdownContent: `## Overview
  
  FarmBot is an n8n automation engine that monitors a large-scale render farm (Thinkbox Deadline) and delivers real-time status cards to Google Chat. A Google Apps Script webhook ingests artist slash commands into a Google Sheets queue, which n8n polls on a 3-minute cron cycle to process and dispatch farm reports — covering on-demand requests, scheduled window broadcasts, and automated overnight file deliveries.
  
  ## Command Ingestion
  
  Artist slash commands (\`/report\`, \`/alerts\`) hit the Google Apps Script \`doPost()\` endpoint, which appends a row to the \`BotRequests\` sheet with status \`Pending\` and upserts the \`UserSpaces\` registry keyed by user email. The n8n \`POLL_SCHEDULE\` cron then reads this queue and routes execution through a \`SWITCH_CASES_USE\` gate.
  
  ### Route Branches
  
  The switch evaluates day and time in the configured timezone. Monday 08:15 triggers the Weekend Report path. Tuesday through Friday 08:15 triggers the Night Report path. Any day at 08:00, 18:00, and 22:30 triggers a live Window Broadcast. All other intervals drain the On-Demand command queue processing pending \`/report\` and \`/alerts\` requests in FIFO order.
  
  ## Prometheus Metric Parsing
  
  Node telemetry arrives from the node exporter endpoint and job telemetry from the job exporter endpoint. The parser extracts \`totalNodes\`, \`renderNodes\`, \`idleNodes\`, \`stalledNodes\`, and \`globalUtilPct\` from the node exporter, and \`renderingJobs\`, \`queuedJobs\`, \`failedJobs\`, and \`remainingTasks\` from the job exporter. Five render pools are tracked independently: \`arnold_render\`, \`nuke\`, \`system_jobs\`, \`system_jobs_secondary\`, and \`development\`.
  
  ## Binary Severity Engine
  
  Every execution resolves to exactly one of two states. **Critical** fires if both exporters are unreachable, if only the nodes exporter is down, or if stalled nodes exceed 50% of the active node count. All other conditions — including jobs exporter offline, elevated failed job count, or idle farm state — resolve to **Healthy**. The legacy multi-tier model (Orange Operational-with-Warning, White Idle) was fully decommissioned in favor of this flat binary gate.
  
  ### Division-by-Zero Protection
  
  Stall density computation uses a cascading fallback denominator: if \`totalNodes\` is zero, \`renderNodes\` is used as the denominator; if both are zero, \`stalledPct\` collapses to \`0\` rather than producing \`NaN\` or \`Infinity\`. All Prometheus metric fields are coerced to \`Number\` with an \`|| 0\` fallback before entering any arithmetic expression.
  
  ## Overnight and Weekend Delivery
  
  At 08:15 on weekdays, the pipeline SSHs into the render management server, downloads the latest \`.xlsx\` report from the overnight reports directory, uploads it to a Google Drive shared folder, and fans out one Card V2 message per active \`UserSpaces\` profile. Weekend reports pull from a separate subdirectory keyed to weekend-specific filenames.
  
  ## Error Handling
  
  All \`GET_PENDING_REQUESTS\` and \`GET_USERSPACES\` nodes run with \`retryOnFail: true\` and \`alwaysOutputData: true\`. Prometheus fetch nodes use \`continueOnFail: true\`, setting \`nodesError\` or \`jobsError\` flags on failure without halting execution. The SSH gatekeeper uses \`continueOnFail: true\`, routing directly to a hardcoded Critical card if \`mongod\` or \`deadline10launcher\` are detected down — no metric fetch is attempted in that state.`,
      },
      {
        id: "automated-worker-recovery-system",
        title: "Automated Worker Recovery System",
        subtitle:
          "Self-healing n8n watchdog detecting stalled render farm nodes via NinjaOne polling and executing targeted reboots through a dual-credential segregation model with a dual-condition identity guard.",
        slug: "automated-worker-recovery-system",
        markdownContent: `## Overview
  
  This n8n automation detects stalled render farm worker nodes by polling NinjaOne device health on a 10-minute schedule and executing targeted remote reboots via a dual-credential security model. Reboot authorization requires two conditions simultaneously: the node must appear in the stalled list **and** the last logged-in user must match the designated render account. If either condition is false, the reboot is blocked regardless of stall state.
  
  ## Dual-Credential Segregation
  
  Two independent credential profiles enforce strict separation between read and write authority. \`ninja_auth_monitoring\` is bound exclusively to \`GET_DEVICES\`, calling \`GET /v2/devices-detailed\` with read-only scope. \`ninja_auth_management\` is bound exclusively to \`REBOOT_NODE\`, calling \`POST /v2/device/{id}/reboot/NORMAL\`. Neither credential appears on the other's node — cross-assignment is architecturally impossible at the canvas layer.
  
  ## Stall Detection Pipeline
  
  ### Filter Logic
  
  \`FILTER_DEVICE\` applies three conditions before any device enters the remediation pipeline: an organization ID boundary check enforces scope, \`manufacturer !== 'QEMU'\` excludes virtual machines, and hostname prefix matching restricts scope to the target render node groups.
  
  ### Host Resolution
  
  \`EXTRACT_STALLED_HOSTS\` cross-references each stalled hostname against the live NinjaOne inventory. Matching normalizes casing and strips the internal domain suffix. Devices not found in inventory are logged to console and skipped — they never enter the reboot pipeline. The node also extracts the \`lastLoggedInUser\` field per device for use by the downstream guard.
  
  ## Dual-Condition Reboot Guard
  
  \`FINAL_REBOOT_GUARD\` runs in **Run Once For Each Item** mode and evaluates a logical AND gate. **Condition 1** checks if the hostname is present in the stalled nodes list from \`SET_REPORT\`. **Condition 2** checks if \`lastLoggedInUser\` strictly equals the designated render service account. Both must be \`true\` for \`rebootAllowed\` to resolve to \`true\`. A machine with another user logged in, or with a null or missing \`lastLoggedInUser\`, is protected from reboot.
  
  ## Rate Limiting
  
  \`LOOP_STALLED_WORKERS\` uses \`SplitInBatches\` to process one device at a time, preventing concurrent bulk reboot calls from saturating the NinjaOne API rate limit. Each device completes its full reboot cycle — including the offline branch check and log entry — before the next item is processed.
  
  ## Offline Node Handling
  
  After the \`FINAL_REBOOT_GUARD\` clears a device for reboot, \`IF_NODE_OFFLINE\` checks the device's \`offline\` field. Nodes confirmed offline are routed to a skip branch — they are logged in the HTML recovery report but do not receive a reboot command, preventing repeated force-reboot attempts against unreachable hardware within the same execution cycle.
  
  ## Recovery Report
  
  \`BUILD_REBOOT_EMAIL\` generates an HTML summary after each cycle confirming which devices were rebooted, which were skipped as offline, and which were blocked by the user identity guard. The report is delivered via the \`gmail-prod\` OAuth2 credential.`,
      },
      {
        id: "wake-on-lan-multi-client-deployment",
        title: "Wake-on-LAN Service — Multi-Client Deployment",
        subtitle:
          "Full deployment blueprint for a Bash-driven Wake-on-LAN proxy service on Ubuntu Server, managed by NinjaOne RMM, with GPO-enforced BIOS and NIC configuration for Windows 11 workstations.",
        slug: "wake-on-lan-multi-client-deployment",
        markdownContent: `## Overview
  
  This blueprint documents the complete deployment of a Wake-on-LAN proxy service across distributed infrastructure. An Ubuntu Server VM acts as the WoL broadcast proxy on the same subnet as target workstations. A scheduled Bash orchestration engine runs on a 5-minute cron interval, pings all devices in a CSV pool, broadcasts UDP magic packets to offline nodes, waits for boot, verifies recovery, and logs results with local timezone timestamps. NinjaOne RMM provides remote management and monitoring of the proxy VM.
  
  ## Architecture Constraints
  
  The proxy VM NIC **must be in bridge mode** — NAT blocks directed magic packets from reaching powered-off NICs. All scripts run as root via the root crontab. The orchestration engine handles state calculations independently and writes structured JSON and execution logs for audit and diagnostics.
  
  ## Workstation BIOS Requirements
  
  Target workstations require specific BIOS settings: Wake-on-LAN / Power On by Network must be **Enabled**, ErP / EuP power saving must be **Disabled** to prevent standby NIC power cuts, PCI Express PME must be **Enabled** for magic packet detection, and Network Stack / PXE Boot ROM must be **Enabled** to keep the NIC active after shutdown.
  
  ### Windows 11 Power Plan
  
  Sleep, hibernate, and hybrid sleep must all be set to **Never**. PCIe Link State Power Management must be **Off**. Fast Startup must be disabled by unchecking it under Power Options. These settings prevent the OS from cutting NIC power in states that block WoL reception.
  
  ### NIC Driver Configuration
  
  In Device Manager, the active NIC must have **Wake on Magic Packet** enabled under Advanced properties. **Allow the computer to turn off this device to save power** must be unchecked. On Intel I211 adapters specifically, \`*EnablePME\` must be set to Enabled and \`*EEELinkAdvertisement\` (Energy Efficient Ethernet) must be Disabled — the GPO startup script handles this automatically via \`Set-NetAdapterAdvancedProperty\`.
  
  ## Automation Scripts
  
  ### ping_check.sh
  
  Reads the device pool CSV (\`hostname,ip,mac\` format), pings each IP with a 1-second timeout, and writes offline MAC addresses to \`down_devices.txt\` separated by hyphens. Online devices are logged as ONLINE; offline devices are logged as ALERT.
  
  ### run_wol_broadcast.sh
  
  Reads the MAC list from \`down_devices.txt\`, validates each address against a MAC regex, and calls \`wakeonlan -i \$BROADCAST_IP\` per valid address. The broadcast IP must be set to the directed broadcast address of the shared subnet.
  
  ### automated_wolservice.sh
  
  The full orchestration wrapper: runs \`ping_check.sh\`, evaluates whether any devices are down, calls \`run_wol_broadcast.sh\` if needed, clears the down-devices file, waits 2 minutes for boot, runs a second ping check, builds a JSON status report, and writes an execution summary to \`service_execution.log\`.
  
  ## GPO Enforcement
  
  A Group Policy Object linked to the target workstation OU enforces power settings via GPO Preferences and applies a PowerShell startup script through SYSVOL. The startup script disables Fast Startup via registry key \`HiberbootEnabled = 0\`, enables Wake on Magic Packet on all physical adapters, and applies Intel I211-specific PME and EEE settings. GPO scope is Computer Configuration only — no user policy required.
  
  ## NinjaOne Agent Integration
  
  The proxy VM is enrolled as a NinjaOne Linux agent. The agent is installed via a \`.deb\` package downloaded from the NinjaOne portal and runs as a systemd service. This allows NinjaOne to remotely execute the WoL orchestration script, monitor service health, and receive execution logs without requiring direct SSH access to the proxy VM.`,
      },
      {
        id: "automated-wol-service-workflow",
        title: "Automated WoL Service Workflow",
        subtitle:
          "n8n workflow orchestrating Wake-on-LAN recovery via SSH-driven ping checks, magic packet broadcasts, post-boot verification, and structured HTML recovery reports delivered by email.",
        slug: "automated-wol-service-workflow",
        markdownContent: `## Overview
  
  This n8n workflow automates Wake-on-LAN recovery for offline infrastructure nodes across a production environment. On a 10-minute schedule, it runs a ping health check via SSH, evaluates whether any devices are down, broadcasts WoL magic packets to offline nodes, waits 2 minutes for boot, runs a second verification ping, and delivers a structured HTML recovery report by email. When all devices are online, the workflow terminates in sub-second time with no broadcast sent.
  
  ## Execution Chain
  
  \`EACH_10_MIN\` fires on \`*/10 * * * *\`. \`PING_CHECK\` runs \`ping_check.sh\` on the remote WoL host via SSH. \`READ_DOWN_DEVICES\` reads \`down_devices.txt\`. \`IF_DEVICE_DOWN\` checks if stdout is not empty — if true, the recovery chain activates; if false, the workflow terminates cleanly with no further nodes executed.
  
  ### Recovery Path
  
  On a TRUE branch: \`WAKE_UP_DEVICES\` runs \`run_wol_broadcast.sh\`. \`CLEAR_DEVICES_DOWN_FILE\` truncates \`down_devices.txt\` via \`sudo truncate\`. \`WAIT_2_MIN\` pauses for 2 minutes to allow machines to initialize network stacks. \`SECOND_PING_CHECK\` runs a second verification pass. \`CHECK_UP_DEVICES\` reads the updated down-devices file. \`READ_PING_LOG\` reads the full ping log. \`BUILD_UP_DEVICES_REPORT\` parses the last execution block and builds the HTML email. \`SEND_UP_DEVICES_REPORT\` delivers it via Gmail.
  
  ## Credential Bindings
  
  \`ssh_wolservice\` is the SSH Password credential bound to all seven SSH execution nodes. \`gmail-prod\` is the Gmail OAuth2 credential bound to the email delivery node. MAC addresses and broadcast targets are managed entirely on the remote host inside the shell scripts — the n8n graph has zero visibility into MAC/IP arrays.
  
  ## Log-Based Report Generation
  
  \`BUILD_UP_DEVICES_REPORT\` parses only the **last execution block** from the ping log, delimited by a separator line, so the report reflects the most recent ping cycle rather than accumulating historical entries. Each log line is parsed with a regex that captures hostname, IP, and status (ONLINE or OFFLINE). Per-device status is rendered as a binary label: **ONLINE — CONFIRMED** in green or **OFFLINE — UNRESPONSIVE** in red. The email subject is assembled dynamically: \`[WOLSERVICE] {total} Broadcast Targets | {online} Online | {offline} Offline\`.
  
  ## Mathematical Safety
  
  The code node does not perform division. All numeric operations are additive \`.filter().length\` counts on the parsed devices array. If the regex matches zero lines, all counts resolve to \`0\` without throwing, and the HTML table renders a safe placeholder row. The raw log read uses an \`|| ''\` fallback to prevent null-reference crashes on empty SSH stdout.
  
  ## Missing Error Paths
  
  The workflow has no error trigger node or secondary notification path. SSH credential failures, script exit errors, and Gmail OAuth2 expiry all appear only in the n8n execution log. A failed execution generates no alert to the IT team. The \`run_wol_broadcast.sh\` exit code is not evaluated — if the broadcast fails, the down-devices file is still cleared and the workflow continues to verification.
  
  ## Activation
  
  The exported workflow JSON has \`active: false\`. To enable scheduled execution, open the workflow editor and toggle the Active switch. The \`EACH_10_MIN\` cron trigger will begin firing every 10 minutes.`,
      },
      {
        id: "licenses-dashboard-foundry-houdini",
        title: "Licenses Dashboard — Foundry & Houdini",
        subtitle:
          "Grafana dashboard infrastructure providing unified telemetry across Nuke and Houdini license pools, tracking allocation density, per-seat utilization, and per-pool expiration thresholds in real time.",
        slug: "licenses-dashboard-foundry-houdini",
        markdownContent: `## Overview
  
  The studio licensing monitoring infrastructure provides unified telemetry across Foundry and Houdini license pools. Two parallel dashboards track allocation density, per-seat utilization, and per-pool expiration thresholds. Each pool is isolated into its own expiry-keyed dimension to prevent date aggregation contamination — a pool expiring in 30 days and a pool expiring in 180 days are never merged into a single row.
  
  ## License Overview Dashboard
  
  The License Overview dashboard implements a multi-dimensional tracking interface that segments each product's license pool by expiration date. Two parallel table panels — one for Foundry products and one for Houdini products — each expose the same column matrix: Expiration Date, Days to Expiry, Product, Total seats, In Use, Free, and Utilization percentage.
  
  ### Expiry Threshold Colorization
  
  The **Days to Expiry** column drives color-coded urgency scaling at the row level. Red indicates 30 days or fewer — pool expiry is imminent and renewal action is required. Yellow indicates 31 to 90 days — monitor closely and initiate renewal. Green indicates more than 90 days — no immediate action required. Each pool row inherits its color state independently, ensuring a critical pool does not mask a healthy pool in the same panel.
  
  ## License Usage Dashboard
  
  The License Usage dashboard contains four stat cards at full width — one each for Nuke, Nuke Render, Houdini FX, and Houdini Core — each showing In Use, Total, and Free counts from Prometheus with \`lastNotNull\` aggregation. All cards use \`colorMode: background\` so the entire card background changes color based on seat availability thresholds.
  
  ### Threshold Logic
  
  For the Nuke card, the Free field turns red at \`0\` and green at \`>= 1\`. The In Use field is green at \`0\`, yellow at \`1\`, and red at \`>= 4\`. Houdini Core uses a simpler threshold: In Use turns red at \`>= 1\` immediately, reflecting the stricter seat scarcity on that product.
  
  ## Active Sessions Table
  
  The Active Sessions row contains a full-width table panel tracking live license checkouts across all Foundry and Houdini pools. It merges two Prometheus instant queries — \`foundry_license_in_use == 1\` and \`houdini_license_in_use == 1\` — and exposes three columns: Product (mapped from feature labels to display names), Artist (username of session holder), and Workstation (hostname). The table supports column-level filtering for per-artist tracing, per-workstation tracing, and per-product filtering.
  
  ### Product Label Mappings
  
  Feature labels map to display names: \`nuke_i\` → Nuke, \`nuke_r\` → Nuke Render, \`houdini_fx\` → Houdini FX, \`houdini_core\` → Houdini Core, \`houdini_engine\` → Houdini Engine, \`karma_renderer\` → Karma Renderer.
  
  ## Infrastructure Dependency
  
  Both dashboards depend on the \`foundry-exporter\` and \`houdini-exporter\` services running on the \`licenses-dashboard\` host. Prometheus scrapes both exporters every 30 seconds. A scrape failure causes stat panels to display \`No data\` and the session table to clear entirely. Dashboard queries against total/used/free metrics must not include a \`date\` filter — that label is exclusive to expiry-keyed metrics.`,
      },
      {
        id: "licenses-exporter-foundry-houdini",
        title: "Licenses Exporter — Foundry & Houdini",
        subtitle:
          "Parallel Python micro-services fetching license telemetry from Foundry and Houdini licensing engines via isolated SSH bridges, parsing output into labeled Prometheus metrics exposed on local HTTP endpoints.",
        slug: "licenses-exporter-foundry-houdini",
        markdownContent: `## Overview
  
  Two parallel Python micro-services — \`foundry_exporter.py\` and \`houdini_exporter.py\` — fetch license telemetry from remote licensing engines via isolated SSH bridges, parse the output into labeled Prometheus metrics, and expose them on local HTTP endpoints on the monitoring host. Each service runs as a background-threaded Flask daemon, polling its upstream licensing server every 30 seconds.
  
  ## SSH Bridge Architecture
  
  Each service authenticates to its upstream licensing engine using a dedicated, non-root SSH key bound to a restricted \`license_monitor\` user. The Houdini exporter uses \`id_ed25519_houdini_monitor\` against the Houdini licensing server, and the Foundry exporter uses \`id_rsa_license_monitor\` against the Foundry licensing server.
  
  ### Forced Command Restriction
  
  The \`license_monitor\` user on each licensing engine is locked via \`authorized_keys\` with a forced command pointing to the exporter shell script. The key options include \`no-port-forwarding\`, \`no-X11-forwarding\`, \`no-agent-forwarding\`, and \`no-pty\`. This prevents any interactive shell, port forwarding, or arbitrary command execution — SSH access is strictly limited to running the exporter script.
  
  ## Metric Collection Lifecycle
  
  ### Scrape Trigger
  
  Prometheus hits \`/metrics\` on port \`8000\` (Foundry) or \`8001\` (Houdini) at the configured scrape interval. Flask returns the current registry snapshot via \`generate_latest(REGISTRY)\`.
  
  ### Background Refresh
  
  A background thread running \`refresh_loop()\` calls \`collect_metrics()\` every 30 seconds independently of scrape timing. Each invocation executes the SSH subprocess with a hard 15-second timeout wall. If the subprocess times out, the registry is not cleared — prior scrape values persist until the next successful collection.
  
  ### Registry Clear Cycle
  
  Both exporters execute a full registry clear at the start of every collection pass. This eliminates stale label combinations from previous scrapes and prevents cross-contamination between pool entries or expired nodes. If the SSH call returns empty output, the registries remain cleared rather than serving stale data.
  
  ## Foundry Parsing Strategy
  
  The Foundry exporter implements a **single-pass direct parsing strategy** using a single compiled regex against each output line. Global pool metrics (\`foundry_license_total\`, \`foundry_license_used\`, \`foundry_license_free\`) are stored indexed by \`feature\` label only — no \`date\` label. Date-keyed expiry metrics retain both the \`feature\` and \`date\` labels, with \`days_until()\` computing the integer day delta and \`parse_expiry_to_timestamp()\` converting the date string to a Unix timestamp. Active session metrics (\`foundry_license_in_use\`) carry \`feature\`, \`user\`, and \`host\` labels, set to value \`1\` per active checkout.
  
  ## Metrics Schema
  
  ### Foundry
  
  \`foundry_license_total\`, \`foundry_license_used\`, and \`foundry_license_free\` carry only the \`feature\` label. \`foundry_license_expiry\` and \`foundry_license_days_remaining\` carry \`feature\` and \`date\` labels. \`foundry_license_in_use\` carries \`feature\`, \`user\`, and \`host\` labels.
  
  ### Houdini
  
  All Houdini pool metrics (\`houdini_license_total\`, \`houdini_license_used\`, \`houdini_license_free\`, \`houdini_license_expiry\`, \`houdini_license_days_remaining\`) carry both \`feature\` and \`date\` labels. \`houdini_license_in_use\` carries \`feature\`, \`user\`, and \`host\` labels.
  
  ## Systemd Management
  
  Both services run as systemd units on the monitoring host, configured to start on boot and restart on failure. Service health is verified with \`systemctl status\` and live logs streamed with \`journalctl -u <service> -f\`. Metric output is validated directly with \`curl http://localhost:8000/metrics | head -30\`.`,
      },
      {
        id: "it-assets-dashboard",
        title: "IT Assets Dashboard",
        subtitle:
          "Public-facing Grafana dashboard delivering real-time workstation inventory, contract expiration tracking, critical disk usage alerts, and hardware demographic distributions across the production fleet.",
        slug: "it-assets-dashboard",
        markdownContent: `## Overview
  
  The IT Assets Dashboard delivers real-time tracking of workstation allocations, critical disk usage warnings, contract lifecycles, and hardware demographics across the production fleet. It consolidates inventory state, expiration risk, and device distribution into a single read-only, public-accessible Grafana view backed by Prometheus metrics pushed from the Asset Inventory workflow.
  
  ## Access Architecture
  
  The dashboard is accessed via a vanity URL configured in Nginx Proxy Manager as a 302 redirect to the Grafana public share path. This decouples the public-facing URL from the internal Grafana share token — the token can be rotated without impacting the published URL. No authentication is required; the dashboard is read-only with no variables or interactive filters exposed to public viewers.
  
  ## Inventory and Contract Panels
  
  ### Full Inventory Matrix
  
  A table panel renders the full active configuration mapping of all registered workstations. Each row exposes hostname, assigned user, department, physical location, and seat. The query runs in instant mode against \`inventory_device\` — all records reflect current state regardless of the dashboard time range selector.
  
  ### Expiring Contracts
  
  A contract lifecycle table surfaces near-term expirations. The **Days to Expire** column drives urgency colorization: yellow at 27 days or fewer, blue for the mid-term planning window of 118 to 207 days. This enables fast visual triage without manual filtering.
  
  ### Disk Usage Monitoring
  
  The disk panel tracks all assigned workstation volumes sorted descending by disk usage percentage to surface highest-risk volumes first. Service accounts are excluded from this view. **Critical** (red) fires at 90–100% usage, **Caution** (yellow) fires at 84–88%, and **Normal** (green/blue) covers the remainder.
  
  ## Hardware Demographics
  
  ### Location and Department Distribution
  
  Two pie charts provide organizational profiling. The first shows physical device distribution by floor: 3rd Floor holds 48% of the fleet, 4th Floor 32%, and CPD Room 17%. The second shows department-level allocation — Animation leads with 41 units, followed by Bots (15), and Layout (14).
  
  ### Hardware Spec Panels
  
  Four donut charts track GPU model distribution per department, RAM capacity density, workstation model distribution, and OS version deployment split. All four use instant queries against Prometheus metrics exposed by the Asset Inventory workflow's Pushgateway push. RAM labels are renamed at the transformation layer: \`HIGH → +64GB\`, \`MEDIUM → +32GB\`, \`LOW → +16GB\`, \`BASIC → >16GB\`.
  
  ## Data Source
  
  All panels read from a Prometheus datasource in instant mode. The underlying metrics are pushed by the \`automated_atlantis_inventory\` n8n workflow to Prometheus Pushgateway on a Mon–Fri 08:30 schedule. The 27 metric families cover disk, RAM, OS, contract lifecycle, health score, physical location, user assignment, and device record type.
  
  ## Important Dependency
  
  This dashboard depends entirely on the Asset Inventory Workflow. If the n8n sync fails, panels display stale data from the last successful push — or \`No data\` if the Pushgateway job group was cleared.`,
      },
      {
        id: "farm1-temperature-power-monitoring",
        title: "Farm1 Temperature & Power Monitoring",
        subtitle:
          "HPE OneView REST API telemetry pipeline pushing thermal and power metrics from 12 Synergy 480 Gen10 blades to Prometheus Pushgateway via a session-cached systemd timer, visualized in a public Grafana dashboard.",
        slug: "farm1-temperature-power-monitoring",
        markdownContent: `## Overview
  
  Farm1 temperature and power monitoring covers 12 HPE Synergy 480 Gen10 blades in a single enclosure managed by HPE OneView. Thermal and power telemetry is retrieved via the OneView REST API, pushed to Prometheus Pushgateway, and visualized in a public-facing Grafana dashboard accessible via Nginx reverse proxy.
  
  ## Architecture Evolution
  
  ### Root Cause of V1 Failure
  
  The original Flask exporter triggered a new OneView login on every Prometheus scrape — approximately 1,440 logins per day. HPE OneView enforced a per-client session limit for the exporter's source IP, producing \`AUTHN_SESSION_CLIENT_LIMIT_CROSSED\` errors and blocking all further logins.
  
  ### V2 Fix — Pushgateway Architecture
  
  A systemd-managed one-shot push script replaced the long-running Flask exporter. OneView is queried **4 times per day** via a cached session token persisted to disk. Metrics are pushed to Prometheus Pushgateway, which retains the last successful push between runs. This reduced OneView logins from ~1,440/day to ~4/day and eliminated the session limit risk entirely.
  
  ## Telemetry Extraction
  
  The push script authenticates to the OneView management endpoint using \`POST /rest/login-sessions\` with \`authLoginDomain: LOCAL\`. The session token is cached to \`/opt/.oneview_farm1_session.json\` (permissions \`600\`). On each push, the script fetches server hardware from \`GET /rest/server-hardware\` and pulls per-blade utilization from \`GET /rest/server-hardware/{id}/utilization\`. The latest telemetry sample is extracted as \`metricSamples[-1][1]\`. Power types tracked per blade: \`AveragePower\` and \`PeakPower\` (\`PowerCap\` is skipped when \`None\`).
  
  ## Metrics Reference
  
  \`oneview_temperature_celsius\` (gauge) — ambient temperature in °C per blade, labeled by \`node\`, \`bay\`, and \`model\`. \`oneview_power_watts\` (gauge) — power draw in watts per blade, carrying a \`metric\` label distinguishing \`AveragePower\` from \`PeakPower\`. \`node_status_ok\` (gauge) — \`1\` for OK, \`0\` for Critical or Warning. \`oneview_scrape_success\` (gauge) — \`1\` if the push succeeded, \`0\` if it failed.
  
  ## systemd Timer
  
  The service unit \`cpu-temp-farm1-push.service\` runs as a one-shot service under the designated service user. The timer unit fires \`OnBootSec=2min\` for the first run and repeats every \`6h\` thereafter. To enable: \`sudo systemctl daemon-reload && sudo systemctl enable cpu-temp-farm1-push.timer && sudo systemctl start cpu-temp-farm1-push.timer\`.
  
  ## Prometheus Configuration
  
  The configuration uses the Pushgateway scrape job with \`honor_labels: true\`. The deprecated V1 direct scrape job must be removed to prevent metric duplication. Farm1 metrics are validated with a Prometheus API query against \`oneview_temperature_celsius{job="cpu_temp_farm1"}\`.
  
  ## Troubleshooting
  
  Session limit errors are resolved by stopping all exporter services, clearing \`/opt/.oneview_farm1_session.json\`, waiting for idle session expiry in HPE OneView, and re-enabling the timer. Permission errors on the session cache file are resolved by re-creating the file with \`chown xatelite:xatelite\` and \`chmod 600\`. SSL errors are caused by using HTTP instead of HTTPS or by omitting the \`authLoginDomain: LOCAL\` field in the login payload.`,
      },
      {
        id: "farm2-temperature-reboot-monitoring",
        title: "Farm2 Temperature & Reboot Monitoring",
        subtitle:
          "Out-of-band IPMI telemetry pipeline covering 16 render nodes across two BMC VLANs, tracking CPU temperatures and SEL reboot events via parallel Python exporters scraped by Prometheus.",
        slug: "farm2-temperature-reboot-monitoring",
        markdownContent: `## Overview
  
  Farm2 temperature and reboot monitoring covers 16 render nodes across two BMC VLANs. CPU thermal data and IPMI SEL reboot events are scraped out-of-band via IPMI, exposed to Prometheus, and visualized in a public-facing Grafana dashboard via Nginx reverse proxy. All 16 nodes are confirmed reporting with the VLAN 100 reachability issue resolved.
  
  ## VLAN 100 Resolution
  
  ### Root Cause
  
  A subset of nodes (BMC subnet on a dedicated VLAN) were returning \`cpu_node_reachable=0\` and \`node_reboot_reachable=0\`. The exporter VM had no L2 path to the BMC VLAN — all IPMI UDP 623 traffic was dropped at the network boundary.
  
  ### Fix Applied
  
  A new virtual network interface with the correct VLAN tag was deployed on the exporter VM, granting direct Layer 2 access to the BMC segment. Bridge mode is critical — NAT does not pass IPMI UDP 623 traffic. After the fix, all 16 nodes respond to IPMI queries with \`cpu_node_reachable=1\` and \`node_reboot_reachable=1\` confirmed, eliminating NaN artifacts from Grafana panels.
  
  ## Exporter Architecture
  
  Two Python exporters run on the exporter VM: \`cpu_temp_exporter\` on port \`9200\` for CPU temperature and node reachability, and \`reboot_exporter\` on port \`9201\` for IPMI SEL reboot events and node reachability.
  
  ### Parallel Polling
  
  Both exporters use \`ThreadPoolExecutor(max_workers=16)\` — one thread per node, with simultaneous IPMI queries. Query timeouts are 10 seconds for temperature and 15 seconds for SEL reboot queries. Every node in the pool always emits a metric on every scrape, with \`reachable=0\` on failure — no stale markers and no Grafana NaN artifacts.
  
  ### Reboot Counter
  
  The reboot counter is in-memory and resets on service restart. It increments only for SEL event IDs greater than the last seen value, preventing double-counting on repeated scrapes.
  
  ## Metrics Reference
  
  \`cpu_temperature\` (gauge) — CPU temperature in °C, labeled by \`node\` and \`cpu\`. \`cpu_node_reachable\` (gauge) — \`1\` if IPMI responded, \`0\` if unreachable. \`node_reboot_total\` (counter) — OS Boot events from IPMI SEL since last service start. \`node_last_reboot_timestamp_seconds\` (gauge) — Unix timestamp of the most recent reboot event. \`node_reboot_reachable\` (gauge) — \`1\` if IPMI responded to the SEL query, \`0\` if unreachable.
  
  ## NaN Suppression
  
  All temperature panels gate on \`cpu_node_reachable\` to exclude unreachable nodes from aggregations using a PromQL multiplication join: \`cpu_temperature * on(node) group_left() (cpu_node_reachable > 0)\`. Unreachable nodes produce no match and are excluded entirely — no \`0\` values contaminate min/avg/max computations.
  
  ## Dashboard Sections
  
  The Grafana dashboard covers global status stats, node reachability indicators, per-node temperature gauges, a summary table, the full CPU matrix, time-series history panels by node and by CPU, workload ranking bargauges, and 24-hour peak stat cards.`,
      },
      {
        id: "random-secure-friendly-password",
        title: "Random Secure Friendly Password",
        subtitle:
          "Python Flask web service generating high-entropy human-readable passphrases using Python's secrets library, deployed as a persistent systemd daemon behind Nginx with TLS termination and internal network access controls.",
        slug: "random-secure-friendly-password",
        markdownContent: `## Overview
  
  A self-contained Python Flask web service that generates high-entropy friendly passphrases and cryptographically secure random keys, deployed as a persistent systemd daemon. It exposes a clean browser UI and a structured JSON API endpoint accessible exclusively to authorized internal network clients. The generation pipeline runs entirely within the isolated local network — no external API calls or third-party lookups.
  
  ## Generation Algorithm
  
  The \`/generate\` endpoint produces a structured passphrase following the format: \`[word1_lowercase][Separator_Symbol][word2_Capitalized][Random_2-digit_number]\`. The separator is drawn from \`[".", "$"]\` via \`secrets.choice\`. Words are drawn from a 60-word curated vocabulary. The trailing number falls in the \`10\`–\`99\` range. Example output: \`come\$Amb47\`. This structure produces human-readable, memorable passphrases that remain high-entropy due to the cryptographically secure random selection at each step.
  
  ## Security Architecture
  
  ### Proxy Routing and TLS Isolation
  
  All inbound traffic enters through Nginx Proxy Manager. HTTP requests on port 80 are forcibly redirected to HTTPS via the NPM Force SSL rule. The edge proxy terminates TLS using a bound production certificate before forwarding requests internally to the Flask daemon on port \`5000\`. Access is restricted to an internal network whitelist profile, blocking all external public traffic at the NPM access control layer.
  
  ### Data Protection
  
  The generation pipeline executes entirely inside the isolated local network. No client data or execution state reaches external servers. The codebase contains no hardcoded credentials or environment keys — it is safe for Git commits and shared repositories. Password construction runs exclusively within Python's \`secrets\` library scope with no external dependency calls.
  
  ## Input Validation
  
  Input length parameters are hard-clamped at the backend layer: minimum 12 characters, maximum 30 characters. Requests outside these bounds are rejected before any generation logic executes.
  
  ## Deployment Stack
  
  The service runs as a Gunicorn WSGI server fronted by Nginx Proxy Manager for TLS termination and access control. The systemd unit file at \`/etc/systemd/system/friendly-pass-generator.service\` configures the service with \`Restart=on-failure\`, a 5-second restart delay, and the designated service user namespace. The working directory is \`/opt/friendly-pass-generator\`.
  
  ## Browser UI
  
  The frontend is built with Tailwind CSS and supports native browser clipboard interaction for immediate copy use. The JSON response payload from \`/generate\` is captured by the frontend and rendered directly into the output text field. No page reload is required between generations.
  
  ## Resiliency
  
  The service recovers automatically from process crashes via the systemd restart policy. If Nginx Proxy Manager reports upstream timeouts, the backend socket is validated directly via local loopback with \`curl -I http://127.0.0.1:5000\`. An HTTP 200 response confirms the Flask daemon is accepting connections — a connection refused error indicates the systemd service requires a restart.`,
      },
      {
        id: "compact-image-gui-tool",
        title: "Compact Image GUI Tool",
        subtitle:
          "Desktop Python application providing a clean native UI for batch conversion of PNG, BMP, and TIFF images to compressed JPEG output with multi-threaded processing, real-time progress tracking, and per-run savings summaries.",
        slug: "compact-image-gui-tool",
        markdownContent: `## Overview
  
  A localized desktop Python graphical engine designed for high-efficiency image optimization, resizing, and batch format transcoding pipelines. Built with CustomTkinter and Pillow, it provides a clean native UI for selecting source and destination folders, real-time progress tracking, and multi-threaded batch conversion of PNG, BMP, and TIFF images to compressed JPEG output with per-run savings summaries.
  
  ## Architecture
  
  The application follows a clear separation between the GUI layer (\`App\` class built on \`ctk.CTk\`) and the conversion engine (\`core_engine\` module exposing the \`convert\` function and \`SUPPORTED\` extension set). This keeps the UI responsive during batch processing — all conversion work runs on a background daemon thread, leaving the main thread free to update progress indicators.
  
  ## UI Design
  
  The interface is built entirely with CustomTkinter's native widget set. The color palette uses a light Apple-inspired surface (\`#F5F5F7\` base, \`#E8E8ED\` secondary), blue accent (\`#2563EB\`), and dark foreground (\`#1C1C1E\`). The title font targets SF Pro Display at 22px bold. All controls are radius-12 rounded for visual consistency. The application window is centered at launch and enforces a minimum size of 500×600px.
  
  ### Input Layout
  
  Two folder picker rows — Origin and Destination — each contain a label, a text entry bound to a \`StringVar\`, and a Browse button. The Browse button opens \`filedialog.askdirectory\` with a descriptive title. The entry fields display the selected path and can also be typed into directly.
  
  ### Progress Indicators
  
  A \`CTkProgressBar\` renders the batch progress as a fraction (current file / total files). The status label below updates per file with the current filename and index. Both elements update from the background thread using \`configure()\` calls — CustomTkinter's thread-safe widget update mechanism.
  
  ## Input Validation
  
  Before launching the batch thread, the UI validates: Origin must be non-empty, Destination must be non-empty, Origin must resolve to an existing directory on disk, Origin and Destination must not resolve to the same path (prevents accidental overwrites), and at least one supported image file must exist in the Origin folder. If any validation fails, a native warning or error dialog is shown and the batch does not start.
  
  ## Batch Processing
  
  The \`_run\` method iterates over all supported files in sorted order. For each file, it calls \`convert(src, out)\` from \`core_engine\` where the output filename is \`{stem}_compact.jpg\`. Results are collected as a list of result objects carrying \`status\`, \`original_bytes\`, and \`output_bytes\` fields.
  
  ## Summary Report
  
  After the batch completes, \`_show_summary\` computes the total bytes saved and the savings percentage across all successfully converted files. Error count is included if any files failed. The summary is presented in a native info dialog: \`Processed: N file(s) | Total saved: X.XX MB (Y.Y%) | Errors: Z\`.
  
  ## Supported Formats
  
  Input: \`.png\`, \`.bmp\`, \`.tiff\`. Output: JPEG with compression applied by the \`core_engine\` conversion function. The \`SUPPORTED\` set is imported from \`core_engine\` and used directly in the file filter — no hardcoded extensions in the GUI layer.`,
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
  