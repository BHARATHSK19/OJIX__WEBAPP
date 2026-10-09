import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle, ChatCircleDots, EnvelopeSimple, PhoneCall } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact | OJIX Studio",
  description: "Get in touch with the engineering team at OJIX Studio. Technical perspectives, clear blueprints, and realistic roadmaps with zero sales fluff.",
};

export default function Contact() {
  return (
    <div className="pt-32 pb-24 md:pt-44 md:pb-32 px-6 bg-theme-bg relative overflow-hidden theme-transition min-h-screen">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent pointer-events-none rounded-full blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-theme-muted hover:text-theme-accent transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column / Info */}
          <div className="lg:col-span-5 hero-reveal">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-4 block">
              04 / GET IN TOUCH
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-theme-text theme-transition">
              Tell us what you want <span className="text-theme-accent">to build.</span>
            </h1>
            <p className="text-base sm:text-lg text-theme-muted leading-relaxed mb-8 theme-transition">
              Bring us a broken workflow that needs fixing, a new product you want to ship, or an ambitious multi-tenant system that needs a steady engineering partner.
            </p>

            {/* Proof Badges */}
            <div className="space-y-4 mb-10 pt-6 border-t border-theme-border/60">
              <div className="flex items-center gap-3 text-sm font-bold text-theme-text theme-transition">
                <CheckCircle size={20} className="text-theme-accent flex-shrink-0" weight="bold" />
                <span>Direct engineering team access — zero sales fluff</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-theme-text theme-transition">
                <CheckCircle size={20} className="text-theme-accent flex-shrink-0" weight="bold" />
                <span>100% source code, schema & cloud ownership</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-theme-text theme-transition">
                <CheckCircle size={20} className="text-theme-accent flex-shrink-0" weight="bold" />
                <span>Working staging demos delivered every two weeks</span>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <a
                href="https://wa.me/919008877883"
                className="bg-theme-surface border border-theme-border hover:border-[#25D366] rounded-xl p-4 flex items-center justify-between text-sm transition-all duration-200 group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 text-[#25D366] grid place-items-center">
                    <ChatCircleDots size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-theme-muted">Direct WhatsApp</div>
                    <div className="font-bold text-theme-text group-hover:text-[#25D366] transition-colors">+91 90088 77883</div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-theme-muted group-hover:text-[#25D366] transition-colors" />
              </a>

              <a
                href="mailto:info@ojix.in"
                className="bg-theme-surface border border-theme-border hover:border-theme-accent rounded-xl p-4 flex items-center justify-between text-sm transition-all duration-200 group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-theme-accent/10 text-theme-accent grid place-items-center">
                    <EnvelopeSimple size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-theme-muted">Studio Email</div>
                    <div className="font-bold text-theme-text group-hover:text-theme-accent transition-colors">info@ojix.in</div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-theme-muted group-hover:text-theme-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column / Form */}
          <div className="lg:col-span-7">
            <div className="bg-theme-surface border border-theme-border rounded-3xl p-8 sm:p-12 shadow-soft theme-transition">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
