import { useTheme } from "../app/context/themeContext";

const Company = ({ course, school, date }) => {
  const { theme } = useTheme();
  return (
    <div className="relative">
      <div
        className={`absolute top-1 left-3 w-4 h-4 rounded-full ${
          theme === "dark" ? "bg-whiteGray" : "bg-gray"
        }`}
      ></div>
      <div className="ml-12">
        <h3 className=" text-lg font-extrabold">{school}</h3>
        <p
          className={`
            ${theme === "dark" ? "text-whiteGray" : "text-gray"}
         flex items-center  gap-x-1`}
        >
          {course} • {date}
        </p>
      </div>
    </div>
  );
};

export default Company;
