import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ForeverDocsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4 gradient-text">Forever Docs</h1>
            <p className="text-xl text-muted-foreground">
              Protecting Black family legacies with secure, community-rooted digital vaults
            </p>
          </div>

          <Card className="glass-effect mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">The Problem We're Solving</CardTitle>
              <CardDescription>Breaking the cycle of generational wealth loss</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg">
                In the American South, there are over 1.6 million acres of land known as heirs' property. It is land
                owned by Black families, often passed down since Reconstruction, but without a clear, legal title.
              </p>
              <p>
                When the owner dies, if just one of the dozens of descendants cannot be found or is pressured to sell,
                the entire property can be forcibly sold at a fraction of its value. The root cause? A missing will. A
                misplaced deed. A system that preys on disorganized paper records.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Our Solution: Digital Family Vaults</CardTitle>
              <CardDescription>A free digital vault designed to stop generational wealth bleeding</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Secure Document Storage</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Wills and estate documents</li>
                    <li>• Property deeds and titles</li>
                    <li>• Insurance policies</li>
                    <li>• Important family records</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Community Distribution</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• QR codes through trusted community leaders</li>
                    <li>• Pastors, barbers, funeral directors</li>
                    <li>• Simple photo-based document upload</li>
                    <li>• Easy heir designation system</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Digital Family Crest</CardTitle>
              <CardDescription>Blockchain-based proof of family legacy protection</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                When a family secures their vault, they can mint a Digital Family Crest on the blockchain. Think of it
                as a digital flag planted on a specific date, creating a public, tamper-proof timestamp.
              </p>
              <p>
                It says to the world, "On this day, the Carter family secured their legacy." It contains no private
                data, but serves as unforgettable, un-erasable proof of preparedness.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect text-center">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Join the Movement</h3>
              <p className="text-muted-foreground mb-6">
                Help us protect Black family legacies through secure digital documentation and blockchain technology.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="https://www.foreverdocs.org/waiting-list" target="_blank">
                    Join Waitlist
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="https://www.foreverdocs.org/" target="_blank">
                    Learn More
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
