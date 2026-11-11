> **ARCHIVO · material de Kalmaa, no de Inkup.** Enfoque del 7 de noviembre de 2026, cuando el proyecto era «Inkup · ManyChat en español». No aplicar a inkup.io (Inkup es solo tatuaje). Para Kalmaa manda el «00 BRIEF PARA CLAUDE CODE · Kalmaa» del Drive, que cambia producto y precios. Se guarda aquí porque el mapa de proyectos del Drive apunta a esta carpeta.

# Brief · Home (F1-1)

Búsquedas objetivo: "respuesta automática instagram", "mensajes automáticos instagram", "alternativa a manychat", "manychat español".

## Metadata (`app/layout.tsx`)

- **title:** Respuestas automáticas en Instagram en español | Inkup
- **description:** El ManyChat en español: responde comentarios, historias y DMs de Instagram al momento y recibe en WhatsApp clientes listos. Precio fijo, sin pagar por contacto.
- **openGraph / twitter:** mismo title y description.

## Hero (`components/home/home-hero.tsx`)

- **Antetítulo:** El ManyChat en español
- **H1:** Respuestas automáticas en Instagram que te dejan el cliente **listo en WhatsApp** (resaltar "listo en WhatsApp" con el degradado actual)
- **Subtítulo:** Cuando alguien comenta, responde a una historia o te escribe una palabra clave, Inkup le contesta por DM al momento. Y si quiere precio o cita, le abre WhatsApp contigo con todo ya escrito.
- **Botón principal:** Empezar la prueba gratis (mismo enlace `SIGNUP_URL`)
- **Botón secundario:** Ver cómo funciona (`#como-funciona`)
- **Línea bajo los botones:** En español · Precio fijo, sin pagar por contacto · 7 días de prueba
- **Prueba social:** mantener "Más de 3.300 profesionales en 15 países".

## Problema (`components/home/problem-section.tsx`)

- **Título:** ¿Sigues contestando Instagram a mano?
- Tres tarjetas:
  1. **"Precio", "info", "link"… cien veces.** Cada comentario que contestas a mano llega tarde, y muchos no los contestas.
  2. **Diez mensajes para dar un precio o una cita.** El cliente pregunta, tú preguntas, y se enfría por el camino.
  3. **Herramientas en inglés que cobran por contacto.** Cuanto mejor te va, más pagas.

## Cómo funciona (`components/home/how-it-works.tsx`)

- **Título:** Así funciona
1. **Elige la palabra y el mensaje.** Por ejemplo: quien comente PRECIO recibe tu enlace por DM. Funciona en comentarios, respuestas a historias y DMs.
2. **Inkup responde al momento.** Cada persona recibe su DM, aunque te comenten cien a la vez.
3. **El cliente llega a WhatsApp con todo escrito.** Si quiere precio o cita, el asistente le pregunta lo necesario y le abre WhatsApp contigo con el mensaje listo. Tú solo das precio.

Bloque extra opcional: **"Y si prefieres, pídeselo a ChatGPT"** — Con el conector de Inkup creas, pausas o revisas tus automatizaciones de Instagram hablando con ChatGPT o Claude.

## Para quién (nueva franja de sectores, si encaja en el diseño)

Tiendas · Estética y belleza · Clínicas · Academias y formación · Fitness · Restaurantes · Coaches y creadores · Agencias · Tatuaje y piercing

## FAQ (`components/home/home-faq.tsx`, con JSON-LD `FAQPage`)

1. **¿Cómo pongo un mensaje automático en Instagram?** Conectas tu Instagram a Inkup, eliges qué lo dispara (un comentario, una respuesta a historia o una palabra en DM) y escribes el mensaje. Desde ese momento, cada persona que lo active recibe tu DM al instante.
2. **¿Es como ManyChat?** Sí, hace lo principal que se usa de ManyChat en Instagram (comentario → DM, historias y palabras clave), pero en español, con precio fijo y con el paso a WhatsApp ya incluido. No cobramos por contacto.
3. **¿Se nota que es automático?** El mensaje lo escribes tú, con tu tono. Lo que cambia es que llega al momento.
4. **¿Qué diferencia hay con las respuestas automáticas gratis de Instagram?** Las de Meta funcionan desde el escritorio, con pocas palabras exactas y cierto retraso. Inkup responde al momento y añade el paso a WhatsApp con la consulta completa y un panel con todos tus contactos.
5. **¿Contesta en WhatsApp por mí?** No. En Instagram responde de forma automática; en WhatsApp te llega el cliente con su consulta escrita y la conversación la llevas tú.
6. **¿Cuánto cuesta?** Desde 12 €/mes + IVA con pago anual. 7 días de prueba y sin permanencia. Ver /precios.
7. **¿Funciona en mi país?** Sí. Tenemos clientes en 15 países y el asistente funciona en 5 idiomas.

**[CONFIRMAR con Carlos antes de publicar]:** si la conexión con Instagram usa la API oficial de Meta, añadir la pregunta "¿Es seguro para mi cuenta?" con esa respuesta.
