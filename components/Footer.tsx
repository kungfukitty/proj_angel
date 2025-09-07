import Link from "next/link"

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
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
    { name: "Join", href: "/join" },
  ],
}

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
          </div>
        </div>
      </div>
    </footer>
  )
}
