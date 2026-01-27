"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/design-mode/inkup%20logo%20png%281%29%281%29%281%29%281%29%281%29(1).png"
                alt="Inkup Logo"
                width={32}
                height={32}
              />
            </Link>
            <nav className="hidden md:flex space-x-4">
              {/* <Link
                href="/soluciones"
                className="text-sm font-medium text-gray-900 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded-sm px-1 py-1"
              >
                Soluciones
              </Link> */}
              <Link
                href="/precios"
                className="text-sm font-medium text-gray-900 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded-sm px-1 py-1"
              >
                Precios
              </Link>
              {/* <Link
                href="/confian"
                className="text-sm font-medium text-gray-900 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded-sm px-1 py-1"
              >
                Confían
              </Link> */}
              {/* <Link
                href="/partners"
                className="text-sm font-medium text-gray-900 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded-sm px-1 py-1"
              >
                Partners
              </Link> */}
              <Link
                href="/recursos"
                className="text-sm font-medium text-gray-900 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded-sm px-1 py-1"
              >
                Recursos
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              className="bg-gradient-to-r from-purple-800 to-pink-800 text-white border-0 hover:from-purple-900 hover:to-pink-900 focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              asChild
            >
              <a href="https://hi.inkup.io/auth/signup">Unirme ahora</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://hi.inkup.io/auth/login" target="_blank" rel="noopener noreferrer">
                Log in
              </a>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-gray-900 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded-sm px-2 py-1"
                  >
                    Home
                  </Link>
                  {/* <Link
                    href="/soluciones"
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-gray-900 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded-sm px-2 py-1"
                  >
                    Soluciones
                  </Link> */}
                  <Link
                    href="/precios"
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-gray-900 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded-sm px-2 py-1"
                  >
                    Precios
                  </Link>
                  {/* <Link
                    href="/confian"
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-gray-900 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded-sm px-2 py-1"
                  >
                    Confían
                  </Link> */}
                  {/* <Link
                    href="/partners"
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-gray-900 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded-sm px-2 py-1"
                  >
                    Partners
                  </Link> */}
                  <Link
                    href="/recursos"
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-gray-900 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded-sm px-2 py-1"
                  >
                    Recursos
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
