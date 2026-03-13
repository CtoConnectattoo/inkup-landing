"use client"

export function WhatsAppTemplates() {
  const templates = [
    {
      title: "Tatuajes",
      text:
        "Hola, me llamo {{nombre}} y busco un {{estilo}} en {{ciudad}}. Tamaño aproximado: {{cm}}. ¿Disponibilidad esta semana?",
    },
    {
      title: "Estética",
      text:
        "Hola, soy {{nombre}}. Me interesa {{tratamiento}} en {{ciudad}}. ¿Tenéis disponibilidad esta semana? Presupuesto aproximado: {{presupuesto}} €.",
    },
    {
      title: "Psicología",
      text:
        "Hola, me llamo {{nombre}}. Busco terapia {{tipo}} en {{ciudad}}. ¿Hay huecos en las próximas 2 semanas?",
    },
    {
      title: "Restaurantes",
      text:
        "Hola, quiero reservar para {{personas}} el {{fecha}} a las {{hora}}. ¿Tienen disponibilidad? Soy {{nombre}}.",
    },
  ]

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (e) {
      console.error("Copy failed", e)
    }
  }

  return (
    <section className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Plantillas para WhatsApp (copiar y pegar)</h2>
          <p className="text-gray-700 mb-6">Usa estas plantillas como punto de partida. Modifícalas según tu negocio.</p>

          <div className="space-y-6">
            {templates.map((tpl, i) => (
              <div key={i} className="bg-gray-50 border rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-black">{tpl.title}</h3>
                  <button
                    onClick={() => copy(tpl.text)}
                    className="text-sm px-3 py-1 rounded bg-gray-900 text-white hover:bg-black"
                  >
                    Copiar
                  </button>
                </div>
                <pre className="whitespace-pre-wrap text-gray-800 text-sm">{tpl.text}</pre>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="https://hi.inkup.io/auth/signup?utm_source=post-form-wa&utm_medium=button_templates"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-white font-semibold shadow hover:opacity-95"
            >
              Usar estas plantillas con Inkup
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
