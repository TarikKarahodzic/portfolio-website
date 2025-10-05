
'use client';
import AboutTabs from "../../components/AboutTabs";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Page() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the heading
      gsap.from('h1', {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });

      // Animate the tabs content
      gsap.from('.tab-content', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.tab-content',
          start: 'top center+=100',
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
    <main className="min-h-screen">
      <h1 className="text-center text-moss text-5xl font-bold pt-25">About Me</h1>
      <AboutTabs />
    </main>
  );
}
