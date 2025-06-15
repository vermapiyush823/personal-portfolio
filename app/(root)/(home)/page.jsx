"use client";

import Education from "@/components/Education";
import AboutMe from "../../../components/AboutMe";
import AnimatedSection from "../../../components/AnimatedSection";
import Experience from "../../../components/Experience";
import Projects from "../../../components/Projects";
import Skills from "../../../components/Skills";
import { useEffect, useState } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  return (
    <div className="w-full px-2 sm:px-4 py-8 flex flex-col items-center justify-center">
      <AnimatedSection className="w-full max-w-3xl" animation="fade" duration={0.8} delay={0.2}>
        <AboutMe />
      </AnimatedSection>
      
      <AnimatedSection className="w-full max-w-3xl mt-12" animation="slide" duration={0.8} delay={0.1} triggerPosition="top 80%">
        <Experience />
      </AnimatedSection>
      
      <AnimatedSection className="w-full max-w-3xl" animation="stagger" staggerChildren={0.1} triggerPosition="top 75%">
        <Skills />
      </AnimatedSection>
      
      <AnimatedSection className="w-full max-w-3xl" animation="zoom" duration={0.8} triggerPosition="top 75%">
        <Projects />
      </AnimatedSection>
      
      {/* Render Education differently based on device type */}
      {isMobile ? (
          <Education />
        
      ) : (
        <AnimatedSection 
          className="w-full max-w-3xl mt-10" 
          duration={0.6} 
          animation="fade"
          delay={0.2}
          triggerPosition="top 95%"
        >
          <Education />
        </AnimatedSection>
      )}
    </div>
  );
};

export default Home;
