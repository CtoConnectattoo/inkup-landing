# SEO + AEO Audit del Blog (Inkup)

Fecha: 2026-01-29
Proyecto: /Users/carlosnunezfernandez/Desktop/PROYECTOS/DEV/inkup-landing-oferta-3

Nota de contexto:
- No se encontro la carpeta `cursor_project_rules` en este proyecto. La evaluacion se basa en los archivos visibles.

## Alcance y fuentes revisadas
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/blog/automatizacion-consultas-ia/page.tsx`
- `data/posts.json`
- `app/sitemap.xml/route.ts`
- `typescript/app/sitemap.xml/route.ts`
- `app/layout.tsx`
- `components/header.tsx`
- `components/footer.tsx`
- `components/resources-section.tsx`
- `components/faq-section-blog.tsx`
- `public/blog/*`

## Arquitectura del blog y plantillas
### Plantillas detectadas
- **Index de blog**: `app/blog/page.tsx`
  - Renderiza un destacado (`featuredPost`) y el resto en grilla (`regularPosts`).
  - Usa `posts.json` como fuente de datos.
- **Plantilla dinamica de posts**: `app/blog/[slug]/page.tsx`
  - Genera rutas estaticas desde `posts.json`.
  - Genera metadata dinamica y JSON-LD de tipo `BlogPosting`.
- **Plantilla estatica de post**: `app/blog/automatizacion-consultas-ia/page.tsx`
  - Post hardcodeado fuera del flujo de `posts.json`.
  - Metadata propia, contenido HTML en JSX y no usa la plantilla dinamica.

### Hallazgos clave de arquitectura
- Hay **dos fuentes de verdad** para posts:
  - `posts.json` (usado por `[slug]` y por el listado).
  - `app/blog/automatizacion-consultas-ia/page.tsx` (post aislado).
- Esto provoca **inconsistencia de estructura, metadata y enlazado interno**.
- En el listado, el `featuredPost` se obtiene con `.find(...)`:
  - Si hay mas de un post con `featured: true`, solo uno aparece destacado.
  - Los otros quedan **excluidos del listado** porque `regularPosts` filtra `!featured`.
  - Resultado: posts destacados pueden quedar sin enlaces internos directos desde `/blog`.

## Enlazado interno y navegacion
### Enlaces de navegacion
- Header no incluye enlace directo a `Blog` (solo `Recursos` y `Precios`).
- Footer si incluye enlace a `Blog` desde `Recursos`.
- La pagina `Recursos` enlaza a `/blog`.

### Enlaces dentro de contenidos
- `posts.json` incluye enlaces internos a rutas `/blog/...` que **no existen** en `posts.json`:
  - Ejemplos visibles en el contenido del post `gestion-consultas-clientes`.
  - Esto genera enlaces rotos y perdida de autoridad interna.

### Profundidad de crawl
- Parte de los posts pueden quedar sin enlaces desde el listado si estan marcados como `featured`.
- El post `automatizacion-consultas-ia` no aparece en `posts.json`, por lo tanto:
  - No aparece en el listado de `/blog`.
  - No aparece en el sitemap dinamico de `posts.json`.

## Indexacion: robots y directivas
### Robots
- No existe `robots.txt` en `public/` ni `app/robots.txt/route.ts`.
- Resultado:
  - Los buscadores **no reciben directivas explicitas**.
  - No se anuncia el sitemap en robots.
  - Dependencia de defaults del crawler.

### Metadata robots
- No se usa `robots` en `Metadata` ni en layout ni en posts.
- No hay control fino por pagina (index/noindex, follow/nofollow).

## Sitemap
### Implementaciones detectadas
- `app/sitemap.xml/route.ts` (ruta estandar servida por Next).
- `typescript/app/sitemap.xml/route.ts` (no es la ruta estandar de Next).

### Problemas en el sitemap servido
En `app/sitemap.xml/route.ts`:
- Lista de rutas **hardcodeada**.
- Solo incluye un post del blog: `/blog/automatizacion-consultas-ia`.
- No incluye los slugs reales de `posts.json`.
- `lastmod` es la fecha actual para todas las URLs, sin relacion con el contenido.
- No incluye `blog` dinamico ni actualizaciones reales.

## Assets e imagenes
### Imagenes declaradas vs existentes
En `posts.json` se referencian imagenes que **no existen** en `public/blog/`:
- `/blog/automatizar-recogida-datos-whatsapp-negocios-locales-1.png`
- `/blog/automatizar-recogida-datos-whatsapp-negocios-locales-2.png`
- `/blog/automatizar-recogida-datos-whatsapp-negocios-locales-3.png`
- `/blog/automatizar-recogida-datos-whatsapp-negocios-locales-4.png`
- `/blog/REEMPLAZAR-IMAGEN.png`
- `/blog/problema-agenda-manual-negocio-local.png`
- `/blog/flujo-agendar-cita-automatica.png`
- `/blog/mockup-asistente-reserva-citas-movil.png`
- `/blog/gestion-consultas-clientes-sistema-orden-mensajes.png`

Impacto:
- Imposibilidad de renderizar imagenes clave.
- Caida de tiempo en pagina y engagement.
- Perdida de señales visuales para Google Images.

### Open Graph images
- En `app/blog/automatizacion-consultas-ia/page.tsx`, la OG image es relativa (`/blog/automatizacion-consultas-ia.png`) y no existe.
- En `app/blog/[slug]/page.tsx`, OG usa `post.image` pero se espera absoluto para algunas plataformas.

## On-page SEO: contenido, headings y metadata
### Titulos y headings
- La plantilla `[slug]` ya define un `h1` con el titulo del post.
- Algunos `post.content` incluyen un `<h1>` adicional en el HTML (ej. `gestion-consultas-clientes`).
  - Resultado: **multiples H1** en la misma pagina.

### Metadatos
- `app/blog/page.tsx` usa metadata basica con OG.
- `app/blog/[slug]/page.tsx` incluye canonical, OG y Twitter.
- `app/blog/automatizacion-consultas-ia/page.tsx` no define canonical ni Twitter.
- `posts.json` usa `description` pero el listado usa `excerpt` (varios posts no tienen `excerpt`).

### Estructura del contenido
- Contenido HTML con `dangerouslySetInnerHTML`:
  - No hay sanitizacion.
  - Si `posts.json` pudiera ser editado desde un CMS futuro, hay riesgo de XSS.
- Tablas y listas extensas sin anclas ni tabla de contenidos:
  - Menor usabilidad en articulos largos.

## AEO y citabilidad
### JSON-LD
- `app/blog/[slug]/page.tsx` usa `BlogPosting`.
- Problemas de formato:
  - `timeRequired` usa `post.readingTime` (ej. "5 min") y deberia ser ISO 8601 (`PT5M`).
  - `wordCount` se calcula con `split(" ")`, con riesgo de conteo incorrecto por espacios dobles y HTML.
- No hay JSON-LD de `FAQPage` para preguntas frecuentes en `FaqSectionBlog`.

### Citabilidad (OpenAI / AI Overviews)
Observaciones:
- Algunos textos incluyen datos cuantitativos ("21 veces", "315%") sin fuentes ni citas.
- No hay bloques tipo "Key takeaways" o "Resumen ejecutivo" que faciliten la extraccion por sistemas LLM.
- Autores no tienen pagina ni bio estructurada.
- Falta contenido de confianza: metodologia, fuentes, referencias y fechas de actualizacion visibles.

## Evaluacion de indexabilidad (estado probable)
Con la arquitectura actual:
- Las URLs de `posts.json` **son indexables** (no hay noindex).
- La visibilidad se ve limitada por:
  - Sitemap incompleto.
  - Enlazado interno roto o incompleto.
  - Falta de robots con sitemap declarado.
  - Imagenes faltantes (señales negativas de calidad).

## Mejoras recomendadas (priorizadas)

### P0 (impacto inmediato en indexacion)
1) Crear `robots.txt` con referencia a `/sitemap.xml`.
2) Unificar el sitemap para incluir **todas** las URLs reales del blog (`posts.json`).
3) Eliminar o integrar la plantilla aislada `app/blog/automatizacion-consultas-ia/page.tsx` dentro del flujo de `posts.json`.
4) Resolver imagenes faltantes o actualizar los `src` en `posts.json`.
5) Corregir enlaces internos rotos en el contenido del blog.

### P1 (calidad SEO/AEO)
1) Asegurar **un solo H1** por post (remover `<h1>` del `post.content` o convertirlo a `<h2>`).
2) Añadir `excerpt` a todos los posts usados en el listado.
3) Agregar JSON-LD de `FAQPage` cuando exista FAQ.
4) Normalizar `timeRequired` en JSON-LD a formato ISO 8601 (`PT5M`).
5) Definir `canonical` en todas las plantillas de post (incluida la estatica si se mantiene).
6) Incluir `dateModified` real por post.

### P2 (performance y experiencia)
1) Generar una tabla de contenidos automatica para posts largos.
2) Anadir enlaces internos contextuales desde el contenido a categorias y posts clave.
3) Mejorar la pagina `/blog` con filtros tematicos y paginacion.
4) Crear paginas de autor (E-E-A-T) con enlaces a perfiles y credenciales.

## Recomendaciones tecnicas detalladas

### Robots
Implementar `app/robots.txt/route.ts` con:
- `User-agent: *`
- `Allow: /`
- `Sitemap: https://inkup.io/sitemap.xml`

### Sitemap
Acciones sugeridas:
- Reemplazar `app/sitemap.xml/route.ts` por una version dinamica basada en `posts.json`.
- Mantener una sola implementacion (evitar duplicados en `typescript/app/...`).
- Usar `publishedAt` o `updatedAt` reales en `lastmod`.
- Definir `priority` y `changefreq` con constantes nombradas.

### Estructura de datos y validaciones
Para reducir errores de indexacion:
- Validar `posts.json` en build con un esquema estricto (slug, title, description, excerpt, image, publishedAt).
- Agregar asserts para detectar:
  - Slugs duplicados.
  - Imagenes inexistentes en `public/blog/`.
  - Enlaces internos a `/blog/...` sin slug valido.
  - Contenido con `<h1>` embebido.

### Canonical y OG
Acciones:
- Añadir canonical a `app/blog/page.tsx`.
- Unificar canonical en la plantilla estatica (o eliminarla).
- Garantizar que las imagenes de OG sean absolutas (https://inkup.io/...).

### JSON-LD y FAQ
Acciones:
- Generar JSON-LD `FAQPage` cuando exista `post.faq`.
- Normalizar `timeRequired` a `PT{min}M`.
- Mover `wordCount` a un calculo mas robusto:
  - Remover HTML.
  - Normalizar espacios.
  - Contar tokens reales.

### Contenido y enlazado interno
Acciones:
- Asegurar `excerpt` en todos los posts del listado.
- Crear un bloque de "Articulos relacionados" basado en categorias o tags.
- Añadir enlaces internos a `/blog` desde el header.
- Evitar que `featured` excluya posts del listado general.

### Imagenes
Acciones:
- Subir los assets faltantes en `public/blog/`.
- Evitar placeholders tipo `REEMPLAZAR-IMAGEN.png`.
- Asegurar `alt` descriptivo y sin keyword stuffing.

### Seguridad
Acciones:
- Sanitizar HTML antes de `dangerouslySetInnerHTML`.
- Si el contenido es confiable, documentar el origen y bloquear ediciones externas sin sanitizacion.
- Agregar `rel="noopener noreferrer"` a enlaces externos dentro del HTML del post.

## Checklist de correccion rapida (orden recomendado)
1) Crear `robots.txt` con sitemap.
2) Unificar sitemap y generar slugs desde `posts.json`.
3) Integrar o migrar `app/blog/automatizacion-consultas-ia` al flujo de `posts.json`.
4) Completar assets faltantes en `public/blog/`.
5) Corregir enlaces internos rotos.
6) Normalizar H1 y `excerpt`.
7) Añadir JSON-LD de FAQ y corregir `timeRequired`.

## Oportunidades AEO y citabilidad
Para mejorar la presencia en IA y respuestas directas:
- Agregar un bloque visible al inicio:
  - "Respuesta rapida" en 2-3 bullets.
  - "Definicion en una frase".
- Estandarizar secciones:
  - "Que es", "Por que importa", "Como hacerlo", "Errores comunes".
- Incluir fuentes citables:
  - Enlaces a estudios o datos con fecha.
  - Atribuciones claras en el texto.
- Agregar datos estructurados:
  - `FAQPage` y `HowTo` cuando aplique.
- Crear paginas de autor con:
  - Bio breve, rol, experiencia y enlaces externos.

## Riesgos si no se corrige
- Indexacion parcial del blog por sitemap incompleto.
- Degradacion de CTR por metadatos inconsistentes.
- Enlaces rotos y baja autoridad interna.
- Imagenes faltantes reducen calidad percibida y señales de confianza.
- AEO limitado por ausencia de fuentes y bloques resumidos.

## Archivos clave a modificar (si se ejecutan mejoras)
- `app/sitemap.xml/route.ts`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/blog/automatizacion-consultas-ia/page.tsx`
- `data/posts.json`
- `components/faq-section-blog.tsx`
- `public/blog/*`
