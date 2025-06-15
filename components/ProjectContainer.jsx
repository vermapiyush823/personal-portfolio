import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../app/context/themeContext";
import SmallSkillCapsule from "./SmallSkillCapsule";

const ProjectContainer = ({
  projectname,
  projectimage,
  projectlink,
  projectgithublink,
  projecttechstack,
}) => {
  const { theme } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = projectimage.length > 1;
  const autoplayRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Image carousel auto-rotation
  useEffect(() => {
    if (hasMultipleImages) {
      // Clear any existing interval
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
      
      // Set up new interval
      autoplayRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % projectimage.length
        );
      }, 3000); // Change image every 3 seconds
    }
    
    // Cleanup when component unmounts
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [hasMultipleImages, projectimage.length]);
  
  return (
    <div
      className={`flex flex-col justify-between items-center border-2 border-gray bg-[#1A1A1A]
      ${theme === "dark" ? "bg-opacity-50" : "bg-opacity-5"}
      rounded-xl p-5 h-full transition-all duration-300
      ${isHovered ? "shadow-lg transform translate-y-[-4px]" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center w-full gap-3">
        {/* Project title */}
        <h3 className="text-xl font-bold text-center">{projectname}</h3>

        <div
          className={`w-full relative bg-dark-primary h-[220px] border rounded-xl overflow-hidden
            ${theme === "dark" ? "border-gray" : "shadow-dark-primary/30"}
          `}
        >
          {/* If it has a link, wrap in Link, otherwise just show image */}
          {projectlink ? (
            <Link
              href={projectlink}
              target="_blank"
              className="block w-full h-full"
            >
              <div className="relative w-full h-full">
                {projectimage.map((image, index) => (
                  <Image
                    src={image}
                    alt={`${projectname} - image ${index + 1}`}
                    key={index}
                    fill
                    priority
                    unoptimized={true}
                    className={`rounded-xl object-cover transition-opacity duration-500 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </Link>
          ) : (
            <div className="relative w-full h-full">
              {projectimage.map((image, index) => (
                <Image
                  src={image}
                  alt={`${projectname} - image ${index + 1}`}
                  key={index}
                  fill
                  priority
                  unoptimized={true}
                  className={`rounded-xl object-cover transition-opacity duration-500 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          )}
          
          {/* Image navigation dots for multiple images */}
          {hasMultipleImages && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
              {projectimage.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? theme === "dark" 
                        ? "bg-white" 
                        : "bg-dark-primary"
                      : theme === "dark"
                        ? "bg-white/30" 
                        : "bg-dark-primary/30"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-2 mt-1 flex-wrap justify-center">
          {projecttechstack.map((skill, index) => (
            <SmallSkillCapsule
              key={index}
              skillname={skill.name}
              logo={skill.logo}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full gap-3 items-center justify-center mt-4">
        {projectlink && (
          <Link
            href={projectlink}
            className={`text-sm text-blue-400 py-2 px-4 w-full text-center bg-blue-400/20 rounded-full 
            hover:bg-blue-400/40 transition-all duration-300 ${isHovered ? "bg-blue-400/30" : ""}`}
            target="_blank"
          >
            View Project
          </Link>
        )}
        <Link
          href={projectgithublink}
          target="_blank"
          className={`text-sm flex justify-center gap-2 items-center w-full py-2 px-4 rounded-full 
            transition-all duration-300
            ${
              theme === "light"
                ? `text-gray bg-gray/20 ${isHovered ? "bg-gray/30" : ""} hover:bg-gray/30`
                : `text-white bg-whiteGray/10 ${isHovered ? "bg-whiteGray/20" : ""} hover:bg-whiteGray/20`
            }
          `}
        >
          GitHub <GitHubLogoIcon />
        </Link>
      </div>
    </div>
  );
};

export default ProjectContainer;
