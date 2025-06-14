"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useTheme } from "../app/context/themeContext";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Initial position (off screen)
    gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });
    gsap.set(follower, { xPercent: -50, yPercent: -50, opacity: 0 });

    const mouseMove = (e) => {
      // Get mouse position
      const { clientX, clientY } = e;

      // Animate cursor dot (instant follow)
      gsap.to(cursor, { 
        x: clientX, 
        y: clientY, 
        duration: 0,
        opacity: 1,
      });

      // Animate cursor follower (delayed follow)
      gsap.to(follower, { 
        x: clientX, 
        y: clientY, 
        duration: 0.6,
        ease: "power3.out",
        opacity: 1,
      });
    };

    const mouseEnter = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(follower, { scale: 1, opacity: 0.5, duration: 0.3 });
    };

    const mouseLeave = () => {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
      gsap.to(follower, { scale: 0, opacity: 0, duration: 0.3 });
    };

    // Listener for clickable elements
    const handleLinkHover = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.3 });
      gsap.to(follower, { scale: 2, duration: 0.3 });
    };

    const handleLinkLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(follower, { scale: 1, duration: 0.3 });
    };

    // Add event listeners
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseenter", mouseEnter);
    document.addEventListener("mouseleave", mouseLeave);

    // Add event listeners for links and buttons
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      // Clean up event listeners
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseenter", mouseEnter);
      document.removeEventListener("mouseleave", mouseLeave);

      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className={`fixed pointer-events-none z-50 w-2 h-2 rounded-full ${
          theme === "dark" ? "bg-white" : "bg-black"
        }`}
        style={{ top: 0, left: 0 }}
      />
      <div 
        ref={followerRef} 
        className={`fixed pointer-events-none z-40 w-6 h-6 rounded-full ${
          theme === "dark" ? "bg-white/20" : "bg-black/20"
        }`}
        style={{ top: 0, left: 0 }}
      />
    </>
  );
};

export default CustomCursor;
