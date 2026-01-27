import type { MetadataRoute } from "next/server"
import blogPosts from "@/data/posts.json" // 👈 importa tus posts

// Rutas estáticas (las que ya tenías)
const staticRoutes = [
  "",
  "/precios",
  "/confian",
  "/partners",
  "/recursos",
  "/politica-de-cookies",
  "/tyc",
  "/soluciones",
  "/soluciones/estudios-tatuaje",
  "/soluciones/artistas-independientes",
  "/soluciones/estudios-piercing",
  "/soluciones/tattoo-removal",
  "/soluciones/gestion-consultas",
  "/soluciones/captacion-clientes",
  "/soluciones/reserva-citas",
  "/soluciones/formulario-whatsapp-tatuadores",
]

// Rutas de los posts del blog (extraídas automáticamente del JSON)
const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`)

// Unión de todas las rutas
const routes = [...staticRoutes, ...blogRoutes]

export default function Sitemap(): MetadataRoute {
  return {
    routes: routes.map((route) => ({
      url: `https://inkup.io${route}`,
      lastmod: new Date(),
    })),
  }
}
