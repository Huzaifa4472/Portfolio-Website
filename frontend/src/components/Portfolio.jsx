import React from "react";
import { motion } from "framer-motion";
import projectThree from "../assets/projects/ray-cast.jpg";
import projectOne from "../assets/projects/NFT-project.jpg";
import projectTwo from "../assets/projects/AdminPanel-project.jpg";
import projectFour from "../assets/projects/core-peptide.jpg";
import projectFive from "../assets/projects/shopp.jpg";
import projectSix from "../assets/projects/tht-car.jpg";
import projectSeven from "../assets/projects/business-creditcard.jpg";
import canopyImg from "../assets/projects/canopy-intel.jpg";
import usaPeptidesImg from "../assets/projects/usa-peptides.jpg";
import dadiRentBoatImg from "../assets/projects/dadi-rent-boat.jpg";
import uqgLmsImg from "../assets/projects/uqg-lms.jpg";
import ePeopleImg from "../assets/projects/e-people.jpg";
import data2uImg from "../assets/projects/data2u.jpg";
import { DiGithubBadge } from "react-icons/di";
import { FiArrowUpRight, FiExternalLink, FiLock } from "react-icons/fi";

const projects = [
  {
    img: canopyImg,
    title: "Canopy Intel AI — Person Detection & Analytics",
    description:
      "AI-powered, camera-based person-detection platform for security and informational analytics. Building the React dashboards for mall footfall/age/heatmap analytics and construction-site monitoring — headcount, vehicle counts and PPE compliance alerts — streamed from live detection data.",
    tags: ["React", "Real-Time Dashboards", "Computer Vision Integration"],
    links: { site: "https://www.canopyintel.ai/", github: null },
    featured: true,
  },
  {
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
    img: usaPeptidesImg,
    title: "USA Peptides Lab — E-Commerce Platform",
    description:
      "A full-stack e-commerce platform for product sales with role-based access for Admin, Staff and Customer roles, an admin revenue dashboard, order/inventory management, and Helcim payment gateway integration.",
    tags: ["React", "Node.js", "MongoDB", "Helcim API"],
    links: { site: null, github: null },
    private: true,
  },
  {
    img: projectFour,
    title: "Core Peptides",
    description:
      "A visually engaging marketing website for a peptide product brand. Highlights product categories and key benefits with clean design and user-friendly navigation.",
    tags: ["React", "Tailwind CSS"],
    links: {
      site: "https://core-peptides.vercel.app/",
      github: null,
    },
  },
  {
    img: uqgLmsImg,
    title: "Learning Management System (LMS)",
    description:
      "A MEAN-stack LMS where students enroll in course slots and join live classes via Zoom API. Includes lectures, assignments, quizzes, attendance tracking and a role-based admin panel for Super Admins and Teachers.",
    tags: ["Angular", "Node.js", "MongoDB", "Zoom API", "Redis", "SendGrid", "AWS S3"],
    links: { site: "https://www.uqg.techletspk.com/", github: null },
  },
  {
    img: data2uImg,
    title: "Data2u — AI-Powered Data Enrichment",
    description:
      "A platform that predicts and fills missing attributes in uploaded product files using OpenAI's Assistants API. Socket.io streams real-time, batch-by-batch progress to the client as large datasets are processed server-side.",
    tags: ["React", "Node.js", "OpenAI API", "Assistants API", "Socket.io"],
    links: { site: null, github: null },
    private: true,
  },
  {
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
    img: dadiRentBoatImg,
    title: "Dadi Rent Boat",
    description:
      "A boat rental web app with real-time availability, detailed boat listings, customer reviews, and secure payment processing for seamless bookings.",
    tags: ["React", "Node.js", "MongoDB", "Payment Gateway"],
    links: { site: null, github: null },
    private: true,
  },
  {
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

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: (i % 3) * 0.1, ease: "easeOut" },
  }),
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-4 max-w-2xl mb-16"
        >
          <span className="font-mono text-sm text-brand-cyan/40 pt-1 shrink-0">03</span>
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="mt-3 text-slate-100">
              Featured <span className="accent-text">Projects</span>
            </h2>
            <p className="!text-base mt-4">
              A collection of products I&apos;ve designed and built, from
              client e-commerce platforms and AI tools to admin dashboards.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className={`group relative tile-card overflow-hidden card-hover hover:border-brand-cyan/30 flex flex-col ${
                project.featured ? "lg:col-span-4" : "lg:col-span-2"
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                {project.private ? (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-ink-950/90 border border-white/20 text-white text-xs font-mono">
                      <FiLock size={13} /> Private client project
                    </span>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.links.site}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} live site`}
                      className="w-11 h-11 rounded-full bg-ink-950/90 border border-white/20 flex items-center justify-center text-white transition-transform duration-300 hover:scale-110 hover:bg-brand-cyan hover:text-ink-950"
                    >
                      <FiExternalLink size={18} />
                    </a>
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} source on GitHub`}
                        className="w-11 h-11 rounded-full bg-ink-950/90 border border-white/20 flex items-center justify-center text-white text-xl transition-transform duration-300 hover:scale-110 hover:bg-brand-cyan hover:text-ink-950"
                      >
                        <DiGithubBadge />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-display font-semibold text-slate-100 transition-colors duration-300 group-hover:text-brand-cyan">
                    {project.title}
                  </h3>
                  <FiArrowUpRight
                    size={18}
                    className="shrink-0 mt-1 text-slate-500 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-brand-cyan"
                  />
                </div>
                <p className="!text-sm mt-2 text-slate-400 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
