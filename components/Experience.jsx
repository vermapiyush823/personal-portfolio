import { useTheme } from "../app/context/themeContext";
import Now from "../assets/logos/NOW.svg";
import Company from "./Company";

const Experience = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full rounded-xl transition-all">
      <h2 className={`text-xl sm:text-2xl font-bold  ml-1 
        ${theme === "dark" ? "text-white" : "text-gray-800"}
        relative inline-block
      `}>
        Experience
    
      </h2>
      <hr className="w-full border-t-2 mb-4 sm:mb-6 border-gray" />

      <div className="relative">
        {/* Timeline vertical line */}
        <div
          className={`absolute top-1 rounded-full left-[10px] sm:left-[18px] h-[calc(100%-16px)] w-[2px] sm:w-[3px]
            ${theme === "dark" 
              ? "bg-gradient-to-b from-gray via-gray to-transparent" 
              : "bg-gradient-to-b from-whiteGray via-whiteGray to-transparent"
            }
          `}
        ></div>
        
        {/* Experience entry items */}
        <div className="space-y-6 sm:space-y-10">
          <div className="experience-item">
            <Company
              company="ServiceNow"
              role="Associate Software Engineer Intern"
              date="Jan 2025 - June 2025"
              description={[
                "Did a complete R&D on Fluent(a Typescript DSL), to expand its use across the organisation with more than 500 people.",
                "Created an AI Agent to automate the task for resolving the findings created, reducing the manual effort.",
                "Got certified with CSA(Certified System Administrator) and CAD(Certified Application developer)."
              ]}
              logo={Now}
            />
          </div>
          
          <div className="experience-item">
            <Company
              company="ServiceNow"
              role="Associate Software Engineer Intern (Summer Internship)"
              date="May 2024 - July 2024"
              description={[
                "Built a dashboard to display customers the now-assist features and products.",
                "Integrated genAI features in ServiceNow microsite builder.",
                "Gaining experience with AngularJS, REST APIs, JavaScript, and the ServiceNow platform",
              ]}
              logo={Now}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
