// components/Card.tsx
'use client';

import React from 'react';

type CardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export default function Card({ icon, title, desc }: CardProps) {
  return (
    <div
      className="
        group rounded-2xl p-8 md:p-10
        bg-accent
        ring-1 ring-black/5 shadow-sm
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-lg hover:ring-black/10
      "
    >
      <div
        className="
          mx-auto mb-5 flex h-12 w-12 items-center justify-center
          rounded-xl
          bg-accent/40
          ring-2 ring-moss/20
          transition-transform duration-200
          group-hover:scale-105
        "
      >
        {icon}
      </div>

      <h3 className="text-xl md:text-2xl font-semibold text-charcoal mb-2">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-black/60">{desc}</p>
    </div>
  );
}
