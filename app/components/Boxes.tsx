import React from "react";
import { Sparkles, Smartphone, Zap, Wallet } from "lucide-react";

const Boxes = () => {
  return (
    <section className="w-full mt-20 mb-40">
      <div className="grid grid-cols-1 sm:grid-cols-4 max-w-5xl mx-auto gap-6 px-8">
        <div className="group flex flex-col items-center gap-3 rounded-xl bg-white/[0.025] p-5 ring-1 ring-indigo-500/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:ring-indigo-500/40 hover:shadow-[0_14px_28px_-18px_rgba(99,102,241,0.45)]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/15 ring-1 ring-indigo-400/30 transition-colors group-hover:bg-indigo-500/25">
            <Sparkles className="h-4 w-4 text-indigo-400" />
          </div>
          <h4 className="text-xs font-semibold text-white tracking-wide">
            Modern
          </h4>
        </div>

        <div className="group flex flex-col items-center gap-3 rounded-xl bg-white/[0.025] p-5 ring-1 ring-indigo-500/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:ring-indigo-500/40 hover:shadow-[0_14px_28px_-18px_rgba(99,102,241,0.45)]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/15 ring-1 ring-indigo-400/30 transition-colors group-hover:bg-indigo-500/25">
            <Smartphone className="h-4 w-4 text-indigo-400" />
          </div>
          <h4 className="text-xs font-semibold text-white tracking-wide">
            Responsive
          </h4>
        </div>

        <div className="group flex flex-col items-center gap-3 rounded-xl bg-white/[0.025] p-5 ring-1 ring-indigo-500/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:ring-indigo-500/40 hover:shadow-[0_14px_28px_-18px_rgba(99,102,241,0.45)]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/15 ring-1 ring-indigo-400/30 transition-colors group-hover:bg-indigo-500/25">
            <Zap className="h-4 w-4 text-indigo-400" />
          </div>
          <h4 className="text-xs font-semibold text-white tracking-wide">
            Fast
          </h4>
        </div>

        <div className="group flex flex-col items-center gap-3 rounded-xl bg-white/[0.025] p-5 ring-1 ring-indigo-500/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:ring-indigo-500/40 hover:shadow-[0_14px_28px_-18px_rgba(99,102,241,0.45)]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/15 ring-1 ring-indigo-400/30 transition-colors group-hover:bg-indigo-500/25">
            <Wallet className="h-4 w-4 text-indigo-400" />
          </div>
          <h4 className="text-xs font-semibold text-white tracking-wide">
            Affordable
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
