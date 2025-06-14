"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { createContext, useContext, useEffect } from "react";
import { useSmoothScroll } from "./smoothScrollContext";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimationContext = createContext({});

export function AnimationProvider({ children }) {
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    // Connect GSAP ScrollTrigger with Lenis
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    }

    return () => {
      if (lenis) {
        gsap.ticker.remove((time) => {
          lenis.raf(time * 1000);
        });
      }
    };
  }, [lenis]);

  return <AnimationContext.Provider value={{}}>{children}</AnimationContext.Provider>;
}

export function useAnimation() {
  return useContext(AnimationContext);
}
