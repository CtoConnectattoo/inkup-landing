import { NextResponse } from "next/server"

export async function GET() {
  // URL base del sitio
  const baseUrl = "https://inkup.io"

  // Fecha actual para lastmod
  const date = new Date().toISOString()

  // Lista de todas las rutas del sitio
  const routes = [
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
    "/blog/automatizacion-consultas-ia",
  ]

  // Generar el XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      // Definir prioridades según el tipo de página
      let priority = "0.8"
      let changefreq = "weekly"

      if (route === "") {
        priority = "1.0"
        changefreq = "daily"
      } else if (route.startsWith("/blog")) {
        priority = "0.7"
        changefreq = "monthly"
      } else if (route.startsWith("/soluciones")) {
        priority = "0.9"
        changefreq = "weekly"
      } else if (
        [
          "/precios",
          "/crear-formulario-whatsapp",
          "/como-hacer-un-formulario-en-whatsapp",
          "/asistente-whatsapp",
        ].includes(route)
      ) {
        priority = "0.9"
        changefreq = "weekly"
      }

      return `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
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
