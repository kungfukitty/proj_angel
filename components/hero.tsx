import Link from "next/link"

export function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-[#0A0A0A]">
      {/* Background emboss pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="maze" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M0,0 L10,0 M0,5 L5,5 M5,0 L5,10 M0,10 L10,10" stroke="#FFD700" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#maze)" />
        </svg>
      </div>

      {/* Main container */}
      <div className="mx-auto flex min-h-[92vh] max-w-[1200px] flex-col justify-center gap-6 px-6">
        {/* Eyebrow text */}
        <p className="text-sm tracking-[0.2em] text-zinc-300 uppercase font-sans">CRYPTO EDUCATOR · ENTREPRENEUR</p>

        {/* Main headline with shimmer effect */}
        <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent relative overflow-hidden shimmer-text">
          Angel Kellogg
        </h1>

        {/* Subline */}
        <p className="max-w-xl text-lg text-zinc-200 font-sans">From the block to the blockchain</p>

        {/* Call-to-action buttons */}
        <div className="mt-2 flex flex-wrap gap-3">
          <Link
            href="/content"
            className="rounded-2xl px-5 py-3 font-medium text-black transition-all duration-300 hover:scale-105"
            style={{ backgroundImage: "linear-gradient(90deg, #D4AF37, #FFD700)" }}
          >
            Watch & Learn
          </Link>
          <Link
            href="/business-partners"
            className="rounded-2xl border border-[#FFD700]/40 px-5 py-3 text-zinc-200 hover:border-[#FFD700]/70 transition-all duration-300 hover:scale-105"
          >
            Work With Angel
          </Link>
        </div>

        {/* Optional stat bar */}
        <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-400">
          <span>Global Reach: USA & South Africa</span>
          <span>Focus: Crypto Education</span>
          <span>Mission: Wealth Building</span>
        </div>
      </div>

      {/* Subtle gold shimmer line at bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #FFD700, transparent)" }}
      />
    </section>
  )
}
