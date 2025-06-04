"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Home, Menu, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("token")
    setIsAdmin(!!token)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/imoveis", label: "Imóveis" },
    { href: "/sobre", label: "Sobre" },
    { href: "/contato", label: "Contato" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-shadow",
        isScrolled ? "bg-background/95 backdrop-blur-md py-2" : "bg-background/80 backdrop-blur-sm py-4",
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#9A7D0A] to-[#BF953F] rounded-md flex items-center justify-center shadow-md">
                <Home className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#9A7D0A]"></div>
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-heading font-bold text-xl tracking-tight"
              >
                <span>Martins</span>
                <span className="text-[#9A7D0A]">&</span>
                <span>Silva</span>
              </motion.span>
              <span className="text-xs text-muted-foreground tracking-widest uppercase">Imobiliária de Luxo</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors relative group",
                    pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary transition-all duration-300",
                      pathname === link.href ? "w-1/2" : "w-0 group-hover:w-1/2",
                    )}
                  ></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5561991010404"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-primary"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <span>(61) 99101-0404</span>
            </a>

            <ModeToggle />

            {isAdmin ? (
              <Button
                size="sm"
                variant="outline"
                className="font-medium border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <Link href="/admin">Painel Admin</Link>
              </Button>
            ) : (
              <Button
                size="sm"
                variant="outline"
                className="font-medium border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <Link href="/login">Área Admin</Link>
              </Button>
            )}

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <Link href="/" className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#9A7D0A] to-[#BF953F] rounded-md flex items-center justify-center">
                        <Home className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-heading font-bold text-lg">
                          <span>Martins</span>
                          <span className="text-[#9A7D0A]">&</span>
                          <span>Silva</span>
                        </span>
                        <span className="text-xs text-muted-foreground tracking-widest uppercase">
                          Imobiliária de Luxo
                        </span>
                      </div>
                    </Link>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "px-4 py-2 rounded-md text-base font-medium transition-colors",
                          pathname === link.href
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent",
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                    {isAdmin && (
                      <Link
                        href="/admin"
                        className="px-4 py-2 rounded-md text-base font-medium transition-colors text-muted-foreground hover:text-foreground hover:bg-accent"
                      >
                        Painel Admin
                      </Link>
                    )}
                  </nav>

                  <div className="mt-auto pt-4 border-t">
                    <a
                      href="https://wa.me/5561991010404"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-primary p-4"
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      <span>(61) 99101-0404</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
