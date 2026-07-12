"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GlowButton, GhostButton } from "./Buttons";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const ROLES = [
  "AI-Augmented Frontend Engineer",
  "Building intelligent web experiences",
  "Human creativity + machine intelligence",
];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 30 : 55;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

function PortfolioBanner() {
  const router = useRouter();
  const typed = useTypewriter(ROLES);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-[#05060a]">
      <div className="absolute inset-0 grid-fade" />
      <div className="absolute -top-32 left-1/3 w-[36rem] h-[36rem] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col space-y-6">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 font-mono-ai text-xs text-cyan-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              status: available for work
            </motion.span>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Hey, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 text-glow">
                  Ananya
                </span>
              </h1>
              <p className="mt-4 h-8 font-mono-ai text-lg sm:text-xl text-cyan-300">
                {typed}
                <span className="caret-blink text-cyan-400">|</span>
              </p>
            </motion.div>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl">
              Crafting engaging digital experiences at the intersection of
              design and intelligence. I build fast, elegant interfaces and
              weave in AI-driven tooling to design and ship products faster —
              from sleek portfolios to full-scale web platforms.
            </p>

            {/* Buttons Section */}
            <div className="flex flex-wrap gap-4 pt-4">
              <GlowButton
                text="View Skills →"
                RenderFunction={() => router.push("#skill")}
              />
              <GhostButton
                text="See Projects"
                RenderFunction={() => router.push("#works")}
              />
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {["React", "Next.js", "TypeScript", "AI Tooling", "Node.js"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="font-mono-ai text-xs text-gray-400 border border-white/10 rounded-md px-2.5 py-1"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full h-[440px] sm:h-[520px] lg:h-[560px] flex items-center justify-center">
            {/* Ambient glow behind the portrait */}
            <div className="absolute w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem] rounded-full bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-transparent blur-[90px]" />

            <motion.div
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-[15.5rem] sm:w-[19rem] lg:w-[21rem] aspect-[3/4] rounded-[1.75rem] p-[2px] bg-gradient-to-br from-cyan-400/70 via-purple-500/50 to-transparent shadow-[0_0_60px_-15px_rgba(34,211,238,0.45)]"
            >
              <div className="relative w-full h-full rounded-[calc(1.75rem-2px)] overflow-hidden bg-[#05060a]">
                <Image
                  src="/images/banner.png"
                  alt="Portrait of Ananya"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 60vw, (max-width: 1200px) 30vw, 25vw"
                />
                {/* Blend the photo into the dark theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-transparent to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[calc(1.75rem-2px)]" />
              </div>
            </motion.div>

            {/* Floating status badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bottom-4 sm:bottom-8 left-0 sm:left-2 glass-panel neon-border rounded-xl px-4 py-3 font-mono-ai"
            >
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                Focus
              </p>
              <p className="text-sm text-cyan-300 font-semibold">
                Frontend + AI Tooling
              </p>
            </motion.div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="absolute top-2 sm:top-6 right-0 sm:right-2 glass-panel neon-border rounded-xl px-4 py-3 font-mono-ai"
            >
              <p className="text-sm text-white font-semibold">4+ yrs</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                Experience
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioBanner;
