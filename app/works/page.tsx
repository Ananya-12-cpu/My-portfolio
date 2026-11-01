"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { StageHeading, StageShell } from "@/app/components/race/Stage";
import LapList, { LapItem } from "@/app/components/race/LapList";
import { TRACKS } from "@/app/data/portfolio";
import { JOBS } from "@/app/data/jobs";

const pad = (n: number) => String(n).padStart(2, "0");

const trackItems: LapItem[] = TRACKS.map((track, i) => ({
  key: track.title,
  flag: pad(i + 1),
  eyebrow: `Track ${pad(i + 1)} · ${track.tech.join(" · ")}`,
  title: track.title,
  badge: track.featured ? "★ Featured" : undefined,
  body: (
    <>
      <div className="relative h-48 overflow-hidden rounded-xl sm:h-64">
        <Image
          src={track.image}
          alt={`${track.title} preview`}
          fill
          sizes="(max-width: 1024px) 90vw, 60rem"
          className="object-cover"
        />
        <div className="checker absolute inset-x-0 bottom-0 h-2 opacity-80" />
      </div>
      <p className="text-sm leading-relaxed text-gray-300 sm:text-base">{track.description}</p>
      <div className="flex flex-wrap gap-2">
        {track.tech.map((t) => (
          <span
            key={t}
            className="font-mono-ai rounded-full border border-pink-400/25 bg-pink-400/5 px-3 py-1 text-xs text-pink-100"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
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
    </>
  ),
}));

const jobItems: LapItem[] = JOBS.map((job, i) => {
  const lap = pad(JOBS.length - i);
  return {
    key: job.title,
    flag: lap,
    eyebrow: `Lap ${lap} · ${job.period}`,
    title: job.title,
    subtitle: job.subtitle,
    meta: `${job.role} · ${job.company}`,
    body: (
      <>
        <ul className="space-y-2">
          {job.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-gray-300 sm:text-base">
              <span className="mt-1.5 shrink-0 text-yellow-300">▸</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {job.tech.map((t) => (
            <span
              key={t}
              className="font-mono-ai rounded-full border border-pink-400/25 bg-pink-400/5 px-3 py-1 text-xs text-pink-100"
            >
              {t}
            </span>
          ))}
        </div>
      </>
    ),
  };
});

function WorkPage() {
  return (
    <StageShell id="works">
      <StageHeading
        stage="04"
        title="Pick a"
        accent="Track"
        sub="Client and product work from my professional roles, followed by personal projects built to explore ideas and sharpen skills."
      />

      <div className="mb-8">
        <h3 className="display text-3xl text-white sm:text-4xl">
          Industrial <span className="text-sunset">Tracks</span>
        </h3>
        <p className="mt-2 text-sm text-gray-400 sm:text-base">
          Client and product work delivered as part of my professional roles.
        </p>
      </div>
      <LapList items={jobItems} />

      <div className="mb-8 mt-24">
        <h3 className="display text-3xl text-white sm:text-4xl">
          Personal <span className="text-sunset">Tracks</span>
        </h3>
        <p className="mt-2 text-sm text-gray-400 sm:text-base">
          Projects I built on my own, from UI experiments to full stack builds.
        </p>
      </div>
      <LapList items={trackItems} />
    </StageShell>
  );
}

export default WorkPage;
