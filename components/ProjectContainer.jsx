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
      className={`flex flex-col items-center border-2 border-gray rounded-xl p-4 h-fit
      `}
    >
      <Link
        href="https"
        target="_blank"
        className={`w-[100%] h-[60%] border rounded-xl
      ${
        theme === "dark"
          ? "border-whiteGray shadow-gray shadow-md"
          : "border-gray  shadow-dark-primary shadow-md"
      }
      `}
      >
        <Image
          src={projectimage}
          alt={projectname}
          width={100}
          priority
          unoptimized={true}
          height={100}
          className="rounded-xl
            
         w-full h-full"
        />
      </Link>
      <div className="flex gap-2 mt-3">
        {projecttechstack.map((skill, index) => (
          <SmallSkillCapsule
            key={index}
            skillname={skill.name}
            logo={skill.logo}
          />
        ))}
      </div>
      <div className="flex flex-col w-fit gap-2 text-center justify-center mt-3">
        <Link
          href={projectlink}
          className="text-sm text-blue-400 p-1 px-2  bg-blue-400/40 rounded-full hover:underline"
          target="_blank"
        >
          Click here to view the project
        </Link>
        <Link
          href={projectgithublink}
          target="_blank"
          className={`text-sm flex justify-center gap-1 items-center  p-1 px-2 rounded-full bg-whiteGray/10 hover:underline
          
            ${theme === "light" ? "text-gray bg-gray/10" : "text-white bg-gray"}
          `}
        >
          Github Link <GitHubLogoIcon />
        </Link>
      </div>
    </div>
  );
};

export default ProjectContainer;
