"use client";

import Education from "@/components/Education";
import AboutMe from "../../../components/AboutMe";
import AnimatedSection from "../../../components/AnimatedSection";
import Experience from "../../../components/Experience";
import Projects from "../../../components/Projects";
import Skills from "../../../components/Skills";

const Home = () => {
  return (
    <div className="w-full px-2  sm:px-4 py-8 flex flex-col items-center justify-center">
      <AnimatedSection className="w-full max-w-3xl" animation="fade" duration={0.8} delay={0.2}>
        <AboutMe />
      </AnimatedSection>
      
      <AnimatedSection className="w-full max-w-3xl mt-10" animation="slide" duration={0.8} delay={0.1} triggerPosition="top 80%">
        <Experience />
      </AnimatedSection>
      
      <AnimatedSection className="w-full max-w-3xl" animation="stagger" staggerChildren={0.1} triggerPosition="top 75%">
        <Skills />
      </AnimatedSection>
      
      <AnimatedSection className="w-full max-w-3xl" animation="zoom" duration={0.8} triggerPosition="top 75%">
        <Projects />
      </AnimatedSection>
      
      <AnimatedSection 
        className="w-full max-w-3xl " 
        duration={0.6} 
        triggerPosition="top 70%"
      >
        <Education />
      </AnimatedSection>
    </div>
  );
};

export default Home;
