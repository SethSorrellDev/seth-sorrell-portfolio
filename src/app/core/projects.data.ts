import { BadgeTone } from '../shared/ui/badge/badge';

export interface HardProblem {
  title: string;
  description: string;
}

export interface CaseStudy {
  problem: string[];
  whyNow: string[];
  approach: string[];
  hardProblems: HardProblem[];
  results: string[];
  whatsNext: string[];
}

export interface RepoLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  statusLabel: string;
  statusTone: BadgeTone;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  repoLinks?: RepoLink[];
  caseStudy: CaseStudy;
}

export const PROJECTS: Project[] = [
  {
    slug: 'fleetcheck',
    name: 'FleetCheck',
    tagline: 'Vehicle inspection reporting with four-role RBAC and a full audit trail.',
    statusLabel: 'Deployed',
    statusTone: 'route',
    stack: ['Spring Boot', 'React', 'TypeScript', 'Docker', 'PostgreSQL'],
    liveUrl: 'https://fleetcheck-1.onrender.com',
    repoUrl: 'https://github.com/SethSorrellDev/fleetcheck',
    caseStudy: {
      problem: [
        "Vehicle inspections at the plant ran on paper and tribal knowledge — a driver flags an issue, a mechanic hears about it secondhand, and there's no real record of who signed off on what or when it actually got fixed.",
        "There was no structured way to separate who could report a problem from who could work it from who could close it out. Everyone effectively had the same level of access to everything, which is fine until something goes wrong and nobody can say who touched it.",
      ],
      whyNow: [
        "This became the flagship piece of the portfolio on purpose. Cintas' fleet operations run on exactly this workflow — driver reports, mechanic resolves, manager oversees — so building it end-to-end with a real state machine and real role separation is the clearest way to show I understand the domain and can ship production-grade software for it.",
        "It's also the app I leaned hardest into full-stack fundamentals with: Spring Boot on the backend, React and TypeScript on the front, which lines up with the stack most internal Cintas engineering teams are actually working in.",
      ],
      approach: [
        "The backend is Spring Boot 3.5 on Java 21, with four distinct roles — DRIVER, MECHANIC, FLEET_MANAGER, and ADMIN — enforced through Spring Security, not just hidden in the UI. Each inspection report moves through a real state machine rather than a free-form status field, so a report can't skip from 'submitted' straight to 'closed' without passing through review.",
        "The frontend is React 18 with TypeScript, Vite, and Tailwind CSS v4. The centerpiece is an interactive SVG diagram of the vehicle — a driver clicks directly on the damaged panel instead of picking from a dropdown, which matches how someone would actually describe damage in person.",
        "Render doesn't run Java natively, so deployment uses a two-stage Docker build: a Maven image compiles the JAR, then a slim JRE-Alpine image runs it, backed by managed PostgreSQL.",
      ],
      hardProblems: [
        { title: 'Lombok silently failing on JDK 25', description: "Getters, setters, and builders just didn't exist at runtime — no compile error, just 'cannot find symbol' everywhere. Turned out Lombok needs both a version pin of 1.18.42 or higher and an explicit annotationProcessorPaths entry in the Maven compiler plugin. The version pin alone does nothing without the second half." },
        { title: "H2 reserving 'YEAR' as a keyword", description: 'A vehicle entity field called year mapped straight to a reserved SQL keyword in H2, and every query against that table failed with a generic syntax error that had nothing obviously to do with the actual column name. Fixed with an explicit @Column(name = "vehicle_year") instead of trying to quote around it.' },
        { title: 'Safari hijacking the login form', description: 'Spring Security\'s default 401 response includes a WWW-Authenticate: Basic header, which makes Safari pop its own native credential dialog on top of the custom login page. Fixed with a custom AuthenticationEntryPoint that leaves the header out.' },
      ],
      results: [
        'FleetCheck is live on Render with managed PostgreSQL, backed by 37 passing backend tests (Mockito and MockMvc) and 22 passing frontend tests (Vitest and Testing Library). It\'s the most complete and most heavily tested piece in the suite.',
      ],
      whatsNext: [
        'Migrate authentication over to the shared identity-service once SSO Phase 3 (client integration) is done, so FleetCheck stops managing its own login independently.',
        "Record a short demo GIF for the README, since Render's free tier spins down and a recording is the only way a visitor sees it working instantly.",
      ],
    },
  },
  {
    slug: 'route-optimizer',
    name: 'RouteOptimizer',
    tagline: 'A VRPTW routing engine that plans multi-stop driver routes against real time windows.',
    statusLabel: 'Deployed',
    statusTone: 'route',
    stack: ['Flask', 'PostgreSQL', 'Leaflet', 'OpenRouteService'],
    liveUrl: 'https://routeoptimizer-fgk8.onrender.com',
    repoUrl: 'https://github.com/SethSorrellDev/routeoptimizer',
    caseStudy: {
      problem: [
        "Route planning was manual — figuring out stop order by hand doesn't account for time windows, vehicle capacity, or how long a driver's shift actually has left. That means wasted mileage, missed service windows, and routes that look fine on paper but fall apart by mid-afternoon.",
      ],
      whyNow: [
        "Routing is the most technically demanding problem in this whole portfolio, and it's exactly the kind of problem 'Operational Technology Software Engineer' roles are built around. This is the piece that proves the domain expertise isn't just familiarity — it's the ability to actually model and solve the constraint problem underneath it.",
      ],
      approach: [
        'The backend is Flask and Python, solving a Vehicle Routing Problem with Time Windows (VRPTW): a nearest-neighbor pass builds an initial route, then a 2-opt improvement pass untangles crossed segments and tightens the total distance.',
        "Every route respects real constraints — time windows, vehicle capacity, and how much shift time a driver has left — and departure times are back-calculated from each stop's required arrival window rather than just stacked forward from a start time.",
        'Results render on a Leaflet and OpenStreetMap dashboard. Plant coordinates and per-stop schedules (service days, volume overrides) are editable directly through the UI rather than requiring a database edit. Geocoding and distance-matrix calls go through OpenRouteService, sitting behind a swappable DistanceProvider interface so the provider itself isn\'t hard-wired in.',
      ],
      hardProblems: [
        { title: 'A complete local file-loss incident', description: 'Lost the entire local project directory partway through development. Rebuilt it fully from terminal heredoc history — which ended up being an accidental proof that the phased, heredoc-based workflow doubles as a recovery path, not just a way of pasting code.' },
        { title: '"Distance matrix could not be built"', description: "The optimizer kept failing at runtime with no clear cause. Traced it back to the seed script never actually setting the plant's latitude and longitude — the record existed, the field was just empty, so every distance calculation had nothing to measure from. Not a routing bug at all, a seed-data bug." },
        { title: 'Estimated return times running short', description: 'The estimated_return calculation didn\'t account for time spent waiting at a stop, so predicted return times were consistently optimistic. Fixed by folding stop wait time into the back-calculation.' },
      ],
      results: [
        "Live and deployed on Render with PostgreSQL, with the repository now public. Still open: there's no pytest coverage on the optimizer heuristics yet, and there's no CI pipeline running against it.",
      ],
      whatsNext: [
        'Add pytest coverage specifically on the routing heuristics — nearest-neighbor construction and the 2-opt pass — not just the surrounding CRUD.',
        'Add a CI pipeline.',
        'Keep an eye on the Render free-tier Postgres 90-day expiry.',
      ],
    },
  },
  {
    slug: 'assistant-scheduler',
    name: 'AssistantScheduler',
    tagline: 'Workforce shift scheduling with RBAC, real-time notifications, and a full audit log.',
    statusLabel: 'Deployed',
    statusTone: 'route',
    stack: ['Flask', 'SQLAlchemy', 'Socket.IO'],
    liveUrl: 'https://assistantscheduler.onrender.com',
    repoUrl: 'https://github.com/SethSorrellDev/AssistantScheduler',
    caseStudy: {
      problem: [
        'Shift coverage and swaps were happening informally — texts, verbal handoffs — with no shared record of who actually agreed to cover what. That\'s how coverage gaps happen: two people each think the other has it handled.',
      ],
      whyNow: [
        "This is the workforce half of the same story RouteOptimizer tells on the routing side — a perfectly optimized route is still worthless if the driver scheduled to run it isn't actually confirmed for that shift. Building both makes the connection between scheduling and routing concrete instead of theoretical.",
      ],
      approach: [
        'Flask and Python again, with role-based access control gating who can propose, approve, or cover a shift swap. Flask-SocketIO handles real-time notifications so a coverage request shows up immediately instead of requiring someone to refresh a page, and every change writes to an audit log.',
        'Since almost every model in a scheduling app revolves around time fields, time columns lean on a custom TimeType decorator that stores times as HH:MM:SS strings in SQLite and hands back proper datetime.time objects on read.',
      ],
      hardProblems: [
        { title: 'Flask-SocketIO version drift', description: 'Real-time notifications worked locally and then broke in ways that were hard to reproduce. Pinning Flask-SocketIO to 5.6.1 with eventlet specifically resolved it — this was a dependency-compatibility problem, not a logic bug in the notification code itself.' },
      ],
      results: [
        'Deployed on Render, with test coverage and documentation now brought up to the same standard as the rest of the suite.',
      ],
      whatsNext: [
        'Bring it into the shared identity-service once SSO client integration is further along.',
      ],
    },
  },
  {
    slug: 'route-book',
    name: 'RouteBook',
    tagline: 'The fleet records system tying stops, drivers, and routes back to a shared history.',
    statusLabel: 'Deployed',
    statusTone: 'route',
    stack: ['Spring Boot', 'React', 'TypeScript'],
    liveUrl: 'https://routebook-frontend.onrender.com',
    repoLinks: [
      { label: 'Backend', url: 'https://github.com/SethSorrellDev/RouteBook' },
      { label: 'Frontend', url: 'https://github.com/SethSorrellDev/routebook-frontend' },
      { label: 'Identity Service', url: 'https://github.com/SethSorrellDev/identity-service' },
    ],
    caseStudy: {
      problem: [
        "Route knowledge — which stops need special handling, gate codes, timing quirks, access notes — tends to live in individual drivers' heads or scattered paper notes. None of that survives a driver being out sick or a route getting reassigned.",
      ],
      whyNow: [
        "RouteBook is what actually makes the other three apps a suite instead of four unrelated projects. It's the shared record that Route, Stop, and Driver entities in the other apps are meant to eventually point back to — the institutional memory layer underneath the operational ones.",
      ],
      approach: [
        'Spring Boot and Java 21 on the backend, React with TypeScript, Vite, and Tailwind CSS v4 on the front — deliberately sharing the same entity-naming conventions (Route, Stop, Driver, Location) as FleetCheck and RouteOptimizer, specifically so the four apps can eventually integrate through the shared identity service instead of just resembling each other.',
      ],
      hardProblems: [
        { title: 'Splitting the frontend and backend into separate repos', description: "This was the wrong call in hindsight. FleetCheck's monorepo structure turned out to be much easier to develop and deploy against, and RouteBook's split-repo setup is directly responsible for the dead relative link between the two right now. Worth naming honestly rather than glossing over — it's the clearest lesson learned across the whole portfolio." },
      ],
      results: [
        'Deployed, but with real open issues: a dead relative link to the frontend, no authentication yet, and no CI.',
      ],
      whatsNext: [
        'Fix the dead frontend link.',
        'Add authentication, or at minimum a read-only demo mode for visitors.',
        'Add a CI pipeline.',
        'Consider migrating to the same monorepo structure the other three apps use.',
      ],
    },
  },
];
