"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

export function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const testimonials = [
    {
      quote:
        "A Martins&Silva nos ajudou a encontrar a casa dos nossos sonhos. O atendimento foi excepcional do início ao fim, superando todas as nossas expectativas.",
      author: "João e Maria Silva",
      role: "Compradores",
      location: "Brasília, DF",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100&h=100&auto=format&fit=crop",
      rating: 5,
    },
    {
      quote:
        "Vendi meu apartamento em tempo recorde graças à equipe da Martins&Silva. Profissionais competentes, dedicados e que realmente entendem do mercado.",
      author: "Carlos Mendes",
      role: "Vendedor",
      location: "Valparaíso, GO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
      rating: 5,
    },
    {
      quote:
        "O processo de locação foi simples e transparente. Recomendo os serviços da Martins&Silva para todos que buscam excelência e confiabilidade.",
      author: "Ana Paula Ferreira",
      role: "Locatária",
      location: "Águas Claras, DF",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-muted-section relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-primary rounded-full"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-primary fill-current" />
            <p className="text-primary uppercase tracking-widest text-sm font-semibold">Depoimentos</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            O que nossos clientes dizem
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é o nosso maior orgulho. Confira alguns depoimentos de quem confiou em
            nossos serviços.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="relative bg-card/90 backdrop-blur-sm p-8 rounded-3xl border border-primary/10 dark:border-primary/20 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <div className="relative mb-8">
                  <p className="text-muted-foreground italic leading-relaxed text-center font-medium">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-primary/20 dark:border-primary/30 group-hover:border-primary/40 transition-colors duration-300">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute inset-0 w-16 h-16 border-2 border-primary/20 dark:border-primary/30 rounded-full animate-pulse"></div>
                  </div>

                  <div className="text-center">
                    <h4 className="font-heading font-bold text-foreground mb-1">{testimonial.author}</h4>
                    <p className="text-primary font-medium text-sm mb-1">{testimonial.role}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.location}</p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-amber-500 group-hover:w-20 transition-all duration-500 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-card/80 backdrop-blur-sm px-8 py-4 rounded-2xl border border-primary/10 dark:border-primary/20">
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
            </div>
            <div className="w-px h-8 bg-primary/20"></div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Taxa de Satisfação</div>
            </div>
            <div className="w-px h-8 bg-primary/20"></div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-primary">5★</div>
              <div className="text-sm text-muted-foreground">Avaliação Média</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
