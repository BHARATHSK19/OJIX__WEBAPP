"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Compass,
  Cpu,
  ChartLineUp,
  CheckCircle,
  ArrowRight
} from "@phosphor-icons/react";

interface StepData {
  number: string;
  stepNum: string;
  title: string;
  description: string;
  pills: [string, string];
  footer: string;
  icon: React.ElementType;
  badge: string;
}

const STEPS: StepData[] = [
  {
    number: "STEP 01",
    stepNum: "01",
    title: "Workflow & Friction Audit",
    description:
      "We identify workflow bottlenecks, operational challenges, and business goals to establish a clear, practical software blueprint.",
    pills: ["Discovery", "Blueprint"],
    footer: "Next: Step 02",
    icon: Compass,
    badge: "Discovery"
  },
  {
    number: "STEP 02",
    stepNum: "02",
    title: "System Design & Plan",
    description:
      "We define user experiences, database structures, system architecture, and security permissions before development begins.",
    pills: ["Architecture", "Plan"],
    footer: "Next: Step 03",
    icon: Cpu,
    badge: "Architecture"
  },
  {
    number: "STEP 03",
    stepNum: "03",
    title: "Bi-Weekly Staging Demos",
    description:
      "Review working software in a staging environment every two weeks, track progress, and provide feedback throughout development.",
    pills: ["Feedback", "Staging"],
    footer: "Next: Step 04",
    icon: ChartLineUp,
    badge: "Staging"
  },
  {
    number: "STEP 04",
    stepNum: "04",
    title: "Launch & 100% Handover",
    description:
      "We deploy your software, verify production readiness, and hand over the codebase, credentials, and essential project documentation.",
    pills: ["Ownership", "Launch"],
    footer: "Ready for production",
    icon: CheckCircle,
    badge: "Production"
  }
];

// Color palette derived strictly from OJIX design system
const ARC_COLORS = {
  default: [
    "#0f1c2f", // Step 1: Midnight Navy
    "#1a3354", // Step 2: Deep Slate Navy
    "#2b4f7a", // Step 3: Steel Indigo
    "#c9662f"  // Step 4: OJIX Terracotta (Culmination)
  ],
  defaultDark: [
    "#3a5270", // Step 1 Dark
    "#466284", // Step 2 Dark
    "#54759d", // Step 3 Dark
    "#e07238"  // Step 4 Dark: Luminous Orange
  ],
  active: "#c9662f",
  activeDark: "#e07238"
};

export function DeliveryMethodology() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Coordinate tracking for dynamic SVG alignment
  const [geometry, setGeometry] = useState<{
    width: number;
    height: number;
    nodes: { x: number; y: number }[];
  }>({
    width: 1200,
    height: 740,
    nodes: [
      { x: 150, y: 370 },
      { x: 450, y: 370 },
      { x: 750, y: 370 },
      { x: 1050, y: 370 }
    ]
  });

  // Track theme changes for SVG stroke colors
  useEffect(() => {
    const checkTheme = () => {
      const htmlTheme = document.documentElement.dataset.theme;
      setIsDark(htmlTheme === "dark");
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });
    return () => observer.disconnect();
  }, []);

  // Dynamically update geometry from measured DOM nodes
  const updateGeometry = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    if (containerRect.width === 0) return;

    const newNodes = STEPS.map((_, i) => {
      const el = nodeRefs.current[i];
      if (el) {
        const rect = el.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top
        };
      }
      return {
        x: containerRect.width * (0.125 + i * 0.25),
        y: containerRect.height / 2
      };
    });

    setGeometry({
      width: containerRect.width,
      height: containerRect.height,
      nodes: newNodes
    });
  }, []);

  useEffect(() => {
    updateGeometry();
    const resizeObserver = new ResizeObserver(() => {
      updateGeometry();
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    window.addEventListener("resize", updateGeometry);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateGeometry);
    };
  }, [updateGeometry]);

  const arcRadius = 52;

  // Generate alternating upper and lower arcs inspired by Reference Image 1
  // Node 0: lower arc (cradles bottom)
  // Node 1: upper arc (arches over top)
  // Node 2: lower arc (cradles bottom)
  // Node 3: upper arc (arches over top)
  const getArcPaths = () => {
    const { nodes } = geometry;
    const paths: {
      arc: string;
      connector?: string;
      stem?: { x1: number; y1: number; x2: number; y2: number };
    }[] = [];

    nodes.forEach((n, i) => {
      const isEven = i % 2 === 0; // 0, 2: lower arc; 1, 3: upper arc
      let arcPath = "";
      let arcStart = { x: 0, y: 0 };
      let arcEnd = { x: 0, y: 0 };

      if (isEven) {
        // Lower arc: hugs bottom of circle
        const startRad = Math.PI * (165 / 180);
        const endRad = Math.PI * (15 / 180);
        arcStart = {
          x: n.x + arcRadius * Math.cos(startRad),
          y: n.y + arcRadius * Math.sin(startRad)
        };
        arcEnd = {
          x: n.x + arcRadius * Math.cos(endRad),
          y: n.y + arcRadius * Math.sin(endRad)
        };
        // sweep-flag = 0 in SVG curves counter-clockwise through bottom
        arcPath = `M ${arcStart.x} ${arcStart.y} A ${arcRadius} ${arcRadius} 0 0 0 ${arcEnd.x} ${arcEnd.y}`;
      } else {
        // Upper arc: hugs top of circle
        const startRad = Math.PI * (195 / 180);
        const endRad = Math.PI * (345 / 180);
        arcStart = {
          x: n.x + arcRadius * Math.cos(startRad),
          y: n.y + arcRadius * Math.sin(startRad)
        };
        arcEnd = {
          x: n.x + arcRadius * Math.cos(endRad),
          y: n.y + arcRadius * Math.sin(endRad)
        };
        // sweep-flag = 1 in SVG curves clockwise through top
        arcPath = `M ${arcStart.x} ${arcStart.y} A ${arcRadius} ${arcRadius} 0 0 1 ${arcEnd.x} ${arcEnd.y}`;
      }

      // Connecting S-curve to next node
      let connectorPath: string | undefined = undefined;
      if (i < nodes.length - 1) {
        const nextNode = nodes[i + 1];
        const nextIsEven = (i + 1) % 2 === 0;
        const nextStartRad = nextIsEven
          ? Math.PI * (165 / 180)
          : Math.PI * (195 / 180);
        const nextStart = {
          x: nextNode.x + arcRadius * Math.cos(nextStartRad),
          y: nextNode.y + arcRadius * Math.sin(nextStartRad)
        };

        const dx = nextStart.x - arcEnd.x;
        const dy = nextStart.y - arcEnd.y;
        // Smooth inflection S-curve
        const cp1 = { x: arcEnd.x + dx * 0.45, y: arcEnd.y + dy * 0.15 };
        const cp2 = { x: nextStart.x - dx * 0.45, y: nextStart.y - dy * 0.15 };
        connectorPath = `M ${arcEnd.x} ${arcEnd.y} C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${nextStart.x} ${nextStart.y}`;
      }

      // Vertical guide stem connecting node to card
      const stem = isEven
        ? { x1: n.x, y1: n.y + arcRadius + 6, x2: n.x, y2: n.y + 60 }
        : { x1: n.x, y1: n.y - 60, x2: n.x, y2: n.y - arcRadius - 6 };

      paths.push({
        arc: arcPath,
        connector: connectorPath,
        stem
      });
    });

    return paths;
  };

  const arcData = getArcPaths();

  return (
    <section
      id="capabilities"
      className="py-24 md:py-32 px-6 bg-theme-surface/30 border-t border-theme-border theme-transition overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 lg:mb-20 reveal">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
            04 / Delivery Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight theme-transition">
            Transparent, milestone-based execution.
          </h2>
          <p className="mt-4 text-theme-muted max-w-2xl text-base sm:text-lg">
            We operate with full technical transparency — delivering working
            code to live staging environments at every sprint checkpoint.
          </p>
        </div>

        {/* ================================================================= */}
        {/* DESKTOP LAYOUT: 4-Step Curved Journey Diagram (>= 1024px)        */}
        {/* ================================================================= */}
        <div
          ref={containerRef}
          className="hidden lg:block relative min-h-[740px] select-none"
        >
          {/* Background SVG Layer for Connected Arcs and Wave Transitions */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox={`0 0 ${geometry.width} ${geometry.height}`}
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <filter id="arc-glow" x="-25%" y="-25%" width="150%" height="150%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connecting S-Curve Tracks Between Consecutive Steps */}
            {arcData.map((d, i) => {
              if (!d.connector) return null;
              const isConnectorActive =
                hoveredIndex === i || hoveredIndex === i + 1;
              const strokeColor = isConnectorActive
                ? isDark
                  ? ARC_COLORS.activeDark
                  : ARC_COLORS.active
                : isDark
                ? "rgba(165, 176, 194, 0.22)"
                : "rgba(15, 28, 47, 0.2)";

              return (
                <path
                  key={`connector-${i}`}
                  d={d.connector}
                  stroke={strokeColor}
                  strokeWidth={isConnectorActive ? 3.5 : 2}
                  strokeLinecap="round"
                  strokeDasharray={isConnectorActive ? "6 6" : "5 5"}
                  className="transition-all duration-300"
                  style={{
                    animation: isConnectorActive
                      ? "dashFlow 1.2s linear infinite"
                      : "none"
                  }}
                />
              );
            })}

            {/* Vertical Guide Stems Linking Cards to Nodes */}
            {arcData.map((d, i) => {
              if (!d.stem) return null;
              const isHovered = hoveredIndex === i;
              return (
                <line
                  key={`stem-${i}`}
                  x1={d.stem.x1}
                  y1={d.stem.y1}
                  x2={d.stem.x2}
                  y2={d.stem.y2}
                  stroke={
                    isHovered
                      ? isDark
                        ? ARC_COLORS.activeDark
                        : ARC_COLORS.active
                      : isDark
                      ? "rgba(165, 176, 194, 0.25)"
                      : "rgba(15, 28, 47, 0.2)"
                  }
                  strokeWidth={isHovered ? 2 : 1.5}
                  strokeDasharray="4 4"
                  className="transition-all duration-300"
                />
              );
            })}

            {/* Prominent Curved Arc Collars Hugging Each Node */}
            {arcData.map((d, i) => {
              const isHovered = hoveredIndex === i;
              const baseColor = isDark
                ? ARC_COLORS.defaultDark[i]
                : ARC_COLORS.default[i];
              const activeColor = isDark
                ? ARC_COLORS.activeDark
                : ARC_COLORS.active;
              const strokeColor = isHovered ? activeColor : baseColor;

              return (
                <path
                  key={`arc-${i}`}
                  d={d.arc}
                  stroke={strokeColor}
                  strokeWidth={isHovered ? 13 : 10}
                  strokeLinecap="round"
                  filter={isHovered ? "url(#arc-glow)" : undefined}
                  className="transition-all duration-300 ease-out"
                />
              );
            })}
          </svg>

          {/* Interactive Grid: 4 Columns with alternating cards and center nodes */}
          <div className="relative z-10 grid grid-cols-4 gap-6 items-center min-h-[740px]">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0; // 0, 2: Card BELOW node. 1, 3: Card ABOVE node.
              const isHovered = hoveredIndex === i;

              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center justify-between h-[740px] py-2"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* UPPER SLOT: Card (steps 1, 3) or breathing space (steps 0, 2) */}
                  <div className="w-full flex items-start justify-center h-[280px]">
                    {!isEven ? (
                      <article
                        tabIndex={0}
                        aria-label={`${step.number}: ${step.title}`}
                        onFocus={() => setHoveredIndex(i)}
                        onBlur={() => setHoveredIndex(null)}
                        className={`journey-step-card w-full max-w-[285px] h-[270px] group ${
                          isHovered ? "active-journey-card" : ""
                        }`}
                      >
                        <div className="journey-card-body">
                          <div className="discipline-tag mb-2.5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span
                                className={`discipline-tag-circle ${
                                  isHovered ? "scale-125" : ""
                                }`}
                              />
                              <span className="font-mono text-xs font-semibold">
                                {step.number}
                              </span>
                            </div>
                            <span className="journey-badge font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full">
                              {step.badge}
                            </span>
                          </div>
                          <h3 className="journey-title text-[18px] font-bold leading-snug mb-1.5">
                            {step.title}
                          </h3>
                          <p className="journey-desc text-[12.5px] leading-relaxed text-theme-muted">
                            {step.description}
                          </p>
                        </div>
                        <div className="journey-card-bottom mt-auto pt-3">
                          <div className="capability-pills mb-3 flex flex-wrap gap-1.5">
                            {step.pills.map((pill) => (
                              <span key={pill} className="capability-pill">
                                {pill}
                              </span>
                            ))}
                          </div>
                          <div className="capability-footer pt-2.5 border-t border-theme-border/60 flex items-center justify-between">
                            <span className="text-xs font-semibold">
                              {step.footer}
                            </span>
                            <div className="capability-btn">
                              <ArrowRight size={13} />
                            </div>
                          </div>
                        </div>
                      </article>
                    ) : (
                      <div className="h-full w-full" />
                    )}
                  </div>

                  {/* CENTER SLOT: Circular Icon Node */}
                  <div
                    ref={(el) => {
                      nodeRefs.current[i] = el;
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Node ${step.number}: ${step.title}`}
                    onFocus={() => setHoveredIndex(i)}
                    onBlur={() => setHoveredIndex(null)}
                    className="relative my-auto cursor-pointer focus:outline-none"
                  >
                    <div
                      className={`relative w-[78px] h-[78px] rounded-full flex items-center justify-center transition-all duration-300 ease-out bg-theme-surface border ${
                        isHovered
                          ? "border-theme-accent scale-110 shadow-xl shadow-orange-500/20"
                          : "border-theme-border shadow-md"
                      }`}
                    >
                      {/* Step Number Dot indicator */}
                      <span
                        className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-300 ${
                          isHovered
                            ? "bg-theme-accent text-white scale-110 shadow-sm"
                            : "bg-theme-bg text-theme-muted border border-theme-border"
                        }`}
                      >
                        0{i + 1}
                      </span>

                      {/* Icon */}
                      <Icon
                        size={28}
                        weight={isHovered ? "bold" : "regular"}
                        className={`transition-all duration-300 ${
                          isHovered
                            ? "text-theme-accent scale-110"
                            : "text-theme-text"
                        }`}
                      />
                    </div>
                  </div>

                  {/* LOWER SLOT: Card (steps 0, 2) or breathing space (steps 1, 3) */}
                  <div className="w-full flex items-end justify-center h-[280px]">
                    {isEven ? (
                      <article
                        tabIndex={0}
                        aria-label={`${step.number}: ${step.title}`}
                        onFocus={() => setHoveredIndex(i)}
                        onBlur={() => setHoveredIndex(null)}
                        className={`journey-step-card w-full max-w-[285px] h-[270px] group ${
                          isHovered ? "active-journey-card" : ""
                        }`}
                      >
                        <div className="journey-card-body">
                          <div className="discipline-tag mb-2.5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span
                                className={`discipline-tag-circle ${
                                  isHovered ? "scale-125" : ""
                                }`}
                              />
                              <span className="font-mono text-xs font-semibold">
                                {step.number}
                              </span>
                            </div>
                            <span className="journey-badge font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full">
                              {step.badge}
                            </span>
                          </div>
                          <h3 className="journey-title text-[18px] font-bold leading-snug mb-1.5">
                            {step.title}
                          </h3>
                          <p className="journey-desc text-[12.5px] leading-relaxed text-theme-muted">
                            {step.description}
                          </p>
                        </div>
                        <div className="journey-card-bottom mt-auto pt-3">
                          <div className="capability-pills mb-3 flex flex-wrap gap-1.5">
                            {step.pills.map((pill) => (
                              <span key={pill} className="capability-pill">
                                {pill}
                              </span>
                            ))}
                          </div>
                          <div className="capability-footer pt-2.5 border-t border-theme-border/60 flex items-center justify-between">
                            <span className="text-xs font-semibold">
                              {step.footer}
                            </span>
                            <div className="capability-btn">
                              <ArrowRight size={13} />
                            </div>
                          </div>
                        </div>
                      </article>
                    ) : (
                      <div className="h-full w-full" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================================================================= */}
        {/* MOBILE & TABLET LAYOUT: Vertical Timeline (< 1024px)              */}
        {/* ================================================================= */}
        <div className="block lg:hidden relative mt-8">
          <div className="relative pl-6 sm:pl-10 space-y-8 sm:space-y-10">
            {/* Continuous Vertical Connecting Spine Line */}
            <div
              className="absolute left-[33px] sm:left-[45px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-theme-accent/60 via-theme-border to-theme-accent/80 -translate-x-1/2"
              aria-hidden="true"
            />

            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isHovered = hoveredIndex === i;

              return (
                <div
                  key={step.number}
                  className="relative flex items-start gap-4 sm:gap-6 group"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Vertical Node Indicator */}
                  <div className="relative z-10 flex-shrink-0 pt-2">
                    <div
                      className={`w-[52px] h-[52px] sm:w-[62px] sm:h-[62px] rounded-full flex items-center justify-center bg-theme-surface border transition-all duration-300 ${
                        isHovered
                          ? "border-theme-accent scale-105 shadow-lg shadow-orange-500/20"
                          : "border-theme-border shadow-sm"
                      }`}
                    >
                      <Icon
                        size={22}
                        weight={isHovered ? "bold" : "regular"}
                        className={`transition-colors duration-200 ${
                          isHovered
                            ? "text-theme-accent"
                            : "text-theme-text"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Step Content Card */}
                  <article
                    className={`journey-step-card flex-1 min-h-[250px] transition-all duration-300 ${
                      isHovered ? "active-journey-card" : ""
                    }`}
                  >
                    <div>
                      <div className="discipline-tag mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="discipline-tag-circle" />
                          <span className="font-mono text-xs font-semibold">
                            {step.number}
                          </span>
                        </div>
                        <span className="journey-badge font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full">
                          {step.badge}
                        </span>
                      </div>
                      <h3 className="journey-title text-lg sm:text-xl font-bold mb-2">
                        {step.title}
                      </h3>
                      <p className="journey-desc text-xs sm:text-sm leading-relaxed mb-4 text-theme-muted">
                        {step.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="capability-pills mb-4 flex flex-wrap gap-1.5">
                        {step.pills.map((pill) => (
                          <span key={pill} className="capability-pill">
                            {pill}
                          </span>
                        ))}
                      </div>
                      <div className="capability-footer pt-3 border-t border-theme-border/60 flex items-center justify-between">
                        <span className="text-xs font-semibold">{step.footer}</span>
                        <div className="capability-btn">
                          <ArrowRight size={13} />
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scoped CSS styles matching the OJIX Design Language */}
      <style jsx>{`
        @keyframes dashFlow {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -24;
          }
        }

        .journey-step-card {
          background-color: var(--surface, #ffffff);
          border: 1px solid rgba(15, 28, 47, 0.12);
          border-radius: 20px;
          padding: 22px 20px 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          box-shadow: 0 4px 24px -2px rgba(15, 28, 47, 0.04);
          transition: background-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          box-sizing: border-box;
        }

        :global(html[data-theme="dark"]) .journey-step-card {
          background-color: #0d1420;
          border-color: #1a273b;
        }

        .journey-badge {
          background-color: var(--hover, #f0ebe4);
          border: 1px solid var(--border, #e2dad0);
          color: var(--muted, #5a687c);
        }

        :global(html[data-theme="dark"]) .journey-badge {
          background-color: #172338;
          border-color: #24354f;
          color: #a5b0c2;
        }

        .journey-title {
          color: var(--text, #0f1c2f);
          transition: color 0.35s ease;
        }

        :global(html[data-theme="dark"]) .journey-title {
          color: #f8fafc;
        }

        .journey-desc {
          transition: color 0.35s ease;
        }

        /* Coordinated Card Hover State matching OJIX Signature Midnight Card */
        :global(.active-journey-card) {
          background-color: #0f1c2f !important;
          border-color: #0f1c2f !important;
          transform: translateY(-4px);
          box-shadow: 0 25px 50px -12px rgba(15, 28, 47, 0.35) !important;
        }

        :global(.active-journey-card .discipline-tag) {
          color: #ffffff !important;
        }

        :global(.active-journey-card .journey-badge) {
          background-color: rgba(255, 255, 255, 0.12) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          color: #f1f5f9 !important;
        }

        :global(.active-journey-card .journey-title) {
          color: #ffffff !important;
        }

        :global(.active-journey-card .journey-desc) {
          color: #cbd5e1 !important;
        }

        :global(.active-journey-card .capability-pill) {
          background: rgba(255, 255, 255, 0.1) !important;
          color: #f1f5f9 !important;
          border-color: rgba(255, 255, 255, 0.18) !important;
        }

        :global(.active-journey-card .capability-footer) {
          border-top-color: rgba(255, 255, 255, 0.15) !important;
        }

        :global(.active-journey-card .capability-footer span) {
          color: var(--accent-color, #c9662f) !important;
        }

        :global(.active-journey-card .capability-btn) {
          background: var(--accent-color, #c9662f) !important;
          border-color: var(--accent-color, #c9662f) !important;
          color: #ffffff !important;
          transform: scale(1.06);
          box-shadow: 0 4px 12px rgba(201, 102, 47, 0.4);
        }

        :global(html[data-theme="dark"] .active-journey-card) {
          background-color: #070b12 !important;
          border-color: rgba(201, 102, 47, 0.5) !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.75), 0 0 25px rgba(201, 102, 47, 0.2) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .journey-step-card,
          :global(.active-journey-card) {
            transform: none !important;
            transition: none !important;
          }
          path {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
