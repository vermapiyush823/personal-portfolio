"use client";
import Footer from "../../components/Footer";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import { useTheme } from "../context/themeContext";

export default function Layout({ children }) {
  const { theme } = useTheme();
  return (
    <main
      className={`w-full min-h-[100vh] flex flex-col p-4 pb-0      
       ${
         theme === "dark"
           ? "bg-dark-primary text-light-primary"
           : "bg-white text-dark-primary"
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
      <Footer />
    </main>
  );
}
