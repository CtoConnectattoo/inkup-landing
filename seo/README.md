# SEO y GEO de inkup.io

Un agente revisa cada semana cómo posiciona inkup.io en Google y en las respuestas de las IAs (AI Overview, AI Mode, ChatGPT, Perplexity) y propone cambios en **un PR** que revisa una persona. El motor y el playbook viven en el kit compartido [CtoConnectattoo/seo-geo-kit](https://github.com/CtoConnectattoo/seo-geo-kit); aquí solo están los datos y la configuración de Inkup.

## Reglas de Inkup (mandan sobre el playbook del kit)

- Datos de producto, precios («+ IVA», mensual o anual), cifras y testimonios: solo de la skill `inkup-producto` (fuente: la home de inkup.io). La página `/precios` está desactualizada y no es fuente.
- Tono: skill `inkup-tono-de-marca`. Identidad visual: `inkup-branding`.
- Público principal: tatuadores, estudios de tatuaje y piercers. Otros sectores solo hablando del mecanismo, sin casos ni cifras inventadas.
- Nunca prometer que Inkup responde, cotiza o agenda por el profesional, ni que es un bot dentro de WhatsApp, ni API oficial de WhatsApp, ni más ventas o reservas, ni reembolsos, ni soporte 24/7, ni prueba sin tarjeta, ni planes Enterprise. La única cifra es «más de 3.300 profesionales en 15 países».
- Nada de Kalmaa: es otra línea con otro dominio. Las keywords que comparten (alternativa a ManyChat, Instagram) llevan nota en `keywords.json` y se reparten por decisión de negocio.

## Piezas

| Fichero | Qué es |
|---|---|
| `config.json` | Configuración del agente (dominio, Search Console, mercados, tope de Apify de 6 $/mes, receta de página, promesas prohibidas, rutas protegidas). Esquema en el kit. |
| `keywords.json` | Mapa keyword → URL con papel y volumen. |
| `geo-queries.json` | Preguntas GEO semanales. |
| `history/AAAA-MM-DD/` | Datos brutos de cada semana (los escribe el colector). |
| `reports/AAAA-MM-DD.md` | Informe semanal del agente. |

## En local

Con el kit clonado junto a este repo:

```bash
node ../seo-geo-kit/bin/validate.mjs --project .
node ../seo-geo-kit/bin/collect.mjs  --project . --dry-run
node ../seo-geo-kit/bin/audit.mjs    --project . --source live
```

Credenciales (`GSC_SERVICE_ACCOUNT`, `APIFY_TOKEN`) solo en el entorno de la rutina o del shell; nunca en el repo.
