import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MediaKitPage() {
  const mediaAssets = [
    {
      category: "Profile Photos",
      items: ["High-res headshot (300 DPI)", "Professional portrait", "Casual speaking photo", "Event photos"],
    },
    {
      category: "Logos & Branding",
      items: ["Angel Kellogg logo (PNG/SVG)", "BRGR Collective logo", "Podcast artwork", "Brand color palette"],
    },
    {
      category: "Bio & Information",
      items: ["Short bio (50 words)", "Extended bio (200 words)", "Speaking topics", "Achievements & credentials"],
    },
    {
      category: "Speaking Materials",
      items: ["Speaker one-sheet", "Presentation templates", "Topic outlines", "Technical requirements"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4 gradient-text">Media Kit</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need for interviews, features, and collaborations
            </p>
          </div>

          <Card className="glass-effect mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">About Angel Kellogg</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Angel Kellogg is a cryptocurrency educator, entrepreneur, and community builder dedicated to empowering
                communities through blockchain education and wealth-building strategies. As the host of "From the Block
                to the Blockchain," she bridges the gap between traditional financial literacy and modern crypto
                opportunities.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold mb-2">Speaking Topics</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Cryptocurrency for Beginners</li>
                    <li>• Building Generational Wealth</li>
                    <li>• Community Empowerment through Crypto</li>
                    <li>• Financial Literacy in the Digital Age</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Experience</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Host of "From the Block to the Blockchain"</li>
                    <li>• BRGR Collective founder</li>
                    <li>• Forever Docs advocate</li>
                    <li>• Community educator and mentor</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {mediaAssets.map((category, index) => (
              <Card key={index} className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex justify-between items-center text-sm">
                        <span>{item}</span>
                        <Button variant="ghost" size="sm">
                          Download
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glass-effect text-center">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Media Inquiries</h3>
              <p className="text-muted-foreground mb-6">
                For interviews, speaking engagements, or collaboration opportunities, please reach out to our media
                team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>Download Full Media Kit</Button>
                <Button variant="outline">Contact for Interviews</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
