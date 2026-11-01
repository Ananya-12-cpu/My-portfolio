export const PROFILE = {
  name: "Ananya Putatunda",
  handle: "ANANYA",
  role: "Frontend Developer",
  location: "Jaipur, Rajasthan, India",
  email: "p.ananya2025@gmail.com",
  linkedin: "https://www.linkedin.com/in/ananya-putatunda/",
  github: "https://github.com/Ananya-12-cpu",
  resume: "/Ananya_Putatunda_Resume.pdf",
  years: 3,
};

export const SECTIONS = [
  { id: "start", label: "Start", short: "START" },
  { id: "about", label: "Driver", short: "DRIVER" },
  { id: "skill", label: "Garage", short: "GARAGE" },
  { id: "experience", label: "Laps", short: "LAPS" },
  { id: "works", label: "Tracks", short: "TRACKS" },
  { id: "contact", label: "Finish", short: "FINISH" },
] as const;

export const TAGLINES = [
  "Frontend Developer · 3+ yrs on the track",
  "React · Next.js · TypeScript",
  "Fast interfaces. Clean laps.",
];

export const ABOUT_COPY = [
  "Frontend Developer with 3+ years of experience building scalable, high-performance web applications using React, Next.js, and TypeScript. I specialize in SSR, SSG, and ISR, with hands-on expertise across SaaS platforms, role-based access control, authentication, and REST API integration.",
  "My journey began with a strong curiosity about how the web works, and that curiosity grew into a career spanning healthcare, travel, and real-estate SaaS products. I like my interfaces the way I like my racing: fast, smooth, and with no wasted movement.",
];

export const DRIVER_STATS = [
  { label: "Years on track", value: 3, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "Projects shipped", value: 10, suffix: "+" },
];

// Garage: skills as car upgrades.
export const GARAGE = [
  {
    part: "Engine",
    blurb: "Core frontend power",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 95 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    part: "Transmission",
    blurb: "State, data & forms",
    skills: [
      { name: "Redux Toolkit", level: 70 },
      { name: "Tanstack Query", level: 60 },
      { name: "React Hook Form", level: 95 },
      { name: "Formik", level: 90 },
    ],
  },
  {
    part: "Chassis",
    blurb: "UI & styling",
    skills: [
      { name: "Tailwind CSS", level: 75 },
      { name: "Material UI", level: 85 },
      { name: "Chakra UI", level: 85 },
      { name: "Radix UI", level: 85 },
      { name: "Shadcn UI", level: 65 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    part: "Pit Crew",
    blurb: "Backend, auth & i18n",
    skills: [
      { name: "Node.js", level: 60 },
      { name: "Express.js", level: 65 },
      { name: "NestJS", level: 70 },
      { name: "MySQL", level: 70 },
      { name: "NextAuth", level: 75 },
      { name: "next-intl (i18n)", level: 75 },
    ],
  },
];

export const TOOLS = ["Git", "GitHub", "Bitbucket", "Jira", "Figma", "CI/CD", "SCSS", "Angular", "Swagger"];

export const COMPANIES = [
  {
    name: "W3era Web Technology Pvt. Ltd.",
    role: "Frontend Developer",
    period: "April 2026 – Present",
    place: "On site · Jaipur, Rajasthan",
    current: true,
  },
  {
    name: "Rasacode Technologies Pvt. Ltd.",
    role: "Frontend Developer",
    period: "Oct 2023 – April 2026",
    place: "On-site Uttarpara, WB (to Nov 2025) · Remote (Dec 2025 – Apr 2026)",
    current: false,
  },
];

export const TRACKS = [
  {
    title: "My Components",
    image: "/images/myComponent.JPG",
    description:
      "A component-driven demo project using Next.js + Tailwind + Framer Motion.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    live: "#",
    github: "https://github.com/Ananya-12-cpu/My-Components",
    featured: true,
  },
  {
    title: "E-commerce",
    image: "/images/my-ecommerce.jpg",
    description:
      "A storefront built with Next.js + Tailwind + Framer Motion, with cart state in Redux Toolkit.",
    tech: ["Next.js", "Tailwind", "Framer Motion", "Redux Toolkit"],
    live: "#",
    github: "https://github.com/Ananya-12-cpu/my-ecommerce.git",
  },
  {
    title: "Rent-RBAC",
    image: "/images/rent.png",
    description:
      "Property rental app with role-based access, built on Next.js + Tailwind.",
    tech: ["Next.js", "Tailwind", "Tanstack Query", "Redux Toolkit"],
    live: "#",
    github: "https://github.com/Ananya-12-cpu/Rent_property.git",
  },
  {
    title: "Express API",
    image: "/images/Api.JPG",
    description:
      "A functional Swagger site with user authentication, roles, todos and file upload.",
    tech: ["Express.js", "TypeScript", "MySQL"],
    live: "#",
    github: "https://github.com/Ananya-12-cpu/ElitePropertyAdmin2026.git",
  },
];
