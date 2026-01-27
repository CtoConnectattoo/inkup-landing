"use client"

import { ArrowRight, BookOpen, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"

export function TattooFormResources() {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Recursos gratuitos para hacer crecer tu negocio de tatuajes
          </h2>
          <p className="text-xl text-gray-600">
            Descubre contenido exclusivo para tatuadores que quieren optimizar su trabajo y aumentar sus ingresos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden border-2 hover:border-purple-300 transition-all">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                  <Mail className="w-10 h-10 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Newsletter para Tatuadores</h3>
                  <p className="mb-4">
                    Recibe consejos prácticos, casos de éxito de otros tatuadores y las últimas tendencias en marketing
                    para profesionales del tatuaje.
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Estrategias para captar más clientes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Casos de éxito de tatuadores reales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Herramientas gratuitas para tu estudio</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0" asChild>
                    <a href="https://substack.com/@inkup?utm_source=inkup" target="_blank" rel="noopener noreferrer">
                      Suscríbete gratis <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden border-2 hover:border-purple-300 transition-all">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <BookOpen className="w-10 h-10 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Guías y Tutoriales</h3>
                  <p className="mb-4">
                    Aprende a maximizar el potencial de tu negocio de tatuajes con nuestras guías paso a paso y
                    tutoriales detallados.
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Optimización de consultas y citas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Mejora de la experiencia del cliente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Automatización de procesos</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/recursos">
                      Explorar recursos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">¿Tienes alguna pregunta específica sobre tu negocio de tatuajes?</p>
          <Button variant="outline" className="gap-2" asChild>
            <a href="mailto:info@inkup.io">
              <Mail className="h-4 w-4" /> Contáctanos
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
