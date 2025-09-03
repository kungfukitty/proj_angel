import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const latestContent = [
  {
    type: "blog",
    title: "From the Trap to Transparency: DeFi Explained",
    description:
      "On the block, everybody knows the middleman eats the most. You hustle all week, move product, flip packs, and learn how DeFi cuts out the middleman.",
    image: "/defi-blockchain-illustration.jpg",
    href: "http://fromtheblocktotheblockchain.info/from-the-trap-to-transparency-defi-explained/",
  },
  {
    type: "blog",
    title: "Your Kid's Fundraiser Needs Bitcoin",
    description:
      "Your kid come home with that same old fundraiser packet. Cookie dough that taste like cardboard. Time to upgrade to crypto fundraising.",
    image: "/bitcoin-fundraising-concept.jpg",
    href: "http://fromtheblocktotheblockchain.info/your-kids-fundraiser-needs-bitcoin/",
  },
  {
    type: "blog",
    title: "💸 Would You Share a Wallet with Your Bae?🥶",
    description:
      "Money been breaking couples up since Adam & Eve. Now add crypto into the mix — wallets, private keys, and relationship drama.",
    image: "/crypto-wallet-relationship-concept.jpg",
    href: "http://fromtheblocktotheblockchain.info/would-you-share-a-wallet-with-your-bae/",
  },
]

export function LatestDrops() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-900/50">
      <div className="container max-w-screen-2xl px-4">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">
              Latest{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Drops</span>
            </h2>
            <p className="text-xl text-zinc-300">From the Block to the Blockchain</p>
          </div>
          <Button
            asChild
            variant="outline"
            className="hidden md:flex bg-zinc-800/50 border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
          >
            <Link href="http://fromtheblocktotheblockchain.info/home/blog/">View All Posts</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestContent.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-zinc-900/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-2 floating-animation"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400/90 to-yellow-500/90 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-black font-bold text-sm">📝</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-300 mb-4 leading-relaxed text-sm">{item.description}</p>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 h-auto font-medium text-amber-400 hover:text-amber-300 group-hover:translate-x-2 transition-transform"
                >
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    Read More →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button
            asChild
            className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:from-amber-500 hover:to-yellow-600"
          >
            <Link href="http://fromtheblocktotheblockchain.info/home/blog/" target="_blank" rel="noopener noreferrer">
              View All Posts
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
