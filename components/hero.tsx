import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 geometric-shape floating-animation"></div>
        <div
          className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rotate-45 floating-animation"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
            {/* Content Section - Takes up 4 columns */}
            <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-primary tracking-wider uppercase">
                    Crypto Educator & Entrepreneur
                  </div>
                  <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="block gradient-text">ANGEL</span>
                    <span className="block text-foreground">KELLOGG</span>
                  </h1>
                </div>

                <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary"></div>

                <div className="space-y-4">
                  <p className="text-xl lg:text-2xl text-foreground font-medium">From the block to the blockchain</p>
                  <p className="text-base text-muted-foreground max-w-md leading-relaxed">
                    Empowering communities through crypto education, wealth building, and generational legacy creation.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold px-8 py-6 text-base hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Link href="/content">Start Your Journey</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-base glass-effect hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <Link href="http://fromtheblocktotheblockchain.info/" target="_blank" rel="noopener noreferrer">
                    Visit Blog
                  </Link>
                </Button>
              </div>
            </div>

            {/* Angel's Portrait - Takes up 8 columns for wider prominence */}
            <div className="lg:col-span-8 relative order-1 lg:order-2">
              <div className="relative max-w-2xl mx-auto lg:ml-auto lg:mr-0">
                <div className="relative">
                  {/* Main image container - Increased width and height for wider image */}
                  <div className="relative w-96 h-[480px] lg:w-[500px] lg:h-[600px] xl:w-[550px] xl:h-[650px]">
                    {/* Glassmorphism background */}
                    <div className="absolute inset-0 glass-effect rounded-3xl"></div>

                    {/* Angel's image */}
                    <Image
                      src="/angel-original-portrait.png"
                      alt="Angel Kellogg - Crypto Educator & Entrepreneur"
                      fill
                      className="object-cover object-center rounded-3xl"
                      priority
                      quality={95}
                      sizes="(max-width: 1024px) 384px, (max-width: 1280px) 500px, 550px"
                    />

                    {/* Gradient overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-3xl"></div>

                    {/* Modern border effect */}
                    <div className="absolute inset-0 rounded-3xl ring-1 ring-primary/20"></div>
                  </div>

                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center glass-effect floating-animation">
                    <div className="text-2xl">🚀</div>
                  </div>

                  <div
                    className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-4 floating-animation"
                    style={{ animationDelay: "1s" }}
                  >
                    <div className="text-sm font-medium text-primary">Blockchain Expert</div>
                    <div className="text-xs text-muted-foreground">USA & South Africa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(234,88,12,0.05),transparent_70%)] -z-10"></div>
    </section>
  )
}
