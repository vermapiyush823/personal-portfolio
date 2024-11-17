import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../app/context/themeContext";

import SmallSkillCapsule from "./SmallSkillCapsule";

const ProjectContainer = ({
  projectname,
  projectimage,
  projectlink,
  projectgithublink,
  projecttechstack,
}) => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex flex-col justify-between items-center border-2 border-gray rounded-xl p-4 h-full
      `}
    >
      <div className="flex flex-col items-center w-full gap-2">
        {" "}
        <Link
          href={projectlink}
          target="_blank"
          className={`w-[100%] flex h-[200px] border rounded-xl
      ${
        theme === "dark"
          ? "border-whiteGray shadow-gray shadow-md"
          : "border-gray  shadow-dark-primary shadow-md"
      }
      `}
        >
          {projectimage.map((image, index) => (
            <Image
              src={image}
              alt={projectname}
              key={index}
              width={100}
              priority
              unoptimized={true}
              height={100}
              className="rounded-xl

         w-full h-full object-cover"
            />
          ))}
        </Link>{" "}
        <div className="flex gap-2 mt-3 flex-wrap justify-center">
          {projecttechstack.map((skill, index) => (
            <SmallSkillCapsule
              key={index}
              skillname={skill.name}
              logo={skill.logo}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col w-fit gap-2 text-center justify-center mt-3">
        {projectlink && (
          <Link
            href={projectlink}
            className="text-sm text-blue-400 p-1 px-2  bg-blue-400/40 rounded-full hover:bg-blue-400/50"
            target="_blank"
          >
            Click here to view the project
          </Link>
        )}
        <Link
          href={projectgithublink}
          target="_blank"
          className={`text-sm flex justify-center gap-1 items-center min-w-[200px]  p-1 px-2 rounded-full 
          
            ${
              theme === "light"
                ? "text-gray bg-gray/30 hover:bg-gray/20"
                : "text-white bg-whiteGray/10 hover:bg-whiteGray/20"
            }
          `}
        >
          Github Link <GitHubLogoIcon />
        </Link>
      </div>
    </div>
  );
};

export default ProjectContainer;
