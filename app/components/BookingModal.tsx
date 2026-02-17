"use client";

import React, { useEffect, useMemo, useState } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: string; // comes from PricingPage
  price: string; // optional; we use our internal package map for consistency
}

const PACKAGES = [
  {
    title: "Social Media Post Package",
    price: "Starting from 95 RON",
    short: "3 custom posts for Facebook & Instagram",
  },
  {
    title: "Business Presentation Website",
    price: "Starting from 1600 RON",
    short: "Modern website + SEO + contact form",
  },
  {
    title: "Landing Page",
    price: "Starting from 800 RON",
    short: "Optimized for conversions and campaigns",
  },
] as const;

const BookingModal = ({
  isOpen,
  onClose,
  selectedPackage,
}: BookingModalProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // optional inline error (better UX than alert)
  const [error, setError] = useState<string>("");

  const initialPkg = useMemo(() => {
    const found = PACKAGES.find((p) => p.title === selectedPackage);
    return found ?? PACKAGES[1];
  }, [selectedPackage]);

  const [pkgTitle, setPkgTitle] = useState<string>(initialPkg.title);

  useEffect(() => {
    if (!isOpen) return;
    setSuccess(false);
    setError("");
    setPkgTitle(initialPkg.title);
  }, [isOpen, initialPkg.title]);

  const pkg = useMemo(() => {
    return PACKAGES.find((p) => p.title === pkgTitle) ?? PACKAGES[1];
  }, [pkgTitle]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // anti spam-click
    if (loading) return;

    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "pricing-modal",
          packageTitle: pkg.title,
          packagePriceLabel: pkg.price,
          userName: formData.get("user_name"),
          userPhone: formData.get("user_phone"),
          userEmail: formData.get("user_email"),
          userMessage: formData.get("user_message"),
        }),
      });

      // ✅ safe parsing even when body is empty
      const text = await response.text();
      const data = text ? JSON.parse(text) : null;

      if (!response.ok) {
        setError(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);
      e.currentTarget.reset();
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Decorative grid like main page */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 70%)",
        }}
      />
      <span className="absolute w-[32rem] h-[32rem] bg-blue-400/20 blur-[120px] rounded-full top-10 left-1/2 -translate-x-1/2 pointer-events-none" />

      {/* Modal */}
      <div className="relative w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl">
        <div className="bg-white/60 backdrop-blur-xl border border-white/60">
          {/* Header */}
          <div className="relative bg-blue-600 text-white px-6 py-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-xl">Request a Quote</h3>
                <p className="text-blue-100 text-sm">
                  Choose your package and provide your details
                </p>
              </div>

              <button
                onClick={handleClose}
                className="p-2 rounded-xl hover:bg-white/10 transition"
                aria-label="Close"
              >
                <X />
              </button>
            </div>

            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-20 bg-white/20 blur-2xl rounded-full" />
          </div>

          {/* Body */}
          <div className="p-6 max-h-[80svh] overflow-y-auto overscroll-contain">
            {success ? (
              <div className="flex flex-col items-center py-8 text-center">
                <CheckCircle size={48} className="text-blue-600 mb-4" />
                <h4 className="text-2xl font-bold text-slate-900">
                  Request Sent!
                </h4>
                <p className="text-slate-600 mt-2">
                  We will contact you as soon as possible.
                </p>

                <button
                  onClick={handleClose}
                  className="mt-6 px-10 py-3 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-xl font-bold transition-all"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Package options */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PACKAGES.map((p) => {
                    const active = pkgTitle === p.title;
                    return (
                      <button
                        type="button"
                        key={p.title}
                        onClick={() => {
                          setError("");
                          setPkgTitle(p.title);
                        }}
                        className={`text-left p-4 rounded-2xl transition-all border ${
                          active
                            ? "bg-blue-600 text-white border-blue-200/30 shadow-xl shadow-blue-500/30"
                            : "bg-white/50 border-white/60 hover:bg-white/70"
                        }`}
                      >
                        <p className="font-bold text-sm">{p.title}</p>
                        <p
                          className={`text-xs mt-1 ${
                            active ? "text-blue-100" : "text-slate-600"
                          }`}
                        >
                          {p.short}
                        </p>
                        <p
                          className={`mt-3 font-black ${
                            active ? "" : "text-blue-700"
                          }`}
                        >
                          {p.price}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Selected summary */}
                <div className="p-4 rounded-2xl bg-blue-600 text-white font-bold text-center shadow-xl shadow-blue-500/30">
                  Selected Package: {pkg.title} • {pkg.price}
                </div>

                {/* Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    required
                    name="user_name"
                    placeholder="Full Name"
                    className="w-full border border-white/60 bg-white/70 backdrop-blur-xl rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <input
                    required
                    name="user_phone"
                    placeholder="Phone Number"
                    className="w-full border border-white/60 bg-white/70 backdrop-blur-xl rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <input
                    name="user_email"
                    type="email"
                    placeholder="Email (optional)"
                    className="sm:col-span-2 w-full border border-white/60 bg-white/70 backdrop-blur-xl rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <textarea
                    name="user_message"
                    placeholder="Project details (optional) — industry, number of pages, examples, deadline, etc."
                    rows={4}
                    className="sm:col-span-2 w-full border border-white/60 bg-white/70 backdrop-blur-xl rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                  />
                </div>

                {/* Error message (inline, keeps design) */}
                {error && (
                  <div className="text-sm font-bold bg-red-50 text-red-600 border border-red-100 p-3 rounded-xl">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all ${
                    loading
                      ? "bg-blue-400 text-white cursor-not-allowed opacity-80"
                      : "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-500/30 hover:-translate-y-0.5"
                  }`}
                >
                  {loading && <Loader2 className="animate-spin" />}
                  {loading ? "Sending..." : "Send Request"}
                </button>

                {/* Disclaimer */}
                <div className="space-y-2">
                  <p className="text-xs text-center text-slate-600">
                    Prices are indicative. Final offer depends on project
                    requirements.
                  </p>
                  <p className="text-xs text-center text-slate-600">
                    By submitting this form, you agree to the processing of your
                    data.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
