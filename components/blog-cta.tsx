import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type BlogCtaProps = {
  title?: string
  description?: string
  buttonLabel?: string
  href?: string
  demoHref?: string
  demoLabel?: string
}

export function BlogCta({
  title = "Convierte conversaciones en clientes",
  description = "Activa tu asistente en minutos y centraliza WhatsApp, Instagram y web con un flujo claro.",
  buttonLabel = "Crear cuenta gratis",
  href = "https://hi.inkup.io/auth/signup",
  demoHref = "https://hi.inkup.io/demo",
  demoLabel = "Reserva una demo",
}: BlogCtaProps) {
  return (
    <section className="bg-neutral-900 text-white rounded-3xl px-8 py-12 md:px-12 md:py-14 shadow-2xl">
      <div className="flex flex-col gap-8 text-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h2>
          <p className="text-lg md:text-xl text-neutral-200 leading-relaxed">{description}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="h-14 px-8 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 rounded-full shadow-lg"
            asChild
          >
            <Link href={href}>
              {buttonLabel} <ArrowRight className="ml-3" />
            </Link>
          </Button>
          {demoHref && (
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg border-2 border-white text-white bg-transparent hover:bg-white/10 rounded-full"
              asChild
            >
              <Link href={demoHref}>{demoLabel}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
