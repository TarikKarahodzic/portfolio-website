'use client';

import Link from "next/link";
import React from "react";
import { FaReact, FaWordpress, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiSupabase, SiTypescript, SiPython } from "react-icons/si";

export default function Home() {

  return (
    <main className="">
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold">Hi, I’m Tarik Karahodzic</h1>
        <p className="mt-4 text-xl text-gray-600">
          Software Engineer building responsive web apps with React, Next.js & WordPress.
        </p>
        <div className="mt-6 flex gap-4">
          <Link href="/projects" className="px-6 py-3 bg-emerald-500 text-black rounded-full shadow hover:bg-sky-600 hover:text-white">
            View Projects
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-sky-600 text-sky-600 rounded-full hover:bg-sky-600 hover:text-white">
            Contact Me
          </Link>
        </div>
      </section>

      <section className="py-40 bg-gray-50 text-center">
        <h2 className="text-5xl font-bold mb-12 text-black">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-2xl font-semibold mb-2 text-black">Web Development</h3>
            <p className="text-gray-600">Building scalable, modern apps with React, Next.js, and TypeScript.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl text-black">
            <h3 className="text-2xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">Creating clean, user-friendly interfaces with Tailwind & Figma.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl text-black">
            <h3 className="text-2xl font-semibold mb-2">WordPress</h3>
            <p className="text-gray-600">Custom themes, plugins, and Elementor sites optimized for performance.</p>
          </div>
        </div>
      </section>

      <section className="py-35 text-center">
        <h2 className="text-5xl font-bold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link href="#" className="group block bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg">
            <img src="/projects/barbershop.png" alt="Barbershop App" className="w-full h-48 object-cover group-hover:scale-105 transition" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">Barbershop Booking App</h3>
              <p className="text-gray-600">React Native + Supabase</p>
            </div>
          </Link>
          <Link href="#" className="group block bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg">
            <img src="/projects/barbershop.png" alt="Barbershop App" className="w-full h-48 object-cover group-hover:scale-105 transition" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">Portfolio Website</h3>
              <p className="text-gray-600">Next.js + Tailwind</p>
            </div>
          </Link>
          <Link href="#" className="group block bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg">
            <img src="/projects/barbershop.png" alt="Barbershop App" className="w-full h-48 object-cover group-hover:scale-105 transition" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-black">TECA Design Platform</h3>
              <p className="text-gray-600">WordPress + BuddyPress</p>
            </div>
          </Link>
        </div>
        <div className="mt-15">
          <Link href="/projects" className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700">
            See All Projects
          </Link>
        </div>
      </section>


      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-5xl font-bold mb-12 text-black">What People Say</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <blockquote className="p-6 bg-white shadow rounded-xl">
            <p className="text-lg italic text-gray-700">“Tarik is a fast learner and delivers projects with great attention to detail. His frontend skills stand out.”</p>
            <footer className="mt-4 text-sm font-semibold text-black">— Mentor at OnRush Studio</footer>
          </blockquote>
          <blockquote className="p-6 bg-white shadow rounded-xl">
            <p className="text-lg italic text-gray-700">“Working with Tarik was seamless — professional, reliable, and creative.”</p>
            <footer className="mt-4 text-sm font-semibold text-black">— Client Feedback</footer>
          </blockquote>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-5xl font-bold mb-12">Tech I Work With</h2>
        <div className="flex justify-center gap-10 flex-wrap">
          <FaReact className="text-3xl" title="React" />
          <SiNextdotjs className="text-3xl" title="Next.js" />
          <SiTailwindcss className="text-3xl" title="Tailwind CSS" />
          <FaWordpress className="text-3xl" title="WordPress" />
          <SiSupabase className="text-3xl" title="Supabase" />
          <SiPython className="text-3xl" title="Python" />
          <FaGithub className="text-3xl" title="GitHub" />
        </div>
      </section>

      <section className="py-20 bg-indigo-600 text-white text-center">
        <h2 className="text-5xl font-bold mb-6">Let’s Build Something Amazing</h2>
        <p className="mb-8 text-lg">I’m always open to freelance projects, collaborations, or job opportunities.</p>
        <Link href="/contact" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow hover:bg-gray-100">
          Contact Me
        </Link>
      </section>
    </main >
  );
}
