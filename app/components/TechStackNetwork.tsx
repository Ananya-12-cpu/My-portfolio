"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TechTag {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  color: string;
}

const techStack = [
  { text: "HTML5", color: "#E34F26" },
  { text: "CSS3", color: "#1572B6" },
  { text: "JavaScript", color: "#F7DF1E" },
  { text: "React", color: "#61DAFB" },
  { text: "Next.js", color: "#000000" },
  { text: "TypeScript", color: "#3178C6" },
  { text: "Node.js", color: "#339933" },
  { text: "Tailwind", color: "#06B6D4" },
  { text: "Git", color: "#F05032" },
];

export default function TechStackNetwork() {
  const [tags, setTags] = useState<TechTag[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize tags with slower initial velocity
    const initialTags = techStack.map((tech, index) => ({
      id: index,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5, // Reduced from 2 to 0.5
      vy: (Math.random() - 0.5) * 0.5, // Reduced from 2 to 0.5
      text: tech.text,
      color: tech.color,
    }));
    setTags(initialTags);

    // Animation loop
    const animate = () => {
      setTags(prevTags => 
        prevTags.map(tag => {
          let newX = tag.x + tag.vx;
          let newY = tag.y + tag.vy;

          // Bounce off walls with smoother transition
          if (newX < 0 || newX > window.innerWidth - 100) {
            tag.vx *= -0.8; // Reduced bounce force
            newX = tag.x + tag.vx;
          }
          if (newY < 0 || newY > window.innerHeight - 40) {
            tag.vy *= -0.8; // Reduced bounce force
            newY = tag.y + tag.vy;
          }

          // Mouse interaction with smoother movement
          const dx = mousePosition.x - newX;
          const dy = mousePosition.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Increased interaction radius and reduced force
          if (distance < 200) { // Increased from 150 to 200
            const force = (200 - distance) / 200;
            // Reduced force multiplier from 5 to 2
            newX -= (dx / distance) * force * 2;
            newY -= (dy / distance) * force * 2;
          }

          // Add slight random movement for more organic feel
          newX += (Math.random() - 0.5) * 0.1;
          newY += (Math.random() - 0.5) * 0.1;

          return { ...tag, x: newX, y: newY };
        })
      );
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    // Mouse move handler with debounce for smoother updates
    let timeoutId: NodeJS.Timeout;
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }, 16); // Approximately 60fps
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {tags.map((tag) => (
        <motion.div
          key={tag.id}
          className="absolute px-4 py-2 rounded-full text-sm font-medium shadow-lg"
          style={{
            x: tag.x,
            y: tag.y,
            backgroundColor: tag.color,
            color: tag.color === "#F7DF1E" || tag.color === "#61DAFB" ? "#000" : "#fff",
            transform: "translate(-50%, -50%)",
            opacity: 0.5,
            transition: "all 0.3s ease-out" // Added smooth transition
          }}
          animate={{
            scale: [1, 1.05, 1], // Reduced scale animation
          }}
          transition={{
            duration: 3, // Increased duration
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {tag.text}
        </motion.div>
      ))}
    </div>
  );
} 