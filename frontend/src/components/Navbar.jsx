import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "experience", label: "Experience" },
  { to: "portfolio", label: "Projects" },
  { to: "contact", label: "Contact" },
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/95 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container flex justify-between items-center h-20">
        <Link
          to="hero"
          smooth
          duration={500}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <span className="w-9 h-9 rounded-lg bg-brand-cyan flex items-center justify-center font-display font-bold text-ink-950 text-lg transition-transform duration-300 group-hover:scale-105">
            H
          </span>
          <span className="font-display font-semibold text-lg text-slate-100 tracking-tight">
            Huzaifa
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-10 font-medium text-sm">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy
                smooth
                offset={-90}
                duration={500}
                activeClass="text-white"
                className="relative cursor-pointer text-slate-400 transition-colors duration-300 hover:text-white group py-1"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] rounded-full bg-brand-cyan scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link to="contact" smooth offset={-90} duration={500}>
            <button className="btn-primary text-sm !px-5 !py-2.5 cursor-pointer">
              Let&apos;s Talk
            </button>
          </Link>
        </div>

        <button
          onClick={() => setNav(!nav)}
          aria-label="Toggle navigation menu"
          className="md:hidden z-[60] text-slate-100 relative"
        >
          {nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 md:hidden bg-ink-950 flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    smooth
                    offset={-60}
                    duration={500}
                    onClick={closeNav}
                    className="text-3xl font-display font-semibold text-slate-200 hover:text-white cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * links.length, duration: 0.4 }}
              >
                <Link to="contact" smooth offset={-60} duration={500} onClick={closeNav}>
                  <button className="btn-primary mt-2 cursor-pointer">Let&apos;s Talk</button>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
