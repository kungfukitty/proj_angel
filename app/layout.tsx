import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Angel Kellogg - From the Block to the Blockchain",
  description:
    "Empowering communities through crypto education, wealth building, and generational legacy creation. Learn blockchain technology, DeFi, and digital asset strategies from street-smart perspective.",
  keywords: [
    "Angel Kellogg",
    "cryptocurrency education",
    "blockchain technology",
    "DeFi",
    "crypto education",
    "digital assets",
    "wealth building",
    "financial literacy",
    "blockchain community",
    "crypto investing",
    "from the block to the blockchain",
  ],
  authors: [{ name: "Angel Kellogg" }],
  creator: "Angel Kellogg",
  publisher: "Angel Kellogg",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://angelkellogg.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://angelkellogg.com",
    title: "Angel Kellogg - From the Block to the Blockchain",
    description:
      "Empowering communities through crypto education, wealth building, and generational legacy creation. Learn blockchain technology from a street-smart perspective.",
    siteName: "Angel Kellogg",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Angel Kellogg - Crypto Education & Blockchain Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Kellogg - From the Block to the Blockchain",
    description: "Empowering communities through crypto education, wealth building, and generational legacy creation.",
    creator: "@angelkellogg",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "education",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFD700" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`font-sans ${openSans.variable} ${workSans.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
