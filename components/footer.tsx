import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

const footerLinks = {
  content: [
    { name: "Videos", href: "/videos" },
    { name: "Podcast", href: "/podcast" },
    { name: "Blog", href: "/blog" },
  ],
  projects: [
    { name: "BRGR Collective", href: "/brgr-collective" },
    { name: "ForeverDocs", href: "/forever-docs" },
    { name: "Community", href: "/community" },
  ],
  business: [
    { name: "Partners", href: "/business-partners" },
    { name: "Events", href: "/events" },
    { name: "Media Kit", href: "/media-kit" },
    { name: "Contact", href: "/contact" },
  ],
}

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/angelkellogg" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/angelkellogg" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@angelkellogg" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/angelkellogg" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container max-w-screen-2xl px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-bold gradient-text">Angel Kellogg</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Bridging the gap between street hustle and blockchain innovation. Building wealth, community, and legacy
              in the digital age.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="sm" asChild>
                  <Link href={social.href} className="hover:text-primary">
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Content</h3>
            <ul className="space-y-3">
              {footerLinks.content.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Projects</h3>
            <ul className="space-y-3">
              {footerLinks.projects.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Business</h3>
            <ul className="space-y-3">
              {footerLinks.business.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="max-w-md">
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">Get the latest insights on crypto, business, and lifestyle.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2024 Angel Kellogg. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
