import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SmCards from "./components/SmCards";
import Reviews from "./components/Reviews";
import Cta from "./components/Cta";
import Boxes from "./components/Boxes";

export default function Home() {
  return (
    <>
      <main>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl animate-floatSlow" />
          <div className="absolute right-20 top-1/3 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl animate-floatMedium" />
          <div className="absolute left-1/3 bottom-20 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl animate-floatFast" />
        </div>
        <Hero />
        <Boxes />
        <SmCards />
        <Reviews />
        <Cta />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 25 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white/20 animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 12}s`,
              }}
            />
          ))}
        </div>
      </main>
    </>
  );
}
