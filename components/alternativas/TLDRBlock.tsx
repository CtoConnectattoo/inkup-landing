interface TLDRBlockComponentProps {
  title: string
  items: { emphasis: string; text: string }[]
}

export function TLDRBlock({ title, items }: TLDRBlockComponentProps) {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600 rounded-r-xl p-6 my-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-2">TL;DR</p>
      <h3 className="text-base font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-800">
            <span className="text-purple-500 flex-shrink-0">→</span>
            <span>
              <strong>{item.emphasis}</strong> {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
