import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const experience = [
  {
    role: "Frontend Developer",
    company: "Canopy Intel AI",
    period: "May 2026 – Present",
    points: [
      "Building the frontend for an AI-powered, camera-based person-detection platform used for security and informational analytics.",
      "Developing dashboards for mall analytics — visitor counts, estimated age groups and heatmaps of the zones visited most.",
      "Building interfaces for construction-site monitoring — live headcount of workers, vehicle counts by category, and PPE compliance alerts.",
      "Integrating live camera feed data and detection results into real-time, chart-driven React dashboards.",
    ],
  },
  {
    role: "MERN/MEAN Stack Developer",
    company: "Walee Technologies",
    period: "Jul 2024 – Present",
    points: [
      "Developing and maintaining multiple client-facing web applications.",
      "Collaborating with cross-functional teams to deliver scalable, production-ready software.",
    ],
  },
  {
    role: "Full Stack Developer (Contract)",
    company: "USA Peptides Lab",
    period: "Jun 2025 – Dec 2025",
    points: [
      "Developed a full-stack e-commerce platform for product sales and purchases over 6 months.",
      "Built the React.js frontend and Node.js/Express backend with a MongoDB database.",
      "Implemented role-based access, an admin revenue dashboard and Helcim payment integration.",
    ],
  },
  {
    role: "MERN/MEAN Stack Developer",
    company: "THT Cars Rental",
    period: "Jan 2025 – Mar 2025",
    points: [
      "Built a car rental platform with a React.js frontend and Node.js/Express backend.",
      "Integrated third-party APIs to streamline booking, rental management and UX.",
    ],
  },
  {
    role: "Junior MERN Stack Developer",
    company: "Deventia Tech",
    period: "Apr 2024 – Jul 2024",
    points: [
      "Delivered high-quality software solutions alongside senior engineers.",
      "Contributed full-stack features improving code efficiency and delivery.",
    ],
  },
  {
    role: "MERN Stack Intern",
    company: "Walee Technologies",
    period: "Jul 2023 – Oct 2023",
    points: [
      "Built real-world features in React.js, Node.js and MongoDB over 4 months.",
      "Gained hands-on REST API development experience in an agile team.",
    ],
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-4 max-w-2xl mb-16"
        >
          <span className="font-mono text-sm text-brand-cyan/40 pt-1 shrink-0">02</span>
          <div>
            <span className="eyebrow">Career so far</span>
            <h2 className="mt-3 text-slate-100">
              Work <span className="accent-text">Experience</span>
            </h2>
            <p className="!text-base mt-4">
              From intern to full-stack contractor — here&apos;s where
              I&apos;ve shipped production code.
            </p>
          </div>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[15px] md:left-1/2 top-2 bottom-2 w-px bg-brand-cyan/30 md:-translate-x-1/2" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${job.period}`}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
                transition={{ delay: i * 0.08 }}
                className="relative pl-10 md:pl-0"
              >
                <span className="absolute left-0 md:left-1/2 top-1.5 md:-translate-x-1/2 w-[13px] h-[13px] rounded-full bg-brand-cyan ring-4 ring-ink-950" />

                <motion.div
                  whileHover={{ x: i % 2 === 0 ? 6 : -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-10 md:ml-0" : "md:pl-10 md:ml-auto"
                  }`}
                >
                  <div className="tile-card p-6 hover:border-brand-cyan/30 transition-colors duration-300">
                    <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan/90 mb-2">
                      <FiCalendar size={13} />
                      {job.period}
                    </div>
                    <h3 className="font-display font-semibold text-slate-100 text-lg">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-400 mt-1 mb-3">
                      <FiBriefcase size={14} />
                      {job.company}
                    </div>
                    <ul className="space-y-1.5">
                      {job.points.map((point) => (
                        <li
                          key={point}
                          className="!text-sm text-slate-400 flex gap-2"
                        >
                          <span className="text-brand-cyan mt-1.5 shrink-0">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
