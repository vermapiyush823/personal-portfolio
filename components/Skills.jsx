import { useTheme } from "../app/context/themeContext";
import cssLogo from "../assets/logos/css-3.svg";
import figmaLogo from "../assets/logos/figma.svg";
import GitLogo from "../assets/logos/git.svg";
import GithubLogo from "../assets/logos/github.svg";
import htmlLogo from "../assets/logos/html-5.svg";
import JavaLogo from "../assets/logos/java.svg";
import JsLogo from "../assets/logos/js.svg";
import laravelLogo from "../assets/logos/laravel.svg";
import MongoDbLogo from "../assets/logos/mongodb.svg";
import MySqlLogo from "../assets/logos/mysql.svg";
import nextLogo from "../assets/logos/nextjs.svg";
import nodeLogo from "../assets/logos/node-js.svg";
import PythonLogo from "../assets/logos/python.svg";
import reactLogo from "../assets/logos/react.svg";

import SkillCapsule from "./SkillCapsule";

const Skills = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full max-w-3xl mt-16 rounded-xl transition-all">
      <h2 className="text-2xl font-semibold mb-1 ml-1">Skills</h2>
      <hr className="w-full border-t-2 mb-4 border-gray" />
      <div
        className="grid
     grid-cols-2 sm:grid-cols-2 md:grid-cols-3
        gap-1 gap-y-2 sm:gap-2 "
      >
        <SkillCapsule
          skillCategory={"Web Development"}
          skills={[
            { name: "HTML", logo: htmlLogo },
            { name: "CSS", logo: cssLogo },
            { name: "React", logo: reactLogo },
            { name: "Next.js", logo: nextLogo },
            { name: "Node.js", logo: nodeLogo },
            { name: "Laravel", logo: laravelLogo },
          ]}
        />
        <SkillCapsule
          skillCategory={"Languages"}
          skills={[
            { name: "JavaScript", logo: JsLogo },
            { name: "Python", logo: PythonLogo },
            { name: "Java", logo: JavaLogo },
          ]}
        />
        // take full
        <SkillCapsule
          skillCategory={"Tools"}
          skills={[
            {
              name: "Git",
              logo: GitLogo,
            },
            {
              name: "Github",
              logo: GithubLogo,
            },
            {
              name: "Figma",
              logo: figmaLogo,
            },
          ]}
        />
        <SkillCapsule
          skillCategory={"Databases"}
          skills={[
            {
              name: "MongoDB",
              logo: MongoDbLogo,
            },
            {
              name: "MySQL",
              logo: MySqlLogo,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Skills;
