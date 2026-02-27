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

interface BlogPost {
  slug: string
  title: string
  description: string
  excerpt?: string
  image: string
  author: string
  authorSlug?: string
  publishedAt: string
  readingTime: string
  content: string
  quickAnswer?: string[]
  oneLineDefinition?: string
  quickAnswerTitle?: string
  quickAnswerSubtitle?: string
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

const H2_REGEX = /<h2[^>]*>[\s\S]*?<\/h2>/gi

const splitContentAtMiddleH2 = (html: string): { before: string; after: string } | null => {
  const matches = [...html.matchAll(H2_REGEX)]
  if (matches.length === 0) return null
  const middleIndex = Math.floor(matches.length / 2)
  const middleMatch = matches[middleIndex]
  const splitIndex = middleMatch.index ?? 0
  return {
    before: html.slice(0, splitIndex).trimEnd(),
    after: html.slice(splitIndex),
  }
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
                    <QuickAnswer
                      summaryBullets={post.quickAnswer ?? []}
                      oneLineDefinition={post.oneLineDefinition ?? ""}
                      title={post.quickAnswerTitle}
                      subtitle={post.quickAnswerSubtitle}
                    />
                  )}
                  {typeof contentWithAnchors === "string" && (() => {
                    const split = splitContentAtMiddleH2(contentWithAnchors)
                    if (split) {
                      return (
                        <>
                          <div className="blog-content" dangerouslySetInnerHTML={{ __html: split.before }} />
                          <div className="my-12">
                            <BlogCta />
                          </div>
                          <div className="blog-content" dangerouslySetInnerHTML={{ __html: split.after }} />
                        </>
                      )
                    }
                    return (
                      <div className="blog-content" dangerouslySetInnerHTML={{ __html: contentWithAnchors }} />
                    )
                  })()}

                  {post.faq && post.faq.length > 0 ? (
                    <>
                      <div className="my-12">
                        <BlogCta />
                      </div>
                      <FaqSectionBlog items={post.faq} />
                    </>
                  ) : (
                    <div className="my-12">
                      <BlogCta />
                    </div>
                  )}

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
