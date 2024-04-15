import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/elements/Header";

// Fonts (USC Brand Guidelines)
import { Source_Sans_3 } from "next/font/google";
import Caslon from 'next/font/local'
const source_sans = Source_Sans_3({
  weight: ['400', '300', '200', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans',
})

const caslon = Caslon({
  src: 'fonts/adobe-caslon-pro.woff',
  display: 'swap',
  variable: '--font-caslon'
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
    <html lang="en">
      <body className={source_sans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
