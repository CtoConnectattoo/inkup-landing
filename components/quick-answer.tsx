type QuickAnswerProps = {
  summaryBullets: string[]
  oneLineDefinition: string
  learnMoreHref?: string
  title?: string
  subtitle?: string
}

const parseBold = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${index}-${part}`}>{part.slice(2, -2)}</strong>
    }
    return part
  })
}

export function QuickAnswer({
  summaryBullets,
  oneLineDefinition,
  learnMoreHref = "#como-hacerlo",
  title = "TL;DR",
  subtitle,
}: QuickAnswerProps) {
  if (!summaryBullets.length || !oneLineDefinition) {
    return null
  }

  const displayTitle = subtitle ? `${title} - ${subtitle}` : title

  return (
    <section className="bg-purple-50 border border-purple-100 rounded-2xl p-6 md:p-8 mb-10">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-black">{displayTitle}</h2>
        <a href={learnMoreHref} className="text-sm font-semibold text-purple-700 hover:text-purple-900">
          Leer mas
        </a>
      </div>
      <p className="text-gray-800 mb-4">{oneLineDefinition}</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {summaryBullets.map((bullet) => (
          <li key={bullet} className="[&>strong]:font-semibold [&>strong]:text-gray-900">
            {parseBold(bullet)}
          </li>
        ))}
      </ul>
    </section>
  )
}
