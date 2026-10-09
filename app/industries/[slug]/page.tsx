import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  ShieldCheck,
  Cpu,
} from "@phosphor-icons/react/dist/ssr";
import { industries } from "@/lib/content";
import { industryData } from "../industryData";

export function generateStaticParams() {
  return industries.map((x) => ({ slug: x.slug }));
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = industries.find((x) => x.slug === slug);
  if (!ind) notFound();

  const data = industryData[slug];
  if (!data) notFound();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6 bg-theme-bg relative overflow-hidden theme-transition border-b border-theme-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none rounded-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-theme-muted hover:text-theme-accent transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Back to Industries
          </Link>
          <div className="max-w-3xl hero-reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              INDUSTRY FOCUS · {ind.name.toUpperCase()}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-theme-text theme-transition">
              {ind.name} systems<br />
              <span className="text-theme-accent">built for the work.</span>
            </h1>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed mb-8 theme-transition">
              {ind.brief} We combine practical domain understanding with dedicated product engineering to make complex operational workflows clearer, faster, and more dependable.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-theme-text text-theme-surface px-7 py-3.5 rounded-xl font-bold hover:bg-theme-accent hover:text-white transition-colors shadow-sm"
              >
                Talk through your use case <ArrowUpRight size={18} />
              </Link>
              <a
                href="https://wa.me/919008877883"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-theme-border text-theme-text px-7 py-3.5 rounded-xl font-bold hover:border-theme-text theme-transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Capabilities — Responsive Cards */}
      <section className="py-24 md:py-32 px-6 bg-theme-surface/30 theme-transition border-b border-theme-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              {data.operatingCapabilities.kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
              {data.operatingCapabilities.title}
            </h2>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
              {data.operatingCapabilities.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {data.operatingCapabilities.items.map((cap) => (
              <div
                key={cap.title}
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
                      {cap.title}
                    </h3>
                  </div>
                  <p className="product-desc">
                    {cap.desc}
                  </p>
                </div>
                <div className="product-pills">
                  <span className="product-pill">Domain Verified</span>
                  <span className="product-pill">Enterprise Scale</span>
                </div>
                <div className="product-footer">
                  <span>Operating capability</span>
                  <div className="product-btn">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Disciplines Section */}
      <section className="py-24 md:py-32 px-6 bg-theme-bg theme-transition border-b border-theme-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              {data.disciplinesApplied.kicker}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
              {data.disciplinesApplied.title}
            </h2>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
              {data.disciplinesApplied.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.disciplinesApplied.items.map((disc, i) => (
              <Link
                href="/contact"
                key={disc.title}
                className="product-card group"
              >
                <div>
                  <div className="discipline-tag mb-5">
                    <span className="discipline-tag-circle" />
                    <span>0{i + 1} / {disc.kicker}</span>
                  </div>
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="product-icon-wrap">
                      <Cpu size={22} />
                    </div>
                    <h3 className="product-title text-xl sm:text-2xl">
                      {disc.title}
                    </h3>
                  </div>
                  <p className="product-desc">
                    {disc.intro}
                  </p>
                </div>
                <div className="product-pills">
                  {disc.features.slice(0, 2).map((f) => (
                    <span key={f} className="product-pill">{f}</span>
                  ))}
                </div>
                <div className="product-footer">
                  <span>Explore discipline</span>
                  <div className="product-btn">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Ecosystem CTA */}
      <section className="py-24 md:py-32 px-6 bg-theme-surface/30 theme-transition border-b border-theme-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              SECTOR ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
              Purpose-built for {ind.name.toLowerCase()} complexity.
            </h2>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl">
              Every system we ship is designed around the specific workflows, compliance requirements, and operational constraints of your industry.
            </p>
          </div>

          <div className="bg-theme-surface border border-theme-border rounded-3xl p-8 sm:p-12 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-accent/15 text-theme-accent font-mono text-xs font-bold uppercase tracking-wider mb-4">
                {ind.name.toUpperCase()}
              </span>
              <h3 className="text-3xl font-extrabold text-theme-text theme-transition mb-4">
                Production-grade systems for {ind.name.toLowerCase()} teams.
              </h3>
              <p className="text-sm text-theme-muted leading-relaxed mb-8 max-w-xl">
                We combine deep domain understanding with rigorous engineering to deliver platforms that handle real operational pressure — secure, observable, and fully owned by your team.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-theme-bg border border-theme-border rounded-xl p-4">
                  <strong className="block text-base font-bold text-theme-text theme-transition">100% Ownership</strong>
                  <span className="text-xs text-theme-muted">Code, cloud & credentials from day one</span>
                </div>
                <div className="bg-theme-bg border border-theme-border rounded-xl p-4">
                  <strong className="block text-base font-bold text-theme-text theme-transition">Bi-Weekly Delivery</strong>
                  <span className="text-xs text-theme-muted">Live staging demos, every sprint</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-theme-text text-theme-surface px-6 py-3 rounded-xl font-bold hover:bg-theme-accent hover:text-white transition-colors"
              >
                Discuss your {ind.name} project <ArrowRight size={16} />
              </Link>
            </div>
            <div className="lg:col-span-5 bg-theme-bg border border-theme-border rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-theme-accent/10 text-theme-accent grid place-items-center mb-4">
                <ShieldCheck size={32} />
              </div>
              <span className="font-mono text-xs font-bold text-theme-accent uppercase tracking-widest mb-1">
                ENTERPRISE GRADE
              </span>
              <h4 className="text-xl font-bold text-theme-text theme-transition mb-2">
                Production-Ready Infrastructure
              </h4>
              <p className="text-xs text-theme-muted leading-relaxed max-w-xs mb-6">
                Tailored cloud architecture, private VPC deployment, and zero third-party vendor lock-in — built for {ind.name.toLowerCase()} operations.
              </p>
              <Link
                href="/contact"
                className="text-xs font-mono font-bold text-theme-accent hover:underline flex items-center gap-1"
              >
                Enquire for your organization <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
