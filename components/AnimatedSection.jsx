"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register ScrollTrigger plugin on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimatedSection = ({ 
  children, 
  className = "w-full", 
  animation = "fade", // Options: "fade", "slide", "zoom", "stagger"
  duration = 1, 
  delay = 0,
  
  triggerPosition = "top bottom",
  staggerChildren = 0.1, // Used for stagger animation
  staggerFrom = "start", // "start" or "end" for stagger direction
}) => {
  const sectionRef = useRef(null);
  const childrenRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: triggerPosition, // when the top of the element hits the bottom of the viewport
        toggleActions: "play none none none",
      },
    });

    // Reset any previous animations
    gsap.set(section, { clearProps: "all" });

    let animationConfig = {};

    switch (animation) {
      case "fade":
        gsap.set(section, { opacity: 0, y: 30 });
        tl.to(section, { 
          opacity: 1, 
          y: 0, 
          duration: duration, 
          ease: "power3.out",
          delay: delay 
        });
        break;

      case "slide":
        gsap.set(section, { opacity: 0, x: -50 });
        tl.to(section, { 
          opacity: 1, 
          x: 0, 
          duration: duration, 
          ease: "power3.out",
          delay: delay 
        });
        break;

      case "zoom":
        gsap.set(section, { opacity: 0, scale: 0.9 });
        tl.to(section, { 
          opacity: 1, 
          scale: 1, 
          duration: duration, 
          ease: "power3.out",
          delay: delay 
        });
        break;

      case "stagger":
        // For staggered children animations
        if (section.children.length > 0) {
          const children = Array.from(section.children);
          childrenRef.current = children;
          
          gsap.set(children, { opacity: 0, y: 20 });
          tl.to(children, { 
            opacity: 1, 
            y: 0, 
            duration: duration, 
            stagger: {
              amount: staggerChildren,
              from: staggerFrom === "start" ? 0 : "end", 
            },
            ease: "power3.out",
            delay: delay 
          });
        }
        break;

      default:
        gsap.set(section, { opacity: 0 });
        tl.to(section, { 
          opacity: 1, 
          duration: duration, 
          ease: "power3.out",
          delay: delay 
        });
    }

    return () => {
      // Clean up
      if (tl) {
        tl.kill();
      }
      ScrollTrigger.getAll().forEach(st => st.trigger === section && st.kill());
    };
  }, [animation, duration, delay, triggerPosition, staggerChildren, staggerFrom]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
