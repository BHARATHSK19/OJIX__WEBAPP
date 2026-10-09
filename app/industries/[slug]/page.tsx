import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle, ShieldCheck, Database, Cloud, Lock, ChartLineUp, HardDrives, Cpu } from "@phosphor-icons/react/dist/ssr";
import { industries, services } from "@/lib/content";

export function generateStaticParams() {
  return industries.map((x) => ({ slug: x.slug }));
}

const industryCapabilities = [
  { title: "Purpose-Built Platforms & Portals", desc: "Custom web applications and native mobile interfaces designed around your staff and customer workflows.", icon: Cloud },
  { title: "Workflow Automation & Practical AI", desc: "Private intelligence pipelines and automated task routing that eliminate manual data entry.", icon: HardDrives },
  { title: "Real-Time Sync & API Connectors", desc: "Reliable event-driven message queues and third-party integrations with zero data loss.", icon: Database },
  { title: "Resilient Cloud Foundations", desc: "Scalable VPC infrastructure with automated backups, disaster recovery, and 24/7 observability.", icon: ShieldCheck },
  { title: "Enterprise Security & Audit Trails", desc: "Role-based permissions, end-to-end data encryption, and immutable compliance audit logs.", icon: Lock },
  { title: "Direct Engineering Access", desc: "Continuous sprint shipping and technical advisory from practitioners who understand your sector.", icon: ChartLineUp }
];

const caseStudies = [
  {
    name: "LawX",
    category: "LEGAL TECH",
    headline: "A clearer operating picture for modern legal chambers.",
    description: "Bring case matters, hearing calendars, client communication, and document workflows into a single high-security management platform.",
    metrics: [
      { label: "One Workspace", desc: "Cases, tasks & client updates" },
      { label: "Zero Gaps", desc: "Automated matter workflows" }
    ],
    slug: "lawx"
  },
  {
    name: "AI ProctX",
    category: "EDTECH · AI ASSESSMENT",
    headline: "Online assessments designed for institutional trust at scale.",
    description: "Coordinate examination administration, monitoring, encrypted evidence, and reporting through an intelligent proctoring platform.",
    metrics: [
      { label: "Centralized", desc: "Unified exam administration" },
      { label: "Evidence-Led", desc: "Audit-ready monitoring & reporting" }
    ],
    slug: "ai-proctx"
  }
];

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ind = industries.find((x) => x.slug === slug);
  if (!ind) notFound();

  const caseItem =
    slug === "lawtech"
      ? caseStudies[0]
      : slug === "edtech"
        ? caseStudies[1]
        : caseStudies[slug.length % 2];

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
              OPERATING CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
              Technology that fits your operating reality.
            </h2>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
              Secure and scalable foundations, designed around the people, sensitive data, and decisions at the center of {ind.name.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industryCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Relevant Disciplines Section */}
      <section className="py-24 md:py-32 px-6 bg-theme-bg theme-transition border-b border-theme-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              DISCIPLINES APPLIED
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
              How we engineer {ind.name} solutions.
            </h2>
            <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
              We apply our core technical disciplines to build custom software that solves friction and accelerates momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((s, i) => (
              <Link
                href={`/services/${s.slug}`}
                key={s.slug}
                className="product-card group"
              >
                <div>
                  <div className="discipline-tag mb-5">
                    <span className="discipline-tag-circle" />
                    <span>0{i + 1} / {s.kicker}</span>
                  </div>
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="product-icon-wrap">
                      <Cpu size={22} />
                    </div>
                    <h3 className="product-title text-xl sm:text-2xl">
                      {s.name}
                    </h3>
                  </div>
                  <p className="product-desc">
                    {s.intro}
                  </p>
                </div>
                <div className="product-pills">
                  <span className="product-pill">{s.features[0]}</span>
                  <span className="product-pill">{s.features[1] || "Core Team"}</span>
                </div>
                <div className="product-footer">
                  <span>View discipline</span>
                  <div className="product-btn">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Case Study Showcase */}
      <section className="py-24 md:py-32 px-6 bg-theme-surface/30 theme-transition border-b border-theme-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              SECTOR ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
              A product designed for sector complexity.
            </h2>
          </div>

          <div className="bg-theme-surface border border-theme-border rounded-3xl p-8 sm:p-12 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-accent/15 text-theme-accent font-mono text-xs font-bold uppercase tracking-wider mb-4">
                {caseItem.category}
              </span>
              <h3 className="text-3xl font-extrabold text-theme-text theme-transition mb-4">
                {caseItem.name} — {caseItem.headline}
              </h3>
              <p className="text-sm text-theme-muted leading-relaxed mb-8 max-w-xl">
                {caseItem.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {caseItem.metrics.map((m) => (
                  <div key={m.label} className="bg-theme-bg border border-theme-border rounded-xl p-4">
                    <strong className="block text-base font-bold text-theme-text theme-transition">{m.label}</strong>
                    <span className="text-xs text-theme-muted">{m.desc}</span>
                  </div>
                ))}
              </div>
              <Link
                href={`/products/${caseItem.slug}`}
                className="inline-flex items-center gap-2 bg-theme-text text-theme-surface px-6 py-3 rounded-xl font-bold hover:bg-theme-accent hover:text-white transition-colors"
              >
                Explore {caseItem.name} <ArrowRight size={16} />
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
                Production-Ready Platform
              </h4>
              <p className="text-xs text-theme-muted leading-relaxed max-w-xs mb-6">
                Tailored multi-tenant architecture, private VPC deployment, and zero third-party vendor lock-in.
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
