"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface Feature {
  title: string
  description: string
}

interface Benefit {
  text: string
}

interface SolutionTemplateProps {
  title: string
  subtitle: string
  description: string
  imageSrc: string
  features: Feature[]
  benefits: Benefit[]
  ctaText?: string
  ctaLink?: string
  testimonial?: {
    quote: string
    author: string
    role: string
    avatarSrc?: string
  }
}

export function SolutionTemplate({
  title,
  subtitle,
  description,
  imageSrc,
  features,
  benefits,
  ctaText = "Empieza gratis ahora",
  ctaLink = "https://hi.inkup.io/auth/signup",
  testimonial,
}: SolutionTemplateProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                {title}{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {subtitle}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">{description}</p>
              <Button size="lg" className="h-14 px-8 text-lg" asChild>
                <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                  {ctaText} <ArrowRight className="ml-2" />
                </a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl"
            >
              <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Características principales</h2>
            <p className="text-xl text-muted-foreground">
              Descubre cómo Inkup puede transformar tu negocio con estas funcionalidades especializadas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Beneficios</h2>
            <p className="text-xl text-muted-foreground">
              Estas son las ventajas que obtendrás al implementar Inkup en tu negocio
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span>{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section (if provided) */}
      {testimonial && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 text-4xl text-purple-600">"</div>
                <p className="text-xl mb-8 text-gray-700 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  {testimonial.avatarSrc && (
                    <div className="mr-4">
                      <Image
                        src={testimonial.avatarSrc || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comienza a transformar tu negocio{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                hoy mismo
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Prueba Inkup gratis y descubre cómo puede ayudarte a crecer
            </p>
            <Button size="lg" className="h-14 px-8 text-lg" asChild>
              <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                {ctaText} <ArrowRight className="ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
