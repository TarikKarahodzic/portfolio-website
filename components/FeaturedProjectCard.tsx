// components/FeaturedProjectCard.tsx
'use client';

import Link from "next/link";
import React from "react";

type FeaturedProjectCardProps = {
  title: string;
  desc: string;
  image: string;
  link: string;
};

export default function FeaturedProjectCard({ title, desc, image, link }: FeaturedProjectCardProps) {
  return (
    <Link
      href={link}
      className="
        group block rounded-xl overflow-hidden 
        bg-accent
        shadow transition 
        hover:shadow-lg
      "
    >
      <img
        src={image}
        alt={title}
        className="
          w-full h-48 object-cover 
          transition-transform duration-300 
          group-hover:scale-105
        "
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-black">
          {title}
        </h3>
        <p className="text-charcoal">{desc}</p>
      </div>
    </Link>
  );
}
