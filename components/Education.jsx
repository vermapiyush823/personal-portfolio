import { useTheme } from "../app/context/themeContext";
import School from "./School";
import { useEffect, useRef } from "react";

const Education = () => {
  const { theme } = useTheme();
  const containerRef = useRef(null);

  // Force visibility on mobile
  useEffect(() => {
    if (containerRef.current) {
      // Force styles to ensure visibility
      containerRef.current.style.opacity = "1";
      containerRef.current.style.transform = "translateY(0)";
      containerRef.current.style.visibility = "visible";
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full mb-10 rounded-xl transition-all"
      style={{ opacity: 1, transform: "translateY(0)" }}
    >
      <h2 className={`text-xl sm:text-2xl font-bold  ml-1 
        ${theme === "dark" ? "text-white" : "text-gray-800"}
        relative inline-block
      `} id="education">
        Education
      </h2>
      <hr className="w-full border-t-2 mb-4 sm:mb-6 border-gray" />

      <div className="relative">
        {/* Timeline vertical line */}
        <div
          className={`absolute top-1 rounded-full left-[18px] h-[calc(100%+16px)] w-[2px] sm:w-[3px]
            ${theme === "dark" 
              ? "bg-gradient-to-b from-gray via-gray to-transparent" 
              : "bg-gradient-to-b from-whiteGray via-whiteGray to-transparent"
            }
          `}
        ></div>
        
        {/* Education entry items */}
        <div className="space-y-6 sm:space-y-10">
          <div className="education-item">
            <School
              school="Lovely Professional University"
              course="B.Tech in Computer Science and Engineering"
              date="2021 - Present"
            />
          </div>
          
          <div className="education-item">
            <School
              school="Hindu VidyaPeeth"
              course="Senior Secondary"
              date="2019 - 2021"
            />
          </div>
          
          <div className="education-item">
            <School
              school="Hindu VidyaPeeth"
              course="Secondary"
              date="2018 - 2019"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
