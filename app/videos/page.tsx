import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function VideosPage() {
  const videoSeries = [
    {
      title: "Crypto 101 Series",
      description: "Complete beginner's guide to cryptocurrency",
      episodes: 12,
      duration: "5-10 min each",
      thumbnail: "/crypto-education-video-thumbnail.jpg",
    },
    {
      title: "From the Block Interviews",
      description: "Conversations with crypto pioneers and community leaders",
      episodes: 8,
      duration: "20-30 min each",
      thumbnail: "/interview-podcast-video-thumbnail.jpg",
    },
    {
      title: "Wealth Building Workshops",
      description: "Step-by-step guides to building generational wealth",
      episodes: 6,
      duration: "15-25 min each",
      thumbnail: "/wealth-building-workshop-video.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              Video Content
            </h1>
            <p className="text-xl text-zinc-300">
              Educational videos, interviews, and workshops to accelerate your crypto journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoSeries.map((series, index) => (
              <Card
                key={index}
                className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-zinc-800">
                  <img
                    src={series.thumbnail || "/placeholder.svg"}
                    alt={series.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-zinc-100">{series.title}</CardTitle>
                  <CardDescription className="text-zinc-400">{series.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-zinc-400 mb-4">
                    <span>{series.episodes} episodes</span>
                    <span>{series.duration}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black hover:from-[#B8941F] hover:to-[#E6C200] transition-all duration-300">
                    Watch Series
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="border-[#FFD700]/40 text-zinc-200 hover:border-[#FFD700]/70 bg-transparent hover:bg-zinc-900/50 transition-all duration-300"
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
