import { useTheme } from "../app/context/themeContext";
import SmallSkillCapsule from "./SmallSkillCapsule";

const SkillCapsule = ({ skillCategory, skills }) => {
  const { theme } = useTheme();
  return (
    <div className={`relative p-4 rounded-xl transition-all duration-300 
      ${theme === "dark" 
        ? "bg-dark-primary/30 hover:bg-dark-primary/40 border border-gray/30" 
        : "bg-light-primary/5 hover:bg-light-primary/10 shadow-sm"
      }
    `}>
      <h3 className={`text-xl font-bold mb-4 text-center 
        ${theme === "dark" ? "text-gray-100" : "text-gray-800"}
        after:content-[''] after:block after:w-12 after:h-[3px] after:mx-auto after:mt-2
        ${theme === "dark" ? "after:bg-gray/70" : "after:bg-gray/50"}
      `}>
        {skillCategory}
      </h3>
      <div className="flex w-full flex-wrap justify-center gap-2.5">
        {skills.map((skill, index) => (
          <SmallSkillCapsule
            key={index}
            skillname={skill.name}
            logo={skill.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCapsule;
