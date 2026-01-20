import React from "react";
import { Code, Layout, Zap, Search, Smartphone, Shield } from "lucide-react";

const page = () => {
  return (
    <section className="min-h-screen text-blue-100 flex flex-col items-center justify-center  relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl animate-floatSlow" />
        <div className="absolute right-20 top-1/3 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl animate-floatMedium" />
        <div className="absolute left-1/3 bottom-20 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl animate-floatFast" />
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[";", "</>", "+", "#", "*", "{ }"].map((symbol, i) => (
          <span
            key={i}
            className="floating-symbol absolute text-white/10 font-mono  select-none"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              fontSize: `${18 + i * 6}px`,
              animationDelay: `${i * 1.5}s`,
            }}
          >
            {symbol}
          </span>
        ))}
      </div>
      <div className="mt-[10rem]">
        <h2 className="relative text-center font-inter font-extrabold text-5xl sm:text-6xl leading-tight text-white">
          What Do I Offer?
          <span className="block bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Services Built For Results
          </span>
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center mt-[5rem] mb-[10rem] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 hover:-translate-y-1 hover:rotate-[0.3deg]">
          <div className="group animate-cardFloat text-center bg-white/5 backdrop-blur-3xl shadow-lg shadow-blue-500/20 border border-indigo-700/40 rounded-3xl p-8 w-[15rem] sm:w-[20rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40">
            <Layout className="mx-auto mb-3 h-7 w-7 text-indigo-400" />
            <h3 className="text-white font-semibold text-lg">Modern Design</h3>
            <p className="mt-2 text-sm text-white/70">
              Clean, professional layouts that look great on any device.
            </p>
          </div>

          <div className="group animate-cardFloat text-center bg-white/5 backdrop-blur-3xl shadow-lg shadow-blue-500/20 border border-indigo-700/40 rounded-3xl p-8 w-[15rem] sm:w-[20rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40">
            <Code className="mx-auto mb-3 h-7 w-7 text-indigo-400" />
            <h3 className="text-white font-semibold text-lg">
              Custom Development
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Hand-coded websites tailored to your brand and goals.
            </p>
          </div>

          <div className="group animate-cardFloat text-center bg-white/5 backdrop-blur-3xl shadow-lg shadow-blue-500/20 border border-indigo-700/40 rounded-3xl p-8 w-[15rem] sm:w-[20rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40">
            <Zap className="mx-auto mb-3 h-7 w-7 text-indigo-400" />
            <h3 className="text-white font-semibold text-lg">
              Fast Performance
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Optimized for speed, smooth UX, and better conversions.
            </p>
          </div>

          <div className="group animate-cardFloat text-center bg-white/5 backdrop-blur-3xl shadow-lg shadow-blue-500/20 border border-indigo-700/40 rounded-3xl p-8 w-[15rem] sm:w-[20rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40">
            <Search className="mx-auto mb-3 h-7 w-7 text-indigo-400" />
            <h3 className="text-white font-semibold text-lg">SEO Ready</h3>
            <p className="mt-2 text-sm text-white/70">
              Built with structure and performance that Google loves.
            </p>
          </div>

          <div className="group animate-cardFloat text-center bg-white/5 backdrop-blur-3xl shadow-lg shadow-blue-500/20 border border-indigo-700/40 rounded-3xl p-8 w-[15rem] sm:w-[20rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40">
            <Smartphone className="mx-auto mb-3 h-7 w-7 text-indigo-400" />
            <h3 className="text-white font-semibold text-lg">
              Mobile Friendly
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Fully responsive for phones, tablets, and desktops.
            </p>
          </div>

          <div className="group cursor-pointer animate-cardFloat text-center bg-white/5 backdrop-blur-3xl shadow-lg shadow-blue-500/20 border border-indigo-700/40 rounded-3xl p-8 w-[15rem] sm:w-[20rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40">
            <Shield className="mx-auto mb-3 h-7 w-7 text-indigo-400" />
            <h3 className="text-white font-semibold text-lg">Secure Setup</h3>
            <p className="mt-2 text-sm text-white/70">
              Best practices for security, reliability, and stability.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-[10rem] max-w-4xl rounded-3xl border border-indigo-500/30 bg-white/5 backdrop-blur-2xl p-10 text-center shadow-[0_20px_60px_-20px_rgba(99,102,241,0.6)]">
        <h3 className="text-3xl sm:text-4xl font-inter font-extrabold text-white">
          Let’s Build Your Website
        </h3>

        <p className="mt-3 text-white/70 text-sm sm:text-base max-w-xl mx-auto">
          I design and develop modern, fast websites that help businesses stand
          out and grow online.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-500/40 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/70"
          >
            Start Your Project
          </a>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-8 py-4 font-semibold text-white/80 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/20 animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
