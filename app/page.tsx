"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"
import { useEffect, useState } from "react"
import type { Property } from "@/types/property"
import { SearchForm } from "@/components/search-form"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { SellWithUs } from "@/components/sell-with-us"
import Link from "next/link"
import { ArrowRight, Loader2 } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Home() {
  const [highlightedProperties, setHighlightedProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHighlightedProperties = async () => {
      try {
        const response = await fetch("https://imobiliaria-api-nine.vercel.app/imoveis/highlighted")
        const data = await response.json()
        if (data.success) {
          setHighlightedProperties(data.data)
        }
      } catch (error) {
        console.error("Error fetching highlighted properties:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchHighlightedProperties()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Extended Hero Section with Background */}
      <section className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop"
            alt="Luxury Real Estate"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 min-h-[85vh] flex items-center">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-[#BF953F]"></div>
                <p className="ml-4 text-white/80 uppercase tracking-widest text-sm">Imóveis de Alto Padrão</p>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Encontre o Imóvel dos Seus <span className="text-[#BF953F]">Sonhos</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 font-light">
                A Martins&Silva Imobiliária oferece as melhores opções de imóveis com atendimento personalizado e
                exclusivo para clientes exigentes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-primary group" asChild>
                  <Link href="/imoveis" className="flex items-center">
                    Ver Imóveis
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/20 backdrop-blur-sm"
                  asChild
                >
                  <Link href="/contato">Fale Conosco</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Search Form */}
        <div className="relative z-20 pb-20">
          <div className="container mx-auto px-4">
            <SearchForm />
          </div>
        </div>
      </section>

      {/* Featured Properties Section - Carousel */}
      <section className="py-16 bg-light-section">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-primary uppercase tracking-widest text-sm font-medium mb-2">Seleção Exclusiva</p>
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">Imóveis em Destaque</h2>
            <div className="gold-divider"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Conheça nossos imóveis selecionados com as melhores condições e localizações privilegiadas.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : highlightedProperties.length > 0 ? (
            <div className="relative">
              <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                <CarouselContent className="-ml-2 md:-ml-4">
                  {highlightedProperties.map((property, index) => (
                    <CarouselItem key={property.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <PropertyCard property={property} />
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Custom Navigation Buttons */}
                <div className="flex justify-center mt-8 gap-4">
                  <CarouselPrevious className="relative translate-y-0 left-0 h-12 w-12 border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 bg-card/80 backdrop-blur-sm" />
                  <CarouselNext className="relative translate-y-0 right-0 h-12 w-12 border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 bg-card/80 backdrop-blur-sm" />
                </div>
              </Carousel>
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">Nenhum imóvel em destaque encontrado.</p>
            </div>
          )}

          <div className="text-center mt-12">
            <Button size="lg" className="btn-primary group" asChild>
              <Link href="/imoveis" className="flex items-center">
                Ver Todos os Imóveis
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sell With Us Section */}
      <SellWithUs />

      {/* Features Section */}
      <Features />

      {/* About Section */}
      <AboutSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
