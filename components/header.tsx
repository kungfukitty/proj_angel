"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navigation = [
  { name: "Content", href: "/content" },
  { name: "Videos", href: "/videos" },
  { name: "Podcast", href: "/podcast" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Community", href: "/community" },
]

const moreNavigation = [
  { name: "BRGR Collective", href: "/brgr-collective" },
  { name: "Forever Docs", href: "/forever-docs" },
  { name: "Business Partners", href: "/business-partners" },
  { name: "Events", href: "/events" },
  { name: "Media Kit", href: "/media-kit" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-3 group">
          <span className="font-serif text-xl md:text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
            Angel Kellogg
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition-all duration-300 hover:text-primary relative group py-2"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <div className="relative group">
            <button className="transition-colors duration-300 hover:text-primary py-2 font-medium">More</button>
            <div className="absolute top-full left-0 mt-2 w-56 luxury-card rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="p-3">
                {moreNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-sm rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/join"
            className="inline-flex items-center justify-center rounded-xl px-6 py-2 font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #ffd700 0%, #ffa500 100%)",
              color: "#000000",
              boxShadow: "0 4px 16px rgba(255, 215, 0, 0.3)",
            }}
          >
            Join
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm" className="hover:bg-primary/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] luxury-card border-l border-primary/20">
            <div className="flex flex-col space-y-6 mt-12">
              {[...navigation, ...moreNavigation].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium transition-colors duration-300 hover:text-primary py-2 border-b border-border/20 hover:border-primary/30"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-border/20">
                <Link
                  href="/join"
                  className="inline-flex items-center justify-center w-full py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #ffd700 0%, #ffa500 100%)",
                    color: "#000000",
                    boxShadow: "0 4px 16px rgba(255, 215, 0, 0.3)",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  Join
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
