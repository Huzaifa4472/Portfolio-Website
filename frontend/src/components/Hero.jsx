import profilePic from "../assets/proo.webp";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiArrowRight, FiDownload, FiMapPin, FiZap } from "react-icons/fi";
import { CountUp, CV_FILENAME, CV_URL } from "./ui";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stats = [
  { value: 3, suffix: "+", label: "Years shipping" },
  { value: 25, suffix: "+", label: "Projects delivered" },
  { value: 30, suffix: "+", label: "Technologies used" },
];

const Hero = () => {
  return (
    <section id="hero" className="relative pt-36 pb-16 md:pt-44 md:pb-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-container grid lg:grid-cols-12 gap-12 lg:gap-10 items-center"
      >
        <div className="lg:col-span-7">
          <motion.div variants={item}>
            <span className="open-badge">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-ink-950">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink-950/60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-ink-950" />
                </span>
                Open to work
              </span>
              <span className="hidden sm:inline">Freelance, contract &amp; full-time roles</span>
              <span className="sm:hidden">Freelance &amp; full-time</span>
            </span>
          </motion.div>

          <motion.div variants={item} className="mt-8">
            <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[4rem] font-semibold tracking-[-0.04em] text-white">
              Muhammad Huzaifa
            </h1>
            <p className="mt-4 flex items-center gap-3 !text-2xl sm:!text-3xl lg:!text-[2rem] font-semibold tracking-tight !leading-tight">
              <span className="h-[3px] w-8 sm:w-10 rounded-full bg-gradient-to-r from-brand-cyan to-brand-violet shrink-0" />
              <span className="accent-gradient">Full-Stack Developer</span>
            </p>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-5 !text-xl md:!text-2xl !text-white font-medium tracking-tight max-w-[580px]"
          >
            I build web products that scale with your business.
          </motion.p>

          <motion.p variants={item} className="mt-4 text-lg text-slate-400 max-w-[560px]">
            From first sketch to production: React &amp; Next.js frontends, Node.js APIs, AI
            features and real-time dashboards, built to perform on day one.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mt-10">
            <Link to="contact" smooth offset={-80} duration={500} className="w-full sm:w-auto">
              <button className="btn-primary !px-7 !py-3.5 w-full cursor-pointer group">
                Start a project
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
            <a
              href={CV_URL}
              download={CV_FILENAME}
              className="btn-cv !px-7 !py-3.5 w-full sm:w-auto group"
            >
              <FiDownload className="text-brand-cyan transition-transform duration-300 group-hover:translate-y-0.5" />
              Download CV
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-mono text-slate-300">
                PDF
              </span>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-8 text-sm text-slate-500"
          >
            <Link
              to="portfolio"
              smooth
              offset={-80}
              duration={500}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white cursor-pointer underline decoration-white/20 underline-offset-4 hover:decoration-white/60 transition-colors"
            >
              View my work <FiArrowRight size={14} />
            </Link>
            <span className="h-4 w-px bg-white/10" />
            <a
              href="https://github.com/Huzaifa4472"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition-colors"
            >
              <AiFillGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-huzaifa-99a6bb200/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <AiFillLinkedin size={20} />
            </a>
            <span className="h-4 w-px bg-white/10" />
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin /> Islamabad, PK · Remote-friendly
            </span>
          </motion.div>
        </div>

        <motion.div variants={item} className="lg:col-span-5 relative mx-auto w-full max-w-[420px]">
          <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-brand-cyan/25 via-transparent to-brand-violet/25 blur-3xl" />

          {/* Rotating gradient ring around the portrait */}
          <div className="relative rounded-[2rem] p-px overflow-hidden">
            <div className="absolute left-1/2 top-1/2 w-[200%] aspect-square -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0%,#5eead4_10%,transparent_22%,transparent_50%,#a78bfa_60%,transparent_72%)] animate-spin-slow" />
            <div className="relative rounded-[calc(2rem-1px)] p-2 bg-ink-900">
              <div className="relative rounded-[1.6rem] overflow-hidden aspect-[4/5]">
                <img
                  src={profilePic}
                  alt="Muhammad Huzaifa, full-stack developer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-950/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="!text-white font-semibold !text-base leading-tight">
                      Muhammad Huzaifa
                    </p>
                    <p className="!text-xs font-mono !text-slate-300 mt-1">Full-Stack Developer</p>
                  </div>
                  <span className="chip !bg-ink-950/70 !text-slate-200 backdrop-blur">
                    MERN · MEAN
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-4 sm:-left-10 top-10 animate-float">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/85 backdrop-blur-xl px-4 py-3 shadow-2xl">
              <span className="w-9 h-9 rounded-xl bg-brand-cyan/15 text-brand-cyan flex items-center justify-center">
                <FiZap />
              </span>
              <div>
                <p className="!text-[11px] font-mono !text-slate-500 leading-none">
                  Currently building
                </p>
                <p className="!text-sm !text-white font-medium mt-1 leading-none">
                  AI vision dashboards
                </p>
              </div>
            </div>
          </div>

          <div
            className="absolute -right-3 sm:-right-8 bottom-24 animate-float"
            style={{ animationDelay: "-3s" }}
          >
            <Link
              to="contact"
              smooth
              offset={-80}
              duration={500}
              className="flex items-center gap-2.5 rounded-2xl border border-emerald-400/30 bg-ink-900/85 backdrop-blur-xl px-4 py-3 shadow-[0_10px_40px_-10px_rgba(52,211,153,0.55)] text-sm text-white cursor-pointer"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="font-medium">Open to work</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="lg:col-span-12 grid grid-cols-3 gap-px rounded-3xl overflow-hidden border border-white/[0.08] bg-white/[0.06] mt-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-950/80 backdrop-blur px-4 py-6 md:px-8 md:py-8">
              <div className="text-3xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs md:text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
