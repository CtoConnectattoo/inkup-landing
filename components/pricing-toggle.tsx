"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

interface PricingToggleProps {
  onPeriodChange: (isAnnual: boolean) => void
  defaultValue?: boolean
  hideAnnual?: boolean
}

export function PricingToggle({ onPeriodChange, defaultValue = true, hideAnnual = false }: PricingToggleProps) {
  const [isAnnual, setIsAnnual] = React.useState(defaultValue)

  const handleToggle = (annual: boolean) => {
    setIsAnnual(annual)
    onPeriodChange(annual)
  }

  if (hideAnnual) {
    return null
  }

  return (
    <div className="inline-flex items-center gap-2 p-1 rounded-full bg-gray-100">
      <Button
        variant={isAnnual ? "ghost" : "default"}
        size="sm"
        className="rounded-full"
        onClick={() => handleToggle(false)}
      >
        Mensual
      </Button>
      <Button
        variant={isAnnual ? "default" : "ghost"}
        size="sm"
        className="rounded-full"
        onClick={() => handleToggle(true)}
      >
        Anual
      </Button>
      {isAnnual && (
        <span className="text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full ml-2">
          ✨ Ahorra 60%
        </span>
      )}
    </div>
  )
}
