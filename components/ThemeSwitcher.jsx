import { Moon, Sun } from "lucide-react";
import { useTheme } from "../app/context/themeContext";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    if (isAnimating) return; // Prevent multiple rapid clicks

    setIsAnimating(true);
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Reset animation state after transition completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleTheme}
        className={`relative overflow-hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 
          ${theme === "light"
            ? "bg-white/80 border border-gray/10 shadow-md backdrop-blur-sm"
            : "bg-gray/80 border border-gray/50 shadow-md backdrop-blur-sm"
          }
          hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2
          ${theme === "light" ? "focus:ring-gray/30" : "focus:ring-whiteGray/30"}
        `}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        <span
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
            ${theme === "light" ? "opacity-100" : "opacity-0"}
          `}
        >
          <Sun
            size={20}
            className={`text-gray transition-transform duration-500 
              ${isAnimating && theme === "dark" ? "rotate-90 scale-150" : ""}
            `}
          />
        </span>

        <span
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
            ${theme === "dark" ? "opacity-100" : "opacity-0"}
          `}
        >
          <Moon
            size={18}
            className={`text-whiteGray transition-transform duration-500
              ${isAnimating && theme === "light" ? "-rotate-90 scale-0" : ""}
            `}
          />
        </span>

      </button>
    </div>
  );
};

export default ThemeSwitcher;
