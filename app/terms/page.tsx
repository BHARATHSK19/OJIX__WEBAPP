import Link from "next/link";
import { ArrowLeft, CheckCircle } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Terms of Service | OJIX Studio",
  description: "Terms of Service and commercial engagement standards for OJIX Studio.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 md:pt-44 md:pb-32 px-6 bg-theme-bg theme-transition min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-theme-muted hover:text-theme-accent transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>
        <div className="mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-3 block">
            TERMS & CONDITIONS
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
            Terms of Service
          </h1>
          <p className="text-sm font-mono text-theme-muted">
            Effective: October 2026 · OJIX Studio, Bengaluru, India
          </p>
        </div>

        <div className="space-y-10 text-theme-muted leading-relaxed">
          <section className="bg-theme-surface/70 border border-theme-border rounded-2xl p-8 theme-transition shadow-soft">
            <div className="flex items-center gap-3 mb-4 text-theme-accent">
              <CheckCircle size={24} />
              <h2 className="text-xl font-bold text-theme-text theme-transition m-0">
                1. 100% Code & Intellectual Property Ownership
              </h2>
            </div>
            <p className="text-base text-theme-text font-medium mb-3">
              We operate on an unambiguous ownership model: you own your software.
            </p>
            <p>
              Upon milestone settlement according to the Statement of Work (SOW), 100% of custom source code, documentation, schemas, database migrations, and operational assets created for your engagement become your exclusive intellectual property.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-text theme-transition">
              2. Scope of Services & SOW Execution
            </h2>
            <p>
              Engineering engagements, development sprints, advisory consultations, and software delivery are governed by executed Statements of Work. Each SOW defines deliverables, sprint durations, testing acceptance criteria, and fee structures.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-text theme-transition">
              3. Milestone Delivery & Acceptance Testing
            </h2>
            <p>
              Work is delivered incrementally in bi-weekly staging deployments. Clients receive private access to staging instances to test, verify, and confirm feature adherence before production deployment.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-text theme-transition">
              4. Warranties & Code Quality
            </h2>
            <p>
              OJIX warrants that deliverables will be engineered in accordance with professional software standards, free from intentional vulnerabilities, and built on modern, supported framework dependencies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-text theme-transition">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India. Any disputes arising under or related to these terms shall be subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
