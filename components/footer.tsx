"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()
  const isLandingTattoo = pathname === "/landing-tattoo" || pathname === "/landing-masterclass-tattoo"

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/50">
      <div className="container mx-auto px-4 py-12">
        <div
          className={`grid gap-8 mb-8 ${
            isLandingTattoo
              ? "grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
          }`}
        >
          {!isLandingTattoo && (
            <>
              {/* Logo and Language Section */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <Image
                    src="/images/design-mode/inkup%20logo%20png%281%29%281%29%281%29%281%29%281%29(1).png"
                    alt="Inkup Logo"
                    width={32}
                    height={32}
                  />
                  <span className="font-semibold text-white">Inkup</span>
                </div>
                <div className="text-sm text-gray-400">
                  <span>Español</span>
                </div>
              </div>

              {/* Inkup Column */}
              <div>
                <h3 className="font-semibold text-white mb-4 uppercase text-sm">Inkup</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/#funcionalidades" className="text-gray-400 hover:text-white transition-colors text-sm">
                      Funcionalidades
                    </Link>
                  </li>
                  <li></li>
                  <li>
                    <Link href="/#precios" className="text-gray-400 hover:text-white transition-colors text-sm">
                      Precios
                    </Link>
                  </li>
                  <li></li>
                </ul>
              </div>

              {/* Resources Column */}
              <div>
                <h3 className="font-semibold text-white mb-4 uppercase text-sm">Recursos</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/confian" className="text-gray-400 hover:text-white transition-colors text-sm">
                      Confían en Nosotros
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}

          {/* Support Column */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase text-sm">Soporte</h3>
            <ul className="space-y-3">
              <li></li>
              <li>
                <a href="mailto:hola@inkup.io" className="text-gray-400 hover:text-white transition-colors text-sm">
                  hola@inkup.io
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase text-sm">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/politica-de-cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/tyc" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Términos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* EU Funding Logos */}
        <div className="pt-8 border-t border-gray-700/50 flex flex-col items-center gap-6 mb-8">
          <div className="bg-white rounded-lg p-4 w-full max-w-4xl">
            <Image
              src="/images/logos-financiacion-eu.jpeg"
              alt="Financiado por la Unión Europea - NextGenerationEU, Plan de Recuperación, Transformación y Resiliencia, Gobierno de España - Ministerio para la Transformación Digital y de la Función Pública, Junta de Andalucía, Agencia Digital de Andalucía"
              width={1600}
              height={211}
              className="object-contain w-full h-auto"
            />
          </div>
          <div className="max-w-4xl text-xs text-gray-400 text-center leading-relaxed space-y-2">
            <p>
              Empresa beneficiaria de una ayuda para el “Desarrollo e implantación de soluciones digitales con aplicación sectorial en el marco del proyecto Redes de Emprendimiento Digital en Andalucía, correspondiente al Programa Redes Territoriales de Especialización Tecnológica (RETECH)”.
            </p>
            <p>
              Proyecto cofinanciado por el Plan de Recuperación, Transformación y Resiliencia y financiado por la Unión Europea – NextGenerationEU (C13I1), a través de la Agencia Digital de Andalucía.
            </p>
            <p>
              Beneficiario: CONNECTATTOO S.L. · Expediente: D4HED200020252894
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2026 Inkup. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/Inkup.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/inkupio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/inkup.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@Inkup_io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="https://es.pinterest.com/inkupio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </Link>
              <Link
                href="https://www.tiktok.com/@inkup.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                </svg>
              </Link>
              <Link
                href="https://wa.me/34627778062"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
