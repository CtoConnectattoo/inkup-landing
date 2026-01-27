import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import blogPosts from "@/data/posts.json" // 👈 Import desde JSON

export const metadata: Metadata = {
  title: "Blog de Inkup | Recursos para profesionales",
  description: "Artículos, guías y consejos para ayudarte a crecer tu negocio y optimizar tus consultas con IA.",
  keywords: "blog inkup, marketing tatuajes, automatización consultas, crecimiento negocio, IA para profesionales",
  openGraph: {
    title: "Blog de Inkup | Recursos para profesionales",
    description: "Artículos, guías y consejos para ayudarte a crecer tu negocio y optimizar tus consultas con IA.",
    url: "https://inkup.io/blog",
    siteName: "Inkup",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inkup%20logo%20png-59Er5aqpOGAQMr6kvchos4u9fWUp00.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
}

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              Blog de{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Inkup</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Artículos, guías y consejos para ayudarte a crecer tu negocio y optimizar tus consultas
            </p>
          </div>

          {/* Featured Article */}
          {featuredPost && (
            <div className="mb-16">
              <Link href={`/blog/${featuredPost.slug}`} className="group">

                <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 md:p-8">
                  <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                   <Image
  src={featuredPost.image ?? "/placeholder.svg"}
  alt={featuredPost.title}
  fill
  className="object-cover transition-transform group-hover:scale-105 duration-300"
/>


                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                       <span>{featuredPost.publishedAt}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                       <span>{featuredPost.readingTime} de lectura</span>
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold group-hover:text-purple-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <Button variant="link" className="p-0 h-auto font-semibold group-hover:text-purple-600">
                      Leer artículo <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Regular Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="relative h-48 w-full">
                   <Image
 src={post.image ?? "/blog/automatizar-whatsapp.png"}
  alt={post.title}
  fill
  className="object-cover transition-transform group-hover:scale-105 duration-300"
/>


                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                       <span>{post.publishedAt}</span>

                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readingTime} de lectura</span>

                      </div>
                    </div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2 text-sm">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <Button variant="link" className="p-0 h-auto font-semibold group-hover:text-purple-600">
                        Leer <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-br from-purple-100 to-pink-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Quieres recibir más contenido como este?</h2>
              <p className="text-muted-foreground mb-8">
                Suscríbete a nuestra newsletter y recibe consejos, guías y las últimas tendencias directamente en tu email.
              </p>
              <div className="flex justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0" asChild>
                  <a href="https://inkup.substack.com/embed" target="_blank" rel="noopener noreferrer">
                    Suscríbete a la newsletter <ArrowRight className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
