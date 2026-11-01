"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaBriefcase } from "react-icons/fa";
import { StageHeading, StageShell } from "@/app/components/race/Stage";
import CountUp from "@/app/components/race/CountUp";
import { ABOUT_COPY, COMPANIES, DRIVER_STATS, PROFILE } from "@/app/data/portfolio";

const FACTS = [
  { label: "Base", value: PROFILE.location, Icon: FaMapMarkerAlt },
  { label: "Email", value: PROFILE.email, Icon: FaEnvelope, href: `mailto:${PROFILE.email}` },
  { label: "LinkedIn", value: "in/ananya-putatunda", Icon: FaLinkedin, href: PROFILE.linkedin },
  { label: "Current team", value: `${COMPANIES[0].role} · W3era`, Icon: FaBriefcase },
];

function AboutPage() {
  return (
    <StageShell id="about">
      <StageHeading stage="01" title="Driver" accent="Profile" sub="Who is behind the wheel." />

      <div className="grid items-center gap-12 lg:grid-cols-5">
        {/* Driver licence card */}
        <motion.div
          initial={{ opacity: 0, x: -40, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-full max-w-sm lg:col-span-2"
        >
          <motion.div
            whileHover={{ rotate: 1.5, y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 16 }}
            className="panel overflow-hidden rounded-2xl"
          >
            <div className="kerb h-2" />
            <div className="flex items-center justify-between bg-gradient-to-r from-pink-600 to-orange-500 px-4 py-2">
              <span className="display text-sm text-white">Racing licence</span>
              <span className="font-mono-ai text-[10px] uppercase tracking-widest text-white/80">
                Class A · Frontend
              </span>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/banner.png"
                alt="Portrait of Ananya Putatunda"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 80vw, 24rem"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0612] via-transparent to-transparent" />
              <span className="display absolute right-3 top-3 text-6xl text-white/90 drop-shadow-[0_3px_0_rgba(255,46,147,0.8)]">
                #03
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="display text-2xl text-white">{PROFILE.name}</p>
                <p className="font-mono-ai text-xs text-pink-300">
                  Player 1 · {PROFILE.years}+ years on the grid
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {DRIVER_STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="panel panel-hover rounded-xl px-2 py-3 text-center"
              >
                <p className="display text-3xl text-sunset">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="font-mono-ai mt-1 text-[9px] uppercase tracking-wider text-gray-400">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6 lg:col-span-3"
        >
          {ABOUT_COPY.map((p) => (
            <p key={p.slice(0, 20)} className="text-lg leading-relaxed text-gray-300">
              {p}
            </p>
          ))}

          <div className="grid gap-3 sm:grid-cols-2">
            {FACTS.map(({ label, value, Icon, href }) => {
              const body = (
                <>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pink-500/15 text-pink-300">
                    <Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="font-mono-ai block text-[10px] uppercase tracking-widest text-gray-500">
                      {label}
                    </span>
                    <span className="block truncate text-sm text-gray-100">{value}</span>
                  </span>
                </>
              );
              const cls = "panel panel-hover flex items-center gap-3 rounded-xl px-4 py-3";
              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>
                  {body}
                </a>
              ) : (
                <div key={label} className={cls}>
                  {body}
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="display skew-card bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-3 text-white shadow-[0_0_30px_-6px_rgba(255,46,147,0.8)] transition-transform hover:scale-105"
            >
              <span className="unskew inline-block">Download resume ↓</span>
            </a>
            <a
              href="#experience"
              className="display skew-card border-2 border-white/25 px-6 py-3 text-white transition-colors hover:border-pink-400 hover:text-pink-300"
            >
              <span className="unskew inline-block">See my laps →</span>
            </a>
          </div>
        </motion.div>
      </div>
    </StageShell>
  );
}

export default AboutPage;
