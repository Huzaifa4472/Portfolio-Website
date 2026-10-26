import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { CV_FILENAME, CV_URL } from "./ui";

const links = [
  { to: "services", label: "Services" },
  { to: "portfolio", label: "Work" },
  { to: "experience", label: "Experience" },
  { to: "about", label: "About" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [nav]);

  const closeNav = () => setNav(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
      <nav
        className={`mx-auto max-w-[1100px] flex justify-between items-center h-14 pl-4 pr-2 rounded-full border transition-all duration-500 ${
          scrolled
            ? "bg-ink-950/70 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link
          to="hero"
          smooth
          duration={500}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <span className="relative w-8 h-8 rounded-full bg-gradient-to-br from-brand-cyan to-brand-violet flex items-center justify-center font-semibold text-ink-950 text-sm transition-transform duration-300 group-hover:rotate-12">
            MH
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-ink-950" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-semibold text-[15px] text-white tracking-tight">
              Muhammad Huzaifa
            </span>
            <span className="mt-1 text-[11px] font-medium text-slate-400">
              Full-Stack Developer
            </span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1 text-sm">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy
                smooth
                offset={-80}
                duration={500}
                activeClass="!text-white !bg-white/[0.07]"
                className="cursor-pointer rounded-full px-3.5 py-1.5 text-slate-400 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={CV_URL}
            download={CV_FILENAME}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-200 border border-white/15 hover:border-brand-cyan/50 hover:text-white transition-colors"
          >
            <FiDownload className="text-brand-cyan" /> CV
          </a>
          <Link to="contact" smooth offset={-80} duration={500}>
            <button className="btn-primary !px-4 !py-2 cursor-pointer group">
              Hire me
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Link>
        </div>

        <button
          onClick={() => setNav(!nav)}
          aria-label="Toggle navigation menu"
          aria-expanded={nav}
          className="lg:hidden z-[60] relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-px w-5 bg-white transition-transform duration-300 ${nav ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-white transition-transform duration-300 ${nav ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 lg:hidden bg-ink-950/95 backdrop-blur-xl flex flex-col justify-center px-8"
          >
            <ul className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    smooth
                    offset={-70}
                    duration={500}
                    onClick={closeNav}
                    className="flex items-baseline gap-4 text-4xl font-semibold tracking-tight text-slate-200 hover:text-white cursor-pointer"
                  >
                    <span className="font-mono text-xs text-slate-600">0{i + 1}</span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * links.length, duration: 0.4 }}
              >
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <Link to="contact" smooth offset={-70} duration={500} onClick={closeNav}>
                    <button className="btn-primary w-full cursor-pointer">
                      Start a project <FiArrowUpRight />
                    </button>
                  </Link>
                  <a href={CV_URL} download={CV_FILENAME} className="btn-cv">
                    <FiDownload className="text-brand-cyan" /> Download CV
                  </a>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
