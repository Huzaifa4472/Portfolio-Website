import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiArrowRight, FiCheck, FiDownload } from "react-icons/fi";
import { CV_FILENAME, CV_URL, fadeUp } from "./ui";

const perks = ["Freelance projects", "Contract work", "Full-time roles", "Remote or on-site"];

const HireBanner = () => (
  <section aria-label="Open to work" className="relative py-8 md:py-12">
    <div className="section-container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="relative overflow-hidden rounded-[2rem] border border-emerald-400/20 p-8 md:p-12"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(52,211,153,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(167,139,250,0.14),transparent_55%)]" />
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage: "linear-gradient(to left, #000, transparent 70%)",
            WebkitMaskImage: "linear-gradient(to left, #000, transparent 70%)",
          }}
        />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-ink-950">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink-950/60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ink-950" />
              </span>
              Open to work
            </span>
            <h2 className="mt-5 !text-3xl md:!text-[2.6rem] leading-tight">
              Hiring a full-stack developer?{" "}
              <span className="accent-gradient">Let&apos;s talk.</span>
            </h2>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-2 text-[15px] text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-emerald-400/15 text-emerald-400 flex items-center justify-center">
                    <FiCheck size={12} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:min-w-[240px]">
            <a href={CV_URL} download={CV_FILENAME} className="btn-cv !py-4 !text-base group">
              <FiDownload className="text-brand-cyan transition-transform duration-300 group-hover:translate-y-0.5" />
              Download my CV
            </a>
            <Link to="contact" smooth offset={-80} duration={500}>
              <button className="btn-primary !py-4 !text-base w-full cursor-pointer group">
                Get in touch
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HireBanner;
