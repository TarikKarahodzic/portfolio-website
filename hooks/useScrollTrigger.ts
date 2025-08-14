import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export function useScrollTrigger(selector: string) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const elements = gsap.utils.toArray<HTMLElement>(selector);

        elements.forEach((element) => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
            });
        });
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
    }, [selector]);
}