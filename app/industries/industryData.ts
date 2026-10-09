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
      kicker: "SaaS · PRODUCT INFRASTRUCTURE",
      title: "Technology that fits your operating reality.",
      intro:
        "Multi-tenant reliability, subscription precision, and API-scale infrastructure engineered for SaaS companies that can't afford downtime.",
      items: [
        {
          title: "Multi-Tenant Architecture & Isolation",
          desc: "Secure tenant boundaries, row-level data isolation, and shared-nothing resource allocation so every customer gets predictable performance.",
        },
        {
          title: "Subscription Lifecycle & Billing",
          desc: "Plan management, proration, invoicing, and webhook-driven billing integrations with Stripe or Razorpay for accurate recurring revenue.",
        },
        {
          title: "AuthN, AuthZ & Usage Metering",
          desc: "SSO, role-based access, feature flags, and real-time usage metering that ties product access directly to subscription state.",
        },
        {
          title: "Background Jobs & Scalable Infrastructure",
          desc: "Queue-based task processing, rate-limited webhook delivery, and auto-scaling compute that handles burst traffic without breaking SLAs.",
        },
        {
          title: "Observability & Retention Analytics",
          desc: "Live dashboards for activation, churn signals, and feature adoption — so product and engineering teams make decisions from data.",
        },
      ],
    },
    disciplinesApplied: {
      kicker: "DISCIPLINES APPLIED",
      title: "How we engineer SaaS solutions.",
      intro:
        "Custom platforms built around your product logic, automation that reduces operational overhead, and cloud infrastructure designed for 99.99% availability.",
      items: [
        {
          kicker: "CUSTOM WEB & MOBILE APPS",
          title: "Engineering",
          intro:
            "Purpose-built dashboards, admin panels, and customer-facing portals that grow with your product roadmap.",
          features: [
            "Product strategy and technical discovery",
            "Custom web platforms and client portals",
            "Native iOS and Android applications",
            "Secure APIs, roles and workflows",
            "Performance engineering and accessibility",
            "Full source-code and IP handover",
          ],
        },
        {
          kicker: "PRACTICAL AI SYSTEMS",
          title: "AI & Automation",
          intro:
            "Intelligent onboarding assistants, churn prediction signals, and automated support triage that scale with your user base.",
          features: [
            "Private company knowledge search",
            "Document extraction and OCR",
            "AI assistants with approval steps",
            "Customer support automation",
            "Workflow and task orchestration",
            "Evaluation, guardrails and audit trails",
          ],
        },
        {
          kicker: "INSTANT SYNC & CONNECTIONS",
          title: "Integrations",
          intro:
            "Reliable webhooks, CRM sync, billing connectors, and third-party integrations that keep your SaaS ecosystem running smoothly.",
          features: [
            "Instant data sync between systems",
            "Payment and WhatsApp integrations",
            "Reliable queues and retries",
            "API design and documentation",
            "Event-driven workflows",
            "Integration monitoring",
          ],
        },
        {
          kicker: "CLOUD & 24/7 RELIABILITY",
          title: "Cloud & DevOps",
          intro:
            "Resilient Kubernetes clusters, zero-downtime deployments, and observability stacks built for SaaS uptime guarantees.",
          features: [
            "Cloud architecture and migration",
            "Automated scaling and recovery",
            "Zero-downtime releases",
            "Security and backup policies",
            "Observability and incident response",
            "Cloud cost reviews",
          ],
        },
      ],
    },
  },

  fintech: {
    slug: "fintech",
    operatingCapabilities: {
      kicker: "FINTECH · SECURE TRANSACTIONS",
      title: "Technology that fits your operating reality.",
      intro:
        "Payment-grade reliability, ledger integrity, and regulatory compliance engineered for financial platforms where every transaction must be accurate and auditable.",
      items: [
        {
          title: "Secure Transactions & Payment Processing",
          desc: "PCI-aware payment flows, idempotent transaction handling, and multi-gateway routing for reliable money movement.",
        },
        {
          title: "Ledger Integrity & Reconciliation",
          desc: "Immutable audit trails, double-entry ledger patterns, and automated reconciliation pipelines that catch discrepancies in real time.",
        },
        {
          title: "Fraud Detection & Anomaly Monitoring",
          desc: "Behavioral signal collection, rule-based and ML-driven fraud scoring, and real-time alerting for suspicious transaction patterns.",
        },
        {
          title: "Identity Verification & Access Control",
          desc: "KYC/AML integration, biometric authentication, and role-based access controls aligned with financial regulatory requirements.",
        },
        {
          title: "Financial Reporting & Regulatory Compliance",
          desc: "Automated regulatory reporting, data retention policies, and export-ready audit logs compliant with RBI and DPDP standards.",
        },
      ],
    },
    disciplinesApplied: {
      kicker: "DISCIPLINES APPLIED",
      title: "How we engineer fintech solutions.",
      intro:
        "Custom platforms for financial operations, AI-driven risk monitoring, and hardened cloud infrastructure built for regulatory scrutiny.",
      items: [
        {
          kicker: "CUSTOM WEB & MOBILE APPS",
          title: "Engineering",
          intro:
            "Secure customer-facing and admin interfaces with role-based access, transaction histories, and real-time balance updates.",
          features: [
            "Product strategy and technical discovery",
            "Custom web platforms and client portals",
            "Native iOS and Android applications",
            "Secure APIs, roles and workflows",
            "Performance engineering and accessibility",
            "Full source-code and IP handover",
          ],
        },
        {
          kicker: "PRACTICAL AI SYSTEMS",
          title: "AI & Automation",
          intro:
            "Fraud scoring pipelines, anomaly detection models, and automated compliance document processing for financial operations.",
          features: [
            "Private company knowledge search",
            "Document extraction and OCR",
            "AI assistants with approval steps",
            "Customer support automation",
            "Workflow and task orchestration",
            "Evaluation, guardrails and audit trails",
          ],
        },
        {
          kicker: "INSTANT SYNC & CONNECTIONS",
          title: "Integrations",
          intro:
            "Payment gateway orchestration, banking API integrations, and real-time event streaming for transaction pipelines.",
          features: [
            "Instant data sync between systems",
            "Payment and WhatsApp integrations",
            "Reliable queues and retries",
            "API design and documentation",
            "Event-driven workflows",
            "Integration monitoring",
          ],
        },
        {
          kicker: "CLOUD & 24/7 RELIABILITY",
          title: "Cloud & DevOps",
          intro:
            "Hardened cloud deployments with encryption-at-rest, WAF rules, and incident response playbooks built for financial uptime.",
          features: [
            "Cloud architecture and migration",
            "Automated scaling and recovery",
            "Zero-downtime releases",
            "Security and backup policies",
            "Observability and incident response",
            "Cloud cost reviews",
          ],
        },
      ],
    },
  },

  healthcare: {
    slug: "healthcare",
    operatingCapabilities: {
      kicker: "HEALTHCARE TECH · SECURE CARE",
      title: "Technology that fits your operating reality.",
      intro:
        "Patient data security, clinical workflow automation, and compliant system integrations engineered for healthcare providers who operate under strict regulatory scrutiny.",
      items: [
        {
          title: "Secure Patient Data & Role-Based Access",
          desc: "Encrypted patient records, granular role permissions, and audit logging that satisfies healthcare data protection requirements.",
        },
        {
          title: "Appointment Scheduling & Clinical Workflows",
          desc: "Intelligent appointment booking, doctor scheduling, and patient flow management that reduces administrative overhead.",
        },
        {
          title: "Healthcare System Integrations",
          desc: "HL7/FHIR-compatible connectors, EMR system integration, and interoperability layers that connect disparate clinical systems.",
        },
        {
          title: "Medical Data Processing & Reporting",
          desc: "Structured health record processing, lab result aggregation, and compliance-ready clinical reporting dashboards.",
        },
        {
          title: "Privacy, Auditability & Service Availability",
          desc: "End-to-end encryption, immutable access logs, and 99.99% uptime infrastructure designed for mission-critical healthcare operations.",
        },
      ],
    },
    disciplinesApplied: {
      kicker: "DISCIPLINES APPLIED",
      title: "How we engineer healthcare solutions.",
      intro:
        "Compliant platforms for patient engagement, AI-assisted diagnostics support, and secure integrations with clinical systems.",
      items: [
        {
          kicker: "CUSTOM WEB & MOBILE APPS",
          title: "Engineering",
          intro:
            "Patient portals, clinical dashboards, and mobile health apps with HIPAA-aligned data handling and role-based access.",
          features: [
            "Product strategy and technical discovery",
            "Custom web platforms and client portals",
            "Native iOS and Android applications",
            "Secure APIs, roles and workflows",
            "Performance engineering and accessibility",
            "Full source-code and IP handover",
          ],
        },
        {
          kicker: "PRACTICAL AI SYSTEMS",
          title: "AI & Automation",
          intro:
            "Clinical decision support, patient data extraction from documents, and automated appointment reminder workflows.",
          features: [
            "Private company knowledge search",
            "Document extraction and OCR",
            "AI assistants with approval steps",
            "Customer support automation",
            "Workflow and task orchestration",
            "Evaluation, guardrails and audit trails",
          ],
        },
        {
          kicker: "INSTANT SYNC & CONNECTIONS",
          title: "Integrations",
          intro:
            "EMR/EHR connectors, lab system integrations, and real-time patient data synchronization across clinical touchpoints.",
          features: [
            "Instant data sync between systems",
            "Payment and WhatsApp integrations",
            "Reliable queues and retries",
            "API design and documentation",
            "Event-driven workflows",
            "Integration monitoring",
          ],
        },
        {
          kicker: "CLOUD & 24/7 RELIABILITY",
          title: "Cloud & DevOps",
          intro:
            "Healthcare-grade cloud infrastructure with encryption, disaster recovery, and uptime SLAs aligned with clinical requirements.",
          features: [
            "Cloud architecture and migration",
            "Automated scaling and recovery",
            "Zero-downtime releases",
            "Security and backup policies",
            "Observability and incident response",
            "Cloud cost reviews",
          ],
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
        "From intelligent product discovery to dependable checkout and scalable infrastructure, we build the capabilities that help e-commerce businesses deliver better shopping experiences, operate efficiently, and grow with confidence.",
      items: [
        {
          title: "AI-Powered Commerce & Discovery",
          desc: "Intelligent shopping assistants, catalogue-aware recommendations, and conversational product discovery powered by LLMs, RAG, Spring AI, and vector search — helping shoppers find exactly what they need.",
        },
        {
          title: "Visual Search & Personalization",
          desc: "Image-based product discovery, multimodal search, and personalised recommendations using computer vision, product embeddings, and recommendation engines tailored to your catalogue.",
        },
        {
          title: "Real-Time Commerce & Integrations",
          desc: "Event-driven inventory synchronization, live order tracking, payment connectivity, and automated notifications powered by Kafka, reliable APIs, and WebSockets that keep systems in sync.",
        },
        {
          title: "Predictive Intelligence & Pricing",
          desc: "Price history, intelligent discount alerts, demand forecasting, and stockout prevention using predictive analytics, machine learning, and historical commerce data.",
        },
        {
          title: "Secure Transactions & Trust",
          desc: "Protected checkout, fraud-risk detection, verified purchases, role-based access, encrypted data, and traceable audit logs built around secure payment workflows.",
        },
        {
          title: "Scalable Commerce Infrastructure",
          desc: "Production-ready storefronts, resilient backend services, Redis caching, automated testing, cloud deployment, and end-to-end observability designed to grow with your business.",
        },
      ],
    },
    disciplinesApplied: {
      kicker: "DISCIPLINES APPLIED",
      title: "How we engineer e-commerce solutions.",
      intro:
        "Scalable storefronts, intelligent integrations with fulfillment systems, and cloud infrastructure optimized for peak conversion events.",
      items: [
        {
          kicker: "CUSTOM WEB & MOBILE APPS",
          title: "Engineering",
          intro:
            "High-performance storefronts, seller dashboards, and customer mobile apps built for speed and conversion optimization.",
          features: [
            "Product strategy and technical discovery",
            "Custom web platforms and client portals",
            "Native iOS and Android applications",
            "Secure APIs, roles and workflows",
            "Performance engineering and accessibility",
            "Full source-code and IP handover",
          ],
        },
        {
          kicker: "PRACTICAL AI SYSTEMS",
          title: "AI & Automation",
          intro:
            "Personalized product recommendations, demand forecasting, and automated customer support for high-volume storefronts.",
          features: [
            "Private company knowledge search",
            "Document extraction and OCR",
            "AI assistants with approval steps",
            "Customer support automation",
            "Workflow and task orchestration",
            "Evaluation, guardrails and audit trails",
          ],
        },
        {
          kicker: "INSTANT SYNC & CONNECTIONS",
          title: "Integrations",
          intro:
            "Payment gateway orchestration, shipping carrier APIs, ERP connectors, and inventory sync across multi-channel storefronts.",
          features: [
            "Instant data sync between systems",
            "Payment and WhatsApp integrations",
            "Reliable queues and retries",
            "API design and documentation",
            "Event-driven workflows",
            "Integration monitoring",
          ],
        },
        {
          kicker: "CLOUD & 24/7 RELIABILITY",
          title: "Cloud & DevOps",
          intro:
            "Auto-scaling cloud infrastructure, CDN-optimized media delivery, and CI/CD pipelines designed for peak traffic seasons.",
          features: [
            "Cloud architecture and migration",
            "Automated scaling and recovery",
            "Zero-downtime releases",
            "Security and backup policies",
            "Observability and incident response",
            "Cloud cost reviews",
          ],
        },
      ],
    },
    engineeringChallenges: {
      kicker: "ENGINEERED FOR REAL-WORLD COMMERCE",
      title: "Six challenges that can make or break an online business.",
      intro:
        "Behind every successful shopping experience is an engineering system designed to handle traffic, protect transactions, maintain accurate data, and recover when unexpected failures occur. We understand these challenges and build commerce platforms designed around them.",
      items: [
        {
          title: "Traffic Spikes & Performance Degradation",
          desc: "Traffic surges during sales, campaigns, and launches can overwhelm servers, exhaust caches, and slow databases—leading to slow pages, failed requests, and lost revenue.",
          solution: "We build auto-scaling storefronts with edge caching and CDN-backed media so your store stays fast and accessible when demand peaks.",
          icon: "TrafficSignal",
        },
        {
          title: "Checkout Failures & Transaction Integrity",
          desc: "Payment timeouts, interrupted sessions, duplicate orders, and uncertain payment status are the most damaging failures for shopper trust.",
          solution: "We engineer dependable checkout with idempotent operations, clear status tracking, and resilient payment integrations that protect transactions.",
          icon: "ReceiptX",
        },
        {
          title: "Inventory Inconsistency & Overselling",
          desc: "Simultaneous purchases, delayed stock updates, and inconsistent data across channels lead to overselling and damage brand reputation.",
          solution: "We build atomic reservation logic and real-time stock sync to improve accuracy and prevent overselling across channels.",
          icon: "Warehouse",
        },
        {
          title: "Database Bottlenecks & Data Synchronization",
          desc: "Slow queries, growing catalogs, and inconsistent records across commerce platforms and payment systems compound over time.",
          solution: "We engineer efficient data systems with smart schema design, caching, and resilient integrations for fast access and reliable sync.",
          icon: "Database",
        },
        {
          title: "Product Discovery, Search & Personalization",
          desc: "Poor search relevance, slow filters, zero-result queries, and irrelevant recommendations prevent customers from finding products.",
          solution: "We build AI-powered search, vector-based recommendations, and personalised merchandising to help shoppers find products faster.",
          icon: "Binoculars",
        },
        {
          title: "Production Failures, Security & Infrastructure Costs",
          desc: "Deployment regressions, third-party outages, stuck jobs, security threats, and rising infrastructure costs are realities every growing commerce team must manage.",
          solution: "We build with cloud-native architecture, automated testing, and full observability for reliability, security, and controlled costs.",
          icon: "WarningCircle",
        },
      ],
    },
  },

  edtech: {
    slug: "edtech",
    operatingCapabilities: {
      kicker: "EDTECH · LEARNING TECHNOLOGY",
      title: "Technology that fits your operating reality.",
      intro:
        "Scalable learning platforms, secure online assessments, and real-time student analytics engineered for educational institutions that demand reliability and fairness.",
      items: [
        {
          title: "Learning Management & Course Delivery",
          desc: "Structured course pipelines, progress tracking, and multi-format content delivery that supports self-paced and instructor-led learning.",
        },
        {
          title: "Assessments & Online Proctoring",
          desc: "AI-assisted examination monitoring, browser lockdown, identity verification, and evidence-captured proctoring for exam integrity.",
        },
        {
          title: "Student Progress & Learning Analytics",
          desc: "Granular performance dashboards, competency mapping, and predictive analytics that identify at-risk students before they fall behind.",
        },
        {
          title: "Video & Content Delivery at Scale",
          desc: "Adaptive bitrate streaming, offline-capable content caching, and DRM-protected media delivery for reliable access across devices.",
        },
        {
          title: "Instructor Workflows & Institutional Integration",
          desc: "Grade management, assignment workflows, SIS integration, and role-based access for teachers, administrators, and students.",
        },
      ],
    },
    disciplinesApplied: {
      kicker: "DISCIPLINES APPLIED",
      title: "How we engineer edtech solutions.",
      intro:
        "Custom LMS platforms, AI-powered assessment tools, and cloud infrastructure designed for institutional-scale student populations.",
      items: [
        {
          kicker: "CUSTOM WEB & MOBILE APPS",
          title: "Engineering",
          intro:
            "Responsive learning platforms, student portals, and instructor dashboards that work reliably on any device, anywhere.",
          features: [
            "Product strategy and technical discovery",
            "Custom web platforms and client portals",
            "Native iOS and Android applications",
            "Secure APIs, roles and workflows",
            "Performance engineering and accessibility",
            "Full source-code and IP handover",
          ],
        },
        {
          kicker: "PRACTICAL AI SYSTEMS",
          title: "AI & Automation",
          intro:
            "Proctoring intelligence, automated grading support, and personalized learning path recommendations based on student performance data.",
          features: [
            "Private company knowledge search",
            "Document extraction and OCR",
            "AI assistants with approval steps",
            "Customer support automation",
            "Workflow and task orchestration",
            "Evaluation, guardrails and audit trails",
          ],
        },
        {
          kicker: "INSTANT SYNC & CONNECTIONS",
          title: "Integrations",
          intro:
            "SIS connectors, payment integrations for course fees, third-party content tools, and real-time class sync across platforms.",
          features: [
            "Instant data sync between systems",
            "Payment and WhatsApp integrations",
            "Reliable queues and retries",
            "API design and documentation",
            "Event-driven workflows",
            "Integration monitoring",
          ],
        },
        {
          kicker: "CLOUD & 24/7 RELIABILITY",
          title: "Cloud & DevOps",
          intro:
            "Scalable cloud infrastructure for exam-day traffic spikes, media delivery optimization, and 24/7 platform availability.",
          features: [
            "Cloud architecture and migration",
            "Automated scaling and recovery",
            "Zero-downtime releases",
            "Security and backup policies",
            "Observability and incident response",
            "Cloud cost reviews",
          ],
        },
      ],
    },
  },

  inventory: {
    slug: "inventory",
    operatingCapabilities: {
      kicker: "INVENTORY · STOCK INTELLIGENCE",
      title: "Technology that fits your operating reality.",
      intro:
        "Real-time stock visibility, warehouse management, and traceable inventory operations engineered for businesses that need precision across every location.",
      items: [
        {
          title: "Real-Time Stock Visibility & Movement Tracking",
          desc: "Live stock dashboards, inbound/outbound movement logging, and location-level visibility that eliminates blind spots in your supply chain.",
        },
        {
          title: "Multi-Location Warehouse Management",
          desc: "Centralized control across warehouses, bins, and shelves with transfer orders, putaway logic, and cross-location stock balancing.",
        },
        {
          title: "Purchase Orders & Supplier Integrations",
          desc: "Automated PO generation, supplier portal access, and GRN workflows that streamline procurement from requisition to receipt.",
        },
        {
          title: "Barcode Operations & Product Traceability",
          desc: "Barcode and QR-based scanning, batch tracking, expiry monitoring, and full traceability from receipt to dispatch.",
        },
        {
          title: "Stock Reconciliation & Low-Stock Alerts",
          desc: "Automated cycle counts, variance detection, reorder point alerts, and audit history that keeps your records accurate and actionable.",
        },
      ],
    },
    disciplinesApplied: {
      kicker: "DISCIPLINES APPLIED",
      title: "How we engineer inventory solutions.",
      intro:
        "Custom warehouse management platforms, barcode-integrated tracking systems, and real-time dashboards that give you complete stock control.",
      items: [
        {
          kicker: "CUSTOM WEB & MOBILE APPS",
          title: "Engineering",
          intro:
            "Responsive inventory dashboards, mobile scanning interfaces, and warehouse management tools built for speed and accuracy.",
          features: [
            "Product strategy and technical discovery",
            "Custom web platforms and client portals",
            "Native iOS and Android applications",
            "Secure APIs, roles and workflows",
            "Performance engineering and accessibility",
            "Full source-code and IP handover",
          ],
        },
        {
          kicker: "PRACTICAL AI SYSTEMS",
          title: "AI & Automation",
          intro:
            "Demand forecasting, automated reorder suggestions, and anomaly detection for stock discrepancies and shrinkage.",
          features: [
            "Private company knowledge search",
            "Document extraction and OCR",
            "AI assistants with approval steps",
            "Customer support automation",
            "Workflow and task orchestration",
            "Evaluation, guardrails and audit trails",
          ],
        },
        {
          kicker: "INSTANT SYNC & CONNECTIONS",
          title: "Integrations",
          intro:
            "ERP sync, barcode scanner integrations, supplier system connectors, and real-time stock updates across all channels.",
          features: [
            "Instant data sync between systems",
            "Payment and WhatsApp integrations",
            "Reliable queues and retries",
            "API design and documentation",
            "Event-driven workflows",
            "Integration monitoring",
          ],
        },
        {
          kicker: "CLOUD & 24/7 RELIABILITY",
          title: "Cloud & DevOps",
          intro:
            "Cloud-hosted inventory platforms with offline-capable mobile apps, real-time data sync, and uptime for continuous operations.",
          features: [
            "Cloud architecture and migration",
            "Automated scaling and recovery",
            "Zero-downtime releases",
            "Security and backup policies",
            "Observability and incident response",
            "Cloud cost reviews",
          ],
        },
      ],
    },
  },

  logistics: {
    slug: "logistics",
    operatingCapabilities: {
      kicker: "LOGISTICS & FLEET · MOVING SMART",
      title: "Technology that fits your operating reality.",
      intro:
        "End-to-end shipment tracking, route intelligence, and fleet visibility engineered for logistics operations where on-time delivery is the only metric that matters.",
      items: [
        {
          title: "Shipment Lifecycle & Delivery Tracking",
          desc: "End-to-end shipment visibility from pickup to proof of delivery, with real-time status updates and customer-facing tracking portals.",
        },
        {
          title: "Route Planning & Fleet Visibility",
          desc: "GPS-powered route optimization, live fleet tracking, and ETA predictions that reduce fuel costs and improve on-time performance.",
        },
        {
          title: "Driver, Warehouse & Carrier Integrations",
          desc: "Unified APIs connecting driver apps, warehouse management systems, and carrier partners into a single operational data layer.",
        },
        {
          title: "Dispatch Automation & Exception Management",
          desc: "Intelligent load assignment, automated dispatch workflows, and proactive exception alerts that reduce manual coordination overhead.",
        },
        {
          title: "Proof of Delivery & Operational Analytics",
          desc: "Digital POD capture, customer notification workflows, and operational dashboards with SLA adherence and driver performance metrics.",
        },
      ],
    },
    disciplinesApplied: {
      kicker: "DISCIPLINES APPLIED",
      title: "How we engineer logistics solutions.",
      intro:
        "Custom fleet management platforms, real-time tracking systems, and integration layers that connect every node in your supply chain.",
      items: [
        {
          kicker: "CUSTOM WEB & MOBILE APPS",
          title: "Engineering",
          intro:
            "Dispatcher dashboards, driver mobile apps, and customer tracking portals with offline support and real-time location updates.",
          features: [
            "Product strategy and technical discovery",
            "Custom web platforms and client portals",
            "Native iOS and Android applications",
            "Secure APIs, roles and workflows",
            "Performance engineering and accessibility",
            "Full source-code and IP handover",
          ],
        },
        {
          kicker: "PRACTICAL AI SYSTEMS",
          title: "AI & Automation",
          intro:
            "Route optimization algorithms, delivery ETAs powered by traffic data, and automated exception escalation for delayed shipments.",
          features: [
            "Private company knowledge search",
            "Document extraction and OCR",
            "AI assistants with approval steps",
            "Customer support automation",
            "Workflow and task orchestration",
            "Evaluation, guardrails and audit trails",
          ],
        },
        {
          kicker: "INSTANT SYNC & CONNECTIONS",
          title: "Integrations",
          intro:
            "GPS tracker integrations, warehouse WMS connectors, carrier API integrations, and real-time event streaming across operations.",
          features: [
            "Instant data sync between systems",
            "Payment and WhatsApp integrations",
            "Reliable queues and retries",
            "API design and documentation",
            "Event-driven workflows",
            "Integration monitoring",
          ],
        },
        {
          kicker: "CLOUD & 24/7 RELIABILITY",
          title: "Cloud & DevOps",
          intro:
            "Geo-distributed cloud infrastructure, real-time WebSocket updates for fleet positions, and high-availability backends for tracking.",
          features: [
            "Cloud architecture and migration",
            "Automated scaling and recovery",
            "Zero-downtime releases",
            "Security and backup policies",
            "Observability and incident response",
            "Cloud cost reviews",
          ],
        },
      ],
    },
  },

  lawtech: {
    slug: "lawtech",
    operatingCapabilities: {
      kicker: "LAW CHAMBERS · LEGAL TECHNOLOGY",
      title: "Technology that fits your operating reality.",
      intro:
        "Case management, legal document intelligence, and secure client collaboration engineered for law firms where confidentiality, precision, and timeline discipline are non-negotiable.",
      items: [
        {
          title: "Matter, Case & Client Management",
          desc: "Structured matter intake, client relationship tracking, and case lifecycle management that keeps every legal engagement organized.",
        },
        {
          title: "Legal Document Management & Extraction",
          desc: "Intelligent document indexing, OCR-powered text extraction, version control, and full-text search across thousands of legal documents.",
        },
        {
          title: "Deadline, Hearing & Task Tracking",
          desc: "Court date calendars, limitation period alerts, and task workflows with automated escalation to prevent missed deadlines.",
        },
        {
          title: "Secure Client Portals & Document Sharing",
          desc: "Encrypted client collaboration spaces, controlled document sharing, and granular access permissions that protect privileged information.",
        },
        {
          title: "Legal Research & Source-Grounded AI",
          desc: "AI-assisted precedent search, statute lookup, and document summarization grounded in verified legal sources with citation tracking.",
        },
        {
          title: "Role-Based Access & Confidentiality Controls",
          desc: "Fine-grained permissions per matter, conflict-of-interest checks, immutable audit trails, and data retention policies aligned with bar council requirements.",
        },
      ],
    },
    disciplinesApplied: {
      kicker: "DISCIPLINES APPLIED",
      title: "How we engineer lawtech solutions.",
      intro:
        "Purpose-built legal platforms, document intelligence pipelines, and secure cloud infrastructure designed for law firm operations and confidentiality.",
      items: [
        {
          kicker: "CUSTOM WEB & MOBILE APPS",
          title: "Engineering",
          intro:
            "Case management dashboards, client-facing portals, and secure mobile apps with role-based access and encrypted communications.",
          features: [
            "Product strategy and technical discovery",
            "Custom web platforms and client portals",
            "Native iOS and Android applications",
            "Secure APIs, roles and workflows",
            "Performance engineering and accessibility",
            "Full source-code and IP handover",
          ],
        },
        {
          kicker: "PRACTICAL AI SYSTEMS",
          title: "AI & Automation",
          intro:
            "Legal document extraction, contract clause analysis, precedent search, and automated compliance checking powered by private AI models.",
          features: [
            "Private company knowledge search",
            "Document extraction and OCR",
            "AI assistants with approval steps",
            "Customer support automation",
            "Workflow and task orchestration",
            "Evaluation, guardrails and audit trails",
          ],
        },
        {
          kicker: "INSTANT SYNC & CONNECTIONS",
          title: "Integrations",
          intro:
            "Court e-filing connectors, calendar sync, DMS integrations, and secure client communication channels for seamless workflows.",
          features: [
            "Instant data sync between systems",
            "Payment and WhatsApp integrations",
            "Reliable queues and retries",
            "API design and documentation",
            "Event-driven workflows",
            "Integration monitoring",
          ],
        },
        {
          kicker: "CLOUD & 24/7 RELIABILITY",
          title: "Cloud & DevOps",
          intro:
            "Encrypted cloud infrastructure, backup and disaster recovery, and access-controlled deployments for legal data confidentiality.",
          features: [
            "Cloud architecture and migration",
            "Automated scaling and recovery",
            "Zero-downtime releases",
            "Security and backup policies",
            "Observability and incident response",
            "Cloud cost reviews",
          ],
        },
      ],
    },
  },
};
