"use client"

import { ArrowRight, BookOpen, Mail, Newspaper, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"

export function ResourcesSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recursos para crecer tu negocio</h2>
          <p className="text-xl text-muted-foreground">
            Descubre contenido exclusivo para ayudarte a optimizar tu trabajo y aumentar tus ingresos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden border-2 hover:border-purple-300 transition-all">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                  <Newspaper className="w-10 h-10 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Newsletter Inkup</h3>
                  <p className="mb-4">
                    Recibe en tu email consejos prácticos, casos de éxito y las últimas tendencias en marketing para
                    profesionales.
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Estrategias de captación de clientes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Casos de éxito de otros profesionales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Herramientas y recursos gratuitos</span>
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
                    Aprende a maximizar el potencial de tu negocio con nuestras guías paso a paso y tutoriales
                    detallados.
                  </p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Optimización de flujos de trabajo</span>
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
                  <Button className="w-full bg-transparent" variant="outline" asChild>
                    <Link href="/blog">
                      Explorar recursos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full overflow-hidden border-2 hover:border-purple-300 transition-all">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-6 text-white">
                  <GraduationCap className="w-10 h-10 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Entrenamiento Gratuito</h3>
                  <p className="mb-4">Aprende a ahorrar más de 1 hora cada día gestionando tus citas paso a paso</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Estrategias de captación con IA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Estrategia paso a paso.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Método probado con más de 3.000 profesionales</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0" asChild>
                    <a href="https://inkup.io/landing-masterclass-tattoo" target="_blank" rel="noopener noreferrer">
                      Ver entrenamiento <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">¿Tienes alguna pregunta o necesitas ayuda personalizada?</p>
          <Button variant="outline" className="gap-2 bg-transparent" asChild>
            <a href="mailto:info@inkup.io">
              <Mail className="h-4 w-4" /> Contáctanos
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
