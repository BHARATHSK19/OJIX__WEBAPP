"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import {
  Code,
  Cpu,
  Database,
  CloudCheck,
  ChatCircleText,
  SlidersHorizontal,
  CheckCircle,
  GitCommit,
  GitMerge,
  RocketLaunch
} from "@phosphor-icons/react";

interface PrincipleItem {
  id: string;
  step: string;
  code: string;
  eyebrow: string;
  category: string;
  headline: string;
  description: string;
  concepts: {
    label: string;
    detail: string;
  }[];
}

const PRINCIPLES: PrincipleItem[] = [
  {
    id: "engineering",
    step: "01",
    code: "SYS.ENG.01",
    eyebrow: "PRINCIPLE 01",
    category: "Engineering quality",
    headline: "Built beyond the demo.",
    description:
      "Robust architecture, security and maintainable code are considered from the start—not left for later.",
    concepts: [
      {
        label: "Architecture",
        detail: "Domain-driven boundaries, typed RPC schemas, and modular services designed to scale."
      },
      {
        label: "Security",
        detail: "Threat modeling, encrypted storage tiers, and zero-trust data flows integrated from day one."
      },
      {
        label: "Maintainability",
        detail: "Clean abstractions, exhaustive test suites, and documentation built for long-term ownership."
      }
    ]
  },
  {
    id: "collaboration",
    step: "02",
    code: "COL.ENG.02",
    eyebrow: "PRINCIPLE 02",
    category: "Direct collaboration",
    headline: "Closer to the people building it.",
    description:
      "Discuss decisions, resolve trade-offs and shape the product directly with the engineers doing the work.",
    concepts: [
      {
        label: "Direct communication",
        detail: "No intermediaries or account managers. Speak directly with the engineers implementing your product."
      },
      {
        label: "Shared technical decisions",
        detail: "Open discussions on architecture, performance, cloud costs, and pragmatic technical trade-offs."
      },
      {
        label: "Continuous feedback",
        detail: "Shared async channels, bi-weekly staging reviews, and rapid engineering iterations."
      }
    ]
  },
  {
    id: "delivery",
    step: "03",
    code: "DEL.ENG.03",
    eyebrow: "PRINCIPLE 03",
    category: "Visible delivery",
    headline: "Progress you can see.",
    description:
      "Follow clear milestones, review working builds and share feedback while the product takes shape.",
    concepts: [
      {
        label: "Clear milestones",
        detail: "Every sprint maps to demonstrable functional increments and transparent engineering goals."
      },
      {
        label: "Working builds",
        detail: "Test live, functioning modules deployed to private staging links at regular sprint checkpoints."
      },
      {
        label: "Review and feedback",
        detail: "Inspect working software directly with your team and steer changes while code is actively evolving."
      }
    ]
  }
];

// ==========================================
// Lightweight Technical Visual Schemas
// ==========================================

function EngineeringSchema() {
  const nodes = [
    { name: "FRONTEND", spec: "Edge SSR · Next.js", metric: "P99 < 120ms", icon: Code },
    { name: "SERVICES", spec: "Typed RPC · Gateway", metric: "Strict Schema", icon: Cpu },
    { name: "DATA", spec: "PostgreSQL · Redis", metric: "ACID Tier", icon: Database },
    { name: "PRODUCTION", spec: "Live Infra · Metrics", metric: "Zero Drift", icon: CloudCheck }
  ];

  return (
    <div className="w-full mt-6 pt-5 pb-5 px-4 sm:px-6 rounded-lg bg-[#c9662f] text-white shadow-md select-none border border-[#b85722]">
      <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/20 text-xs font-sans">
        <span className="flex items-center gap-2 font-bold tracking-wider text-white">
          <span className="w-2 h-2 rounded-full bg-white inline-block shadow-xs" />
          <span>TOPOLOGY</span>
        </span>
        <span className="font-medium text-white/85 tracking-wider text-[11px]">
          END-TO-END PIPELINE
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {nodes.map((node, i) => {
          const Icon = node.icon;
          return (
            <div
              key={node.name}
              className="p-3 sm:p-3.5 rounded-md bg-black/15 border border-white/15 flex flex-col justify-between transition-colors hover:bg-black/20"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-[11px] font-semibold text-white/75">0{i + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
              </div>
              <div className="flex items-center gap-2 mb-1 text-white font-sans text-[13px] font-extrabold tracking-tight">
                <Icon size={16} className="text-white/90 shrink-0" weight="bold" />
                <span>{node.name}</span>
              </div>
              <div className="text-[11px] font-sans font-medium text-white/85 truncate">{node.spec}</div>
              <div className="text-[11px] font-sans font-semibold text-white/95 mt-2 pt-2 border-t border-white/15">
                {node.metric}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CollaborationSchema() {
  const stages = [
    { name: "DISCUSS", label: "Problem Scope & Constraints", role: "Direct Dialogue", icon: ChatCircleText },
    { name: "DECIDE", label: "Architecture & Trade-offs", role: "ADR Consensus", icon: SlidersHorizontal },
    { name: "BUILD", label: "Production Implementation", role: "Direct Release", icon: Code }
  ];

  return (
    <div className="w-full mt-6 pt-5 pb-5 px-4 sm:px-6 rounded-lg bg-[#c9662f] text-white shadow-md select-none border border-[#b85722]">
      <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/20 text-xs font-sans">
        <span className="flex items-center gap-2 font-bold tracking-wider text-white">
          <span className="w-2 h-2 rounded-full bg-white inline-block shadow-xs" />
          <span>WORKFLOW</span>
        </span>
        <span className="font-medium text-white/85 tracking-wider text-[11px]">
          ZERO SALES FILTER
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {stages.map((st, i) => {
          const Icon = st.icon;
          return (
            <div
              key={st.name}
              className="p-3 sm:p-3.5 rounded-md bg-black/15 border border-white/15 flex flex-col justify-between transition-colors hover:bg-black/20"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-[11px] font-semibold text-white/75">STAGE 0{i + 1}</span>
                <span className="text-[10px] font-sans font-bold px-1.5 py-0.5 rounded bg-white/20 text-white">
                  ACTIVE
                </span>
              </div>
              <div className="flex items-center gap-2 mb-1 text-white font-sans text-sm font-extrabold tracking-tight">
                <Icon size={16} className="text-white/90 shrink-0" weight="bold" />
                <span>{st.name}</span>
              </div>
              <div className="text-[11px] font-sans font-medium text-white/85 leading-snug">{st.label}</div>
              <div className="text-[11px] font-sans font-semibold text-white/95 mt-2 pt-2 border-t border-white/15">
                {st.role}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DeliverySchema() {
  const milestones = [
    { name: "PLAN", status: "Defined", desc: "Specs & Blueprint", icon: CheckCircle },
    { name: "BUILD", status: "In Flight", desc: "Sprint Increments", icon: GitCommit },
    { name: "VALIDATE", status: "Verified", desc: "Private Staging Link", icon: GitMerge },
    { name: "RELEASE", status: "Deployed", desc: "100% Code & Keys", icon: RocketLaunch }
  ];

  return (
    <div className="w-full mt-6 pt-5 pb-5 px-4 sm:px-6 rounded-lg bg-[#c9662f] text-white shadow-md select-none border border-[#b85722]">
      <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/20 text-xs font-sans">
        <span className="flex items-center gap-2 font-bold tracking-wider text-white">
          <span className="w-2 h-2 rounded-full bg-white inline-block shadow-xs" />
          <span>CADENCE</span>
        </span>
        <span className="font-medium text-white/85 tracking-wider text-[11px]">
          BI-WEEKLY STAGING BUILDS
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {milestones.map((m, i) => {
          const Icon = m.icon;
          return (
            <div
              key={m.name}
              className="p-3 sm:p-3.5 rounded-md bg-black/15 border border-white/15 flex flex-col justify-between transition-colors hover:bg-black/20"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-sans text-[11px] font-semibold text-white/75">M0{i + 1}</span>
                <span className="text-[10px] font-sans font-bold px-1.5 py-0.5 rounded bg-white/20 text-white">
                  {m.status}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-1 text-white font-sans text-[13px] font-extrabold tracking-tight">
                <Icon size={16} className="text-white/90 shrink-0" weight="bold" />
                <span>{m.name}</span>
              </div>
              <div className="text-[11px] font-sans font-medium text-white/85 leading-snug">{m.desc}</div>
              <div className="text-[11px] font-sans font-semibold text-white/95 mt-2 pt-2 border-t border-white/15">
                Milestone 0{i + 1}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ==========================================
// Main WhyUsSection Component (Editorial Timeline)
// ==========================================

export function WhyUsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  // Scroll-driven progress line tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="how-we-work"
      aria-label="Why Choose OJIX"
      className="py-24 md:py-36 px-6 theme-transition border-b border-theme-border bg-theme-bg"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Introduction */}
        <div className="mb-16 md:mb-24 reveal max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-theme-accent inline-block" />
            <span>WHY CHOOSE OJIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight theme-transition leading-[1.12] mb-6 text-theme-text">
            Better software starts with how it&apos;s built.
            {/* Screen-reader alias for legacy tests & bookmarks */}
            <span className="sr-only"> Why Choose OJIX — Technology built with intent</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-theme-muted leading-relaxed theme-transition">
            Three principles guide how we engineer, collaborate and deliver.
          </p>
        </div>

        {/* Editorial Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Vertical Timeline Track Line (Aceternity Structural Pattern) */}
          <div
            className="absolute left-4 sm:left-5 md:left-64 lg:left-72 top-4 bottom-12 w-[2px] bg-theme-border/60"
            aria-hidden="true"
          >
            <motion.div
              style={{ height: shouldReduceMotion ? "100%" : lineHeight }}
              className="w-full bg-gradient-to-b from-theme-accent via-theme-accent to-theme-accent/30 origin-top"
            />
          </div>

          {/* Timeline Entries */}
          <div className="space-y-20 sm:space-y-28 md:space-y-36">
            {PRINCIPLES.map((principle, index) => {
              return (
                <div
                  key={principle.id}
                  className="relative flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 items-start"
                >
                  {/* Left Column (Sticky Sidebar on md+) */}
                  <div className="md:sticky md:top-28 z-20 flex items-start gap-4 md:w-64 lg:w-72 shrink-0 self-start">
                    {/* Numbered Marker directly over the vertical line */}
                    <div className="relative flex items-center justify-center shrink-0">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-theme-bg border border-theme-border flex items-center justify-center font-mono text-xs font-bold text-theme-accent shadow-sm z-10 transition-colors">
                        {principle.step}
                      </div>
                    </div>

                    {/* Principle Eyebrow & Category Title */}
                    <div className="pt-0.5">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-theme-accent font-semibold block mb-1">
                        {principle.eyebrow}
                      </span>
                      <h3 className="font-sans text-sm sm:text-base font-bold text-theme-text tracking-tight">
                        {principle.category}
                      </h3>
                      <span className="font-mono text-[10px] text-theme-muted/70 block mt-1">

                      </span>
                    </div>
                  </div>

                  {/* Right Column (Editorial Content & Details) */}
                  <div className="pl-12 md:pl-0 flex-1 max-w-3xl">
                    {/* Principle Headline */}
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-theme-text theme-transition leading-tight mb-4">
                      {principle.headline}
                    </h4>

                    {/* Principle Description */}
                    <p className="text-base sm:text-lg text-theme-muted leading-relaxed theme-transition mb-8">
                      {principle.description}
                    </p>

                    {/* Supporting Concepts (Restrained Editorial Grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-theme-border/60">
                      {principle.concepts.map((concept) => (
                        <div key={concept.label} className="flex flex-col">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-theme-accent shrink-0" />
                            <h5 className="font-sans text-xs font-bold text-theme-text uppercase tracking-wider">
                              {concept.label}
                            </h5>
                          </div>
                          <p className="text-xs sm:text-[13px] text-theme-muted leading-relaxed">
                            {concept.detail}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Restrained Technical Visual Schema */}
                    {index === 0 && <EngineeringSchema />}
                    {index === 1 && <CollaborationSchema />}
                    {index === 2 && <DeliverySchema />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
