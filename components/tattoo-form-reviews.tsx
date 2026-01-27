"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const reviews = [
  {
    name: "Nath Rubio",
    username: "@nath.r.b",
    text: "Antes enviaba un mensaje automático con un formulario, muchas personas solo enviaban la foto y no decían nada. Inkup es excelente.",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xtg2YPTYY89CYyYBgROQsPaarN53EI.png",
    metric: "90% menos preguntas incompletas",
  },
  {
    name: "Bravo Tattoo",
    username: "@juanmarbravo",
    text: "Solíamos dedicar tiempo a recopilar todos esos datos que con la app ya me encuentro todo listo para solo dar presupuesto y cita. Es muy útil desde luego.",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-28JHWNZfaGZplagddOcAEKHRIWoZGc.png",
    metric: "70% menos tiempo en consultas",
  },
  {
    name: "Picara Clavel",
    username: "@picaraclavel",
    text: "Ha sido un cambio del cielo a la tierra, siempre se me iba mucho tiempo entre el saludo del cliente y preguntas que se traducían en muchísimos mensajes. Me encanta!",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2XACdEuaneoY5rUNelWi9CujP7Vi1v.png",
    metric: "80% menos mensajes repetitivos",
  },
]

export function TattooFormReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = Math.ceil(reviews.length / itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Más de 3.000 profesionales ya confían en Inkup
          </h2>
          <p className="text-xl text-gray-600">
            Descubre cómo otros profesionales han transformado su forma de gestionar consultas
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
                width: `${totalSlides * 100}%`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="flex gap-6" style={{ width: `${100 / totalSlides}%` }}>
                  {reviews.slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView).map((review, index) => (
                    <motion.div
                      key={slideIndex * itemsPerView + index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex-1"
                    >
                      <Card className="h-full bg-white border-2 hover:border-purple-300 transition-all">
                        <CardContent className="p-6">
                          {/* Métrica destacada */}
                          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 text-center">
                            {review.metric}
                          </div>

                          <div className="mb-6">
                            <div className="text-4xl text-purple-600 mb-4">"</div>
                            <p className="text-lg text-gray-700 italic leading-relaxed">{review.text}</p>
                          </div>

                          <div className="flex items-center gap-4">
                            <Image
                              src={review.avatar || "/placeholder.svg"}
                              alt={review.name}
                              width={48}
                              height={48}
                              className="rounded-full object-cover"
                            />
                            <div>
                              <p className="font-semibold text-black">{review.name}</p>
                              <p className="text-sm text-gray-600">{review.username}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
            aria-label="Reseña anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow z-10"
            aria-label="Siguiente reseña"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* Dots/Bullets Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-600 to-pink-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir al grupo de reseñas ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
