import Image from "next/image";
import { useTheme } from "../app/context/themeContext";

const SmallSkillCapsule = ({ skillname, logo }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`px-3 py-1.5 flex items-center justify-center gap-2.5 group
        ${theme === "dark" 
          ? "bg-gray/80 text-whiteGray hover:bg-gray hover:shadow-md" 
          : "bg-whiteGray/40 text-gray hover:bg-whiteGray/50 hover:shadow-md"
        }
        transition-all duration-300 rounded-full text-sm sm:text-base
      `}
    >
      <span className="font-medium">{skillname}</span>
      <div className="relative flex items-center justify-center w-5 h-5 group-hover:scale-110 transition-transform duration-300">
        <Image
          src={logo}
          alt={skillname}
          width={20}
          height={20}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default SmallSkillCapsule;
