import React from "react";
import { Reveal } from "./Reveal";
const Reviews = () => {
  return (
    <section className="relative px-6 py-20 flex justify-center flex-col overflow-x-hidden mt-[5rem]">
      <div className="relative mb-20 flex flex-col items-center">
        <span className="mb-3 text-xs tracking-[0.35em] uppercase text-indigo-400/70">
          Testimonials
        </span>

        <h2 className="relative text-center font-inter font-extrabold text-5xl sm:text-6xl leading-tight text-white">
          Trusted by
          <span className="block bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Our Clients
          </span>
        </h2>

        <div className="mt-6 h-px w-56 bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
      </div>
      <Reveal delayMs={300}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
          <div className="group relative rounded-xl bg-white/[0.035] p-6 text-white/70 ring-1 ring-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:ring-indigo-500/40 hover:shadow-[0_20px_40px_-20px_rgba(99,102,241,0.45)]">
            <p className="text-sm leading-relaxed">
              “The website looks modern, loads fast, and was delivered exactly
              as promised. Communication was clear from start to finish.”
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-9 w-9 rounded-full bg-indigo-500/20 ring-1 ring-indigo-500/30 flex items-center justify-center text-sm font-semibold text-white">
                L
              </div>
              <span className="text-sm font-medium text-white">Liviu A.</span>
            </div>
          </div>

          <div className="group relative rounded-xl bg-white/[0.035] p-6 text-white/70 ring-1 ring-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:ring-indigo-500/40 hover:shadow-[0_20px_40px_-20px_rgba(99,102,241,0.45)]">
            <p className="text-sm leading-relaxed">
              “Professional approach and great attention to detail. The final
              result exceeded my expectations.”
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-9 w-9 rounded-full bg-indigo-500/20 ring-1 ring-indigo-500/30 flex items-center justify-center text-sm font-semibold text-white">
                A
              </div>
              <span className="text-sm font-medium text-white">Andrei S.</span>
            </div>
          </div>

          <div className="group relative rounded-xl bg-white/[0.035] p-6 text-white/70 ring-1 ring-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:ring-indigo-500/40 hover:shadow-[0_20px_40px_-20px_rgba(99,102,241,0.45)]">
            <p className="text-sm leading-relaxed">
              “Fast delivery, clean design, and very easy to work with. Highly
              recommended for anyone needing a modern website.”
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-9 w-9 rounded-full bg-indigo-500/20 ring-1 ring-indigo-500/30 flex items-center justify-center text-sm font-semibold text-white">
                M
              </div>
              <span className="text-sm font-medium text-white">Mario P.</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Reviews;
