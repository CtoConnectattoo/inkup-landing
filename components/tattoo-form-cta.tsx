"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function TattooFormCTA() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Crear mi formulario para tatuajes</h2>
          <p className="text-xl text-gray-300 mb-8">
            Configura tu formulario en minutos y empieza a recibir solicitudes organizadas directamente en WhatsApp.
          </p>

          <Button
            size="lg"
            className="h-14 px-8 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
            asChild
          >
            <a href="https://hi.inkup.io/auth/signup" target="_blank" rel="noopener noreferrer">
              Crear mi formulario para tatuajes <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>

          <div className="mt-6 text-sm text-gray-400">
            Sin tarjeta de crédito • Listo para compartir al registrarte • Soporte incluido
          </div>
        </motion.div>
      </div>
    </section>
  )
}
