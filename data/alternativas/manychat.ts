import type { AlternativaData } from './types'

export const manychatData: AlternativaData = {
  slug: 'manychat',
  competitorName: 'ManyChat',
  competitorSlug: 'manychat',

  h1: 'Alternativa a ManyChat en español: lo mismo en Instagram, con precio fijo',
  metaTitle: 'Alternativa a ManyChat en español, con precio fijo | Inkup',
  metaDescription:
    'Comentario → DM, respuestas a historias y palabras clave en Instagram, como ManyChat, pero en español, sin pagar por contacto y con paso a WhatsApp.',
  lastVerified: 'Noviembre 2026',

  tldr: {
    title: 'ManyChat vs Inkup en 30 segundos',
    items: [
      {
        emphasis: 'Hacen lo mismo en Instagram: ',
        text: 'comentario → DM, respuesta a historias y palabras clave en DM.',
      },
      {
        emphasis: 'Inkup es en español de verdad: ',
        text: 'interfaz, plantillas y soporte por WhatsApp.',
      },
      {
        emphasis: 'Precio fijo: ',
        text: 'ManyChat cobra por contactos activos desde marzo de 2026; Inkup no cobra por contacto.',
      },
      {
        emphasis: 'El paso a WhatsApp ya viene hecho: ',
        text: 'el asistente abre WhatsApp con la consulta escrita.',
      },
      {
        emphasis: 'Si necesitas campañas masivas y flujos complejos multicanal, ',
        text: 'ManyChat sigue siendo más completo.',
      },
    ],
  },

  problemSection: `
    <p>Si vendes o atiendes por Instagram, lo has vivido: un Reel funciona y te llenan los comentarios de "precio", "info" o "link". Contestarlos a mano llega tarde, y cada respuesta tardía es un cliente que se enfría.</p>
    <p>ManyChat popularizó la solución: que alguien comente una palabra y reciba un DM automático. El problema para muchos negocios en España y LATAM es otro: está en inglés, se configura con flujos y su precio sube con cada contacto.</p>
  `,

  competitorSection: `
    <p>ManyChat es una plataforma de marketing conversacional muy completa para Instagram, WhatsApp, Messenger y TikTok. Permite construir flujos visuales, secuencias, difusiones y conectar con muchas herramientas.</p>
    <p>Desde marzo de 2026 su precio depende de los contactos activos, y el plan gratuito permite 25. Para marcas con equipo de marketing y bases de datos grandes es una herramienta potente; para un negocio pequeño, suele ser más de lo que necesita y más caro de lo que espera.</p>
  `,

  differenceSection: `
    <p>Inkup se centra en lo que de verdad usan la mayoría de negocios en Instagram: responder al momento a comentarios, historias y DMs con una palabra clave. Lo eliges, escribes el mensaje y funciona.</p>
    <p>La diferencia está en lo que pasa después: si el cliente quiere precio o cita, el asistente de Inkup le hace las preguntas necesarias y le abre WhatsApp contigo con todo ya escrito. Y todo queda en un panel que puedes exportar.</p>
    <p>Además, puedes crear y gestionar tus automatizaciones hablando con ChatGPT o Claude gracias al conector de Inkup.</p>
  `,

  comparativaRows: [
    { criterio: 'Comentario → DM automático', inkup: 'yes', competitor: 'yes', inkupNote: 'En todos los planes' },
    { criterio: 'Respuesta automática a historias', inkup: 'yes', competitor: 'yes' },
    { criterio: 'Palabras clave en DM', inkup: 'yes', competitor: 'yes' },
    {
      criterio: 'Interfaz y soporte en español',
      inkup: 'yes',
      competitor: 'partial',
      inkupNote: 'Soporte por WhatsApp',
      competitorNote: 'Principalmente en inglés',
    },
    {
      criterio: 'Precio fijo sin pagar por contacto',
      inkup: 'yes',
      competitor: 'no',
      competitorNote: 'Cobra por contactos activos',
    },
    {
      criterio: 'Paso a WhatsApp con la consulta escrita',
      inkup: 'yes',
      competitor: 'partial',
      inkupNote: 'Incluido',
      competitorNote: 'Hay que configurarlo',
    },
    { criterio: 'Panel de consultas con exportación', inkup: 'yes', competitor: 'yes' },
    {
      criterio: 'Gestionar automatizaciones desde ChatGPT o Claude',
      inkup: 'yes',
      competitor: 'no',
      inkupNote: 'Conector MCP',
    },
    {
      criterio: 'Difusiones y campañas masivas',
      inkup: 'no',
      competitor: 'yes',
      inkupNote: 'No es el foco de Inkup',
    },
    { criterio: 'Flujos visuales complejos multicanal', inkup: 'no', competitor: 'yes' },
  ],

  whenCompetitorWins: [
    {
      scenario: 'Haces campañas masivas y secuencias de email/SMS',
      explanation: 'ManyChat tiene difusiones y secuencias que Inkup no ofrece.',
    },
    {
      scenario: 'Necesitas flujos complejos en varios canales a la vez',
      explanation: 'El constructor visual de ManyChat da más control.',
    },
    {
      scenario: 'Tu equipo trabaja en inglés y ya tiene ManyChat montado',
      explanation: 'Cambiar puede no compensar.',
    },
  ],

  faqs: [
    {
      question: '¿Inkup hace lo mismo que ManyChat en Instagram?',
      answer:
        'En lo principal, sí: comentario → DM, respuestas a historias y palabras clave en DM. No tiene difusiones masivas ni el constructor de flujos multicanal.',
    },
    {
      question: '¿Cuánto cuesta frente a ManyChat?',
      answer:
        'Inkup cuesta desde 12 €/mes + IVA con pago anual (29 €/mes + IVA en mensual) y no cobra por contacto. ManyChat cobra según tus contactos activos.',
    },
    {
      question: '¿Hay versión gratis?',
      answer:
        'Inkup tiene 7 días de prueba sin límite de consultas. ManyChat tiene un plan gratuito limitado a 25 contactos.',
    },
    {
      question: '¿Está en español?',
      answer: 'Sí: la herramienta, las plantillas y el soporte por WhatsApp.',
    },
    {
      question: '¿Puedo pasarme desde ManyChat?',
      answer: 'Sí. Recrea tus palabras clave y mensajes en Inkup; normalmente son pocas automatizaciones.',
    },
    {
      question: '¿Sirve para mi sector?',
      answer:
        'Sirve para cualquier negocio que recibe mensajes por Instagram: tiendas, estética, clínicas, academias, fitness, restaurantes, coaches, agencias o tatuaje.',
    },
  ],
}
