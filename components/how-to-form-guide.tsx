"use client"

import { motion } from "framer-motion"
import { CheckCircle, X, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HowToFormGuide() {
  const sectors = [
    { emoji: "💅", label: "Uñas y nail art" },
    { emoji: "✂️", label: "Peluquería y coloración" },
    { emoji: "💇", label: "Extensiones de pelo" },
    { emoji: "🦋", label: "Micropigmentación y microblading" },
    { emoji: "💉", label: "Eliminación de tatuajes" },
    { emoji: "🪡", label: "Piercing" },
    { emoji: "🌿", label: "Estética y tratamientos faciales" },
    { emoji: "🦷", label: "Odontología estética" },
    { emoji: "🐾", label: "Peluquería canina" },
    { emoji: "🏋️", label: "Entrenamiento personal" },
  ]

  const options = [
    {
      label: "Opción A",
      title: "Google Forms + enlace a WhatsApp",
      description:
        "Creas un formulario en Google Forms, lo compartes, y cuando alguien lo rellena recibes un email. Luego tú escribes al cliente por WhatsApp.",
      pros: ["100% gratuito", "Sin registro especial"],
      cons: [
        "El cliente rellena el formulario y luego espera a que tú le escribas — dos pasos",
        "Muchos abandonan antes de terminar",
        "Tú recibes un email, no un WhatsApp — hay que hacer el traslado manual",
        "No hay continuidad en la conversación",
      ],
      fit: "Tiene sentido si recibes muy pocas consultas y no te importa el tiempo extra de gestión.",
      highlight: false,
    },
    {
      label: "Opción B",
      title: "Enlace wa.me con mensaje pregenerado",
      description:
        "Creas un enlace tipo wa.me/34600000000?text=Hola,%20me%20interesa... con el texto ya escrito. El cliente lo abre, ve el mensaje pregenerado en WhatsApp y lo envía.",
      pros: ["Gratuito", "Va directo a WhatsApp sin pasos extra"],
      cons: [
        "El texto pregenerado es el mismo para todo el mundo — sin personalización",
        "No puedes pedir campos específicos (zona, servicio, disponibilidad)",
        "El cliente puede editar o borrar el mensaje antes de enviarlo",
        "Poco profesional visualmente",
      ],
      fit: "Tiene sentido como solución temporal si aún no tienes nada. Funciona, pero tiene techo.",
      highlight: false,
    },
    {
      label: "Opción C",
      title: "Herramienta específica (como Inkup)",
      description:
        "El cliente pasa por un flujo conversacional corto (3-5 preguntas) diseñado para tu servicio. Al terminar, se abre WhatsApp con un mensaje estructurado con toda su información.",
      pros: [
        "El cliente responde preguntas específicas de tu servicio",
        "Tú recibes el mensaje organizado en WhatsApp",
        "Sin email, sin pasos extra, sin pérdida de contexto",
        "Sin necesidad de web ni de programar",
        "Empieza gratis (20 consultas/mes sin tarjeta)",
      ],
      cons: ["Requiere unos minutos de configuración inicial"],
      fit: "Tiene sentido si recibes consultas frecuentes y quieres llegar a cada cliente ya con contexto.",
      highlight: true,
    },
  ]

  const tools = [
    {
      name: "Inkup",
      pros: [
        "Sin fricción para el cliente",
        "Conecta directo a WhatsApp",
        "Sin necesidad de web",
        "Gratis para empezar (20 consultas/mes)",
      ],
      cons: [],
      recommended: true,
    },
    {
      name: "Google Forms",
      pros: ["Gratuito", "Fácil de usar"],
      cons: [
        "No conecta directo a WhatsApp",
        "El cliente rellena y luego espera que le escribas",
        "Más pasos = más abandonos",
      ],
      recommended: false,
    },
    {
      name: "Typeform",
      pros: ["Diseño atractivo", "Experiencia fluida"],
      cons: ["De pago en planes útiles", "No conecta directo a WhatsApp", "Requiere pasos adicionales"],
      recommended: false,
    },
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* ¿Qué es un formulario conectado a WhatsApp? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              ¿Qué es exactamente un formulario de WhatsApp?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Un formulario de WhatsApp es un flujo de preguntas corto que tu cliente rellena antes de contactarte.
                Al terminar, esas respuestas se envían automáticamente a tu WhatsApp como un mensaje estructurado — con
                nombre, servicio, zona, disponibilidad o lo que tú hayas configurado.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                En lugar de recibir <em className="text-gray-500">"Hola"</em> o <em className="text-gray-500">"¿cuánto cuesta?"</em>,
                recibes algo como:
              </p>
              {/* Before / After */}
              <div className="grid md:grid-cols-2 gap-4 not-prose mb-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <p className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-3">Sin formulario</p>
                  <div className="bg-white rounded-lg p-3 shadow-sm text-sm text-gray-700 leading-relaxed">
                    <p className="font-medium">María C. — 10:14</p>
                    <p className="mt-1 text-gray-500">Hola, ¿cuánto cuesta?</p>
                  </div>
                  <p className="text-xs text-red-500 mt-3">→ Tienes que preguntar zona, tamaño, disponibilidad... uno a uno.</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <p className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-3">Con formulario</p>
                  <div className="bg-white rounded-lg p-3 shadow-sm text-sm text-gray-700 leading-relaxed">
                    <p className="font-medium">María C. — 10:14</p>
                    <p className="mt-1">
                      Hola, soy María y me interesa lo siguiente:<br />
                      <strong>Servicio:</strong> Extensiones de pelo<br />
                      <strong>Largo:</strong> Hasta los hombros<br />
                      <strong>Disponibilidad:</strong> Tardes entre semana
                    </p>
                  </div>
                  <p className="text-xs text-green-600 mt-3">→ Puedes responder con contexto desde el primer mensaje.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ¿Para qué sectores tiene sentido? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              ¿Para qué negocios tiene sentido?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Si ofreces servicios donde el cliente necesita darte información antes de que puedas responderle bien, un formulario te ahorra muchas idas y vueltas. Funciona especialmente bien en:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {sectors.map((s, i) => (
                <div key={i} className="bg-white border rounded-xl p-3 flex flex-col items-center text-center gap-1 shadow-sm">
                  <span className="text-2xl">{s.emoji}</span>
                  <span className="text-xs font-medium text-gray-700 leading-tight">{s.label}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-4">
              En general: cualquier servicio donde el precio o la disponibilidad depende de variables que el cliente debe darte primero.
            </p>
          </motion.div>

          {/* Las 3 formas reales de hacerlo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              Las 3 formas reales de hacerlo (con honestidad)
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              No todas las opciones son iguales. Aquí te explicamos cada una sin filtros para que puedas elegir la que mejor encaja contigo:
            </p>
            <div className="space-y-6">
              {options.map((opt, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-xl border-2 p-6 ${opt.highlight ? "border-[#D7277D] shadow-md" : "border-gray-200"}`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{opt.label}</span>
                      <h3 className="text-xl font-bold text-black mt-0.5">{opt.title}</h3>
                    </div>
                    {opt.highlight && (
                      <span className="shrink-0 bg-[#D7277D] text-white text-xs font-bold px-3 py-1 rounded-full">
                        Más completo
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4">{opt.description}</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-2">✓ A favor</p>
                      <ul className="space-y-1">
                        {opt.pros.map((p, j) => (
                          <li key={j} className="text-sm text-gray-700 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {opt.cons.length > 0 && (
                      <div>
                        <p className="text-sm font-semibold text-red-500 mb-2">✗ En contra</p>
                        <ul className="space-y-1">
                          {opt.cons.map((c, j) => (
                            <li key={j} className="text-sm text-gray-700 flex items-start gap-2">
                              <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="bg-gray-50 rounded-lg px-4 py-2 text-sm text-gray-600 italic border-l-4 border-gray-300">
                    {opt.fit}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Comparativa rápida */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
              Comparativa rápida
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="text-left p-4 font-semibold">Herramienta</th>
                    <th className="text-center p-4 font-semibold">Llega directo a WhatsApp</th>
                    <th className="text-center p-4 font-semibold">Campos personalizados</th>
                    <th className="text-center p-4 font-semibold">Sin web</th>
                    <th className="text-center p-4 font-semibold">Gratis</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Google Forms", wa: false, custom: true, noweb: false, free: true },
                    { name: "wa.me link", wa: true, custom: false, noweb: true, free: true },
                    { name: "Typeform", wa: false, custom: true, noweb: false, free: false },
                    { name: "Inkup", wa: true, custom: true, noweb: true, free: true, highlight: true },
                  ].map((row, i) => (
                    <tr key={i} className={`border-t ${row.highlight ? "bg-pink-50 font-semibold" : ""}`}>
                      <td className="p-4 text-gray-800">{row.name}{row.highlight && <span className="ml-2 text-xs bg-[#D7277D] text-white px-2 py-0.5 rounded-full">recomendado</span>}</td>
                      <td className="p-4 text-center">{row.wa ? "✅" : "❌"}</td>
                      <td className="p-4 text-center">{row.custom ? "✅" : "❌"}</td>
                      <td className="p-4 text-center">{row.noweb ? "✅" : "❌"}</td>
                      <td className="p-4 text-center">{row.free ? "✅" : "❌"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* CTA interno */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-xl text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Quieres ver cómo queda el tuyo?</h2>
            <p className="text-lg mb-6 opacity-90">
              Crea tu asistente en menos de 5 minutos. Sin tarjeta, sin código, sin web. Las primeras 20 consultas son gratis.
            </p>
            <Link
              href="/crear-formulario-whatsapp"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Crear mi formulario ahora <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
