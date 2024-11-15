import { useTheme } from "../app/context/themeContext";
import SmallSkillCapsule from "./SmallSkillCapsule";

const SkillCapsule = ({ skillCategory, skills }) => {
  const { theme } = useTheme();
  return (
    <div className="sm:p-2  flex flex-col items-center">
      <h3 className="text-lg font-bold mb-2 text-center">{skillCategory}</h3>
      <div className="flex w-full flex-wrap justify-center gap-2">
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
