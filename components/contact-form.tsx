"use client";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight, CheckCircle, WarningCircle } from "@phosphor-icons/react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  company: z.string().optional(),
  interest: z.string().min(1, "Choose a project area"),
  message: z.string().min(20, "Tell us a little more (at least 20 characters)")
});

type Fields = z.infer<typeof schema>;

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
        }
      ) => string;
      remove: (id: string) => void;
    };
  }
}

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [token, setToken] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Fields>({ resolver: zodResolver(schema) });

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!key || !turnstileRef.current) return;
    const render = () => {
      if (window.turnstile && turnstileRef.current && !widgetId.current) {
        widgetId.current = window.turnstile.render(turnstileRef.current, {
          sitekey: key,
          callback: setToken,
          "expired-callback": () => setToken("")
        });
      }
    };
    if (window.turnstile) render();
    else {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = render;
      document.head.appendChild(script);
    }
    return () => {
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current);
    };
  }, []);

  async function submit(data: Fields) {
    setStatus("");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken: token || undefined })
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "Unable to send your message.");
      setStatus("sent");
    } catch (e) {
      setStatus(e instanceof Error ? e.message : "Unable to send your message.");
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)} noValidate className="space-y-6">
      <div className="mb-8">
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-theme-accent mb-2 block">
          PROJECT ENQUIRY
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-theme-text theme-transition mb-2">
          Let’s make something useful.
        </h2>
        <p className="text-sm text-theme-muted leading-relaxed">
          Share what you’re trying to solve. An engineer replies directly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Your name" error={errors.name?.message}>
          <input
            placeholder="Name"
            autoComplete="name"
            {...register("name")}
            className="w-full bg-theme-bg border border-theme-border text-theme-text rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all placeholder:text-theme-muted/50"
          />
        </Field>

        <Field label="Work email" error={errors.email?.message}>
          <input
            type="email"
            placeholder="abc@company.com"
            autoComplete="email"
            {...register("email")}
            className="w-full bg-theme-bg border border-theme-border text-theme-text rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all placeholder:text-theme-muted/50"
          />
        </Field>

        <Field label="Company (optional)" error={errors.company?.message}>
          <input
            placeholder="Company name"
            autoComplete="organization"
            {...register("company")}
            className="w-full bg-theme-bg border border-theme-border text-theme-text rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all placeholder:text-theme-muted/50"
          />
        </Field>

        <Field label="What do you need?" error={errors.interest?.message}>
          <select
            defaultValue=""
            {...register("interest")}
            className="w-full bg-theme-bg border border-theme-border text-theme-text rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all cursor-pointer"
          >
            <option value="" disabled>Select a project area</option>
            <option>Custom web or mobile platform</option>
            <option>AI and automation</option>
            <option>Cloud and DevOps</option>
            <option>Integrations and analytics</option>
            <option>Technical advisory</option>
            <option>OJIX product enquiry</option>
            <option>Others</option>
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field label="A little about the project" error={errors.message?.message}>
            <textarea
              rows={5}
              placeholder="What are you building, improving, or trying to fix?"
              {...register("message")}
              className="w-full bg-theme-bg border border-theme-border text-theme-text rounded-xl p-4 text-sm focus:outline-none focus:border-theme-accent focus:ring-1 focus:ring-theme-accent transition-all resize-y placeholder:text-theme-muted/50"
            />
          </Field>
        </div>
      </div>

      {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
        <div className="p-3 bg-theme-bg border border-theme-border rounded-xl text-xs font-mono text-theme-muted">
          <div ref={turnstileRef} />
          Spam protection enabled. Complete the verification when prompted.
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-theme-border/60">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 bg-theme-accent text-white px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-sm cursor-pointer disabled:opacity-60 disabled:cursor-wait"
        >
          {isSubmitting ? "Sending…" : "Send project enquiry"}
          <ArrowUpRight size={16} />
        </button>

      </div>

      {status === "sent" ? (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 text-sm font-semibold">
          <CheckCircle size={20} weight="bold" />
          <span>Your note is on its way. We’ll be in touch shortly.</span>
        </div>
      ) : status ? (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20 text-sm font-semibold" role="alert">
          <WarningCircle size={20} weight="bold" />
          <span>{status}</span>
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-mono font-bold uppercase tracking-wider text-theme-muted mb-2">
        {label}
      </span>
      {children}
      {error && <small className="block text-xs font-mono text-red-500 mt-1.5">{error}</small>}
    </label>
  );
}
