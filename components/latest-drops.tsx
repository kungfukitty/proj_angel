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
    <section className="py-24 bg-muted/30">
      <div className="container max-w-screen-2xl px-4">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Latest <span className="gradient-text">Drops</span>
            </h2>
            <p className="text-xl text-muted-foreground">From the Block to the Blockchain</p>
          </div>
          <Button asChild variant="outline" className="hidden md:flex bg-transparent">
            <Link href="http://fromtheblocktotheblockchain.info/home/blog/">View All Posts</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestContent.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden glass-effect hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 floating-animation border-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">📝</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{item.description}</p>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 h-auto font-medium text-primary hover:text-primary/80 group-hover:translate-x-2 transition-transform"
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
          <Button asChild>
            <Link href="http://fromtheblocktotheblockchain.info/home/blog/" target="_blank" rel="noopener noreferrer">
              View All Posts
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
