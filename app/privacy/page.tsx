import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-24 bg-background">
        <div className="container max-w-4xl px-4">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Privacy</span> Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>

          <div className="luxury-card p-8 md:p-12 space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, subscribe to our
                newsletter, or contact us. This may include your name, email address, and any other information you
                choose to provide.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Send you newsletters and educational content about cryptocurrency and blockchain</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, and events</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us through our{" "}
                <a href="/contact" className="text-primary hover:text-primary/80 transition-colors">
                  contact page
                </a>
                .
              </p>
            </section>

            <div className="border-t border-border pt-8">
              <p className="text-sm text-muted-foreground">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
