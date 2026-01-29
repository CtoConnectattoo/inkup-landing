import { NextResponse } from "next/server"
import blogPosts from "@/data/posts.json"

export async function GET() {
  const baseUrl = "https://inkup.io"
  const fallbackLastmod = new Date().toISOString()
  const changefreq = {
    home: "daily",
    solutions: "weekly",
    primary: "weekly",
    blog: "monthly",
    default: "weekly",
  }
  const priority = {
    home: "1.0",
    solutions: "0.9",
    primary: "0.9",
    blog: "0.7",
    default: "0.8",
  }

  const staticRoutes = [
    "",
    "/precios",
    "/confian",
    "/partners",
    "/recursos",
    "/politica-de-cookies",
    "/tyc",
    "/soluciones",
    "/soluciones/software-para-estudios-de-tatuaje",
    "/soluciones/artistas-independientes",
    "/soluciones/estudios-piercing",
    "/soluciones/tattoo-removal",
    "/soluciones/gestion-consultas",
    "/soluciones/captacion-clientes",
    "/soluciones/reserva-citas",
    "/soluciones/formulario-whatsapp-tatuadores",
    "/crear-formulario-whatsapp",
    "/como-hacer-un-formulario-en-whatsapp",
    "/asistente-whatsapp",
    "/blog",
  ]

  const blogRoutes = blogPosts.map((post) => {
    if (!post.slug) {
      throw new Error("Missing blog post slug in posts.json")
    }

    return `/blog/${post.slug}`
  })

  const routes = [...staticRoutes, ...blogRoutes]

  const resolveLastmod = (route: string) => {
    if (!route.startsWith("/blog/")) {
      return fallbackLastmod
    }

    const slug = route.replace("/blog/", "")
    const blogPost = blogPosts.find((post) => post.slug === slug)
    if (!blogPost?.publishedAt) {
      return fallbackLastmod
    }

    const parsedDate = new Date(blogPost.publishedAt)
    if (Number.isNaN(parsedDate.getTime())) {
      return fallbackLastmod
    }

    return parsedDate.toISOString()
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      let routePriority = priority.default
      let routeChangefreq = changefreq.default

      if (route === "") {
        routePriority = priority.home
        routeChangefreq = changefreq.home
      } else if (route.startsWith("/blog")) {
        routePriority = priority.blog
        routeChangefreq = changefreq.blog
      } else if (route.startsWith("/soluciones")) {
        routePriority = priority.solutions
        routeChangefreq = changefreq.solutions
      } else if (
        [
          "/precios",
          "/crear-formulario-whatsapp",
          "/como-hacer-un-formulario-en-whatsapp",
          "/asistente-whatsapp",
        ].includes(route)
      ) {
        routePriority = priority.primary
        routeChangefreq = changefreq.primary
      }

      return `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${resolveLastmod(route)}</lastmod>
    <changefreq>${routeChangefreq}</changefreq>
    <priority>${routePriority}</priority>
  </url>`
    })
    .join("")}
</urlset>`

  // Devolver la respuesta con los headers correctos
  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
