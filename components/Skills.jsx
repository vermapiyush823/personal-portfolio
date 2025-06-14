import { useTheme } from "../app/context/themeContext";
import cssLogo from "../assets/logos/css-3.svg";
import ExpressLogo from "../assets/logos/express.svg";
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
import Php from "../assets/logos/php2.svg";
import PostmanLogo from "../assets/logos/postman.svg";
import PythonLogo from "../assets/logos/python.svg";
import reactLogo from "../assets/logos/react.svg";
import TailwindLogo from "../assets/logos/tailwind.svg";

import SkillCapsule from "./SkillCapsule";

const Skills = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full mt-16 rounded-xl transition-all">
      <h2 className="text-2xl font-semibold mb-1 ml-1">Skills</h2>
      <hr className="w-full border-t-2 mb-4 border-gray" />
      <div
        className="grid
     grid-cols-1 sm:grid-cols-1 md:grid-cols-3
        gap-1 gap-y-3 sm:gap-2 "
      >
        <SkillCapsule
          skillCategory={"Frontend"}
          skills={[
            { name: "HTML", logo: htmlLogo },
            { name: "CSS", logo: cssLogo },
            { name: "Tailwind CSS", logo: TailwindLogo },
            { name: "React", logo: reactLogo },
            { name: "Next.js", logo: nextLogo },
          ]}
        />
        <SkillCapsule
          skillCategory={"Backend"}
          skills={[
            {
              name: "Node.js",
              logo: nodeLogo,
            },
            {
              name: "Express.js",
              logo: ExpressLogo,
            },
            {
              name: "Laravel",
              logo: laravelLogo,
            },
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
        <SkillCapsule
          skillCategory={"Languages"}
          skills={[
            { name: "Python", logo: PythonLogo },
            { name: "Java", logo: JavaLogo },
            { name: "PHP", logo: Php },
            { name: "JavaScript", logo: JsLogo },

          ]}
        />

        <div className="sm:col-start-2">
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
              {
                name: "Postman",
                logo: PostmanLogo,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
