"use client";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import { useTheme } from "../context/themeContext";

export default function Layout({ children }) {
  const { theme } = useTheme();
  return (
    <main
      className={`w-full min-h-[100vh] flex flex-col p-4          
       ${
         theme === "dark"
           ? "bg-dark-primary text-light-primary"
           : "bg-light-primary text-dark-primary"
       }`}
    >
      <ThemeSwitcher />
      <section
        className="flex justify-center w-full
        min-h-[100vh] 
      "
      >
        {children}
      </section>
    </main>
  );
}
