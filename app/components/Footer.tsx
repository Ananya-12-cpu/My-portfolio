import { PROFILE } from "@/app/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0612] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 sm:pl-48 font-mono-ai text-xs text-gray-500 sm:flex-row sm:px-6 lg:px-8">
        <p>
          <span className="text-pink-400">🏁 Race complete ·</span> {PROFILE.name}
        </p>
        <p>Built with Next.js, Tailwind &amp; Framer Motion</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
