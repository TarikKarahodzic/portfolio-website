'use client';

import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../data/testimonitals";

export default function TestimonialRotator({
  interval = 5000,
  fadeMs = 500,
}: { interval?: number; fadeMs?: number }) {
  const [i, setI] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setI((n) => (n + 1) % testimonials.length);
        setFading(false);
      }, fadeMs);
    }, interval);
    return () => clearInterval(id);
  }, [interval, fadeMs]);

  const t = testimonials[i];

  return (
    <section className="py-10 bg-[#F4F8F6]"> {/* mint background */}
      <h2 className="mb-10 text-center text-5xl font-extrabold tracking-tight text-[#22223B]">
        What People Say
      </h2>

      <div
        className="
          mx-auto w-full
          rounded-3xl p-10 md:p-12
          bg-white/90 backdrop-blur shadow-xl ring-1 ring-[#AEF6C7]/60
        "
      >
        {/* small quote badge in your deep green */}
        <div className="mx-auto mb-6 grid h-9 w-9 place-items-center rounded-full bg-[#3E6259] text-white shadow">
          <span className="text-sm leading-none">“”</span>
        </div>

        <figure
          className={`transition-all duration-300 ${fading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}
        >
          <blockquote className="text-center">
            <p className="mx-auto max-w-3xl text-lg leading-relaxed italic text-[#22223B]">
              {t.quote}
            </p>
          </blockquote>

          <figcaption className="mt-7 text-center text-sm font-semibold text-[#22223B]">
            — {t.name}
            <span className="font-normal text-[#3E6259]/70"> | {t.role}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}