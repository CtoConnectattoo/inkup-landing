import type { PricingTier } from "@/components/pricing-section"

/* Planes tal y como existen hoy en hi.inkup.io (config/plans.ts de la app). Precios sin IVA. */
export const HOME_TIERS: PricingTier[] = [
  {
    name: "Profesional",
    monthlyPrice: 29,
    annualPrice: 12,
    ctaLabel: "Empezar la prueba gratis",
    features: [
      "Respuestas automáticas en Instagram",
      "100 consultas al mes",
      "Hasta 5 asistentes",
      "Selectores con imágenes y 5 idiomas",
      "Panel de consultas con exportación",
      "Cancela cuando quieras",
    ],
  },
  {
    name: "Premium",
    monthlyPrice: 49,
    annualPrice: 19,
    isPopular: true,
    badgeText: "Más elegido",
    ctaLabel: "Empezar la prueba gratis",
    features: [
      "1.000 consultas al mes",
      "Hasta 10 asistentes",
      "Sin marca de agua de Inkup",
      "Soporte prioritario",
      "Todo lo del plan Profesional",
    ],
  },
]
