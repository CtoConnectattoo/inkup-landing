"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
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

        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2025 Inkup. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              ></Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"></svg>
              </Link>
              <Link
                href="https://instagram.com/inkup.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
