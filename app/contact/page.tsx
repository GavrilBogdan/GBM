"use client";

import React, { useState } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const Page = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === "loading") return;

    const formEl = e.currentTarget;

    setStatus("loading");
    setError("");

    const formData = new FormData(formEl);

    try {
      const res = await fetch("/api/cont", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const text = await res.text();

      let data: any = null;
      try {
        data = text ? JSON.parse(text) : null;
      } catch {
        data = null;
      }

      if (!res.ok) {
        setStatus("error");
        setError(
          data?.error || text || "Something went wrong. Please try again.",
        );
        return;
      }

      setStatus("success");
      formEl.reset(); // ✅ safe
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Connection error. Please try again.");
    }
  };
  return (
    <section className="relative w-full min-h-screen overflow-hidden px-6 py-24 flex items-center justify-center">
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.10) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 75%)",
        }}
      />
      <span className="absolute w-[34rem] h-[34rem] bg-blue-400/20 blur-[120px] rounded-full -top-10 left-1/2 -translate-x-1/2 -z-10" />
      <span className="absolute w-[22rem] h-[22rem] bg-indigo-400/10 blur-[110px] rounded-full bottom-0 right-10 -z-10" />

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 sm:p-10 text-white shadow-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm text-blue-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Usually replies within 24 hours
          </div>

          <h1 className="mt-6 font-bai font-extrabold text-4xl sm:text-5xl leading-tight">
            We&apos;re here to help
          </h1>

          <p className="mt-4 text-blue-100/80 font-mont leading-relaxed">
            Tell us what you need and we&apos;ll get back with clear next steps.
            If you have examples or a deadline, include them — it helps a lot.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoCard title="Email" value="gavrilbogdan30@gmail.com" />
            <InfoCard title="Location" value="Romania (Remote)" />
            <InfoCard title="Work hours" value="Mon–Fri, 10:00–18:00" />
            <InfoCard title="Response time" value="Same / next day" />
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-blue-500/20 via-indigo-500/10 to-cyan-400/10 border border-white/10">
            <p className="text-sm text-blue-100/80">
              Tip: If you&apos;re requesting a quote, mention your budget range
              and preferred style (minimal, modern, bold).
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-3xl border border-white/20 bg-white/60 backdrop-blur-2xl p-8 sm:p-10 shadow-2xl">
          <h2 className="font-inter font-bold text-2xl text-slate-900">
            Send a message
          </h2>
          <p className="mt-2 text-slate-600 text-sm">
            Fill in the details below and we&apos;ll reach out shortly.
          </p>

          {status === "success" && (
            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
              <CheckCircle2 className="text-emerald-600 mt-0.5" size={18} />
              <div>
                <p className="font-bold text-emerald-900">Message sent!</p>
                <p className="text-emerald-700 text-sm">
                  Thanks — we&apos;ll reply as soon as possible.
                </p>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="mt-5 flex items-center gap-2 rounded-2xl bg-red-50 border border-red-100 p-4 text-red-600 font-bold text-sm">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <LabeledInput
              label="Name"
              name="name"
              placeholder="e.g. John Doe"
              icon={<User size={18} />}
              required
              onFocus={() => status === "error" && setStatus("idle")}
            />

            <LabeledInput
              label="Email address"
              name="email"
              type="email"
              placeholder="e.g. example@gmail.com"
              icon={<Mail size={18} />}
              required
              onFocus={() => status === "error" && setStatus("idle")}
            />

            <LabeledTextarea
              label="Message"
              name="message"
              placeholder="Tell us what you need... (goals, pages, style, deadline)"
              icon={<MessageSquare size={18} />}
              required
              rows={6}
              onFocus={() => status === "error" && setStatus("idle")}
            />

            <button
              disabled={status === "loading" || status === "success"}
              className={`
                w-full py-4 rounded-2xl font-bold text-white transition-all flex items-center justify-center gap-2
                ${
                  status === "success"
                    ? "bg-blue-600 shadow-xl shadow-blue-500/30"
                    : "bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/30 hover:-translate-y-0.5"
                }
                ${status === "loading" ? "opacity-80 cursor-not-allowed" : ""}
              `}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send message
                </>
              )}
            </button>

            <p className="text-xs text-slate-500 text-center">
              By submitting, you agree to the processing of your data.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;

const InfoCard = ({ title, value }: { title: string; value: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
    <p className="text-xs uppercase tracking-wider text-blue-100/70">{title}</p>
    <p className="mt-1 font-bold text-blue-50 break-words">{value}</p>
  </div>
);

const LabeledInput = ({
  label,
  icon,
  ...props
}: {
  label: string;
  icon: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="space-y-2">
    <p className="text-sm font-bold text-slate-700">{label}</p>
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500/70 group-focus-within:text-blue-600 transition-colors">
        {icon}
      </div>
      <input
        {...props}
        className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl outline-none text-slate-900 placeholder-slate-400 font-medium focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all"
      />
    </div>
  </div>
);

const LabeledTextarea = ({
  label,
  icon,
  ...props
}: {
  label: string;
  icon: React.ReactNode;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <div className="space-y-2">
    <p className="text-sm font-bold text-slate-700">{label}</p>
    <div className="relative group">
      <div className="absolute left-4 top-4 text-blue-500/70 group-focus-within:text-blue-600 transition-colors">
        {icon}
      </div>
      <textarea
        {...props}
        className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl outline-none text-slate-900 placeholder-slate-400 font-medium focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all resize-none"
      />
    </div>
  </div>
);
