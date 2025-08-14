import { useEffect } from "react";
import gsap from "gsap";

export const useFadeIn = (selector: string) => {
    useEffect(() => {
        gsap.from(selector, {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
        });
    }, []);
}