"use client";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../app/context/themeContext";
import SmallSkillCapsule from "./SmallSkillCapsule";

const ProjectCard = ({ project, isActive }) => {
  const { theme } = useTheme();
  const cardRef = useRef(null);
  const descriptionRef = useRef(null);
  const [tiltRotation, setTiltRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const { 
    projectname, 
    description, 
    projectimage, 
    projectlink, 
    projectgithublink, 
    projecttechstack 
  } = project;

  // Handle tilt effect
  const handleMouseMove = (e) => {
    if (!cardRef.current || !isActive) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate rotation based on mouse position relative to card center
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 5; // Max 5 degrees
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 5; // Max 5 degrees
    
    setTiltRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTiltRotation({ x: 0, y: 0 });
  };

  // Apply animations when the card becomes active
  useEffect(() => {
    if (isActive && cardRef.current) {
      // Reset animation state
      gsap.set(cardRef.current, { clearProps: "all" });
      
      // Main card animation
      gsap.fromTo(
        cardRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );
      
      // Description animation with slight delay
      if (descriptionRef.current) {
        gsap.fromTo(
          descriptionRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, delay: 0.3, ease: "power2.out" }
        );
      }
    }
  }, [isActive]);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col min-h-[500px] justify-between items-center border-2 border-gray bg-[#1A1A1A]
        ${theme === "dark" ? "bg-opacity-50" : "bg-opacity-5"}
        rounded-xl p-6 w-full max-w-2xl transition-all duration-500
        ${isActive 
          ? "shadow-[0_10px_30px_rgba(0,0,0,0.2)] scale-100" 
          : "opacity-0 scale-95"
        }
        ${theme === "dark" 
          ? "backdrop-blur-sm" 
          : "backdrop-blur-sm"
        }
      `}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isActive && isHovering 
          ? `perspective(1000px) rotateX(${tiltRotation.x}deg) rotateY(${tiltRotation.y}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
        transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
    >
      <div className="flex flex-col items-center w-full gap-4">
        {/* Project title */}
        <h3 className="text-2xl font-bold mb-2">{projectname}</h3>
        
        {/* Project image carousel */}
        <div className={`w-full flex bg-dark-primary h-[280px] border rounded-xl overflow-hidden
          ${theme === "dark" ? "border-gray" : "shadow-dark-primary/30"}
        `}>
          <div className="w-full h-full relative">
            {projectimage.map((image, index) => {
              const hasMultipleImages = projectimage.length > 1;
              
              return (
                <Image
                  src={image}
                  alt={projectname}
                  key={index}
                  fill
                  priority
                  unoptimized={true}
                  className={`rounded-xl object-cover transition-opacity ${
                    hasMultipleImages && isActive ? "project-carousel-image" : ""
                  }`}
                  style={{ 
                    opacity: isActive && hasMultipleImages ? "1" : (index === 0 ? 1 : 0),
                    animation: isActive && hasMultipleImages ? `carouselFade ${projectimage.length * 5}s infinite ${index * 5}s` : 'none'
                  }}
                />
              );
            })}
          </div>
        </div>
        
        {/* Project description */}
        <p 
          ref={descriptionRef} 
          className="text-sm text-center opacity-80 max-w-lg"
        >
          {description}
        </p>
        
        {/* Tech stack */}
        <div className="flex gap-3 mt-2 flex-wrap justify-center">
          {projecttechstack.map((skill, index) => (
            <SmallSkillCapsule
              key={index}
              skillname={skill.name}
              logo={skill.logo}
            />
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col sm:flex-row w-full gap-3 justify-center mt-6">
        {projectlink && (
          <Link
            href={projectlink}
            className="text-sm text-blue-400 p-2 px-4 text-center bg-blue-400/40 rounded-full hover:bg-blue-400/50 transition-all"
            target="_blank"
          >
            View Project
          </Link>
        )}
        <Link
          href={projectgithublink}
          target="_blank"
          className={`text-sm flex justify-center gap-2 items-center p-2 px-4 rounded-full transition-all
            ${
              theme === "light"
                ? "text-gray bg-gray/30 hover:bg-gray/20"
                : "text-white bg-whiteGray/10 hover:bg-whiteGray/20"
            }
          `}
        >
          GitHub <GitHubLogoIcon />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
