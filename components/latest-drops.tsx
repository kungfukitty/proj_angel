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
    image: "/placeholder-gnca8.png",
    href: "http://fromtheblocktotheblockchain.info/from-the-trap-to-transparency-defi-explained/",
  },
  {
    type: "blog",
    title: "Your Kid's Fundraiser Needs Bitcoin",
    description:
      "Your kid come home with that same old fundraiser packet. Cookie dough that taste like cardboard. Time to upgrade to crypto fundraising.",
    image: "/placeholder-jw98g.png",
    href: "http://fromtheblocktotheblockchain.info/your-kids-fundraiser-needs-bitcoin/",
  },
  {
    type: "blog",
    title: "💸 Would You Share a Wallet with Your Bae?🥶",
    description:
      "Money been breaking couples up since Adam & Eve. Now add crypto into the mix — wallets, private keys, and relationship drama.",
    image: "/placeholder-x3yuv.png",
    href: "http://fromtheblocktotheblockchain.info/would-you-share-a-wallet-with-your-bae/",
  },
]

export function LatestDrops() {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-card/10 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/3 via-transparent to-primary/3"></div>

      <div className="container max-w-screen-2xl px-4 relative z-10">
        <div className="flex items-center justify-between mb-20">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Latest <span className="gradient-text">Drops</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">From the Block to the Blockchain</p>
          </div>
          <Button
            asChild
            variant="outline"
            className="hidden md:flex luxury-card border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 px-8 py-3 font-semibold bg-transparent"
          >
            <Link href="http://fromtheblocktotheblockchain.info/home/blog/">View All Posts</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {latestContent.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden luxury-card hover-lift floating-animation"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />

                <div className="absolute top-6 left-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 backdrop-blur-sm flex items-center justify-center shadow-lg border border-primary/20">
                    <span className="text-primary-foreground font-bold text-lg">📝</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed font-light">{item.description}</p>

                <Button
                  asChild
                  variant="ghost"
                  className="p-0 h-auto font-semibold text-primary hover:text-primary/80 group-hover:translate-x-2 transition-all duration-300 text-lg"
                >
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    Read More →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Button asChild className="premium-button px-8 py-4 text-lg font-semibold">
            <Link href="http://fromtheblocktotheblockchain.info/home/blog/" target="_blank" rel="noopener noreferrer">
              View All Posts
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
