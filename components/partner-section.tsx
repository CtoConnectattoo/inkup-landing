"use client"

import Image from "next/image"
import { ArrowRight, DollarSign, LifeBuoy, Megaphone } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function PartnerSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container px-4 mx-auto">
        {/* Hero Section */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Bienvenido,{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Partner
              </span>
            </h2>
            <h3 className="text-2xl font-semibold">Crezcamos juntos.</h3>
            <p className="text-xl text-muted-foreground">
              Ayuda a los negocios a prosperar con Inkup y gana comisiones recurrentes. Únete a nuestro programa de
              partners diseñado para profesionales del sector, creadores y agencias de crecimiento.
            </p>
            <div>
              <Button
                size="lg"
                className="h-14 px-8 text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0"
                asChild
              >
                <a href="https://inkup.getrewardful.com/signup" target="_blank" rel="noopener noreferrer">
                  Conviértete en Partner <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/design-mode/image%281%29%281%29%281%29%281%29%281%29(1).png"
              alt="Partner de Inkup"
              fill
              className="object-cover object-top"
            />
          </motion.div>
        </div>

        {/* Why Partner Section */}
        <div className="max-w-4xl mx-auto mt-24">
          <motion.h3
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Por qué ser partner de Inkup?
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="rounded-full w-16 h-16 bg-purple-100 flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Gana % de Comisiones Recurrentes</h4>
              <p className="text-muted-foreground">
                Obtén % de cada venta que refieras, durante todo el primer año. Construye una fuente de ingresos
                sostenible.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-full w-16 h-16 bg-pink-100 flex items-center justify-center mb-4">
                <Megaphone className="w-8 h-8 text-pink-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Herramientas y Contenido de Marketing</h4>
              <p className="text-muted-foreground">
                Accede a materiales promocionales listos para usar, landing pages y contenido para ayudarte a
                promocionar Inkup de manera efectiva.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="rounded-full w-16 h-16 bg-blue-100 flex items-center justify-center mb-4">
                <LifeBuoy className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Soporte Dedicado para Partners</h4>
              <p className="text-muted-foreground">
                Recibe asistencia personalizada de nuestro equipo de partners para maximizar tu éxito y resolver
                cualquier duda.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="h-14 px-8 text-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0"
              asChild
            >
              <a href="https://inkup.getrewardful.com/signup" target="_blank" rel="noopener noreferrer">
                Comienza a ganar con Inkup <ArrowRight className="ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
