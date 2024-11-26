import { Moon, Sun } from "lucide-react";
import { useTheme } from "../app/context/themeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full flex justify-end">
      <div
        className={`relative w-fit border-2 rounded-full p-1 ${
          theme === "light"
            ? "bg-light-primary border-gray/10"
            : theme === "dark"
            ? "bg-dark-primary border-gray"
            : "bg-light-primary border-gray/10"
        }`}
      >
        <div
          className={`absolute h-9 w-9  rounded-full transition-all duration-200 ${
            theme === "light"
              ? "bg-whiteGray -left-[2px] top-0"
              : "bg-gray left-[calc(100%-2.2rem)] top-0"
          }`}
        />

        <div className="relative flex items-center gap-3">
          <button
            onClick={() => setTheme("light")}
            className={`p-1 rounded-full z-10 transition-colors ${
              theme === "light" ? "text-dark-primary" : "text-gray"
            }`}
            role="button"
            aria-label="Light theme"
          >
            <Sun size={18} />
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`p-1 rounded-full z-10 transition-colors ${
              theme === "dark" ? "text-dark-primary" : "text-whiteGray"
            }`}
            role="button"
            aria-label="Dark theme"
          >
            <Moon size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
