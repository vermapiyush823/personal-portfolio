import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { Linkedin, LogoTwitterX } from "geist-icons";
import Image from "next/image";
import { useTheme } from "../app/context/themeContext";
const AboutMe = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full max-w-3xl p-4 sm:p-6 flex flex-col sm:flex-row  justify-between gap-6 rounded-xl border-2 sm:border-2 border-gray  transition-all">
      {/* Left content section */}
      <div className="w-full sm:w-3/3 flex flex-col items-center sm:items-start space-y-6">
        {/* Profile header with small image */}

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          <Image
            width={12}
            height={12}
            src={"https://avatars.githubusercontent.com/u/54374601?v=4"}
            alt="Piyush Verma"
            className="w-12 h-12 rounded-full sm:inline-block"
          />
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-xl  font-extrabold">Piyush Verma</h1>
            <p className="text-sm font-light flex text-center gap-1">
              A Full Stack Developer, who loves to code
            </p>
          </div>
        </div>

        {/* Email section */}
        <div className="w-full   sm:flex   items-center text-center sm:text-left">
          <p
            className={`text-base w-full inline 
            ${theme === "dark" ? "text-whiteGray" : "text-gray"}
            `}
          >
            Looking to hire me? Email me at{" "}
            <a
              href="mailto:vermapiyush823@gmail.com"
              className={`mt-2 text-base  sm:mt-0  px-3 py-2 rounded-full transition-colors ${
                theme === "dark"
                  ? "bg-white/20 text-light-primary hover:bg-white/30"
                  : "bg-whiteGray text-dark-primary hover:bg-whiteGray/70"
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
          <Linkedin
            className="hover:text-blue-400 transition-colors"
            size={20}
          />
        </a>
        <a
          href="
                https://www.twitter.com/piyushverma_"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full transition-colors "
        >
          <LogoTwitterX
            size={20}
            className="hover:text-gray transition-color"
          />
        </a>
        <a
          href="
                https://www.linkedin.com/in/piyush-verma-3a8b6b1a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2  rounded-full transition-colors"
        >
          <GitHubLogoIcon
            width={22}
            height={22}
            className="hover:text-textGray transition-color"
          />
        </a>
        <a
          href="
                    https://www.linkedin.com/in/piyush-verma-3a8b6b1a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full transition-colors"
        >
          <InstagramLogoIcon
            width={22}
            height={22}
            className="hover:text-pink-500 transition-color"
          />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
