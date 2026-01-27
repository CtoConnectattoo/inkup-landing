"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Link from "next/link"

export function NewsletterPopup() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isAmbassadorPage = pathname?.includes("/embajador/")
  const isMatiasPage = pathname === "/matias"
  const isLandingTattooPage = pathname === "/landing-tattoo"
  const isLandingMasterclassPage = pathname === "/landing-masterclass-tattoo"
  const isBlogPage = pathname === "/blog"
  const isBlogPostPage = pathname?.startsWith("/blog/")

  const blockPopup =
    isAmbassadorPage ||
    isMatiasPage ||
    isLandingTattooPage ||
    isLandingMasterclassPage ||
    isBlogPage ||
    isBlogPostPage

  useEffect(() => {
    if (blockPopup) return

    const hasSeenPopup = localStorage.getItem("newsletter-popup-seen")
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setOpen(true)
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [blockPopup])

  const handleClose = () => {
    setOpen(false)
    localStorage.setItem("newsletter-popup-seen", "true")
  }

  // ⛔️ CORTA AQUÍ SI ES BLOG
  if (blockPopup) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg p-8 bg-white">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="absolute left-4 top-4 h-8 w-8 rounded-full p-0 hover:bg-gray-100"
        >
          <X className="h-5 w-5 text-gray-500" />
        </Button>

        <div className="space-y-6 text-center pt-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Entrenamiento gratuito!
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Nunca nos perdonaríamos que te quedaras con las manos vacías sin al menos beneficiarte de nuestro
            entrenamiento <span className="font-bold">GRATUITO</span> donde aprenderás a conseguir a ahorrar 1 hora al
            día gestionando tus citas.
          </p>

          <p className="text-lg font-semibold text-gray-900">
            ¡Solo para los 100 primeros!
          </p>

          <Link
            href="https://inkup.io/landing-masterclass-tattoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full py-6 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg shadow-lg">
              ¡QUIERO MI ENTRENAMIENTO!
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}
