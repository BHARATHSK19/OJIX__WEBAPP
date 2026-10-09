import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle, WarningCircle, Compass, Cpu, ChartLineUp, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { services, methodology } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

const methodDescriptions = [
  "Map the operational friction, define data flows, and agree on a realistic software blueprint.",
  "Architect user screens, database schemas, security permissions, and private cloud VPCs.",
  "Test real, working modules on private staging deployments every two weeks with live feedback.",
  "Deploy to production live, run verification checks, and hand over 100% of code, passwords, and IP."
];

const methodIcons = [Compass, Cpu, ChartLineUp, ShieldCheck];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6 bg-theme-bg relative overflow-hidden theme-transition border-b border-theme-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none rounded-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#what-we-build"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-theme-muted hover:text-theme-accent transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Back to Disciplines
          </Link>
          <div className="max-w-3xl hero-reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              DISCIPLINE · {s.kicker}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-theme-text theme-transition">
              {s.title}
            </h1>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed mb-8 theme-transition">
              {s.intro}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-theme-text text-theme-surface px-7 py-3.5 rounded-xl font-bold hover:bg-theme-accent hover:text-white transition-colors shadow-sm"
              >
                Discuss your project <ArrowUpRight size={18} />
              </Link>
              <a
                href="https://wa.me/919008877883"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-theme-border text-theme-text px-7 py-3.5 rounded-xl font-bold hover:border-theme-text theme-transition"
              >
                WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-theme-border/60 text-xs font-mono text-theme-muted">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-theme-accent" /> MSME REGISTERED STUDIO
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-theme-accent" /> 100% CODE & IP OWNERSHIP
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-theme-accent" /> DIRECT IN-HOUSE BUILDERS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The Dilemma vs The Solution */}
      <section className="py-24 md:py-32 px-6 bg-theme-surface/30 theme-transition border-b border-theme-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              THE ARCHITECTURAL PERSPECTIVE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
              Why off-the-shelf shortcuts fall short.
            </h2>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
              Rigid SaaS tools, brittle low-code glue, and generic templates struggle under peak operating demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-theme-bg/60 border border-theme-border/80 rounded-2xl p-8 sm:p-10 transition-all duration-300">
              <div className="flex items-center gap-2 text-red-500 font-mono text-xs font-bold uppercase tracking-wider mb-5">
                <WarningCircle size={16} /> The Common Headache
              </div>
              <h3 className="text-2xl font-bold text-theme-text theme-transition mb-4">
                Patchwork tools that don&apos;t fit your workflows.
              </h3>
              <p className="text-sm text-theme-muted leading-relaxed mb-6">
                Most companies begin with SaaS tools stitched together with fragile scripts. Over time, latency spikes, synchronization fails, subscription bills skyrocket, and your team is trapped in proprietary limitations.
              </p>
              <div className="space-y-2.5 pt-4 border-t border-theme-border/60 text-xs font-mono text-theme-muted">
                <div>✕ Recurring vendor lock-in & seat licenses</div>
                <div>✕ Data silos and sync lag between departments</div>
                <div>✕ Slow performance under unexpected peak traffic</div>
              </div>
            </div>

            <div className="bg-theme-surface border-2 border-theme-accent/40 rounded-2xl p-8 sm:p-10 transition-all duration-300 shadow-soft relative overflow-hidden group hover:border-theme-accent">
              <div className="flex items-center gap-2 text-theme-accent font-mono text-xs font-bold uppercase tracking-wider mb-5">
                <CheckCircle size={16} weight="bold" /> The OJIX Engineering Standard
              </div>
              <h3 className="text-2xl font-bold text-theme-text theme-transition mb-4">
                Purpose-built software you own forever.
              </h3>
              <p className="text-sm text-theme-muted leading-relaxed mb-6">
                We engineer tailor-made platforms designed precisely around your operational rules. Zero compromise on data schemas, role permissions, or speed. Scalable, secure, and fully owned by your company.
              </p>
              <div className="space-y-2.5 pt-4 border-t border-theme-border/60 text-xs font-mono text-theme-text font-semibold">
                <div className="text-theme-accent">✓ Custom architecture matched to your exact business logic</div>
                <div className="text-theme-accent">✓ High-throughput database indexes & instant caching</div>
                <div className="text-theme-accent">✓ Full source code & root cloud infrastructure handover</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver — Responsive Cards */}
      <section className="py-24 md:py-32 px-6 bg-theme-bg theme-transition border-b border-theme-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              SCOPE & DELIVERABLES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
              What we build for {s.name}.
            </h2>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
              Every deliverable is engineered for production reliability, full test coverage, and long-term maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {s.features.map((feature, i) => (
              <div
                key={feature}
                className="product-card group"
              >
                <div>
                  <div className="discipline-tag mb-5">

                  </div>
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="product-icon-wrap">
                      <CheckCircle size={22} weight="bold" />
                    </div>
                    <h3 className="product-title text-xl sm:text-2xl">
                      {feature}
                    </h3>
                  </div>
                  <p className="product-desc">
                    Production-grade implementation with complete unit testing, documented APIs, and seamless handover to your team.
                  </p>
                </div>
                <div className="product-pills">
                  <span className="product-pill">Production Ready</span>
                  <span className="product-pill">100% Code Ownership</span>
                </div>
                <div className="product-footer">
                  <span>Verified milestone</span>
                  <div className="product-btn">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 md:py-32 px-6 bg-theme-surface/30 theme-transition border-b border-theme-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              STACK & TOOLING
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
              Modern, battle-tested technologies.
            </h2>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
              We choose tools that maximize developer velocity without sacrificing runtime performance or security.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {s.stack.map((tech) => (
              <div
                key={tech}
                className="bg-theme-surface border border-theme-border px-5 py-3 rounded-xl font-mono text-sm text-theme-text font-bold shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-theme-accent hover:text-theme-accent"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Methodology */}
      <section className="py-24 md:py-32 px-6 bg-theme-bg theme-transition border-b border-theme-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              DELIVERY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
              Transparent, milestone-based execution.
            </h2>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
              We operate with full technical transparency — delivering working code to live staging environments at every sprint checkpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((step, i) => {
              const Icon = methodIcons[i];
              return (
                <div
                  key={step}
                  className="product-card group"
                >
                  <div>
                    <div className="discipline-tag mb-5">


                    </div>
                    <div className="flex items-center gap-3.5 mb-3">
                      <div className="product-icon-wrap">
                        <Icon size={22} />
                      </div>
                      <h3 className="product-title text-xl sm:text-2xl">
                        {step}
                      </h3>
                    </div>
                    <p className="product-desc">
                      {methodDescriptions[i]}
                    </p>
                  </div>
                  <div className="product-pills">
                    <span className="product-pill">{i === 3 ? "Launch Ready" : "Sprint Checkpoint"}</span>
                    <span className="product-pill">{i === 3 ? "Complete Handover" : "Live Staging"}</span>
                  </div>
                  <div className="product-footer">
                    <span>{i === 3 ? "Ready for launch" : `Next: Step 0${i + 2}`}</span>
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

    </>
  );
}
