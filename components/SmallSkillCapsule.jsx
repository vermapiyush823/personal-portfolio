import Image from "next/image";
import { useTheme } from "../app/context/themeContext";
const SmallSkillCapsule = ({ skillname, logo }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`px-2 py-1 sm:px-3  sm:font-bold gap-x-1 flex items-center 
${theme === "dark" ? "bg-gray text-whiteGray" : "bg-whiteGray/40 text-gray"}

flex rounded-full text-sm sm:text-base`}
    >
      {skillname}
      <Image
        src={logo}
        alt={skillname}
        width={20}
        height={20}
        className="w-6 h-6"
      />
    </div>
  );
};

export default SmallSkillCapsule;
