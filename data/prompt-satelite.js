// PROMPT BUILDER — SATELITE
const row = $json;

const clean = (v) => (typeof v === "string" ? v.trim() : v);
const safe = (v, fallback = "") => (v == null ? fallback : v);

const meta = {
  id: clean(row.id),
  type: clean(row.type),
  slug: clean(row.slug),
  title: clean(row.h1),
  h1: clean(row.h1),
  cluster: clean(row.cluster),
  priority: clean(row.priority),
  author: clean(row.author),
  authorSlug: clean(row.authorSlug),
  intention: clean(row.intention),
  geo_snippet: clean(row.geo_snippet),
  block_citable: clean(row.block_citable),
  internal_links_plan: clean(row.internal_links_plan),
};

// ✅ Pega aquí tu ejemplo (si quieres)
const satelliteExample = `
{
  "slug": "gestion-consultas-clientes",
  "title": "Cómo gestionar consultas de clientes cuando te escriben por WhatsApp e Instagram",
  "description": "Aprende un sistema simple (sin CRM complejo) para organizar, filtrar y priorizar consultas entrantes desde WhatsApp e Instagram, responder con contexto y no perder oportunidades.",
  "excerpt": "Gestionar consultas es convertir mensajes desordenados (WhatsApp, Instagram y otros canales) en un flujo claro: entrada única, datos mínimos, priorización y cierres con contexto.",
  "image": "/blog/atender-clientes-sin-perder-mensajes.jpg",
  "author": "María Hidalgo",
  "authorSlug": "maria-hidalgo",
  "publishedAt": "2026-01-27",
  "readingTime": "10 min",
  "tags": [
    "gestion-consultas",
    "whatsapp",
    "instagram",
    "procesos",
    "automatizacion"
  ],
  "quickAnswerSubtitle": "Gestionar consultas de clientes en WhatsApp e Instagram",
  "quickAnswer": [
    "**Unifica la entrada** — Un solo punto de enlace para todos los canales.",
    "**Pide información mínima** — Solo lo que cambia tu respuesta.",
    "**Prioriza** — Para que cada conversación avance con contexto.",
    "**Define rutas por intención** — Info, presupuesto o cita."
  ],
  "oneLineDefinition": "Gestionar consultas de clientes es organizar y filtrar los mensajes entrantes (WhatsApp, Instagram, Google) en un flujo claro para responder más rápido y no perder oportunidades.",
  "sections": [
    "Que es gestionar consultas",
    "Diagnostico y coste",
    "Niveles de madurez",
    "Proceso paso a paso",
    "Errores comunes",
    "Cuando implementar",
    "FAQ"
  ],
  "sources": [],
  "howTo": {
    "name": "Gestionar consultas en 7 pasos",
    "totalTimeMinutes": 90,
    "tools": [
      "Canal final",
      "Rutas por intencion",
      "Respuestas rapidas"
    ],
    "steps": [
      {
        "name": "Definir canal final",
        "text": "Elige el canal principal para cerrar conversaciones."
      },
      {
        "name": "Reducir intenciones",
        "text": "Limita a 2-3 rutas claras: info, presupuesto y cita."
      },
      {
        "name": "Pedir datos minimos",
        "text": "Pregunta solo lo que cambia la respuesta."
      },
      {
        "name": "Crear primer mensaje",
        "text": "Guia al cliente a la ruta correcta en un solo paso."
      },
      {
        "name": "Centralizar entrada",
        "text": "Usa un enlace unico desde bio y perfil."
      },
      {
        "name": "Definir prioridades",
        "text": "Prioriza urgentes y filtra curiosos."
      },
      {
        "name": "Estandarizar cierre",
        "text": "Responde con contexto y un siguiente paso claro."
      }
    ]
  },
  "featured": false,
  "content": "<h2>Qué es (y qué no es) gestionar consultas de clientes</h2><h3>Definición práctica (expandida)</h3><p>Gestionar consultas no es “contestar mensajes”. Es convertir mensajes desordenados (DMs, WhatsApp, formularios, reseñas, llamadas perdidas) en un proceso repetible donde: el cliente entiende qué paso toca, tú recibes datos mínimos antes de invertir tiempo, y cada respuesta mueve al cliente hacia una acción: cita, presupuesto, información útil o descarte.</p><h3>Qué NO es (para evitar expectativas falsas)</h3><ul><li>No es <a href=\"/blog/como-organizar-mensajes-clientes-sin-crm/\">implantar un CRM enterprise</a> con pipeline, automatizaciones y reporting complejo.</li><li>No es “automatizarlo todo” con IA mágica.</li><li>No es responder con bots largos tipo “menú infinito”.</li><li>No es pedir 20 datos “por si acaso”.</li><li>No es reemplazar tu trato humano (en servicios, eso es parte del valor).</li></ul><h3>Cuándo aparece este problema (señales operativas reales)</h3><p>Este caos suele explotar cuando tienes 2 o más canales activos (Instagram + WhatsApp, o WhatsApp + Google Business Profile), recibes consultas repetidas (precio, disponibilidad, ubicación, requisitos, “info”), respondes “a ratos” entre trabajo operativo, y el servicio requiere 3–6 datos antes de dar precio o hueco.</p><h2>Diagnóstico: <a href=\"/blog/sintomas-caos-mensajes-clientes/\">señales de caos</a> + coste (tiempo, dinero, energía)</h2><h3>Checklist: señales claras de caos de consultas</h3><p>Marca las que te pasan (sin juzgar; es lo normal cuando creces):</p><ol><li>Respondes el mismo “precio/horarios/ubicación” muchas veces al día.</li><li>Te escriben por DM y luego saltan a WhatsApp y se pierde el contexto.</li><li>Tienes conversaciones abiertas con “hola / info” que quedan en el limbo.</li><li>Pides datos “a trozos” y terminas en 20 mensajes para cerrar algo simple.</li><li>Te cuesta encontrar lo que te dijeron (zona, fecha, requisitos, presupuesto).</li><li>Te llegan consultas a horas distintas y no hay orden (urgentes mezcladas con curiosos).</li><li><a href=\"/blog/por-que-pierdes-clientes-por-responder-tarde/\">Respondes tarde</a> y notas que el cliente desaparece.</li><li>Acabas dando precio sin contexto y luego hay malentendidos (“ah, yo quería otra cosa”).</li><li>Cada persona del equipo contesta distinto (si sois 2–5, se nota mucho).</li><li>Te interrumpen todo el día: WhatsApp manda, tú obedeces.</li><li>Sientes que “estar atendiendo” te impide producir (tatuar, tratar, entrenar, trabajar).</li><li>Te entran leads que claramente no encajan (solo miran precio, no cumplen requisitos, etc.).</li></ol><h3>Mini test (rápido)</h3><p>Si cumples 3 de estas 5: repetición, pérdida de contexto, 20 mensajes por cierre, <a href=\"/blog/por-que-pierdes-clientes-por-responder-tarde/\">respuesta tardía</a>, interrupciones… necesitas un sistema (y <a href=\"/blog/como-responder-mas-rapido-sin-equipo/\">responder más rápido sin equipo</a>).</p><h3>Coste operativo: lo que realmente estás pagando</h3><h4>1) Tiempo perdido (minutos reales)</h4><p>Haz un cálculo simple (sin Excel si no quieres): una respuesta típica a FAQs suele costar 1–2 minutos; cualificar por chat a trozos, 3–8 minutos; y conversaciones que no avanzan, 2–5 minutos de ping-pong.</p><p>Ejemplo realista: 15 consultas/día × 4 minutos promedio = 60 min/día. Eso son ~20 horas/mes (una semana laboral) solo en “ordenar caos”.</p><h4>2) <a href=\"/blog/por-que-pierdes-clientes-por-responder-tarde/\">Oportunidades perdidas</a></h4><p>En servicios, el cliente caliente suele comparar 2–4 opciones y decidir rápido si percibe claridad. Si tardas demasiado o pides demasiado sin explicar, se va. Perder 2–3 clientes/mes por fricción o tardanza suele costar más que cualquier sistema de orden.</p><h4>3) Estrés (y peor servicio)</h4><p>El caos reduce foco, empeora la calidad de tus respuestas, agota y termina bajando la calidad de tu trabajo principal (lo que realmente factura). Por eso gestionar consultas no es “administrativo”: es protección del negocio.</p><h2>Modelo mental: 3 niveles de madurez (elige el tuyo)</h2><p>La clave no es hacerlo perfecto. Es subir un nivel cada vez, sin romper tu operativa.</p><h3>Nivel 1 — Manual ordenado</h3><p>Sigues respondiendo a mano, pero con reglas mínimas: canal final definido (por ejemplo WhatsApp), 5–10 respuestas rápidas bien escritas, 5–7 etiquetas (si usas WhatsApp Business) y horarios de respuesta visibles.</p><p>Encaja cuando el volumen es bajo/medio y normalmente responde una sola persona.</p><h3>Nivel 2 — Semi-sistematizado</h3><p>Ya no dejas que el cliente “mande” la conversación. Defines dos o tres rutas por intención (info / presupuesto / cita), usas un primer mensaje que guía a un paso, capturas 3–6 datos mínimos antes de invertir tiempo y estandarizas el cierre (mensaje único con propuesta).</p><p>Encaja cuando el volumen es medio/alto y la repetición es fuerte.</p><h3>Nivel 3 — Sistema estructurado (flujo + filtrado)</h3><p>La entrada queda ordenada antes de llegar al chat final: un punto de entrada único (link) desde Instagram/WhatsApp/Google, rutas por intención (router), preguntas mínimas por servicio, salida a WhatsApp/email con contexto y medición de conversión por ruta.</p><p>Encaja cuando hay volumen alto, múltiples canales y picos frecuentes.</p><h2>Bloque citable: nivel → qué hacer → errores comunes</h2><table><thead><tr><th>Nivel</th><th>Qué hacer esta semana</th><th>Qué NO hacer (error típico)</th><th>Señal de que ya toca subir</th></tr></thead><tbody><tr><td>Manual ordenado</td><td>Define canal final + 10 respuestas rápidas + horario</td><td>Responder “a ratos” sin guiar</td><td>10+ consultas/día o repites lo mismo</td></tr><tr><td>Semi-sistematizado</td><td>Crea 3 rutas por intención + pide 4 datos mínimos</td><td>Convertir DM en formulario largo</td><td>20+ consultas/día o 20 mensajes por cierre</td></tr><tr><td>Sistema estructurado</td><td>Punto de entrada único + flujo por servicio + salida con contexto</td><td>Menús infinitos / pedir de más</td><td>Se te cae conversión, equipo pequeño, picos</td></tr></tbody></table><h2>Proceso paso a paso (7–10 pasos) para gestionarlo sin complicarte</h2><h3>1) Elige tu canal final (dónde se “cierra”)</h3><p>Decide un canal principal para cerrar: WhatsApp si buscas rapidez y cierre ágil; email si necesitas detalle y trazabilidad; teléfono si hay urgencias reales. Regla: puedes tener varios canales de entrada, pero uno de cierre.</p><h3>2) Define 3 intenciones máximas (no 10)</h3><p>En servicios, casi todo cae en: Información (ubicación, horarios, requisitos), Presupuesto (precio / rango) y Cita/Disponibilidad (“¿tenéis hueco?”). Reducir a 3 intenciones baja fricción y evita menús confusos.</p><h3>3) Diseña las <a href=\"/blog/plantilla-cualificar-clientes-servicios/\">preguntas mínimas</a> que cambian tu respuesta</h3><p>Antes de responder bien, define qué necesitas sí o sí: servicio exacto, objetivo/contexto, fecha, requisitos/condiciones, presupuesto orientativo (si filtra) y contacto. Si un dato no cambia lo que harás, no lo pidas aún.</p><h3>4) Crea un guion de primera respuesta (para DM y WhatsApp)</h3><p>Tu primer mensaje debe reconocer al cliente, ofrecer 2–3 rutas, pedir 1 dato mínimo y llevar a un paso.</p><blockquote><p>“¡Genial! Para ayudarte rápido: ¿buscas cita, presupuesto o info? Dime cuál y te paso el siguiente paso.”</p></blockquote><h3>5) Implementa un punto de entrada único (cuando el volumen lo pida)</h3><p>En lugar de “háblame por DM”, usa un link único desde bio, Stories, botón del perfil y Google. Ese link no debe ser un menú infinito: debe guiar por intención.</p><h3>6) Separa “recoger información” de “cerrar”</h3><p>WhatsApp no tiene que ser el lugar donde preguntas todo y repites FAQs. WhatsApp funciona mejor para confirmar, proponer opciones y cerrar con un sí/no claro.</p><h3>7) Define reglas de priorización (urgentes vs curiosos)</h3><ul><li>Si el cliente da fecha + servicio + flexibilidad → prioridad alta.</li><li>Si solo pregunta “precio” sin contexto → pide contexto mínimo antes.</li><li>Si no responde 2 veces → cierre amable y guardado.</li></ul><h3>8) Reduce fricción con microcopy (explica por qué preguntas)</h3><p>Una frase reduce muchísimo el abandono:</p><blockquote><p>“Te hago 3 preguntas rápidas para darte un precio realista y no marearte con mensajes.”</p></blockquote><h3>9) Estandariza el cierre (mensaje único)</h3><p>Tu cierre ideal incluye resumen del contexto, propuesta concreta y siguiente paso claro (confirmar, elegir opción, enviar referencia, reservar).</p><h3>10) Mide 3 métricas simples (sin volverte loca/o)</h3><ul><li>% que pasan de DM/entrada → datos mínimos</li><li>% que llegan a WhatsApp con contexto</li><li>% que cierran (cita / presupuesto aceptado)</li></ul><h2>Errores y anti-patrones (y cómo corregirlos)</h2><ol><li>Menú infinito → confunde → abandono. Corrección: 2–3 rutas máximo por intención.</li><li>Pedir demasiados datos → fricción → cae la conversión. Corrección: pide solo lo que cambia la decisión.</li><li>Preguntar sin explicar → desconfianza. Corrección: microcopy (“para responderte en 1 mensaje…”).</li><li>Dar precio sin contexto → malentendidos. Corrección: rango condicionado a 2–3 variables.</li><li>Responder sin proceso → el caos manda. Corrección: ventana de respuesta + reglas + plantilla de entrada.</li><li>Mezclar canales sin transición → se pierde contexto. Corrección: DM → link → WhatsApp con mensaje preformateado.</li><li>Convertir el DM en interrogatorio → percepción fría. Corrección: DM como puerta, no como formulario.</li><li>No separar “info” de “cita” → conversaciones eternas. Corrección: rutas distintas y cierres distintos.</li></ol><h2>Cuándo SÍ / cuándo NO merece montar un sistema</h2><h3>Cuándo sí (señales claras)</h3><ul><li>10+ consultas/día o picos frecuentes.</li><li>Repetición alta de preguntas.</li><li>2+ canales de entrada activos.</li><li>Respondes tarde y lo notas en cierres.</li><li>Tu servicio requiere datos mínimos para dar precio/hueco.</li><li>Equipo pequeño (2–5) que necesita consistencia.</li></ul><h3>Cuándo no (o no todavía)</h3><ul><li>Volumen muy bajo (1–3 consultas/día).</li><li>Ventas 100% únicas y largas (cada conversación es distinta y estratégica).</li><li>Ya tienes CRM y proceso sólido con SOPs; tu problema puede ser captación, no gestión.</li><li>Tu oferta no está clara (si no sabes qué vendes, ningún flujo arregla eso).</li></ul><h2>Toolkit: recursos accionables (para implementar sin inventar)</h2><p>Estas piezas profundizan y te dan scripts, checklists y plantillas listas:</p><ul><li>Diagnóstico y coste: <a href=\"/blog/sintomas-caos-mensajes-clientes/\">Síntomas de caos de mensajes</a></li><li>Responder más rápido sin equipo: <a href=\"/blog/como-responder-mas-rapido-sin-equipo/\">Cómo responder más rápido sin equipo</a></li><li>Por qué pierdes clientes por responder tarde: <a href=\"/blog/por-que-pierdes-clientes-por-responder-tarde/\">Por qué pierdes clientes por responder tarde</a></li><li>Organizar sin CRM: <a href=\"/blog/como-organizar-mensajes-clientes-sin-crm/\">Cómo organizar mensajes sin CRM</a></li><li>Plantilla base para cualificar: <a href=\"/blog/plantilla-cualificar-clientes-servicios/\">Plantilla para cualificar clientes en servicios</a></li><li>Objeción típica: <a href=\"/blog/no-necesito-crm-solo-orden/\">No necesito CRM, solo orden</a></li></ul><h2>El siguiente paso (si lo necesitas)</h2><p>Cuando el problema es caos de mensajes (múltiples canales, repetición, pérdida de contexto), lo que más ayuda es un punto de entrada único con rutas por intención y preguntas mínimas por servicio para que el cliente llegue a WhatsApp (o email) con el contexto listo. Inkup encaja como esa capa previa: ordena, filtra y estandariza la información antes del chat final.</p><h3>Límites / NOs (recordatorio honesto)</h3><ul><li>Inkup no es un CRM enterprise.</li><li>No sustituye tu criterio profesional ni tu trato.</li><li>No arregla captación si no hay demanda.</li><li>Funciona mejor cuando hay volumen y repetición (20–30 consultas suelen mostrar el “aha moment”).</li></ul>",
  "faq": [
    {
      "question": "¿Cuántas consultas al día justifican montar un sistema?",
      "answer": "A partir de 10+ consultas/día o cuando notes picos frecuentes. Si repites las mismas respuestas o tardas en contestar, ya es momento."
    },
    {
      "question": "¿Qué canal debería ser el final: WhatsApp o email?",
      "answer": "WhatsApp si buscas rapidez y cierre ágil; email si necesitas detalle y trazabilidad. Regla: varios canales de entrada, uno solo de cierre."
    },
    {
      "question": "¿Cómo evito que me escriban solo \"precio?\" todo el día?",
      "answer": "Usa un primer mensaje que guíe a rutas (cita, presupuesto, info) y pide contexto mínimo antes de dar cifra. Microcopy: \"Te hago 3 preguntas para darte un precio realista.\""
    },
    {
      "question": "¿Qué datos mínimos debería pedir siempre antes de responder?",
      "answer": "Servicio exacto, objetivo/contexto, fecha, requisitos/condiciones y contacto. Solo lo que cambia tu respuesta."
    },
    {
      "question": "¿Cómo priorizo urgentes vs curiosos sin sonar borde?",
      "answer": "Si da fecha + servicio + flexibilidad → prioridad alta. Si solo pregunta \"precio\" sin contexto → pide contexto mínimo antes. Si no responde 2 veces → cierre amable."
    },
    {
      "question": "¿Qué hago si el cliente no responde a mis preguntas?",
      "answer": "Después de 2 intentos sin respuesta, cierre amable y guardado. No persigas; el que va en serio suele responder."
    },
    {
      "question": "¿Cómo paso de Instagram a WhatsApp sin perder el contexto?",
      "answer": "Usa un link único que guíe por intención. El cliente llega a WhatsApp con mensaje preformateado que incluye lo que ya respondió."
    },
    {
      "question": "¿Cómo reduzco los \"hola / info\" que no avanzan?",
      "answer": "Primer mensaje que convierta en ruta: \"¿Buscas cita, presupuesto o info? Dime cuál y te paso el siguiente paso.\""
    },
    {
      "question": "¿Qué hago si tengo picos los fines de semana y no doy abasto?",
      "answer": "Punto de entrada único + flujo que capte datos mínimos. Así priorizas y cierras cuando toca, sin perder contexto."
    },
    {
      "question": "¿Cuántas rutas debería tener mi sistema (opciones del link)?",
      "answer": "Máximo 3: Información, Presupuesto y Cita/Disponibilidad. Más rutas confunden y aumentan el abandono."
    },
    {
      "question": "¿Qué errores hacen que la automatización baje la conversión?",
      "answer": "Menú infinito, pedir demasiados datos, preguntar sin explicar, dar precio sin contexto. Corrección: 2-3 rutas, microcopy y rango condicionado."
    },
    {
      "question": "¿Cómo mantengo tono humano aunque use mensajes predefinidos?",
      "answer": "Personaliza el microcopy, explica por qué preguntas y deja opción de hablar con una persona. El mensaje \"para responderte en 1 mensaje\" humaniza."
    },
    {
      "question": "¿Necesito un CRM para esto o puedo hacerlo ligero?",
      "answer": "No necesariamente. Puedes empezar con canal final, rutas por intención y 4-6 datos mínimos. Si te da alergia la palabra CRM, hay alternativas ligeras."
    },
    {
      "question": "¿Cómo organizo esto si somos 2–5 personas contestando?",
      "answer": "Reglas claras: mismo primer mensaje, mismas rutas, mismos datos mínimos. Un documento o guion compartido evita que cada uno conteste distinto."
    },
    {
      "question": "¿Qué métricas miro para saber si está funcionando?",
      "answer": "% que pasan de entrada a datos mínimos, % que llegan a WhatsApp con contexto, % que cierran (cita o presupuesto aceptado)."
    },
    {
      "question": "¿En qué casos NO conviene filtrar demasiado al inicio?",
      "answer": "Volumen muy bajo (1-3 consultas/día), ventas 100% únicas y largas, o cuando tu oferta no está clara. En esos casos, el filtrado puede esperar."
    }
  ]
}`;

// Brief example
const briefExample = `# Plantillas de Briefs (SEO + AEO/GEO) para Inkup  
## Estructura por tipo de página: **Pilar**, **Satélite**, **Plantilla (Programmatic)**

> Objetivo: que cualquier persona (o IA) pueda producir contenido consistente, útil, “citable” por LLMs y alineado con el producto.  
> Regla madre: **1 URL = 1 intención dominante** (aunque un Pilar cubra sub-intenciones, su intención principal es única).

---

## 0) Campos comunes (se rellenan siempre)

### 0.1 Identidad
- **ID**: (P001 / S101 / T901…)
- **Tipo**: Pilar | Satélite | Plantilla
- **Cluster**: (1–12)
- **Prioridad**: P1 | P2 | P3
- **Slug**:
- **H1 (título final)**:
- **Título alternativo (opcional)**:
- **Fecha target publicación (opcional)**:

### 0.2 Intención y lector
- **Intención dominante (1 frase)**:  
  > “El usuario quiere ________ para ________.”
- **ICP exacto**: (sector + rol + contexto: IG-first/WA-first, volumen, equipo)
- **Momento**: Problema | Solución | Decisión
- **Dolor operativo**: (2–3 bullets concretos del día a día)
- **Resultado deseado por el lector**: (1 frase)

### 0.3 Alineación con Inkup (obligatorio)
- **Conexión Inkup (1–2 líneas)**: “Cómo encaja Inkup sin vender”
- **Límites / NOs relevantes** (2–4 bullets):
  - No es CRM enterprise
  - No es IA mágica
  - No sustituye ventas consultivas largas
  - No arregla captación si no hay demanda

### 0.4 GEO/AEO: Bloque TL;DR (citable)
- **Título**: TL;DR - [subtitle específico del tema en 1 frase]
- **Párrafo introductorio (1–2 frases)**: Definición o solución cerrada, sin contexto, sin storytelling. Debe poder citarse tal cual.
- **Bullets (4–6)**:
  - Formato: **Frase clave en negrita** + explicación en texto regular.
  - Cada bullet = una idea accionable o criterio de decisión.
  - Ejemplo: "**Recoge consentimiento explícito** antes de enviar mensajes de marketing."

### 0.5 Bloque citable (obligatorio)
- Tipo: **Checklist / Tabla / Matriz / Regla / Modelo 3 niveles**
- Debe ser **autoexplicativo** y reutilizable.

### 0.6 Enlazado interno (obligatorio)
- **Parent**: (si aplica)
- **Siblings**: (2–3)
- **Next step**: (pilar siguiente o plantilla)
- **Links out** (opcional): solo si aporta autoridad real

### 0.7 FAQ targets (obligatorio)
- **8–12 preguntas** reales en lenguaje de usuario (no “SEO-robot”)

---

# 1) Plantilla de Brief — PILAR (Hub)

## 1.1 Propósito del Pilar
- Ser la **guía maestra** del tema (cluster).
- Construir **autoridad temática**.
- Organizar el enlazado hacia satélites y plantillas.
- Definir: qué es / cómo funciona / cuándo sí / cuándo no.

## 1.2 Señales de un buen Pilar
- Puede resumirse en: **definición + modelo mental + proceso**.
- Resuelve el 80% del tema sin necesidad de leer otras páginas.
- Aun así, **invita naturalmente** a profundizar con satélites.

---

## 1.3 Brief de Pilar — estructura (copiar/pegar y rellenar)

### A) TL;DR (Snippet GEO / AEO)
**Estructura del bloque:**

1. **Título**: TL;DR - [subtitle que resume el tema en 1 frase]
   - Ejemplo: "TL;DR - Cómo evitar un ban de WhatsApp Business"

2. **Párrafo introductorio (1–2 frases)**:
   - "{{Concepto}} es…" o "Para {{objetivo}}, haz {{proceso corto}}…"
   - Sin contexto del negocio en el primer párrafo (si es definicional).
   - Sin marketing.

3. **Bullets (4–6)**:
   - Formato: **Frase clave** + explicación.
   - Ejemplo: "**Unifica la entrada** — un solo punto de enlace para todos los canales."
   - Ejemplo: "**Pide solo datos mínimos** — lo que cambia tu respuesta, no más."

> Reglas:
> - Sin "depende" como excusa (si depende, explicas la decisión en 1 frase).
> - Cada bullet debe ser accionable o un criterio claro.

---

### B) Definición y encuadre (qué es / qué no es)
- **Definición práctica (expandida)**: 3–5 líneas
- **Qué NO es**: 3–6 bullets
- **Cuándo aparece este problema**: 3–5 bullets (contexto operativo)

---

### C) Diagnóstico (señales + coste)
- **Señales claras (checklist)**: 8–15 bullets
- **Coste operativo**:
  - tiempo perdido (min/día)
  - oportunidades perdidas (con ejemplos)
  - estrés/interruptions (ejemplos)
- **Mini test** (opcional): “Si cumples 3 de 5 → necesitas sistema”

**Bloque citable recomendado:**  
✅ Checklist “señales de caos” + mini test

---

### D) Modelo mental (framework principal)
Elegir 1 (máximo 2) modelos:

**Opción 1 — 3 niveles de madurez**
1. Manual ordenado  
2. Semi-sistematizado  
3. Sistema estructurado (flujo + filtrado)

**Opción 2 — Matriz de decisión**
- volumen bajo/alto × variabilidad baja/alta

**Opción 3 — Flujo por intención**
- info / presupuesto / cita

**Bloque citable recomendado:**  
✅ Tabla “nivel → qué hacer → errores comunes”

---

### E) Proceso paso a paso (cómo implementarlo)
- **7–10 pasos** máximos
- Cada paso:
  - acción concreta
  - ejemplo
  - error típico a evitar

Ejemplo de formato:
1) Define canal final  
2) Crea punto de entrada único  
3) Diseña preguntas mínimas  
4) Crea rutas por intención  
5) Establece scripts de transición  
6) Define reglas de priorización  
7) Ajusta fricción y tono  
8) Mide y mejora

---

### F) Errores y anti-patrones (obligatorio)
- 7–12 errores comunes
- Incluye “por qué ocurre” + “cómo corregir”
- Ejemplo:
  - “Menú infinito” → confusión → abandono
  - “Pedir demasiados datos” → fricción → caída de conversión

**Bloque citable recomendado:**  
✅ Lista “errores + corrección rápida”

---

### G) Cuándo sí / cuándo no (límite estratégico)
**Cuándo sí**:
- 5–8 bullets con señales operativas

**Cuándo no**:
- 5–8 bullets (bajo volumen, ventas únicas, CRM enterprise ya implantado, etc.)

> Esta sección aumenta confianza y reduce leads sin fit.

---

### H) Toolkit: recursos accionables
- Enlazar (o incluir mini-preview) de:
  - plantillas universales (T901–T906)
  - scripts por intención
  - checklists por canal (IG/WA)
  - ejemplos de flujos por sector

---

### I) FAQ profunda (12–18 preguntas)
- Deben cubrir:
  - dudas operativas
  - objeciones
  - casos límite
  - decisiones (“¿qué hago si…?”)

---

### J) Plan de enlaces internos del Pilar (obligatorio)
- **Links a satélites**: 8–20 (ordenados por subtema)
- **Links a plantillas**: 3–10 (las más relevantes)
- **Links a pilares vecinos**: 2–4 (ruta de intención)

---

### K) “Conexión Inkup” (sin CTA agresiva)
- 2–4 bullets:
  - qué parte del proceso simplifica Inkup
  - cuándo encaja
  - cuándo no es necesario

---

# 2) Plantilla de Brief — SATÉLITE (Spoke)

## 2.1 Propósito del Satélite
- Resolver una **micro-intención** (long-tail) con la mejor respuesta posible.
- Ser altamente **citable** (listas, scripts, pasos).
- Enviar autoridad al pilar padre.

## 2.2 Señales de un buen Satélite
- Puedes leerlo en 2–4 minutos y aplicarlo hoy.
- Tiene un “bloque citable” brutal (script o checklist).
- El usuario queda listo para el siguiente paso (link al pilar o plantilla).

---

## 2.3 Brief de Satélite — estructura (copiar/pegar y rellenar)

### A) TL;DR (Snippet GEO / AEO)
**Estructura:**
1. **Título**: TL;DR - [subtitle del micro-tema]
2. **Párrafo introductorio (1–2 frases)** que responda completamente.
3. **Bullets (3–5)** con formato **Frase clave** + explicación.

> Evita "depende"; si depende, da el criterio en una frase.

---

### B) Contexto mínimo (2–4 líneas)
- Define el escenario típico:
  - “Te escriben ‘precio?’ / ‘tenéis hueco?’…”
  - “Usas IG/WA y no tienes sistema…”

---

### C) Solución paso a paso (checklist principal)
- 5–12 pasos como máximo
- Cada paso debe ser accionable y breve

**Bloque citable recomendado:**  
✅ Checklist de implementación

---

### D) Scripts listos (si aplica)
- 2–6 scripts:
  - versión corta
  - versión con explicación (por qué pides datos)
  - versión “tono cercano”

Formato sugerido:
- **Script 1 (mensaje inicial)**  
- **Script 2 (pedir datos mínimos)**  
- **Script 3 (derivar a link / canal final)**

**Bloque citable recomendado:**  
✅ Scripts copiable-pegar

---

### E) Errores comunes (3–7)
- error → consecuencia → corrección en 1 frase

---

### F) Mini “cuándo NO” (2–4 bullets)
- Ej.: “Si tu servicio es 100% único, no uses plantilla rígida…”

---

### G) FAQ (6–10)
- preguntas concretas del caso (“¿y si no me dan el dato?”, “¿y si me insisten con precio?”)

---

### H) Enlazado interno (obligatorio)
- **Parent**: pilar padre
- **Hermanos**: 2–3 satélites cercanos
- **Siguiente paso**:
  - pilar de cualificación (P003) o link en bio (P005) o plantillas (P009)

---

### I) Conexión Inkup (1–2 líneas)
- “Esto se resuelve con un flujo previo que capture X datos antes del chat final.”

---

# 3) Plantilla de Brief — PLANTILLA (Programmatic)

## 3.1 Propósito de la Plantilla
- Ser un **artefacto operativo**: preguntas + por qué + decisión.
- Capturar long-tail de alta intención: “qué preguntar para X”.
- Ser extremadamente citable por LLMs (tablas).

## 3.2 Señales de una buena Plantilla
- Tiene tabla Pregunta → Motivo → Ejemplo → Decisión.
- Incluye versión mínima y completa.
- Evita pedir datos innecesarios (reduce abandono).
- Es específica del sector/servicio y tiene límites.

---

## 3.3 Brief de Plantilla — estructura (copiar/pegar y rellenar)

### A) TL;DR (Snippet GEO / AEO)
**Estructura:**
1. **Título**: TL;DR - [subtitle de la plantilla]
2. **Párrafo introductorio**: "Para {{objetivo}}, pregunta {{X}} para {{Y}} antes de {{acción final}}."
3. **Bullets (3–5)** con formato **Frase clave** + explicación (datos mínimos, criterios, etc.).

---

### B) Cuándo usar esta plantilla (señales)
- 5–8 bullets:
  - “muchas consultas repetidas”
  - “precios variables”
  - “agenda limitada”
  - “se pierde tiempo preguntando lo básico”

---

### C) Datos mínimos que cambian la decisión (núcleo)
- Lista de 3–6 datos imprescindibles
- Explica en 1 línea por dato “qué permite decidir”

---

### D) Tabla principal (obligatoria)
Columnas recomendadas:
1. **Pregunta exacta**
2. **Por qué se pregunta**
3. **Ejemplo de respuesta**
4. **Qué decisión habilita**
5. *(Opcional)* “riesgo si no la preguntas”

> Esta tabla es el “motor GEO”.  
> Hazla legible, no infinita.

---

### E) Versión mínima (3–5 preguntas)
- Para máxima conversión y baja fricción

### F) Versión completa (8–12 preguntas)
- Para casos con más variabilidad o alto ticket

---

### G) Scripts de introducción (microcopy para no espantar)
- “Para darte un presupuesto realista, necesito 3 datos…”
- “Te va a llevar 30 segundos…”
- “Con esto te respondo más rápido…”

**Bloque citable recomendado:**  
✅ Microcopy por tono (neutral / cercano / premium)

---

### H) Errores frecuentes del sector (y cómo evitarlos)
- 5–10 errores típicos:
  - pedir datos sensibles
  - pedir demasiado pronto
  - preguntar sin explicar
  - no separar intención (cita vs presupuesto)

---

### I) Reglas de decisión (router lógico)
- Si respuesta = X → acción = Y  
Ejemplos:
- “Si presupuesto < ___ → descartar / ofrecer alternativa”
- “Si no hay fecha flexible → proponer lista de espera”
- “Si no cumple requisito → no agendar”

**Bloque citable recomendado:**  
✅ Tabla “condición → decisión”

---

### J) FAQ de plantilla (6–10)
- “¿Puedo quitar preguntas?”
- “¿Cuántas preguntas son demasiadas?”
- “¿Qué hago si no responden una?”

---

### K) Enlazado interno (obligatorio)
- Link a:
  - **P003** (cualificar)
  - **P006** (agenda) si aplica
  - **satélites** relevantes (precio, hueco, referencias)
  - **objeciones** (O001/O002) si es fricción/tono

---

### L) Conexión Inkup (1–2 líneas)
- “Esta plantilla se puede implementar como flujo por servicio, con rutas y salida a WhatsApp con contexto.”

---

## 4) Checklist final de calidad (para cualquier tipo)

Antes de marcar “READY”:
- [ ] ¿El bloque TL;DR se sostiene solo?
- [ ] ¿Hay al menos 1 bloque citable (tabla/checklist/modelo)?
- [ ] ¿Se nota claramente 1 intención dominante?
- [ ] ¿Incluye límites/NOs para evitar expectativas falsas?
- [ ] ¿Tiene FAQs reales (no inventadas estilo SEO)?
- [ ] ¿El enlazado interno está definido?
- [ ] ¿Inkup encaja como consecuencia lógica (sin vender)?

---

## 5) Recomendación de uso (operativa)
- Para cada **Pilar**, crea:
  - 1 brief pilar + 6–12 briefs satélite + 3–10 briefs plantilla relacionados.
- Publica por **bloques** (cluster completo) para que el grafo nazca fuerte.
- Itera con GSC:
  - impresiones altas / CTR bajo → ajustar H1 + snippet
  - queries nuevas → crear satélite nuevo o expandir FAQ

---

## Apéndice: Formato TL;DR de referencia (para implementación)

**Estructura:**
1. **Título**: TL;DR - [subtitle]
2. **Párrafo introductorio (1–2 frases)**
3. **Bullets (4–6)**:
   - **Frase clave** + explicación

**Ejemplo (WhatsApp Ban):**

**TL;DR - How to Avoid a WhatsApp Ban**

The best way to avoid a WhatsApp Business account ban is by prioritizing compliance, consent, and content quality. WhatsApp's 2025 policy updates reinforce this by tying message delivery and billing to user engagement and message type.

- **Collect explicit opt-ins** before sending any marketing or broadcast messages. Consent must be verifiable and can be collected on or off WhatsApp.
- **Honor opt-outs immediately** and keep broadcast lists up to date to avoid being flagged or reported.
- **Stay compliant with legal, data and industry-specific restrictions** — certain sectors have strict or prohibited use cases.
- **Send fewer but higher-quality messages** that are valuable, well-formatted, and expected. Poor message quality or excessive volume can trigger spam reports.`;

// ✅ Esto lo convierte en texto seguro (escapado)
const satelliteExampleSafe = JSON.stringify(satelliteExample);
const briefExampleSafe = JSON.stringify(briefExample);

const prompt = `
Eres una experta en SEO/AEO/GEO con 15+ años de experiencia.
Escribes en español (España), tono práctico, directo, sin paja. Sin emojis.

OBJETIVO:
Redacta un artículo SATÉLITE que ataque una duda concreta y enlace al pilar cuando tenga sentido.

REFERENCIAS IMPORTANTES:
1) Plantillas de brief (Pilar, Satélite, Plantilla) — usa la sección SATÉLITE como guía:
${briefExampleSafe}

2) Estructura brief (resumen): sigue la estructura SATÉLITE + TL;DR + checklist + scripts + errores + mini FAQ + enlazado interno.
3) Ejemplo de post satélite (texto literal):
${satelliteExampleSafe}

METADATOS DEL ARTÍCULO:
- Tipo: SATELITE
- Título/H1: ${safe(meta.h1)}
- Slug: ${safe(meta.slug)}
- Intención: ${safe(meta.intention)}
- Contexto producto: ${safe(row.inkup_connection)}

CAMPOS (usa estos valores cuando existan, genera el resto):
- slug: extrae solo el path final de "${safe(meta.slug)}" (ej: sintomas-caos-mensajes-clientes)
- title: "${safe(meta.h1)}"
- author: "${safe(meta.author)}"
- authorSlug: "${safe(meta.authorSlug)}"
- description, excerpt, quickAnswerSubtitle, quickAnswer, oneLineDefinition: genera según el contenido
- image: "/blog/[slug-tema].jpg" (convención)
- publishedAt: fecha actual en YYYY-MM-DD
- readingTime: estima según longitud (ej: "6 min" o "8 min")
- tags: array de 4-6 slugs relevantes
- sections: array con los h2 del content (genera)
- sources: []
- howTo: objeto con name, totalTimeMinutes, tools, steps (genera si aplica)
- featured: false
- content: HTML del artículo (estructura SATÉLITE: TL;DR + checklist + scripts + errores + mini FAQ)
- faq: array de 6-10 objetos { question, answer }

REGLAS DE FORMATO:
- Devuelve UN ÚNICO OBJETO JSON válido con la misma estructura que el ejemplo.
- NO incluyas markdown alrededor (sin \`\`\`json ni \`\`\`).
- El campo "content" debe contener HTML válido (usa solo <h2>, <h3>, <p>, <ul>, <ol>, <li>, <strong>, <em>, <a>, <table>, <blockquote>).
- NO uses <h1> en content.

AÑADE (si aplica):
- GEO snippet: "${safe(meta.geo_snippet)}"
- Bloque citable: "${safe(meta.block_citable)}"

ENLAZADO INTERNO:
Plan: "${safe(meta.internal_links_plan)}"
Menciona 1–3 referencias internas (sin URLs) del tipo: “Si esto te pasa a menudo, revisa también: …”

NO inventes cifras ni herramientas si no están justificadas.
Devuelve SOLO el objeto JSON, sin texto antes ni después. El JSON debe ser parseable directamente.
`.trim();

return [{ json: { prompt, meta } }];
