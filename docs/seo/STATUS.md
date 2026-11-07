# Estado del plan SEO

Lo actualiza Claude Code al terminar cada tarea. Lo lee Claude chat para revisar y preparar las siguientes.

Formato de cada entrada:

```
## AAAA-MM-DD · F1-2 · /alternativas/manychat
- Hecho: qué se ha cambiado
- Archivos: lista
- Rama / PR: nombre o enlace
- Dudas o pendientes: lo que necesita decisión
```

---

## 2026-11-08 · Preparación
- Hecho: `seo-writer.md` movido a `.claude/agents/` y `nueva-pagina-seo.md` a `.claude/commands/`.
- Archivos: `.claude/agents/seo-writer.md`, `.claude/commands/nueva-pagina-seo.md`
- Rama / PR: `seo/fase-1-base`
- Dudas o pendientes: ninguna.

## 2026-11-08 · F1-1 · Home
- Hecho: hero, problema, "Así funciona" (con el bloque de ChatGPT), franja de sectores y FAQ nuevas según `paginas/home.md`. FAQ con JSON-LD `FAQPage` y la pregunta "¿Es seguro para mi cuenta?" (API oficial de Meta, confirmado por Carlos). Title, description, Open Graph y Twitter nuevos en `layout.tsx`. Panel, demo de compartir, testimonios y precios sin cambios (solo se añade "+ IVA" y "con pago anual" a los precios).
- Archivos: `app/layout.tsx`, `components/home/home-hero.tsx`, `components/home/problem-section.tsx`, `components/home/how-it-works.tsx`, `components/home/home-faq.tsx`
- Rama / PR: `seo/fase-1-base`
- Dudas o pendientes:
  - La description del brief tenía 160 caracteres; he quitado "al momento" para dejarla en 149 (regla ≤ 155).
  - La demo del móvil (`phone-demo.tsx`), la del panel (`panel-demo.tsx`) y `share-section` siguen con ejemplos de tatuaje. El brief no pedía tocarlas; conviene preparar una versión multisector.
  - Las imágenes de `/images/design-mode/` con paréntesis en el nombre (logo del header, logos de la prueba social) dan 400 en local. Ya pasaba antes de este cambio.

## 2026-11-08 · F1-2 · /alternativas/manychat
- Hecho: contenido sustituido por el del brief (`lastVerified: 'Noviembre 2026'`). Datos de ManyChat comprobados el 8/11/2026 en manychat.com/pricing: cobra por contactos activos y el plan Free incluye 25. La fecha "desde marzo de 2026" sale de `mensajes.md` (no aparece en su web).
- Archivos: `data/alternativas/manychat.ts`
- Rama / PR: `seo/fase-1-base`
- Dudas o pendientes: el CTA final de la plantilla `app/alternativas/[slug]/page.tsx` sigue diciendo "Crear cuenta gratis · centralizar WhatsApp, Instagram y web". No lo he tocado porque el plan pide no cambiar la plantilla. Propuesta: "Empezar la prueba gratis" con un texto de Instagram.

## 2026-11-08 · F1-3 · /alternativas (índice)
- Hecho: nueva página `/alternativas` (200) con una tarjeta por comparativa, JSON-LD `BreadcrumbList` + `ItemList` y enlace a /precios. Las comparativas se listan desde `data/alternativas/index.ts`: una comparativa nueva solo hay que añadirla ahí. Ya estaba en el sitemap.
- Archivos: `app/alternativas/page.tsx`, `data/alternativas/index.ts`, `app/alternativas/[slug]/page.tsx`
- Rama / PR: `seo/fase-1-base`
- Dudas o pendientes: falta el enlace al pilar `/respuesta-automatica-instagram`. Se añade cuando exista (fase 2) para no dejar un enlace roto. También sale en el pie.

## 2026-11-08 · F1-4 · /precios
- Hecho: página reescrita según `paginas/precios.md`: H1, planes de `HOME_TIERS` (movido a `data/plans.ts`) con "+ IVA" y "con pago anual", tabla Inkup vs ManyChat vs Meta, testimonios publicados, FAQ con JSON-LD `FAQPage` y CTA. Fuera el plan gratis, la garantía y el soporte 24/7. "¿Qué pasa si supero las consultas?": se avisa para subir de plan, sin cargos automáticos (confirmado por Carlos). Se añade "Respuestas automáticas en Instagram" a las características del plan Profesional.
- Archivos: `app/precios/page.tsx`, `data/plans.ts`, `app/page.tsx`, `components/pricing-section.tsx` (props opcionales `priceSuffix` y `annualNote`)
- Rama / PR: `seo/fase-1-base`
- Dudas o pendientes: `pricingTiers` por defecto de `pricing-section.tsx` (planes antiguos con garantía y 24/7) sigue en uso en las páginas que no pasan `customTiers` (p. ej. landings de tatuaje). Revisar en otra tarea.

## 2026-11-08 · F1-5 · Tatuaje como un sector más
- Hecho: /soluciones con hero y metadata neutros. Primero "Por necesidad"; después "Por sector", con una franja de sectores (sin enlace porque no tienen página) y el grupo "Tatuaje y piercing" con sus 4 páginas. No se ha borrado ni desindexado nada. El menú ya era neutro. En el pie: enlaces a /precios (antes `/#precios`), /soluciones y /alternativas.
- Archivos: `app/soluciones/page.tsx`, `components/solutions-hero.tsx`, `components/solutions-grid.tsx`, `components/footer.tsx`
- Rama / PR: `seo/fase-1-base`
- Dudas o pendientes: las páginas "por necesidad" (`gestion-consultas`, `captacion-clientes`, `reserva-citas`) tienen textos antiguos; conviene revisarlas en otra fase.
