import Link from "next/link"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <main className="relative isolate min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>

        <div className="mx-auto flex min-h-[92vh] max-w-[1200px] flex-col justify-center gap-8 px-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1 max-w-16"></div>
            <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase font-medium">
              CRYPTO EDUCATOR · ENTREPRENEUR
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1 max-w-16"></div>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] pb-4 gradient-text font-bold">
            Angel Kellogg
          </h1>

          <p className="max-w-xl text-xl md:text-2xl text-foreground/90 font-light tracking-wide">
            From the block to the blockchain
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href="/content"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #ffd700 0%, #ffa500 100%) !important",
                color: "#000000 !important",
                boxShadow: "0 4px 16px rgba(255, 215, 0, 0.3)",
              }}
            >
              <span style={{ color: "#000000 !important" }}>Watch & Learn</span>
              <span className="text-lg" style={{ color: "#000000 !important" }}>
                →
              </span>
            </Link>
            <Link
              href="/contact"
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
      </main>

      {/* Latest Content Section */}
      <section className="py-32 bg-gradient-to-b from-background via-card/10 to-background">
        <div className="container max-w-screen-2xl px-4">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Latest <span className="gradient-text">Content</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">From the Block to the Blockchain</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "From the Trap to Transparency: DeFi Explained",
                description: "Learn how DeFi cuts out the middleman and creates financial transparency.",
                href: "http://fromtheblocktotheblockchain.info/from-the-trap-to-transparency-defi-explained/",
              },
              {
                title: "Your Kid's Fundraiser Needs Bitcoin",
                description: "Time to upgrade traditional fundraising with crypto payments.",
                href: "http://fromtheblocktotheblockchain.info/your-kids-fundraiser-needs-bitcoin/",
              },
              {
                title: "Would You Share a Wallet with Your Bae?",
                description: "Money and relationships get complicated when crypto enters the mix.",
                href: "http://fromtheblocktotheblockchain.info/would-you-share-a-wallet-with-your-bae/",
              },
            ].map((post, index) => (
              <div key={index} className="luxury-card p-8 hover-lift">
                <h3 className="font-serif text-xl font-bold mb-4 text-foreground">{post.title}</h3>
                <p className="text-muted-foreground mb-6">{post.description}</p>
                <Link
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
