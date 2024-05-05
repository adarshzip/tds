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
})

const caslon = Caslon({
  src: 'fonts/adobe-caslon-pro.woff',
  display: 'auto',
  variable: '--font-caslon',
})

const petrona = Petrona({
  subsets: ['latin'],
  variable: '--font-petrona',
})

// FontAwesome Icons
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export const metadata = {
  title: {
    template: '%s | USC Debate',
    default: "USC Debate",
  },
  icon: '/favicon.ico'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${source_sans.variable} ${caslon.variable} ${petrona.variable}`}>
      <body>
        <Header />
        {children}
        <Analytics />
        <Footer />  
      </body>
    </html>
  );
}
