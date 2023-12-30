import "@fortawesome/fontawesome-svg-core/styles.css";
import "animate.css/animate.min.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import "./globals.css";
import Nav from "./components/Navbar";
import FooterWithSocialLinks from "./components/Footer";
import { Inter } from "next/font/google";
// import { AuthProvider } from "./provider";
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "A.TO.Z",
  description: "Generated by M_AbuHamida",}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
    <body className={`${inter.className} overflow-x-hidden`}>
      <main className="">
        
        <Nav /> {children}
        <FooterWithSocialLinks />
      </main>
    </body>
  </html>
  )
}
