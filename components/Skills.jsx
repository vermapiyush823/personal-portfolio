import { useTheme } from "../app/context/themeContext";
import cssLogo from "../assets/logos/css-3.svg";
import htmlLogo from "../assets/logos/html-5.svg";
import laravelLogo from "../assets/logos/laravel.svg";
import nextLogo from "../assets/logos/nextjs.svg";
import nodeLogo from "../assets/logos/node-js.svg";
import reactLogo from "../assets/logos/react.svg";

import SkillCapsule from "./SkillCapsule";

const Skills = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full max-w-3xl mt-16 rounded-xl transition-all">
      <h2 className="text-2xl font-bold mb-1 ml-1">Skills</h2>
      <hr className="w-full border-t-2 mb-4 border-gray" />
      <div className="flex gap-2 ">
        <SkillCapsule
          skillCategory={"Web Development"}
          skills={[
            { name: "React", logo: reactLogo },
            { name: "HTML", logo: htmlLogo },
            { name: "Node.js", logo: nodeLogo },
            { name: "Next.js", logo: nextLogo },
            { name: "CSS", logo: cssLogo },

            { name: "Laravel", logo: laravelLogo },
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
