import { useTheme } from "@/app/context/themeContext";
import { ArrowUpIcon } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
const Footer = () => {
  const { theme } = useTheme();
  const MovetoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="w-full h-16 px-8 border-t flex items-center justify-between">
      <p className={`${theme === "dark" ? "text-whiteGray" : "text-gray"}`}>
        Piyush Verma
      </p>
      <div className="flex gap-x-2 ">
        <button
          onClick={MovetoTop}
          className={`
            p-2 rounded-md 
        ${
          theme === "dark"
            ? "bg-gray/50 hover:bg-gray/60"
            : "bg-gray/10 text-black"
        }`}
        >
          <ArrowUpIcon size={24} />
        </button>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Footer;
