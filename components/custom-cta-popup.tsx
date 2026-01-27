"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X, Copy, ExternalLink, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface CustomCTAPopupProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CustomCTAPopup({ open, onOpenChange }: CustomCTAPopupProps) {
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText("MATIAS")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
        <div className="flex justify-end p-4 pb-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onOpenChange(false)}
            className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="px-8 pb-8">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">¡Tu código exclusivo está listo!</h2>

          <p className="text-center text-gray-600 mb-8 leading-relaxed">
            Copia el código MATIAS y úsalo al registrarte en Inkup para obtener tu descuento del 20%
          </p>

          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-3 text-center">Código promocional</p>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 flex items-center justify-between">
              <span className="text-2xl font-bold text-purple-600 tracking-wider">MATIAS</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyCode}
                className="text-purple-600 hover:text-purple-700 hover:bg-purple-100"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <Check className="h-3 w-3 text-white" />
              </div>
              <span className="text-gray-700">20% de descuento en cualquier plan</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <Check className="h-3 w-3 text-white" />
              </div>
              <span className="text-gray-700">Configuración personalizada incluida</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <Check className="h-3 w-3 text-white" />
              </div>
              <span className="text-gray-700">Soporte prioritario</span>
            </div>
          </div>

          <Button
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-base font-medium rounded-lg"
            onClick={() => window.open("https://inkup.io", "_blank")}
          >
            Registrarse en Inkup
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>

          <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
            Aplica el código durante el proceso de registro para activar tu descuento
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
