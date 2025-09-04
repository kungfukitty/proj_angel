import Link from "next/link"

export function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="luxury-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.1" />
              <path
                d="M0,0 L20,0 M0,10 L10,10 M10,0 L10,20 M0,20 L20,20"
                stroke="currentColor"
                strokeWidth="0.3"
                fill="none"
                opacity="0.05"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#luxury-pattern)" className="text-primary" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>

      {/* Main container */}
      <div className="mx-auto flex min-h-[92vh] max-w-[1200px] flex-col justify-center gap-8 px-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1 max-w-16"></div>
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase font-sans font-medium">
            CRYPTO EDUCATOR · ENTREPRENEUR
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1 max-w-16"></div>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] pb-4 gradient-text shimmer-text font-bold">
          Angel Kellogg
        </h1>

        <p className="max-w-xl text-xl md:text-2xl text-foreground/90 font-sans font-light tracking-wide">
          From the block to the blockchain
        </p>

        <div className="mt-4 flex flex-wrap gap-4">
          <Link
            href="/content"
            className="premium-button rounded-xl px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            Watch & Learn
            <span className="text-lg">→</span>
          </Link>
          <Link
            href="/business-partners"
            className="rounded-xl border-2 border-primary/30 bg-card/50 backdrop-blur-sm px-8 py-4 text-foreground hover:border-primary/60 hover:bg-card/70 transition-all duration-300 hover:scale-105 font-semibold inline-flex items-center gap-2"
          >
            Work With Angel
            <span className="text-primary">✦</span>
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="font-medium">Global Reach: USA & South Africa</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="font-medium">Focus: Crypto Education</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="font-medium">Mission: Wealth Building</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"></div>
    </section>
  )
}
