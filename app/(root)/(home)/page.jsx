"use client";
import { Github, Instagram } from "@geist-ui/icons";
import { Linkedin, LogoTwitterX } from "geist-icons";
import { useTheme } from "../../context/themeContext";
const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full px-4 py-8 flex items-center justify-center min-h-[50vh]">
      <div className="w-full max-w-3xl p-6 flex flex-col sm:flex-row  justify-between gap-6 rounded-xl border border-gray dark:border-gray-700 transition-all">
        {/* Left content section */}
        <div className="w-full sm:w-3/3 flex flex-col items-center sm:items-start space-y-6">
          {/* Profile header with small image */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <img
              src="https://avatars.githubusercontent.com/u/54374601?v=4"
              alt="Piyush Verma"
              className="w-12 h-12 rounded-full sm:inline-block"
            />
            <div className="flex flex-col items-center sm:items-start">
              <h1 className="text-xl font-bold">Piyush Verma</h1>
              <p className="text-sm font-light flex items-center gap-1">
                A Full Stack Developer, who loves to code
              </p>
            </div>
          </div>

          {/* Email section */}
          <div className="w-full   sm:flex   items-center text-center sm:text-left">
            <p
              className={`text-sm w-full inline 
            ${theme === "dark" ? "text-whiteGray" : "text-gray"}
            `}
            >
              Looking to hire me? Email me at{" "}
              <a
                href="mailto:vermapiyush823@gmail.com"
                className={`mt-2 text-sm  sm:mt-0  px-4 py-2 rounded-full transition-colors ${
                  theme === "dark"
                    ? "bg-white/20 text-light-primary hover:bg-white/30"
                    : "bg-whiteGray text-dark-primary hover:bg-gray-200"
                }`}
              >
                vermapiyush823@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="w-1/4 flex">
          <a
            href="
                https://www.linkedin.com/in/piyush-verma-3a8b6b1a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="
                https://www.twitter.com/piyushverma_"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-colors"
          >
            <LogoTwitterX size={20} />
          </a>
          <a
            href="
                https://www.linkedin.com/in/piyush-verma-3a8b6b1a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2  rounded-full transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="
                    https://www.linkedin.com/in/piyush-verma-3a8b6b1a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
