"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function WhatsAppFormTestimonials() {
  const testimonials = [
    {
      quote:
        "Desde que usamos Inkup filtramos mejor los mensajes y gestionamos más rápido las citas. Los clientes llegan con toda la información que necesitamos.",
      author: "Estudio Alsurtattoo",
      avatar:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alsurtattoo.jpg-MrL6TfCLhrPHntQnIIgbBVG0GdTazx.jpeg",
      metric: "70% menos tiempo en consultas",
    },
    {
      quote: "Nos ha quitado el 80% de preguntas repetidas. Ahora solo respondemos a clientes realmente interesados.",
      author: "Barbarroja Tattoo",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pi2Q43AC5ggLhZMq6iYQCFSrw9UjVy.png",
      metric: "80% menos preguntas repetidas",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Clientes que ya están ahorrando horas cada semana
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl relative"
            >
              {/* Métrica destacada */}
              <div className="absolute -top-4 left-8 bg-[#D7277D] text-white px-4 py-2 rounded-full text-sm font-bold">
                {testimonial.metric}
              </div>

              <div className="mt-4 mb-6">
                <div className="text-4xl text-[#D7277D] mb-4">"</div>
                <p className="text-lg text-gray-700 italic leading-relaxed">{testimonial.quote}</p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black">{testimonial.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
