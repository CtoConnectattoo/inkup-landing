type QuickAnswerProps = {
  summaryBullets: string[]
  oneLineDefinition: string
  learnMoreHref?: string
}

export function QuickAnswer({ summaryBullets, oneLineDefinition, learnMoreHref = "#como-hacerlo" }: QuickAnswerProps) {
  if (!summaryBullets.length || !oneLineDefinition) {
    return null
  }

  return (
    <section className="bg-purple-50 border border-purple-100 rounded-2xl p-6 md:p-8 mb-10">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-black">Respuesta rapida</h2>
        <a href={learnMoreHref} className="text-sm font-semibold text-purple-700 hover:text-purple-900">
          Leer mas
        </a>
      </div>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        {summaryBullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <p className="text-gray-800">
        <span className="font-semibold">Definicion en una frase: </span>
        {oneLineDefinition}
      </p>
    </section>
  )
}
