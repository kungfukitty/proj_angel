import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Why Your Crypto Wallet is Like Your Relationship Status",
      excerpt:
        "Just like relationships, managing your crypto requires trust, communication, and knowing when to hold on or let go.",
      date: "March 20, 2024",
      readTime: "5 min read",
      category: "Education",
      featured: true,
    },
    {
      title: "The Real Talk About Bitcoin and Fundraising",
      excerpt: "How cryptocurrency is revolutionizing fundraising for community projects and social causes.",
      date: "March 18, 2024",
      readTime: "7 min read",
      category: "Community",
      featured: false,
    },
    {
      title: "From Candy Sales to Crypto Wallets",
      excerpt: "The entrepreneurial skills you learned as a kid are the same ones you need for crypto success.",
      date: "March 15, 2024",
      readTime: "6 min read",
      category: "Wealth Building",
      featured: false,
    },
    {
      title: "DeFi Explained: Banking Without the Bank",
      excerpt: "Understanding decentralized finance and how it's changing the financial landscape for everyone.",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Education",
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-xl text-zinc-300">Insights, stories, and education from the block to the blockchain</p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className={`bg-zinc-900/50 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 ${post.featured ? "border-amber-500/50" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          variant={post.featured ? "default" : "secondary"}
                          className={
                            post.featured
                              ? "bg-gradient-to-r from-amber-400 to-yellow-500 text-black"
                              : "bg-zinc-800 text-zinc-300"
                          }
                        >
                          {post.category}
                        </Badge>
                        {post.featured && (
                          <Badge variant="outline" className="border-amber-500/30 text-amber-400">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl mb-2 text-white hover:text-amber-400 transition-colors cursor-pointer">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-base text-zinc-300">{post.excerpt}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 text-sm text-zinc-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-amber-400 hover:text-amber-300 hover:bg-amber-500/10"
                    >
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10 bg-transparent"
            >
              Load More Posts
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
