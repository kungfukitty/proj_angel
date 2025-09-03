import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunityPage() {
  const communityFeatures = [
    {
      title: "Weekly Crypto Circles",
      description: "Join our weekly discussions about market trends, investment strategies, and community wins",
      icon: "💬",
    },
    {
      title: "Mentorship Program",
      description: "Get paired with experienced crypto investors and entrepreneurs in our community",
      icon: "🤝",
    },
    {
      title: "Resource Library",
      description: "Access exclusive guides, templates, and tools for your crypto journey",
      icon: "📚",
    },
    {
      title: "Success Celebrations",
      description: "Share your wins and celebrate milestones with the community",
      icon: "🎉",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Community
            </h1>
            <p className="text-xl text-zinc-300 mb-8">Building wealth and legacy together</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black hover:from-amber-500 hover:to-yellow-600"
            >
              Join Our Community
            </Button>
          </div>

          {/* Community Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {communityFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-zinc-900/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-zinc-300">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials */}
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold mb-8 text-white">What Our Community Says</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "This community changed my perspective on wealth building. I went from skeptical to confident in crypto.",
                  author: "Maria S.",
                },
                {
                  quote: "The mentorship program connected me with someone who helped me avoid costly mistakes.",
                  author: "James T.",
                },
                {
                  quote: "Finally, crypto education that speaks my language and understands my background.",
                  author: "Keisha R.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-zinc-900/50 backdrop-blur-sm border border-amber-500/20">
                  <CardContent className="pt-6">
                    <p className="italic mb-4 text-zinc-300">"{testimonial.quote}"</p>
                    <p className="font-semibold text-amber-400">— {testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
