import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Header from "@/components/elements/Header";
import Footer from "@/components/elements/Footer";

// Fonts (USC Brand Guidelines)
import { Source_Sans_3 } from "next/font/google";
import Caslon from 'next/font/local'
import { Petrona } from "next/font/google";

const source_sans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  preload: true,
})

const caslon = Caslon({
  src: 'fonts/adobe-caslon-pro.woff',
  display: 'swap',
  variable: '--font-caslon',
  preload: true,
})

const petrona = Petrona({
  subsets: ['latin'],
  variable: '--font-petrona',
  display: 'swap',
  preload: true,
})

// FontAwesome Icons
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: {
    template: '%s | USC Trojan Debate Squad',
    default: "USC Trojan Debate Squad - Championship-Winning Policy Debate Team at USC | USC Debate Team",
  },
  description: "The USC Trojan Debate Squad (TDS), USC's first chartered student organization since 1880, is one of the nation's leading collegiate debate programs. Join the USC Debate Team and be part of our championship-winning tradition.",
  keywords: ["USC", "debate", "policy debate", "Trojan Debate Squad", "USC Debate Team", "NDT", "CEDA", "collegiate debate", "Annenberg", "Los Angeles", "public speaking", "research", "critical thinking"],
  authors: [{ name: "USC Trojan Debate Squad" }],
  creator: "USC Trojan Debate Squad",
  publisher: "USC Annenberg School for Communication & Journalism",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://uscdebate.com'),
  alternates: {
    canonical: 'https://uscdebate.com/',
  },
  openGraph: {
    title: "USC Trojan Debate Squad | USC Debate Team",
    description: "Join the USC Trojan Debate Squad, USC's official debate team since 1880. Compete nationally, develop public speaking and research skills, and be part of a 145-year tradition of excellence.",
    url: 'https://uscdebate.com',
    siteName: 'USC Trojan Debate Squad',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "USC Trojan Debate Squad | USC Debate Team",
    description: "Join the USC Trojan Debate Squad, USC's official debate team since 1880. Compete nationally, develop public speaking and research skills, and be part of a 145-year tradition of excellence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${source_sans.variable} ${caslon.variable} ${petrona.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "USC Trojan Debate Squad",
          "url": "https://uscdebate.com",
          "logo": "https://uscdebate.com/favicon.ico",
          "sameAs": [
            "https://www.instagram.com/usctrojandebate/"
          ],
          "description": "USC Trojan Debate Squad is the official USC Debate Team, a championship-winning collegiate debate program since 1880."
        }` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://uscdebate.com",
          "name": "USC Trojan Debate Squad",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://uscdebate.com/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }` }} />
      </head>
      <body className="antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Analytics />
        <Footer />  
      </body>
    </html>
  );
}
