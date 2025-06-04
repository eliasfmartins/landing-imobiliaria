"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import type { Property } from "@/types/property"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Plus, X } from "lucide-react"

interface PropertyFormProps {
  property?: Property
  onSuccess?: () => void
}

export function PropertyForm({ property, onSuccess }: PropertyFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    rooms: "",
    value: "",
    images: [] as string[],
    city: "",
    bathrooms: "",
    garages: "",
    area: "",
    phone: "",
    condominium: "",
    highlight: false,
  })
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    if (property) {
      setFormData({
        title: property.title || "",
        description: property.description || "",
        rooms: property.rooms || "",
        value: property.value || "",
        images: property.images || [],
        city: property.city || "",
        bathrooms: property.bathrooms || "",
        garages: property.garages || "",
        area: property.area || "",
        phone: property.phone || "",
        condominium: property.condominium || "",
        highlight: property.highlight || false,
      })
    }
  }, [property])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, highlight: checked }))
  }

  const handleAddImage = () => {
    if (imageUrl.trim()) {
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, imageUrl.trim()],
      }))
      setImageUrl("")
    }
  }

  const handleRemoveImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const token = localStorage.getItem("token")

      if (!token) {
        toast({
          title: "Erro de autenticação",
          description: "Você precisa estar logado para realizar esta ação.",
          variant: "destructive",
        })
        setLoading(false)
        return
      }

      const url = property
        ? `https://imobiliaria-api-nine.vercel.app/imoveis/${property.id}`
        : "https://imobiliaria-api-nine.vercel.app/imoveis"

      const method = property ? "PATCH" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: property ? "Imóvel atualizado" : "Imóvel cadastrado",
          description: data.message || "Operação realizada com sucesso.",
        })

        if (onSuccess) {
          onSuccess()
        }
      } else {
        toast({
          title: "Erro",
          description: data.message || "Ocorreu um erro ao processar sua solicitação.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error submitting property:", error)
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao processar sua solicitação.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="title">Título *</Label>
          <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">Cidade *</Label>
          <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descrição *</Label>
        <Textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="rooms">Quartos *</Label>
          <Input id="rooms" name="rooms" value={formData.rooms} onChange={handleChange} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bathrooms">Banheiros</Label>
          <Input id="bathrooms" name="bathrooms" value={formData.bathrooms} onChange={handleChange} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="garages">Garagens</Label>
          <Input id="garages" name="garages" value={formData.garages} onChange={handleChange} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="value">Valor *</Label>
          <Input id="value" name="value" value={formData.value} onChange={handleChange} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="condominium">Condomínio</Label>
          <Input id="condominium" name="condominium" value={formData.condominium} onChange={handleChange} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="area">Área (m²)</Label>
          <Input id="area" name="area" value={formData.area} onChange={handleChange} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefone de Contato</Label>
        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
      </div>

      <div className="space-y-4">
        <Label>Imagens</Label>
        <div className="flex gap-2">
          <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="URL da imagem" />
          <Button type="button" onClick={handleAddImage} className="shrink-0">
            <Plus className="h-4 w-4 mr-2" /> Adicionar
          </Button>
        </div>

        {formData.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {formData.images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Imagem ${index + 1}`}
                  className="w-full h-32 object-cover rounded-md"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src = "/placeholder.svg?height=200&width=300"
                  }}
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleRemoveImage(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="highlight" checked={formData.highlight} onCheckedChange={handleSwitchChange} />
        <Label htmlFor="highlight">Destacar na página inicial</Label>
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {property ? "Atualizando..." : "Cadastrando..."}
          </>
        ) : property ? (
          "Atualizar Imóvel"
        ) : (
          "Cadastrar Imóvel"
        )}
      </Button>
    </form>
  )
}
