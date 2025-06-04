"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function ContatoPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="relative py-16 bg-muted">
        <div className="container mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
            <p className="text-muted-foreground">
              Estamos à disposição para atender você e responder todas as suas dúvidas sobre nossos imóveis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl font-bold mb-8">Informações de Contato</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                    <p className="text-muted-foreground">
                      Edificio HZ Brasil - Q. 02, 01
                      <br />
                      Sobreloja 02 - Valparaizo I<br />
                      Valparaíso de Goiás - GO, 72876-005
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="https://wa.me/5561991010404"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        (61) 99101-0404
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:imobiliariamartinssilva@gmail.com"
                        className="hover:text-primary transition-colors"
                      >
                        imobiliariamartinssilva@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 9h às 18h
                      <br />
                      Sábado: 9h às 13h
                      <br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12 rounded-lg overflow-hidden h-64 card-enhanced">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.0661095115!2d-47.97553492394826!3d-16.0478599419305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2e0c5a7d2a7d%3A0x1d0d7e1d3f9c5e0!2sEdificio%20HZ%20Brasil%20-%20Q.%2002%2C%2001%20-%20sobreloja%2002%20-%20Valparaizo%20I%2C%20Valpara%C3%ADso%20de%20Goi%C3%A1s%20-%20GO%2C%2072876-005!5e0!3m2!1spt-BR!2sbr!4v1710271845018!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-card p-8 rounded-lg shadow-lg card-enhanced"
            >
              <div className="flex items-center mb-6">
                <MessageSquare className="h-6 w-6 text-primary mr-2" />
                <h2 className="text-2xl font-bold">Envie uma Mensagem</h2>
              </div>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário abaixo e entraremos em contato com você o mais breve possível.
              </p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-muted-foreground">
              Encontre respostas para as dúvidas mais comuns sobre nossos serviços.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="bg-card p-6 rounded-lg card-enhanced">
              <h3 className="text-xl font-semibold mb-2">Como funciona o processo de compra de um imóvel?</h3>
              <p className="text-muted-foreground">
                O processo inclui a escolha do imóvel, negociação, documentação, financiamento (se necessário) e
                escritura. Nossa equipe acompanha você em todas as etapas.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-card p-6 rounded-lg card-enhanced">
              <h3 className="text-xl font-semibold mb-2">Quais documentos são necessários para comprar um imóvel?</h3>
              <p className="text-muted-foreground">
                Geralmente, são necessários documentos pessoais (RG, CPF), comprovante de renda, comprovante de
                residência e, em alguns casos, declaração de imposto de renda.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-card p-6 rounded-lg card-enhanced">
              <h3 className="text-xl font-semibold mb-2">A Martins&Silva trabalha com financiamento bancário?</h3>
              <p className="text-muted-foreground">
                Sim, trabalhamos com os principais bancos e instituições financeiras do mercado, oferecendo as melhores
                condições para nossos clientes.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-card p-6 rounded-lg card-enhanced">
              <h3 className="text-xl font-semibold mb-2">Como agendar uma visita a um imóvel?</h3>
              <p className="text-muted-foreground">
                Você pode agendar uma visita através do nosso site, por telefone ou diretamente em nosso escritório.
                Basta entrar em contato e informar o imóvel de interesse.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
