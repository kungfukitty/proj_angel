import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BRGRCollectivePage() {
  const programs = [
    {
      title: "Salesforce Fundamentals",
      duration: "8 weeks",
      level: "Beginner",
      description: "Learn Salesforce basics, navigation, and core functionality to start your tech career",
    },
    {
      title: "SQL & Database Management",
      duration: "6 weeks",
      level: "Intermediate",
      description: "Master SQL queries, database design, and data management skills",
    },
    {
      title: "Data Structures & Algorithms",
      duration: "10 weeks",
      level: "Advanced",
      description: "Build strong programming foundations with essential computer science concepts",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4 gradient-text">BRGR Collective</h1>
            <p className="text-xl text-muted-foreground">
              Building Resilient Generational Resources - Empowering women in underserved communities through tech
              education
            </p>
          </div>

          <Card className="glass-effect mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Our Mission</CardTitle>
              <CardDescription>Breaking barriers through technology education</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-lg">
                BRGR Collective provides free technology training to women in underserved communities, focusing on
                high-demand skills like Salesforce, SQL, and programming fundamentals. We believe technology education
                is a pathway to economic empowerment and generational wealth building.
              </p>
            </CardContent>
          </Card>

          <div className="mb-12">
            <h2 className="text-2xl font-serif font-semibold mb-6 text-center">Training Programs</h2>
            <div className="grid md:grid-cols-1 gap-6">
              {programs.map((program, index) => (
                <Card key={index} className="glass-effect hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="default">{program.duration}</Badge>
                          <Badge variant="outline">{program.level}</Badge>
                        </div>
                        <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                        <CardDescription className="text-base">{program.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <Card className="glass-effect text-center">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Ready to Start Your Tech Journey?</h3>
              <p className="text-muted-foreground mb-6">
                Applications are now open for our next cohort. All programs are completely free for qualified
                participants.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg">Apply Now</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
