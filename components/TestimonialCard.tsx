'use client';

import React from "react";

type TestimonialCardProps = {
  text: string;
  author: string;
}

export default function TestimonialCard({ text, author }: TestimonialCardProps) {
  return (
    <blockquote
      className="p-6 bg-primary shadow rounded-xl
      transition-all duration-200 hover:shadow-lg"
    >
      <p className="text-lg italic text-charcoal">"{text}"</p>
      <footer className="mt-4 text-sm font-semibold text-black">— {author}</footer>
    </blockquote>
  );
}