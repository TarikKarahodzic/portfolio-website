'use client';
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";
// import FilterBar from "../projects/FilterBar";

import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsPage() {
  // const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      const tl = gsap.timeline();
      tl.from('h1', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      })
      .from('p', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.4');

      // Animate project cards with a stagger effect
      gsap.from('.project-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: {
          each: 0.2,
          grid: [3, 3],
          from: "start"
        },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.project-card',
          start: 'top bottom-=100',
          toggleActions: 'play none none none'
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      ctx.revert();
    };
  }, []);

  return (
    <main className="min-h-[calc(100vh-64px)] mx-auto max-w-7xl pt-25 px-5 pb-20">
      <h1 className="text-6xl font-bold text-moss">Projects</h1>
      <p className="mt-2 text-charcoal">
        A selection of my work across web and mobile.
      </p>

      <section className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div className="project-card" key={project.slug}>
            <ProjectCard p={project} />
          </div>
        ))}
      </section>

      {/* <FilterBar allTags={allTags} /> */}
    </main>
  );
}
