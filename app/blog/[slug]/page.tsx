import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, User, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { ReadingProgress } from "@/components/reading-progress"
import postsData from "@/data/posts.json"
import FaqSectionBlog from "@/components/faq-section-blog"

interface BlogPost {
  slug: string
  title: string
  description: string
  image: string
  author: string
  publishedAt: string
  readingTime: string
  content: string
  faq?: { question: string; answer: string }[]
}

interface PageProps {
  params: { slug: string }
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `https://inkup.io${post.image}`,
    author: {
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
    wordCount: post.content.replace(/<[^>]*>/g, "").split(" ").length,
    timeRequired: post.readingTime,
    articleSection: "Business Automation",
    inLanguage: "es-ES",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = params
  const post = await getPost(slug)

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
              {/* Article Meta */}
              <div className="flex items-center justify-center gap-6 mb-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
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

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight text-black max-w-4xl mx-auto">
                {post.title}
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                {post.description}
              </p>
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
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-xl max-w-none">
                {typeof post.content === "string" && (
                  <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
                )}

                {post.faq && post.faq.length > 0 && <FaqSectionBlog items={post.faq} />}
              </article>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 md:py-20 mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 text-center border border-purple-100">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                  ¿Listo para automatizar tus consultas?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Únete a más de 5000 artistas que ya confían en Inkup para hacer crecer su negocio y automatizar su
                  atención al cliente
                </p>
                <Button
                  size="lg"
                  className="h-16 px-10 text-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                  asChild
                >
                  <Link href="https://hi.inkup.io/auth/signup" target="_blank" rel="noopener noreferrer">
                    Prueba Inkup gratis <ArrowRight className="ml-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Related Posts */}
          <section className="container mx-auto px-4 py-16 border-t border-gray-200">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-12 text-center text-black">Más artículos del blog</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {postsData
                  .filter((relatedPost: BlogPost) => relatedPost.slug !== post.slug)
                  .slice(0, 2)
                  .map((relatedPost: BlogPost) => (
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
                            {relatedPost.description.substring(0, 120)}...
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

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/design-mode/inkup%20logo%20png%281%29%281%29%281%29%281%29%281%29(1).png"
                  alt="Inkup Logo"
                  width={40}
                  height={40}
                />
                <span className="font-bold text-xl text-black">Inkup</span>
              </div>
              <div className="text-sm text-gray-600">© 2024 Inkup. Todos los derechos reservados.</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
