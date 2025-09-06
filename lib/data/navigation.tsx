import Link from "next/link"

export const mainNavigation = [
  { name: "About", href: "/about" },
  { name: "Content", href: "/content" },
  { name: "Projects", href: "/projects" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" },
  { name: "Join", href: "/join" },
]

export const contentNavigation = [
  { name: "All Content", href: "/content" },
  { name: "Blog", href: "/blog" },
  { name: "Videos", href: "/videos" },
  { name: "Podcast", href: "/podcast" },
  { name: "Media Kit", href: "/media-kit" },
]

export const projectsNavigation = [
  { name: "All Projects", href: "/projects" },
  { name: "BRGR Collective", href: "/brgr-collective" },
  { name: "Forever Docs", href: "/forever-docs" },
  { name: "Block to Blockchain", href: "/from-the-block-to-the-blockchain" },
]

export function ContentNavigation() {
  return (
    <nav className="space-y-2">
      <h3 className="text-gold-400 font-semibold mb-4">Content</h3>
      {contentNavigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block text-gray-300 hover:text-gold-400 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-800/50"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

export function ProjectsNavigation() {
  return (
    <nav className="space-y-2">
      <h3 className="text-gold-400 font-semibold mb-4">Projects</h3>
      {projectsNavigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block text-gray-300 hover:text-gold-400 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-800/50"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
