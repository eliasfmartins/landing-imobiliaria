"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 bg-light-section">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="text-primary uppercase tracking-widest text-sm font-medium mb-2">Nossa História</p>
            <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">Sobre a Martins&Silva</h2>
            <div className="h-1 w-24 bg-primary mb-6"></div>
            <p className="text-muted-foreground mb-4">
              Fundada em 2024 por Carla Martins, uma profissional experiente e reconhecida no mercado imobiliário, a
              Martins & Silva Imobiliária nasceu com a missão de transformar sonhos em realidade. Com mais de 10 anos de
              atuação no setor e registro no CRECI, Carla traz sua expertise para oferecer um atendimento personalizado,
              auxiliando cada cliente na busca pelo imóvel ideal.
            </p>
            <p className="text-muted-foreground mb-6 gold-border-left">
              Nosso compromisso vai além da compra e venda de imóveis — queremos proporcionar segurança, transparência e
              a melhor experiência para quem deseja investir, morar ou realizar o sonho da casa própria.
            </p>
            <Button className="btn-primary group" asChild>
              <Link href="/sobre" className="flex items-center">
                Conheça Nossa História
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary"></div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&h=600&auto=format&fit=crop"
                  alt="Equipe Martins&Silva"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
