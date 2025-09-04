import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function FromTheBlockToTheBlockchainPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-24 bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto text-center">
            <div className="luxury-card p-12 mb-12">
              <h1 className="font-serif text-5xl md:text-7xl font-bold gradient-text mb-6">
                From the Block to the Blockchain
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
                Crypto culture, luxury, and legacy—built by us, for us.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <Button asChild className="premium-button px-8 py-4 font-semibold" aria-label="Listen to the podcast">
                <Link href="#podcast">🎧 Listen to the Podcast</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="luxury-card border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 font-semibold bg-transparent"
                aria-label="Read the latest blog posts"
              >
                <Link href="#blog">📰 Read the Latest Blog</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="luxury-card border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 font-semibold bg-transparent"
                aria-label="Join the movement"
              >
                <Link href="#join">📝 Join the Movement</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <Card className="luxury-card">
              <CardContent className="p-12">
                <h2 className="font-serif text-3xl font-bold text-primary mb-6">About the Movement</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From candy sales to crypto wallets—our stories matter. We teach, inspire, and build wealth through
                  blockchain, one real-life lesson at a time.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Content */}
        <section id="blog" className="py-16 px-4">
          <div className="container max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-primary text-center mb-16">Featured Content</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* The Foundation */}
              <Card className="luxury-card hover-lift">
                <CardContent className="p-8">
                  <div className="text-primary font-semibold mb-2">The Foundation</div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                    From the Trap to Transparency: DeFi Explained
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    On the block, everybody knows the middleman eats the most. You hustle all week, move product, flip
                    packs, and...
                  </p>
                  <div className="flex gap-3">
                    <Button className="premium-button" aria-label="Read DeFi explanation post">
                      Read Post →
                    </Button>
                    <Button
                      variant="outline"
                      className="luxury-card border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                      aria-label="Listen to DeFi podcast"
                    >
                      Listen →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Future Forward */}
              <Card className="luxury-card hover-lift">
                <CardContent className="p-8">
                  <div className="text-primary font-semibold mb-2">Future Forward</div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                    Your Kid's Fundraiser Needs Bitcoin
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your kid come home with that same old fundraiser packet. You know the one. Candy bars nobody want,
                    stale popcorn tins...
                  </p>
                  <div className="flex gap-3">
                    <Button className="premium-button" aria-label="Read Bitcoin fundraiser post">
                      Read Post →
                    </Button>
                    <Button
                      variant="outline"
                      className="luxury-card border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                      aria-label="Listen to fundraiser podcast"
                    >
                      Listen →
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* The Hustle */}
              <Card className="luxury-card hover-lift">
                <CardContent className="p-8">
                  <div className="text-primary font-semibold mb-2">The Hustle</div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                    💸 Would You Share a Wallet with Your Bae?🥶
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Money been breaking couples up since Adam & Eve bought that first apple on Klarna. Now add crypto
                    into the mix...
                  </p>
                  <div className="flex gap-3">
                    <Button className="premium-button" aria-label="Read crypto relationship post">
                      Read Post →
                    </Button>
                    <Button
                      variant="outline"
                      className="luxury-card border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                      aria-label="Listen to relationship podcast"
                    >
                      Listen →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-16">
              <Button className="premium-button px-8 py-4 font-semibold" aria-label="Browse all blog posts">
                Browse all blog posts →
              </Button>
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section id="podcast" className="py-16 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <Card className="luxury-card">
              <CardContent className="p-12">
                <h2 className="font-serif text-3xl font-bold text-primary mb-4">🎙️ Podcast Preview</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Upcoming Guests: Black crypto founders, Youth NFT creators
                </p>
                <Button asChild className="premium-button px-8 py-4 font-semibold" aria-label="Open podcast page">
                  <Link href="/podcast">Open podcast page →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* NFT Drop Section */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <Card className="luxury-card">
              <CardContent className="p-12">
                <h2 className="font-serif text-3xl font-bold text-primary mb-4">📦 NFT Drop: "Mint Your Hustle"</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Access private content, vote on topics, and get IRL invites.
                </p>
                <Button className="premium-button px-8 py-4 font-semibold" aria-label="Mint NFT now">
                  Mint Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Join Section */}
        <section id="join" className="py-16 px-4">
          <div className="container max-w-2xl mx-auto">
            <Card className="luxury-card">
              <CardContent className="p-12">
                <h2 className="font-serif text-3xl font-bold text-primary text-center mb-6">Join the Hustle</h2>
                <p className="text-lg text-muted-foreground text-center mb-12">Join 10,000+ Hustlers Learning Web3</p>

                <form className="space-y-6" aria-label="Join the community form">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      className="luxury-card"
                      required
                      aria-describedby="name-help"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      className="luxury-card"
                      required
                      aria-describedby="email-help"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="story">What's your crypto story?</Label>
                    <Textarea
                      id="story"
                      placeholder="What's your crypto story?"
                      rows={4}
                      className="luxury-card resize-none"
                      aria-describedby="story-help"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="premium-button w-full px-8 py-4 font-semibold"
                    aria-label="Submit form to join the community"
                  >
                    Join Now
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground text-center mt-6">
                  By joining, you agree to our{" "}
                  <Link href="/terms" className="text-primary hover:text-primary/80 transition-colors">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:text-primary/80 transition-colors">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
