import type { WhenCompetitorWinsItem } from "@/data/alternativas/types"

interface WhenCompetitorWinsProps {
  competitorName: string
  items: WhenCompetitorWinsItem[]
}

export function WhenCompetitorWins({ competitorName, items }: WhenCompetitorWinsProps) {
  return (
    <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Cuándo {competitorName} sí tiene sentido
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Hay situaciones en las que la alternativa puede encajar mejor. Te las resumimos.
      </p>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-amber-500 flex-shrink-0">→</span>
            <div>
              <span className="font-semibold text-gray-800">{item.scenario}</span>
              <span className="text-sm text-gray-500"> — {item.explanation}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
