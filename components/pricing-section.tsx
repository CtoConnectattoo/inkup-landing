"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PricingToggle } from "./pricing-toggle"

interface PricingTier {
  name: string
  monthlyPrice: number
  annualPrice: number
  oldMonthlyPrice?: number
  oldAnnualPrice?: number
  badgeText?: string
  features: string[]
  isPopular?: boolean
}

interface PricingSectionProps {
  excludePlans?: string[]
  title?: React.ReactNode
  subtitle?: string
  customTiers?: PricingTier[]
  defaultPeriod?: "monthly" | "annual"
}

const pricingTiers: PricingTier[] = [
  {
    name: "Professional",
    monthlyPrice: 29,
    annualPrice: 12,
    features: [
      "100 leads/mes",
      "Personalización visual",
      "Dashboard de rendimiento",
      "Panel de consultas",
      "Garantía de devolución de dinero hasta 11 días",
      "Soporte 24/7",
      "Cancela en cualquier momento",
    ],
    isPopular: true,
  },
  {
    name: "Top",
    monthlyPrice: 49,
    annualPrice: 19,
    features: [
      "1000 leads/mes",
      "Personalización visual",
      "Dashboard avanzado",
      "Atención prioritaria",
      "Garantía de devolución de dinero hasta 11 días",
      "Soporte 24/7",
      "Cancela en cualquier momento",
    ],
  },
]

export function PricingSection({
  excludePlans = [],
  title,
  subtitle,
  customTiers,
  defaultPeriod = "annual",
}: PricingSectionProps) {
  const [isAnnual, setIsAnnual] = React.useState(defaultPeriod === "annual")
  const pathname = usePathname()

  const isLandingTattoo = pathname === "/landing-tattoo"
  const effectivePeriod = isLandingTattoo ? false : isAnnual

  const tiersToUse = customTiers || pricingTiers
  const filteredTiers = tiersToUse.filter((tier) => !excludePlans.includes(tier.name))

  const getPaymentLink = (tier: string, isAnnual: boolean) => {
    if (pathname === "/") {
      // Updated signup URL to include /auth path
      return "https://hi.inkup.io/auth/signup"
    }

    if (pathname === "/landing-tattoo") {
      return "https://buy.stripe.com/8x29AU0gr32p0nU8n5bZe1k"
    }

    if (tier === "Professional") {
      return isAnnual
        ? "https://buy.stripe.com/aFabJ24wHfPb8Uq0UDbZe1h" // Plan Profesional anual
        : "https://buy.stripe.com/fZubJ27ITbyV4Ea32LbZe1f" // Plan profesional mensual
    } else if (tier === "Top") {
      return isAnnual
        ? "https://buy.stripe.com/8x2aEYd3d8mJ1rYeLtbZe1i" // Plan Top anual
        : "https://buy.stripe.com/bJe6oI9R19qN5Ie1YHbZe1g" // Plan Top mensual
    }
    // Updated signup URL to include /auth path
    return "https://hi.inkup.io/auth/signup"
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 mx-auto text-left">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {title || "Precios simples y transparentes"}
          </h2>
          <p className="text-xl text-muted-foreground">{subtitle || "11 de devolución garantizado | No permanencia"}</p>
          <PricingToggle onPeriodChange={setIsAnnual} defaultValue={isAnnual} hideAnnual={isLandingTattoo} />
        </div>

        <div
          className={`grid gap-8 max-w-4xl mx-auto ${filteredTiers.length === 1 ? "md:grid-cols-1 justify-items-center" : "md:grid-cols-2"}`}
        >
          {filteredTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-gray-700/50 shadow-xl ${
                tier.isPopular ? "ring-2 ring-purple-600/50" : ""
              } ${filteredTiers.length === 1 ? "max-w-md w-full" : ""}`}
            >
              {tier.isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg">
                  {tier.badgeText || "Popular"}
                </span>
              )}
              <CardHeader>
                <CardTitle className="text-xl text-white">{tier.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  {(effectivePeriod ? tier.oldAnnualPrice : tier.oldMonthlyPrice) && (
                    <div className="flex items-baseline text-gray-500">
                      <span className="text-2xl font-bold line-through">
                        €{effectivePeriod ? tier.oldAnnualPrice : tier.oldMonthlyPrice}
                      </span>
                      <span className="ml-2 text-sm">/mes</span>
                    </div>
                  )}
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">$</span>
                    <span className="text-5xl font-bold text-white">
                      {effectivePeriod ? tier.annualPrice : tier.monthlyPrice}
                    </span>
                    <span className="ml-2 text-gray-300">/mes</span>
                  </div>
                  {(effectivePeriod ? tier.oldAnnualPrice : tier.oldMonthlyPrice) && (
                    <div className="text-emerald-400 font-semibold text-sm">
                      Ahorras €
                      {pathname === "/landing-tattoo" && effectivePeriod
                        ? "84"
                        : effectivePeriod
                          ? (tier.oldAnnualPrice || 0) - tier.annualPrice
                          : (tier.oldMonthlyPrice || 0) - tier.monthlyPrice}
                    </div>
                  )}
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-purple-400" strokeWidth={3} />
                      </div>
                      <span className="text-gray-300 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full font-semibold ${
                    tier.isPopular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
                      : "bg-white text-gray-900 hover:bg-gray-100 border-0"
                  }`}
                  asChild
                >
                  <a href={getPaymentLink(tier.name, effectivePeriod)} target="_blank" rel="noopener noreferrer">
                    Unirme ahora
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
