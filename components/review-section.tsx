"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const reviews = [
 {
    name: "Picara Clavel",
    username: "@picaraclavel",
    text: "Ha sido un cambio del cielo a la tierra, siempre se me iba mucho tiempo entre el saludo del cliente y preguntas que se traducían en muchísimos mensajes. Me encanta!",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2XACdEuaneoY5rUNelWi9CujP7Vi1v.png",
  },
  {
    name: "Anthea",
    username: "@anthea_tattoo",
    text: "Me resulta súper cómodo tener toda la información del cliente recogida en un solo sitio.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/antheatattoo.jpg-V92wHRwAgl6kFzPPyCpwSnIE7K2Epo.jpeg",
  },
  {
    name: "Nath Rubio",
    username: "@nath.r.b",
    text: "Antes enviaba un mensaje automático con un formulario, muchas personas solo enviaban la foto y no decían nada. Inkup es excelente.",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xtg2YPTYY89CYyYBgROQsPaarN53EI.png",
  },
  {
    name: "Bravo Tattoo",
    username: "@juanmarbravo",
    text: "Solíamos dedicar tiempo a recopilar todos esos datos que con la app ya me encuentro todo listo para solo dar presupuesto y cita. Es muy útil desde luego.",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-28JHWNZfaGZplagddOcAEKHRIWoZGc.png",
  },
  {
    name: "Tik Tak Boom",
    username: "@tiktakboomtattoo",
    text: "¡Me encanta! Me ha permitido dedicar más tiempo y atención a mis clientes. Ha mejorado mi calidad de vida al reducir la carga de trabajo administrativo.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20(5).jpg-ZPfTy04Z1Ca7VGdZRYsM5zDaElZYNS.jpeg",
  },
  {
    name: "Mia Tattoo",
    username: "@mia_tattoo_gallery",
    text: "La gente no tiene que esperar tanto para conseguir un presupuesto y nos ayuda a ofrecer ese contacto de forma más humana.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20(4).jpg-okSgMrOheOCWZBikCgPzgoxrbTSO3H.jpeg",
  },
  {
    name: "Inktenza Studio",
    username: "@inktenza.studio",
    text: "Nos ayuda a llegar a nuestros clientes a través de diferentes vías como Instagram y a saber rápidamente lo que quieren y contestarlos fácil y eficientemente",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga%20(7)-1ViCYjHY3UdfX89rQBirSKaUag9Epc.png",
  },
  {
    name: "Al Sur Tattoo",
    username: "@alsurtattoo",
    text: "Me ayuda muchísimo con las citas al recibir directamente en WhatsApp toda la información. No se nos escapa ninguno sin responder.",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alsurtattoo.jpg-MrL6TfCLhrPHntQnIIgbBVG0GdTazx.jpeg",
  },
  {
    name: "Moe Tattoo",
    username: "@moetattoostudio",
    text: "Ha sido un desahogo total, sinceramente una metodología buenísima. Sin duda ha sido un descubrimiento fructífero, vaya, nos casamos con vosotros!!",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moetattoo-E5EfjzwkRa7cDYzUapzXHzHfPlERgm.png",
  },
]

export function ReviewSection() {
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
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4 mb-4">
                        <Image
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          width={48}
                          height={48}
                          className={`rounded-full object-cover ${review.name === "Bravo Tattoo" ? "bg-black" : "bg-gray-100"}`}
                        />
                        <div>
                          <h4 className="font-semibold">{review.name}</h4>
                          <p className="text-sm text-muted-foreground">{review.username}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.text}</p>
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
        aria-label="Testimonio anterior"
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
        aria-label="Siguiente testimonio"
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
              index === currentIndex ? "bg-gradient-to-r from-purple-600 to-pink-600" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir al grupo de testimonios ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
