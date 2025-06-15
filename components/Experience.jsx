import { useTheme } from "../app/context/themeContext";
import Now from "../assets/logos/NOW.svg";
import Company from "./Company";

const Experience = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full rounded-xl transition-all">
      <h2 className="text-2xl font-bold mb-1 ml-1">Experience</h2>
      <hr className="w-full border-t-2 mb-4 border-gray" />

      <div className="relative">
        <div
          className={`absolute top-1 rounded-full left-[18px] h-full w-[3px] 
        ${theme === "dark" ? "bg-gray" : "bg-whiteGray"}
        `}
        ></div>
        {/* Experience entry items */}
        <div className="space-y-8">
          <Company
            company="ServiceNow"
            role="Associate Software Engineer Intern"
            date="Jan 2025 - Present"
            description={[
              "Gaining experience with AngularJS, REST APIs, JavaScript, and the ServiceNow platform",
            ]}
            logo={Now}
          />
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
  );
};

export default Experience;
