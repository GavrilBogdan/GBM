"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-x-hidden w-full bg-indigo-700 text-white pt-24 pb-12 px-6 border-t border-indigo-400/30">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-20 bg-indigo-400/30 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">
            GBM
          </h1>
          <p className="text-blue-100 leading-relaxed max-w-sm">
            Modern website design services boosting your online presence and
            sales.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <SocialIcon
              icon={<Facebook size={20} />}
              href="https://www.facebook.com/gavril.bogdan.3"
              color="hover:text-blue-300"
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-blue-100 uppercase tracking-wider">
            Navigation
          </h3>
          <ul className="flex flex-col gap-3 text-blue-100/80">
            <FooterLink href="/" text="Home" />
            <FooterLink href="/Services" text="Services" />
            <FooterLink href="/preturi" text="Prices" />
            <FooterLink href="/contact" text="Contact" />
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-blue-100 uppercase tracking-wider">
            Contact
          </h3>
          <div className="flex flex-col gap-5 text-blue-100/90">
            <a
              href="tel:0736810678"
              className="flex items-center gap-3 hover:text-white transition group"
            >
              <div className="p-2 bg-indigo-800/50 rounded-lg group-hover:bg-purple-700 transition">
                <Phone size={20} className="text-purple-300" />
              </div>
              <span className="font-semibold text-lg">0736 810 678</span>
            </a>

            <a
              href="mailto:@yahoo.com"
              className="flex items-center gap-3 hover:text-white transition group"
            >
              <div className="p-2 bg-indigo-800/50 rounded-lg group-hover:bg-purple-700 transition">
                <Mail size={20} className="text-purple-300" />
              </div>
              <span>gavrilbogdan30@gmail.com</span>
            </a>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-800/50 rounded-lg">
                <MapPin size={20} className="text-purple-300" />
              </div>
              <span>Romania</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-indigo-400/30 mt-16 pt-8 flex flex-col items-center gap-6">
        <div className="text-center">
          <p className="text-sm text-green-200/60 text-center">
            © {new Date().getFullYear()} GBM. All rights reserved.
          </p>
          <p className="text-md text-blue-200/90 text-center">
            Designed by{" "}
            <strong>
              <a
                target="_blank"
                href="https://www.instagram.com/gavril__bogdan/"
              >
                GBM
              </a>
            </strong>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <a
            href="https://anpc.ro/ce-este-sal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/sal.webp"
              alt="Solutionarea Online a Litigiilor"
              width={260}
              height={80}
            />
          </a>

          <a
            href="https://europa.eu/youreurope/business/dealing-with-customers/solving-disputes/alternative-dispute-resolution/index_ro.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/sol.webp"
              alt="Solutionarea Alternativa a Litigiilor"
              width={260}
              height={80}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <Link
      href={href}
      className="hover:text-purple-300 hover:pl-2 transition-all duration-300 inline-block"
    >
      {text}
    </Link>
  </li>
);

const SocialIcon = ({
  icon,
  href,
  color,
}: {
  icon: any;
  href: string;
  color: string;
}) => (
  <Link
    href={href}
    target="_blank"
    className={`p-3 bg-indigo-900/40 rounded-full text-white transition-all hover:bg-white hover:-translate-y-1 ${color}`}
  >
    {icon}
  </Link>
);
