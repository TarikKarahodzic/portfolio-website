"use client";

import Link from "next/link";
import React, { useLayoutEffect, useState, useEffect, useRef } from "react";
import Card from "../components/Card";
import { FaReact, FaWordpress } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import TestimonialsRotator from "../components/TestimonialsRotator";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradualBlur from "../components/GradualBlur";
import Silk from "../components/Slik";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [isLastSectionVisible, setIsLastSectionVisible] = useState(false);
  const lastSectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !lastSectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: lastSectionRef.current,
      start: "top bottom-=200",
      end: "bottom bottom",
      onEnter: () => setIsLastSectionVisible(true),
      onLeaveBack: () => setIsLastSectionVisible(false),
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <main>
      {/* Content */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-5 relative">
        <div className="absolute inset-0 z-0">
          <Silk
            speed={5}
            scale={1}
            color="#3E6259"
            noiseIntensity={0.7}
            rotation={0}
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-accent">
            Hi, I’m Tarik Karahodzic
          </h1>
          <p className="mt-2 text-xl text-accent">
            Software Engineer building responsive web apps with React, Next.js &
            other technologies.
          </p>
          <div className="mt-6 flex gap-4 justify-center items-center w-full">
            <Link
              href="/contact"
              className="px-8 py-3 btn-primary rounded-full text-md font-medium hover:scale-105 transition-transform"
            >
              Contact Me
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3 btn-secondaryhero rounded-full text-md font-medium hover:scale-105 transition-transform"
            >
              View Projects
            </Link>
          </div>
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

      <section
        ref={lastSectionRef}
        className="py-20 bg-accent text-moss text-center"
      >
        <h2 className="text-5xl font-bold mb-6">
          Let’s Build Something Amazing
        </h2>
        <p className="mb-8 text-lg">
          I’m always open to freelance projects, collaborations, or job
          opportunities.
        </p>
        <Link href="/contact" className="px-6 py-3 btn-primary rounded-full">
          Contact Me
        </Link>
      </section>
      {!isLastSectionVisible && (
        <GradualBlur
          target="page"
          position="bottom"
          height="12rem"
          strength={3}
          divCount={8}
          curve="bezier"
          exponential={true}
          opacity={1}
          zIndex={1000}
          animated={true}
          duration="0.3s"
          responsive={true}
          mobileHeight="6rem"
          tabletHeight="8rem"
          desktopHeight="12rem"
        />
      )}
    </main>
  );
}

/* Plasma, beams, aurora, pixelblast, silk */
/* 
  LAYERED PINNING
*/
