import React from "react";
import { Reveal } from "./Reveal";

const SmCards = () => {
  return (
    <section className="relative px-6 mt-24 mb-20 font-mont overflow-x-hidden">
      <div className="relative mb-20 flex flex-col items-center">
        <span className="mb-3 text-xs tracking-[0.35em] uppercase text-indigo-400/70">
          Selected Work
        </span>

        <h2 className="relative text-center font-inter font-extrabold text-5xl sm:text-6xl leading-tight text-white">
          Building Digital
          <span className="block bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Products That Matter
          </span>
        </h2>

        <div className="mt-6 h-px w-56 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

        <div className="pointer-events-none absolute -top-20 h-48 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
      <Reveal delayMs={200}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="group cursor-pointer rounded-xl bg-white/[0.03] p-5 text-white/75 ring-1 ring-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:ring-indigo-500/40 hover:shadow-[0_20px_40px_-20px_rgba(99,102,241,0.5)]">
            <h3 className="text-lg font-semibold text-white">
              Modern Web Design
            </h3>
            <div className="mt-2 mb-3 h-px w-12 bg-indigo-500/60 rounded-full" />
            <p className="text-sm leading-relaxed">
              Clean, responsive interfaces built to look great and work
              flawlessly on all devices.
            </p>
          </div>

          <div className="group  cursor-pointer rounded-xl bg-white/[0.03] p-5 text-white/75 ring-1 ring-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:ring-indigo-500/40 hover:shadow-[0_20px_40px_-20px_rgba(99,102,241,0.5)]">
            <h3 className="text-lg font-semibold text-white">
              SEO & Performance
            </h3>
            <div className="mt-2 mb-3 h-px w-12 bg-indigo-500/60 rounded-full" />
            <p className="text-sm leading-relaxed">
              Optimized structure and fast loading times to improve visibility
              and rankings.
            </p>
          </div>

          <div className="group cursor-pointer rounded-xl bg-white/[0.03] p-5 text-white/75 ring-1 ring-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:ring-indigo-500/40 hover:shadow-[0_20px_40px_-20px_rgba(99,102,241,0.5)]">
            <h3 className="text-lg font-semibold text-white">Fast Delivery</h3>
            <div className="mt-2 mb-3 h-px w-12 bg-indigo-500/60 rounded-full" />
            <p className="text-sm leading-relaxed">
              Clear communication and quick turnaround without sacrificing
              quality.
            </p>
          </div>
        </div>{" "}
      </Reveal>
    </section>
  );
};

export default SmCards;
