import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-24 bg-background">
        <div className="container max-w-4xl px-4">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Terms</span> of Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>

          <div className="luxury-card p-8 md:p-12 space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">Educational Content</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The content provided on this website is for educational and informational purposes only. It should not
                be considered as financial advice. Cryptocurrency investments carry significant risk, and you should
                conduct your own research before making any investment decisions.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use our services only for lawful purposes and in accordance with these terms. You agree not
                to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Transmit any harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Harass, abuse, or harm other users</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on this website, including text, graphics, logos, and images, is the property of Angel
                Kellogg and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The information on this website is provided on an "as is" basis. We make no warranties, expressed or
                implied, and hereby disclaim all other warranties including implied warranties of merchantability,
                fitness for a particular purpose, or non-infringement.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting to the website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold mb-4 text-primary">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us through our{" "}
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
