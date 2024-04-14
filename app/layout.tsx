import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import Caslon from 'next/font/local'
import "./globals.css";

// Fonts (USC Brand Guidelines)
const inter = Inter({ subsets: ["latin"] });

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

export const metadata: Metadata = {
  title: "USC Debate",
  description: "Please fill this out",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={source_sans.className}>{children}</body>
    </html>
  );
}
