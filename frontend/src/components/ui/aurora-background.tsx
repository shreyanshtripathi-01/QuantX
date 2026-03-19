"use client";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className = "",
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main
      className={`relative flex flex-col h-full items-center justify-center bg-black text-white transition-bg ${className}`}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`
            absolute -inset-[10px] opacity-70 will-change-transform pointer-events-none
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,#171716_10%,#100a24_20%,#423e51_30%)]
            bg-[length:300%_200%]
            bg-[position:-50%_50%]
            animate-aurora
            [background-image:var(--dark-gradient),var(--aurora)]
            after:content-[""]
            after:absolute
            after:inset-0
            after:[background-image:var(--dark-gradient),var(--aurora)]
            after:bg-[length:200%_200%]
            after:animate-aurora
            after:[animation-direction:reverse]
            after:mix-blend-difference
          `}
        ></div>
        {showRadialGradient && (
          <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(ellipse_at_top,transparent_20%,black)] pointer-events-none" />
        )}
      </div>
      {children}
    </main>
  );
};
