import type React from "react"
import { projectsNavigation } from "@/lib/data/navigation"
import Link from "next/link"

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-8">
        {/* Projects Navigation */}
        <nav className="mb-8 border-b border-gold-500/20 pb-4">
          <div className="flex flex-wrap gap-6">
            {projectsNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gold-400 hover:text-gold-300 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Projects Content */}
        <main>{children}</main>
      </div>
    </div>
  )
}
