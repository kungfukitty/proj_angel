export interface Project {
  id: string
  title: string
  description: string
  href: string
  image?: string
  status: "active" | "coming-soon" | "extension"
  category: string
}

export const projects: Project[] = [
  {
    id: "brgr-collective",
    title: "BRGR Collective",
    description: "A revolutionary platform connecting burger enthusiasts and creators in the culinary space.",
    href: "/projects/brgr-collective",
    image: "/images/projects/brgr-collective.jpg",
    status: "active",
    category: "Community Platform",
  },
  {
    id: "forever-docs",
    title: "Forever Docs",
    description: "Permanent document storage and verification system built on blockchain technology.",
    href: "/projects/forever-docs",
    image: "/images/projects/forever-docs.jpg",
    status: "extension",
    category: "Blockchain Technology",
  },
  {
    id: "from-block-to-blockchain",
    title: "From the Block to the Blockchain",
    description: "Educational platform bridging traditional communities with blockchain innovation.",
    href: "/projects/from-block-to-blockchain",
    image: "/images/projects/block-to-blockchain.jpg",
    status: "extension",
    category: "Education & Technology",
  },
]
