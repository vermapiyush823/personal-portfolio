import { useTheme } from "@/app/context/themeContext";
import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";
import Piyush from "../assets/logos/PiyushVerma.svg";
import ThemeSwitcher from "./ThemeSwitcher";
const Footer = () => {
  const { theme } = useTheme();
  const MovetoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="w-full h-16 px-2 md:px-4 mt-12 border-t border-gray flex items-center justify-between">
      <Image
        src={Piyush}
        alt="Piyush Verma"
        width={100}
        height={30}
        className={`w-48
            ${theme !== "dark" ? "filter invert" : "filter-none"}
        `}
      />
      <div className="flex gap-x-2 sm:gap-x-3 ">
        <ThemeSwitcher />
        <button
          onClick={MovetoTop}
          className={`
           p-1 sm:p-2 rounded-md font-bold text-dark-primary
        ${
          theme === "dark"
            ? "bg-gray hover:bg-gray/60"
            : "bg-gray/10 hover:bg-gray/20"
        }`}
        >
          <ArrowUpIcon size={24} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
