import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4 gradient-text">Events</h1>
            <p className="text-xl text-muted-foreground">Join us for workshops, meetups, and educational sessions</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif font-semibold mb-6">Upcoming Events</h2>
            <Card className="glass-effect">
              <CardContent className="pt-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Events Coming Soon</h3>
                <p className="text-muted-foreground mb-6">
                  We're planning exciting workshops and community meetups. Stay tuned for announcements!
                </p>
                <Badge variant="outline" className="text-lg px-4 py-2">
                  TBA
                </Badge>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-effect text-center">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Want to Host an Event?</h3>
              <p className="text-muted-foreground mb-6">
                Interested in hosting a community event or workshop? We'd love to hear your ideas!
              </p>
              <Button>Propose an Event</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
