import { useTheme } from "../app/context/themeContext";
import UnStuck from "../assets/images/unStuck.png";
import NextJs from "../assets/logos/nextjs.svg";
import TailwindCss from "../assets/logos/tailwind.svg";
import ProjectContainer from "./ProjectContainer";
const Projects = () => {
  const { theme } = useTheme();

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
      </div>
    </div>
  );
};

export default Projects;
