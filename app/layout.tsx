import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Angel Kellogg - From the Block to the Blockchain",
  description: "Empowering communities through crypto education, wealth building, and generational legacy creation.",
  keywords: [
    "Angel Kellogg",
    "cryptocurrency education",
    "blockchain technology",
    "DeFi",
    "crypto education",
    "wealth building",
    "from the block to the blockchain",
  ],
  authors: [{ name: "Angel Kellogg" }],
  creator: "Angel Kellogg",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://angelkellogg.com",
    title: "Angel Kellogg - From the Block to the Blockchain",
    description: "Empowering communities through crypto education, wealth building, and generational legacy creation.",
    siteName: "Angel Kellogg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Kellogg - From the Block to the Blockchain",
    description: "Empowering communities through crypto education, wealth building, and generational legacy creation.",
    creator: "@angelkellogg",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFD700" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
