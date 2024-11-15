import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../app/context/themeContext";
import Unstuck from "../assets/images/unstuck.png";
import NextJs from "../assets/logos/nextjs.svg";
import Tailwindcss from "../assets/logos/tailwind.svg";
import SmallSkillCapsule from "./SmallSkillCapsule";

const ProjectContainer = () => {
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
          src={Unstuck}
          alt="Unstuck"
          width={100}
          height={100}
          className="rounded-xl
          
         w-full h-full object-cover"
        />
      </Link>
      <div className="flex gap-2 mt-3">
        <SmallSkillCapsule skillname={"Next.js"} logo={NextJs} />
        <SmallSkillCapsule skillname={"Tailwind CSS"} logo={Tailwindcss} />
      </div>
      <div className="flex flex-col w-fit gap-2 text-center justify-center mt-3">
        <Link
          href="https://un-stuck.vercel.app/"
          className="text-sm text-blue-400 p-1 px-2  bg-blue-400/40 rounded-full hover:underline"
          target="_blank"
        >
          Click here to view the project
        </Link>
        <Link
          href="https://github.com/vermapiyush823/unStuck"
          target="_blank"
          className="text-sm flex justify-center gap-1 items-center text-white p-1 px-2 rounded-full bg-whiteGray/10 hover:underline"
        >
          Github Link <GitHubLogoIcon />
        </Link>
      </div>
    </div>
  );
};

export default ProjectContainer;
