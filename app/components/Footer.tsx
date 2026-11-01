export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#05060a] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono-ai text-xs text-gray-500">
        <p>
          <span className="text-cyan-400">{"<"}</span>
          Ananya Putatunda
          <span className="text-purple-400">{" />"}</span>
        </p>
        <p>Built with Next.js, Tailwind &amp; Framer Motion</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
