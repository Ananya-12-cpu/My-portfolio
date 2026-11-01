"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const EMAIL = "p.ananya2025@gmail.com";

const LINKS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, Icon: FaEnvelope },
  {
    label: "LinkedIn",
    value: "in/ananya-putatunda",
    href: "https://www.linkedin.com/in/ananya-putatunda/",
    Icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "Ananya-12-cpu",
    href: "https://github.com/Ananya-12-cpu",
    Icon: FaGithub,
  },
];

type FormValues = { name: string; email: string; message: string };

const fieldClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-100 placeholder-gray-500 outline-none transition-colors focus:border-cyan-400/60 focus:bg-cyan-400/5";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>();

  // No backend: hand the message off to the visitor's mail client.
  const onSubmit = ({ name, email, message }: FormValues) => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    reset();
  };

  return (
    <div className="relative bg-[#05060a] overflow-hidden py-24">
      <div className="absolute inset-0 grid-fade opacity-50" />
      <motion.div
        aria-hidden
        className="absolute -top-24 left-1/4 w-[30rem] h-[30rem] rounded-full bg-purple-500/10 blur-[120px]"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 text-glow">
              Let&apos;s Build Something
            </span>
          </motion.h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Have a product, a role, or an idea in mind? Send a message and I&apos;ll
            get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-3">
            {LINKS.map(({ label, value, href, Icon }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="glass-panel neon-border rounded-xl px-5 py-4 flex items-center gap-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] font-mono-ai uppercase tracking-widest text-gray-500">
                    {label}
                  </span>
                  <span className="block truncate text-sm text-gray-200">
                    {value}
                  </span>
                </span>
              </motion.a>
            ))}
          </div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-panel neon-border rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <p className="font-mono-ai text-xs text-cyan-300">
              &gt; new_message<span className="caret-blink">_</span>
            </p>

            <div>
              <input
                {...register("name", { required: "Please tell me your name" })}
                placeholder="Your name"
                aria-label="Your name"
                className={fieldClass}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-rose-400">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("email", {
                  required: "Please enter your email",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "That doesn't look like a valid email",
                  },
                })}
                type="email"
                placeholder="Your email"
                aria-label="Your email"
                className={fieldClass}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-400">{errors.email.message}</p>
              )}
            </div>

            <div>
              <textarea
                {...register("message", {
                  required: "Write a short message",
                  minLength: { value: 10, message: "A little more detail, please" },
                })}
                rows={5}
                placeholder="What would you like to build?"
                aria-label="Message"
                className={`${fieldClass} resize-none`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-rose-400">{errors.message.message}</p>
              )}
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono-ai text-sm font-medium text-cyan-100 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 transition-all duration-300 hover:border-cyan-300 hover:text-white hover:shadow-[0_0_25px_-4px_rgba(34,211,238,0.7)]"
              >
                Send message →
              </button>
              {isSubmitSuccessful && (
                <span className="text-xs text-emerald-400">
                  Opening your email app…
                </span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
