import React, { forwardRef, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectThree from "../assets/projects/ray-cast.webp";
import projectOne from "../assets/projects/NFT-project.webp";
import projectTwo from "../assets/projects/AdminPanel-project.webp";
import projectFive from "../assets/projects/shopp.webp";
import projectSix from "../assets/projects/tht-car.webp";
import projectSeven from "../assets/projects/business-creditcard.webp";
import canopyImg from "../assets/projects/canopy-intel.webp";
import usaPeptidesImg from "../assets/projects/usa-peptides.webp";
import dadiRentBoatImg from "../assets/projects/dadi-rent-boat.webp";
import uqgLmsImg from "../assets/projects/uqg-lms.webp";
import ePeopleImg from "../assets/projects/e-people.webp";
import data2uImg from "../assets/projects/data2u.webp";
import { AiFillGithub } from "react-icons/ai";
import { FiArrowUpRight, FiLock, FiChevronDown } from "react-icons/fi";
import { SectionHeading } from "./ui";

const projects = [
  {
    category: "AI & Data",
    img: canopyImg,
    title: "Canopy Intel AI — Person Detection & Analytics",
    description:
      "AI-powered, camera-based person-detection platform for security and informational analytics. Building the React dashboards for mall footfall/age/heatmap analytics and construction-site monitoring — headcount, vehicle counts and PPE compliance alerts — streamed from live detection data.",
    tags: ["React", "Real-Time Dashboards", "Computer Vision Integration"],
    links: { site: "https://www.canopyintel.ai/", github: null },
    featured: true,
  },
  {
    category: "Web Apps",
    img: projectOne,
    title: "NFT Marketplace",
    description:
      "A decentralized NFT marketplace that empowers artists and collectors to create, buy, and sell unique digital assets, with secure wallet integration and a community-driven auction system.",
    tags: ["React", "Node.js", "MongoDB", "Styled Components"],
    links: {
      site: "https://nf-twebsite-uh4q.vercel.app/",
      github: "http://github.com/Huzaifa4472/NFTwebsite",
    },
  },
  {
    category: "E-Commerce",
    img: usaPeptidesImg,
    title: "USA Peptides Lab — E-Commerce Platform",
    description:
      "A full-stack e-commerce platform for product sales with role-based access for Admin, Staff and Customer roles, an admin revenue dashboard, order/inventory management, and Helcim payment gateway integration.",
    tags: ["React", "Node.js", "MongoDB", "Helcim API"],
    links: { site: null, github: null },
    private: true,
  },
  {
    category: "Web Apps",
    img: uqgLmsImg,
    title: "Learning Management System (LMS)",
    description:
      "A MEAN-stack LMS where students enroll in course slots and join live classes via Zoom API. Includes lectures, assignments, quizzes, attendance tracking and a role-based admin panel for Super Admins and Teachers.",
    tags: ["Angular", "Node.js", "MongoDB", "Zoom API", "Redis", "SendGrid", "AWS S3"],
    links: { site: "https://www.uqg.techletspk.com/", github: null },
  },
  {
    category: "AI & Data",
    img: data2uImg,
    title: "Data2u — AI-Powered Data Enrichment",
    description:
      "A platform that predicts and fills missing attributes in uploaded product files using OpenAI's Assistants API. Socket.io streams real-time, batch-by-batch progress to the client as large datasets are processed server-side.",
    tags: ["React", "Node.js", "OpenAI API", "Assistants API", "Socket.io"],
    links: { site: null, github: null },
    private: true,
  },
  {
    category: "Web Apps",
    img: projectTwo,
    title: "Admin Dashboard",
    description:
      "A one-page admin dashboard featuring data cards, charts, and quick-access panels, built for clear, efficient monitoring of web application metrics.",
    tags: ["React", "Node.js", "MongoDB"],
    links: {
      site: "https://dashboard-rho-azure.vercel.app/",
      github: "http://github.com/Huzaifa4472/Dashboard",
    },
  },
  {
    category: "Websites",
    img: projectThree,
    title: "Ray-Cast",
    description:
      "A web interface inspired by Raycast, presenting tools and shortcuts in a clean, minimalist layout with intuitive navigation and streamlined workflows.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    links: {
      site: "https://raycast-6lk2.vercel.app/",
      github: "https://github.com/Huzaifa4472/raycast",
    },
  },
  {
    category: "E-Commerce",
    img: projectFive,
    title: "USA-Imported Goodies",
    description:
      "A responsive e-commerce landing page highlighting featured products and promotions, focused on clarity and user-friendly navigation to boost conversions.",
    tags: ["React", "Tailwind CSS"],
    links: {
      site: "https://shopp-website.vercel.app/",
      github: "http://github.com/Huzaifa4472/Shopp-Website",
    },
  },
  {
    category: "Web Apps",
    img: projectSix,
    title: "THT Cars — Rental Frontend",
    description:
      "A fully responsive car rental frontend built with Next.js and server-side rendering, featuring a location-selective booking flow, date/time reservations, and real-time vehicle availability via backend REST APIs.",
    tags: ["Next.js", "React", "Tailwind CSS", "REST APIs"],
    links: {
      site: "https://thtcars.vercel.app/",
      github: "https://github.com/Huzaifa4472/thtcars",
    },
    featured: true,
  },
  {
    category: "Web Apps",
    img: ePeopleImg,
    title: "e-People — HR & Performance Management",
    description:
      "A full-scale HR platform with goal-setting, periodic assessments and appraisals, attendance tracking, and separate employee and manager dashboards — with role-based access for Super Admins, Managers and Employees.",
    tags: ["Angular", "Node.js", "MongoDB", "Express.js"],
    links: { site: null, github: null },
    private: true,
    featured: true,
  },
  {
    category: "Web Apps",
    img: dadiRentBoatImg,
    title: "Dadi Rent Boat",
    description:
      "A boat rental web app with real-time availability, detailed boat listings, customer reviews, and secure payment processing for seamless bookings.",
    tags: ["React", "Node.js", "MongoDB", "Payment Gateway"],
    links: { site: null, github: null },
    private: true,
  },
  {
    category: "Websites",
    img: projectSeven,
    title: "Business Credit Card",
    description:
      "A modern, responsive web app promoting a business credit card — clean hero section, key benefits, and a conversion-focused application flow.",
    tags: ["React", "Tailwind CSS"],
    links: {
      site: "https://business-creditcard.vercel.app/",
      github: "https://github.com/Huzaifa4472/business-creditcard",
    },
  },
];

// Featured projects first, original order otherwise.
const ordered = [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

const filters = ["All", "Web Apps", "AI & Data", "E-Commerce", "Websites"];
// One wide case study + two full rows of three.
const INITIAL_COUNT = 7;

const hostOf = (url) => {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return null;
  }
};

const BrowserFrame = ({ project, className = "" }) => (
  <div
    className={`relative overflow-hidden rounded-[1.1rem] border border-white/10 bg-ink-800 ${className}`}
  >
    <div className="flex items-center gap-3 px-3.5 h-8 border-b border-white/[0.07] bg-ink-900/90">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
      </div>
      <div className="flex-1 flex justify-center">
        <span className="inline-flex items-center gap-1.5 max-w-[70%] truncate rounded-md bg-white/[0.05] px-3 py-0.5 text-[10px] font-mono text-slate-500">
          {project.private ? <FiLock size={9} /> : null}
          {hostOf(project.links.site) ?? "private.client"}
        </span>
      </div>
      <span className="w-[42px]" />
    </div>
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        src={project.img}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  </div>
);

const ProjectLinks = ({ project }) =>
  project.private ? (
    <span className="inline-flex items-center gap-2 text-slate-500">
      <FiLock size={13} /> Private client project
    </span>
  ) : (
    <>
      <a
        href={project.links.site}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 font-medium text-white hover:text-brand-cyan transition-colors"
      >
        Live site{" "}
        <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
      {project.links.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
        >
          <AiFillGithub /> Code
        </a>
      )}
    </>
  );

const Tags = ({ tags, max = tags.length }) => (
  <div className="flex flex-wrap gap-1.5">
    {tags.slice(0, max).map((tag) => (
      <span key={tag} className="chip">
        {tag}
      </span>
    ))}
    {tags.length > max && <span className="chip">+{tags.length - max}</span>}
  </div>
);

const cardMotion = {
  layout: true,
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

const ProjectCard = forwardRef(function ProjectCard({ project, wide }, ref) {
  if (wide) {
    return (
      <motion.article
        ref={ref}
        {...cardMotion}
        className="group tile-card tile-card-hover spotlight p-2 sm:col-span-2 lg:col-span-3 grid lg:grid-cols-12 gap-2"
      >
        <BrowserFrame project={project} className="lg:col-span-7" />
        <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col">
          <div className="flex items-center gap-2">
            <span className="chip !bg-brand-cyan/90 !text-ink-950 !border-transparent font-medium">
              Featured case study
            </span>
            <span className="chip">{project.category}</span>
          </div>
          <h3 className="mt-5 text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight">
            {project.title}
          </h3>
          <p className="!text-[15px] mt-4 flex-1">{project.description}</p>
          <div className="mt-6">
            <Tags tags={project.tags} />
          </div>
          <div className="flex items-center gap-4 mt-6 pt-5 border-t border-white/[0.06] text-sm">
            <ProjectLinks project={project} />
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      ref={ref}
      {...cardMotion}
      className="group tile-card tile-card-hover spotlight p-2 flex flex-col transition-transform duration-500 hover:-translate-y-1"
    >
      <div className="relative">
        <BrowserFrame project={project} />
        {project.featured && (
          <span className="absolute top-11 right-3 chip !bg-brand-cyan/90 !text-ink-950 !border-transparent font-medium">
            Featured
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cyan/80">
          {project.category}
        </span>
        <h3 className="mt-1.5 text-lg font-semibold text-white leading-snug">{project.title}</h3>
        <div className="flex-1">
          <p className="!text-sm mt-2 line-clamp-3">{project.description}</p>
        </div>
        <div className="mt-4">
          <Tags tags={project.tags} max={4} />
        </div>
        <div className="flex items-center gap-4 mt-5 pt-4 border-t border-white/[0.06] text-sm">
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
});

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () => (filter === "All" ? ordered : ordered.filter((p) => p.category === filter)),
    [filter],
  );
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="portfolio" className="section">
      <div className="section-container">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I've"
          accent="shipped"
          description="Client platforms, AI tools and dashboards, several running in production today."
        />
        <div
          className="flex flex-wrap gap-2 -mt-4 mb-10"
          role="tablist"
          aria-label="Filter projects"
        >
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => {
                setFilter(f);
                setShowAll(false);
              }}
              className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 cursor-pointer ${
                filter === f
                  ? "text-ink-950"
                  : "text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                wide={filter === "All" && i === 0}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-12">
            <button onClick={() => setShowAll((v) => !v)} className="btn-outline cursor-pointer">
              {showAll ? "Show less" : `View all ${filtered.length} projects`}
              <FiChevronDown
                className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
