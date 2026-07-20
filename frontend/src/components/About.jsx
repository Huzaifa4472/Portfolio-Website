import React from "react";
import { motion } from "framer-motion";
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

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "25+", label: "Projects Delivered" },
  { value: "30+", label: "Technologies Used" },
];

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

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex items-start gap-4 max-w-2xl mb-16"
        >
          <span className="font-mono text-sm text-brand-cyan/40 pt-1 shrink-0">01</span>
          <div>
            <span className="eyebrow">Get to know me</span>
            <h2 className="mt-3 text-slate-100">
              About <span className="accent-text">Me</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4 lg:gap-5">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="md:col-span-3 tile-card p-8"
          >
            <p className="!text-base text-slate-300">
              I&apos;m a full-stack developer with 3+ years of experience
              turning product ideas into responsive, production-ready web
              and mobile applications. My day-to-day stack is React and
              Next.js on the frontend (with Angular in the mix for
              enterprise-style dashboards), React Native for mobile, and
              Node.js / Express APIs on the backend — usually backed by
              MongoDB and deployed with an eye on performance from the
              first commit.
            </p>
            <p className="!text-base text-slate-300 mt-4">
              Lately I&apos;ve been deep in AI-driven data work: manipulating
              large, messy datasets and using OpenAI to predict and fill in
              missing values, then streaming the results to the UI as
              live status badges over Socket.io — with the API returning
              predictions in batches so the interface updates
              incrementally in real time instead of blocking on one big
              response. I&apos;m currently building real-time dashboards for
              a computer-vision platform, turning live camera-detection
              data into clear, chart-driven security and analytics UIs.
            </p>
            <p className="!text-base text-slate-300 mt-4">
              I care about clean architecture and interfaces that feel as
              good as they look, and I sweat the details — loading states,
              edge cases, animation timing — that separate a working
              product from a polished one.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="md:col-span-2 flex flex-col gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="tile-card p-6 flex items-center gap-4 flex-1"
              >
                <span className="text-3xl font-display font-bold accent-text">
                  {stat.value}
                </span>
                <span className="text-sm text-slate-300 leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          id="skills"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-4 lg:gap-5 mt-4 lg:mt-5 scroll-mt-24"
        >
          {skillGroups.map((group) => (
            <div key={group.title} className="tile-card p-6">
              <h3 className="font-display font-semibold text-slate-200 mb-4 text-sm tracking-wide uppercase text-brand-cyan/80">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map(({ icon: Icon, name, color }) => (
                  <motion.div
                    key={name}
                    variants={fadeUp}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 transition-colors duration-300 hover:border-brand-cyan/30"
                  >
                    <Icon className={`text-xl ${color}`} />
                    <span className="text-sm text-slate-300">{name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
