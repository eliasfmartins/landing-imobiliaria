"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function SellWithUs() {
  return (
    <section className="py-20 bg-muted-section">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary uppercase tracking-widest text-sm font-medium mb-2">Venda seu Imóvel</p>
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">
              Quer vender seu imóvel com segurança e rapidez?
            </h2>
            <div className="h-1 w-24 bg-primary mb-6"></div>
            <p className="text-muted-foreground mb-8">
              Na Martins&Silva, oferecemos um serviço completo para quem deseja vender seu imóvel. Nossa equipe de
              especialistas cuidará de todo o processo, desde a avaliação até a finalização da venda, garantindo o
              melhor valor e a tranquilidade que você merece.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">Avaliação Profissional</h3>
                  <p className="text-muted-foreground text-sm">
                    Avaliamos seu imóvel considerando localização, estado de conservação e tendências do mercado.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">Marketing Especializado</h3>
                  <p className="text-muted-foreground text-sm">
                    Fotografias profissionais, anúncios estratégicos e divulgação para potenciais compradores.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">Assessoria Jurídica</h3>
                  <p className="text-muted-foreground text-sm">
                    Acompanhamento em toda documentação e processos legais para uma transação segura.
                  </p>
                </div>
              </div>
            </div>

            <Button className="btn-primary group" asChild>
              <Link href="/contato" className="flex items-center">
                Solicitar Avaliação
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary"></div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&h=600&auto=format&fit=crop"
                alt="Venda seu imóvel"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
