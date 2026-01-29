"use client"

import { useEffect, useMemo, useState } from "react"

type TocItem = {
  id: string
  title: string
  level: 2 | 3
}

type TableOfContentsProps = {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const itemIds = useMemo(() => items.map((item) => item.id), [items])

  useEffect(() => {
    if (!itemIds.length) {
      return
    }

    const headings = itemIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    if (!headings.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (!visibleEntries.length) {
          return
        }

        const topEntry = visibleEntries.sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0]
        if (topEntry?.target?.id) {
          setActiveId(topEntry.target.id)
        }
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: [0, 0.1, 0.2, 0.6, 1],
      }
    )

    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [itemIds])

  if (!items.length) {
    return null
  }

  return (
    <nav aria-label="Navegación del artículo" className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">En este artículo</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-4" : "pl-0"}>
            <a
              href={`#${item.id}`}
              className={`text-sm transition-colors ${
                item.id === activeId
                  ? "text-purple-700 font-semibold bg-purple-50 rounded-md px-2 py-1 inline-block"
                  : "text-gray-700 hover:text-purple-700"
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
