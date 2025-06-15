import { useTheme } from "../app/context/themeContext";
import { useState } from "react";

const School = ({ course, school, date }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline dot */}
      <div
        className={`absolute top-1 left-3 w-4 h-4 rounded-full transition-all duration-300
          ${isHovered
            ? theme === "dark"
              ? "bg-white scale-125"
              : "bg-gray-800 scale-125"
            : theme === "dark"
            ? "bg-whiteGray timeline-dot-pulse"
            : "bg-gray timeline-dot-pulse"
          }
        `}
      ></div>

      {/* Content Card */}
      <div
        className={`ml-10 sm:ml-12 p-3 pt-1 sm:p-4 sm:pt-2 rounded-lg transition-all duration-300
          ${isHovered
            ? theme === "dark"
              ? "bg-dark-primary/30 shadow-md"
              : "bg-whiteGray/10 shadow-md"
            : ""
          }
        `}
      >
        {/* School Name */}
        <h3 className="text-base sm:text-lg font-extrabold mb-1">{school}</h3>

        {/* Course and Date - Responsive layout */}
        <div
          className={`flex flex-col sm:flex-row sm:items-center sm:gap-x-2 mb-1
            ${theme === "dark" ? "text-whiteGray" : "text-gray"}
          `}
        >
          <span className="font-medium text-sm sm:text-base">{course}</span>
          <div className="hidden sm:inline-block w-[6px] h-[6px] rounded-full bg-gray"></div>
          <span className={`text-sm sm:text-base ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default School;
