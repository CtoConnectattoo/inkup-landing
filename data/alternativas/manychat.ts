import type { AlternativaData } from './types'

export const manychatData: AlternativaData = {
  slug: 'manychat',
  competitorName: 'ManyChat',
  competitorSlug: 'manychat',

  h1: 'Alternativa a ManyChat para negocios de servicios: menos configuración, más consultas gestionadas',
  metaTitle: 'Alternativa a ManyChat para negocios de servicios | Inkup',
  metaDescription: 'ManyChat vs Inkup: dos herramientas para dos problemas distintos. Si tu problema es gestionar consultas inbound desde Instagram, esta comparativa explica la diferencia.',
  lastVerified: 'Marzo 2026',

  tldr: {
    title: 'ManyChat vs Inkup: dos herramientas para dos problemas distintos',
    items: [
      {
        emphasis: 'ManyChat es un constructor de flujos: ',
        text: 'necesitas diseñar, configurar y mantener la lógica antes de obtener valor.',
      },
      {
        emphasis: 'Inkup es plug-and-play: ',
        text: 'el flujo ya está construido para negocios de servicios. Conectas y funciona en minutos.',
      },
      {
        emphasis: 'El precio de ManyChat escala por contactos: ',
        text: 'impredecible para negocios con picos estacionales.',
      },
      {
        emphasis: 'El flujo IG DM → WhatsApp no es nativo en ManyChat: ',
        text: 'requiere configuración adicional.',
      },
      {
        emphasis: 'Inkup no hace marketing outbound: ',
        text: 'si necesitas broadcasts masivos, ManyChat es la mejor opción.',
      },
    ],
  },

  problemSection: `
    <p>Cada semana, miles de negocios de servicios —tatuadores, estudios de estética, fotógrafos—
    abren Instagram y se encuentran con el mismo problema: decenas de mensajes de consulta, todos diferentes,
    todos requiriendo una respuesta manual que tarda entre 5 y 15 minutos cada una.</p>
    <p>Tanto ManyChat como Inkup intentan resolver algo relacionado con este problema.
    Pero desde ángulos completamente distintos.</p>
  `,

  competitorSection: `
    <p>ManyChat es una plataforma de marketing conversacional. Su propuesta de valor es darte
    las herramientas para construir flujos automatizados en Instagram, WhatsApp y Facebook Messenger.
    Tú diseñas la conversación; ManyChat la ejecuta.</p>
    <p>Donde ManyChat brilla de verdad es en el marketing outbound: sequences automáticas post-compra,
    campañas de reactivación, broadcasts a listas de contactos. Para marcas con equipo de marketing
    y base de datos grande, es una herramienta muy potente.</p>
    <p>El precio sigue un modelo freemium que escala por número de contactos activos.
    El plan Pro empieza en ~$15/mes para 500 contactos y sube rápidamente con el volumen.</p>
  `,

  differenceSection: `
    <p>Inkup parte de un supuesto distinto: el problema de los negocios de servicios no es
    la falta de herramientas para construir flujos. Es que no tienen tiempo para construirlos.</p>
    <p>El flujo ya está construido. Cuando alguien escribe por Instagram DM o WhatsApp,
    Inkup recoge la consulta, hace las preguntas relevantes según el tipo de negocio
    y entrega un resumen organizado. Sin que hayas tocado un editor de flujos.</p>
    <p>La diferencia de tiempo es real: ManyChat requiere horas de configuración inicial
    para obtener el primer valor. Inkup funciona en minutos desde el registro.</p>
  `,

  comparativaRows: [
    {
      criterio: 'Tipo de producto',
      inkup: 'yes',
      competitor: 'partial',
      inkupNote: 'Producto terminado plug-and-play',
      competitorNote: 'Constructor de flujos conversacionales',
    },
    {
      criterio: 'Setup sin conocimientos técnicos',
      inkup: 'yes',
      competitor: 'no',
      inkupNote: 'Minutos',
      competitorNote: 'Requiere diseñar y configurar flujos',
    },
    {
      criterio: 'Flujo nativo IG DM → WhatsApp',
      inkup: 'yes',
      competitor: 'partial',
      competitorNote: 'Configurable, no nativo',
    },
    {
      criterio: 'Precio predecible para microempresa',
      inkup: 'yes',
      competitor: 'no',
      competitorNote: 'Escala por número de contactos activos',
    },
    {
      criterio: 'Soporte en español nativo',
      inkup: 'yes',
      competitor: 'no',
      competitorNote: 'Principalmente en inglés',
    },
    {
      criterio: 'Precualificación inbound',
      inkup: 'yes',
      competitor: 'partial',
      competitorNote: 'Solo si configuras el flujo tú mismo',
    },
    {
      criterio: 'Broadcasts y campañas outbound',
      inkup: 'no',
      competitor: 'yes',
      inkupNote: 'No es el propósito de Inkup',
    },
    {
      criterio: 'Gestión de equipo multiagente',
      inkup: 'no',
      competitor: 'yes',
      inkupNote: 'Inkup es para 1-5 personas',
    },
    {
      criterio: 'Mantenimiento técnico requerido',
      inkup: 'no',
      competitor: 'yes',
      inkupNote: 'Ninguno',
      competitorNote: 'Los flujos hay que actualizarlos manualmente',
    },
  ],

  whenCompetitorWins: [
    {
      scenario: 'Tu negocio tiene una base de datos de clientes y quieres hacer campañas de reactivación',
      explanation: 'ManyChat está diseñado para esto. Broadcasts, sequences automáticas, retargeting conversacional.',
    },
    {
      scenario: 'Tu equipo tiene alguien dedicado a marketing con tiempo para configurar y mantener flujos',
      explanation: 'La flexibilidad de ManyChat tiene sentido cuando hay alguien que puede aprovecharla.',
    },
    {
      scenario: 'Necesitas integraciones avanzadas con tu CRM o plataforma de ecommerce',
      explanation: 'ManyChat tiene un ecosistema de integraciones más amplio para escenarios complejos.',
    },
  ],

  faqs: [
    {
      question: '¿Se puede usar Inkup y ManyChat al mismo tiempo?',
      answer: 'Sí. ManyChat gestiona campañas outbound y broadcasts; Inkup filtra el inbound antes de que llegue a tu WhatsApp. Son capas complementarias, no excluyentes.',
    },
    {
      question: '¿ManyChat funciona sin saber programar?',
      answer: 'ManyChat no requiere código, pero sí requiere diseñar y configurar flujos conversacionales. Para la mayoría de negocios de servicios sin equipo técnico, el tiempo de configuración inicial es una barrera real.',
    },
    {
      question: '¿Inkup tiene broadcasts como ManyChat?',
      answer: 'No. Inkup está diseñado para gestionar consultas entrantes, no para enviar mensajes masivos. Si necesitas broadcasts, ManyChat es la herramienta correcta.',
    },
    {
      question: '¿ManyChat vale la pena para un estudio de tatuajes?',
      answer: 'Depende del uso. Si el estudio quiere hacer campañas de retargeting o sequences post-consulta, ManyChat tiene sentido. Si el problema es gestionar el volumen de consultas inbound sin dedicarle horas, Inkup resuelve ese problema de forma más directa.',
    },
    {
      question: '¿Por qué Inkup es más predecible en precio que ManyChat para negocios pequeños?',
      answer: 'ManyChat escala por número de contactos activos, lo que lo hace impredecible para negocios con picos estacionales. Inkup tiene precio fijo por plan independientemente del volumen de consultas.',
    },
  ],
}
