'use client';

import Link from "next/link";
import Image from "next/image";
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
        bg-moss
        shadow transition 
        hover:shadow-lg
      "
    >
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover 
            transition-transform duration-300 
            group-hover:scale-105
          "
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-primary">
          {title}
        </h3>
        <p className="text-accent">{desc}</p>
      </div>
    </Link>
  );
}
