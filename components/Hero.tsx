"use client";
import React from "react";
import { Reveal } from "./Reveal";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative text-white min-h-[100svh] flex items-center justify-center overflow-x-hidden px-6">
      <span className="absolute w-[44rem] h-[44rem] bg-blue-500/22 blur-[150px] rounded-full -top-44 left-1/2 -translate-x-1/2 -z-10" />
      <span className="absolute w-[26rem] h-[26rem] bg-indigo-500/12 blur-[130px] rounded-full bottom-0 right-10 -z-10" />
      <span className="absolute w-[20rem] h-[20rem] bg-cyan-400/10 blur-[130px] rounded-full top-14 left-10 -z-10 hidden sm:block" />

      <div className="pointer-events-none absolute inset-0 grid grid-cols-12 gap-8 text-white/5 select-none">
        {Array.from({ length: 120 }).map((_, i) => (
          <span key={i} className="text-lg font-light">
            +
          </span>
        ))}
      </div>

      <div className="absolute left-4 sm:left-[4rem] top-24 sm:top-[16rem] opacity-75">
        <Badge>Fast & Professional</Badge>
      </div>

      <div className="absolute right-4 sm:right-[4rem] bottom-24 sm:bottom-[16rem] opacity-75">
        <Badge>4+ Years of Experience</Badge>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center text-center">
        <Reveal delayMs={180}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 blur-3xl opacity-25 rounded-full" />
            <h1 className="relative font-bai font-extrabold tracking-tight text-6xl sm:text-8xl">
              GBM
            </h1>
          </div>
          <div className="h-px w-44 sm:w-64 mx-auto bg-gradient-to-r from-transparent via-blue-400/70 to-transparent mt-5" />
        </Reveal>

        <Reveal delayMs={280}>
          <p className="mt-6 text-lg sm:text-2xl font-mont font-light text-blue-100/90">
            Modern web design & development
          </p>
        </Reveal>

        <Reveal delayMs={380}>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="/about"
              className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-2xl font-semibold text-blue-50"
            >
              <span className="absolute inset-0 rounded-2xl bg-white/8 border border-white/14 backdrop-blur-xl shadow-[0_16px_46px_-22px_rgba(0,0,0,0.65)] transition-all duration-300 group-hover:bg-white/12 group-hover:shadow-[0_18px_54px_-22px_rgba(0,170,255,0.25)] group-hover:-translate-y-0.5" />
              <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-white/16 to-transparent" />
              <span className="relative inline-flex items-center gap-2">
                <Sparkles size={18} className="text-cyan-200/90" />
                About Me
                <ArrowRight
                  size={18}
                  className="opacity-70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </span>
            </a>

            <a
              href="/form"
              className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-2xl font-bold text-white"
            >
              <span className="absolute -inset-[2px] rounded-2xl animate-border bg-[length:200%_200%] bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-500 opacity-90 blur-[2px]" />
              <span className="absolute inset-0 rounded-2xl bg-slate-950/30 border border-white/12 backdrop-blur-2xl shadow-[0_18px_60px_-18px_rgba(0,180,255,0.75)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_22px_74px_-20px_rgba(0,200,255,0.95)]" />
              <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-white/18 to-transparent" />
              <span className="absolute inset-0 rounded-2xl overflow-hidden">
                <span className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-white/20 blur-md opacity-0 group-hover:opacity-100 animate-shine" />
              </span>
              <span className="relative inline-flex items-center gap-2">
                Hire Me
                <ArrowRight
                  size={18}
                  className="transition-all duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          </div>
        </Reveal>
      </div>

      <style jsx>{`
        @keyframes borderMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-border {
          animation: borderMove 3.2s ease-in-out infinite;
        }

        @keyframes shine {
          0% {
            transform: translateX(-140%) rotate(12deg);
            opacity: 0;
          }
          25% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(320%) rotate(12deg);
            opacity: 0;
          }
        }
        .animate-shine {
          animation: shine 2.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="relative rounded-3xl px-4 py-2 text-sm font-bold font-mont text-blue-100">
    <span className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-500/60 via-cyan-300/50 to-indigo-500/60 blur-lg opacity-40" />
    <span className="absolute inset-0 rounded-3xl bg-white/10 border border-white/12 backdrop-blur-3xl shadow-[0_0_34px_rgba(0,180,255,0.22)]" />
    <span className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/12 to-transparent opacity-70" />
    <span className="relative">{children}</span>
  </div>
);
