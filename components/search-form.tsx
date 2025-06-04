"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function SearchForm() {
  const [searchParams, setSearchParams] = useState({
    title: "",
    rooms: "",
    minValue: "",
    maxValue: "",
  })
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSearchParams((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setSearchParams((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create query string
    const queryParams = new URLSearchParams()
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) {
        queryParams.append(key, value)
      }
    })

    // Redirect to properties page with search params
    router.push(`/imoveis?${queryParams.toString()}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card/90 backdrop-blur-sm rounded-lg shadow-xl p-6 elegant-shadow border border-primary/10 dark:border-primary/20"
    >
      <h3 className="text-lg font-heading font-semibold mb-4 text-center text-foreground">Encontre o Imóvel Ideal</h3>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title" className="text-sm font-medium text-foreground">
            Buscar por
          </Label>
          <Input
            id="title"
            name="title"
            placeholder="Título ou localização"
            value={searchParams.title}
            onChange={handleInputChange}
            className="border-primary/20 focus:border-primary focus:ring-primary bg-background text-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="rooms" className="text-sm font-medium text-foreground">
            Quartos
          </Label>
          <Select onValueChange={(value) => handleSelectChange("rooms", value)} value={searchParams.rooms}>
            <SelectTrigger id="rooms" className="border-primary/20 bg-background text-foreground">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent className="bg-card border-primary/20">
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="minValue" className="text-sm font-medium text-foreground">
            Valor Mínimo
          </Label>
          <Input
            id="minValue"
            name="minValue"
            placeholder="R$"
            value={searchParams.minValue}
            onChange={handleInputChange}
            className="border-primary/20 focus:border-primary focus:ring-primary bg-background text-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="maxValue" className="text-sm font-medium text-foreground">
            Valor Máximo
          </Label>
          <Input
            id="maxValue"
            name="maxValue"
            placeholder="R$"
            value={searchParams.maxValue}
            onChange={handleInputChange}
            className="border-primary/20 focus:border-primary focus:ring-primary bg-background text-foreground"
          />
        </div>

        <div className="flex items-end">
          <Button type="submit" className="w-full btn-primary">
            <Search className="h-4 w-4 mr-2" /> Buscar
          </Button>
        </div>
      </form>
    </motion.div>
  )
}
