"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Property } from "@/types/property"
import { PropertyForm } from "@/components/property-form"
import { PropertyList } from "@/components/property-list"
import { useRouter } from "next/navigation"
import { Building, Home, LogOut, Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AdminPage() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("list")
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/login")
      return
    }

    fetchProperties()
  }, [router])

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
      toast({
        title: "Erro ao carregar imóveis",
        description: "Não foi possível carregar a lista de imóveis.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleEditProperty = (property: Property) => {
    setSelectedProperty(property)
    setActiveTab("edit")
  }

  const handleDeleteProperty = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este imóvel?")) {
      return
    }

    try {
      const token = localStorage.getItem("token")
      const response = await fetch(`https://imobiliaria-api-nine.vercel.app/imoveis/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: token || "",
        },
      })

      const data = await response.json()
      if (data.success) {
        toast({
          title: "Imóvel excluído",
          description: "O imóvel foi excluído com sucesso.",
        })
        fetchProperties()
      } else {
        toast({
          title: "Erro ao excluir imóvel",
          description: data.message || "Não foi possível excluir o imóvel.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error deleting property:", error)
      toast({
        title: "Erro ao excluir imóvel",
        description: "Ocorreu um erro ao tentar excluir o imóvel.",
        variant: "destructive",
      })
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    router.push("/login")
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            Painel Administrativo
          </motion.h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" /> Sair
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Imóveis</CardTitle>
                <Building className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{properties.length}</div>
                <p className="text-xs text-muted-foreground">Imóveis cadastrados no sistema</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Imóveis Destacados</CardTitle>
                <Home className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{properties.filter((p) => p.highlight).length}</div>
                <p className="text-xs text-muted-foreground">Imóveis em destaque na página inicial</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="list">Lista de Imóveis</TabsTrigger>
              <TabsTrigger value="add">Adicionar Imóvel</TabsTrigger>
              {selectedProperty && <TabsTrigger value="edit">Editar Imóvel</TabsTrigger>}
            </TabsList>

            {activeTab === "list" && (
              <Button onClick={() => setActiveTab("add")}>
                <Plus className="h-4 w-4 mr-2" /> Novo Imóvel
              </Button>
            )}
          </div>

          <TabsContent value="list" className="space-y-4">
            <PropertyList
              properties={properties}
              loading={loading}
              onEdit={handleEditProperty}
              onDelete={handleDeleteProperty}
              onRefresh={fetchProperties}
            />
          </TabsContent>

          <TabsContent value="add">
            <Card>
              <CardHeader>
                <CardTitle>Adicionar Novo Imóvel</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo para adicionar um novo imóvel ao sistema.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PropertyForm
                  onSuccess={() => {
                    fetchProperties()
                    setActiveTab("list")
                  }}
                />
              </CardContent>
            </Card>
          </TabsContent>

          {selectedProperty && (
            <TabsContent value="edit">
              <Card>
                <CardHeader>
                  <CardTitle>Editar Imóvel</CardTitle>
                  <CardDescription>Edite as informações do imóvel selecionado.</CardDescription>
                </CardHeader>
                <CardContent>
                  <PropertyForm
                    property={selectedProperty}
                    onSuccess={() => {
                      fetchProperties()
                      setActiveTab("list")
                      setSelectedProperty(null)
                    }}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  )
}
