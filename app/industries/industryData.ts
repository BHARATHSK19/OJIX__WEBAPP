/**
 * Industry-specific content for /industries/[slug] pages.
 *
 * Two sections are powered by this file:
 *   1. OPERATING CAPABILITIES — what technology looks like inside the industry
 *   2. DISCIPLINES APPLIED       — how OJIX services map to the industry
 *
 * To add a new industry, append an entry to `industryData` and add its
 * slug to `industries` in lib/content.ts.
 */

export interface OperatingCapability {
  title: string;
  desc: string;
}

export interface DisciplineItem {
  kicker: string;
  title: string;
  intro: string;
  features: string[];
}

export interface EngineeringChallenge {
  title: string;
  desc: string;
  solution: string;
  icon: string;
}

export interface CommerceCapability {
  title: string;
  desc: string;
  icon: string;
}

export interface IndustryPageContent {
  slug: string;
  operatingCapabilities: {
    kicker: string;
    title: string;
    intro: string;
    items: OperatingCapability[];
  };
  disciplinesApplied: {
    kicker: string;
    title: string;
    intro: string;
    items: DisciplineItem[];
  };
  engineeringChallenges?: {
    kicker: string;
    title: string;
    intro: string;
    items: EngineeringChallenge[];
  };
  commerceCapabilities?: {
    kicker: string;
    title: string;
    intro: string;
    items: CommerceCapability[];
  };
}

export const industryData: Record<string, IndustryPageContent> = {
saas: {
  slug: "saas",

  operatingCapabilities: {
    kicker: "SAAS · PRODUCT INFRASTRUCTURE",
    title: "Technology that fits your operating reality.",
    intro:
      "Secure multi-tenant platforms, dependable subscription workflows, and scalable infrastructure engineered for SaaS products that need to grow without compromising reliability.",

    items: [
      {
        title: "Multi-Tenant Architecture & Data Isolation",
        desc: "Secure customer workspaces, tenant-aware permissions, isolated business data, and consistent performance across shared SaaS environments as your customer base expands.",
      },
      {
        title: "Subscription Intelligence & Revenue Operations",
        desc: "Flexible subscription plans, recurring billing, invoice management, payment recovery, usage-based pricing, and synchronized account entitlements for predictable revenue operations.",
      },
      {
        title: "Identity, Access & Usage Governance",
        desc: "Secure authentication, enterprise SSO, role-based permissions, organization management, feature entitlements, and usage controls aligned with customer plans and business policies.",
      },
      {
        title: "Scalable APIs & Workflow Automation",
        desc: "Reliable APIs, background processing, third-party integrations, automated business workflows, and resilient data exchange designed to support growing workloads and connected systems.",
      },
      {
        title: "Product Intelligence & Customer Retention",
        desc: "Customer onboarding analytics, feature adoption insights, usage reporting, churn indicators, and actionable product intelligence that help teams improve engagement and retention.",
      },
      {
        title: "Cloud Reliability & Platform Security",
        desc: "Production-ready infrastructure, continuous monitoring, secure deployments, backup and recovery planning, performance optimization, and operational visibility designed for dependable SaaS delivery.",
      },
    ],
  },

  disciplinesApplied: {
    kicker: "DISCIPLINES APPLIED",
    title: "How we engineer SaaS solutions.",
    intro:
      "From product architecture to production operations, we build secure, maintainable SaaS platforms that streamline business workflows, support customer growth, and evolve with your product roadmap.",

    items: [
      {
        kicker: "CUSTOM SAAS PLATFORMS",
        title: "Product Engineering",
        intro:
          "Purpose-built SaaS applications, organization dashboards, and customer portals designed around your business model and user workflows.",

        features: [
          "Product discovery and solution architecture",
          "Custom SaaS applications and dashboards",
          "Multi-tenant workspaces and organization management",
          "Subscription plans and feature entitlements",
          "Responsive interfaces and accessibility",
          "Source-code ownership and technical handover",
        ],
      },

      {
        kicker: "INTELLIGENT PRODUCT EXPERIENCES",
        title: "AI & Automation",
        intro:
          "Practical AI capabilities and workflow automation that reduce manual effort, improve customer support, and help teams make better product decisions.",

        features: [
          "AI-powered assistants and knowledge search",
          "Private document search and information retrieval",
          "Automated onboarding and customer support",
          "Document processing and data extraction",
          "Intelligent task routing and workflow automation",
          "AI evaluation, access controls, and auditability",
        ],
      },

      {
        kicker: "BILLING, APIS & ECOSYSTEMS",
        title: "Integrations & Data",
        intro:
          "Connected product ecosystems that keep payments, customer records, external services, and internal workflows operating consistently.",

        features: [
          "Payment gateway and subscription integrations",
          "CRM, ERP, and third-party API connectivity",
          "Webhook processing and delivery monitoring",
          "Reliable background jobs and retry workflows",
          "Real-time notifications and data synchronization",
          "API documentation, versioning, and access controls",
        ],
      },

      {
        kicker: "PRODUCTION-READY INFRASTRUCTURE",
        title: "Cloud & DevOps",
        intro:
          "Resilient deployment environments and operational practices that help SaaS products remain available, observable, secure, and cost-efficient as demand grows.",

        features: [
          "Cloud architecture and infrastructure migration",
          "Automated builds, testing, and deployments",
          "Scalable compute and workload management",
          "Centralized logging, metrics, and alerting",
          "Security hardening, backups, and disaster recovery",
          "Performance optimization and cloud cost management",
        ],
      },
    ],
  },


  engineeringChallenges: {
    kicker: "ENGINEERED FOR SAAS GROWTH",
    title:"Priority challenges that can slow a growing SaaS product.",
    intro:
      "As a SaaS product scales, reliability, tenant boundaries, billing accuracy, and smooth integrations become essential to customer trust. We build platforms designed to address these operational challenges as your business grows.",
    items: [
      {
        title: "Traffic Spikes & Slow Application Response",
        desc: "Sudden demand, expensive queries, and resource contention can slow dashboards and APIs, interrupt workflows, and frustrate customers.",
        solution: "We engineer responsive SaaS experiences and scalable application foundations designed to handle changing workloads while keeping critical workflows accessible.",
        icon: "Gauge",
      },
      {
        title: "Tenant Data Isolation & Access Risks",
        desc: "Weak tenant boundaries, inconsistent permissions, and poorly scoped queries can expose information across customer accounts or grant excessive access.",
        solution: "We design clear tenant boundaries and controlled access experiences that help protect customer data and make permissions easier to govern.",
        icon: "ShieldCheck",
      },
      {
        title: "Subscription, Billing & Entitlement Errors",
        desc: "Failed payments, duplicate events, incorrect plan changes, and delayed status updates can cause billing disputes or give users the wrong product access.",
        solution: "We build dependable subscription workflows that keep payment status, customer plans, invoices, and product access aligned.",
        icon: "CreditCard",
      },
      {
        title: "Unreliable APIs & Background Jobs",
        desc: "Third-party outages, rate limits, timeouts, and failed jobs can leave integrations incomplete and create inconsistent customer or operational records.",
        solution: "We create resilient integration and task-processing workflows with clear status visibility and controlled failure recovery.",
        icon: "Workflow",
      },
      {
        title: "Limited Product Visibility & Customer Churn",
        desc: "When teams cannot understand onboarding friction, feature adoption, or declining usage, it becomes harder to improve the product and retain customers.",
        solution: "We deliver useful product analytics and customer-journey visibility so teams can identify friction and prioritize meaningful improvements.",
        icon: "ChartNoAxesCombined",
      },
      {
        title: "Deployment Risk & Operational Blind Spots",
        desc: "Poorly observed services, risky releases, and weak recovery plans can turn small defects into extended service interruptions.",
        solution: "We strengthen delivery and operations with monitoring, controlled releases, recovery planning, and clear visibility into platform health.",
        icon: "CloudCog",
      },
    ],
  },
  },

fintech: {
  slug: "fintech",

  operatingCapabilities: {
    kicker: "FINTECH · SECURE TRANSACTIONS",
    title: "Financial technology built on trust and precision.",
    intro:
      "Secure transaction workflows, dependable financial records, and resilient infrastructure engineered for fintech products where accuracy, transparency, and customer trust matter.",

    items: [
      {
        title: "Secure Payments & Transaction Orchestration",
        desc: "Reliable payment workflows, multi-gateway connectivity, transaction status tracking, duplicate-request protection, and failure recovery designed to support consistent digital payment experiences.",
      },
      {
        title: "Financial Ledgers & Reconciliation",
        desc: "Structured financial records, traceable balance movements, transaction history, automated reconciliation, and discrepancy detection that improve financial accuracy and accountability.",
      },
      {
        title: "Fraud Intelligence & Risk Monitoring",
        desc: "Suspicious activity monitoring, transaction risk indicators, anomaly detection, configurable fraud rules, and investigation workflows that help financial teams respond to potential threats.",
      },
      {
        title: "Digital Identity & Financial Access",
        desc: "Secure authentication, customer verification integrations, role-based permissions, account protection, and controlled access workflows designed for sensitive financial operations.",
      },
      {
        title: "Compliance Operations & Financial Reporting",
        desc: "Audit-ready activity records, structured reporting, document management, configurable retention policies, and compliance-support workflows aligned with applicable business and regulatory requirements.",
      },
      {
        title: "Scalable Financial Infrastructure",
        desc: "Resilient APIs, transaction processing pipelines, real-time operational monitoring, secure deployments, and recovery planning designed to support growing transaction volumes and critical financial workflows.",
      },
    ],
  },

  disciplinesApplied: {
    kicker: "DISCIPLINES APPLIED",
    title: "How we engineer fintech solutions.",
    intro:
      "From payment applications and financial intelligence to secure integrations and production operations, we build maintainable financial platforms designed around accuracy, accountability, and operational resilience.",

    items: [
      {
        kicker: "DIGITAL FINANCIAL PRODUCTS",
        title: "Product Engineering",
        intro:
          "Secure financial applications and operational dashboards that simplify payments, account management, lending workflows, and financial reporting.",

        features: [
          "Product discovery and financial workflow analysis",
          "Digital payment and financial management platforms",
          "Customer portals and operations dashboards",
          "Account management and transaction histories",
          "Secure APIs and permission-based workflows",
          "Source-code ownership and technical handover",
        ],
      },

      {
        kicker: "RISK INTELLIGENCE & AUTOMATION",
        title: "AI & Automation",
        intro:
          "Practical intelligence and automated workflows that help financial teams review transactions, identify unusual activity, and reduce repetitive operational work.",

        features: [
          "Transaction anomaly detection",
          "Fraud-risk indicators and review workflows",
          "Financial document extraction and OCR",
          "Automated customer onboarding workflows",
          "Compliance document classification and processing",
          "Human review, audit trails, and model evaluation",
        ],
      },

      {
        kicker: "PAYMENTS & FINANCIAL ECOSYSTEMS",
        title: "Integrations",
        intro:
          "Dependable connections between payment providers, banking services, identity verification platforms, and financial reporting systems.",

        features: [
          "Payment gateway integrations",
          "Banking and financial API connectivity",
          "Transaction event processing and notifications",
          "Webhook validation and duplicate-event protection",
          "Reconciliation and external data synchronization",
          "Integration health monitoring and failure recovery",
        ],
      },

      {
        kicker: "SECURE FINANCIAL OPERATIONS",
        title: "Cloud & DevOps",
        intro:
          "Security-conscious infrastructure and controlled delivery practices that help financial applications remain observable, recoverable, and prepared for growing workloads.",

        features: [
          "Cloud architecture and infrastructure migration",
          "Encryption and secrets management",
          "Automated testing and controlled deployments",
          "Application monitoring and incident alerting",
          "Backup, recovery, and continuity planning",
          "Security reviews and infrastructure cost optimization",
        ],
      },
    ],
  },


  engineeringChallenges: {
    kicker: "ENGINEERED FOR FINANCIAL TRUST",
    title:"Priority challenges that put financial platforms under pressure.",
    intro:
      "Financial products depend on accurate records, secure access, dependable transaction flows, and traceable operations. We build fintech systems around these demands without making blanket claims about regulatory approval or guaranteed outcomes.",
    items: [
      {
        title: "Failed Transactions & Payment Disruptions",
        desc: "Gateway timeouts, duplicate requests, delayed confirmations, and unclear payment status can interrupt transactions and create customer disputes.",
        solution: "We build dependable payment workflows with clear status tracking, resilient processing, and consistent transaction visibility across connected systems.",
        icon: "CreditCard",
      },
      {
        title: "Ledger Inconsistencies & Reconciliation Errors",
        desc: "Differences between transaction records, balances, bank statements, and provider reports can result from delayed updates or incomplete reconciliation.",
        solution: "We create traceable financial recordkeeping and reconciliation workflows that help identify discrepancies and improve accountability.",
        icon: "Scale",
      },
      {
        title: "Fraud Risks & Suspicious Activity",
        desc: "Account takeover, identity misuse, and unusual transaction patterns can lead to losses and damage customer trust.",
        solution: "We develop risk-monitoring capabilities that surface suspicious activity, support timely review, and help teams investigate potential threats.",
        icon: "ShieldAlert",
      },
      {
        title: "Identity Verification & Access Vulnerabilities",
        desc: "Incomplete verification, weak authentication, and excessive permissions can increase impersonation risks and complicate onboarding.",
        solution: "We build secure onboarding and access-management workflows that support verification, controlled financial access, and consistent reviews.",
        icon: "Fingerprint",
      },
      {
        title: "Compliance Complexity & Audit Gaps",
        desc: "Fragmented records, manual reporting, and inconsistent retention can make audits time-consuming and increase operational overhead.",
        solution: "We develop traceable reporting and compliance-support workflows that organize records and make evidence easier to retrieve.",
        icon: "FileCheck",
      },
      {
        title: "Scaling Without Financial Service Disruption",
        desc: "Transaction spikes, database bottlenecks, and external service dependencies can degrade performance or interrupt critical workflows.",
        solution: "We engineer resilient financial platforms with operational visibility and capacity planning to support growing transaction workloads.",
        icon: "ServerCog",
      },
    ],
  },
  },
healthcare: {
    slug: "healthcare",
    operatingCapabilities: {
      kicker: "HEALTHCARE TECH · SECURE CARE",
      title: "Connected technology for better care operations.",
      intro:
        "Secure patient experiences, coordinated clinical workflows, and interoperable health systems engineered to help care teams work with clearer information and less administrative friction.",
      items: [
        {
          title: "Patient Records & Secure Data Access",
          desc: "Patient profiles, care histories, role-aware permissions, and traceable access workflows designed to help protect sensitive health information.",
        },
        {
          title: "Appointments & Care Coordination",
          desc: "Appointment booking, provider scheduling, reminders, waitlist handling, and coordinated workflows that help reduce avoidable administrative delays.",
        },
        {
          title: "Clinical Interoperability & System Connectivity",
          desc: "Integrations between EMR/EHR platforms, laboratories, pharmacies, and clinical services that help authorized teams work from more consistent information.",
        },
        {
          title: "Medical Data Processing & Reporting",
          desc: "Structured clinical information, lab result aggregation, document processing, and configurable reporting that supports day-to-day clinical and administrative work.",
        },
        {
          title: "Patient Engagement & Remote Care",
          desc: "Patient portals, follow-up reminders, telehealth workflows, and care-plan communication that make it easier for patients and providers to stay connected.",
        },
        {
          title: "Healthcare Security & Service Continuity",
          desc: "Access reviews, encryption practices, operational monitoring, backup planning, and recovery workflows designed around the importance of clinical information availability.",
        },
      ],
    },
    disciplinesApplied: {
      kicker: "DISCIPLINES APPLIED",
      title: "How we engineer healthcare solutions.",
      intro:
        "Patient-facing applications, clinical workflow automation, and secure data connections designed to support healthcare organizations and their teams.",
      items: [
        {
          kicker: "DIGITAL CARE EXPERIENCES",
          title: "Product Engineering",
          intro:
            "Patient portals, provider dashboards, and care-management applications shaped around real clinical and administrative workflows.",
          features: [
            "Patient portals and appointment applications",
            "Provider dashboards and clinic management tools",
            "Patient profiles and care-history experiences",
            "Role-aware access and workflow design",
            "Responsive interfaces and accessibility",
            "Source-code ownership and technical handover",
          ],
        },
        {
          kicker: "CLINICAL WORKFLOW INTELLIGENCE",
          title: "AI & Automation",
          intro:
            "Administrative automation and carefully scoped AI assistance for clinical documents, patient communication, and operational information handling.",
          features: [
            "Clinical document classification and extraction",
            "Medical record search and summarization support",
            "Appointment reminders and follow-up workflows",
            "Intake form processing and data capture",
            "Administrative task routing and automation",
            "Human review, audit trails, and AI evaluation",
          ],
        },
        {
          kicker: "CONNECTED HEALTH SYSTEMS",
          title: "Integrations",
          intro:
            "Data exchange between approved clinical systems, laboratories, patient communication tools, and operational platforms.",
          features: [
            "EMR/EHR and clinical system integrations",
            "HL7/FHIR-oriented interoperability planning",
            "Laboratory and diagnostic service connectivity",
            "Validated API and webhook workflows",
            "Appointment, messaging, and payment integrations",
            "Integration monitoring and failure recovery",
          ],
        },
        {
          kicker: "SECURE CLINICAL OPERATIONS",
          title: "Cloud & DevOps",
          intro:
            "Infrastructure and release practices designed to support data protection, operational visibility, and recovery for healthcare applications.",
          features: [
            "Cloud architecture and migration planning",
            "Encryption and secrets management",
            "Environment separation and controlled releases",
            "Monitoring, logging, and incident alerting",
            "Backup, restore testing, and recovery planning",
            "Security reviews and infrastructure cost management",
          ],
        },
      ],
    },
    engineeringChallenges: {
      kicker: "ENGINEERED FOR REAL-WORLD CARE",
      title:"Priority challenges  complicate healthcare delivery.",
      intro:
        "Healthcare teams often work across busy schedules, sensitive records, and systems that were not designed to communicate. We build digital solutions that help make care operations more coordinated, secure, and visible.",
      items: [
        {
          title: "Fragmented Patient Records",
          desc: "Patient information spread across disconnected systems can create duplicate data, incomplete histories, and extra work for clinical teams.",
          solution: "We connect approved systems and shape clearer patient information workflows so authorized teams can access more consistent records.",
          icon: "Files",
        },
        {
          title: "Patient Privacy & Access Control Gaps",
          desc: "Broad permissions, inconsistent identity controls, and limited access visibility can expose sensitive information or make reviews difficult.",
          solution: "We build healthcare applications with controlled access, clearer data boundaries, and traceable activity designed around your governance needs.",
          icon: "ShieldCheck",
        },
        {
          title: "Appointment Delays & Administrative Overload",
          desc: "Manual scheduling, missed reminders, and disconnected provider calendars can lead to avoidable delays and underused appointment capacity.",
          solution: "We streamline booking, reminders, and scheduling workflows to help patients and staff coordinate appointments more efficiently.",
          icon: "CalendarClock",
        },
        {
          title: "Clinical System Integration Barriers",
          desc: "Different data formats and legacy systems can make it difficult to exchange lab results, referrals, and clinical updates reliably.",
          solution: "We create integration pathways that help authorized systems exchange information with clearer validation and status visibility.",
          icon: "Network",
        },
        {
          title: "Manual Documentation & Reporting Burden",
          desc: "Repeated data entry, paper-heavy processes, and fragmented reports consume staff time and increase the chance of administrative errors.",
          solution: "We automate appropriate document and reporting workflows while keeping human review available for sensitive or consequential decisions.",
          icon: "FileText",
        },
        {
          title: "Service Interruptions & Recovery Risks",
          desc: "Unplanned outages, untested backups, and weak operational monitoring can make essential systems difficult to access when teams need them.",
          solution: "We improve platform observability, release discipline, and recovery preparation to support more dependable healthcare operations.",
          icon: "Activity",
        },
      ],
    },
  },

  ecommerce: {
    slug: "ecommerce",
    operatingCapabilities: {
      kicker: "E-COMMERCE · COMMERCE CAPABILITIES",
      title: "More than a storefront. An engineered commerce ecosystem.",
      intro:
        "From product discovery to checkout, fulfillment, and post-purchase service, we build commerce capabilities that improve shopping experiences and help teams operate with confidence.",
      items: [
        {
          title: "AI-Powered Commerce & Product Discovery",
          desc: "Shopping assistants, catalogue-aware search, conversational discovery, and relevant product suggestions that help customers find suitable products faster.",
        },
        {
          title: "Visual Search & Personalized Shopping",
          desc: "Image-led discovery, customer preference signals, and tailored product journeys that make large or complex catalogues easier to explore.",
        },
        {
          title: "Real-Time Orders & Commerce Integrations",
          desc: "Order status visibility, inventory synchronization, payment connectivity, shipping updates, and notifications across connected commerce systems.",
        },
        {
          title: "Demand Intelligence & Pricing Workflows",
          desc: "Sales trends, demand signals, promotion insights, replenishment indicators, and pricing workflows that support better merchandising decisions.",
        },
        {
          title: "Secure Checkout & Customer Trust",
          desc: "Reliable checkout journeys, transaction tracking, customer account protection, order histories, and traceable operational actions.",
        },
        {
          title: "Scalable Storefront & Commerce Operations",
          desc: "Responsive storefronts, efficient catalogue experiences, operational dashboards, performance monitoring, and infrastructure prepared for traffic growth.",
        },
      ],
    },
    disciplinesApplied: {
      kicker: "DISCIPLINES APPLIED",
      title: "How we engineer e-commerce solutions.",
      intro:
        "High-performing shopping experiences, connected fulfillment workflows, and reliable commerce infrastructure designed around conversion, customer trust, and operational clarity.",
      items: [
        {
          kicker: "STOREFRONTS & CUSTOMER JOURNEYS",
          title: "Product Engineering",
          intro:
            "Customer storefronts, seller portals, and commerce operations dashboards focused on clear product discovery and efficient purchasing.",
          features: [
            "Custom storefronts and shopping experiences",
            "Product catalogue and search interfaces",
            "Cart, checkout, and order-management workflows",
            "Customer, seller, and administrator portals",
            "Responsive performance and accessibility",
            "Source-code ownership and technical handover",
          ],
        },
        {
          kicker: "COMMERCE INTELLIGENCE",
          title: "AI & Automation",
          intro:
            "Product discovery assistance, merchandising insights, and automated customer operations tailored to your catalogue and workflows.",
          features: [
            "Catalogue-aware shopping assistants",
            "Personalized product recommendations",
            "Visual product discovery experiences",
            "Demand and sales trend analysis",
            "Customer service and order-status automation",
            "Human review, evaluation, and guardrails",
          ],
        },
        {
          kicker: "PAYMENTS, ORDERS & FULFILLMENT",
          title: "Integrations",
          intro:
            "Connected payment, shipping, inventory, and business systems that keep commerce operations aligned from purchase through delivery.",
          features: [
            "Payment gateway and checkout integrations",
            "Shipping carrier and fulfillment connectivity",
            "Inventory, ERP, and marketplace synchronization",
            "Order events and delivery notifications",
            "Resilient webhooks and retry workflows",
            "Integration monitoring and reconciliation support",
          ],
        },
        {
          kicker: "PEAK-READY COMMERCE INFRASTRUCTURE",
          title: "Cloud & DevOps",
          intro:
            "Deployment, performance, and monitoring practices designed to support promotions, seasonal peaks, and continued storefront growth.",
          features: [
            "Cloud architecture and infrastructure migration",
            "Caching and content delivery planning",
            "Automated testing and release pipelines",
            "Traffic, error, and performance monitoring",
            "Security, backup, and recovery practices",
            "Capacity planning and cloud cost reviews",
          ],
        },
      ],
    },
    engineeringChallenges: {
      kicker: "ENGINEERED FOR REAL-WORLD COMMERCE",
      title:"Priority challenges can make or break an online business.",
      intro:
        "Behind a smooth shopping experience is a system that must handle traffic, protect transactions, maintain accurate stock, and recover when connected services fail. We engineer commerce platforms with these challenges in mind.",
      items: [
        {
          title: "Traffic Spikes & Slow Storefronts",
          desc: "Sales, campaigns, and product launches can overwhelm application resources and slow pages or APIs when customers are ready to buy.",
          solution: "We build performance-focused storefronts and scalable application foundations designed to keep key shopping journeys responsive during demand peaks.",
          icon: "Gauge",
        },
        {
          title: "Checkout Failures & Unclear Payment Status",
          desc: "Payment timeouts, interrupted sessions, and duplicate requests can leave shoppers unsure whether an order or charge was completed.",
          solution: "We engineer clear checkout and transaction workflows that improve payment status visibility and help protect against duplicate operations.",
          icon: "CreditCard",
        },
        {
          title: "Inventory Mismatch & Overselling",
          desc: "Concurrent purchases and delayed stock updates across marketplaces or warehouses can cause orders for items that are no longer available.",
          solution: "We create stock coordination and order validation workflows that help keep availability consistent across connected sales channels.",
          icon: "Warehouse",
        },
        {
          title: "Disconnected Data & Commerce Integrations",
          desc: "Inconsistent product, order, customer, and fulfillment data across separate tools can create delays and manual reconciliation work.",
          solution: "We connect commerce systems through monitored integration workflows that make data exchange more consistent and easier to troubleshoot.",
          icon: "Database",
        },
        {
          title: "Weak Product Discovery & Irrelevant Results",
          desc: "Poor search relevance, hard-to-use filters, and generic recommendations can make it difficult for shoppers to find products.",
          solution: "We improve discovery experiences with catalogue-aware search, useful filtering, and personalization aligned with your product data.",
          icon: "Search",
        },
        {
          title: "Production Incidents & Rising Operating Costs",
          desc: "Releases, third-party failures, background-job issues, and inefficient infrastructure can affect service quality and cost control.",
          solution: "We improve operational visibility, release practices, and performance management to help teams address issues sooner and manage infrastructure deliberately.",
          icon: "CloudCog",
        },
      ],
    },
  },

  edtech: {
    slug: "edtech",
    operatingCapabilities: {
      kicker: "EDTECH · LEARNING TECHNOLOGY",
      title: "Learning experiences built for access, progress, and trust.",
      intro:
        "Scalable learning environments, dependable assessments, and actionable learner insights engineered for institutions and education businesses serving growing student populations.",
      items: [
        {
          title: "Learning Delivery & Course Management",
          desc: "Structured courses, learning paths, progress tracking, content libraries, and instructor-led workflows for different teaching models.",
        },
        {
          title: "Secure Assessments & Exam Integrity",
          desc: "Online tests, identity checks, proctoring workflows, controlled exam sessions, and evidence review tools that support fair assessment processes.",
        },
        {
          title: "Learner Progress & Performance Analytics",
          desc: "Progress dashboards, competency tracking, assessment trends, and engagement indicators that help educators understand learner needs.",
        },
        {
          title: "Video Learning & Digital Content Delivery",
          desc: "Accessible course media, device-aware playback, content organization, and delivery workflows designed for learners across different network conditions.",
        },
        {
          title: "Instructor & Institutional Workflows",
          desc: "Assignment management, grading, class administration, enrolment processes, and integrations with institutional systems.",
        },
        {
          title: "Accessible, Secure Learning Infrastructure",
          desc: "Role-aware access, privacy-conscious learner records, platform monitoring, and capacity planning for busy learning and examination periods.",
        },
      ],
    },
    disciplinesApplied: {
      kicker: "DISCIPLINES APPLIED",
      title: "How we engineer edtech solutions.",
      intro:
        "Custom learning platforms, assessment tools, connected educational workflows, and scalable delivery infrastructure designed around learners and educators.",
      items: [
        {
          kicker: "LEARNING PLATFORMS & CLASSROOMS",
          title: "Product Engineering",
          intro:
            "LMS platforms, student portals, instructor dashboards, and assessment interfaces shaped around course delivery and institutional workflows.",
          features: [
            "Learning management systems and course portals",
            "Student, instructor, and administrator dashboards",
            "Assessment, assignment, and grading workflows",
            "Enrollment and class management experiences",
            "Responsive design and accessibility",
            "Source-code ownership and technical handover",
          ],
        },
        {
          kicker: "LEARNING & ASSESSMENT INTELLIGENCE",
          title: "AI & Automation",
          intro:
            "Carefully scoped AI and automation for content support, learner assistance, assessment operations, and progress insights.",
          features: [
            "Course-content search and learning assistants",
            "Question generation support and content organization",
            "Automated grading assistance with educator review",
            "Proctoring evidence organization and review support",
            "Learner progress and engagement insights",
            "Evaluation, safeguards, and audit trails",
          ],
        },
        {
          kicker: "CONNECTED EDUCATION ECOSYSTEMS",
          title: "Integrations",
          intro:
            "Connected student information, identity, payment, communication, and content systems that reduce duplicated administrative effort.",
          features: [
            "Student information system integrations",
            "Identity and single sign-on connectivity",
            "Course fee and payment integrations",
            "Video, content, and virtual classroom connections",
            "Notifications and dependable background workflows",
            "API documentation and integration monitoring",
          ],
        },
        {
          kicker: "EXAM-READY CLOUD OPERATIONS",
          title: "Cloud & DevOps",
          intro:
            "Release and infrastructure practices designed for examination peaks, media delivery demand, and dependable access to learning resources.",
          features: [
            "Cloud architecture and migration planning",
            "Load and performance testing for peak sessions",
            "Automated testing and controlled releases",
            "Media delivery and caching optimization",
            "Monitoring, backups, and recovery planning",
            "Security and cloud cost management",
          ],
        },
      ],
    },
    engineeringChallenges: {
      kicker: "ENGINEERED FOR BETTER LEARNING",
      title:"Priority challenges disrupt digital education.",
      intro:
        "Education platforms must serve learners at scale, protect assessment integrity, and make progress visible to educators. We build digital learning systems that address common operational and experience gaps.",
      items: [
        {
          title: "Exam-Day Traffic & Platform Slowdowns",
          desc: "Large groups starting exams or live sessions at the same time can strain authentication, assessment delivery, and database resources.",
          solution: "We design learning workflows and infrastructure around expected peak activity, with performance testing and clearer platform monitoring.",
          icon: "Gauge",
        },
        {
          title: "Assessment Integrity & Identity Concerns",
          desc: "Impersonation, unauthorized resources, and suspicious exam activity can undermine confidence in online assessments.",
          solution: "We build assessment and review workflows that support identity checks, configurable monitoring, and evidence-based human review.",
          icon: "ShieldCheck",
        },
        {
          title: "Low Engagement & Limited Progress Visibility",
          desc: "Scattered learning records and delayed feedback can make it hard to spot learners who are struggling or disengaging.",
          solution: "We provide clearer progress dashboards and learning activity insights that help educators identify where support may be needed.",
          icon: "ChartNoAxesCombined",
        },
        {
          title: "Video Delivery & Content Access Problems",
          desc: "Large media files, inconsistent connectivity, and inefficient content delivery can interrupt lessons and frustrate learners.",
          solution: "We optimize learning content experiences and delivery workflows to support smoother access across devices and network conditions.",
          icon: "Video",
        },
        {
          title: "Manual Grading & Administrative Work",
          desc: "Repetitive grading, attendance updates, enrolment tasks, and report preparation consume educator and administrator time.",
          solution: "We automate appropriate administrative tasks and provide educator-controlled tools that reduce repetitive work without removing oversight.",
          icon: "ClipboardCheck",
        },
        {
          title: "Fragmented Student Data & Privacy Risks",
          desc: "Disconnected institutional tools can create conflicting learner records, while weak permissions can expose sensitive education data.",
          solution: "We connect authorized systems and build role-aware access workflows that support consistent records and privacy-conscious operations.",
          icon: "Database",
        },
      ],
    },
  },

  inventory: {
    slug: "inventory",
    operatingCapabilities: {
      kicker: "INVENTORY · STOCK INTELLIGENCE",
      title: "Control every movement. See every stock position.",
      intro:
        "Connected inventory operations, location-level visibility, and traceable stock movement engineered for businesses that need dependable control from procurement to dispatch.",
      items: [
        {
          title: "Live Stock Visibility & Movement History",
          desc: "Current stock positions, stock adjustments, inbound and outbound movements, and traceable item histories across operating locations.",
        },
        {
          title: "Multi-Warehouse & Location Management",
          desc: "Central stock oversight, warehouse transfers, bin and shelf organization, and location-level controls that help teams coordinate distributed inventory.",
        },
        {
          title: "Procurement & Supplier Coordination",
          desc: "Purchase requests, purchase orders, goods-received workflows, supplier records, and replenishment processes that connect buying with stock availability.",
        },
        {
          title: "Barcode, Batch & Item Traceability",
          desc: "Barcode and QR workflows, serial and batch records, expiry tracking, and item-level traceability from receipt through dispatch.",
        },
        {
          title: "Reconciliation & Replenishment Intelligence",
          desc: "Cycle counts, variance tracking, reorder alerts, and stock movement summaries that help teams maintain more reliable records.",
        },
        {
          title: "Inventory Reporting & System Connectivity",
          desc: "Operational dashboards, audit histories, and connections with accounting, ERP, sales, and fulfillment systems for a clearer stock picture.",
        },
      ],
    },
    disciplinesApplied: {
      kicker: "DISCIPLINES APPLIED",
      title: "How we engineer inventory solutions.",
      intro:
        "Warehouse workflows, practical scanning interfaces, and connected inventory data that help teams reduce manual reconciliation and make better stock decisions.",
      items: [
        {
          kicker: "WAREHOUSE & STOCK CONTROL",
          title: "Product Engineering",
          intro:
            "Inventory dashboards, warehouse tools, and mobile scanning experiences shaped around how stock is received, stored, moved, and dispatched.",
          features: [
            "Inventory and warehouse management applications",
            "Stock movement and adjustment workflows",
            "Multi-location transfer and bin management",
            "Barcode and QR scanning interfaces",
            "Role-aware operations dashboards",
            "Source-code ownership and technical handover",
          ],
        },
        {
          kicker: "STOCK INTELLIGENCE & AUTOMATION",
          title: "AI & Automation",
          intro:
            "Forecasting support, exception detection, and automated stock workflows that help teams respond to changing demand and discrepancies.",
          features: [
            "Demand and replenishment trend analysis",
            "Low-stock and unusual movement alerts",
            "Document extraction for purchase records",
            "Automated stock and approval workflows",
            "Expiry and batch monitoring support",
            "Reviewable recommendations and audit trails",
          ],
        },
        {
          kicker: "ERP, PROCUREMENT & SALES SYSTEMS",
          title: "Integrations",
          intro:
            "Connected stock records across purchasing, accounting, sales channels, scanners, and fulfillment tools.",
          features: [
            "ERP and accounting system connectivity",
            "Supplier and purchase-order workflows",
            "Sales channel and order synchronization",
            "Barcode scanner and device integration",
            "Inventory event processing and retries",
            "Data validation and integration monitoring",
          ],
        },
        {
          kicker: "RELIABLE INVENTORY OPERATIONS",
          title: "Cloud & DevOps",
          intro:
            "Deployments and infrastructure that support warehouse teams, reliable data access, and recovery from operational interruptions.",
          features: [
            "Cloud architecture and migration planning",
            "Performance and database optimization",
            "Automated testing and controlled deployments",
            "Operational monitoring and alerts",
            "Backup, restore, and recovery planning",
            "Security and infrastructure cost management",
          ],
        },
      ],
    },
    engineeringChallenges: {
      kicker: "ENGINEERED FOR STOCK ACCURACY",
      title:"Priority challenges which create inventory blind spots.",
      intro:
        "Inventory problems often begin with delayed updates, fragmented records, or manual processes that cannot keep pace with daily operations. We build connected systems that improve visibility and control.",
      items: [
        {
          title: "Inaccurate Stock Counts & Record Mismatches",
          desc: "Manual adjustments, missed scans, and delayed updates can cause system quantities to differ from physical stock.",
          solution: "We design traceable stock movement and reconciliation workflows that make discrepancies easier to identify and investigate.",
          icon: "ClipboardList",
        },
        {
          title: "Multi-Location Stock Synchronization",
          desc: "Warehouses, stores, and sales channels may operate on different records, leading to delayed transfers and uncertain availability.",
          solution: "We connect inventory operations and provide clearer location-level stock visibility across authorized systems.",
          icon: "Warehouse",
        },
        {
          title: "Stockouts, Overstock & Poor Replenishment",
          desc: "Limited demand visibility and inconsistent reorder practices can tie up cash in excess stock or leave essential products unavailable.",
          solution: "We provide stock trend visibility and configurable replenishment workflows to support more informed purchasing decisions.",
          icon: "TrendingUp",
        },
        {
          title: "Barcode Errors & Weak Item Traceability",
          desc: "Incorrect identifiers, incomplete batch records, and missed scans make items harder to track through receiving, storage, and dispatch.",
          solution: "We build scanning and traceability workflows that help teams capture consistent item, batch, and movement information.",
          icon: "ScanBarcode",
        },
        {
          title: "Supplier Delays & Procurement Gaps",
          desc: "Unclear purchase-order status, fragmented supplier communications, and delayed goods receipt can disrupt replenishment plans.",
          solution: "We connect supplier, purchasing, and receipt workflows so teams can track procurement progress with greater clarity.",
          icon: "Truck",
        },
        {
          title: "Reporting Delays & Operational Downtime",
          desc: "Slow reports, unreliable connections, and unavailable systems can prevent staff from making timely stock decisions.",
          solution: "We improve reporting efficiency, operational monitoring, and recovery planning to support dependable inventory access.",
          icon: "ChartNoAxesCombined",
        },
      ],
    },
  },

  logistics: {
    slug: "logistics",
    operatingCapabilities: {
      kicker: "LOGISTICS & FLEET · MOVING SMART",
      title: "Greater visibility across every delivery journey.",
      intro:
        "Connected shipment tracking, dispatch coordination, and operational intelligence engineered for logistics teams that need clearer control from pickup to proof of delivery.",
      items: [
        {
          title: "Shipment Lifecycle & Live Tracking",
          desc: "Shipment status visibility, milestone updates, customer tracking experiences, and delivery records from pickup through completion.",
        },
        {
          title: "Route Planning & Fleet Visibility",
          desc: "Fleet location views, route planning workflows, estimated arrival information, and vehicle utilization insights for day-to-day operations.",
        },
        {
          title: "Driver, Carrier & Warehouse Connectivity",
          desc: "Connected driver applications, warehouse systems, carrier services, and dispatch tools that reduce fragmented operational data.",
        },
        {
          title: "Dispatch Automation & Exception Handling",
          desc: "Load assignment, dispatch workflows, delay alerts, and escalation paths that help teams coordinate changing delivery conditions.",
        },
        {
          title: "Proof of Delivery & Customer Communication",
          desc: "Digital delivery confirmation, supporting photos or signatures where applicable, customer notifications, and issue reporting workflows.",
        },
        {
          title: "Fleet Performance & Operational Analytics",
          desc: "Delivery performance dashboards, route and utilization summaries, service-level reporting, and operational trends for informed decisions.",
        },
      ],
    },
    disciplinesApplied: {
      kicker: "DISCIPLINES APPLIED",
      title: "How we engineer logistics solutions.",
      intro:
        "Fleet applications, real-time operational visibility, and connected delivery workflows that help dispatchers, drivers, partners, and customers work from consistent information.",
      items: [
        {
          kicker: "DISPATCH, DRIVER & CUSTOMER TOOLS",
          title: "Product Engineering",
          intro:
            "Dispatcher dashboards, driver mobile apps, and shipment tracking portals designed around on-road and back-office workflows.",
          features: [
            "Fleet and dispatch management applications",
            "Driver mobile workflows and task lists",
            "Customer shipment tracking portals",
            "Proof-of-delivery capture and exception reporting",
            "Location-aware interfaces and accessibility",
            "Source-code ownership and technical handover",
          ],
        },
        {
          kicker: "ROUTE & OPERATIONS INTELLIGENCE",
          title: "AI & Automation",
          intro:
            "Decision-support capabilities for delivery planning, arrival estimates, exception prioritization, and repetitive logistics workflows.",
          features: [
            "Route and delivery performance analysis",
            "ETA estimation and delay indicators",
            "Automated exception alerts and escalation",
            "Document extraction for shipment records",
            "Dispatch and task orchestration",
            "Operational review and traceable decisions",
          ],
        },
        {
          kicker: "FLEET, CARRIER & WAREHOUSE SYSTEMS",
          title: "Integrations",
          intro:
            "Connected GPS, carrier, warehouse, order, and messaging services that help coordinate logistics activity across organizations.",
          features: [
            "GPS and telematics connectivity",
            "Carrier and shipping API integrations",
            "Warehouse and order management synchronization",
            "Real-time status and location events",
            "Customer notifications and messaging",
            "Integration monitoring and failure recovery",
          ],
        },
        {
          kicker: "ALWAYS-VISIBLE OPERATIONS",
          title: "Cloud & DevOps",
          intro:
            "Operational infrastructure designed for changing workloads, connected devices, and reliable access to shipment status and dispatch tools.",
          features: [
            "Cloud architecture and migration planning",
            "Real-time update and connection management",
            "Automated testing and controlled releases",
            "Monitoring, logging, and incident alerting",
            "Backup and service recovery planning",
            "Performance and cloud cost optimization",
          ],
        },
      ],
    },
    engineeringChallenges: {
      kicker: "ENGINEERED FOR EVERY DELIVERY",
      title:"Priority challenges disrupt logistics operations.",
      intro:
        "When shipment data, driver workflows, and carrier systems are disconnected, teams lose time reacting to exceptions. We build connected logistics platforms that improve visibility and coordination.",
      items: [
        {
          title: "Limited Shipment Visibility",
          desc: "Scattered updates from drivers, carriers, and warehouses make it hard to understand where a shipment is or when it may arrive.",
          solution: "We create connected tracking experiences with clearer milestone updates so teams and customers can follow shipment progress.",
          icon: "MapPin",
        },
        {
          title: "Inefficient Routes & Uncertain ETAs",
          desc: "Static route plans, changing road conditions, and incomplete delivery data can increase travel time and make arrival estimates unreliable.",
          solution: "We build route planning and ETA-support workflows that help dispatch teams make better-informed delivery decisions.",
          icon: "Route",
        },
        {
          title: "Driver & Fleet Coordination Gaps",
          desc: "Manual dispatch, disconnected driver tools, and unclear task ownership can cause duplicated effort and missed delivery steps.",
          solution: "We connect dispatch and driver workflows with clearer assignments, status updates, and exception handling.",
          icon: "Truck",
        },
        {
          title: "Disconnected Carrier & Warehouse Data",
          desc: "Different systems can show conflicting order statuses, incomplete handoff records, and delayed operational updates.",
          solution: "We connect authorized logistics systems and introduce monitored data exchange to improve consistency across delivery stages.",
          icon: "Network",
        },
        {
          title: "Delivery Exceptions & Missing Proof",
          desc: "Failed delivery attempts, incomplete proof-of-delivery records, and delayed escalation can slow resolution and customer communication.",
          solution: "We build digital delivery confirmation and exception workflows that capture key details and route unresolved issues for follow-up.",
          icon: "ClipboardCheck",
        },
        {
          title: "Tracking Outages & Operational Blind Spots",
          desc: "Connection failures, delayed events, and weak monitoring can leave dispatchers without timely information during busy periods.",
          solution: "We strengthen monitoring, update handling, and recovery planning so critical shipment information is easier to access and troubleshoot.",
          icon: "Activity",
        },
      ],
    },
  },

  lawtech: {
    slug: "lawtech",
    operatingCapabilities: {
      kicker: "LAW CHAMBERS · LEGAL TECHNOLOGY",
      title: "Confidential legal work, clearly organized.",
      intro:
        "Matter management, legal document intelligence, and secure client collaboration engineered to help legal teams protect confidentiality and stay in control of deadlines and case information.",
      items: [
        {
          title: "Matter, Case & Client Management",
          desc: "Structured matter intake, client profiles, case milestones, communication histories, and organized workflows from engagement through closure.",
        },
        {
          title: "Legal Document Intelligence & Search",
          desc: "Document indexing, OCR, full-text search, version history, and clause or entity extraction across large collections of legal files.",
        },
        {
          title: "Hearings, Deadlines & Task Control",
          desc: "Court calendars, limitation-date reminders, assigned tasks, status tracking, and escalation workflows that help teams manage important dates.",
        },
        {
          title: "Secure Client Collaboration",
          desc: "Client portals, controlled file sharing, matter-specific access, and organized communication channels for confidential engagement work.",
        },
        {
          title: "Source-Grounded Legal Research Support",
          desc: "Search and summarization experiences that help legal professionals review source materials, discover relevant references, and trace supporting documents.",
        },
        {
          title: "Confidentiality, Audit & Practice Operations",
          desc: "Matter-level permissions, activity records, conflict-check support, document retention workflows, and operational reporting for legal practices.",
        },
      ],
    },
    disciplinesApplied: {
      kicker: "DISCIPLINES APPLIED",
      title: "How we engineer lawtech solutions.",
      intro:
        "Purpose-built legal platforms, document workflows, and secure collaboration tools designed around law firm operations and the sensitive nature of legal information.",
      items: [
        {
          kicker: "MATTER & CLIENT WORKFLOWS",
          title: "Product Engineering",
          intro:
            "Case management dashboards, client portals, and legal operations tools that make matter information easier to organize and access appropriately.",
          features: [
            "Matter, case, and client management systems",
            "Deadline, hearing, and task calendars",
            "Client portals and secure document sharing",
            "Matter-specific permissions and workflows",
            "Responsive interfaces and accessibility",
            "Source-code ownership and technical handover",
          ],
        },
        {
          kicker: "LEGAL DOCUMENT INTELLIGENCE",
          title: "AI & Automation",
          intro:
            "Document processing, internal knowledge search, and source-linked research support designed to assist legal professionals while preserving review and judgment.",
          features: [
            "OCR and legal document extraction",
            "Contract clause and document comparison support",
            "Search across approved legal knowledge sources",
            "Source-referenced summaries and retrieval",
            "Intake, deadline, and task automation",
            "Human review, audit trails, and AI safeguards",
          ],
        },
        {
          kicker: "COURT, DOCUMENT & OFFICE SYSTEMS",
          title: "Integrations",
          intro:
            "Connected calendars, document repositories, client communication tools, and approved external systems that reduce duplicate data entry.",
          features: [
            "Calendar and hearing-date synchronization",
            "Document management system connectivity",
            "Client communication and notification workflows",
            "Billing and practice-management integrations",
            "Secure APIs and controlled data exchange",
            "Integration monitoring and error handling",
          ],
        },
        {
          kicker: "CONFIDENTIAL DIGITAL OPERATIONS",
          title: "Cloud & DevOps",
          intro:
            "Security-conscious infrastructure, controlled releases, and recovery practices that help legal teams manage sensitive records and service continuity.",
          features: [
            "Cloud architecture and migration planning",
            "Encryption and secrets management",
            "Role-aware access and environment controls",
            "Monitoring, logging, and incident response",
            "Backup, restore, and recovery planning",
            "Security reviews and cost optimization",
          ],
        },
      ],
    },
    engineeringChallenges: {
      kicker: "ENGINEERED FOR LEGAL PRECISION",
      title: "Priority challenges that put legal operations at risk.",
      intro:
        "Legal work depends on organized matter records, precise timelines, trusted source material, and strict confidentiality. We build systems that help legal teams reduce operational friction while preserving professional oversight.",
      items: [
        {
          title: "Fragmented Matter & Client Records",
          desc: "Case information scattered across emails, spreadsheets, shared drives, and individual files makes it difficult to find the current matter status.",
          solution: "We create organized matter workspaces and searchable records that give authorized teams a clearer view of case information and activity.",
          icon: "Folders",
        },
        {
          title: "Document Overload & Slow Retrieval",
          desc: "Large document sets, scanned files, inconsistent naming, and multiple versions make relevant clauses and evidence difficult to locate quickly.",
          solution: "We build document organization and retrieval workflows that improve searchability, version visibility, and access to source materials.",
          icon: "FileSearch",
        },
        {
          title: "Missed Hearings, Deadlines & Follow-Ups",
          desc: "Manual calendars and disconnected task lists can make important dates difficult to track across matters, teams, and clients.",
          solution: "We implement connected deadline and task workflows with reminders, ownership, and escalation visibility for important legal milestones.",
          icon: "CalendarClock",
        },
        {
          title: "Confidentiality & Unauthorized Access Risks",
          desc: "Broad sharing permissions, weak matter boundaries, and limited activity records can expose privileged information or complicate investigations.",
          solution: "We design controlled collaboration and access workflows with traceable activity to support confidentiality and internal governance.",
          icon: "ShieldCheck",
        },
        {
          title: "Unverified Research & Unsupported AI Output",
          desc: "Search summaries that lack source context or document references can be difficult to validate and may waste review time.",
          solution: "We build source-grounded research support that links outputs to approved materials and keeps professional verification part of the workflow.",
          icon: "BookOpenCheck",
        },
        {
          title: "Manual Administration & Audit Preparation",
          desc: "Repeated intake tasks, scattered activity records, and inconsistent document handling increase administrative overhead and slow audit preparation.",
          solution: "We streamline appropriate administrative workflows and organize activity records so teams can retrieve the information needed for review.",
          icon: "ClipboardList",
        },
      ],
    },
  },
};
