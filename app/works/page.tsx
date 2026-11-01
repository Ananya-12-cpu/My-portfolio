"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { StageHeading, StageShell } from "@/app/components/race/Stage";
import { TRACKS } from "@/app/data/portfolio";

function WorkPage() {
  return (
    <StageShell id="works">
      <StageHeading
        stage="04"
        title="Pick a"
        accent="Track"
        sub="Personal projects built to explore ideas and sharpen skills, from UI experiments to full stack builds."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {TRACKS.map((track, i) => (
          <motion.article
            key={track.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.12 }}
            whileHover={{ y: -8 }}
            className="panel panel-hover group flex flex-col overflow-hidden rounded-2xl"
          >
            <div className="relative h-52 overflow-hidden sm:h-60">
              <Image
                src={track.image}
                alt={`${track.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14101f] via-transparent to-transparent" />
              <span className="display skew-card absolute left-4 top-4 bg-pink-500 px-3 py-1 text-xs text-white">
                <span className="unskew inline-block">Track {String(i + 1).padStart(2, "0")}</span>
              </span>
              {track.featured && (
                <span className="font-mono-ai absolute right-4 top-4 rounded bg-yellow-300 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                  ★ Featured
                </span>
              )}
              <div className="checker absolute inset-x-0 bottom-0 h-2 opacity-80" />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="display text-2xl text-white">{track.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">{track.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {track.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono-ai rounded-full border border-cyan-400/25 bg-cyan-400/5 px-2.5 py-1 text-[11px] text-cyan-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a
                  href={track.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-ai inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10 transition-colors hover:bg-pink-500 hover:ring-pink-400"
                >
                  <FaGithub /> Code
                </a>
                {track.live !== "#" && (
                  <a
                    href={track.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-ai inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10 transition-colors hover:bg-cyan-500 hover:ring-cyan-400"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </StageShell>
  );
}

export default WorkPage;
