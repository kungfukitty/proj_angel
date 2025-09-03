import { Card, CardContent } from "@/components/ui/card"
import { Coins, Zap, Crown } from "lucide-react"

const pillars = [
  {
    icon: Coins,
    title: "Crypto Expertise",
    description:
      "Deep knowledge of blockchain technology, DeFi protocols, and digital asset strategies that drive real wealth creation.",
  },
  {
    icon: Zap,
    title: "Hustle Culture",
    description:
      "Street-smart business acumen combined with relentless work ethic. Building from the ground up with authenticity.",
  },
  {
    icon: Crown,
    title: "Luxury Lifestyle",
    description:
      "Curating premium experiences and sophisticated taste while staying connected to authentic roots and community.",
  },
]

export function PillarsSection() {
  return (
    <section className="py-24 bg-card/50">
      <div className="container max-w-screen-2xl px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            <span className="gold-gradient-text">Three Pillars</span> of Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The foundation of everything I do, from content creation to business ventures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/50"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
