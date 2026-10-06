import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollReset } from "@/components/scroll-reset"
// Popup de entrenamiento gratuito desactivado de momento. Para reactivarlo, descomentar este import y el <NewsletterPopup /> de abajo.
// import { NewsletterPopup } from "@/components/newsletter-popup"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { CookieConsent } from "@/components/cookie-consent"
import type React from "react"
import Script from "next/script"

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
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM_ID || "GTM-5S6RZQX"}'+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || "GTM-5S6RZQX"}');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* FirstPromoter: afiliados. Deja la cookie de referido en inkup.io para que hi.inkup.io la lea */}
        <Script id="firstpromoter-init" strategy="afterInteractive">
          {`(function(w){w.fpr=w.fpr||function(){w.fpr.q = w.fpr.q||[];w.fpr.q[arguments[0]=='set'?'unshift':'push'](arguments);};})(window);
fpr("init", {cid:"v4wckafv"}); fpr("click");`}
        </Script>
        <Script src="https://cdn.firstpromoter.com/fpr.js" strategy="afterInteractive" />

        {/* Google Analytics 4 Tag */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7V30HZHN39" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7V30HZHN39');
          `}
        </Script>

        {/* Facebook Pixel with ID 751469064433408 */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '751469064433408');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=751469064433408&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Facebook Pixel */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || "GTM-5S6RZQX"}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ScrollReset />
        {children}
        {/* <NewsletterPopup /> */}
        {/* WhatsApp widget */}
        <WhatsAppWidget />
        {/* Cookie Consent component */}
        <CookieConsent />
      </body>
    </html>
  )
}
