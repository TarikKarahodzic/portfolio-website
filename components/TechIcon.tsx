// components/TechIcon.tsx
'use client';

import React from "react";

type TechIconProps = {
  icon: React.ReactNode;
  label: string;
  color?: string; // optional for brand colors
};

export default function TechIcon({ icon, label, color }: TechIconProps) {
  return (
    <div className="flex flex-col items-center group">
      <div
        className={`
          text-5xl transition-transform duration-200 
          group-hover:scale-110
          ${color ?? "text-primary"}
        `}
      >
        {icon}
      </div>
      <span className="mt-2 text-sm text-accent">{label}</span>
    </div>
  );
}
