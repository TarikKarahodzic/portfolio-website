'use client';

import Link from "next/link";
import React from "react";
import Card from "../components/Card";
import { FaReact, FaWordpress, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiSupabase, SiTypescript, SiPython } from "react-icons/si";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import TestimonialCard from "../components/TestimonialCard";
import TechIcon from "../components/TechIcon";

const techStack = [
  { icon: <FaReact />, label: "React", color: "text-sky-500" },
  { icon: <SiNextdotjs />, label: "Next.js", color: "text-black" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "text-cyan-400" },
  { icon: <FaWordpress />, label: "WordPress", color: "text-blue-700" },
  { icon: <SiSupabase />, label: "Supabase", color: "text-green-500" },
  { icon: <SiPython />, label: "Python", color: "text-yellow-500" },
  { icon: <FaGithub />, label: "GitHub", color: "text-gray-700" },
];

export default function Home() {

  return (
    <main>
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold text-primary">Hi, I’m Tarik Karahodzic</h1>
        <p className="mt-2 text-xl text-primary">
          Software Engineer building responsive web apps with React, Next.js & WordPress.
        </p>
        <div className="mt-6 flex gap-4">
          <Link href="/contact" className="px-6 py-3 btn-primary rounded-full">
            Contact Me
          </Link>
          <Link href="/projects" className="px-6 py-3 btn-secondary rounded-full">
            View Projects
          </Link>
        </div>
      </section>

      <section className="py-40 bg-primary text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12 text-charcoal">
          What I Do
        </h2>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
          <Card
            icon={<FaReact className="h-6 w-6 text-black" />}
            title="Web Development"
            desc="Building scalable, modern apps with React, Next.js, and TypeScript."
          />
          <Card
            icon={<SiTailwindcss className="h-6 w-6 text-black" />}
            title="UI/UX Design"
            desc="Creating clean, user-friendly interfaces with Tailwind & Figma."
          />
          <Card
            icon={<FaWordpress className="h-6 w-6 text-black" />}
            title="WordPress"
            desc="Custom themes, plugins, and Elementor sites optimized for performance."
          />
        </div>
      </section>

      <section className="py-40 text-center">
        <h2 className="text-5xl font-bold mb-22 text-primary">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <FeaturedProjectCard
            title="Barbershop Booking App"
            desc="React Native + Supabase"
            image="/projects/barbershop.png"
            link="#"
          />
          <FeaturedProjectCard
            title="Portfolio Website"
            desc="Next.js + Tailwind"
            image="/projects/portfolio.png"
            link="#"
          />
          <FeaturedProjectCard
            title="TECA Design Platform"
            desc="WordPress + BuddyPress"
            image="/projects/teca.png"
            link="#"
          />
        </div>

        <div className="mt-16">
          <a
            href="/projects"
            className="
            inline-block px-6 py-3 rounded-full font-bold 
            bg-accent text-charcoal
            shadow transition duration-300 ease-in-out 
            hover:text-primary
          "
          >
            See All Projects
          </a>
        </div>
      </section>

      <section className="py-40 bg-primary text-center">
        <h2 className="text-5xl font-bold mb-12 text-charcoal">
          What People Say
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <TestimonialCard
            text="Tarik is a fast learner and delivers projects with great attention to detail. His frontend skills stand out."
            author="Mentor at OnRush Studio"
          />
        </div>
      </section>

      <section className="py-20 text-center bg-background">
        <h2 className="text-5xl font-bold mb-12 text-primary">
          Tech I Work With
        </h2>
        <div className="flex justify-center gap-12 flex-wrap max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <TechIcon key={index} icon={tech.icon} label={tech.label} color={tech.color} />
          ))}
        </div>
      </section>

      <section className="py-20 bg-accent text-moss text-center">
        <h2 className="text-5xl font-bold mb-6">Let’s Build Something Amazing</h2>
        <p className="mb-8 text-lg">I’m always open to freelance projects, collaborations, or job opportunities.</p>
        <Link href="/contact" className="px-6 py-3 btn-primary rounded-full">
          Contact Me
        </Link>
      </section>
    </main >
  );
}
