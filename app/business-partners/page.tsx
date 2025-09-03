import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BusinessPartnersPage() {
  const partners = [
    {
      name: "CryptoSecure Wallets",
      description: "Hardware wallet solutions with exclusive community discounts",
      category: "Security",
    },
    {
      name: "BlockTax Pro",
      description: "Crypto tax preparation and compliance services",
      category: "Tax Services",
    },
    {
      name: "DeFi Academy",
      description: "Advanced DeFi education and certification programs",
      category: "Education",
    },
    {
      name: "Crypto Legal Group",
      description: "Legal services specializing in cryptocurrency and blockchain",
      category: "Legal",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4 gradient-text">Business Partners</h1>
            <p className="text-xl text-muted-foreground">
              Trusted partners providing essential services for your crypto journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {partners.map((partner, index) => (
              <Card key={index} className="glass-effect hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{partner.name}</CardTitle>
                      <CardDescription className="mt-2">{partner.description}</CardDescription>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{partner.category}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glass-effect max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Become a Partner</CardTitle>
              <CardDescription>Interested in partnering with us to serve our community?</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                We're always looking for reputable businesses that align with our mission of empowering communities
                through crypto education and wealth building.
              </p>
              <Button size="lg">Apply for Partnership</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
