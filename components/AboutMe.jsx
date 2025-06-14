import { cibLeetcode } from "@coreui/icons";
import { CIcon } from "@coreui/icons-react";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { Linkedin } from "geist-icons";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../app/context/themeContext";
import ProfileImage from "../assets/images/profile.jpg";

const AboutMe = () => {
  const { theme } = useTheme();
  
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vermapiyush823/",
      icon: <Linkedin className="hover:text-blue-400 transition-colors" size={20} />,
      ariaLabel: "Visit my LinkedIn profile"
    },
    {
      name: "GitHub",
      url: "https://github.com/vermapiyush823",
      icon: <GitHubLogoIcon width={22} height={22} className="hover:text-textGray transition-colors" />,
      ariaLabel: "Check out my GitHub projects"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/vermapiyush823/",
      icon: <InstagramLogoIcon width={22} height={22} className="hover:text-pink-500 transition-colors" />,
      ariaLabel: "Follow me on Instagram"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/vermapiyush823/",
      icon: <CIcon
        icon={cibLeetcode}
        width={20}
        className={`hover:fill-orange-500 delay-75 transition-colors ${theme === "dark" ? "fill-white" : "fill-dark-primary"}`}
      />,
      ariaLabel: "View my LeetCode profile"
    }
  ];
  
  return (
    <div
      className={`w-full p-4 sm:p-6 flex flex-col sm:flex-row justify-between gap-6 rounded-xl border-2 sm:border-2 border-gray transition-all  
    bg-[#1A1A1A] backdrop-blur-sm
      ${theme === "dark" ? "bg-opacity-50" : "bg-opacity-0"}
    `}
    >
      {/* Left content section */}
      <div className="w-full sm:w-3/3 flex flex-col items-center sm:items-start space-y-6">
        {/* Profile header with image */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-fit">
          <div className="flex-shrink-0 animate-fade-in">
            <div
              className={`rounded-full overflow-hidden flex-shrink-0
                w-[7rem] h-[7rem] 
                ${theme === "dark"
                  ? "shadow-customDark border-2 border-gray"
                  : "shadow-custom border-none"
                }
                transition-transform hover:scale-105 duration-300
              `}
            >
              <Image
                src={ProfileImage}
                alt="Piyush Verma - Profile Photo"
                width={112}
                height={112}
                priority
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-xl md:text-2xl font-extrabold">Piyush Verma</h1>
            <p className="text-sm md:text-base font-light flex sm:text-start text-center gap-1 max-w-sm">
              A passionate Full Stack Web Developer, crafting seamless digital
              experiences from front-end to back-end.
            </p>
          </div>
        </div>
        
        {/* Email section */}
        <div className="w-full sm:flex items-center text-center sm:text-left">
          <div
            className={`text-base w-full inline 
            ${theme === "dark" ? "text-whiteGray" : "text-gray"}
            `}
          >
            Looking to hire me? Email me at{" "}
            <hr className="sm:hidden border-transparent mb-1" />
            <a
              href="mailto:vermapiyush823@gmail.com"
              className={`mt-2 text-base sm:mt-0 px-3 py-2 rounded-full transition-colors 
                ${theme === "dark"
                  ? "bg-white/20 text-light-primary hover:bg-white/30"
                  : "bg-whiteGray text-dark-primary hover:bg-whiteGray/70"
                }
                hover:shadow-md transition-all duration-300
              `}
              aria-label="Email me at vermapiyush823@gmail.com"
            >
              vermapiyush823@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="w-full sm:w-1/4 flex justify-center sm:justify-end h-fit items-center gap-2">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full transition-all duration-200 hover:bg-gray/10 active:scale-95"
            aria-label={link.ariaLabel}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
