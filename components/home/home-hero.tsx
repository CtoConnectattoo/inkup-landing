"use client"

import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PhoneDemo } from "./phone-demo"

export const SIGNUP_URL = "https://hi.inkup.io/auth/signup"

export function HomeHero() {
  return (
    <header className="container mx-auto px-4 pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 items-center max-w-6xl mx-auto">
        <div className="space-y-6 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
            Para artistas, estudios y piercers
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]">
            Un enlace que convierte el «¿cuánto cuesta?» en una{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              consulta completa por WhatsApp
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Tu cliente abre tu enlace y responde unas preguntas. Al enviar, se le abre WhatsApp contigo con el mensaje
            ya escrito: estilo, zona, tamaño, referencias y cuándo.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button size="lg" className="h-14 text-lg px-6" asChild>
              <a href={SIGNUP_URL}>
                Crear mi asistente gratis <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 text-lg px-6" asChild>
              <a href="#como-funciona">Ver cómo funciona</a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Listo en 1 minuto · 7 días de prueba · Nada que instalar
          </p>

          <div className="pt-2 flex flex-col items-center lg:items-start gap-2">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white shadow-sm">
                  <Image
                    src="/images/design-mode/lamujerbarbuda_N%20%281%29%281%29%281%29%281%29%281%29%281%29.png"
                    alt="La Mujer Barbuda"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain bg-white"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white shadow-sm">
                  <Image
                    src="/images/design-mode/logo%20noble%20art%281%29%281%29%281%29%281%29%281%29(1).png"
                    alt="Noble Art"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain bg-white"
                  />
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Más de 3.300 profesionales en 15 países</p>
          </div>
        </div>

        <div className="w-full">
          <PhoneDemo />
        </div>
      </div>
    </header>
  )
}
