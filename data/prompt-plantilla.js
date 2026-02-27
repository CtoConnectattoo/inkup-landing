// PROMPT BUILDER — PLANTILLA
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

// ✅ Ejemplo: plantilla-cualificar-clientes-servicios
const satelliteExample = `
{
  "slug": "plantilla-cualificar-clientes-servicios",
  "title": "Plantilla para cualificar clientes en negocios de servicios",
  "description": "Preguntas exactas para filtrar y cualificar clientes sin perder conversiones. Plantilla mínima en 7 preguntas + variantes por intención (cita, presupuesto, info).",
  "excerpt": "Una plantilla de cualificación debe pedir solo los datos que cambian tu decisión. Aquí la plantilla mínima, la completa y el microcopy listo para copiar.",
  "image": "/blog/atender-clientes-sin-perder-mensajes.jpg",
  "author": "María Hidalgo",
  "authorSlug": "maria-hidalgo",
  "publishedAt": "2026-02-15",
  "readingTime": "12 min",
  "tags": [
    "gestion-consultas",
    "whatsapp",
    "instagram",
    "plantilla",
    "cualificacion",
    "servicios"
  ],
  "quickAnswerSubtitle": "Plantilla mínima en 7 preguntas",
  "quickAnswer": [
    "**Intención** — Qué necesita exactamente (servicio).",
    "**Fecha/urgencia** — Para cuándo lo necesita.",
    "**Contexto mínimo** — Una frase de objetivo.",
    "**Requisitos clave** — Zona, duración, presupuesto, etc.",
    "**Forma de contacto** — WhatsApp, llamada o email."
  ],
  "oneLineDefinition": "Una plantilla de cualificación para servicios debe pedir solo los datos que cambian tu decisión: intención, servicio exacto, contexto mínimo, fecha, requisitos y forma de contacto.",
  "sections": [
    "Cuándo usar",
    "Regla madre",
    "Plantilla mínima",
    "Plantilla completa",
    "Tabla citable",
    "Microcopy",
    "Anti-curiosos",
    "Variantes por intención",
    "Implementación modo sistema",
    "Ejemplos por sector",
    "Errores típicos",
    "FAQs",
    "El siguiente paso (si lo necesitas)"
  ],
  "sources": [],
  "howTo": {
    "name": "Implementar plantilla en 3 pasos",
    "totalTimeMinutes": 30,
    "tools": [
      "Contexto mínimo",
      "Canal de entrada",
      "Mensaje de cierre"
    ],
    "steps": [
      {
        "name": "Define contexto mínimo",
        "text": "4–6 datos: servicio, fecha, contexto, requisitos, canal, contacto."
      },
      {
        "name": "Decide dónde ocurre",
        "text": "DM = puerta. WhatsApp = cierre. Link/flujo si hay volumen."
      },
      {
        "name": "Estandariza el cierre",
        "text": "Un mensaje con resumen + propuesta + siguiente paso."
      }
    ]
  },
  "featured": false,
  "faq": [
    {
      "question": "¿Cuántas preguntas son demasiadas?",
      "answer": "Son demasiadas cuando el cliente no entiende por qué se piden o no ve progreso. Empieza con 3–5 (mínima) y amplía solo si responde."
    },
    {
      "question": "¿Pido presupuesto orientativo sí o no?",
      "answer": "Sí cuando filtra de verdad (premium / alta comparación). No si te baja conversión o la gente no sabe; en ese caso pide \"rango\" o \"prioridad\" en vez de cifra."
    },
    {
      "question": "¿La cualificación se hace en Instagram DM?",
      "answer": "Mejor no. El DM funciona como puerta. Si preguntas demasiado en DM, se rompe la conversación. Mejor guiar a un punto único (link o flujo) o a WhatsApp con contexto."
    },
    {
      "question": "¿Qué hago con el clásico \"precio?\"",
      "answer": "No des cifra suelta. Devuelve una mini-plantilla: servicio + fecha + contexto 1 frase. Con eso das rango útil."
    }
  ],
  "content": "<h2>Cuándo usar esta plantilla</h2><p>Úsala si:</p><ul><li>Te llegan <a href=\"/blog/sintomas-caos-mensajes-clientes/\">\"hola / info / precio / tenéis hueco\"</a> sin contexto.</li><li>Terminas en 15–25 mensajes para cerrar algo que debería ser simple.</li><li>Te cuesta separar <strong>clientes reales</strong> de <strong>curiosos</strong>.</li><li><a href=\"/blog/gestion-consultas-clientes/\">Tienes 2+ canales</a> (Instagram + WhatsApp, o WhatsApp + Google).</li></ul><p>No la uses (todavía) si:</p><ul><li>Solo recibes 1–3 consultas al día y respondes con calma.</li><li>Tu venta es 100% consultiva y cada caso es único (pocas repeticiones).</li></ul><h2>Regla madre (para no pasarte preguntando)</h2><blockquote><p><strong>Pregunta solo lo que cambia tu decisión.</strong><br>Si la respuesta no cambia (1) el precio orientativo, (2) el hueco, (3) el esfuerzo, o (4) si aceptas el caso… no lo pidas al principio.</p></blockquote><p>Esta regla es oro para <a href=\"/blog/por-que-pierdes-clientes-por-responder-tarde/\">conversión</a> (SEO/UX) y para operativa (negocio real).</p><h2>La plantilla universal (mínima) en 7 preguntas</h2><p>Esta versión está pensada para <strong>no perder conversiones</strong>. Si alguien abandona aquí, normalmente no era lead caliente.</p><h3>Plantilla mínima (copia/pega)</h3><ol><li><strong>¿Qué necesitas exactamente? (servicio)</strong></li><li><strong>¿Para cuándo lo necesitas? (fecha/urgencia)</strong></li><li><strong>Contexto mínimo (1 frase):</strong> ¿qué objetivo tienes / qué te gustaría conseguir?</li><li><strong>Requisitos o limitaciones clave:</strong> (zona, duración, presupuesto, condiciones, ubicación… según el servicio)</li><li><strong>¿Tienes alguna referencia/foto/ejemplo?</strong> (si aplica)</li><li><strong>¿Cómo prefieres continuar?</strong> WhatsApp / llamada / email</li><li><strong>Datos de contacto:</strong> nombre + (teléfono o email)</li></ol><blockquote><p>Si tu servicio es \"de agenda\" (citas), prioriza fecha + flexibilidad.<br>Si tu servicio es \"de presupuesto\", prioriza alcance + condiciones.</p></blockquote><h2>La plantilla completa (cuando el lead ya está dentro)</h2><p>Úsala cuando:</p><ul><li>el cliente ya mostró intención (respondió a la mínima),</li><li>o tu servicio tiene mucha variabilidad y un error cuesta caro.</li></ul><h3>Plantilla completa (12–14 preguntas, modular)</h3><p>Añade a la mínima:</p><ul><li>Presupuesto orientativo (si filtra bien en tu sector)</li><li>Disponibilidad / franjas (si es cita)</li><li>Ubicación exacta (si hay desplazamiento)</li><li>Preferencias (estilo, materiales, modalidad online/presencial)</li><li>Criterio de éxito (\"¿cómo sabrás que esto ha salido bien?\")</li><li>Condiciones (alergias/contraindicaciones básicas <strong>solo si aplica</strong> y sin pedir datos sensibles innecesarios)</li></ul><h2>Tabla citable: pregunta → objetivo → decisión</h2><table><thead><tr><th>Pregunta</th><th>Qué te da</th><th>Qué decisión desbloquea</th></tr></thead><tbody><tr><td>¿Qué servicio necesitas exactamente?</td><td>Intención real + tipo de trabajo</td><td>Si encaja / a qué ruta va</td></tr><tr><td>¿Para cuándo? (fecha/urgencia)</td><td>Prioridad + viabilidad</td><td>Si hay hueco / alternativa</td></tr><tr><td>Contexto mínimo (1 frase)</td><td>Evita \"precio sin contexto\"</td><td>Rango orientativo / siguiente paso</td></tr><tr><td>Requisitos/limitaciones clave</td><td>Reduce errores y malentendidos</td><td>Si necesitas más info o descartas</td></tr><tr><td>Referencias / ejemplo</td><td>Alinea expectativas</td><td>Estimación más fiable</td></tr><tr><td>Canal preferido</td><td>Baja fricción</td><td>Cómo cerrar rápido</td></tr><tr><td>Datos de contacto</td><td>Trazabilidad</td><td>Seguimiento / confirmación</td></tr></tbody></table><blockquote><p>Esta tabla es especialmente útil para AEO/GEO porque explica el \"por qué\" de cada dato sin ponerse intensa.</p></blockquote><h2>Cómo presentar la plantilla sin sonar robótico (microcopy listo)</h2><p>Lo que mata conversiones no es preguntar: es <strong>preguntar sin explicar</strong>.</p><h3>Mensaje de entrada (WhatsApp o DM)</h3><blockquote><p>\"¡Genial! Para ayudarte rápido y darte una respuesta clara, te hago <strong>3 preguntas rápidas</strong> (1 minuto).\"</p></blockquote><h3>Mensaje para pedir contexto (cuando preguntan \"precio\")</h3><blockquote><p>\"Para darte un precio realista (y no un número al aire), dime: <strong>servicio exacto + para cuándo + 1 frase de contexto</strong>.\"</p></blockquote><h3>Mensaje para separar cita vs info</h3><blockquote><p>\"¿Buscas <strong>cita</strong> o solo <strong>info/presupuesto</strong>? Te llevo por el camino correcto y lo cerramos en pocos mensajes.\"</p></blockquote><h2>Plantilla \"anti-curiosos\" (sin ser borde)</h2><p>Esta es la versión cuando te entra mucho \"solo curioseo\".</p><blockquote><p>\"Perfecto 😊 Para decirte si puedo ayudarte, dime porfa:<br>1) qué servicio buscas,<br>2) para cuándo,<br>3) y un rango orientativo de presupuesto (aunque sea aproximado).<br>Con eso te respondo directo.\"</p></blockquote><p><strong>Por qué funciona:</strong> pide un \"dato de compromiso\" (fecha/presupuesto) sin atacar.</p><h2>Variantes rápidas por intención (3 rutas)</h2><p>La mayoría de negocios de servicios viven aquí. Usa una u otra según el mensaje inicial.</p><h3>Ruta A — \"Quiero cita / ¿tenéis hueco?\"</h3><ol><li>Servicio exacto</li><li>Fecha preferida + <strong>flexibilidad</strong> (mañana/tarde, esta semana/next)</li><li>Duración aproximada / requisitos (según servicio)</li><li>Datos contacto</li></ol><p><strong>Cierre tipo:</strong></p><blockquote><p>\"Perfecto. Con eso ya puedo mirarte hueco. ¿Te viene mejor <strong>X</strong> o <strong>Y</strong>?\"</p></blockquote><h3>Ruta B — \"Precio / presupuesto\"</h3><ol><li>Servicio exacto + alcance</li><li>Contexto mínimo (objetivo)</li><li>Fecha/plazo</li><li>Requisitos/condiciones</li><li>(Opcional) Presupuesto orientativo</li><li>Contacto</li></ol><p><strong>Cierre tipo:</strong></p><blockquote><p>\"Con lo que me dices, el rango suele estar entre <strong>X–Y</strong> dependiendo de <strong>Z</strong>. Si te cuadra, te propongo siguiente paso.\"</p></blockquote><h3>Ruta C — \"Info\"</h3><ol><li>Qué info exacta busca (ubicación, requisitos, proceso, tiempos)</li><li>Si quiere cita o solo info</li><li>Contacto (si pide algo que requiere seguimiento)</li></ol><p><strong>Cierre tipo:</strong></p><blockquote><p>\"Te lo resumo en 3 líneas y, si quieres, te dejo el siguiente paso para reservar.\"</p></blockquote><h2>Implementación \"modo sistema\" (<a href=\"/blog/no-necesito-crm-solo-orden/\">sin CRM, sin líos</a>)</h2><p>Si quieres pasar de \"plantilla en tu cabeza\" a <a href=\"/blog/gestion-consultas-clientes/\">proceso</a>:</p><h3>Paso 1: define tu \"contexto mínimo\" (4–6 datos)</h3><ul><li>Servicio</li><li>Fecha / urgencia</li><li>Contexto 1 frase</li><li>Requisitos clave (según sector)</li><li>Canal y contacto</li></ul><h3>Paso 2: decide dónde ocurre (DM, WhatsApp o link)</h3><ul><li>Si tienes muchos DMs: <strong>DM = puerta</strong> → manda a <a href=\"/blog/como-organizar-mensajes-clientes-sin-crm/\">link/flujo</a>.</li><li>Si WhatsApp te absorbe: usa el mensaje de entrada + plantilla mínima.</li></ul><h3>Paso 3: estandariza el cierre</h3><p>Tu objetivo: que el <a href=\"/blog/como-responder-mas-rapido-sin-equipo/\">cierre</a> sea <strong>un mensaje</strong> con:</p><ul><li>resumen + propuesta + siguiente paso.</li></ul><h2>Ejemplos por sector (para adaptar sin inventar)</h2><p>No cambies la plantilla entera: cambia solo 1–2 preguntas \"variable\".</p><h3>Ejemplo: estética / belleza</h3><ul><li>Variable clave: <strong>tipo de piel/condiciones + zona + objetivo</strong></li></ul><blockquote><p>\"¿Qué tratamiento? ¿Qué zona? ¿Objetivo? ¿Para cuándo?\"</p></blockquote><h3>Ejemplo: tatuajes/piercing</h3><ul><li>Variable clave: <strong>zona + tamaño + referencias</strong></li></ul><blockquote><p>\"¿Zona? ¿Tamaño aprox? ¿Tienes referencias?\"</p></blockquote><h3>Ejemplo: reformas / servicios hogar</h3><ul><li>Variable clave: <strong>m²/alcance + ubicación + urgencia</strong></li></ul><blockquote><p>\"¿Qué hay que hacer? ¿Metros/alcance? ¿Dónde? ¿Para cuándo?\"</p></blockquote><h3>Ejemplo: formación / mentoría</h3><ul><li>Variable clave: <strong>objetivo + nivel + disponibilidad</strong></li></ul><blockquote><p>\"¿Objetivo? ¿Nivel actual? ¿Cuándo podrías?\"</p></blockquote><h2>Errores típicos al cualificar (y cómo corregirlos)</h2><ol><li><strong>Preguntar demasiado pronto</strong><br>→ Solución: plantilla mínima primero, completa después.</li><li><strong>No separar intención</strong> (cita vs presupuesto vs info)<br>→ Solución: 3 rutas máximas.</li><li><strong>Pedir presupuesto sin contexto</strong><br>→ Solución: primero servicio + fecha + objetivo.</li><li><strong>No explicar por qué preguntas</strong><br>→ Solución: microcopy \"para responderte directo\".</li><li><strong>Responder con párrafos largos</strong><br>→ Solución: 1 pregunta por mensaje o formato lista (1–2–3).</li></ol><h2>El siguiente paso (si lo necesitas)</h2><p>Si tu problema no es \"saber qué preguntar\", sino <strong>hacer que siempre se pregunte</strong> (sin depender de tu energía), la plantilla se convierte en un <strong>flujo</strong>: rutas por intención + preguntas mínimas + salida a WhatsApp/email con el contexto listo. Ese es el punto donde una capa plug-and-play tipo Inkup encaja: ordena y estandariza la entrada para que el chat final sea para cerrar, no para recopilar datos.</p>"
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
3) Ejemplo de post (plantilla cualificar clientes):
${satelliteExampleSafe}

METADATOS DEL ARTÍCULO:
- Tipo: PLANTILLA
- Título/H1: ${safe(meta.h1)}
- Slug: ${safe(meta.slug)}
- Intención: ${safe(meta.intention)}
- Contexto producto: ${safe(row.inkup_connection)}

CAMPOS (usa estos valores cuando existan, genera el resto):
- slug: extrae solo el path final de "${safe(meta.slug)}" (ej: plantilla-cualificar-clientes-servicios)
- title: "${safe(meta.h1)}"
- author: "${safe(meta.author)}"
- authorSlug: "${safe(meta.authorSlug)}"
- description, excerpt, quickAnswerSubtitle, quickAnswer, oneLineDefinition: genera según el contenido
- image: "/blog/[slug-tema].jpg" (convención)
- publishedAt: fecha actual en YYYY-MM-DD
- readingTime: estima según longitud (ej: "10 min" o "12 min")
- tags: array de 4-6 slugs relevantes
- sections: array con los h2 del content (genera)
- sources: []
- howTo: objeto con name, totalTimeMinutes, tools, steps (genera si aplica)
- featured: false
- content: HTML del artículo (estructura PLANTILLA: tabla pregunta→objetivo→decisión + versión mínima/completa + microcopy + FAQs)
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
