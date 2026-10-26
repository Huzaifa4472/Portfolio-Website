import React from "react";
import { Link } from "react-scroll";
import { FiArrowRight } from "react-icons/fi";

const companies = [
  "Canopy Intel AI",
  "Techlets Pvt Ltd",
  "USA Peptides Lab",
  "THT Cars Rental",
  "Deventia Tech",
];

const CTA_LINE = "Have a project in mind? Let's build it together";
const CTA_REPEAT = 8;

// A single ribbon tilted clockwise (higher on the left, lower on the right).
// The whole ribbon links to the contact section.
const CtaRibbon = () => (
  <div className="relative mt-16 mb-6 py-6">
    <div className="relative -mx-[5vw] w-[110vw] rotate-[2.5deg] origin-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 blur-2xl opacity-40" />
      <Link
        to="contact"
        smooth
        offset={-80}
        duration={500}
        aria-label={`${CTA_LINE}. Go to contact form`}
        className="relative block cursor-pointer overflow-hidden border-y border-white/25 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_20px_60px_-20px_rgba(59,130,246,0.6)]"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent" />
        <div className="relative flex w-max animate-marquee hover:[animation-play-state:paused]">
          {Array.from({ length: CTA_REPEAT * 2 }, (_, i) => (
            <div
              key={i}
              className="flex items-center text-white whitespace-nowrap [text-shadow:0_1px_12px_rgba(255,255,255,0.35)]"
            >
              <span className="px-8 text-xl md:text-2xl font-semibold tracking-tight">
                {CTA_LINE}
              </span>
              <FiArrowRight className="text-xl" />
              <span className="ml-8 text-white/60 text-base">✦</span>
            </div>
          ))}
        </div>
      </Link>
    </div>
  </div>
);

const TrustBar = () => (
  <section aria-label="Companies and technologies" className="relative py-10">
    <div className="section-container">
      <p className="text-center !text-xs font-mono uppercase tracking-[0.2em] !text-slate-500">
        Shipped production code for
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-4">
        {companies.map((c) => (
          <span
            key={c}
            className="text-lg md:text-xl font-semibold tracking-tight text-slate-300 hover:text-white transition-colors duration-300"
          >
            {c}
          </span>
        ))}
      </div>
    </div>

    <CtaRibbon />
  </section>
);

export default TrustBar;
