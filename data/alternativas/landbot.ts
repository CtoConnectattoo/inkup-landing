import type { AlternativaData } from './types'

export const landbotData: AlternativaData = {
  slug: 'landbot',
  competitorName: 'Landbot',
  competitorSlug: 'landbot',

  h1: 'Alternativa a Landbot para negocios de servicios: sin constructor, sin configuración, listo en minutos',
  metaTitle: 'Alternativa a Landbot para negocios de servicios | Inkup',
  metaDescription: 'Landbot vs Inkup: Landbot te da las herramientas para construir chatbots. Inkup ya tiene el chatbot construido para negocios de servicios. Esta comparativa explica cuándo elegir cada uno.',
  lastVerified: 'Marzo 2026',

  tldr: {
    title: 'Landbot vs Inkup: constructor vs producto terminado',
    items: [
      {
        emphasis: 'Landbot es un constructor visual de chatbots: ',
        text: 'potente y flexible, pero requiere que tú diseñes y mantengas la lógica de conversación.',
      },
      {
        emphasis: 'Inkup ya tiene el flujo construido: ',
        text: 'diseñado específicamente para negocios de servicios. Conectas y funciona.',
      },
      {
        emphasis: 'Landbot cobra por conversaciones activas: ',
        text: 'el coste escala con el volumen y puede ser impredecible para negocios con picos.',
      },
      {
        emphasis: 'Landbot destaca en web y formularios conversacionales: ',
        text: 'Inkup está enfocado en Instagram DM y WhatsApp Business.',
      },
      {
        emphasis: 'El tiempo hasta el primer valor es muy diferente: ',
        text: 'horas o días con Landbot, minutos con Inkup.',
      },
    ],
  },

  problemSection: `
    <p>Un negocio de servicios recibe consultas por Instagram y WhatsApp. Cada consulta
    requiere responder preguntas similares: disponibilidad, precio, ubicación, tipo de servicio.
    El tiempo acumulado en estas respuestas puede superar las dos horas diarias.</p>
    <p>Landbot e Inkup intentan reducir ese tiempo, pero con filosofías completamente distintas
    sobre quién debe construir la solución.</p>
  `,

  competitorSection: `
    <p>Landbot es una plataforma de chatbot builder con un editor visual de flujos.
    Su punto fuerte es la flexibilidad: puedes construir conversaciones complejas con
    lógica condicional, integraciones con Sheets, Airtable, Zapier, Slack y más.</p>
    <p>Landbot empezó como solución web (chatbots embebidos en páginas) y ha ido
    incorporando WhatsApp como canal adicional. Tiene casos de uso sólidos en
    calificación de leads para equipos de ventas y soporte conversacional para empresas medianas.</p>
    <p>El modelo de precios cobra por conversaciones activas al mes.
    Para negocios con volumen variable, esto puede generar facturas impredecibles.</p>
  `,

  differenceSection: `
    <p>Inkup no te da un constructor. Te da el resultado final.</p>
    <p>El flujo de precualificación para negocios de servicios ya está diseñado,
    probado y optimizado. Cuando alguien escribe por Instagram DM o WhatsApp,
    Inkup hace las preguntas relevantes, recoge la información necesaria y te
    la entrega organizada para que puedas responder en segundos en lugar de minutos.</p>
    <p>No hay curva de aprendizaje. No hay flujos que mantener. No hay que actualizar
    nada cuando cambias tus servicios o precios. Eso lo gestionas desde el panel,
    no desde un editor de nodos.</p>
  `,

  comparativaRows: [
    {
      criterio: 'Tipo de producto',
      inkup: 'yes',
      competitor: 'partial',
      inkupNote: 'Producto terminado plug-and-play',
      competitorNote: 'Constructor visual de chatbots',
    },
    {
      criterio: 'Setup sin diseñar flujos',
      inkup: 'yes',
      competitor: 'no',
      inkupNote: 'Minutos desde el registro',
      competitorNote: 'Requiere construir la conversación desde cero',
    },
    {
      criterio: 'Canal Instagram DM nativo',
      inkup: 'yes',
      competitor: 'no',
      competitorNote: 'Principalmente web y WhatsApp',
    },
    {
      criterio: 'Canal WhatsApp Business',
      inkup: 'yes',
      competitor: 'yes',
      competitorNote: 'Disponible en planes de pago',
    },
    {
      criterio: 'Precio predecible para microempresa',
      inkup: 'yes',
      competitor: 'no',
      competitorNote: 'Escala por conversaciones activas',
    },
    {
      criterio: 'Soporte en español nativo',
      inkup: 'yes',
      competitor: 'partial',
      competitorNote: 'Interfaz en inglés, soporte limitado en español',
    },
    {
      criterio: 'Mantenimiento técnico requerido',
      inkup: 'no',
      competitor: 'yes',
      inkupNote: 'Ninguno',
      competitorNote: 'Los flujos hay que actualizar manualmente',
    },
    {
      criterio: 'Integraciones avanzadas (Sheets, Zapier, CRM)',
      inkup: 'no',
      competitor: 'yes',
      inkupNote: 'Inkup no está diseñado para flujos complejos',
    },
    {
      criterio: 'Chatbot embebido en web',
      inkup: 'no',
      competitor: 'yes',
      inkupNote: 'Inkup es exclusivamente para mensajería',
    },
  ],

  whenCompetitorWins: [
    {
      scenario: 'Necesitas un chatbot embebido en tu web para calificar leads',
      explanation: 'Landbot nació para esto. Su editor visual y las integraciones con formularios web son su punto más fuerte.',
    },
    {
      scenario: 'Tu equipo técnico o de marketing tiene capacidad para construir y mantener flujos personalizados',
      explanation: 'La flexibilidad de Landbot tiene sentido real cuando hay alguien que puede aprovecharla y mantenerla actualizada.',
    },
    {
      scenario: 'Necesitas integraciones con tu stack existente: CRM, Airtable, Slack, webhooks',
      explanation: 'Landbot tiene un ecosistema de integraciones maduro para escenarios empresariales complejos.',
    },
  ],

  faqs: [
    {
      question: '¿Landbot funciona con Instagram DM?',
      answer: 'No de forma nativa. Landbot está principalmente orientado a web y WhatsApp. Si tu canal principal de consultas es Instagram, Inkup tiene integración nativa con Instagram DM sin configuración adicional.',
    },
    {
      question: '¿Cuánto tiempo lleva configurar Landbot para un negocio de servicios?',
      answer: 'Depende de la complejidad del flujo, pero para un negocio de servicios típico estima entre 4 y 10 horas de configuración inicial: diseñar el flujo, configurar las integraciones y probarlo. Inkup está operativo en menos de 30 minutos.',
    },
    {
      question: '¿Landbot cobra por WhatsApp por separado?',
      answer: 'Sí. El canal WhatsApp en Landbot requiere una cuenta de WhatsApp Business API, que tiene coste adicional por conversación según las tarifas de Meta. En Inkup, WhatsApp está incluido en el plan sin coste por mensaje adicional.',
    },
    {
      question: '¿Inkup puede hacer lo mismo que Landbot para un estudio de tatuajes?',
      answer: 'Para el caso de uso principal —recibir consultas, precualificar y organizar la información— sí, y más rápido. Para flujos personalizados complejos o chatbot en web, Landbot es más flexible. La pregunta es si esa flexibilidad extra compensa el tiempo de configuración.',
    },
    {
      question: '¿Se puede migrar de Landbot a Inkup?',
      answer: 'No hay migración técnica como tal: Inkup no importa flujos de Landbot. Lo que sí puedes hacer es activar Inkup en paralelo en tus canales de Instagram y WhatsApp mientras evalúas el cambio, sin necesidad de desactivar nada.',
    },
  ],
}
