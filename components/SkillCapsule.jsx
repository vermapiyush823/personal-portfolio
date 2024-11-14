import Image from "next/image";
import { useTheme } from "../app/context/themeContext";

const SkillCapsule = ({ skillCategory, skills }) => {
  const { theme } = useTheme();
  return (
    <div className="sm:p-2 w-1/2 sm:w-1/3 md:1/4  flex flex-col items-center">
      <h3 className="text-lg font-bold mb-2 text-center">{skillCategory}</h3>
      <div className="flex w-full flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`px-2 py-1 sm:px-3  sm:font-bold gap-x-1 flex items-center 
        ${
          theme === "dark"
            ? "bg-gray text-whiteGray"
            : "bg-whiteGray text-dark-primary"
        }

         flex rounded-full text-sm sm:text-base`}
          >
            {skill.name}

            <Image
              src={skill.logo}
              alt={skill.name}
              width={20}
              height={20}
              className="w-6 h-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCapsule;
