import { useEffect, useState } from "react";
import { useTheme } from "../app/context/themeContext";
import Aura1 from "../assets/images/aura1.jpeg";
import Aura2 from "../assets/images/aura2.jpeg";
import Aura3 from "../assets/images/aura3.jpeg";
import InvestmentTracker from "../assets/images/InvestmentTracker.png";
import ShreeBalaji from "../assets/images/ShreeBalaji.png";
import UnStuck from "../assets/images/unStuck.png";
import Clerk from "../assets/logos/clerk.svg";
import Css from "../assets/logos/css-3.svg";
import NextJs from "../assets/logos/nextjs.svg";
import ReactNative from "../assets/logos/react-native.svg";
import ReactIcon from "../assets/logos/react.svg";
import TailwindCss from "../assets/logos/tailwind.svg";
import Typescript from "../assets/logos/typescript.svg";
import MobileProjectCarousel from "./MobileProjectCarousel";
import ProjectContainer from "./ProjectContainer";
const Projects = () => {
  const { theme } = useTheme();
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Mobile size if width < 640px (sm breakpoint)
    };

    // Initialize on mount
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      projectname: "Shree Balaji Jewellers",
      projectimage: [ShreeBalaji],
      projecttechstack: [
        { name: "Next.js", logo: NextJs },
        { name: "Tailwind CSS", logo: TailwindCss },
        { name: "TypeScript", logo: Typescript },
      ],
      projectgithublink:
        "https://github.com/vermapiyush823/SHREE-BALAJI-JWELLERS",
      projectlink: "https://shree-balaji-jwellers.vercel.app/",
    },

    {
      projectname: "UnStuck",
      projectimage: [UnStuck],
      projecttechstack: [
        { name: "Next.js", logo: NextJs },
        { name: "Tailwind CSS", logo: TailwindCss },
        { name: "Clerk", logo: Clerk },
      ],
      projectgithublink: "https://github.com/vermapiyush823/unStuck",
      projectlink: "https://un-stuck.vercel.app/",
    },

    {
      projectname: "Aura",
      projectimage: [Aura3, Aura2, Aura1],
      projecttechstack: [
        { name: "React Native", logo: ReactNative },
        { name: "Tailwind CSS", logo: TailwindCss },
      ],
      projectgithublink: "https://github.com/vermapiyush823/Aura",
      projectlink: "",
    },
    {
      projectname: "Investment Tracker",
      projectimage: [InvestmentTracker],
      projecttechstack: [
        { name: "React", logo: ReactIcon },
        { name: "CSS", logo: Css },
      ],
      projectgithublink: "https://github.com/vermapiyush823/Investment-Tracker",
      projectlink: "https://investment-tracker-sage.vercel.app/",
    },

    // Repeat or add more projects here
  ];

  const visibleProjects =
    isMobile && !showAllProjects ? projects.slice(0, 2) : projects;

  return (
    <div className="w-full mt-16 rounded-xl transition-all">
      <h2 className="text-2xl font-bold mb-1 ml-1">Projects</h2>
      <hr className="w-full border-t-2 mb-6 border-gray" />
      
      {/* Desktop view: grid layout */}
      {!isMobile && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectContainer
              key={index}
              projectname={project.projectname}
              projectimage={project.projectimage}
              projecttechstack={project.projecttechstack}
              projectgithublink={project.projectgithublink}
              projectlink={project.projectlink}
            />
          ))}
        </div>
      )}
      
      {/* Mobile view: carousel */}
      {isMobile && (
        <div className="mb-8">
          <MobileProjectCarousel>
            {projects.map((project, index) => (
              <div key={index} className="w-full h-full px-1 my-1">
                <ProjectContainer
                  projectname={project.projectname}
                  projectimage={project.projectimage}
                  projecttechstack={project.projecttechstack}
                  projectgithublink={project.projectgithublink}
                  projectlink={project.projectlink}
                />
              </div>
            ))}
          </MobileProjectCarousel>
        </div>
      )}
    </div>
  );
};

export default Projects;
