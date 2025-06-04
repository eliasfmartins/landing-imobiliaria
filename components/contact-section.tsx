"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-24 bg-gradient-section relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl dark:from-primary/30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl dark:from-primary/30"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <p className="text-primary uppercase tracking-widest text-sm font-semibold">Fale Conosco</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos à disposição para atender você e responder todas as suas dúvidas sobre nossos imóveis de alto
            padrão.
          </p>
        </motion.div>

        {/* Unified Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-card/90 backdrop-blur-sm rounded-3xl border border-primary/10 dark:border-primary/20 shadow-2xl shadow-primary/10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Contact Information */}
              <div className="p-8 lg:p-12 space-y-8">
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-amber-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-foreground mb-2">Nosso Endereço</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Edificio HZ Brasil - Q. 02, 01
                        <br />
                        Sobreloja 02 - Valparaizo I<br />
                        Valparaíso de Goiás - GO, 72876-005
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-foreground mb-2">Telefone</h3>
                      <a
                        href="https://wa.me/5561991010404"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-amber-600 transition-colors font-medium text-lg"
                      >
                        (61) 99101-0404
                      </a>
                      <p className="text-muted-foreground text-sm mt-1">WhatsApp disponível</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-heading font-bold text-foreground mb-2">E-mail</h3>
                      <a
                        href="mailto:imobiliariamartinssilva@gmail.com"
                        className="text-primary hover:text-amber-600 transition-colors font-medium break-all"
                        title="imobiliariamartinssilva@gmail.com"
                      >
                        imobiliariamartins...@gmail.com
                      </a>
                      <p className="text-muted-foreground text-sm mt-1">Resposta em até 2 horas</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-foreground mb-2">Horário de Atendimento</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Segunda a Sexta: 9h às 18h</p>
                        <p>Sábado: 9h às 13h</p>
                        <p className="text-muted-foreground/70">Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <Button size="lg" className="btn-primary group w-full sm:w-auto" asChild>
                    <Link href="/contato" className="flex items-center justify-center">
                      Fale Conosco Agora
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Google Map */}
              <div className="relative h-64 lg:h-full min-h-[400px]">
                <div className="absolute inset-0 rounded-r-3xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.0661095115!2d-47.97553492394826!3d-16.0478599419305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2e0c5a7d2a7d%3A0x1d0d7e1d3f9c5e0!2sEdificio%20HZ%20Brasil%20-%20Q.%2002%2C%2001%20-%20sobreloja%2002%20-%20Valparaizo%20I%2C%20Valpara%C3%ADso%20de%20Goi%C3%A1s%20-%20GO%2C%2072876-005!5e0!3m2!1spt-BR!2sbr!4v1710271845018!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500 dark:brightness-75"
                  ></iframe>
                </div>

                {/* Map Overlay */}
                <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-primary/10 dark:border-primary/20 shadow-lg">
                  <p className="text-sm font-medium text-foreground">📍 Nossa Localização</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-primary/10 dark:border-primary/20">
            <span className="text-muted-foreground text-sm">Contato rápido:</span>
            <a
              href="https://wa.me/5561991010404"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition-colors duration-300 text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="mailto:imobiliariamartinssilva@gmail.com"
              className="inline-flex items-center gap-2 bg-primary hover:bg-amber-600 text-white px-4 py-2 rounded-xl transition-colors duration-300 text-sm font-medium"
            >
              <Mail className="w-4 h-4" />
              E-mail
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
