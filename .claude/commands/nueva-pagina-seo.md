---
description: Crea o reescribe una página SEO de inkup.io a partir de su brief. Uso: /nueva-pagina-seo <slug>
---

Crea o reescribe la página SEO con slug `$ARGUMENTS`.

1. Busca el brief en `docs/seo/paginas/$ARGUMENTS.md`. Si no existe, busca la tarea en `docs/seo/PLAN.md`; si tampoco está, para y pregunta.
2. Decide dónde va según el tipo, siguiendo los patrones que ya existen en el repo:
   - Comparativa → `data/alternativas/<slug>.ts` (tipo `AlternativaData`).
   - Post del blog → `data/posts.json` (plantilla `app/blog/[slug]`).
   - Pilar o landing → `app/<slug>/page.tsx` reutilizando componentes existentes (`quick-answer`, `table-of-contents`, `faq-section`, `pricing-section`…).
3. Usa el subagente `seo-writer` para el texto si el brief no lo trae completo.
4. Añade metadata (title ≤ 60, description ≤ 155), JSON-LD (`FAQPage`, y `Article` o `BlogPosting` si aplica), la entrada en `app/sitemap.xml/route.ts` y los enlaces internos que pida el brief.
5. Ejecuta `npm run build` y corrige los errores.
6. Actualiza `docs/seo/STATUS.md` y, si la tarea venía de `docs/seo/inbox/`, muévela a `docs/seo/inbox/hecho/`.
