"use client";

import AboutMe from "../../../components/AboutMe";
import Experience from "../../../components/Experience";
import Skills from "../../../components/Skills";

const Home = () => {
  return (
    <div className="w-full px-2 sm:px-4 py-8 flex flex-col  items-center justify-center h-full ">
      <AboutMe />
      <Experience />
      <Skills />
    </div>
  );
};

export default Home;
