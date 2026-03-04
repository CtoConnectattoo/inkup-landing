export type SupportLevel = "yes" | "no" | "partial" | "paid"

export interface ComparativaRow {
  criterio: string
  inkup: SupportLevel
  competitor: SupportLevel
  inkupNote?: string
  competitorNote?: string
}

export interface WhenCompetitorWinsItem {
  scenario: string
  explanation: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface AlternativaData {
  slug: string
  competitorName: string
  competitorSlug: string
  h1: string
  metaTitle: string
  metaDescription: string
  lastVerified: string
  tldr: {
    title: string
    items: { emphasis: string; text: string }[]
  }
  problemSection: string
  competitorSection: string
  differenceSection: string
  comparativaRows: ComparativaRow[]
  whenCompetitorWins: WhenCompetitorWinsItem[]
  faqs: FAQItem[]
}
