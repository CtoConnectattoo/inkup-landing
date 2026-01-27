"use client"

import { motion } from "framer-motion"

export function SolutionsHero() {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Soluciones{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              personalizadas
            </span>{" "}
            para tu negocio
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Descubre cómo Inkup puede adaptarse a tus necesidades específicas y ayudarte a crecer, independientemente
            del tipo de negocio que tengas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
