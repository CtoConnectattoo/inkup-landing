"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { CONSENT_CHANGE_EVENT, getCookieConsent, type CookieConsentValue } from "@/lib/cookie-consent"

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-5S6RZQX"

// Analítica, publicidad y afiliados: solo se cargan si el usuario ha aceptado las cookies.
export function TrackingScripts() {
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    setAccepted(getCookieConsent() === "accepted")

    const onChange = (event: Event) => {
      const value = (event as CustomEvent<CookieConsentValue>).detail
      if (value === "accepted") {
        setAccepted(true)
      } else if ("fbq" in window) {
        // Retira un consentimiento previo: los scripts ya cargados no se pueden descargar, así que recargamos.
        window.location.reload()
      }
    }
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange)
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange)
  }, [])

  if (!accepted) return null

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>

      {/* FirstPromoter: afiliados. Deja la cookie de referido en inkup.io para que hi.inkup.io la lea */}
      <Script id="firstpromoter-init" strategy="afterInteractive">
        {`(function(w){w.fpr=w.fpr||function(){w.fpr.q = w.fpr.q||[];w.fpr.q[arguments[0]=='set'?'unshift':'push'](arguments);};})(window);
fpr("init", {cid:"v4wckafv"}); fpr("click");`}
      </Script>
      <Script src="https://cdn.firstpromoter.com/fpr.js" strategy="afterInteractive" />

      {/* Google Analytics 4 */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-7V30HZHN39" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7V30HZHN39');
        `}
      </Script>

      {/* Facebook Pixel */}
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
    </>
  )
}
