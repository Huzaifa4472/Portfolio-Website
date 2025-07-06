import React, { useState } from "react";
import projectThree from "../assets/projects/ray-cast.png";
import projectOne from "../assets/projects/NFT-project.png";
import projectTwo from "../assets/projects/AdminPanel-project.png";
import projectFour from "../assets/projects/core-peptide.png";
import projectFive from "../assets/projects/shopp.png";
import projectSix from "../assets/projects/tht-car.png";
import projectSeven from "../assets/projects/business-creditcard.png";

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
    description:
      "I developed a decentralized NFT marketplace that empowers artists and collectors to create, buy, and sell unique digital assets. Key features include a user-friendly interface for minting NFTs, secure wallet integration, and a vibrant community-driven auction system.",
    links: {
      site: "https://nf-twebsite-uh4q.vercel.app/",
      github: "http://github.com/Huzaifa4472/NFTwebsite",
    },
  },
  {
    img: projectFour,
    title: "Core Peptides",
    description:
      "A visually engaging website for a peptide product brand. Highlights product categories and key benefits with a focus on clean design, clear messaging, and user-friendly navigation to inform and attract potential customers.",
    links: {
      site: "https://core-peptides.vercel.app/",
      github: "#",
    },
  },
  {
    img: projectTwo,
    title: "Admin-Dashboard",
    description:
      "A web dashboard featuring data cards, charts, and quick-access panels. Designed to present key metrics and insights clearly, with an emphasis on usability and clean visual structure for efficient data monitoring.",
    links: {
      site: "https://dashboard-rho-azure.vercel.app/",
      github: "http://github.com/Huzaifa4472/Dashboard",
    },
  },
  {
    img: projectThree,
    title: "Ray-Cast",
    description:
      "A web interface inspired by Raycast, presenting tools and shortcuts in a clean, minimalist layout. Built to demonstrate efficient UI design, intuitive navigation, and streamlined user workflows.",
    links: {
      site: "https://raycast-6lk2.vercel.app/",
      github: "https://github.com/Huzaifa4472/raycast",
    },
  },
  {
    img: projectFive,
    title: "USA-Imported Goodies | Admin Dashboard",
    description:
      "A responsive e-commerce landing page highlighting featured products and promotions. Designed with a focus on clarity and user-friendly navigation to encourage browsing and increase conversions.",
    links: {
      site: "https://shopp-website.vercel.app/",
      github: "http://github.com/Huzaifa4472/Shopp-Website",
    },
  },
  {
    img: projectSix,
    title: "THT-Cars",
    description:
      "A sleek, responsive landing page for THT Cars — one of the top two car rental companies in the US. Showcases premium vehicles and exclusive services through a clean hero section and clear calls to action, crafted to boost user engagement and drive bookings.",
    links: {
      site: "https://thtcars.vercel.app/",
      github: "https://github.com/Huzaifa4472/thtcars",
    },
  },
  {
    img: projectSeven,
    title: "Business CreditCard",
    description:
      "A modern, responsive React and Tailwind CSS web application designed to promote a business credit card. It features a clean hero section, highlights key product benefits, and guides users toward applying — with a focus on clarity, usability, and conversion.",
    links: {
      site: "https://business-creditcard.vercel.app/",
      github: "https://github.com/Huzaifa4472/business-creditcard",
    },
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
