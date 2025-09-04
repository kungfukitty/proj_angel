import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function VideosPage() {
  const videoSeries = [
    {
      title: "Crypto 101 Series",
      description: "Complete beginner's guide to cryptocurrency",
      episodes: 12,
      duration: "5-10 min each",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Crypto+101+Series",
    },
    {
      title: "From the Block Interviews",
      description: "Conversations with crypto pioneers and community leaders",
      episodes: 8,
      duration: "20-30 min each",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Block+Interviews",
    },
    {
      title: "Wealth Building Workshops",
      description: "Step-by-step guides to building generational wealth",
      episodes: 6,
      duration: "15-25 min each",
      thumbnail: "/placeholder.svg?height=200&width=300&text=Wealth+Building",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-24 bg-background">
        <div className="container max-w-6xl px-4">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Video</span> Content
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Educational videos, interviews, and workshops to accelerate your crypto journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoSeries.map((series, index) => (
              <Card key={index} className="luxury-card hover-lift overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={series.thumbnail || "/placeholder.svg"}
                    alt={`${series.title} video series thumbnail`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{series.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{series.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span>{series.episodes} episodes</span>
                    <span>{series.duration}</span>
                  </div>
                  <Button
                    className="premium-button w-full font-semibold"
                    aria-label={`Watch ${series.title} video series`}
                  >
                    Watch Series
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="luxury-card border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 font-semibold bg-transparent"
              aria-label="Subscribe to Angel Kellogg's YouTube channel"
            >
              <a href="https://youtube.com/@angelkellogg" target="_blank" rel="noopener noreferrer">
                Subscribe on YouTube
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
