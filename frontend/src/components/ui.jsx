import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useScroll, useSpring } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const SectionHeading = ({ eyebrow, title, accent, description, align = "left" }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.4 }}
    variants={fadeUp}
    className={`max-w-3xl mb-14 md:mb-16 ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    <span className="eyebrow">
      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
      {eyebrow}
    </span>
    <h2 className="mt-5">
      {title} {accent && <span className="accent-gradient">{accent}</span>}
    </h2>
    {description && <p className="mt-5 md:text-lg">{description}</p>}
  </motion.div>
);

export const Background = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1100px] h-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(94,234,212,0.13),transparent)] animate-aurora" />
    <div
      className="absolute top-[10%] -right-[15%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(closest-side,rgba(167,139,250,0.10),transparent)] animate-aurora"
      style={{ animationDelay: "-9s" }}
    />
    <div
      className="absolute inset-0 opacity-[0.35] mask-fade-b"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
        maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, #000 30%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, #000 30%, transparent 75%)",
      }}
    />
    <div
      className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
  </div>
);

// Feeds pointer position into every .spotlight card as --x / --y.
export const useSpotlight = () => {
  useEffect(() => {
    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.querySelectorAll(".spotlight").forEach((el) => {
          const r = el.getBoundingClientRect();
          el.style.setProperty("--x", `${e.clientX - r.left}px`);
          el.style.setProperty("--y", `${e.clientY - r.top}px`);
        });
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);
};

export const CountUp = ({ to, suffix = "", duration = 1.6 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

export const CV_URL = "/huzaifaCV.pdf";
export const CV_FILENAME = "Muhammad-Huzaifa-CV.pdf";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[70] bg-gradient-to-r from-brand-cyan via-sky-400 to-brand-violet"
    />
  );
};
