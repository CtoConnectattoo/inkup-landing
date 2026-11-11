> **ARCHIVO · material de Kalmaa, no de Inkup.** Enfoque del 7 de noviembre de 2026, cuando el proyecto era «Inkup · ManyChat en español». No aplicar a inkup.io (Inkup es solo tatuaje). Para Kalmaa manda el «00 BRIEF PARA CLAUDE CODE · Kalmaa» del Drive, que cambia producto y precios. Se guarda aquí porque el mapa de proyectos del Drive apunta a esta carpeta.

# Plan SEO y GEO · ManyChat en español

Estrategia completa (diagnóstico, datos y razonamiento): carpeta de Drive "Claude → Inkup · ManyChat en español → 06 SEO y GEO". Aquí solo están las tareas ejecutables.

**Idea:** la demanda en español está en la marca "ManyChat" y en "respuesta / mensajes automáticos de Instagram", sobre todo en LATAM. Inkup no aparece hoy en ninguna. Volúmenes en `keywords.csv`.

## Reglas para todas las tareas

- Texto: seguir `mensajes.md`. Si hay brief en `paginas/`, usar su texto tal cual.
- Cada página nueva o reescrita: `metadata` (title ≤ 60 caracteres, description ≤ 155), un solo H1, respuesta directa en el primer párrafo, preguntas frecuentes con JSON-LD `FAQPage`, fecha de actualización visible, enlaces internos al pilar y a /precios, y entrada en `app/sitemap.xml/route.ts`.
- Español neutro. Sin tatuaje como público principal.
- Compilar con `npm run build` antes de abrir el PR.

## Fase 1 · Base (semanas 1-2)

### F1-1 · Home
- Archivos: `components/home/home-hero.tsx`, `components/home/problem-section.tsx`, `components/home/how-it-works.tsx`, `components/home/home-faq.tsx`, `app/layout.tsx` (metadata global).
- Texto: `paginas/home.md`.
- Hecho cuando: el hero ya no dice "Para artistas, estudios y piercers"; title y description nuevos en `layout.tsx`; FAQ con JSON-LD; el resto de secciones (demo del panel, testimonios, precios) se mantienen.

### F1-2 · /alternativas/manychat
- Archivo: `data/alternativas/manychat.ts` (mismo tipo `AlternativaData`, no cambiar la plantilla).
- Texto: `paginas/alternativas-manychat.md`.
- Hecho cuando: ya no dice "dos herramientas para dos problemas distintos"; tabla y FAQ nuevas; `lastVerified: 'Noviembre 2026'`.

### F1-3 · /alternativas (índice)
- Hoy /alternativas da 404. Crear `app/alternativas/page.tsx` que liste las comparativas de `data/alternativas/` (ManyChat, Landbot y las que se añadan).
- Hecho cuando: /alternativas responde 200, enlaza cada comparativa y está en el sitemap.

### F1-4 · /precios
- Brief: `paginas/precios.md`. La página actual está desactualizada (planes antiguos).
- Hecho cuando: muestra los planes de `HOME_TIERS` (reutilizar `PricingSection`), tabla "Inkup vs ManyChat vs Meta gratis" y FAQ.

### F1-5 · Tatuaje fuera de la home
- No borrar nada. Asegurar que /soluciones enlaza las páginas de tatuaje como un sector más y que la home no es la puerta de entrada de tatuaje.
- Hecho cuando: el menú y /soluciones presentan sectores variados; las páginas de tatuaje siguen accesibles e indexadas.

## Fase 2 · Grupos de contenido (semanas 2-6)

Briefs en `paginas/` (llegarán por `inbox/`). Orden:

1. **Pilar `/respuesta-automatica-instagram`** ("respuesta automática instagram", "mensajes automáticos instagram", "cómo poner mensaje automático en instagram").
2. **Grupo ManyChat** en el blog (`data/posts.json`): qué es ManyChat, ManyChat precio 2026, ManyChat gratis, ManyChat en español, ManyChat WhatsApp, ManyChat TikTok. Cada uno enlaza a /alternativas/manychat.
3. **ChatGPT / MCP + Instagram**: guía "ChatGPT e Instagram: cómo conectarlos para automatizar mensajes" + qué es un conector MCP para Instagram.
4. **Comparativas** en `data/alternativas/`: Chatfuel, SendPulse.

## Fase 3 · Producto que genera SEO (semanas 3-8)

- Pie "Automatizado con Inkup → automatiza tu Instagram" en las páginas públicas de los asistentes (hi.inkup.io/…). **Fuera de este repositorio; avisar a Carlos.**
- Galería de plantillas de automatización por sector (`/plantillas/[sector]`).
- Calculadora "¿Cuánto te cuesta ManyChat?" (`/calculadora-manychat`).

## Fase 4 · Limpieza (semanas 6-12)

- Revisar los posts de `data/posts.json` que solo atraen búsquedas sin valor ("holaaa", "hola una pregunta", "faq whatsapp"): proponer en STATUS.md cuáles desindexar o fusionar. **No borrar sin aprobación.**
- Tener en cuenta `seo-aeo-blog-audit.md` (dos fuentes de verdad en el blog).

## Cómo se mide (lo revisa Claude chat cada mes con Search Console)

- Clics no de marca ni de tatuaje (hoy unos 170 por trimestre; objetivo x10).
- Posición en "respuesta automática instagram" y "manychat precio".
- Aparición de Inkup en Perplexity y en el Modo IA de Google.
