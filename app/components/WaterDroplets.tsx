"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Utility to generate a droplet with random properties
const createDroplet = (index: number) => ({
  id: index,
  left: Math.random() * 100 + "vw",
  delay: Math.random() * 5,
  duration: 5 + Math.random() * 5,
  size: 5 + Math.random() * 10 + "px",
  opacity: 0.3 + Math.random() * 0.5,
});

export default function WaterDroplets({ count = 30 }: { count?: number }) {
  const [droplets, setDroplets] = useState<any[]>([]);

  useEffect(() => {
    setDroplets(Array.from({ length: count }, (_, i) => createDroplet(i)));
  }, [count]);

  return (
    <>
      {droplets.map((drop) => (
        <motion.div
          key={drop.id}
          initial={{ y: "-10vh", opacity: 0 }}
          animate={{ y: "110vh", opacity: [drop.opacity, 0] }}
          transition={{
            delay: drop.delay,
            duration: drop.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "fixed",
            top: 0,
            left: drop.left,
            width: drop.size,
            height: drop.size,
            backgroundColor: "rgba(273, 216, 230, 0.8)", // light blue water drop
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 1,
            filter: "blur(1px)",
          }}
        />
      ))}
    </>
  );
}
