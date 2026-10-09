import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Privacy Policy | OJIX Studio",
  description: "Privacy Policy and data governance principles for OJIX Studio.",
};

export default function PrivacyPage() {
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
            LEGAL & GOVERNANCE
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-theme-text theme-transition mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-theme-muted">
            Last updated: October 2026 · Bengaluru, India
          </p>
        </div>

        <div className="space-y-10 text-theme-muted leading-relaxed">
          <section className="bg-theme-surface/70 border border-theme-border rounded-2xl p-8 theme-transition shadow-soft">
            <div className="flex items-center gap-3 mb-4 text-theme-accent">
              <ShieldCheck size={24} />
              <h2 className="text-xl font-bold text-theme-text theme-transition m-0">
                1. Our Privacy Commitment
              </h2>
            </div>
            <p className="text-base text-theme-text font-medium mb-3">
              OJIX Studio operates with strict data minimization and technical confidentiality.
            </p>
            <p>
              We design, build, and deploy custom software systems for commercial clients. We do not sell your personal data, monetize user lists, or train public AI models on private client code or proprietary data repositories.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-text theme-transition">
              2. Information We Collect
            </h2>
            <p>
              We collect information only when voluntarily provided by you, specifically:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Inquiries:</strong> Your name, business email address, company name, project scope, and communication preferences when you submit an inquiry.</li>
              <li><strong>Direct Communications:</strong> Message correspondence via email, phone, or WhatsApp for technical scoping and milestone updates.</li>
              <li><strong>Technical Logs:</strong> Minimal server connection metadata (IP address, user agent) collected strictly for security, DDoS protection, and spam prevention via Cloudflare.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-text theme-transition">
              3. Client Code, Architecture & Data Isolation
            </h2>
            <p>
              When engineering software for clients:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All application databases, object storage buckets, and credentials belong entirely to the client and reside within the client’s own cloud tenant accounts (AWS, Google Cloud, Cloudflare, etc.).</li>
              <li>We sign strict Non-Disclosure Agreements (NDAs) and intellectual property transfer agreements prior to sprint commencement.</li>
              <li>Any private AI or automation pipelines engineered by OJIX use isolated enterprise API endpoints with zero-retention agreements.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-text theme-transition">
              4. Security Measures
            </h2>
            <p>
              We enforce multi-factor authentication, encrypted communications (TLS 1.3), role-based repository access, and least-privilege credential management across all studio workflows.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-theme-text theme-transition">
              5. Contact Our Privacy Team
            </h2>
            <p>
              If you have inquiries regarding privacy governance, data deletion, or compliance under DPDP or GDPR, please contact our legal team at{" "}
              <a href="mailto:info@ojix.in" className="text-theme-accent font-semibold hover:underline">
                info@ojix.in
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
