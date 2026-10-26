import React from "react";
import { motion } from "framer-motion";
import { FiLayout, FiServer, FiCpu, FiActivity, FiSmartphone, FiShoppingBag } from "react-icons/fi";
import { SectionHeading, fadeUp, stagger } from "./ui";

const services = [
  {
    icon: FiLayout,
    title: "Web Applications",
    description:
      "Responsive, SEO-friendly apps and admin panels in React, Next.js or Angular: clean architecture, polished UI and fast load times.",
    stack: ["React", "Next.js", "Angular", "TypeScript"],
    wide: true,
  },
  {
    icon: FiServer,
    title: "Backend & APIs",
    description:
      "Secure Node.js / Express APIs with MongoDB & Redis, role-based access, payments and third-party integrations.",
    stack: ["Node.js", "Express", "MongoDB", "Redis"],
  },
  {
    icon: FiCpu,
    title: "AI Integration",
    description:
      "OpenAI-powered features that enrich data, predict missing values and automate workflows your team does by hand today.",
    stack: ["OpenAI", "Assistants API"],
  },
  {
    icon: FiActivity,
    title: "Real-Time Dashboards",
    description:
      "Live, chart-driven dashboards streamed over Socket.io. From analytics to camera-detection data, updated the moment it changes.",
    stack: ["Socket.io", "Charts", "Streaming"],
    wide: true,
  },
  {
    icon: FiShoppingBag,
    title: "E-Commerce",
    description:
      "Storefronts with payment gateways, inventory & order management and revenue dashboards for admins.",
    stack: ["Payments", "Dashboards"],
  },
  {
    icon: FiSmartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform iOS & Android apps with React Native that share logic with your web product.",
    stack: ["React Native"],
  },
];

const Services = () => (
  <section id="services" className="section">
    <div className="section-container">
      <SectionHeading
        eyebrow="Services"
        title="What I can build"
        accent="for you"
        description="End-to-end development, so you work with one person who owns the whole product: interface, API, database and deployment."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="grid md:grid-cols-4 gap-4"
      >
        {services.map(({ icon: Icon, title, description, stack, wide }) => (
          <motion.article
            key={title}
            variants={fadeUp}
            className={`group tile-card tile-card-hover spotlight p-7 overflow-hidden md:col-span-2 ${
              wide ? "" : "lg:col-span-1"
            }`}
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-brand-cyan/0 blur-3xl transition-colors duration-700 group-hover:bg-brand-cyan/10" />
            <span className="relative w-12 h-12 rounded-2xl border border-white/10 bg-gradient-to-br from-brand-cyan/20 via-white/[0.03] to-brand-violet/20 flex items-center justify-center text-brand-cyan text-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
              <Icon />
            </span>
            <h3 className="relative mt-6 text-xl font-semibold text-white">{title}</h3>
            <p className="relative mt-3 !text-[15px]">{description}</p>
            <div className="relative flex flex-wrap gap-2 mt-6">
              {stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Services;
