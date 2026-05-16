"use client";

import Lenis from "lenis";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect} from "react";

export function ClientMotion() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.18,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    const stopLenis = () => lenis.stop();
    const startLenis = () => lenis.start();

    gsap.registerPlugin(ScrollTrigger);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const frame = requestAnimationFrame(raf);

    window.addEventListener("project-modal:open", stopLenis);
    window.addEventListener("project-modal:close", startLenis);

    const sections = gsap.utils.toArray<HTMLElement>("[data-reveal-section]");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {autoAlpha: 0, y: 44, filter: "blur(10px)"},
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        },
      );
    });

    return () => {
      window.removeEventListener("project-modal:open", stopLenis);
      window.removeEventListener("project-modal:close", startLenis);
      cancelAnimationFrame(frame);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
