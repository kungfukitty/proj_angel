import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-24 bg-background">
        <div className="container max-w-6xl px-4">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8">
              About <span className="gradient-text">Angel Kellogg</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              From the streets to the blockchain, building bridges between traditional hustle and digital wealth
              creation.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                The Journey from <span className="text-primary">Block to Blockchain</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Angel Kellogg brings a unique perspective to cryptocurrency education, combining street-smart business
                acumen with deep blockchain knowledge. Having navigated both traditional and digital economies, Angel
                understands the challenges and opportunities that come with financial transformation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through authentic storytelling and practical education, Angel helps communities understand how
                cryptocurrency and blockchain technology can create real wealth-building opportunities while maintaining
                connection to their roots and values.
              </p>
            </div>
            <div className="relative">
              <div className="luxury-card p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-6xl">👑</span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Authentic Leadership</h3>
                <p className="text-muted-foreground">
                  Bridging communities through education, empowerment, and genuine connection.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="luxury-card hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">Education First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Making complex blockchain concepts accessible through real-world examples and authentic communication.
                </p>
              </CardContent>
            </Card>

            <Card className="luxury-card hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">Community Building</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creating spaces where people can learn, grow, and build wealth together while supporting each other.
                </p>
              </CardContent>
            </Card>

            <Card className="luxury-card hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-3xl">💎</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-4">Authentic Wealth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building generational wealth through smart investments, education, and maintaining cultural identity.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center luxury-card p-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Blockchain Journey</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the community and start learning how to build wealth through cryptocurrency and blockchain
              technology.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="premium-button px-8 py-4 text-lg font-semibold">
                <Link href="/content">Start Learning</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="luxury-card border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                <Link href="/community">Join Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
