import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollReset } from "@/components/scroll-reset"
// Popup de entrenamiento gratuito desactivado de momento. Para reactivarlo, descomentar este import y el <NewsletterPopup /> de abajo.
// import { NewsletterPopup } from "@/components/newsletter-popup"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { CookieConsent } from "@/components/cookie-consent"
import { TrackingScripts } from "@/components/tracking-scripts"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Inkup - Consultas completas en tu WhatsApp",
  description:
    "Un enlace para artistas, estudios y piercers: tu cliente responde unas preguntas y se le abre WhatsApp contigo con el mensaje ya escrito. Estilo, zona, tamaño, referencias y cuándo, en un solo mensaje.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: { url: "/favicon.png", type: "image/png" },
    shortcut: { url: "/favicon.png", type: "image/png" },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ScrollReset />
        {children}
        {/* <NewsletterPopup /> */}
        {/* WhatsApp widget */}
        <WhatsAppWidget />
        {/* Cookie Consent component */}
        <CookieConsent />
        <TrackingScripts />
      </body>
    </html>
  )
}
