"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { PropertyCard } from "@/components/property-card"
import type { Property } from "@/types/property"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ImoveisPage() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [searchParams, setSearchParams] = useState({
    title: "",
    rooms: "",
    minValue: "",
    maxValue: "",
  })

  useEffect(() => {
    fetchProperties()
  }, [])

  const fetchProperties = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://imobiliaria-api-nine.vercel.app/imoveis")
      const data = await response.json()
      if (data.success) {
        setProperties(data.data)
      }
    } catch (error) {
      console.error("Error fetching properties:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("https://imobiliaria-api-nine.vercel.app/imoveis/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchParams),
      })

      const data = await response.json()
      if (data.success) {
        setProperties(data.data)
      }
    } catch (error) {
      console.error("Error searching properties:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSearchParams((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setSearchParams((prev) => ({ ...prev, [name]: value }))
  }

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
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="relative py-16 bg-muted">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-4">Nossos Imóveis</h1>
            <p className="text-muted-foreground mb-8">
              Explore nossa seleção exclusiva de imóveis e encontre o lugar perfeito para você e sua família.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-card">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-semibold mb-6">Filtrar Imóveis</h2>
            <form
              onSubmit={handleSearch}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 card-enhanced p-6"
            >
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  Título
                </label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Buscar por título"
                  value={searchParams.title}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="rooms" className="text-sm font-medium">
                  Quartos
                </label>
                <Select onValueChange={(value) => handleSelectChange("rooms", value)} value={searchParams.rooms}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="minValue" className="text-sm font-medium">
                  Valor Mínimo
                </label>
                <Input
                  id="minValue"
                  name="minValue"
                  placeholder="R$"
                  value={searchParams.minValue}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="maxValue" className="text-sm font-medium">
                  Valor Máximo
                </label>
                <Input
                  id="maxValue"
                  name="maxValue"
                  placeholder="R$"
                  value={searchParams.maxValue}
                  onChange={handleInputChange}
                />
              </div>

              <div className="md:col-span-2 lg:col-span-4 flex justify-end mt-4">
                <Button type="submit" className="w-full md:w-auto btn-primary">
                  Buscar Imóveis
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Properties List */}
      <section className="py-16">
        <div className="container mx-auto">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold">
                  {properties.length} {properties.length === 1 ? "Imóvel Encontrado" : "Imóveis Encontrados"}
                </h2>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {properties.length > 0 ? (
                  properties.map((property) => (
                    <motion.div key={property.id} variants={itemVariants}>
                      <PropertyCard property={property} />
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-10">
                    <p className="text-muted-foreground">Nenhum imóvel encontrado com os filtros selecionados.</p>
                    <Button variant="outline" className="mt-4" onClick={fetchProperties}>
                      Ver Todos os Imóveis
                    </Button>
                  </div>
                )}
              </motion.div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
