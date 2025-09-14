'use client';

import React from "react";
import type { Testimonial } from "../data/testimonitals";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="mx-auto w-full rounded-2xl bg-white p-8 shadow ring-1 ring-black/5">
      <div
        key={t.name + t.quote}
        className="transition-opacity duration-500 ease-out opacity-100"
      >
        <blockquote className="text-center">
          <p className="italic text-charcoal">“{t.quote}”</p>
          <figcaption className="mt-6 text-sm font-semibold text-black">
            — {t.name} <span className="font-normal text-black/60">| {t.role}</span>
          </figcaption>
        </blockquote>
      </div>
    </figure>
  );
}