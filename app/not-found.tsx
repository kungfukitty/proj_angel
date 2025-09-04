import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-32 bg-background">
        <div className="container max-w-4xl px-4 text-center">
          <div className="luxury-card p-16">
            <div className="mb-8">
              <span className="text-8xl md:text-9xl font-bold gradient-text">404</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-6">Page Not Found</h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Looks like you've wandered off the blockchain. The page you're looking for doesn't exist, but don't worry
              - there's plenty of valuable content to explore.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="premium-button px-8 py-4 text-lg font-semibold">
                <Link href="/">Go Home</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="luxury-card border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                <Link href="/content">Explore Content</Link>
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Need help?{" "}
                <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors">
                  Contact us
                </Link>{" "}
                or check out our{" "}
                <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors">
                  latest blog posts
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
