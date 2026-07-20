import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  FiMail,
  FiPhone,
  FiClock,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: FiPhone,
    label: "Phone",
    value: "+92 312 778 6712",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "muhammadhuzaifa7012@gmail.com",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Islamabad, Pakistan",
  },
  {
    icon: FiClock,
    label: "Working Hours",
    value: "Mon – Sat, 10am – 5pm",
  },
];

const socials = [
  { icon: AiFillGithub, href: "https://github.com/Huzaifa4472", label: "GitHub" },
  {
    icon: AiFillLinkedin,
    href: "https://www.linkedin.com/in/muhammad-huzaifa-99a6bb200/",
    label: "LinkedIn",
  },
];

const inputClass =
  "peer w-full rounded-xl border border-white/15 bg-white/[0.03] py-3 px-4 text-sm text-slate-100 placeholder-transparent outline-none transition-colors duration-300 focus:border-brand-cyan/60 focus:bg-white/[0.05]";

const labelClass =
  "pointer-events-none absolute left-4 -top-2.5 bg-ink-950 px-1.5 text-xs text-brand-cyan/90 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-brand-cyan/90 peer-focus:bg-ink-950";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(form.current);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-4 max-w-2xl mb-16"
        >
          <span className="font-mono text-sm text-brand-cyan/40 pt-1 shrink-0">04</span>
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2 className="mt-3 text-slate-100">
              Let&apos;s Build Something <span className="accent-text">Great</span>
            </h2>
            <p className="!text-base mt-4">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4 lg:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 tile-card p-8 md:p-10 flex flex-col justify-between"
          >
            <div className="space-y-8">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="shrink-0 w-11 h-11 rounded-xl bg-brand-cyan/10 border border-white/10 flex items-center justify-center text-brand-cyan">
                    <Icon size={19} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">{label}</h3>
                    <p className="!text-sm mt-0.5 text-slate-400">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-10">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 hover:text-white hover:border-brand-cyan/40 hover:-translate-y-0.5"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 tile-card p-8 md:p-10 space-y-5"
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder=" "
                className={inputClass}
              />
              <label htmlFor="name" className={labelClass}>
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder=" "
                className={inputClass}
              />
              <label htmlFor="email" className={labelClass}>
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder=" "
                className={`${inputClass} resize-none`}
              ></textarea>
              <label htmlFor="message" className={labelClass}>
                Your Message
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full cursor-pointer group disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  Send Message{" "}
                  <FiSend
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  />
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <FiCheckCircle /> Message sent successfully — I&apos;ll reply soon!
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <FiAlertCircle /> Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
