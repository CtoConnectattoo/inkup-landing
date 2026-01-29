"use client"

import Image from "next/image"
import { useCallback, useMemo, useState } from "react"

type ShareButtonsProps = {
  title: string
  shareUrl: string
}

const COPY_RESET_MS = 2000

export function ShareButtons({ title, shareUrl }: ShareButtonsProps) {
  const [hasCopied, setHasCopied] = useState(false)

  const shareText = useMemo(() => `${title} - Inkup`, [title])
  const encodedUrl = useMemo(() => encodeURIComponent(shareUrl), [shareUrl])
  const encodedText = useMemo(() => encodeURIComponent(shareText), [shareText])

  const shareLinks = useMemo(
    () => [
      {
        label: "WhatsApp",
        href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
        iconSrc: "/icons/whatsapp.png",
      },
      {
        label: "X",
        href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
        iconSrc: "/icons/x.png",
      },
      {
        label: "LinkedIn",
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        iconSrc: "/icons/linkedin.png",
      },
      {
        label: "Facebook",
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        iconSrc: "/icons/facebook.png",
      },
    ],
    [encodedText, encodedUrl]
  )

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setHasCopied(true)
      window.setTimeout(() => setHasCopied(false), COPY_RESET_MS)
    } catch (error) {
      console.error("No se pudo copiar el enlace del artículo.", error)
    }
  }, [shareUrl])

  if (!shareUrl) {
    return null
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-gray-700">Compartir:</span>
      <div className="flex flex-wrap items-center gap-3">
        {shareLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Compartir en ${link.label}`}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <Image src={link.iconSrc} alt={link.label} width={18} height={18} />
          </a>
        ))}
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
        aria-live="polite"
      >
        {hasCopied ? "Enlace copiado" : "Copiar enlace"}
      </button>
    </div>
  )
}
