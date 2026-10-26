import React from "react";
import { motion } from "framer-motion";
import profileAlt from "../assets/prof.webp";
import { SectionHeading, fadeUp, stagger } from "./ui";
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
import {
  SiStyledcomponents,
  SiExpress,
  SiVite,
  SiNextdotjs,
  SiAstro,
  SiAngular,
  SiTypescript,
  SiOpenai,
  SiSocketdotio,
  SiBitbucket,
  SiAmazons3,
  SiNginx,
  SiVercel,
  SiRedis,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  TbBrandReactNative,
  TbApi,
  TbChartDots3,
  TbDatabaseCog,
  TbStack2,
  TbMailForward,
} from "react-icons/tb";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { icon: DiHtml5, name: "HTML5", color: "text-orange-500" },
      { icon: DiCss3, name: "CSS3", color: "text-blue-500" },
      { icon: DiSass, name: "Sass", color: "text-pink-500" },
      { icon: DiBootstrap, name: "Bootstrap", color: "text-violet-500" },
      { icon: RiTailwindCssFill, name: "Tailwind", color: "text-sky-400" },
      { icon: DiJavascript1, name: "JavaScript", color: "text-yellow-400" },
      { icon: SiTypescript, name: "TypeScript", color: "text-blue-400" },
      { icon: DiReact, name: "React", color: "text-sky-400" },
      { icon: SiNextdotjs, name: "Next.js", color: "text-slate-100" },
      { icon: SiAstro, name: "Astro.js", color: "text-orange-400" },
      { icon: SiAngular, name: "Angular", color: "text-red-500" },
      { icon: TbBrandReactNative, name: "React Native", color: "text-sky-400" },
      { icon: TbApi, name: "REST APIs", color: "text-emerald-400" },
      { icon: SiStyledcomponents, name: "Styled Components", color: "text-pink-400" },
      { icon: SiVite, name: "Vite", color: "text-purple-400" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { icon: DiNodejsSmall, name: "Node.js", color: "text-green-500" },
      { icon: SiExpress, name: "Express", color: "text-slate-300" },
      { icon: DiMongodb, name: "MongoDB", color: "text-green-500" },
      { icon: SiRedis, name: "Redis", color: "text-red-500" },
    ],
  },
  {
    title: "AI & Real-Time Data",
    skills: [
      { icon: SiOpenai, name: "OpenAI Integration", color: "text-slate-100" },
      {
        icon: TbChartDots3,
        name: "Missing-Data Prediction",
        color: "text-brand-cyan",
      },
      {
        icon: SiSocketdotio,
        name: "Real-Time Updates (Socket.io)",
        color: "text-slate-200",
      },
      { icon: TbStack2, name: "Batched API Streaming", color: "text-emerald-400" },
      {
        icon: TbDatabaseCog,
        name: "Large Dataset Optimization",
        color: "text-brand-violet",
      },
    ],
  },
  {
    title: "Cloud & Deployment",
    skills: [
      { icon: SiAmazons3, name: "AWS S3", color: "text-orange-400" },
      { icon: SiNginx, name: "Nginx", color: "text-green-500" },
      { icon: SiVercel, name: "Vercel", color: "text-slate-100" },
      { icon: TbMailForward, name: "SendGrid", color: "text-sky-400" },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { icon: DiGithubBadge, name: "Git & GitHub", color: "text-slate-200" },
      { icon: SiBitbucket, name: "Bitbucket", color: "text-blue-500" },
    ],
  },
];

const principles = [
  {
    title: "Performance first",
    text: "Fast load times and smooth interactions, from the first commit.",
  },
  {
    title: "Clear communication",
    text: "Regular updates, honest timelines and no disappearing acts.",
  },
  {
    title: "Details that matter",
    text: "Loading states, edge cases and animation timing, done properly.",
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-container">
        <SectionHeading eyebrow="About" title="The developer" accent="behind the work" />

        <div className="grid lg:grid-cols-12 gap-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="lg:col-span-7 tile-card p-8 md:p-10"
          >
            <p className="!text-lg md:!text-xl !text-slate-200 leading-relaxed">
              I&apos;m a full-stack developer with 3+ years of experience turning product ideas into
              responsive, production-ready web and mobile applications.
            </p>
            <p className="mt-5">
              My day-to-day stack is React and Next.js on the frontend (with Angular for
              enterprise-style dashboards), React Native for mobile, and Node.js / Express APIs on
              the backend, usually backed by MongoDB and deployed with an eye on performance from
              the start.
            </p>
            <p className="mt-5">
              Lately I&apos;ve been deep in AI-driven data work: using OpenAI to predict and fill
              missing values in large datasets, then streaming results to the UI in real time over
              Socket.io. Right now I&apos;m building live dashboards for a computer-vision platform,
              turning camera-detection data into clear security and analytics interfaces.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/[0.06]">
              {principles.map((pr) => (
                <div key={pr.title}>
                  <h3 className="text-sm font-semibold text-white">{pr.title}</h3>
                  <p className="!text-sm mt-1.5">{pr.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="lg:col-span-5 tile-card p-2 overflow-hidden min-h-[320px]"
          >
            <img
              src={profileAlt}
              alt="Portrait of Muhammad Huzaifa"
              loading="lazy"
              className="w-full h-full object-cover rounded-[1.2rem]"
            />
          </motion.div>
        </div>

        <motion.div
          id="skills"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="mt-4 tile-card divide-y divide-white/[0.06] scroll-mt-24"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              className="grid md:grid-cols-12 gap-4 p-6 md:p-8"
            >
              <h3 className="md:col-span-3 text-sm font-mono text-slate-500 pt-2">{group.title}</h3>
              <div className="md:col-span-9 flex flex-wrap gap-2">
                {group.skills.map(({ icon: Icon, name, color }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-sm text-slate-300 transition-colors duration-300 hover:border-white/25 hover:text-white"
                  >
                    <Icon className={`text-base ${color}`} />
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
