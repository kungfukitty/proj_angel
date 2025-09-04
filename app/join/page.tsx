"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

export default function JoinPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    newsletter: false,
    terms: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [selectedTier, setSelectedTier] = useState<string | null>(null)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }))
  }

  const handleTierSelect = async (tierName: string, tierPrice: string) => {
    setSelectedTier(tierName)
    setIsLoading(true)

    try {
      // Simulate API call for tier selection
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (tierPrice === "Free") {
        // For free tier, just show success
        setSubmitStatus("success")
      } else {
        // For paid tiers, redirect to payment (simulate)
        console.log(`Redirecting to payment for ${tierName}`)
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsLoading(false)
      setSelectedTier(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.terms) return

    setIsLoading(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ firstName: "", lastName: "", email: "", newsletter: false, terms: false })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

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
                  <Button
                    className="w-full"
                    variant={index === 1 ? "default" : "outline"}
                    onClick={() => handleTierSelect(tier.name, tier.price)}
                    disabled={isLoading}
                  >
                    {selectedTier === tier.name && isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : tier.price === "Free" ? (
                      "Join Free"
                    ) : (
                      "Get Started"
                    )}
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
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
                  <CheckCircle className="h-4 w-4" />
                  <span>Welcome to the community! Check your email for next steps.</span>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                  <AlertCircle className="h-4 w-4" />
                  <span>Failed to join. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, newsletter: checked as boolean }))}
                    disabled={isLoading}
                  />
                  <Label htmlFor="newsletter" className="text-sm">
                    I want to receive the weekly newsletter with crypto insights and community updates
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, terms: checked as boolean }))}
                    disabled={isLoading}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the Terms of Service and Privacy Policy
                  </Label>
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={isLoading || !formData.terms}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    "Join the Community"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
