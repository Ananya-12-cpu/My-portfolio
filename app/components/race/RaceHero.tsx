"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import DriverCar from "./DriverCar";
import { PROFILE, TAGLINES } from "@/app/data/portfolio";

const TOKENS = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux",
  "Tailwind",
  "NestJS",
  "Query",
  "RBAC",
  "SSR",
  "i18n",
];
const SIGNS = ["FRONTEND", "3+ YRS", "REACT", "NEXT.JS", "HIRE ME", "SSR · SSG", "PIXEL PERFECT"];

const MAX_SPEED = 8;
const T_CAR = 0.86; // where the car sits on the road (0 = horizon, 1 = bottom)
const D_CAR = 1 / T_CAR;
const HORIZON = 0.5;

type Obj = {
  kind: "token" | "rival" | "sign";
  wz: number;
  prev: number;
  lane: number;
  label: string;
  color: string;
  v: number;
  taken: boolean;
};

type Phase = "idle" | "countdown" | "racing";

const curveAt = (p: number) => Math.sin(p * 0.06) * 0.8 + Math.sin(p * 0.023 + 1) * 0.7;

function useTypewriter(words: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = words[i % words.length];
    const id = setTimeout(
      () => {
        if (!del) {
          const n = cur.slice(0, text.length + 1);
          setText(n);
          if (n === cur) setTimeout(() => setDel(true), 1400);
        } else {
          const n = cur.slice(0, text.length - 1);
          setText(n);
          if (!n) {
            setDel(false);
            setI((x) => x + 1);
          }
        }
      },
      del ? 25 : 50,
    );
    return () => clearTimeout(id);
  }, [text, del, i, words]);
  return text;
}

export default function RaceHero() {
  const wrapRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef<HTMLSpanElement>(null);
  const phaseRef = useRef<Phase>("idle");
  const visibleRef = useRef(true);
  const keys = useRef({ left: false, right: false, up: false, down: false });
  const pointer = useRef<{ x: number; down: boolean } | null>(null);
  const startRef = useRef<() => void>(() => {});
  const bumpRef = useRef<() => void>(() => {});
  const collectRef = useRef<(label: string) => void>(() => {});

  const [phase, setPhase] = useState<Phase>("idle");
  const [count, setCount] = useState<string>("");
  const [collected, setCollected] = useState<string[]>([]);
  const [toast, setToast] = useState<{ id: number; text: string } | null>(null);
  const typed = useTypewriter(TAGLINES);

  const say = useCallback((text: string) => setToast({ id: Date.now(), text }), []);

  const changePhase = useCallback((p: Phase) => {
    phaseRef.current = p;
    setPhase(p);
  }, []);

  startRef.current = () => {
    if (phaseRef.current !== "idle") return;
    changePhase("countdown");
    const steps = ["3", "2", "1", "GO!"];
    steps.forEach((s, n) =>
      setTimeout(() => {
        if (phaseRef.current === "idle") return;
        setCount(s);
        if (n === steps.length - 1) {
          changePhase("racing");
          setTimeout(() => setCount(""), 700);
        }
      }, n * 750),
    );
  };

  collectRef.current = (label) => {
    setCollected((prev) => {
      if (prev.includes(label)) return prev;
      const next = [...prev, label];
      if (next.length === TOKENS.length) setTimeout(() => say("ALL SKILLS UNLOCKED"), 900);
      return next;
    });
    say(`+ ${label}`);
  };
  bumpRef.current = () => say("BUMP!");

  // keyboard
  useEffect(() => {
    const dirs: Record<string, keyof typeof keys.current> = {
      arrowleft: "left",
      a: "left",
      arrowright: "right",
      d: "right",
      arrowup: "up",
      w: "up",
      arrowdown: "down",
      s: "down",
    };
    const set = (e: KeyboardEvent, v: boolean) => {
      const k = e.key.toLowerCase();
      const dir = dirs[k];
      if (!dir || phaseRef.current !== "racing" || !visibleRef.current) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      keys.current[dir] = v;
      if (k.startsWith("arrow")) e.preventDefault();
    };
    const down = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (/INPUT|TEXTAREA|SELECT/.test(t.tagName)) return;
      if (e.key === "Escape" && phaseRef.current !== "idle") {
        keys.current = { left: false, right: false, up: false, down: false };
        changePhase("idle");
        setCount("");
        return;
      }
      if (
        e.key === "Enter" &&
        phaseRef.current === "idle" &&
        visibleRef.current &&
        t.tagName !== "A" &&
        t.tagName !== "BUTTON"
      ) {
        startRef.current();
        return;
      }
      set(e, true);
    };
    const up = (e: KeyboardEvent) => set(e, false);
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [changePhase]);

  // game loop
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const wrap = wrapRef.current!;
    let w = 0;
    let h = 0;
    let raf = 0;
    let last = 0;
    let running = true;

    const g = { pos: 0, speed: 1.2, x: 0, angle: 0, shake: 0, tokenIdx: 0 };

    const objs: Obj[] = [];
    for (let i = 0; i < 5; i++)
      objs.push({
        kind: "token",
        wz: 8 + i * 9,
        prev: 99,
        lane: (Math.random() - 0.5) * 1.4,
        label: TOKENS[g.tokenIdx++ % TOKENS.length],
        color: "#ffd23f",
        v: 0,
        taken: false,
      });
    const rivalColors = ["#22e4ff", "#ffd23f", "#8b5cf6"];
    for (let i = 0; i < 3; i++)
      objs.push({
        kind: "rival",
        wz: 14 + i * 14,
        prev: 99,
        lane: (Math.random() - 0.5) * 1.3,
        label: "",
        color: rivalColors[i],
        v: MAX_SPEED * (0.45 + Math.random() * 0.15),
        taken: false,
      });
    for (let i = 0; i < 7; i++)
      objs.push({
        kind: "sign",
        wz: 6 + i * 7,
        prev: 99,
        lane: i % 2 ? 1.7 : -1.7,
        label: SIGNS[i % SIGNS.length],
        color: i % 2 ? "#ff2e93" : "#22e4ff",
        v: 0,
        taken: false,
      });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const car = carRef.current;
      if (car) car.style.width = `${Math.max(130, Math.min(w * 0.2, 230))}px`;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const io = new IntersectionObserver(
      ([e]) => {
        visibleRef.current = e.intersectionRatio > 0.4;
        if (e.isIntersecting && !running) {
          running = true;
          last = performance.now();
          raf = requestAnimationFrame(frame);
        } else if (!e.isIntersecting) {
          running = false;
          cancelAnimationFrame(raf);
          keys.current = { left: false, right: false, up: false, down: false };
        }
      },
      { threshold: [0, 0.4, 0.6] },
    );
    io.observe(wrap);

    const onMove = (e: PointerEvent) => {
      pointer.current = {
        x: e.clientX / window.innerWidth,
        down: e.buttons > 0 || e.pointerType === "mouse",
      };
    };
    const onLeave = () => (pointer.current = null);
    const onUp = (e: PointerEvent) => e.pointerType !== "mouse" && onLeave();
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerdown", onMove);
    wrap.addEventListener("pointerup", onUp);
    wrap.addEventListener("pointerleave", onLeave);

    const rwOf = () => Math.min(w * 0.46, 560);
    const cxAt = (t: number, curve: number) => w / 2 + curve * Math.pow(1 - t, 2) * w * 0.3;

    const update = (dt: number) => {
      const ph = phaseRef.current;
      const racing = ph === "racing";
      const k = keys.current;

      let target = racing ? MAX_SPEED * 0.82 : ph === "countdown" ? 0.6 : 1.4;
      if (racing) {
        if (k.up) target = MAX_SPEED;
        if (k.down) target = 1.5;
      }
      const off = Math.abs(g.x) > 1.05;
      if (off) target = Math.min(target, 3);
      g.speed += (target - g.speed) * Math.min(1, dt * (racing && k.down ? 2.5 : 1.1));

      let steer = (k.right ? 1 : 0) - (k.left ? 1 : 0);
      const p = pointer.current;
      if (racing && steer === 0 && p && p.down) {
        const dx = p.x - 0.5;
        if (Math.abs(dx) > 0.06) steer = Math.max(-1, Math.min(1, dx * 3.2));
      }
      if (!racing) steer = Math.sin(g.pos * 0.05) * 0.4; // attract mode weave

      const curve = curveAt(g.pos);
      g.x += steer * dt * 1.9 * (0.45 + (g.speed / MAX_SPEED) * 0.55);
      g.x -= curve * g.speed * dt * 0.06;
      g.x = Math.max(-1.7, Math.min(1.7, g.x));
      g.angle += (steer * 9 - g.angle) * Math.min(1, dt * 8);
      const prevPos = g.pos;
      g.pos += g.speed * dt;
      g.shake = Math.max(0, g.shake - dt * 3);
      if (off && racing) g.shake = Math.max(g.shake, 0.35);

      for (const o of objs) {
        const before = o.wz - prevPos;
        if (o.kind === "rival") o.wz += o.v * dt;
        const d = o.wz - g.pos;

        if (o.kind !== "sign" && racing && before > D_CAR && d <= D_CAR && !o.taken) {
          if (Math.abs(o.lane - g.x) < (o.kind === "token" ? 0.3 : 0.34)) {
            if (o.kind === "token") {
              o.taken = true;
              collectRef.current(o.label);
            } else {
              g.speed *= 0.35;
              g.shake = 1;
              bumpRef.current();
            }
          }
        }

        if (d < 0.6) {
          o.wz = g.pos + 44 + Math.random() * 8;
          o.taken = false;
          if (o.kind === "token") {
            o.label = TOKENS[g.tokenIdx++ % TOKENS.length];
            o.lane = (Math.random() - 0.5) * 1.4;
          } else if (o.kind === "rival") {
            o.lane = (Math.random() - 0.5) * 1.3;
          } else {
            o.label = SIGNS[Math.floor(Math.random() * SIGNS.length)];
          }
        }
      }
    };

    const mountain = (x: number, seed: number) =>
      Math.abs(
        Math.sin(x * 0.011 + seed) * 46 +
          Math.sin(x * 0.027 + seed * 2) * 24 +
          Math.sin(x * 0.005 + seed * 3) * 58,
      );

    const draw = (time: number) => {
      const horizon = h * HORIZON;
      const rw = rwOf();
      const curve = curveAt(g.pos);
      ctx.clearRect(0, 0, w, h);

      // sky
      const sky = ctx.createLinearGradient(0, 0, 0, horizon);
      sky.addColorStop(0, "#0a0612");
      sky.addColorStop(0.55, "#2a0f4a");
      sky.addColorStop(1, "#ff2e93");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, horizon + 1);

      ctx.fillStyle = "#fff";
      for (let i = 0; i < 40; i++) {
        ctx.globalAlpha = 0.25 + 0.5 * Math.abs(Math.sin(time * 0.001 + i));
        ctx.fillRect((i * 197.3) % w, (i * 83.7) % (horizon * 0.6), 1.6, 1.6);
      }
      ctx.globalAlpha = 1;

      // sun
      const sunR = Math.min(w, h) * 0.2;
      const sunX = w / 2 - curve * w * 0.05;
      const sunY = horizon - sunR * 0.55;
      const sg = ctx.createLinearGradient(0, sunY - sunR, 0, sunY + sunR);
      sg.addColorStop(0, "#ffd23f");
      sg.addColorStop(0.5, "#ff9f1c");
      sg.addColorStop(1, "#ff2e93");
      ctx.save();
      ctx.shadowColor = "rgba(255,46,147,0.8)";
      ctx.shadowBlur = 60;
      ctx.fillStyle = sg;
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.fillStyle = "#2a0f4a";
      for (let i = 0; i < 6; i++) {
        ctx.fillRect(sunX - sunR, sunY + sunR * (0.05 + i * 0.16), sunR * 2, 2 + i * 1.6);
      }

      // mountains, parallax with the bend
      const shift = -curve * w * 0.12;
      for (let layer = 0; layer < 2; layer++) {
        ctx.fillStyle = layer ? "#1a0a33" : "#2b1250";
        ctx.beginPath();
        ctx.moveTo(0, horizon);
        for (let x = 0; x <= w + 20; x += 20) {
          const hh = mountain(x - shift * (layer + 1) * 0.6, layer * 3.1) * (layer ? 0.7 : 1);
          ctx.lineTo(x, horizon - hh * (h / 800));
        }
        ctx.lineTo(w, horizon);
        ctx.fill();
      }

      // ground + road, one scanline strip at a time
      const STEP = 2;
      for (let y = Math.floor(h); y > horizon; y -= STEP) {
        const t = (y - horizon) / (h - horizon);
        if (t < 0.012) continue;
        const d = 1 / t;
        const band = Math.floor((d + g.pos) * 1.2) & 1;
        const half = rw * t;
        const cx = cxAt(t, curve);

        ctx.fillStyle = band ? "#1d1033" : "#150a28";
        ctx.fillRect(0, y, w, STEP + 1);
        ctx.fillStyle = band ? "#ff2e93" : "#f5efff";
        ctx.fillRect(cx - half * 1.13, y, half * 2.26, STEP + 1);
        ctx.fillStyle = band ? "#231a38" : "#2b2145";
        ctx.fillRect(cx - half, y, half * 2, STEP + 1);

        if (band) {
          const lw = Math.max(1, half * 0.025);
          ctx.fillStyle = "rgba(245,239,255,0.85)";
          ctx.fillRect(cx - lw, y, lw * 2, STEP + 1);
          ctx.fillStyle = "rgba(34,228,255,0.35)";
          ctx.fillRect(cx - half * 0.5 - lw / 2, y, lw, STEP + 1);
          ctx.fillRect(cx + half * 0.5 - lw / 2, y, lw, STEP + 1);
        }
      }

      const haze = ctx.createLinearGradient(0, horizon - 10, 0, horizon + h * 0.12);
      haze.addColorStop(0, "rgba(255,46,147,0.55)");
      haze.addColorStop(1, "rgba(255,46,147,0)");
      ctx.fillStyle = haze;
      ctx.fillRect(0, horizon - 10, w, h * 0.12 + 10);

      // sprites, far to near
      const visible = objs
        .map((o) => ({ o, d: o.wz - g.pos }))
        .filter(({ d }) => d > 0.8 && d < 46)
        .sort((a, b) => b.d - a.d);

      for (const { o, d } of visible) {
        const t = 1 / d;
        const y = horizon + t * (h - horizon);
        const half = rw * t;
        const x = cxAt(t, curve) + o.lane * half;
        const s = half * 0.36;
        ctx.globalAlpha = Math.min(1, (46 - d) / 12);

        if (o.kind === "sign") {
          const bw = s * 2.6;
          const bh = s * 1.1;
          const top = y - s * 1.8 - bh;
          ctx.fillStyle = "#0b0814";
          ctx.fillRect(x - s * 0.06, y - s * 1.8, s * 0.12, s * 1.8);
          ctx.fillRect(x - bw / 2, top, bw, bh);
          ctx.strokeStyle = o.color;
          ctx.lineWidth = Math.max(1, s * 0.07);
          ctx.strokeRect(x - bw / 2, top, bw, bh);
          ctx.fillStyle = o.color;
          ctx.font = `900 italic ${Math.max(6, s * 0.38)}px sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(o.label, x, top + bh / 2, bw * 0.9);
        } else if (o.kind === "token") {
          if (!o.taken) {
            const cy = y - s * 0.9 + Math.sin(time * 0.006 + o.wz) * s * 0.12;
            const r = s * 0.55;
            const glow = ctx.createRadialGradient(x, cy, 0, x, cy, r * 2.2);
            glow.addColorStop(0, "rgba(255,210,63,0.55)");
            glow.addColorStop(1, "rgba(255,210,63,0)");
            ctx.fillStyle = glow;
            ctx.fillRect(x - r * 2.2, cy - r * 2.2, r * 4.4, r * 4.4);
            ctx.fillStyle = "#ffd23f";
            ctx.beginPath();
            ctx.arc(x, cy, r, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "#ff9f1c";
            ctx.lineWidth = Math.max(1, r * 0.18);
            ctx.stroke();
            ctx.fillStyle = "#14101f";
            ctx.font = `900 ${Math.max(6, r * 0.5)}px sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(o.label, x, cy, r * 1.7);
          }
        } else {
          const cw = s * 1.3;
          const ch = s * 0.8;
          ctx.fillStyle = "rgba(0,0,0,0.45)";
          ctx.fillRect(x - cw * 0.55, y - ch * 0.12, cw * 1.1, ch * 0.2);
          ctx.fillStyle = o.color;
          ctx.fillRect(x - cw / 2, y - ch, cw, ch * 0.85);
          ctx.fillStyle = "#14101f";
          ctx.fillRect(x - cw * 0.36, y - ch * 0.95, cw * 0.72, ch * 0.32);
          ctx.fillStyle = "#ff2e4d";
          ctx.fillRect(x - cw * 0.46, y - ch * 0.42, cw * 0.2, ch * 0.14);
          ctx.fillRect(x + cw * 0.26, y - ch * 0.42, cw * 0.2, ch * 0.14);
        }
        ctx.globalAlpha = 1;
      }

      // place the DOM car
      const car = carRef.current;
      if (car) {
        const carY = horizon + T_CAR * (h - horizon);
        const carW = car.offsetWidth;
        const carX = cxAt(T_CAR, curve) + g.x * rw * T_CAR;
        const sx = g.shake ? (Math.random() - 0.5) * 8 * g.shake : 0;
        const sy = g.shake ? (Math.random() - 0.5) * 5 * g.shake : 0;
        car.style.transform = `translate(${carX - carW / 2 + sx}px, ${carY - carW * 0.58 + sy}px) rotate(${g.angle}deg)`;
      }
      if (speedRef.current)
        speedRef.current.textContent = String(Math.round((g.speed / MAX_SPEED) * 260));
    };

    function frame(now: number) {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
      last = now;
      update(dt);
      draw(now);
      raf = requestAnimationFrame(frame);
    }
    last = performance.now();
    raf = requestAnimationFrame(frame);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerdown", onMove);
      wrap.removeEventListener("pointerup", onUp);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 1100);
    return () => clearTimeout(id);
  }, [toast]);

  return (
    <section
      id="start"
      ref={wrapRef}
      className="relative h-[100svh] min-h-[620px] w-full touch-pan-y select-none overflow-hidden bg-[#0a0612]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(10,6,18,0.7)_100%)]" />

      {/* Title block */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-col items-center px-4 pt-20 text-center sm:pt-24">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono-ai inline-flex items-center gap-2 rounded-full border border-pink-400/40 bg-black/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-pink-200 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pink-400" />
          Player 1 · Frontend Dev<span className="hidden sm:inline"> · Open to offers</span>
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="display text-neon mt-3 text-[clamp(2.6rem,8.4vw,6.5rem)] [&>span]:block sm:[&>span]:inline text-white drop-shadow-[0_6px_0_rgba(255,46,147,0.55)]"
        >
          Ananya <span className="text-sunset">Putatunda</span>
        </motion.h1>
        <p className="font-mono-ai mt-3 h-6 text-sm text-yellow-200 sm:text-lg">
          {typed}
          <span className="caret-blink text-pink-400">▮</span>
        </p>
      </div>

      {/* Car */}
      <div ref={carRef} className="pointer-events-none absolute left-0 top-0 will-change-transform">
        <DriverCar className="h-auto w-full drop-shadow-[0_12px_18px_rgba(0,0,0,0.6)]" />
        {phase === "racing" && (
          <>
            <span className="absolute bottom-[3%] left-[29%] h-3 w-3 animate-ping rounded-full bg-orange-300/80" />
            <span className="absolute bottom-[3%] right-[29%] h-3 w-3 animate-ping rounded-full bg-orange-300/80" />
          </>
        )}
      </div>

      <AnimatePresence>
        {phase === "idle" && (
          <motion.div
            key="start"
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-x-0 top-[38%] flex flex-col items-center gap-3 px-4"
          >
            <button
              type="button"
              onClick={() => startRef.current()}
              className="display rounded-lg bg-gradient-to-r from-pink-500 to-orange-400 px-8 py-4 text-xl text-white shadow-[0_0_50px_-5px_rgba(255,46,147,0.8)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-yellow-300 sm:text-2xl"
            >
              <span className="press-start">▶ Start Engine</span>
            </button>
            <p className="font-mono-ai max-w-[92vw] rounded bg-black/50 px-3 py-1 text-center text-[10px] sm:text-[11px] uppercase tracking-widest text-pink-100 backdrop-blur">
              or press Enter · or just scroll to skip the race
            </p>
          </motion.div>
        )}
        {count && (
          <motion.div
            key={`c${count}`}
            initial={{ opacity: 0, scale: 2.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="display text-neon pointer-events-none absolute inset-x-0 top-[34%] text-center text-[clamp(4rem,16vw,10rem)] text-yellow-300"
          >
            {count}
          </motion.div>
        )}
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="display pointer-events-none absolute inset-x-0 top-[45%] text-center text-3xl text-yellow-300 drop-shadow-[0_3px_0_rgba(0,0,0,0.6)] sm:text-5xl"
          >
            {toast.text}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HUD */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-3 pb-4 sm:px-8 sm:pb-6">
        <div className="panel skew-card rounded-md px-4 py-2">
          <div className="unskew">
            <p className="font-mono-ai text-[9px] uppercase tracking-widest text-gray-400">Speed</p>
            <p className="display text-3xl text-white sm:text-4xl">
              <span ref={speedRef}>0</span>
              <span className="ml-1 text-xs text-pink-300">km/h</span>
            </p>
          </div>
        </div>

        <div className="hidden max-w-[34rem] flex-col items-end gap-2 sm:flex">
          <p className="font-mono-ai text-[10px] uppercase tracking-widest text-gray-300">
            Skills collected {collected.length}/{TOKENS.length}
          </p>
          <div className="flex flex-wrap justify-end gap-1.5">
            {TOKENS.map((t) => (
              <span
                key={t}
                className={`font-mono-ai rounded border px-2 py-0.5 text-[10px] transition-all duration-300 ${
                  collected.includes(t)
                    ? "border-yellow-300 bg-yellow-300/20 text-yellow-200 shadow-[0_0_14px_rgba(255,210,63,0.5)]"
                    : "border-white/10 bg-black/30 text-white/30"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 lg:block">
        <p className="font-mono-ai rounded bg-black/50 px-3 py-1 text-[10px] uppercase tracking-widest text-gray-300 backdrop-blur">
          {phase === "racing"
            ? "← → steer · ↑ boost · ↓ brake · Esc to release"
            : "Collect the skill coins · dodge the traffic"}
        </p>
      </div>
      <div className="absolute left-3 top-1/2 hidden -translate-y-1/2 flex-col gap-3 md:flex lg:left-6">
        {[
          { href: PROFILE.github, label: "GitHub", Icon: FaGithub },
          { href: PROFILE.linkedin, label: "LinkedIn", Icon: FaLinkedin },
          { href: `mailto:${PROFILE.email}`, label: "Email", Icon: FaEnvelope },
        ].map(({ href, label, Icon }) => (
          <motion.a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            whileHover={{ x: -4, scale: 1.1 }}
            className="panel flex h-10 w-10 items-center justify-center rounded-full text-pink-200 hover:text-white"
          >
            <Icon className="h-4 w-4" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
