"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import type { Property } from "@/types/property"
import { Loader2, Bed, Bath, Car, Home, Phone, MapPin, DollarSign, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { formatCurrency } from "@/lib/utils"
import { ContactForm } from "@/components/contact-form"
import Link from "next/link"

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`https://imobiliaria-api-nine.vercel.app/imoveis/${params.id}`)
        const data = await response.json()
        if (data.success) {
          setProperty(data.data)
        }
      } catch (error) {
        console.error("Error fetching property:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProperty()
  }, [params.id])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!property) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Imóvel não encontrado</h1>
        <p className="text-muted-foreground mb-8">O imóvel que você está procurando não existe ou foi removido.</p>
        <Button asChild>
          <Link href="/imoveis">Ver Todos os Imóveis</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <Link href="/imoveis" className="text-primary hover:underline inline-flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" /> Voltar para Imóveis
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center text-muted-foreground mb-6">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{property.city || "Localização não informada"}</span>
              </div>

              {/* Property Images Carousel */}
              <div className="mb-8">
                <Carousel className="w-full">
                  <CarouselContent>
                    {property.images && property.images.length > 0 ? (
                      property.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-video overflow-hidden rounded-lg card-enhanced">
                            <img
                              src={
                                image ||
                                "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&h=600&auto=format&fit=crop"
                              }
                              alt={`${property.title} - Imagem ${index + 1}`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                ;(e.target as HTMLImageElement).src =
                                  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&h=600&auto=format&fit=crop"
                              }}
                            />
                          </div>
                        </CarouselItem>
                      ))
                    ) : (
                      <CarouselItem>
                        <div className="aspect-video overflow-hidden rounded-lg card-enhanced">
                          <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&h=600&auto=format&fit=crop"
                            alt={property.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    )}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              {/* Property Features */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="bg-card p-4 rounded-lg flex flex-col items-center card-enhanced">
                  <Bed className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Quartos</span>
                  <span className="font-semibold">{property.rooms || "N/A"}</span>
                </div>
                <div className="bg-card p-4 rounded-lg flex flex-col items-center card-enhanced">
                  <Bath className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Banheiros</span>
                  <span className="font-semibold">{property.bathrooms || "N/A"}</span>
                </div>
                <div className="bg-card p-4 rounded-lg flex flex-col items-center card-enhanced">
                  <Car className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Garagens</span>
                  <span className="font-semibold">{property.garages || "N/A"}</span>
                </div>
                <div className="bg-card p-4 rounded-lg flex flex-col items-center card-enhanced">
                  <Home className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-muted-foreground">Área</span>
                  <span className="font-semibold">{property.area ? `${property.area}m²` : "N/A"}</span>
                </div>
              </div>

              {/* Property Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Descrição</h2>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p>{property.description}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticky top-24"
            >
              {/* Property Price Card */}
              <div className="bg-card rounded-lg p-6 shadow-lg mb-6 card-enhanced">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Valor</h3>
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-4">
                  {formatCurrency(Number.parseFloat(property.value))}
                </div>
                {property.condominium && (
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>Condomínio:</span>
                    <span>{formatCurrency(Number.parseFloat(property.condominium))}</span>
                  </div>
                )}
                {property.phone && (
                  <div className="flex items-center gap-2 mb-6">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>{property.phone}</span>
                  </div>
                )}
                <Button className="w-full btn-primary">Agendar Visita</Button>
              </div>

              {/* Contact Form */}
              <div className="bg-card rounded-lg p-6 shadow-lg card-enhanced">
                <h3 className="text-xl font-semibold mb-4">Interessado neste imóvel?</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Preencha o formulário abaixo e entraremos em contato com você o mais breve possível.
                </p>
                <ContactForm propertyTitle={property.title} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
