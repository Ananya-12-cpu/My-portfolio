"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import type { RefObject } from "react";

export default function Drag() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  return <motion.div ref={ref} style={{ ...ballStyle, x, y }} />;
}

const springConfig = { damping: 3, stiffness: 50, restDelta: 0.001 };

function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      x.set(clientX - element.offsetWidth / 2);
      y.set(clientY - element.offsetHeight / 2);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, x, y]);

  return { x, y };
}

/**
 * ==============   Styles   ================
 */

const ballStyle: React.CSSProperties = {
  position: "fixed",
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: "50%",
  pointerEvents: "none", // allow interaction through the ball
  zIndex: 9999, // ensure it's on top
};
