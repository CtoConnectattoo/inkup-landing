import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, User, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReadingProgress } from "@/components/reading-progress"
import { QuickAnswer } from "@/components/quick-answer"
import { ShareButtons } from "@/components/share-buttons"
import { TableOfContents } from "@/components/table-of-contents"
import { BlogCta } from "@/components/blog-cta"
import { AuthorCard } from "@/components/author-card"
import postsData from "@/data/posts.json"
import authorsData from "@/data/authors.json"
import FaqSectionBlog from "@/components/faq-section-blog"

interface BlogSource {
  label: string
  url: string
  date: string
}

interface HowToStep {
  name: string
  text: string
}

interface HowToData {
  name: string
  totalTimeMinutes: number
  tools: string[]
  steps: HowToStep[]
}

type CitableTable = {
  columns: string[]
  rows: string[][]
}

type CitableBlock = {
  type: "checklist" | "table" | "matrix" | "rule" | "model3levels"
  title: string
  items?: string[]
  table?: CitableTable
}

type InternalLinks = {
  parent?: string | null
  siblings?: string[]
  nextStep?: string
  authoritativeLinksOut?: string[]
}

type DefinitionBlock = {
  definition: string
  not: string[]
  contextSignals: string[]
}

type DiagnosticBlock = {
  signalsChecklist: string[]
  operationalCost: string[]
  miniTest?: string
}

type MentalModelBlock = {
  modelName: string
  description?: string
  items?: string[]
  table?: CitableTable
}

type ProcessStep = {
  title: string
  action: string
  example?: string
  commonError?: string
}

type ProcessBlock = {
  steps: ProcessStep[]
}

type ErrorCorrection = {
  error: string
  reason?: string
  fix?: string
}

type ErrorsBlock = {
  items: ErrorCorrection[]
}

type WhenYesNoBlock = {
  whenYes: string[]
  whenNo: string[]
  note?: string
}

type ToolkitResource = {
  label: string
  url?: string
  description?: string
}

type ToolkitBlock = {
  resources: ToolkitResource[]
}

type ContextBlock = {
  description: string[]
}

type ChecklistBlock = {
  steps: string[]
}

type ScriptItem = {
  title: string
  short: string
  explained?: string
  tone?: string
}

type ScriptsBlock = {
  scripts: ScriptItem[]
}

type MiniWhenNoBlock = {
  bullets: string[]
}

type UseSignalsBlock = {
  signals: string[]
}

type CoreDataItem = {
  name: string
  decisionImpact: string
}

type CoreDataBlock = {
  data: CoreDataItem[]
}

type MainTableBlock = {
  table: CitableTable
}

type VersionBlock = {
  questions: string[]
}

type MicrocopyVariant = {
  tone: string
  text: string
}

type MicrocopyBlock = {
  variants: MicrocopyVariant[]
}

type DecisionRule = {
  condition: string
  action: string
}

type DecisionRulesBlock = {
  rules: DecisionRule[]
}

interface BlogPost {
  slug: string
  title: string
  briefId?: string
  briefType?: "pilar" | "satelite" | "plantilla"
  clusterId?: string
  priority?: "P1" | "P2" | "P3"
  alternateTitle?: string
  description: string
  excerpt?: string
  image: string
  author: string
  authorSlug?: string
  publishedAt: string
  readingTime: string
  content: string
  dominantIntent?: string
  idealCustomerProfile?: string
  buyerJourneyStage?: "problema" | "solucion" | "decision"
  operationalPainPoints?: string[]
  desiredOutcome?: string
  inkupConnection?: string
  inkupBoundaries?: string[]
  directAnswerSnippet?: string
  citableBlock?: CitableBlock
  internalLinks?: InternalLinks
  faqTargets?: string[]
  definitionBlock?: DefinitionBlock
  diagnosticBlock?: DiagnosticBlock
  mentalModelBlock?: MentalModelBlock
  processBlock?: ProcessBlock
  errorsBlock?: ErrorsBlock
  whenYesNoBlock?: WhenYesNoBlock
  toolkitBlock?: ToolkitBlock
  deepFaqTargets?: string[]
  contextBlock?: ContextBlock
  checklistBlock?: ChecklistBlock
  scriptsBlock?: ScriptsBlock
  miniWhenNoBlock?: MiniWhenNoBlock
  useSignalsBlock?: UseSignalsBlock
  coreDataBlock?: CoreDataBlock
  mainTableBlock?: MainTableBlock
  minimalVersionBlock?: VersionBlock
  fullVersionBlock?: VersionBlock
  microcopyBlock?: MicrocopyBlock
  sectorErrorsBlock?: string[]
  decisionRulesBlock?: DecisionRulesBlock
  quickAnswer?: string[]
  oneLineDefinition?: string
  sections?: string[]
  sources?: BlogSource[]
  howTo?: HowToData
  faq?: { question: string; answer: string }[]
  tags?: string[]
}

type AuthorProfile = {
  slug: string
  name: string
  type: string
  role?: string
  bio?: string
  experience?: string
  links?: { label: string; url: string }[]
  image?: string
}

type AuthorDisplay = {
  name: string
  role?: string
  bio?: string
  experience?: string
  links?: { label: string; url: string }[]
  image?: string
}

interface PageProps {
  params: { slug: string }
}

type TocItem = {
  id: string
  title: string
  level: 2 | 3
}

const MAX_RELATED_POSTS = 2
const RELATED_EXCERPT_LENGTH = 120

const typedAuthors = authorsData as AuthorProfile[]

const stripHtmlTags = (rawHtml: string) => rawHtml.replace(/<[^>]*>/g, " ")

const slugifyHeading = (headingText: string) => {
  const normalizedText = headingText
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")

  return normalizedText
}

const buildContentWithToc = (htmlContent: string) => {
  console.assert(typeof htmlContent === "string", "Blog post content should be a string.")

  if (!htmlContent) {
    return { contentWithAnchors: "", tocItems: [] as TocItem[] }
  }

  const headingRegex = /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi
  const tocItems: TocItem[] = []
  const slugCounts = new Map<string, number>()

  const contentWithAnchors = htmlContent.replace(headingRegex, (fullMatch, levelText, attributes, innerHtml) => {
    const headingText = stripHtmlTags(innerHtml).replace(/\s+/g, " ").trim()
    if (!headingText) {
      return fullMatch
    }

    const existingIdMatch = String(attributes).match(/id="([^"]+)"/i)
    const baseId = existingIdMatch?.[1] || slugifyHeading(headingText)
    if (!baseId) {
      return fullMatch
    }

    const currentCount = slugCounts.get(baseId) ?? 0
    const nextCount = currentCount + 1
    slugCounts.set(baseId, nextCount)
    const uniqueId = nextCount > 1 ? `${baseId}-${nextCount}` : baseId

    tocItems.push({
      id: uniqueId,
      title: headingText,
      level: Number.parseInt(levelText, 10) as 2 | 3,
    })

    const hasIdAttribute = /id="[^"]+"/i.test(String(attributes))
    const nextAttributes = hasIdAttribute ? attributes : `${attributes} id="${uniqueId}"`

    return `<h${levelText}${nextAttributes}>${innerHtml}</h${levelText}>`
  })

  return { contentWithAnchors, tocItems }
}

const validateBriefStructure = (post: BlogPost) => {
  if (!post.briefType) {
    return
  }

  console.assert(Boolean(post.directAnswerSnippet), "directAnswerSnippet is required when briefType is set.")
  console.assert(Boolean(post.citableBlock), "citableBlock is required when briefType is set.")
  console.assert(Boolean(post.internalLinks), "internalLinks is required when briefType is set.")

  if (post.briefType === "pilar") {
    console.assert(Boolean(post.definitionBlock), "definitionBlock is required for pilar posts.")
    console.assert(Boolean(post.diagnosticBlock), "diagnosticBlock is required for pilar posts.")
    console.assert(Boolean(post.mentalModelBlock), "mentalModelBlock is required for pilar posts.")
    console.assert(Boolean(post.processBlock), "processBlock is required for pilar posts.")
    console.assert(Boolean(post.errorsBlock), "errorsBlock is required for pilar posts.")
    console.assert(Boolean(post.whenYesNoBlock), "whenYesNoBlock is required for pilar posts.")
    console.assert(Boolean(post.toolkitBlock), "toolkitBlock is required for pilar posts.")
    console.assert(Boolean(post.deepFaqTargets), "deepFaqTargets is required for pilar posts.")
  }

  if (post.briefType === "satelite") {
    console.assert(Boolean(post.contextBlock), "contextBlock is required for satelite posts.")
    console.assert(Boolean(post.checklistBlock), "checklistBlock is required for satelite posts.")
    console.assert(Boolean(post.errorsBlock), "errorsBlock is required for satelite posts.")
    console.assert(Boolean(post.miniWhenNoBlock), "miniWhenNoBlock is required for satelite posts.")
  }

  if (post.briefType === "plantilla") {
    console.assert(Boolean(post.useSignalsBlock), "useSignalsBlock is required for plantilla posts.")
    console.assert(Boolean(post.coreDataBlock), "coreDataBlock is required for plantilla posts.")
    console.assert(Boolean(post.mainTableBlock), "mainTableBlock is required for plantilla posts.")
    console.assert(Boolean(post.minimalVersionBlock), "minimalVersionBlock is required for plantilla posts.")
    console.assert(Boolean(post.fullVersionBlock), "fullVersionBlock is required for plantilla posts.")
    console.assert(Boolean(post.microcopyBlock), "microcopyBlock is required for plantilla posts.")
    console.assert(Boolean(post.sectorErrorsBlock), "sectorErrorsBlock is required for plantilla posts.")
    console.assert(Boolean(post.decisionRulesBlock), "decisionRulesBlock is required for plantilla posts.")
  }
}

const getRelatedPosts = (currentPost: BlogPost, allPosts: BlogPost[]) => {
  console.assert(Array.isArray(allPosts), "postsData should be an array.")

  const currentTags = new Set(currentPost.tags ?? [])
  const relatedByTags = allPosts.filter(
    (candidate) => candidate.slug !== currentPost.slug && candidate.tags?.some((tag) => currentTags.has(tag))
  )

  const fallbackPosts = [...allPosts]
    .filter((candidate) => candidate.slug !== currentPost.slug)
    .sort((firstPost, secondPost) => new Date(secondPost.publishedAt).getTime() - new Date(firstPost.publishedAt).getTime())

  const uniquePosts: BlogPost[] = []
  const seenSlugs = new Set<string>()

  for (const candidate of [...relatedByTags, ...fallbackPosts]) {
    if (seenSlugs.has(candidate.slug)) {
      continue
    }

    seenSlugs.add(candidate.slug)
    uniquePosts.push(candidate)

    if (uniquePosts.length >= MAX_RELATED_POSTS) {
      break
    }
  }

  return uniquePosts
}

async function getPost(slug: string): Promise<BlogPost | null> {
  const post = postsData.find((post: BlogPost) => post.slug === slug)
  return post || null
}

export async function generateStaticParams() {
  return postsData.map((post: BlogPost) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: "Post no encontrado - Blog Inkup",
      description:
        "El artículo que buscas no existe. Descubre más contenido en nuestro blog sobre automatización y WhatsApp Business.",
    }
  }

  return {
    title: `${post.title} - Blog Inkup`,
    description: post.description,
    openGraph: {
      title: `${post.title} - Blog Inkup`,
      description: post.description,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - Blog Inkup`,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: `https://inkup.io/blog/${post.slug}`,
    },
  }
}

function StructuredData({ post }: { post: BlogPost }) {
  const DEFAULT_READING_TIME_MINUTES = 5

  const authorData = post.authorSlug
    ? authorsData.find((author) => author.slug === post.authorSlug)
    : null

  const normalizeReadingTime = (readingTime: string) => {
    const minutesMatch = readingTime.match(/\d+/)
    const minutesValue = minutesMatch ? Number.parseInt(minutesMatch[0], 10) : DEFAULT_READING_TIME_MINUTES
    const safeMinutes = Number.isNaN(minutesValue) ? DEFAULT_READING_TIME_MINUTES : minutesValue

    return `PT${safeMinutes}M`
  }

  const countWords = (htmlContent: string) => {
    const textContent = htmlContent.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
    if (!textContent) {
      return 0
    }

    return textContent.split(" ").length
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `https://inkup.io${post.image}`,
    author: authorData
      ? {
          "@type": authorData.type,
          name: authorData.name,
          url: `https://inkup.io/autores/${authorData.slug}`,
        }
      : {
          "@type": "Organization",
          name: post.author,
          url: "https://inkup.io",
        },
    publisher: {
      "@type": "Organization",
      name: "Inkup",
      logo: {
        "@type": "ImageObject",
        url: "https://inkup.io/favicon.png",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://inkup.io/blog/${post.slug}`,
    },
    url: `https://inkup.io/blog/${post.slug}`,
    wordCount: countWords(post.content),
    timeRequired: normalizeReadingTime(post.readingTime),
    articleSection: "Business Automation",
    inLanguage: "es-ES",
  }

  const faqStructuredData = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null

  const howToStructuredData = post.howTo?.steps?.length
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: post.howTo.name,
        totalTime: `PT${post.howTo.totalTimeMinutes}M`,
        tool: post.howTo.tools.map((tool) => ({
          "@type": "HowToTool",
          name: tool,
        })),
        step: post.howTo.steps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
        })),
      }
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      {faqStructuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      )}
      {howToStructuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToStructuredData) }} />
      )}
    </>
  )
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = params
  const post = await getPost(slug)
  const authorData = post?.authorSlug ? typedAuthors.find((author) => author.slug === post.authorSlug) : null

  if (!post) {
    return (
      <>
        <ReadingProgress />
        <div className="min-h-screen bg-white">
          <Header />
          <main className="pt-16">
            <div className="container mx-auto px-4 py-16 md:py-24">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">Post no encontrado</h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Lo sentimos, el artículo que buscas no existe o ha sido movido. Te invitamos a explorar nuestro blog
                  con contenido actualizado sobre automatización y WhatsApp Business.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-8 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 rounded-full"
                >
                  <Link href="/blog">
                    Volver al blog <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </main>
        </div>
      </>
    )
  }

  const { contentWithAnchors, tocItems } = buildContentWithToc(post.content)
  const relatedPosts = getRelatedPosts(post, postsData)
  const canonicalUrl = `https://inkup.io/blog/${post.slug}`
  const authorProfile: AuthorDisplay = authorData
    ? {
        name: authorData.name,
        role: authorData.role,
        bio: authorData.bio,
        experience: authorData.experience,
        links: authorData.links,
        image: authorData.image,
      }
    : { name: post.author }

  validateBriefStructure(post)

  return (
    <>
      <StructuredData post={post} />
      <ReadingProgress />
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-16">
          {/* Breadcrumbs */}
          <section className="container mx-auto px-4 py-6">
            <div className="max-w-4xl mx-auto">
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <li>
                    <Link href="/" className="hover:text-purple-600 transition-colors">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-purple-600 transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <ChevronRight className="w-4 h-4" />
                  </li>
                  <li className="text-black font-medium" aria-current="page">
                    {post.title}
                  </li>
                </ol>
              </nav>
            </div>
          </section>

          {/* Hero Section */}
          <section className="container mx-auto px-4 py-8 md:py-12">
            <div className="max-w-4xl mx-auto text-center">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight text-black max-w-4xl mx-auto">
                {post.title}
              </h1>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {authorData ? (
                    <Link href={`/autores/${authorData.slug}`} className="hover:text-purple-600 transition-colors">
                      {post.author}
                    </Link>
                  ) : (
                    <span>{post.author}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime} de lectura</span>
                </div>
                <time dateTime={post.publishedAt} className="text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>
          </section>

          {/* Featured Image */}
          <section className="container mx-auto px-4 mb-16">
            <div className="max-w-5xl mx-auto">
              <div className="relative w-full h-64 md:h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={post.image || "/placeholder.svg?height=600&width=1200&query=blog post featured image"}
                  alt={`Imagen destacada del artículo: ${post.title}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="container mx-auto px-4 mb-20">
            <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-10">
              <div>
                <article className="prose prose-xl max-w-none">
                  <div className="lg:hidden">
                    <ShareButtons title={post.title} shareUrl={canonicalUrl} />
                  </div>
                  {post.quickAnswer && post.oneLineDefinition && (
                    <QuickAnswer summaryBullets={post.quickAnswer} oneLineDefinition={post.oneLineDefinition} />
                  )}
                  {post.directAnswerSnippet && (
                    <section className="mt-6 rounded-2xl border border-purple-100 bg-purple-50/60 p-6">
                      <h2 className="text-2xl font-bold mb-3">Respuesta directa</h2>
                      <p className="text-base md:text-lg text-gray-800">{post.directAnswerSnippet}</p>
                    </section>
                  )}
                  {post.citableBlock && (
                    <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                      <h2 className="text-2xl font-bold mb-4">{post.citableBlock.title}</h2>
                      {post.citableBlock.type === "table" && post.citableBlock.table ? (
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr>
                                {post.citableBlock.table.columns.map((column) => (
                                  <th key={column} className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700">
                                    {column}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {post.citableBlock.table.rows.map((row, rowIndex) => (
                                <tr key={`row-${rowIndex}`}>
                                  {row.map((cell, cellIndex) => (
                                    <td key={`cell-${rowIndex}-${cellIndex}`} className="border-b border-gray-100 px-4 py-3 text-sm text-gray-700">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : post.citableBlock.items && post.citableBlock.items.length > 0 ? (
                        <ul className="list-disc pl-6 space-y-2">
                          {post.citableBlock.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  )}
                  {post.inkupBoundaries && post.inkupBoundaries.length > 0 && (
                    <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                      <h2 className="text-2xl font-bold mb-4">Límites / NOs</h2>
                      <ul className="list-disc pl-6 space-y-2">
                        {post.inkupBoundaries.map((boundary) => (
                          <li key={boundary}>{boundary}</li>
                        ))}
                      </ul>
                    </section>
                  )}
                  {post.briefType === "pilar" && (
                    <>
                      {post.definitionBlock && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Definición y encuadre</h2>
                          <p className="text-base text-gray-700 mb-4">{post.definitionBlock.definition}</p>
                          <h3 className="text-lg font-semibold mb-2">Qué no es</h3>
                          <ul className="list-disc pl-6 space-y-2 mb-4">
                            {post.definitionBlock.not.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                          <h3 className="text-lg font-semibold mb-2">Cuándo aparece este problema</h3>
                          <ul className="list-disc pl-6 space-y-2">
                            {post.definitionBlock.contextSignals.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </section>
                      )}
                      {post.diagnosticBlock && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Diagnóstico</h2>
                          <h3 className="text-lg font-semibold mb-2">Señales claras</h3>
                          <ul className="list-disc pl-6 space-y-2 mb-4">
                            {post.diagnosticBlock.signalsChecklist.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                          <h3 className="text-lg font-semibold mb-2">Coste operativo</h3>
                          <ul className="list-disc pl-6 space-y-2 mb-4">
                            {post.diagnosticBlock.operationalCost.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                          {post.diagnosticBlock.miniTest && <p className="text-base text-gray-700">{post.diagnosticBlock.miniTest}</p>}
                        </section>
                      )}
                      {post.mentalModelBlock && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Modelo mental</h2>
                          <p className="text-base text-gray-700 mb-4">{post.mentalModelBlock.modelName}</p>
                          {post.mentalModelBlock.description && <p className="text-base text-gray-700 mb-4">{post.mentalModelBlock.description}</p>}
                          {post.mentalModelBlock.items && post.mentalModelBlock.items.length > 0 && (
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                              {post.mentalModelBlock.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          )}
                          {post.mentalModelBlock.table && (
                            <div className="overflow-x-auto">
                              <table className="w-full text-left border-collapse">
                                <thead>
                                  <tr>
                                    {post.mentalModelBlock.table.columns.map((column) => (
                                      <th key={column} className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700">
                                        {column}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {post.mentalModelBlock.table.rows.map((row, rowIndex) => (
                                    <tr key={`model-row-${rowIndex}`}>
                                      {row.map((cell, cellIndex) => (
                                        <td key={`model-cell-${rowIndex}-${cellIndex}`} className="border-b border-gray-100 px-4 py-3 text-sm text-gray-700">
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </section>
                      )}
                      {post.processBlock && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Proceso paso a paso</h2>
                          <ol className="list-decimal pl-6 space-y-4">
                            {post.processBlock.steps.map((step) => (
                              <li key={step.title}>
                                <h3 className="text-lg font-semibold">{step.title}</h3>
                                <p className="text-base text-gray-700">{step.action}</p>
                                {step.example && <p className="text-sm text-gray-600 mt-1">Ejemplo: {step.example}</p>}
                                {step.commonError && <p className="text-sm text-gray-600 mt-1">Error tipico: {step.commonError}</p>}
                              </li>
                            ))}
                          </ol>
                        </section>
                      )}
                      {post.errorsBlock && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Errores y anti-patrones</h2>
                          <ul className="list-disc pl-6 space-y-3">
                            {post.errorsBlock.items.map((item) => (
                              <li key={item.error}>
                                <strong>{item.error}</strong>
                                {item.reason && <span className="text-gray-700"> — {item.reason}</span>}
                                {item.fix && <span className="text-gray-700">. Correccion: {item.fix}</span>}
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}
                      {post.whenYesNoBlock && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Cuándo sí / cuándo no</h2>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="text-lg font-semibold mb-2">Cuándo sí</h3>
                              <ul className="list-disc pl-6 space-y-2">
                                {post.whenYesNoBlock.whenYes.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-2">Cuándo no</h3>
                              <ul className="list-disc pl-6 space-y-2">
                                {post.whenYesNoBlock.whenNo.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          {post.whenYesNoBlock.note && <p className="text-sm text-gray-600 mt-3">{post.whenYesNoBlock.note}</p>}
                        </section>
                      )}
                      {post.toolkitBlock && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Toolkit: recursos accionables</h2>
                          <ul className="space-y-3">
                            {post.toolkitBlock.resources.map((resource) => (
                              <li key={resource.label}>
                                <strong>{resource.label}</strong>
                                {resource.description && <span className="text-gray-700"> — {resource.description}</span>}
                                {resource.url && (
                                  <span className="text-gray-700">
                                    {" "}
                                    (<a href={resource.url} className="text-purple-700 hover:text-purple-900">{resource.url}</a>)
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}
                      {post.deepFaqTargets && post.deepFaqTargets.length > 0 && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">FAQ profunda</h2>
                          <ul className="list-disc pl-6 space-y-2">
                            {post.deepFaqTargets.map((question) => (
                              <li key={question}>{question}</li>
                            ))}
                          </ul>
                        </section>
                      )}
                    </>
                  )}
                  {post.briefType === "satelite" && (
                    <>
                      {post.contextBlock && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Contexto minimo</h2>
                          <ul className="list-disc pl-6 space-y-2">
                            {post.contextBlock.description.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </section>
                      )}
                      {post.checklistBlock && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Checklist principal</h2>
                          <ol className="list-decimal pl-6 space-y-2">
                            {post.checklistBlock.steps.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ol>
                        </section>
                      )}
                      {post.scriptsBlock && post.scriptsBlock.scripts.length > 0 && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Scripts listos</h2>
                          <div className="space-y-4">
                            {post.scriptsBlock.scripts.map((script) => (
                              <div key={script.title} className="border border-gray-100 rounded-xl p-4">
                                <h3 className="text-lg font-semibold">{script.title}</h3>
                                <p className="text-base text-gray-700">{script.short}</p>
                                {script.explained && <p className="text-sm text-gray-600 mt-2">{script.explained}</p>}
                                {script.tone && <p className="text-sm text-gray-500 mt-1">Tono: {script.tone}</p>}
                              </div>
                            ))}
                          </div>
                        </section>
                      )}
                      {post.errorsBlock && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Errores comunes</h2>
                          <ul className="list-disc pl-6 space-y-3">
                            {post.errorsBlock.items.map((item) => (
                              <li key={item.error}>
                                <strong>{item.error}</strong>
                                {item.reason && <span className="text-gray-700"> — {item.reason}</span>}
                                {item.fix && <span className="text-gray-700">. Correccion: {item.fix}</span>}
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}
                      {post.miniWhenNoBlock && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Mini cuándo no</h2>
                          <ul className="list-disc pl-6 space-y-2">
                            {post.miniWhenNoBlock.bullets.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </section>
                      )}
                    </>
                  )}
                  {post.briefType === "plantilla" && (
                    <>
                      {post.useSignalsBlock && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Cuándo usar esta plantilla</h2>
                          <ul className="list-disc pl-6 space-y-2">
                            {post.useSignalsBlock.signals.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </section>
                      )}
                      {post.coreDataBlock && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Datos minimos que cambian la decision</h2>
                          <ul className="list-disc pl-6 space-y-2">
                            {post.coreDataBlock.data.map((item) => (
                              <li key={item.name}>
                                <strong>{item.name}</strong> — {item.decisionImpact}
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}
                      {post.mainTableBlock && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Tabla principal</h2>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                              <thead>
                                <tr>
                                  {post.mainTableBlock.table.columns.map((column) => (
                                    <th key={column} className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-700">
                                      {column}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody>
                                {post.mainTableBlock.table.rows.map((row, rowIndex) => (
                                  <tr key={`template-row-${rowIndex}`}>
                                    {row.map((cell, cellIndex) => (
                                      <td key={`template-cell-${rowIndex}-${cellIndex}`} className="border-b border-gray-100 px-4 py-3 text-sm text-gray-700">
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </section>
                      )}
                      {post.minimalVersionBlock && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Version minima</h2>
                          <ul className="list-disc pl-6 space-y-2">
                            {post.minimalVersionBlock.questions.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </section>
                      )}
                      {post.fullVersionBlock && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Version completa</h2>
                          <ul className="list-disc pl-6 space-y-2">
                            {post.fullVersionBlock.questions.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </section>
                      )}
                      {post.microcopyBlock && post.microcopyBlock.variants.length > 0 && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Scripts de introduccion</h2>
                          <ul className="space-y-3">
                            {post.microcopyBlock.variants.map((variant) => (
                              <li key={variant.tone}>
                                <strong>{variant.tone}</strong>: {variant.text}
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}
                      {post.sectorErrorsBlock && post.sectorErrorsBlock.length > 0 && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Errores frecuentes del sector</h2>
                          <ul className="list-disc pl-6 space-y-2">
                            {post.sectorErrorsBlock.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </section>
                      )}
                      {post.decisionRulesBlock && post.decisionRulesBlock.rules.length > 0 && (
                        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                          <h2 className="text-2xl font-bold mb-4">Reglas de decision</h2>
                          <ul className="list-disc pl-6 space-y-2">
                            {post.decisionRulesBlock.rules.map((rule) => (
                              <li key={rule.condition}>
                                <strong>{rule.condition}</strong> → {rule.action}
                              </li>
                            ))}
                          </ul>
                        </section>
                      )}
                    </>
                  )}
                  {post.internalLinks && (
                    <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                      <h2 className="text-2xl font-bold mb-4">Enlazado interno</h2>
                      <ul className="space-y-2">
                        {post.internalLinks.parent && (
                          <li>
                            <strong>Parent:</strong>{" "}
                            <Link href={`/blog/${post.internalLinks.parent}`} className="text-purple-700 hover:text-purple-900">
                              {post.internalLinks.parent}
                            </Link>
                          </li>
                        )}
                        {post.internalLinks.siblings && post.internalLinks.siblings.length > 0 && (
                          <li>
                            <strong>Hermanos:</strong>{" "}
                            {post.internalLinks.siblings.map((slug, index) => (
                              <span key={slug}>
                                <Link href={`/blog/${slug}`} className="text-purple-700 hover:text-purple-900">
                                  {slug}
                                </Link>
                                {index < post.internalLinks.siblings.length - 1 ? ", " : ""}
                              </span>
                            ))}
                          </li>
                        )}
                        {post.internalLinks.nextStep && (
                          <li>
                            <strong>Siguiente paso:</strong>{" "}
                            <Link href={`/blog/${post.internalLinks.nextStep}`} className="text-purple-700 hover:text-purple-900">
                              {post.internalLinks.nextStep}
                            </Link>
                          </li>
                        )}
                        {post.internalLinks.authoritativeLinksOut && post.internalLinks.authoritativeLinksOut.length > 0 && (
                          <li>
                            <strong>Links externos:</strong>{" "}
                            {post.internalLinks.authoritativeLinksOut.map((url, index) => (
                              <span key={url}>
                                <a href={url} className="text-purple-700 hover:text-purple-900" target="_blank" rel="noopener noreferrer">
                                  {url}
                                </a>
                                {index < post.internalLinks.authoritativeLinksOut.length - 1 ? ", " : ""}
                              </span>
                            ))}
                          </li>
                        )}
                      </ul>
                    </section>
                  )}
                  {post.faqTargets && post.faqTargets.length > 0 && (
                    <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
                      <h2 className="text-2xl font-bold mb-4">FAQ targets</h2>
                      <ul className="list-disc pl-6 space-y-2">
                        {post.faqTargets.map((question) => (
                          <li key={question}>{question}</li>
                        ))}
                      </ul>
                    </section>
                  )}
                  {typeof contentWithAnchors === "string" && (
                    <div className="blog-content" dangerouslySetInnerHTML={{ __html: contentWithAnchors }} />
                  )}

                  {post.faq && post.faq.length > 0 && <FaqSectionBlog items={post.faq} />}

                  {post.sources && post.sources.length > 0 && (
                    <section className="mt-12">
                      <h2 className="text-2xl font-bold mb-4">Fuentes</h2>
                      <ul className="space-y-2">
                        {post.sources.map((source) => (
                          <li key={source.url} className="text-base text-gray-700">
                            <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-purple-900">
                              {source.label}
                            </a>
                            <span className="text-gray-500"> — {source.date}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                </article>
                <AuthorCard
                  name={authorProfile.name}
                  image={authorProfile.image}
                  role={authorProfile.role}
                  bio={authorProfile.bio}
                  experience={authorProfile.experience}
                  links={authorProfile.links}
                />
              </div>
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  <TableOfContents items={tocItems} />
                  <ShareButtons title={post.title} shareUrl={canonicalUrl} />
                </div>
              </aside>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 md:py-20 mb-20">
            <div className="max-w-4xl mx-auto">
              <BlogCta />
            </div>
          </section>

          {/* Related Posts */}
          <section className="container mx-auto px-4 py-16 border-t border-gray-200">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-12 text-center text-black">Más artículos del blog</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost: BlogPost) => (
                    <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group block">
                      <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={relatedPost.image || "/placeholder.svg?height=200&width=400&query=blog post thumbnail"}
                            alt={`Imagen del artículo: ${relatedPost.title}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 400px"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="text-xl font-bold group-hover:text-purple-600 transition-colors mb-3 leading-tight">
                            {relatedPost.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                            {relatedPost.description.substring(0, RELATED_EXCERPT_LENGTH)}...
                          </p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>{relatedPost.readingTime}</span>
                            <span>•</span>
                            <time dateTime={relatedPost.publishedAt}>
                              {new Date(relatedPost.publishedAt).toLocaleDateString("es-ES")}
                            </time>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
