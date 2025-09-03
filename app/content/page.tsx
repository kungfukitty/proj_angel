import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ContentPage() {
  const contentCategories = [
    {
      title: "Crypto Education",
      description: "Learn the fundamentals of cryptocurrency and blockchain technology",
      items: ["Beginner's Guide to Bitcoin", "Understanding DeFi", "Wallet Security 101", "Smart Contract Basics"],
    },
    {
      title: "Wealth Building",
      description: "Strategies for building generational wealth through crypto",
      items: ["Investment Strategies", "Portfolio Diversification", "Risk Management", "Long-term Planning"],
    },
    {
      title: "Community Stories",
      description: "Real stories from our community members",
      items: ["Success Stories", "Learning Journeys", "Challenges Overcome", "Community Spotlights"],
    },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
              Content Hub
            </h1>
            <p className="text-xl text-zinc-300">
              Educational resources, stories, and insights from the block to the blockchain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {contentCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-zinc-100">{category.title}</CardTitle>
                  <CardDescription className="text-zinc-400">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-zinc-300">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black hover:from-[#B8941F] hover:to-[#E6C200] transition-all duration-300">
                    Explore {category.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black hover:from-[#B8941F] hover:to-[#E6C200] transition-all duration-300"
            >
              <Link href="/blog">View All Blog Posts</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
