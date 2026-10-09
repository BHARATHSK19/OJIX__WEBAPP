import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { products } from "@/lib/content";

export function generateStaticParams() {
  return products.map((x) => ({ slug: x.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6 bg-theme-bg relative overflow-hidden theme-transition border-b border-theme-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none rounded-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-theme-muted hover:text-theme-accent transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Back to Products
          </Link>
          <div className="max-w-3xl hero-reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              PRODUCT SUITE · {p.category}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-theme-text theme-transition">
              {p.name}<br />
              <span className="text-theme-accent">{p.headline}</span>
            </h1>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed mb-8 theme-transition">
              {p.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-theme-text text-theme-surface px-7 py-3.5 rounded-xl font-bold hover:bg-theme-accent hover:text-white transition-colors shadow-sm"
              >
                Enquire about {p.name} <ArrowUpRight size={18} />
              </Link>
              <a
                href="https://wa.me/919008877883"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-theme-border text-theme-text px-7 py-3.5 rounded-xl font-bold hover:border-theme-text theme-transition"
              >
                WhatsApp
              </a>
            </div>

            {/* Metrics highlight */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-theme-border/60">
              {p.metrics.map(([val, label]) => (
                <div key={val} className="bg-theme-surface border border-theme-border rounded-xl p-4 shadow-sm">
                  <div className="text-xl sm:text-2xl font-extrabold text-theme-accent tracking-tight mb-1">{val}</div>
                  <div className="text-xs text-theme-muted font-medium">{label}</div>
                </div>
              ))}
              <div className="bg-theme-surface border border-theme-border rounded-xl p-4 shadow-sm">
                <div className="text-xl sm:text-2xl font-extrabold text-theme-accent tracking-tight mb-1">100%</div>
                <div className="text-xs text-theme-muted font-medium">Private Data Isolation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Product — Dual Cards */}
      <section className="py-24 md:py-32 px-6 bg-theme-surface/30 theme-transition border-b border-theme-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              OPERATIONAL IMPACT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
              Why teams deploy {p.name}.
            </h2>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
              Designed to help teams move with calm confidence: reduce manual drag, keep critical information connected, and automate edge cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-theme-bg/60 border border-theme-border/80 rounded-2xl p-8 sm:p-10 transition-all duration-300">
              <div className="flex items-center gap-2 text-red-500 font-mono text-xs font-bold uppercase tracking-wider mb-5">
                <WarningCircle size={16} /> The Operational Friction
              </div>
              <h3 className="text-2xl font-bold text-theme-text theme-transition mb-4">
                Fragmented tools & manual human bottlenecks.
              </h3>
              <p className="text-sm text-theme-muted leading-relaxed mb-6">
                When operational data is scattered across spreadsheets, chat apps, and legacy software, human error multiplies, customer requests stall, and compliance oversight becomes impossible.
              </p>
              <div className="space-y-2.5 pt-4 border-t border-theme-border/60 text-xs font-mono text-theme-muted">
                <div>✕ High latency in case handling and verification</div>
                <div>✕ Missing audit trails and security blind spots</div>
                <div>✕ Inability to scale without ballooning headcount</div>
              </div>
            </div>

            <div className="bg-theme-surface border-2 border-theme-accent/40 rounded-2xl p-8 sm:p-10 transition-all duration-300 shadow-soft relative overflow-hidden group hover:border-theme-accent">
              <div className="flex items-center gap-2 text-theme-accent font-mono text-xs font-bold uppercase tracking-wider mb-5">
                <CheckCircle size={16} weight="bold" /> The {p.name} Advantage
              </div>
              <h3 className="text-2xl font-bold text-theme-text theme-transition mb-4">
                Connected, observable & automated operations.
              </h3>
              <p className="text-sm text-theme-muted leading-relaxed mb-6">
                {p.name} unifies your core processes with real-time dashboards, automated permission workflows, and intelligent assistance engineered specifically for institutional resilience.
              </p>
              <div className="space-y-2.5 pt-4 border-t border-theme-border/60 text-xs font-mono text-theme-text font-semibold">
                <div className="text-theme-accent">✓ Real-time status sync across all team roles</div>
                <div className="text-theme-accent">✓ Encrypted logs and immutable audit compliance</div>
                <div className="text-theme-accent">✓ Enterprise cloud deployment in your private tenant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Benefits — Responsive Cards */}
      <section className="py-24 md:py-32 px-6 bg-theme-bg theme-transition border-b border-theme-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              CAPABILITIES & BENEFITS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
              What {p.name} enables for your business.
            </h2>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
              Every capability is engineered for reliability, security, and immediate operational speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {p.benefits.map((benefit) => (
              <div
                key={benefit}
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
                      {benefit}
                    </h3>
                  </div>
                  <p className="product-desc">
                    Designed for production scale with continuous monitoring, automated backups, and complete administrative control.
                  </p>
                </div>
                <div className="product-pills">
                  <span className="product-pill">Built-in Suite</span>
                  <span className="product-pill">Production Grade</span>
                </div>
                <div className="product-footer">
                  <span>Included in suite</span>
                  <div className="product-btn">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Architecture Section */}
      <section className="py-24 md:py-32 px-6 bg-theme-surface/30 theme-transition border-b border-theme-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              FOUNDATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
              Built on foundations your team can trust.
            </h2>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
              Engineered with zero vendor lock-in. Deployed with private database instances and enterprise VPC standards.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {p.tech.map((t) => (
              <div
                key={t}
                className="bg-theme-surface border border-theme-border px-5 py-3 rounded-xl font-mono text-sm text-theme-text font-bold shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-theme-accent hover:text-theme-accent"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
