import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Contenido retirado de forma definitiva en la limpieza SEO de nov 2026 (seo/limpieza-2026-11.md).
// Responde 410 para que Google lo saque del índice antes que con un 404.
const GONE_BLOG = new Set<string>([
  "plantilla-cualificacion-abogado",
  "plantilla-cualificacion-belleza",
  "plantilla-cualificacion-carpinteria",
  "plantilla-cualificacion-clinicas",
  "plantilla-cualificacion-coche-taller",
  "plantilla-cualificacion-dentista-clinica",
  "plantilla-cualificacion-electricista-fontanero",
  "plantilla-cualificacion-entrenador-personal",
  "plantilla-cualificacion-eventos",
  "plantilla-cualificacion-formacion",
  "plantilla-cualificacion-fotografia",
  "plantilla-cualificacion-inmobiliaria",
  "plantilla-cualificacion-jardineria",
  "plantilla-cualificacion-laser-depilacion",
  "plantilla-cualificacion-limpieza-facial-tratamientos",
  "plantilla-cualificacion-limpieza-hogar",
  "plantilla-cualificacion-manicura-pedicura",
  "plantilla-cualificacion-masajes",
  "plantilla-cualificacion-nutricion",
  "plantilla-cualificacion-peluqueria",
  "plantilla-cualificacion-psicologia",
  "plantilla-cualificacion-reformas",
  "plantilla-cualificacion-servicios-digitales",
  "plantilla-cualificacion-servicios-domicilio",
  "plantilla-cualificacion-servicios-mascotas",
  "plantilla-cualificacion-veterinaria"
])

const GONE_PATHS = new Set<string>(["/alternativas", "/alternativas/manychat", "/alternativas/landbot"])

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname.replace(/\/$/, "") || "/"
  const slug = path.startsWith("/blog/") ? path.slice(6) : null
  if (GONE_PATHS.has(path) || (slug && GONE_BLOG.has(slug))) {
    return new NextResponse("Este contenido se ha retirado.", {
      status: 410,
      headers: { "content-type": "text/plain; charset=utf-8", "x-robots-tag": "noindex" },
    })
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/blog/:path*", "/alternativas", "/alternativas/:path*"],
}
