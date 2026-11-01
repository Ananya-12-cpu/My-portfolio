"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { StageHeading, StageShell } from "@/app/components/race/Stage";
import { PROFILE } from "@/app/data/portfolio";

const LINKS = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, Icon: FaEnvelope },
  { label: "LinkedIn", value: "in/ananya-putatunda", href: PROFILE.linkedin, Icon: FaLinkedin },
  { label: "GitHub", value: "Ananya-12-cpu", href: PROFILE.github, Icon: FaGithub },
];

type FormValues = { name: string; email: string; message: string };

const fieldClass =
  "w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-sm text-gray-100 placeholder-gray-500 outline-none transition-colors focus:border-pink-400/70 focus:bg-pink-400/5";

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
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    reset();
  };

  return (
    <StageShell id="contact" className="!pb-0">
      <StageHeading
        stage="05"
        title="Cross the"
        accent="Finish Line"
        sub="Have a product, a role, or an idea in mind? Send a message and I'll get back to you."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-2">
          {LINKS.map(({ label, value, href, Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 8 }}
              className="panel panel-hover flex items-center gap-4 rounded-xl px-5 py-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-500/15 text-pink-300">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="font-mono-ai block text-[10px] uppercase tracking-widest text-gray-500">{label}</span>
                <span className="block truncate text-sm text-gray-100">{value}</span>
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
          className="panel space-y-5 rounded-2xl p-6 sm:p-8 lg:col-span-3"
        >
          <p className="font-mono-ai text-xs text-pink-300">
            &gt; radio_to_pit<span className="caret-blink">_</span>
          </p>

          <div>
            <input
              {...register("name", { required: "Please tell me your name" })}
              placeholder="Your name"
              aria-label="Your name"
              className={fieldClass}
            />
            {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name.message}</p>}
          </div>
          <div>
            <input
              {...register("email", {
                required: "Please enter your email",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "That doesn't look like a valid email" },
              })}
              type="email"
              placeholder="Your email"
              aria-label="Your email"
              className={fieldClass}
            />
            {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email.message}</p>}
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
            {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message.message}</p>}
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="display skew-card bg-gradient-to-r from-pink-500 to-orange-400 px-7 py-3 text-white shadow-[0_0_30px_-6px_rgba(255,46,147,0.8)] transition-transform hover:scale-105"
            >
              <span className="unskew inline-block">Send it 🏁</span>
            </button>
            {isSubmitSuccessful && <span className="text-xs text-emerald-400">Opening your email app…</span>}
          </div>
        </motion.form>
      </div>

      {/* finish line */}
      <div aria-hidden className="relative mt-20 h-16">
        <div className="checker absolute inset-x-0 bottom-0 h-8" />
        <motion.span
          initial={{ x: "-10%" }}
          whileInView={{ x: "110%" }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: "easeIn" }}
          className="absolute bottom-6 left-0 text-3xl"
        >
          🏎️
        </motion.span>
      </div>
    </StageShell>
  );
}
