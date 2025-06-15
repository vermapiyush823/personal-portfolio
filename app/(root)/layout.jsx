"use client";
import AnimatedBackground from "../../components/AnimatedBackground";
import CustomCursor from "../../components/CustomCursor";
import Footer from "../../components/Footer";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import { useTheme } from "../context/themeContext";
import { useEffect } from "react";
import gsap from "gsap";

export default function Layout({ children }) {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Page reveal animation
    gsap.fromTo(
      "main",
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1, 
        ease: "power2.inOut",
      }
    );
  }, []);
  
  return (
    <main
      className={`w-full min-h-[100vh] flex flex-col justify-center items-center p-4 pb-0 overflow-x-hidden
       ${
         theme === "dark"
           ? "bg-dark-primary text-light-primary"
           : "bg-white text-dark-primary"
       }`}
    >
      {/* Animated background */}
      <AnimatedBackground />
      
      {/* Add the custom cursor for desktop devices */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      
      <ThemeSwitcher />
      <section
        className="flex justify-center items-center w-full min-h-[100vh] py-4 relative z-10"
      >
        {children}
      </section>
      <Footer />
    </main>
  );
}
