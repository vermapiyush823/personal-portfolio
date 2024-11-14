"use client";

import AboutMe from "../../../components/AboutMe";
import Experience from "../../../components/Experience";

const Home = () => {
  return (
    <div className="w-full px-4 py-8 flex flex-col  items-center justify-center h-full ">
      <AboutMe />
      <Experience />
    </div>
  );
};

export default Home;
