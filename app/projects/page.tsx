import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Mic, FileText, Users, Building } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const projects = [
  {
    title: "From the Block to the Blockchain",
    description:
      "A podcast and blog series exploring how Black Americans can leverage cryptocurrency and blockchain technology to build generational wealth.",
    type: "Podcast/Blog",
    icon: Mic,
    href: "/from-the-block-to-the-blockchain",
    status: "Active",
  },
  {
    title: "BRGR Collective",
    description: "Building community and resources for Black entrepreneurs in the crypto and tech space.",
    type: "Community",
    icon: Users,
    href: "/brgr-collective",
    status: "Growing",
  },
  {
    title: "Forever Docs",
    description:
      "Educational resources and documentation for financial literacy and crypto education in the Black community.",
    type: "Education",
    icon: FileText,
    href: "/forever-docs",
    status: "Expanding",
  },
  {
    title: "Business Partners Network",
    description: "Connecting Black-owned businesses with crypto-friendly partners and investment opportunities.",
    type: "Business",
    icon: Building,
    href: "/business-partners",
    status: "Launch Soon",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container max-w-screen-xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            <span className="gold-gradient-text">Our Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building bridges between traditional Black communities and the digital economy through education, community,
            and strategic partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-serif group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">{project.type}</span>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <Link href={project.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}
