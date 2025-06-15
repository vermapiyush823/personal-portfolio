import Image from "next/image";
import { useTheme } from "../app/context/themeContext";
import { useState } from "react";

const Company = ({ company, role, date, description, logo }) => {
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
        className={`absolute top-1 left-1 sm:left-3 w-4 h-4 rounded-full transition-all duration-300
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
        className={`ml-8 sm:ml-12 p-3 pt-1 sm:p-4 sm:pt-2 rounded-lg transition-all duration-300
          ${isHovered
            ? theme === "dark"
              ? "bg-dark-primary/30 shadow-md"
              : "bg-whiteGray/10 shadow-md"
            : ""
        }
        `}
      >
        {/* Role Title */}
        <h3 className="text-base sm:text-lg font-extrabold mb-1 break-words">
          {role}
        </h3>

        {/* Company and Date - Responsive layout for mobile */}
        <div
          className={`flex flex-col sm:flex-row sm:items-center gap-y-1 sm:gap-x-2 mb-3
            ${theme === "dark" ? "text-whiteGray" : "text-gray"}
          `}
        >
          <span className="flex items-center gap-x-1 text-sm sm:text-base">
            {company}{" "}
            <a
              href="https://www.servicenow.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={logo}
                alt={company}
                width={16}
                height={16}
                className="mb-0.5"
              />
            </a>
          </span>

          <div className="flex items-center gap-x-2">
            <span className="hidden sm:inline-block w-[4px] h-[4px] rounded-full bg-gray"></span>
            <span
              className={`text-xs sm:text-sm font-medium ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {date}
            </span>
          </div>
        </div>

        {/* Description Points */}
        <ul
          className={`list-none text-xs sm:text-sm mt-2 space-y-2
            ${theme === "dark" ? "text-whiteGray/90" : "text-gray-700"}
          `}
        >
          {description.map((desc, index) => (
            <li key={index} className="flex items-start gap-x-2">
              <span
                className={`inline-block w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full mt-1.5
                ${theme === "dark" ? "bg-whiteGray/70" : "bg-gray/70"}
              `}></span>
              <span className="flex-1">{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Company;
