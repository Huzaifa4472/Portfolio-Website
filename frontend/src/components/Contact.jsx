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
  FiCopy,
  FiCheck,
  FiDownload,
} from "react-icons/fi";
import { CV_FILENAME, CV_URL, SectionHeading, fadeUp } from "./ui";

const EMAIL = "muhammadhuzaifa7012@gmail.com";

// Submissions are emailed by FormSubmit (https://formsubmit.co), so no backend is needed.
// The very first submission triggers a one-time activation email to EMAIL.
// After activating, you can swap EMAIL in this URL for the random alias FormSubmit gives you.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

const contactInfo = [
  { icon: FiMail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  {
    icon: FiPhone,
    label: "Phone / WhatsApp",
    value: "+92 309 609 7999",
    href: "tel:+923096097999",
  },
  { icon: FiMapPin, label: "Location", value: "Islamabad, Pakistan (PKT, UTC+5)" },
  { icon: FiClock, label: "Working hours", value: "Mon – Sat, 10am – 5pm" },
];

const socials = [
  { icon: AiFillGithub, href: "https://github.com/Huzaifa4472", label: "GitHub" },
  {
    icon: AiFillLinkedin,
    href: "https://www.linkedin.com/in/muhammad-huzaifa-99a6bb200/",
    label: "LinkedIn",
  },
];

const projectTypes = [
  "Web app",
  "Website",
  "E-commerce",
  "AI integration",
  "Dashboard",
  "Mobile app",
  "Other",
];

const inputClass =
  "w-full rounded-2xl border border-white/10 bg-white/[0.03] py-3.5 px-4 text-[15px] text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-brand-cyan/50 focus:bg-white/[0.05] focus:ring-4 focus:ring-brand-cyan/10";

const labelClass = "block text-sm text-slate-300 mb-2";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [types, setTypes] = useState([]);
  const [copied, setCopied] = useState(false);

  const toggleType = (t) =>
    setTypes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(form.current);
    const { name, email, message, _honey } = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          project_type: types.length ? types.join(", ") : "Not specified",
          message,
          _subject: `New portfolio enquiry from ${name}`,
          _replyto: email,
          _template: "table",
          _captcha: "false",
          _honey,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && String(data.success) === "true") {
        setStatus("success");
        e.target.reset();
        setTypes([]);
      } else {
        // FormSubmit explains failures (e.g. the form still needs activation).
        setErrorMsg(data.message || "");
        setStatus("error");
      }
    } catch {
      setErrorMsg("");
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 8000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Have a project in mind?"
          accent="Let's talk."
          description="Tell me what you're building. I'll get back to you with questions, ideas and next steps."
        />

        <div className="grid lg:grid-cols-12 gap-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="lg:col-span-5 tile-card p-8 md:p-10 flex flex-col"
          >
            <div className="mb-8 rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.06] p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Open to work
              </div>
              <p className="!text-sm mt-2 !text-slate-300">
                Taking on freelance projects, contract work and full-time roles.
              </p>
              <a href={CV_URL} download={CV_FILENAME} className="btn-cv !py-2.5 mt-4 w-full group">
                <FiDownload className="text-brand-cyan transition-transform duration-300 group-hover:translate-y-0.5" />
                Download CV
              </a>
            </div>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="shrink-0 w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-brand-cyan">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xs font-mono text-slate-500">{label}</h3>
                    {href ? (
                      <a
                        href={href}
                        className="block mt-1 text-[15px] text-white break-all hover:text-brand-cyan transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="!text-[15px] mt-1 !text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={copyEmail}
              className="btn-outline mt-10 w-full cursor-pointer"
              aria-live="polite"
            >
              {copied ? (
                <>
                  <FiCheck className="text-emerald-400" /> Email copied
                </>
              ) : (
                <>
                  <FiCopy /> Copy email address
                </>
              )}
            </button>

            <div className="flex items-center gap-3 mt-auto pt-10">
              <span className="text-sm text-slate-500 mr-auto">Find me on</span>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 hover:text-white hover:border-white/30 hover:-translate-y-0.5"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="lg:col-span-7 tile-card p-8 md:p-10 space-y-6"
          >
            {/* Spam trap: hidden from people, bots fill it in and get dropped */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Smith"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="jane@company.com"
                  className={inputClass}
                />
              </div>
            </div>

            <fieldset>
              <legend className={labelClass}>What do you need?</legend>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((t) => {
                  const active = types.includes(t);
                  return (
                    <button
                      type="button"
                      key={t}
                      aria-pressed={active}
                      onClick={() => toggleType(t)}
                      className={`rounded-full px-4 py-2 text-sm border transition-all duration-300 cursor-pointer ${
                        active
                          ? "bg-white text-ink-950 border-white"
                          : "border-white/10 text-slate-400 hover:text-white hover:border-white/25"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div>
              <label htmlFor="message" className={labelClass}>
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="A few lines about your idea, goals and timeline…"
                className={`${inputClass} resize-none`}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary !py-3.5 w-full cursor-pointer group disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                "Sending…"
              ) : (
                <>
                  Send message
                  <FiSend className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 !text-sm !text-emerald-400">
                <FiCheckCircle /> Message sent. I&apos;ll get back to you soon!
              </p>
            )}
            {status === "error" && (
              <p className="flex items-start gap-2 !text-sm !text-red-400">
                <FiAlertCircle className="mt-0.5 shrink-0" />
                {errorMsg || "Something went wrong. Please try again or email me directly."}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
