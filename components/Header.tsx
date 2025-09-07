"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Content", href: "/content" },
  { name: "Videos", href: "/videos" },
  { name: "Podcast", href: "/podcast" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-3 group">
          <span className="font-serif text-xl md:text-2xl font-bold gradient-text">Angel Kellogg</span>
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
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="/join"
            className="rounded-xl px-6 py-2 font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #ffd700 0%, #ffa500 100%) !important",
              color: "#000000 !important",
              boxShadow: "0 4px 16px rgba(255, 215, 0, 0.3)",
            }}
          >
            Join
          </Link>
        </div>

        {/* Mobile Navigation */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden bg-background/95 backdrop-blur-xl border-b border-border/20">
            <nav className="flex flex-col space-y-4 p-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium transition-colors duration-300 hover:text-primary py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/join"
                className="w-full py-3 font-semibold text-center mt-4 rounded-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #ffd700 0%, #ffa500 100%) !important",
                  color: "#000000 !important",
                  boxShadow: "0 4px 16px rgba(255, 215, 0, 0.3)",
                }}
                onClick={() => setIsOpen(false)}
              >
                Join
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
