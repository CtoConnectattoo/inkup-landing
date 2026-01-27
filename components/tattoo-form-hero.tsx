"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export function TattooFormHero() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black">
                ¿Tatúas?
                <br />
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent">
                  Crea tu formulario a Whatsapp
                </span>{" "}
                en 1 minuto
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700">
                Tu asistente inteligente para filtrar clientes por estilo, zona y presupuesto
              </h2>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="w-full h-14 text-lg bg-[#25D366] hover:bg-[#20BA5A] text-white" asChild>
                <a href="https://hi.inkup.io/auth/signup" target="_blank" rel="noopener noreferrer">
                  📱 Crear mi asistente para tatuajes
                </a>
              </Button>
            </div>

            <p className="text-sm text-gray-500 text-center">
              Sin tarjeta de crédito. Listo para compartir al registrarte.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex flex-col md:flex-row justify-center items-center gap-8"
          >
            {/* Asistente virtual existente */}
            <div className="relative">
              <Image
                src="/images/design-mode/image%281%29%281%29%281%29%281%29%281%29(1).png"
                alt="Formulario para tatuadores en acción"
                width={280}
                height={560}
                className="rounded-2xl shadow-2xl"
              />

              {/* Texto "Así se ve tu formulario" - visible en mobile */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 md:hidden">
                <div className="bg-[#D7277D] text-white px-3 py-2 rounded-lg text-sm font-medium text-center">
                  ¡Así se ve tu formulario!
                </div>
              </div>

              {/* Flecha apuntando al formulario - solo desktop */}
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <div className="flex items-center gap-2">
                  <div className="bg-[#D7277D] text-white px-3 py-2 rounded-lg text-sm font-medium">
                    ¡Así se ve tu formulario!
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#D7277D]" />
                </div>
              </div>
            </div>

            {/* Nueva imagen de conversación WhatsApp */}
            <div className="relative">
              <div className="bg-[#E5DDD5] rounded-2xl shadow-2xl w-64 h-96 overflow-hidden relative">
                {/* Header de WhatsApp */}
                <div className="bg-[#075E54] text-white pt-6 pb-2 px-3 flex items-center gap-2">
                  <div className="flex items-center gap-3 w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                      <span className="text-xs font-bold text-gray-600">MC</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Maria Cliente</p>
                      <p className="text-xs opacity-75">en línea</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-phone"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                </div>

                {/* Fondo de chat */}
                <div className="h-full bg-[#E5DDD5] bg-opacity-90 p-3 pt-2 flex flex-col">
                  {/* Mensaje de WhatsApp */}
                  <div className="space-y-2 flex-1">
                    <div className="bg-white rounded-lg p-2 max-w-[85%] shadow-sm">
                      <p className="text-sm text-gray-800 leading-relaxed">
                        Hola, quiero hacerme un tatuaje:
                        <br />
                        <br />
                        <strong>Estilo:</strong> Realismo
                        <br />
                        <strong>Zona:</strong> Antebrazo
                        <br />
                        <strong>Tamaño:</strong> 15x10 cm
                        <br />
                        <strong>Presupuesto:</strong> 200-300€
                        <br />
                        <strong>Disponibilidad:</strong> Tardes
                      </p>
                      <div className="flex justify-end items-center gap-1 mt-1">
                        <p className="text-[10px] text-gray-500">12:34</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="#34B7F1"
                          stroke="#34B7F1"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check-check"
                        >
                          <path d="M18 6 7 17l-5-5" />
                          <path d="m22 10-7.5 7.5L13 16" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Input de mensaje */}
                  <div className="mt-auto flex items-center gap-2 bg-[#F0F0F0] rounded-full p-1 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#8696A0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-smile"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1="9" x2="9.01" y1="9" y2="9" />
                      <line x1="15" x2="15.01" y1="9" y2="9" />
                    </svg>
                    <input type="text" placeholder="Mensaje" className="bg-transparent text-sm flex-1 outline-none" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#8696A0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-mic"
                    >
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" x2="12" y1="19" y2="22" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Texto "Así te llega" - visible en mobile */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 md:hidden">
                <div className="bg-[#25D366] text-white px-3 py-2 rounded-lg text-sm font-medium text-center">
                  Así te llega
                </div>
              </div>

              {/* Flecha "Así te llega" - solo desktop */}
              <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 hidden xl:block">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-6 h-6 text-[#25D366]" />
                  <div className="bg-[#25D366] text-white px-3 py-2 rounded-lg text-sm font-medium">Así te llega</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
