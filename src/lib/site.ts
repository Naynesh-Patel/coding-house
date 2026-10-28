import {
  Code2,
  Smartphone,
  Database,
  Cloud,
  PenTool,
  ShieldCheck,
  Banknote,
  ShoppingBag,
  Layers,
  Building2,
  HeartPulse,
  type LucideIcon,
} from 'lucide-react';

export type ServiceMeta = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  body: string[];
  icon: LucideIcon;
  capabilities: string[];
  outcomes: string[];
  useCases: string[];
  technologies: string[];
  process: { title: string; detail: string }[];
  faq: { q: string; a: string }[];
};

export const services: ServiceMeta[] = [
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    short: 'Bespoke systems built around your domain.',
    summary:
      'We design and engineer tailored software when off-the-shelf tools fall short — from internal platforms to multi-tenant products.',
    body: [
      'Off-the-shelf software rarely fits the way your business actually operates. When you find yourself bending processes to fit a tool, or stitching together five different SaaS products just to handle one workflow, it is time for software built around your reality.',
      'We work as an embedded partner throughout the engagement. That means senior engineers on your calls, clear architecture documentation, and a codebase your team can understand and extend long after we leave.',
      'We focus on pragmatic architecture: choosing the right technology for the job rather than the trendiest, keeping complexity where it delivers value, and documenting decisions clearly so nothing is trapped in someone\'s head.',
    ],
    icon: Code2,
    capabilities: [
      'Domain-driven architecture',
      'API design & integration',
      'Event-driven systems',
      'Multi-tenant platforms',
      'Legacy modernization',
      'Technical due diligence',
      'Internal tools & portals',
      'Real-time data pipelines',
    ],
    outcomes: [
      'A codebase your team owns and can extend',
      'Clear architecture documentation from day one',
      'Tested, observable, production-ready systems',
      'No vendor lock-in or proprietary constraints',
    ],
    useCases: [
      'Internal operations platforms replacing spreadsheets',
      'Multi-tenant SaaS products for mid-market companies',
      'Legacy system rewrites with incremental migration',
      'Data-intensive processing and reporting pipelines',
      'Developer tooling and internal API platforms',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'TypeScript', 'GraphQL', 'REST APIs', 'Docker'],
    process: [
      { title: 'Discovery', detail: 'We map the problem space, constraints, and success criteria with your team before writing a line of code.' },
      { title: 'Architecture', detail: 'We propose a pragmatic architecture, review trade-offs with stakeholders, and document the decisions.' },
      { title: 'Build', detail: 'We ship in small, reviewable increments with continuous integration and weekly demos.' },
      { title: 'Harden', detail: 'We add observability, tests, and documentation before launch — then stay available after.' },
    ],
    faq: [
      { q: 'How long does a typical custom software project take?', a: 'Most projects we engage with run between three and twelve months depending on scope. We work in short increments so you see progress weekly and can change direction without a crisis.' },
      { q: 'Do we get access to the source code throughout the project?', a: 'Yes. You have full access to the repository from day one. No proprietary frameworks, no lock-in. The code is yours.' },
      { q: 'What happens after the software launches?', a: 'We offer ongoing maintenance, feature development, and technical advisory engagements. We design handoffs so your team can operate the system independently if you prefer.' },
    ],
  },
  {
    slug: 'web-mobile-development',
    title: 'Web & Mobile Development',
    short: 'Fast, polished apps people actually enjoy using.',
    summary:
      'Responsive web applications and cross-platform mobile apps with thoughtful UX, performance budgets, and reliable offline behaviour.',
    body: [
      'A digital product only works if people enjoy using it. We build web and mobile applications with attention to the details that make software feel fast, intuitive, and reliable — load times, interaction feedback, offline handling, and consistent design across every screen size.',
      'We do not separate design and engineering. Our teams work from shared design systems, which means what you see in Figma is what ships in production, and the component library you end up with is maintained and extendable.',
      'Whether it is a customer-facing application, an internal portal, or a cross-platform mobile app, we build to real-world constraints: average hardware, variable network conditions, and users who have no patience for loading spinners.',
    ],
    icon: Smartphone,
    capabilities: [
      'React & Next.js web applications',
      'Cross-platform mobile (React Native)',
      'Design system implementation',
      'Performance optimization',
      'Offline-first data sync',
      'Progressive Web Apps (PWA)',
      'App store deployment',
      'Accessibility (WCAG 2.2)',
    ],
    outcomes: [
      'Sub-second interactions on average hardware',
      'Consistent design across web and mobile',
      'Maintainable component library your team can use',
      'App store listings handled and maintained',
    ],
    useCases: [
      'Customer portals and self-service dashboards',
      'B2B and B2C mobile applications',
      'E-commerce storefronts with complex product requirements',
      'Booking and scheduling user interfaces',
      'Data visualization and reporting dashboards',
    ],
    technologies: ['React', 'Next.js', 'React Native', 'Expo', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Playwright'],
    process: [
      { title: 'Prototype', detail: 'We validate key flows with interactive prototypes before writing production code.' },
      { title: 'Implement', detail: 'We build against a shared design system with a documented component library.' },
      { title: 'Optimize', detail: 'We profile and tune for real-world devices, networks, and screen sizes.' },
      { title: 'Release', detail: 'We handle deployment, monitoring, app store submission, and rollout strategy.' },
    ],
    faq: [
      { q: 'Do you build both iOS and Android apps?', a: 'Yes. We use React Native to build cross-platform mobile apps that run natively on both iOS and Android from a single codebase.' },
      { q: 'How do you handle design if we don\'t have a designer?', a: 'We have UI/UX designers on the team. We can take a product from wireframes through high-fidelity design to a coded design system.' },
      { q: 'What is your approach to performance?', a: 'We set explicit performance budgets at the start and measure against them throughout. Core Web Vitals, time to interactive, and bundle size are tracked on every build.' },
    ],
  },
  {
    slug: 'crm-erp',
    title: 'CRM & ERP',
    short: 'Unified operations, not scattered spreadsheets.',
    summary:
      'Customer relationship and enterprise resource systems that connect sales, operations, and finance into one source of truth.',
    body: [
      'Growing businesses often reach a point where data lives in too many places: a CRM that doesn\'t talk to the billing system, a warehouse tool that doesn\'t feed into finance, manual exports gluing everything together. The result is slow decisions and avoidable errors.',
      'We design and implement CRM and ERP systems that fit how your organization actually works — not the other way around. That means auditing your existing tools and workflows, modelling a unified data layer, and connecting the systems your teams already rely on.',
      'Where custom software is the right answer, we build it. Where a well-configured off-the-shelf platform fits better, we implement and integrate it. The goal is always a system your team trusts and can actually use.',
    ],
    icon: Database,
    capabilities: [
      'CRM & ERP architecture',
      'Workflow automation',
      'Reporting & dashboards',
      'Third-party integrations',
      'Data migration & cleansing',
      'Role-based access control',
      'Business process modelling',
      'Legacy data consolidation',
    ],
    outcomes: [
      'One system instead of five disconnected tools',
      'Automated workflows that reduce manual entry by significant margins',
      'Real-time reporting leadership can trust',
      'Clean, migrated historical data accessible in one place',
    ],
    useCases: [
      'Sales pipeline and customer lifecycle management',
      'Inventory, procurement, and supplier management',
      'Finance consolidation and automated reporting',
      'Field operations and service management systems',
      'HR and workforce management platforms',
    ],
    technologies: ['PostgreSQL', 'Node.js', 'React', 'REST APIs', 'Zapier/n8n', 'Salesforce', 'Odoo', 'HubSpot'],
    process: [
      { title: 'Audit', detail: 'We inventory existing tools, data flows, and pain points across your teams.' },
      { title: 'Model', detail: 'We design a unified data model and process map with stakeholder input.' },
      { title: 'Connect', detail: 'We integrate the systems you rely on and automate the workflows in between.' },
      { title: 'Roll out', detail: 'We migrate data and train teams in phases, with a rollback plan at every stage.' },
    ],
    faq: [
      { q: 'Should we build a custom CRM or implement an off-the-shelf solution?', a: 'It depends on your processes, team size, and budget. We help you make that decision honestly before recommending any solution.' },
      { q: 'How do you handle data migration from legacy systems?', a: 'We build migration pipelines with validation at every stage. Historical data is cleaned, mapped, and verified before any live cutover.' },
      { q: 'Can you integrate with our existing tools?', a: 'Yes. We have experience integrating with most common business tools via APIs, webhooks, and platform-native connectors.' },
    ],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    short: 'Infrastructure that scales without surprises.',
    summary:
      'Cloud architecture, CI/CD pipelines, and observability so your team ships confidently and recovers fast when things break.',
    body: [
      'Most engineering teams reach a point where deployment becomes a source of anxiety rather than confidence. Manual steps, inconsistent environments, and missing observability mean that shipping feels risky and incidents take too long to diagnose.',
      'We design cloud infrastructure and deployment systems that treat your environments as code — reproducible, reviewable, and recoverable. That means CI/CD pipelines that validate every change, infrastructure provisioned from version-controlled templates, and dashboards that make the state of your systems obvious.',
      'We work with AWS, Google Cloud, and Azure, and bring experience with Kubernetes, Terraform, and modern observability tooling. Our goal is infrastructure your team understands and can operate without depending on a single person.',
    ],
    icon: Cloud,
    capabilities: [
      'Cloud architecture (AWS, GCP, Azure)',
      'CI/CD pipeline design & implementation',
      'Infrastructure as code (Terraform, Pulumi)',
      'Containerization & orchestration (Docker, Kubernetes)',
      'Observability & alerting (metrics, logs, traces)',
      'Cost optimization & rightsizing',
      'Security & compliance configuration',
      'Disaster recovery & backup strategy',
    ],
    outcomes: [
      'Reproducible environments provisioned from code',
      'Deployments that take minutes, not hours',
      'Clear dashboards and on-call runbooks',
      'Measurable improvements in infrastructure cost',
    ],
    useCases: [
      'Cloud migration from on-premise or legacy hosting',
      'CI/CD implementation for teams shipping manually',
      'Kubernetes platform design and adoption',
      'Observability stack for production systems',
      'Infrastructure cost audit and optimization',
    ],
    technologies: ['AWS', 'GCP', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Datadog', 'Grafana'],
    process: [
      { title: 'Assess', detail: 'We review your current infrastructure, deployment cadence, and incident patterns.' },
      { title: 'Automate', detail: 'We codify infrastructure and build CI/CD pipelines with automated testing gates.' },
      { title: 'Observe', detail: 'We instrument metrics, structured logs, and distributed traces across your systems.' },
      { title: 'Optimize', detail: 'We tune for cost, latency, reliability, and on-call experience.' },
    ],
    faq: [
      { q: 'Which cloud providers do you work with?', a: 'We work with AWS, Google Cloud, and Azure. We recommend the right provider based on your existing tools, team familiarity, and workload characteristics.' },
      { q: 'Do you provide on-call support after setting up the infrastructure?', a: 'We can design handoff documentation and runbooks so your team handles on-call, or we can provide an ongoing infrastructure support retainer.' },
      { q: 'What does "infrastructure as code" mean in practice?', a: 'It means your cloud environment is defined in version-controlled configuration files — the same workflow as application code. Changes are reviewed, tested, and rolled back if needed.' },
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    short: 'Interfaces that feel inevitable in hindsight.',
    summary:
      'Research-driven product design — from information architecture and flows to high-fidelity interfaces and a living design system.',
    body: [
      'Good software design is invisible. When interfaces feel obvious and interactions feel natural, users accomplish what they came to do without thinking about the tool itself. That clarity is the result of deliberate research, structured process, and careful iteration — not decoration.',
      'We start with the user and the business problem. Research, interviews, and workflow analysis come before wireframes. We validate assumptions with prototypes before investing in engineering. The design system we deliver is documented, component-based, and usable by engineers without design support for every decision.',
      'We design for accessibility from the start, not as a retrofit. Color contrast, keyboard navigation, screen reader support, and touch targets are part of every design review, not an afterthought.',
    ],
    icon: PenTool,
    capabilities: [
      'User research & stakeholder interviews',
      'Information architecture & user flows',
      'Interaction & visual design',
      'Design systems (Figma + coded)',
      'Prototyping & usability testing',
      'Accessibility (WCAG 2.2 AA)',
      'Design audit & redesign',
      'Brand identity & visual language',
    ],
    outcomes: [
      'A documented design system your team can reuse',
      'Flows validated with real users before build starts',
      'Interfaces that meet WCAG 2.2 accessibility standards',
      'Reduced engineering time through clear specifications',
    ],
    useCases: [
      'Product redesigns for improving conversion and retention',
      'New product design from research to high-fidelity',
      'Design systems for engineering teams',
      'Accessibility audits and remediation',
      'User research and usability testing programs',
    ],
    technologies: ['Figma', 'FigJam', 'Framer', 'Storybook', 'React', 'Tailwind CSS', 'Radix UI', 'ARIA'],
    process: [
      { title: 'Research', detail: 'We interview users, map existing workflows, and identify the real friction points.' },
      { title: 'Structure', detail: 'We define information architecture and prioritize the key user flows.' },
      { title: 'Design', detail: 'We produce high-fidelity UI, interaction specifications, and a coded component library.' },
      { title: 'Validate', detail: 'We test with representative users and iterate before engineering handoff.' },
    ],
    faq: [
      { q: 'Do you work with existing brand guidelines?', a: 'Yes. We work within existing brand constraints or help establish a new visual language if you\'re starting fresh.' },
      { q: 'Will engineers be able to implement the designs accurately?', a: 'We deliver developer-ready Figma files with spacing, typography, states, and responsive breakpoints fully specified, plus a coded design system where needed.' },
      { q: 'Can you design and build, or just design?', a: 'We can do both. Many of our engagements cover design through to engineering implementation, which means the design system is implemented in code, not just documented in Figma.' },
    ],
  },
  {
    slug: 'qa-automation',
    title: 'QA & Automation',
    short: 'Catch regressions before your users do.',
    summary:
      'Test automation strategy, frameworks, and CI integration so quality is built in — not bolted on at the end.',
    body: [
      'Quality engineering is not a phase that happens at the end of a project. It is a practice built into every stage of development — from the first code review to the monitoring dashboard running in production. Teams that treat testing as an afterthought ship more slowly and with less confidence, not more quickly.',
      'We help engineering teams build sustainable test automation. That means selecting tools appropriate to the codebase, writing tests that are fast and maintainable (not brittle and slow), integrating them into CI so every pull request gets verified, and surfacing quality metrics that actually help decisions.',
      'We also conduct targeted test coverage work for teams that have built up significant technical debt in their test suite — identifying the highest-risk gaps and filling them systematically.',
    ],
    icon: ShieldCheck,
    capabilities: [
      'Test strategy & planning',
      'End-to-end test automation (Playwright, Cypress)',
      'API & unit test frameworks',
      'Performance & load testing (k6, Locust)',
      'Visual regression testing',
      'CI test orchestration & parallelization',
      'Test coverage analysis & reporting',
      'Accessibility automated checks',
    ],
    outcomes: [
      'Automated test coverage for critical user paths',
      'Faster, safer releases with measurably fewer rollbacks',
      'Clear visibility into quality metrics per release',
      'Test suite that runs in minutes, not hours',
    ],
    useCases: [
      'Establishing test automation for teams shipping manually',
      'Inherited codebase with poor or absent test coverage',
      'Performance testing before major traffic events',
      'Continuous quality monitoring for high-stakes applications',
      'Accessibility compliance testing and remediation',
    ],
    technologies: ['Playwright', 'Cypress', 'Vitest', 'Jest', 'k6', 'GitHub Actions', 'Allure', 'Percy'],
    process: [
      { title: 'Triage', detail: 'We identify high-risk areas, existing test gaps, and the fastest wins.' },
      { title: 'Framework', detail: 'We set up a maintainable test automation framework appropriate to your stack.' },
      { title: 'Cover', detail: 'We write tests for critical user journeys and the areas most likely to regress.' },
      { title: 'Integrate', detail: 'We wire tests into CI with reporting, failure notifications, and coverage tracking.' },
    ],
    faq: [
      { q: 'How do you decide which tests to write first?', a: 'We prioritize by risk: user-facing flows that would cause the most damage if broken, areas that have historically regressed, and the paths most users follow.' },
      { q: 'Can you help with a test suite that already exists but is slow or brittle?', a: 'Yes. Refactoring existing test suites is a significant part of what we do — identifying flaky tests, removing redundancy, and restructuring for speed and maintainability.' },
      { q: 'Do you recommend specific tools, or work with what we have?', a: 'Both. We bring tool recommendations based on your stack and team, but we can also work within your existing framework if it is appropriate.' },
    ],
  },
];

export type IndustryMeta = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  body: string[];
  icon: LucideIcon;
  challenges: string[];
  solutions: string[];
  capabilities: string[];
  relevantServices: string[];
};

export const industries: IndustryMeta[] = [
  {
    slug: 'fintech',
    title: 'Fintech',
    short: 'Compliant, transaction-grade systems.',
    summary:
      'We build payment, lending, and wealth platforms where security, auditability, and regulatory compliance are non-negotiable.',
    body: [
      'Financial software operates at the intersection of technical complexity and regulatory expectation. A payment processing error, a compliance gap, or a data breach carries consequences that extend well beyond a bad user experience.',
      'We work with fintech companies to build systems that handle financial data with the care it demands. That means encrypted transaction pipelines, full audit trails, role-based access with granular permission models, and infrastructure designed for the throughput and reliability financial products require.',
      'We do not claim specific regulatory certifications. We do bring engineering practices — defense in depth, audit logging, separation of duties, and third-party security review — that support the compliance posture your legal and compliance teams are responsible for.',
    ],
    icon: Banknote,
    challenges: [
      'Regulatory compliance across multiple jurisdictions',
      'Handling sensitive financial data securely at scale',
      'High-throughput transaction processing with consistency',
      'Audit trails that satisfy legal and regulatory requirements',
      'Fraud detection and risk scoring integration',
    ],
    solutions: [
      'Encrypted, audit-logged transaction pipelines',
      'Role-based access with full traceability and event logs',
      'Reconciliation and reporting automation',
      'Payment gateway and banking API integrations',
      'Infrastructure designed for financial data residency requirements',
    ],
    capabilities: [
      'Payment processing integration (Stripe, Razorpay, PayU)',
      'Lending platform architecture and loan lifecycle management',
      'Wealth and portfolio management systems',
      'KYC/AML workflow integration',
      'Financial reporting and reconciliation pipelines',
      'Multi-currency and multi-jurisdiction support',
    ],
    relevantServices: ['custom-software-development', 'cloud-devops', 'qa-automation'],
  },
  {
    slug: 'ecommerce',
    title: 'Ecommerce',
    short: 'Stores that convert and scale on big days.',
    summary:
      'Headless commerce, fast checkout, and inventory systems that hold up under holiday traffic without sacrificing UX.',
    body: [
      'Ecommerce success depends on two things that are easy to get wrong at the same time: a storefront that converts well under normal conditions, and infrastructure that does not collapse when traffic spikes during a sale event.',
      'We build ecommerce systems from a performance-first perspective. Headless architectures that decouple the frontend from the platform so you can optimize the customer experience independently. Caching and queue strategies that absorb traffic spikes. Checkout flows that minimize friction without sacrificing security.',
      'We also understand that ecommerce is an operational challenge as much as a technical one. Inventory synchronization, order management, warehouse integration, and returns processing are all part of what makes an ecommerce business run.',
    ],
    icon: ShoppingBag,
    challenges: [
      'Cart abandonment from slow or confusing checkout flows',
      'Traffic spikes during flash sales and promotional events',
      'Inventory synchronization across multiple channels',
      'Product catalogue management at scale',
      'Payment and fraud handling across markets',
    ],
    solutions: [
      'Headless storefronts with sub-second page interactions',
      'Caching, CDN, and queue strategies for traffic spikes',
      'Unified inventory and order management systems',
      'Multi-channel selling and marketplace integrations',
      'Configurable promotions, discount, and loyalty engines',
    ],
    capabilities: [
      'Headless commerce with Shopify, Medusa, or custom backends',
      'Custom checkout and payment flow design',
      'Product catalogue and search optimization',
      'Warehouse and 3PL integration',
      'Returns and refunds management systems',
      'Analytics and conversion optimization tooling',
    ],
    relevantServices: ['web-mobile-development', 'custom-software-development', 'ui-ux-design'],
  },
  {
    slug: 'saas',
    title: 'SaaS',
    short: 'Multi-tenant products built to last.',
    summary:
      'From pricing and onboarding to multi-tenancy and billing, we help SaaS teams ship features that retain customers.',
    body: [
      'Building a SaaS product involves a specific set of technical and product challenges that are not well-served by general-purpose engineering approaches. Multi-tenant data isolation, subscription billing, usage metering, feature flags, and onboarding flows all have patterns that work — and common mistakes that are expensive to fix later.',
      'We work with early-stage and growth-stage SaaS companies to get the foundations right. That means a multi-tenancy architecture that scales without leaking data across accounts, billing integrations that handle plan changes and edge cases gracefully, and onboarding flows that reduce time-to-value for new users.',
      'We also help SaaS teams that have grown quickly and are now dealing with the architectural debt that comes from moving fast. Incrementally modernizing a working product without breaking it for existing customers requires a different approach than greenfield development.',
    ],
    icon: Layers,
    challenges: [
      'Multi-tenant data isolation and security',
      'Usage-based billing and complex pricing models',
      'Reducing time-to-value for new customers',
      'Feature development velocity as the codebase grows',
      'Horizontal scaling as customer count increases',
    ],
    solutions: [
      'Secure multi-tenant architecture with robust data isolation',
      'Metered billing integrations (Stripe Billing, Chargebee)',
      'Guided onboarding flows that drive activation and retention',
      'Feature flag systems for safe, graduated rollouts',
      'Analytics and event tracking for product-led growth',
    ],
    capabilities: [
      'SaaS architecture design and technical foundation',
      'Multi-tenancy models (schema-per-tenant, row-level security)',
      'Subscription and usage billing integration',
      'Customer onboarding and activation flows',
      'Product analytics and user behaviour tracking',
      'Admin panels and operational tooling',
    ],
    relevantServices: ['custom-software-development', 'web-mobile-development', 'cloud-devops'],
  },
  {
    slug: 'enterprise',
    title: 'Enterprise',
    short: 'Systems that fit your organization.',
    summary:
      'We modernize legacy systems, integrate siloed data, and build internal platforms that make large organizations move faster.',
    body: [
      'Enterprise software challenges are different from startup challenges. The problem is rarely "build from scratch" — it is "make this existing system better without breaking what depends on it." Legacy modernization, data integration across departments, and internal tooling that reduces operational burden are the most common engagements we take on.',
      'We understand that large organizations move carefully. Governance, change management, and stakeholder alignment are as important as the technical quality of the work. We design our engagement model to fit within those constraints, with clear documentation, incremental delivery, and rollback plans at every stage.',
      'We also do technical advisory work: architecture reviews for systems under stress, due diligence on technology decisions, and mentoring for internal engineering teams building new capabilities.',
    ],
    icon: Building2,
    challenges: [
      'Siloed data across departments with no unified view',
      'Legacy systems that are critical but resistant to change',
      'Governance and access control at organizational scale',
      'Change management for technology initiatives',
      'Vendor dependency and integration complexity',
    ],
    solutions: [
      'Unified data layers and internal API platforms',
      'Incremental legacy modernization with strangler fig patterns',
      'Governance frameworks with fine-grained access control',
      'Integration middleware connecting existing enterprise tools',
      'Internal developer platforms and engineering efficiency tooling',
    ],
    capabilities: [
      'Enterprise architecture assessment and roadmapping',
      'Legacy system modernization and migration',
      'ERP and CRM integration engineering',
      'Internal tooling and developer platforms',
      'Data integration and enterprise data warehousing',
      'Technical due diligence and advisory',
    ],
    relevantServices: ['crm-erp', 'custom-software-development', 'cloud-devops'],
  },
  {
    slug: 'fitness-wellness',
    title: 'Fitness & Wellness',
    short: 'Engaging products for healthy habits.',
    summary:
      'Member platforms, booking systems, and habit-tracking apps that keep users engaged between visits.',
    body: [
      'Fitness and wellness products face a specific engagement challenge: the gap between a customer joining and a customer building a lasting habit is where most businesses lose people. Software that supports that journey — reminders, progress tracking, milestone recognition, and frictionless booking — makes a real difference to retention.',
      'We build membership management systems, class scheduling platforms, and mobile apps for gyms, studios, and wellness businesses. These products need to be operationally reliable (a broken booking system on a Monday morning is a serious problem), visually polished (users judge the product by how it feels), and analytically useful (operators need to see which classes perform and which members are at risk of churning).',
      'We also have experience with wearable device integration, health data APIs, and the data privacy considerations that come with collecting sensitive health and wellness information.',
    ],
    icon: HeartPulse,
    challenges: [
      'Keeping users engaged and building lasting habits',
      'Booking and scheduling complexity across multiple locations',
      'Member lifecycle management from trial to renewal',
      'Wearable and health data integration',
      'Multi-location operations and reporting',
    ],
    solutions: [
      'Gamified engagement systems with streaks, milestones, and rewards',
      'Flexible booking and scheduling engines with waitlist management',
      'Member portal with progress tracking and history',
      'Wearable integration and health data synchronization',
      'Operator dashboards for multi-location management',
    ],
    capabilities: [
      'Membership management and billing systems',
      'Class and session booking with capacity management',
      'Mobile applications for member engagement',
      'Wearable device and health API integration',
      'Multi-location administration and reporting',
      'Push notifications and re-engagement automation',
    ],
    relevantServices: ['web-mobile-development', 'custom-software-development', 'ui-ux-design'],
  },
];

export const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Work', to: '/portfolio' },
  { label: 'Careers', to: '/careers' },
];

export type PortfolioProject = {
  title: string;
  category: string;
  serviceSlug: string;
  industrySlug?: string;
  description: string;
  outcome: string;
  tags: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'Internal Operations Platform',
    category: 'Custom Software',
    serviceSlug: 'custom-software-development',
    description: 'A unified internal platform replacing scattered spreadsheets and manual workflows for a mid-sized operations team. Integrated with existing ERP data and provided role-based views for operations, finance, and management.',
    outcome: 'Reduced manual reporting effort by replacing five disconnected tools with one auditable system.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Role-based access'],
  },
  {
    title: 'Cross-Platform Mobile Application',
    category: 'Web & Mobile',
    serviceSlug: 'web-mobile-development',
    description: 'A customer-facing mobile app with offline-first data sync, push notifications, and full app store deployment on iOS and Android. Built with React Native from a shared codebase.',
    outcome: 'Shipped simultaneously on iOS and Android with offline capability that maintained usability in low-connectivity environments.',
    tags: ['React Native', 'Expo', 'Offline sync', 'Push notifications'],
  },
  {
    title: 'Unified CRM & Reporting System',
    category: 'CRM & ERP',
    serviceSlug: 'crm-erp',
    description: 'Consolidated sales pipeline, operations, and finance data into one integrated system with automated reporting dashboards. Replaced email-and-spreadsheet workflows with structured, auditable processes.',
    outcome: 'Leadership gained real-time visibility across sales and operations with automated weekly reporting replacing manual compilation.',
    tags: ['CRM integration', 'Workflow automation', 'Reporting dashboards'],
  },
  {
    title: 'Cloud Migration & CI/CD Pipeline',
    category: 'Cloud & DevOps',
    serviceSlug: 'cloud-devops',
    description: 'Migrated a legacy deployment to infrastructure-as-code with automated pipelines, containerized workloads, and an observability stack covering metrics, logs, and distributed traces.',
    outcome: 'Deployment time reduced from manual multi-hour processes to automated pipelines measured in minutes.',
    tags: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'Design System & Product Redesign',
    category: 'UI/UX Design',
    serviceSlug: 'ui-ux-design',
    description: 'A comprehensive design system and full product redesign, validated with usability testing before engineering build. Delivered as a coded component library alongside Figma documentation.',
    outcome: 'Design system adopted by the engineering team within two sprints, eliminating per-feature design requests.',
    tags: ['Design system', 'User research', 'WCAG 2.2', 'Figma', 'React'],
  },
  {
    title: 'Automated Test Framework',
    category: 'QA & Automation',
    serviceSlug: 'qa-automation',
    description: 'End-to-end and API test automation wired into CI, covering critical user journeys across a complex multi-tenant web application. Included performance testing and visual regression checks.',
    outcome: 'Critical regression incidents significantly reduced following automated coverage on deployment-blocking paths.',
    tags: ['Playwright', 'API testing', 'CI integration', 'k6'],
  },
];

export const process = [
  {
    n: '01',
    title: 'Discover',
    detail: 'We sit with your team to map the problem, constraints, users, and what success looks like in concrete terms.',
  },
  {
    n: '02',
    title: 'Define',
    detail: 'We establish scope, priorities, architecture, milestones, and the criteria by which we\'ll know the project has succeeded.',
  },
  {
    n: '03',
    title: 'Design',
    detail: 'We create user flows, technical specifications, and interface designs — validating risky assumptions before committing to engineering.',
  },
  {
    n: '04',
    title: 'Build',
    detail: 'We develop, test, and integrate in small, reviewable increments. You see progress every week and can change direction without a crisis.',
  },
  {
    n: '05',
    title: 'Launch & Improve',
    detail: 'We deploy, monitor, and stay available. The engagement does not end at launch — it evolves as your business needs change.',
  },
];

export const techStack = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Go', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Expo', 'iOS', 'Android'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'Cloud',
    items: ['AWS', 'Google Cloud', 'Azure', 'Vercel', 'Railway'],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Datadog'],
  },
  {
    category: 'Quality',
    items: ['Playwright', 'Cypress', 'Vitest', 'k6'],
  },
];

export const companyInfo = {
  name: 'Coding House',
  tagline: 'Software engineered for the business you\'re building.',
  description: 'Coding House is a software development and IT services company based in Surat, Gujarat, India. We design, build, and maintain custom software that helps businesses operate smarter, scale confidently, and solve their most complex technical challenges.',
  email: 'support@codinghouse.in',
  careersEmail: 'careers@codinghouse.in',
  phone: '+91 97236 78848',
  whatsapp: '919723678848',
  address: {
    line1: '410 Exiito Commercial Hub',
    line2: 'Jahangirpura',
    city: 'Surat',
    state: 'Gujarat',
    pincode: '395005',
    country: 'IN',
    full: '410 Exiito Commercial Hub, Jahangirpura, Surat, Gujarat 395005, IN',
  },
  location: 'Surat, Gujarat, India',
  social: {
    linkedin: 'https://linkedin.com/company/codinghouse',
    github: 'https://github.com/codinghouse',
    twitter: 'https://twitter.com/codinghouse_in',
  },
};

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
