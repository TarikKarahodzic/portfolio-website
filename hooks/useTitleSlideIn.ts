import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";

export const useTitleSlideIn = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
            );
        }
    }, []);
    return titleRef;
};