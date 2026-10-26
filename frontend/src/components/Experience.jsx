import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui";

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
    company: "Techlets Pvt Ltd",
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

const initials = (name) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've"
          accent="shipped"
          description="From intern to full-stack contractor: building products for startups, agencies and direct clients."
        />

        <div className="tile-card divide-y divide-white/[0.06] overflow-hidden">
          {experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: Math.min(i, 3) * 0.05 }}
              className="group grid md:grid-cols-12 gap-3 md:gap-8 p-6 md:p-8 transition-colors duration-300 hover:bg-white/[0.02]"
            >
              <div className="md:col-span-4 flex items-start gap-4">
                <span
                  className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-semibold tracking-tight border transition-transform duration-500 group-hover:scale-105 ${
                    job.period.endsWith("Present")
                      ? "border-brand-cyan/30 bg-gradient-to-br from-brand-cyan/25 to-brand-violet/25 text-white shadow-[0_0_30px_-8px_rgba(94,234,212,0.5)]"
                      : "border-white/10 bg-white/[0.04] text-slate-300"
                  }`}
                >
                  {initials(job.company)}
                </span>
                <div>
                  <div className="text-lg font-semibold text-white leading-tight">
                    {job.company}
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2 font-mono text-xs text-slate-500">
                    {job.period}
                    {job.period.endsWith("Present") && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-sans font-medium text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="md:col-span-8 md:pl-0 pl-16">
                <h3 className="text-base font-semibold text-brand-cyan">{job.role}</h3>
                <ul className="mt-3 space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[15px] leading-relaxed text-slate-400"
                    >
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
