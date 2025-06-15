import { useTheme } from "../app/context/themeContext";
import School from "./School";

const Education = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full mb-10 rounded-xl transition-all">
      <h2 className="text-2xl font-bold mb-1 ml-1" id="education">Education</h2>
      <hr className="w-full border-t-2 mb-4 border-gray" />

      <div className="relative">
        <div
          className={`absolute top-1 rounded-full left-[18px] h-full w-[3px] 
        ${theme === "dark" ? "bg-gray" : "bg-whiteGray"}
        `}
        ></div>
        <div className="space-y-8">
          <School
            school="Lovely Professional University"
            course="B.Tech in Computer Science and Engineering"
            date="May 2021 - Present"
          />
          <School
            school="Hindu VidyaPeeth"
            course="Senior Secondary"
            date="2019 - 2021"
          />
          <School
            school="Hindu VidyaPeeth"
            course="Secondary"
            date="2018 - 2019"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
