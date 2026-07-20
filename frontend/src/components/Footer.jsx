import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiMail, FiArrowUp } from "react-icons/fi";
import { Link } from "react-scroll";

const links = [
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "portfolio", label: "Projects" },
  { to: "contact", label: "Contact" },
];

const socials = [
  { icon: AiFillGithub, href: "https://github.com/Huzaifa4472", label: "GitHub" },
  {
    icon: AiFillLinkedin,
    href: "https://www.linkedin.com/in/muhammad-huzaifa-99a6bb200/",
    label: "LinkedIn",
  },
  { icon: FiMail, href: "mailto:muhammadhuzaifa7012@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="section-container py-14 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <div className="text-center md:text-left">
          <Link
            to="hero"
            smooth
            duration={500}
            className="inline-flex items-center gap-2 cursor-pointer"
          >
            <span className="w-8 h-8 rounded-lg bg-brand-cyan flex items-center justify-center font-display font-bold text-ink-950">
              H
            </span>
            <span className="font-display font-semibold text-lg text-slate-100">
              Huzaifa
            </span>
          </Link>
          <p className="!text-sm mt-3 max-w-xs text-slate-500">
            Full-stack developer crafting clean, fast, and thoughtfully
            designed web experiences.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-white hover:border-brand-cyan/40 hover:-translate-y-0.5"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <nav className="flex gap-8 text-sm text-slate-400">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              offset={-90}
              duration={500}
              className="cursor-pointer transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link to="hero" smooth duration={500} className="cursor-pointer">
          <button
            aria-label="Back to top"
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-slate-300 transition-all duration-300 hover:text-ink-950 hover:bg-brand-cyan hover:border-brand-cyan hover:-translate-y-1"
          >
            <FiArrowUp size={18} />
          </button>
        </Link>
      </div>

      <div className="border-t border-white/5 py-6">
        <p className="text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Muhammad Huzaifa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
