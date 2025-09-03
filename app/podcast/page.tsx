import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PodcastPage() {
  const recentEpisodes = [
    {
      title: "Building Wealth in the Digital Age",
      description: "How cryptocurrency is changing the wealth-building game for our communities",
      date: "March 15, 2024",
      duration: "45 min",
      guests: "Financial advisor Marcus Johnson",
    },
    {
      title: "From Corner Store to Crypto: An Entrepreneur's Journey",
      description: "Local business owner shares how she integrated crypto payments",
      date: "March 8, 2024",
      duration: "38 min",
      guests: "Entrepreneur Sarah Williams",
    },
    {
      title: "Understanding DeFi: Banking Without Banks",
      description: "Breaking down decentralized finance in simple terms",
      date: "March 1, 2024",
      duration: "42 min",
      guests: "DeFi expert Dr. Michael Chen",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4 gradient-text">From the Block to the Blockchain</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Real conversations about crypto, wealth, and community empowerment
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer">
                  Listen on Spotify
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://podcasts.apple.com" target="_blank" rel="noopener noreferrer">
                  Apple Podcasts
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://podcasts.google.com" target="_blank" rel="noopener noreferrer">
                  Google Podcasts
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-semibold mb-6">Recent Episodes</h2>
            {recentEpisodes.map((episode, index) => (
              <Card key={index} className="glass-effect hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{episode.title}</CardTitle>
                      <CardDescription className="text-base">{episode.description}</CardDescription>
                    </div>
                    <Button size="sm">Play</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>{episode.date}</span>
                    <span>•</span>
                    <span>{episode.duration}</span>
                    <span>•</span>
                    <span>Guest: {episode.guests}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <a href="http://fromtheblocktotheblockchain.info/" target="_blank" rel="noopener noreferrer">
                Visit Podcast Website
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
