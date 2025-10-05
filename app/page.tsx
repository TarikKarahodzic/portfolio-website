'use client';

import Link from "next/link";
import React, { useLayoutEffect } from "react";
import Card from "../components/Card";
import { FaReact, FaWordpress } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import TestimonialsRotator from "../components/TestimonialsRotator";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  useLayoutEffect(() => {
    // Context for GSAP to use
    const ctx = gsap.context(() => {
      // Animate sections
      gsap.utils.toArray('section').forEach((section: any, index: number) => {
        // Different animation for the last section (contact)
        if (index === gsap.utils.toArray('section').length - 1) {
          gsap.from(section, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: 'top bottom-=100', // Triggers earlier
              end: 'bottom bottom',
              toggleActions: 'play none none none'
            }
          });
        } else {
          gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top center+=100',
              toggleActions: 'play none none none'
            }
          });
        }
      });
    });

    // Cleanup function
    return () => {
      // Kill all ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      // Kill all GSAP animations in this context
      ctx.revert();
    };
  }, []);

  return (
    <main>
      <section className="h-screen flex flex-col justify-center items-center text-center px-5">
        <h1 className="text-5xl font-bold text-moss">Hi, I’m Tarik Karahodzic</h1>
        <p className="mt-2 text-xl text-moss">
          Software Engineer building responsive web apps with React, Next.js & other technologies.
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
        <h2 className="text-5xl font-extrabold tracking-tight mb-12 text-charcoal">
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

      <section className="py-30 text-center">
        <h2 className="text-5xl font-bold mb-22 text-moss px-2">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          <FeaturedProjectCard
            title="Vectrum Website"
            desc="HTML + CSS + JS"
            image="/images/projects/vectrum.png"
            link="#"
          />
          <FeaturedProjectCard
            title="FabLab Website"
            desc="WordPress + ACF"
            image="/images/projects/fablab.png"
            link="#"
          />
          <FeaturedProjectCard
            title="TECA Design Platform"
            desc="WordPress + BuddyPress"
            image="/images/projects/tecalab.jpg"
            link="#"
          />
        </div>

        <div className="mt-16">
          <Link
            href="/projects"
            className="
            inline-block px-6 py-3 rounded-full font-bold 
            bg-moss text-primary
            shadow transition duration-300 ease-in-out 
            hover:bg-primary hover:text-moss
          "
          >
            See All Projects
          </Link>
        </div>
      </section>

      <section className="py-20 px-2 bg-primary text-center">
        <div className="max-w-3xl mx-auto space-y-8 px-5">
          <TestimonialsRotator interval={7500} fadeMs={500} />
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

/* 
  LAYERED PINNING
*/