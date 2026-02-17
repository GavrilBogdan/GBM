"use client";
import React, { useState } from "react";

import Navbar from "../components/Navbar";
import BookingModal from "../components/BookingModal";
import { Check, Snowflake, Zap, Crown } from "lucide-react";

const FadeIn = ({ children, delay = 0 }: any) => (
  <div
    className="animate-fadeIn opacity-0 translate-y-4"
    style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
  >
    {children}
    <style jsx>{`
      @keyframes fadeIn {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fadeIn {
        animation: fadeIn 0.8s ease-out forwards;
      }
    `}</style>
  </div>
);

const PricingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<{
    title: string;
    price: string;
  } | null>(null);

  const handleOpenModal = (title: string, price: string) => {
    setSelectedPkg({ title, price });
    setIsModalOpen(true);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden px-6 py-24 select-none">
      <Navbar />

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPkg?.title || ""}
        price={selectedPkg?.price || ""}
      />

      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 85%)",
        }}
      />

      <span className="absolute w-[40rem] h-[40rem] bg-blue-400/20 blur-[120px] rounded-full top-0 left-1/2 -translate-x-1/2 -z-10" />

      <div className="w-full flex flex-col items-center justify-center max-w-6xl mx-auto mt-10">
        <FadeIn>
          <div className="text-center mb-16 space-y-4">
            <h1 className="font-bai font-extrabold text-4xl sm:text-6xl text-slate-100 tracking-tight">
              Transparent Investment
            </h1>
            <p className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-mont text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Choose the package that fits your needs.
              <br className="hidden sm:block" />
              High-quality website regardless of budget.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-center">
          <FadeIn delay={100}>
            <PriceCard
              icon={<Snowflake size={32} className="text-blue-500" />}
              title="Social Media Package"
              price="Starting from 95 RON"
              description="3 customized posts for Facebook and Instagram."
              features={[
                "Tailored to your brand identity",
                "Professional and engaging design",
                "Revision and adjustment included",
                "Perfect for promotion and engagement",
                "Fast delivery within 3 business days",
              ]}
              onSelect={() =>
                handleOpenModal("Social Media Post Package", "95 RON")
              }
            />
          </FadeIn>

          <FadeIn delay={200}>
            <PriceCard
              icon={<Zap size={32} className="text-white" />}
              title="Business Website"
              price="Starting from 1600 RON"
              description="Modern and responsive website for your business, with custom design and SEO optimization."
              recommended
              features={[
                "Custom and responsive design",
                "Fast loading speed",
                "SEO optimization for better visibility",
                "Contact page with integrated form",
                "User-friendly experience",
                "Google Maps integration",
                "Delivery within 14 days",
              ]}
              onSelect={() =>
                handleOpenModal("Business Presentation Website", "1600 RON")
              }
            />
          </FadeIn>

          <FadeIn delay={300}>
            <PriceCard
              icon={<Crown size={32} className="text-purple-500" />}
              title="Landing Page"
              price="Starting from 800 RON"
              description="Ideal for marketing campaigns and promoting small businesses or services."
              features={[
                "Modern and attractive design",
                "Optimized for conversions",
                "Responsive and user-friendly",
                "Suitable for small businesses and freelancers",
                "Perfect for promoting services or products",
                "Integrated contact form",
                "Delivery within 7 business days",
              ]}
              onSelect={() => handleOpenModal("Landing Page", "800 RON")}
            />
          </FadeIn>
        </div>

        <FadeIn delay={500}>
          <div className="mt-16 text-center space-y-8">
            <p className="text-blue-400/60 font-mont text-sm max-w-xl mx-auto border-t border-blue-300 pt-8">
              * The displayed prices apply to standard services. For complex
              projects or special requirements, please request a custom quote.
              <br />* By submitting your request, you agree to the processing of
              your data.
            </p>

            <button
              onClick={() => (window.location.href = "/form")}
              className="inline-block px-12 py-4 bg-blue-400 cursor-pointer hover:bg-blue-700 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Request a Custom Quote
            </button>
          </div>
        </FadeIn>
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

export default PricingPage;

const PriceCard = ({
  icon,
  title,
  price,
  description,
  features,
  recommended = false,
  onSelect,
}: {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  onSelect?: () => void;
}) => {
  return (
    <div
      className={`
        relative flex flex-col p-8 rounded-3xl transition-all duration-300
        ${
          recommended
            ? "bg-blue-600 text-white shadow-2xl shadow-blue-500/40 scale-100 lg:scale-110 z-10 ring-4 ring-blue-200/30"
            : "bg-white/60 backdrop-blur-xl border border-white/60 hover:border-blue-300 shadow-lg text-slate-800 hover:bg-white"
        }
      `}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
          Recommended
        </div>
      )}

      <div className="mb-6">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
            recommended ? "bg-white/20" : "bg-blue-50"
          }`}
        >
          {icon}
        </div>

        <h3
          className={`font-inter font-bold text-2xl mb-2 ${
            recommended ? "text-white" : "text-slate-800"
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-sm leading-relaxed ${
            recommended ? "text-blue-100" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      </div>

      <div className="mb-4 flex items-baseline gap-1">
        <span
          className={`text-3xl font-black ${
            recommended ? "text-white" : "text-slate-900"
          }`}
        >
          {price}
        </span>
      </div>

      <div
        className={`h-px w-full mb-8 ${
          recommended ? "bg-white/20" : "bg-slate-200"
        }`}
      />

      <ul className="flex flex-col gap-4 mb-8 flex-grow">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3 text-sm font-medium">
            <Check
              size={18}
              className={`shrink-0 mt-0.5 ${
                recommended ? "text-blue-200" : "text-blue-500"
              }`}
            />
            <span className={recommended ? "text-blue-50" : "text-slate-600"}>
              {feat}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={onSelect}
        className={`
          w-full py-3 rounded-xl font-bold text-center transition-all cursor-pointer
          ${
            recommended
              ? "bg-white text-blue-700 hover:bg-blue-50 shadow-md"
              : "bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800"
          }
        `}
      >
        Choose {title}
      </button>
    </div>
  );
};
