import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function JoinPage() {
  const membershipTiers = [
    {
      name: "Community Member",
      price: "Free",
      description: "Join our growing community of crypto learners",
      features: [
        "Access to community discussions",
        "Monthly newsletter",
        "Basic educational resources",
        "Event notifications",
      ],
    },
    {
      name: "Premium Member",
      price: "$29/month",
      description: "Enhanced access and exclusive content",
      features: [
        "All Community Member benefits",
        "Weekly live Q&A sessions",
        "Premium educational content",
        "Direct messaging with mentors",
        "Early event access",
      ],
    },
    {
      name: "BRGR Collective",
      price: "$199/month",
      description: "Elite membership for serious wealth builders",
      features: [
        "All Premium Member benefits",
        "Monthly 1-on-1 with Angel",
        "Exclusive investment opportunities",
        "Private Discord community",
        "Advanced trading strategies",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4 gradient-text">Join Our Community</h1>
            <p className="text-xl text-muted-foreground">Choose the membership level that fits your crypto journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {membershipTiers.map((tier, index) => (
              <Card
                key={index}
                className={`glass-effect hover:shadow-lg transition-all duration-300 ${index === 1 ? "border-primary scale-105" : ""}`}
              >
                <CardHeader className="text-center">
                  {index === 1 && (
                    <div className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full w-fit mx-auto mb-2">
                      Most Popular
                    </div>
                  )}
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold gradient-text">{tier.price}</div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                    {tier.price === "Free" ? "Join Free" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glass-effect max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Start Your Journey Today</CardTitle>
              <CardDescription>Join thousands building wealth from the block to the blockchain</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="newsletter" />
                <Label htmlFor="newsletter" className="text-sm">
                  I want to receive the weekly newsletter with crypto insights and community updates
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the Terms of Service and Privacy Policy
                </Label>
              </div>
              <Button className="w-full" size="lg">
                Join the Community
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
