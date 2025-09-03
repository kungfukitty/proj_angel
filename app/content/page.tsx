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
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4 gradient-text">Content Hub</h1>
            <p className="text-xl text-muted-foreground">
              Educational resources, stories, and insights from the block to the blockchain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {contentCategories.map((category, index) => (
              <Card key={index} className="glass-effect hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    Explore {category.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/blog">View All Blog Posts</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
