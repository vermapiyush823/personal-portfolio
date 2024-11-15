import { useState } from "react";
import { useTheme } from "../app/context/themeContext";
import UnStuck from "../assets/images/unStuck.png";
import NextJs from "../assets/logos/nextjs.svg";
import TailwindCss from "../assets/logos/tailwind.svg";
import ProjectContainer from "./ProjectContainer";
const Projects = () => {
  const { theme } = useTheme();
  const [showProjects, setShowProjects] = useState(true);
  return (
    <div className="w-full max-w-3xl mt-16 rounded-xl transition-all">
      <h2 className="text-2xl font-bold mb-1 ml-1">Projects</h2>
      <hr className="w-full border-t-2 mb-4 border-gray" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProjectContainer
          projectname="UnStuck"
          projectimage={UnStuck}
          projecttechstack={[
            {
              name: "Next.js",
              logo: NextJs,
            },
            {
              name: "Tailwind CSS",
              logo: TailwindCss,
            },
          ]}
          projectgithublink="https://github.com/vermapiyush823/unStuck"
          projectlink="https://un-stuck.vercel.app/"
        />
        <ProjectContainer
          projectname="UnStuck"
          projectimage={UnStuck}
          projecttechstack={[
            {
              name: "Next.js",
              logo: NextJs,
            },
            {
              name: "Tailwind CSS",
              logo: TailwindCss,
            },
          ]}
          projectgithublink="https://github.com/vermapiyush823/unStuck"
          projectlink="https://un-stuck.vercel.app/"
        />
        {!showProjects && (
          <button
            className={`text-sm text-white p-1 px-2  bg-white/40 rounded-full hover:underline
          block sm:hidden
        `}
            onClick={() => setShowProjects(true)}
          >
            Show More
          </button>
        )}
        {showProjects && (
          <>
            <ProjectContainer
              projectname="UnStuck"
              projectimage={UnStuck}
              projecttechstack={[
                {
                  name: "Next.js",
                  logo: NextJs,
                },
                {
                  name: "Tailwind CSS",
                  logo: TailwindCss,
                },
              ]}
              projectgithublink="https://github.com/vermapiyush823/unStuck"
              projectlink="https://un-stuck.vercel.app/"
            />
            <ProjectContainer
              projectname="UnStuck"
              projectimage={UnStuck}
              projecttechstack={[
                {
                  name: "Next.js",
                  logo: NextJs,
                },
                {
                  name: "Tailwind CSS",
                  logo: TailwindCss,
                },
              ]}
              projectgithublink="https://github.com/vermapiyush823/unStuck"
              projectlink="https://un-stuck.vercel.app/"
            />
            <button
              className="text-sm text-white p-1 px-2  bg-white/40 rounded-full hover:underline block sm:hidden"
              onClick={() => setShowProjects(false)}
            >
              Show Less
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
