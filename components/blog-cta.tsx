import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type BlogCtaProps = {
  title?: string
  description?: string
  buttonLabel?: string
  href?: string
}

export function BlogCta({
  title = "Convierte conversaciones en clientes",
  description = "Activa tu asistente en minutos y centraliza WhatsApp, Instagram y web con un flujo claro.",
  buttonLabel = "Crear cuenta gratis",
  href = "/auth/signup",
}: BlogCtaProps) {
  return (
    <section className="bg-neutral-900 text-white rounded-3xl px-8 py-12 md:px-12 md:py-14 shadow-2xl">
      <div className="flex flex-col gap-8 text-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>
          <p className="text-lg md:text-xl text-neutral-200 leading-relaxed">{description}</p>
        </div>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-700 text-white border-0 rounded-full shadow-lg"
            asChild
          >
            <Link href={href}>
              {buttonLabel} <ArrowRight className="ml-3" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
