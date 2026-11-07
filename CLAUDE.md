# inkup-landing · instrucciones para Claude Code

## Posicionamiento actual (desde noviembre de 2026)

Inkup se posiciona como **"el ManyChat en español"** para cualquier negocio que vende o atiende por Instagram (España + LATAM): respuestas automáticas a comentarios, a historias y a palabras clave en DM, un asistente que abre WhatsApp con la consulta ya escrita, panel de consultas con exportación y conector MCP para ChatGPT/Claude. Precio fijo, sin pagar por contacto.

- El tatuaje es **un sector más**, no el público principal. No escribas textos nuevos centrados en tatuaje salvo en las páginas de ese sector.
- Español neutro (España + LATAM).

## Antes de tocar SEO, contenido o textos de la web

1. Lee `docs/seo/PLAN.md` (tareas por fases con criterio de "hecho").
2. Lee `docs/seo/mensajes.md` (qué decimos, qué no prometemos, precios vigentes).
3. Si la tarea tiene brief en `docs/seo/paginas/`, el texto de ese brief es el que manda: intégralo, no lo reescribas.
4. Para páginas nuevas usa el subagente `seo-writer` o el comando `/nueva-pagina-seo`.
5. Al terminar cada tarea, actualiza `docs/seo/STATUS.md` (qué hiciste, archivos tocados, dudas).

## Cómo trabajamos

- Una fase = una rama + un pull request. Compila (`npm run build`) antes de abrirlo.
- Las tareas nuevas que llegan desde Claude chat se dejan en `docs/seo/inbox/`. Procésalas en orden y muévelas a `docs/seo/inbox/hecho/` al terminar.
