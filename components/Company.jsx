import Image from "next/image";
import { useTheme } from "../app/context/themeContext";

const Company = ({ company, role, date, description, logo }) => {
  const { theme } = useTheme();
  return (
    <div className="relative">
      <div
        className={`absolute top-1 left-3 w-4 h-4 rounded-full ${
          theme === "dark" ? "bg-whiteGray" : "bg-gray"
        }`}
      ></div>
      <div className="ml-12">
        <h3 className=" text-lg font-extrabold">{role}</h3>
        <p
          className={`
            ${theme === "dark" ? "text-whiteGray" : "text-gray"}
         flex items-center  gap-x-1`}
        >
          {company}{" "}
          <a
            href="https://www.servicenow.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={logo}
              alt="ServiceNow"
              width={18}
              height={18}
              className="mb-1"
            />
          </a>
          • {date}
        </p>
        <ul
          className={`list-disc text-sm list-inside mt-2 space-y-1
        ${theme === "dark" ? "text-whiteGray" : "text-gray"}`}
        >
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Company;
