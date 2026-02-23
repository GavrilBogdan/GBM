"use client";

import React from "react";
import { useInView } from "./useInView";

type Props = {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
};

export function Reveal({ children, delayMs = 0, className = "" }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      ].join(" ")}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
