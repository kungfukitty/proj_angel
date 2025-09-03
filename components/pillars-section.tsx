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
    <section className="py-24 bg-gradient-to-b from-zinc-900/50 to-black/50">
      <div className="container max-w-screen-2xl px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Three Pillars</span> of Success
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            The foundation of everything I do, from content creation to business ventures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 bg-zinc-900/30 backdrop-blur-sm border-zinc-700/50 hover:border-primary/50"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
