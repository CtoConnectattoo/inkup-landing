"use client"

import { useState } from "react"
import type { FAQItem } from "@/data/alternativas/types"

interface FAQAccordionProps {
  items: FAQItem[]
  pageUrl: string
}

function buildFAQSchema(items: FAQItem[], pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    url: pageUrl,
  }
}

export function FAQAccordion({ items, pageUrl }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const schema = buildFAQSchema(items, pageUrl)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="space-y-4 my-10">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <span>{item.question}</span>
                <span className="text-purple-500 flex-shrink-0">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-gray-100 px-6 py-4">
                  <p className="text-sm text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}
