"use client";
import React from "react";
import { Reveal } from "./Reveal";

const Hero = () => {
  return (
    <div className="text-white h-screen flex justify-center items-center flex-col overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 grid grid-cols-12 gap-8 text-white/5">
        {Array.from({ length: 120 }).map((_, i) => (
          <span key={i} className="text-lg font-light select-none">
            +
          </span>
        ))}
      </div>
      <div className="absolute bg-blue-800/80  blur-2xl w-[10rem] sm:w-[16rem] h-[14rem] -z-10"></div>
      <div className="absolute bg-blue-800/30 left-0 top-5 blur-3xl hidden sm:flex w-[16rem] h-[8rem] -z-10"></div>
      <div className="absolute bg-blue-800/30 right-0 bottom-5 blur-3xl  w-[16rem] h-[8rem] -z-10"></div>
      <div className="absolute opacity-40 smoothFly text-blue-400 left-4 sm:left-[4rem] top-25 sm:top-[16rem] px-2 py-1 border border-blue-800/30 shadow-2xl shadow-[0_0_24px_rgba(0,180,255,0.25)] backdrop-blur-3xl bg-white/20 rounded-3xl text-md font-bold font-mont">
        Fast & Professional
      </div>

      <div className="absolute opacity-40 smoothFly text-blue-400 right-4 sm:right-[4rem] bottom-15 sm:bottom-[16rem] px-2 py-1 border border-blue-800/30 shadow-2xl shadow-[0_0_24px_rgba(0,180,255,0.4)] backdrop-blur-3xl bg-white/20 rounded-3xl text-sm sm:text-md font-bold font-mont">
        +4 Years of Experience
      </div>

      <Reveal delayMs={200}>
        <h1 className="text-7xl sm:text-8xl font-extrabold font-inter mb-[0.5rem] sm:mb-[1rem]">
          GBM
        </h1>
        <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent my-2 " />
      </Reveal>
      <Reveal delayMs={300}>
        <p className="blue-200 text-2xl text-center font-mont font-light">
          Modern web design & development
        </p>
      </Reveal>
      <Reveal delayMs={400}>
        <div className="flex flex-col sm:flex-row gap-6 justify-evenly mt-4">
          <button className=" cursor-pointer relative inline-flex items-center justify-center px-6 py-3 rounded-xl  text-blue-50 font-medium  bg-white/5 border border-white/10 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.6)] ring-1 ring-white/5 overflow-hidden transition-all duration-300 ease-out hover:-translate-y-0.5  hover:bg-white/7  hover:border-white/16 hover:shadow-[0_14px_36px_-18px_rgba(0,160,255,0.25)] active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50">
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-60" />
            <span className="relative">About Me</span>
          </button>
          <button className=" cursor-pointer relative inline-flex items-center justify-center px-6 py-3 rounded-xl  bg-blue-500/60 backdrop-blur-3xl  text-white font-medium shadow-[0_10px_30px_-12px_rgba(0,160,255,0.6)] ring-1 ring-white/10 overflow-hidden transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-14px_rgba(0,180,255,0.8)] active:translate-y-0 active:shadow-[0_10px_28px_-14px_rgba(0,160,255,0.65)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70">
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/18 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />

            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
            <span className="relative">Hire Me</span>
          </button>
        </div>
      </Reveal>
    </div>
  );
};

export default Hero;
