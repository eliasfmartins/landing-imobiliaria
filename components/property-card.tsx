"use client"

import { motion } from "framer-motion"
import type { Property } from "@/types/property"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Car, MapPin, Home } from "lucide-react"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link href={`/imoveis/${property.id}`}>
        <Card className="overflow-hidden h-full card-enhanced border-0">
          <div className="relative aspect-video overflow-hidden img-hover-zoom">
            <img
              src={
                property.images && property.images.length > 0
                  ? property.images[0]
                  : `https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&h=400&auto=format&fit=crop`
              }
              alt={property.title}
              className="w-full h-full object-cover"
            />
            {property.highlight && <Badge className="absolute top-2 right-2 badge-luxury">Destaque</Badge>}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-20"></div>
            <div className="absolute bottom-2 left-2 flex items-center text-white text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.city || "Localização não informada"}</span>
            </div>
          </div>
          <CardContent className="p-5">
            <h3 className="font-heading font-semibold text-lg mb-3 line-clamp-1">{property.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{property.description}</p>
            <div className="flex justify-between text-sm">
              {property.rooms && (
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <Bed className="h-4 w-4 text-primary" />
                  </div>
                  <span>{property.rooms}</span>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <Bath className="h-4 w-4 text-primary" />
                  </div>
                  <span>{property.bathrooms}</span>
                </div>
              )}
              {property.garages && (
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <Car className="h-4 w-4 text-primary" />
                  </div>
                  <span>{property.garages}</span>
                </div>
              )}
              {property.area && (
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <Home className="h-4 w-4 text-primary" />
                  </div>
                  <span>{property.area}m²</span>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-5 pt-0 border-t border-primary/10">
            <div className="text-xl font-heading font-bold text-primary">
              {formatCurrency(Number.parseFloat(property.value))}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
