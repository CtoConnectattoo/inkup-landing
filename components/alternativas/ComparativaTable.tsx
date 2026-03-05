import type { ComparativaRow, SupportLevel } from "@/data/alternativas/types"

function SupportLevelIcon({ level, note }: { level: SupportLevel; note?: string }) {
  const config = {
    yes: { icon: "✓", className: "text-green-600" },
    no: { icon: "✗", className: "text-red-500" },
    partial: { icon: "◑", className: "text-amber-500" },
    paid: { icon: "$", className: "text-blue-500" },
  }
  const { icon, className } = config[level]
  return (
    <div className="flex flex-col items-center justify-center">
      <span className={className}>{icon}</span>
      {note && <span className="text-xs text-gray-400 mt-1">{note}</span>}
    </div>
  )
}

interface ComparativaTableProps {
  rows: ComparativaRow[]
  competitorName: string
}

export function ComparativaTable({ rows, competitorName }: ComparativaTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm my-8">
      <table className="w-full min-w-[400px]">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Criterio</th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-purple-600">Inkup</th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{competitorName}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.criterio}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
            >
              <td className="px-6 py-4 text-sm text-gray-800">{row.criterio}</td>
              <td className="px-6 py-4">
                <SupportLevelIcon level={row.inkup} note={row.inkupNote} />
              </td>
              <td className="px-6 py-4">
                <SupportLevelIcon level={row.competitor} note={row.competitorNote} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
