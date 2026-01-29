import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import authorsData from "@/data/authors.json"
import postsData from "@/data/posts.json"

type Author = {
  slug: string
  name: string
  type: string
  role: string
  bio: string
  experience: string
  image?: string
  links: { label: string; url: string }[]
}

type PageProps = {
  params: { slug: string }
}

const typedAuthors = authorsData as Author[]

const getInitials = (fullName: string) => {
  const initials = fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")

  return initials || "IN"
}

const formatAuthorName = (fullName: string) => {
  const nameParts = fullName.split(" ").filter(Boolean)
  if (nameParts.length <= 2) {
    return fullName
  }

  return nameParts.slice(0, 2).join(" ")
}

export async function generateStaticParams() {
  return typedAuthors.map((author) => ({
    slug: author.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const author = typedAuthors.find((item) => item.slug === params.slug)
  if (!author) {
    return {
      title: "Autor no encontrado - Inkup",
    }
  }

  return {
    title: `${author.name} - Inkup`,
    description: author.bio,
  }
}

export default function AuthorPage({ params }: PageProps) {
  const author = typedAuthors.find((item) => item.slug === params.slug)
  const authorPosts = postsData.filter((post) => post.authorSlug === params.slug)

  if (!author) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24 pb-16">
          <section className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Autor no encontrado</h1>
            <Link href="/blog" className="text-purple-700 font-semibold hover:text-purple-900">
              Volver al blog
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 rounded-full overflow-hidden bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-semibold">
                {author.image ? (
                  <Image src={author.image} alt={`Foto de ${author.name}`} fill className="object-cover" sizes="64px" />
                ) : (
                  <span>{getInitials(author.name)}</span>
                )}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-black">{formatAuthorName(author.name)}</h1>
                <p className="text-sm text-gray-500">{author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-semibold text-black">{authorPosts.length}</span>
              <span>articulos</span>
            </div>
          </div>
          {author.bio && <p className="text-gray-700 mb-4 text-lg leading-relaxed">{author.bio}</p>}
          {author.experience && <p className="text-gray-700 mb-6 text-lg leading-relaxed">{author.experience}</p>}
          {author.links.length > 0 && (
            <div className="flex flex-wrap items-center gap-4 mb-10">
              {author.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  className="text-sm font-semibold text-purple-700 hover:text-purple-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </section>

        <section className="bg-gray-50 border-t border-gray-100 py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-black"></h2>
              <Link href="/blog" className="text-sm font-semibold text-purple-700 hover:text-purple-900">
                Ver todo el blog
              </Link>
            </div>
            {authorPosts.length === 0 ? (
              <p className="text-gray-600">No hay articulos publicados.</p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2">
                {authorPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 h-full">
                      <div className="relative h-48">
                        <Image
                          src={post.image || "/placeholder.svg?height=240&width=400&query=blog post image"}
                          alt={`Imagen del articulo: ${post.title}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 480px"
                        />
                      </div>
                      <div className="p-6 flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span>{post.readingTime}</span>
                          <span>•</span>
                          <time dateTime={post.publishedAt}>
                            {new Date(post.publishedAt).toLocaleDateString("es-ES")}
                          </time>
                        </div>
                        <h3 className="text-xl font-semibold text-black group-hover:text-purple-700 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {post.description?.substring(0, 140)}...
                        </p>
                        <span className="text-sm font-semibold text-purple-700 group-hover:text-purple-900">
                          Leer articulo
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
