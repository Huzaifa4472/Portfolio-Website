import profilePic from "../assets/proo.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiArrowDown, FiArrowRight, FiMail } from "react-icons/fi";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-container grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-5"
      >
        <motion.div
          variants={item}
          className="tile-card md:col-span-4 p-8 md:p-10 flex flex-col justify-center"
        >
          <span className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for new projects
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.1] text-slate-100">
            Hey, I&apos;m <span className="accent-text">Muhammad Huzaifa</span>
          </h1>

          <p className="mt-3 text-xl md:text-2xl font-display font-semibold text-slate-300 h-9">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                1600,
                "React Specialist",
                1600,
                "UI/UX Enthusiast",
                1600,
              ]}
              speed={50}
              repeat={Infinity}
              className="accent-text"
            />
          </p>

          <p className="mt-5 !text-base md:!text-lg text-slate-400 max-w-[560px]">
            I build fast, accessible, and visually polished web experiences —
            from pixel-perfect interfaces to full-stack applications — with
            3+ years turning ideas into shipped products.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <a
              href="/huzaifaCV.pdf"
              download="Muhammad-Huzaifa-CV.pdf"
              className="btn-primary w-full sm:w-auto cursor-pointer group"
            >
              Download CV
              <FiArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <Link to="portfolio" smooth offset={-80} duration={500} className="w-full sm:w-auto">
              <button className="btn-outline w-full cursor-pointer group">
                View Work
                <FiArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>

          <div className="flex items-center gap-5 mt-9">
            <a
              href="https://github.com/Huzaifa4472"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-400 hover:text-white transition-colors duration-300 hover:-translate-y-0.5 inline-block"
            >
              <AiFillGithub size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-huzaifa-99a6bb200/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-white transition-colors duration-300 hover:-translate-y-0.5 inline-block"
            >
              <AiFillLinkedin size={26} />
            </a>
            <a
              href="mailto:muhammadhuzaifa7012@gmail.com"
              aria-label="Email"
              className="text-slate-400 hover:text-white transition-colors duration-300 hover:-translate-y-0.5 inline-block"
            >
              <FiMail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="tile-card md:col-span-2 md:row-span-2 overflow-hidden min-h-[280px]"
        >
          <img
            src={profilePic}
            alt="Muhammad Huzaifa"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={item}
          className="tile-card md:col-span-2 p-6 flex items-center gap-4"
        >
          <span className="text-3xl font-display font-bold accent-text">3+</span>
          <span className="text-sm text-slate-300 leading-tight">
            Years of Experience
          </span>
        </motion.div>

        <motion.div
          variants={item}
          className="tile-card md:col-span-2 p-6 flex items-center font-mono text-sm text-brand-cyan"
        >
          &lt;/&gt; clean code, shipped fast
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="hidden md:flex justify-center mt-12"
      >
        <Link to="about" smooth offset={-80} duration={500} className="cursor-pointer">
          <FiArrowDown className="text-slate-500 animate-bounce" size={22} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
