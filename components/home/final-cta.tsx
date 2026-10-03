"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SIGNUP_URL } from "./home-hero"

export function FinalCta() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Deja de preguntar estilo, zona y tamaño.{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Recíbelo ya escrito.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crea tu asistente en 1 minuto, pon el enlace en la bio y empieza a recibir consultas completas en tu
            WhatsApp.
          </p>
          <Button size="lg" className="h-14 text-lg px-8" asChild>
            <a href={SIGNUP_URL}>
              Crear mi asistente gratis <ArrowRight className="ml-2" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">7 días de prueba · Hoy no pagas nada · Cancela cuando quieras</p>
        </div>
      </div>
    </section>
  )
}
