import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiMail, FiArrowUp } from "react-icons/fi";
import { Link } from "react-scroll";

const links = [
  { to: "services", label: "Services" },
  { to: "portfolio", label: "Work" },
  { to: "experience", label: "Experience" },
  { to: "about", label: "About" },
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
    <footer className="relative mt-10 border-t border-white/[0.06] overflow-hidden">
      <div className="section-container pt-14 pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div>
            <div className="text-lg font-semibold text-white tracking-tight">Muhammad Huzaifa</div>
            <div className="mt-1 text-sm text-slate-500">Full-Stack Developer</div>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-white hover:border-white/30 hover:-translate-y-0.5"
              >
                <Icon size={18} />
              </a>
            ))}
            <Link to="hero" smooth duration={500}>
              <button
                aria-label="Back to top"
                className="w-11 h-11 rounded-full bg-white text-ink-950 flex items-center justify-center transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <FiArrowUp size={18} />
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-6">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                offset={-80}
                duration={500}
                className="cursor-pointer transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="!text-xs !text-slate-600">
            © {new Date().getFullYear()} Muhammad Huzaifa · Full-Stack Developer
          </p>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none select-none text-center font-semibold tracking-[-0.06em] leading-none text-[18vw] text-transparent bg-clip-text bg-gradient-to-b from-white/[0.07] to-transparent -mb-[4vw]"
      >
        HUZAIFA
      </div>
    </footer>
  );
};

export default Footer;
