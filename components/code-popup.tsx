"use client"

import { useState } from "react"
import { Copy, Check, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface CodePopupProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CodePopup({ open, onOpenChange }: CodePopupProps) {
  const [copied, setCopied] = useState(false)
  const code = "MATIAS"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">¡Tu código exclusivo está listo!</DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Copia el código MATIAS y úsalo al registrarte en Inkup para obtener tu descuento del 20%
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center justify-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-2 border-dashed border-purple-200">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Código promocional</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-purple-600 tracking-wider">{code}</span>
                <Button variant="ghost" size="sm" onClick={copyToClipboard} className="h-8 w-8 p-0">
                  {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              {copied && <p className="text-xs text-green-600 mt-1">¡Código copiado!</p>}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span>20% de descuento en cualquier plan</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span>Configuración personalizada incluida</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span>Soporte prioritario</span>
            </div>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            asChild
          >
            <a
              href="https://hi.inkup.io/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              Registrarse en Inkup
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>

          <p className="text-xs text-center text-gray-500">
            Aplica el código durante el proceso de registro para activar tu descuento
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
