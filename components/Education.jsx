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
      <h2 className="text-2xl font-bold mb-1 ml-1" id="education">Education</h2>
      <hr className="w-full border-t-2 mb-4 border-gray" />

      <div className="relative">
        <div
          className={`absolute top-1 rounded-full left-[18px] h-full w-[3px] 
        ${theme === "dark" ? "bg-gray" : "bg-whiteGray"}
        `}
        ></div>
        <div className="space-y-8">
          <School
            school="Lovely Professional University"
            course="B.Tech in Computer Science and Engineering"
            date="May 2021 - Present"
          />
          <School
            school="Hindu VidyaPeeth"
            course="Senior Secondary"
            date="2019 - 2021"
          />
          <School
            school="Hindu VidyaPeeth"
            course="Secondary"
            date="2018 - 2019"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
