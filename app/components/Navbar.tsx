"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
          hidden md:block
          fixed top-4 left-1/2 -translate-x-1/2
          w-[80%] lg:w-[70%]
          z-50
          backdrop-blur-xl shadow-lg shadow-blue-600/20
          border border-white/20
          shadow-[0_4px_25px_rgba(0,0,0,0.08)]
          rounded-full
        "
      >
        <nav className="w-full px-10 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl text-white">
            GBM
          </Link>

          <div className="flex items-center gap-10">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/Services">Services</NavItem>
            <NavItem href="/preturi">Prices</NavItem>
            <NavItem href="/contact">Contact</NavItem>

            <Link
              href="/form"
              className="
                px-5 py-2 rounded-full bg-gradient-to-r
                from-blue-700 via-blue-500 to-blue-400
                text-white font-semibold shadow-md
                hover:scale-105 transition-all duration-200
              "
            >
              Cere Ofertă
            </Link>
          </div>
        </nav>
      </header>

      <header
        className="
          md:hidden
          fixed top-4 left-1/2 -translate-x-1/2
          w-[92%]
          z-50
          backdrop-blur-xl bg-white/10
          border border-white/20
          shadow-[0_4px_20px_rgba(0,0,0,0.08)]
          rounded-full
          px-6 py-4
          flex justify-between items-center
        "
      >
        <Link href="/" className="font-bold text-xl text-white">
          GBM
        </Link>

        <button onClick={() => setOpen(true)} className="text-blue-700">
          <Menu size={30} />
        </button>
      </header>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`
          fixed top-0 right-0 h-full w-64
          bg-white/20 backdrop-blur-2xl
          border-l border-white/20
          z-50 shadow-xl p-6 flex flex-col gap-6
          transform transition-transform duration-300
          md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          className="self-end text-blue-600 mb-2"
          onClick={() => setOpen(false)}
        >
          <X size={32} />
        </button>

        <MobileNavItem href="/">Acasă</MobileNavItem>
        <MobileNavItem href="/servicii">Servicii</MobileNavItem>
        <MobileNavItem href="/preturi">Prețuri</MobileNavItem>
        <MobileNavItem href="/contact">Contact</MobileNavItem>

        <Link
          href="/form"
          className="
            mt-4 px-3 py-3 rounded-full bg-gradient-to-r
            from-blue-700 via-blue-500 to-blue-400
            text-white text-center font-semibold shadow-lg
            hover:scale-105 transition-all
          "
        >
          Cere Ofertă
        </Link>
      </div>
    </>
  );
};

export default Navbar;

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} className="text-white font-medium relative group">
    {children}
    <span
      className="
        absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600
        group-hover:w-full transition-all duration-300
      "
    />
  </Link>
);

const MobileNavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="
      text-white text-lg font-semibold 
      py-2 rounded-lg hover:bg-white/20 transition
    "
  >
    {children}
  </Link>
);
