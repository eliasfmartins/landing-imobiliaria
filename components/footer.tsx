import Link from "next/link"
import { Building, Facebook, Instagram, Mail, MapPin, Phone, PhoneIcon as WhatsApp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Martins&Silva</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Encontre o imóvel dos seus sonhos com a Martins&Silva, sua imobiliária de confiança no mercado.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://wa.me/5561991010404" target="_blank" rel="noopener noreferrer">
                  <WhatsApp className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/imoveis" className="text-muted-foreground hover:text-primary transition-colors">
                  Imóveis
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-muted-foreground hover:text-primary transition-colors">
                  Área Administrativa
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Compra de Imóveis</li>
              <li className="text-muted-foreground">Venda de Imóveis</li>
              <li className="text-muted-foreground">Locação</li>
              <li className="text-muted-foreground">Avaliação de Imóveis</li>
              <li className="text-muted-foreground">Consultoria Imobiliária</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  Edificio HZ Brasil - Q. 02, 01, Sobreloja 02 - Valparaizo I, Valparaíso de Goiás - GO
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2 shrink-0" />
                <a
                  href="https://wa.me/5561991010404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (61) 99101-0404
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2 shrink-0" />
                <a
                  href="mailto:imobiliariamartinssilva@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  imobiliariamartinssilva@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Martins&Silva Imobiliária. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
