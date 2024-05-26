import React, { useState } from "react";
import projectThree from "../assets/projects/port-project.png";
import projectOne from "../assets/projects/NFT-project.png";
import projectTwo from "../assets/projects/AdminPanel-project.png";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
const projects = [
  {
    img: projectOne,
    title: "NFT Marketplace",
    description: "Hello",
    links: { site: "#", github: "#" },
  },
  {
    img: projectTwo,
    title: "NFT Marketplace",
    description: "Hello",
    links: { site: "#", github: "#" },
  },
  {
    img: projectThree,
    title: "NFT Marketplace",
    description: "Hello",
    links: { site: "#", github: "#" },
  },
];
const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  return (
    <div
      className="relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row"
      id="portfolio"
    >
      <div className="glass p-6 w-full border-2 max-w-[600px]">
        <div className="w-full h-80">
          <img
            src={projects[currentProject].img}
            alt={projects[currentProject].title}
            className="w-full h-full object-cover rounded-lg mb-4 "
          />
        </div>
        <p className="text-gray-200 my-4">
          {projects[currentProject].description}
        </p>
        <div className="flex space-x-4">
          <a
            href={projects[currentProject].links.site}
            className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
          >
            View Site
          </a>
          <a
            href={projects[currentProject].links.github}
            className="px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300"
          >
            <DiGithubBadge />{" "}
          </a>
        </div>
      </div>
      <ul className="ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-3">
        {projects.map((project, index) => (
          <li
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[150px] hover:bg-slate-800 transition duration-300 ${
              currentProject === index ? "bg-slate-900" : ""
            }`}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
