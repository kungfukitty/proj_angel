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
    <section className="py-32 bg-gradient-to-b from-background via-card/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>

      <div className="container max-w-screen-2xl px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Three Pillars</span> of Success
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            The foundation of everything I do, from content creation to business ventures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="group luxury-card hover-lift floating-animation"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center group-hover:from-primary/30 group-hover:via-primary/20 transition-all duration-500 border border-primary/20 group-hover:border-primary/40">
                  <pillar.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
