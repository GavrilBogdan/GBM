"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Code2,
  Palette,
  Rocket,
  Globe,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const Page = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 flex items-center justify-center">
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
      <span className="absolute w-[38rem] h-[38rem] bg-blue-400/20 blur-[120px] rounded-full -top-20 left-1/2 -translate-x-1/2 -z-10" />
      <span className="absolute w-[24rem] h-[24rem] bg-indigo-400/10 blur-[110px] rounded-full bottom-0 right-10 -z-10" />

      <div className="w-full max-w-6xl">
        <div className="mt-10 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <p className="text-blue-200/80 font-semibold tracking-wide">
                Web Development • UI/UX • Conversion-focused websites
              </p>

              <h1 className="mt-4 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-blue-100 to-blue-400 font-extrabold text-4xl sm:text-6xl font-mont">
                Gavril Bogdan
                <br />
                Macsimilian
              </h1>

              <p className="mt-5 text-slate-100/90 leading-relaxed text-base sm:text-lg">
                I design and build premium, fast, and responsive websites that
                help businesses look credible and convert visitors into
                customers. Clean visuals, strong structure, and a reliable
                process from start to launch.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Highlight
                  icon={<Code2 size={18} />}
                  title="Modern Stack"
                  desc="Next.js • React • Tailwind"
                />
                <Highlight
                  icon={<Palette size={18} />}
                  title="Agency-grade UI"
                  desc="Clean, premium, and on-brand"
                />
                <Highlight
                  icon={<Rocket size={18} />}
                  title="Fast Delivery"
                  desc="Clear milestones & deadlines"
                />
                <Highlight
                  icon={<Globe size={18} />}
                  title="Responsive"
                  desc="Perfect across all devices"
                />
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="/form"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/30 transition-all hover:-translate-y-0.5"
                >
                  Request a Quote <ArrowRight size={18} />
                </a>

                <a
                  href="/preturi"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-bold text-blue-200 bg-white/10 border border-white/15 hover:bg-white/15 transition-all"
                >
                  View Pricing
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <SocialBtn
                  icon={<Mail size={18} />}
                  label="Contact"
                  href="/contact"
                />
                <SocialBtn
                  icon={<Github size={18} />}
                  label="GitHub"
                  href="https://github.com/GavrilBogdan"
                />
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-blue-100/70 text-sm leading-relaxed">
                  Want a clean, modern site that feels premium and actually
                  converts? Send your details and I’ll reply with a clear plan
                  and timeline.
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-12 bg-gradient-to-b from-white/5 to-transparent border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 blur-2xl opacity-25" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="relative w-full aspect-[4/5] sm:aspect-[16/14] lg:aspect-[4/5]">
                    <Image
                      src="/bogdan.png"
                      alt="Gavril Bogdan Macsimilian"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <StatCard title="Experience" value="4+ years" />
                  <StatCard title="Delivery" value="Fast & clean" />
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-slate-100 font-extrabold text-2xl sm:text-3xl">
                  What you get
                </h2>
                <p className="mt-3 text-blue-100/70 leading-relaxed">
                  A polished website that loads fast, looks premium, and
                  supports your business goals.
                </p>

                <div className="mt-8 space-y-4">
                  <Bullet>Design tailored to your brand (not templates)</Bullet>
                  <Bullet>Fast performance + SEO-friendly structure</Bullet>
                  <Bullet>Mobile-first layout and strong readability</Bullet>
                  <Bullet>Clear communication + revisions included</Bullet>
                </div>

                <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <p className="text-blue-100/70 text-xs font-bold tracking-wider uppercase">
                    Process
                  </p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Step
                      num="01"
                      title="Discovery"
                      desc="Goals, content, references"
                    />
                    <Step
                      num="02"
                      title="Design"
                      desc="Layout, visuals, feedback"
                    />
                    <Step
                      num="03"
                      title="Build"
                      desc="Responsive development"
                    />
                    <Step num="04" title="Launch" desc="QA, deploy, handoff" />
                  </div>
                </div>

                <p className="mt-6 text-xs text-blue-100/55">
                  Available for freelance projects • Romania / Remote
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

const Highlight = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex gap-3">
    <div className="h-10 w-10 rounded-2xl bg-blue-500/10 border border-white/10 flex items-center justify-center text-blue-200">
      {icon}
    </div>
    <div className="min-w-0">
      <p className="text-slate-100 font-bold">{title}</p>
      <p className="text-blue-100/70 text-sm">{desc}</p>
    </div>
  </div>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3">
    <CheckCircle2 size={18} className="text-blue-300 mt-0.5 shrink-0" />
    <p className="text-slate-100/90 leading-relaxed">{children}</p>
  </div>
);

const Step = ({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
    <p className="text-blue-200/70 text-xs font-bold tracking-wider">{num}</p>
    <p className="mt-1 text-slate-100 font-bold">{title}</p>
    <p className="mt-1 text-blue-100/70 text-sm">{desc}</p>
  </div>
);

const SocialBtn = ({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) => (
  <a
    href={href}
    className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-bold bg-white/10 border border-white/15 text-blue-100 hover:bg-white/15 transition-all"
  >
    {icon}
    {label}
  </a>
);

const StatCard = ({ title, value }: { title: string; value: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
    <p className="text-blue-100/60 text-xs font-bold tracking-wider uppercase">
      {title}
    </p>
    <p className="mt-1 text-slate-100 font-extrabold text-lg">{value}</p>
  </div>
);
