import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle, ShieldCheck, Cpu, HardDrives, ChartLineUp, Users, CaretRight } from "@phosphor-icons/react/dist/ssr";

const principles = [
  {
    tag: "RELIABILITY",
    title: "Production Reliability",
    summary: "We build for Tuesday at 3pm, not just the sales pitch.",
    desc: "Real customers, peak load, network drops, and imperfect data shape the way we architect systems. We test for operational resilience from sprint one.",
    icon: ShieldCheck,
    pills: ["Zero Fluff", "Observable", "Fault Tolerant"]
  },
  {
    tag: "EXPERTISE",
    title: "Dedicated In-House Builders",
    summary: "The people you talk to are the people who build your software.",
    desc: "No sales layer. No outsourced third parties. Your database schemas, APIs, and infrastructure are built directly by our unified in-house engineering team.",
    icon: Cpu,
    pills: ["Direct Dialogue", "In-House Team", "Zero Outsourcing"]
  },
  {
    tag: "FREEDOM",
    title: "100% IP & Code Ownership",
    summary: "Your repositories. Your cloud. Your software forever.",
    desc: "You own 100% of the code, cloud credentials, schemas, and assets from day one. Zero proprietary lock-in. Full handover documentation provided.",
    icon: HardDrives,
    pills: ["Root Access", "Open Standards", "Zero Lock-in"]
  },
  {
    tag: "MOMENTUM",
    title: "Outcome-Driven Sprints",
    summary: "Demonstrable software, not hours logged.",
    desc: "Every two weeks, you review live staging links running real modules. Progress is measured by working software and shipped features.",
    icon: ChartLineUp,
    pills: ["Weekly Ships", "Live Staging", "Clear Milestones"]
  }
];

const stats = [
  { val: "99.99%", label: "Reliability-Minded", desc: "Production-grade uptime focus" },
  { val: "100%", label: "Code & IP Ownership", desc: "Yours to keep and run forever" },
  { val: "25+", label: "Completed Projects", desc: "Custom systems shipped live" },
  { val: "30+", label: "Engineers & Builders", desc: "Specialized domain builders" },
];

const partnershipModels = [
  {
    name: "Dedicated Sprint Pod",
    kicker: "PRODUCT VELOCITY",
    desc: "A dedicated squad of product engineers embedded into your business to architect and ship core features sprint by sprint.",
    pills: ["Full-Stack Squad", "Bi-Weekly Demos", "Continuous CI/CD"],
    action: "Discuss Sprint Pod"
  },
  {
    name: "Architecture & AI Modernization",
    kicker: "SYSTEM OVERHAUL",
    desc: "Targeted refactoring of slow legacy codebases, schema tuning, performance bottlenecks, and private enterprise AI integration.",
    pills: ["Database Tuning", "Private AI Pipelines", "Cloud Migration"],
    action: "Discuss Modernization"
  },
  {
    name: "Fractional CTO & Advisory",
    kicker: "STRATEGIC LEADERSHIP",
    desc: "Comprehensive architectural oversight, technical hiring audits, cloud cost reductions, and deep compliance advisory for scaling teams.",
    pills: ["Architecture Audits", "Cost Optimization", "SOC 2 / DPDP"],
    action: "Discuss Advisory"
  }
];

const faqs = [
  {
    q: "How does OJIX differ from traditional software agencies?",
    a: "You work directly with the dedicated engineering team who shape the architecture, write the code, and manage cloud deployment. There are zero account managers, zero sales fluff, and zero third-party handoffs. We ship working code in clear bi-weekly milestones."
  },
  {
    q: "Who owns the code, intellectual property, and infrastructure?",
    a: "You own 100% of everything from day one. Repositories, database schemas, and intellectual property are yours forever. Infrastructure is provisioned in your own cloud account (AWS, GCP, etc.)."
  },
  {
    q: "What does your technology stack look like?",
    a: "We choose industry-standard, high-performance tools: React 19, Next.js, TypeScript, PostgreSQL, Redis, Python, FastAPI, Docker, and modern cloud primitives. Everything is clean, modern, and documented for painless team handover."
  },
  {
    q: "How fast can OJIX kick off a project?",
    a: "Following a technical discovery conversation, we deliver an architectural blueprint and milestone plan within days. Sprints typically begin within one to two weeks."
  },
  {
    q: "Can OJIX collaborate with our in-house engineering team?",
    a: "Yes. We frequently embed with client engineering teams, establish robust CI/CD, conduct code reviews, and pair on complex modules before handing over complete operational control."
  },
  {
    q: "How do you handle scope adjustments during a build?",
    a: "We work in agile two-week iterations. If business priorities evolve, we review technical trade-offs openly and re-prioritize the sprint backlog together without bureaucratic red tape."
  }
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6 bg-theme-bg relative overflow-hidden theme-transition border-b border-theme-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none rounded-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl hero-reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              ABOUT OJIX · THE STUDIO
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.06] mb-6 text-theme-text theme-transition">
              Built with intent.<br />
              <span className="text-theme-accent">Not assembled.</span>
            </h1>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed mb-8 theme-transition">
              OJIX is an independent software product studio based in Bengaluru, India. We engineer custom web platforms, native mobile applications, production AI systems, and cloud infrastructure for ambitious businesses worldwide. One cohesive in-house team. No handoffs.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-theme-text text-theme-surface px-7 py-3.5 rounded-xl font-bold hover:bg-theme-accent hover:text-white transition-colors shadow-sm"
              >
                Meet your engineering team <ArrowUpRight size={18} />
              </Link>
              <Link
                href="#manifesto"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-theme-border text-theme-text px-7 py-3.5 rounded-xl font-bold hover:border-theme-text theme-transition"
              >
                Our Manifesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Origin & Comparison Section */}
      <section className="py-24 md:py-32 px-6 bg-theme-surface/30 theme-transition border-b border-theme-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              THE STUDIO ORIGIN
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition leading-[1.15] mb-6">
              Why traditional software outsourcing is broken.
            </h2>
            <p className="text-base sm:text-lg text-theme-muted max-w-3xl leading-relaxed theme-transition">
              For decades, agencies have operated on the same model: pitch with flashy sales presentations, then quietly delegate execution to outsourced vendors or disconnected sub-teams. We built OJIX to be the exact opposite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Old Way Card */}
            <div className="bg-theme-bg/60 border border-theme-border/80 rounded-2xl p-8 sm:p-10 transition-all duration-300">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 font-mono text-xs font-bold uppercase tracking-wider mb-6">
                <span>✕</span> The Traditional Agency
              </div>
              <h3 className="text-2xl font-bold text-theme-text theme-transition mb-4">
                Sales teams pitch.<br />
                <span className="opacity-60">Outsourced vendors build.</span>
              </h3>
              <p className="text-sm text-theme-muted leading-relaxed mb-6">
                Communication is filtered through layers of non-technical account managers. Hourly billing penalizes efficiency. Code is assembled from hasty templates and held behind proprietary frameworks.
              </p>
              <div className="space-y-3 pt-4 border-t border-theme-border/60 text-xs font-mono text-theme-muted">
                <div className="flex items-center gap-2">✕ Endless ticketing bureaucracy</div>
                <div className="flex items-center gap-2">✕ Brittle code requiring costly rewrites</div>
                <div className="flex items-center gap-2">✕ Zero transparency into real progress</div>
              </div>
            </div>

            {/* The OJIX Way Card */}
            <div className="bg-theme-surface border-2 border-theme-accent/40 rounded-2xl p-8 sm:p-10 transition-all duration-300 shadow-soft relative overflow-hidden group hover:border-theme-accent">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -z-10" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-accent/15 text-theme-accent font-mono text-xs font-bold uppercase tracking-wider mb-6">
                <CheckCircle size={14} weight="bold" /> The OJIX Studio
              </div>
              <h3 className="text-2xl font-bold text-theme-text theme-transition mb-4">
                In-house builders only.<br />
                <span className="text-theme-accent">Direct technical dialogue.</span>
              </h3>
              <p className="text-sm text-theme-muted leading-relaxed mb-6">
                Direct architect access with zero sales fluff. Production-grade code written for actual operating conditions. Bi-weekly working staging links, and 100% intellectual property transfer from day one.
              </p>
              <div className="space-y-3 pt-4 border-t border-theme-border/60 text-xs font-mono text-theme-text font-semibold">
                <div className="flex items-center gap-2 text-theme-accent">✓ Direct access to your engineering team</div>
                <div className="flex items-center gap-2 text-theme-accent">✓ 100% repository & infrastructure ownership</div>
                <div className="flex items-center gap-2 text-theme-accent">✓ Value-driven bi-weekly sprint milestones</div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {stats.map((st) => (
              <div
                key={st.label}
                className="bg-theme-surface border border-theme-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-theme-accent/60 shadow-sm"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-theme-accent tracking-tight mb-2">
                  {st.val}
                </div>
                <div className="text-sm font-bold text-theme-text theme-transition">
                  {st.label}
                </div>
                <div className="text-xs text-theme-muted mt-1">
                  {st.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto / Principles Section */}
      <section id="manifesto" className="py-24 md:py-32 px-6 bg-theme-bg theme-transition border-b border-theme-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              OUR MANIFESTO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
              Four non-negotiable standards.
            </h2>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
              The rules that govern every architecture decision, schema migration, and pull request at OJIX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="product-card group"
                >
                  <div>
                    <div className="discipline-tag mb-5">
                      <span className="discipline-tag-circle" />
                      <span>{p.tag}</span>
                    </div>
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="product-icon-wrap">
                        <Icon size={22} />
                      </div>
                      <h3 className="product-title text-xl sm:text-2xl">
                        {p.title}
                      </h3>
                    </div>
                    <p className="product-desc mb-2 font-medium">
                      {p.summary}
                    </p>
                    <p className="product-desc">
                      {p.desc}
                    </p>
                  </div>
                  <div className="product-pills">
                    {p.pills.map((pill) => (
                      <span
                        key={pill}
                        className="product-pill"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                  <div className="product-footer">
                    <span>Engineering standard</span>
                    <div className="product-btn">
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Models Section */}
      <section className="py-24 md:py-32 px-6 bg-theme-surface/30 theme-transition border-b border-theme-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              ENGAGEMENT MODELS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
              How we work together.
            </h2>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
              Transparent, milestone-based models tailored to the exact stage and complexity of your product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {partnershipModels.map((m, i) => (
              <Link
                key={m.name}
                href="/contact"
                className="product-card group"
              >
                <div>
                  <div className="discipline-tag mb-5">
                    <span className="discipline-tag-circle" />
                    <span>0{i + 1} / {m.kicker}</span>
                  </div>
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="product-icon-wrap">
                      <Users size={22} />
                    </div>
                    <h3 className="product-title text-xl sm:text-2xl">
                      {m.name}
                    </h3>
                  </div>
                  <p className="product-desc">
                    {m.desc}
                  </p>
                </div>
                <div className="product-pills">
                  {m.pills.map((pill) => (
                    <span
                      key={pill}
                      className="product-pill"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                <div className="product-footer">
                  <span>{m.action}</span>
                  <div className="product-btn">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 px-6 bg-theme-bg theme-transition border-b border-theme-border">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 text-center reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              05 / TRANSPARENCY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
              Frequently asked questions.
            </h2>
            <p className="text-base text-theme-muted">
              Direct answers on engineering standards, intellectual property, and sprint cadences.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                className="group bg-theme-surface border border-theme-border rounded-xl p-6 transition-all duration-200 hover:border-theme-accent/60 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none text-base sm:text-lg font-bold text-theme-text theme-transition">
                  <span>{f.q}</span>
                  <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-theme-bg border border-theme-border grid place-items-center text-theme-accent transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm text-theme-muted leading-relaxed pt-3 border-t border-theme-border/50">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-24 md:py-32 px-6 bg-theme-surface/30 theme-transition">
        <div className="max-w-5xl mx-auto bg-theme-surface border-2 border-theme-border rounded-3xl p-10 md:p-16 text-center shadow-soft relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
            READY WHEN YOU ARE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition mb-6">
            Talk directly to the engineers who build it.
          </h2>
          <p className="text-base sm:text-lg text-theme-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Get an honest, technical perspective on your architecture and sprint roadmap. Zero sales fluff.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-theme-accent text-white px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-sm"
            >
              Start a project <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/919008877883"
              className="inline-flex items-center gap-2 bg-theme-bg border border-theme-border text-theme-text px-8 py-4 rounded-xl font-bold hover:border-theme-accent transition-colors"
            >
              WhatsApp an engineer
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
