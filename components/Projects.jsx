import { useTheme } from "../app/context/themeContext";
import ProjectContainer from "./ProjectContainer";
const Projects = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full max-w-3xl mt-16 rounded-xl transition-all">
      <h2 className="text-2xl font-bold mb-1 ml-1">Projects</h2>
      <hr className="w-full border-t-2 mb-4 border-gray" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <ProjectContainer />
      </div>
    </div>
  );
};

export default Projects;
