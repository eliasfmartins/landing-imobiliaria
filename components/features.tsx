"use client"

import { motion } from "framer-motion"
import { Award, Building, Clock, Search, Shield, Users } from "lucide-react"

export function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const features = [
    {
      icon: <Search className="h-7 w-7" />,
      title: "Busca Inteligente",
      description: "Encontre o imóvel ideal com nossa ferramenta de busca avançada e filtros personalizados.",
      gradient: "from-amber-500 to-yellow-600",
    },
    {
      icon: <Building className="h-7 w-7" />,
      title: "Imóveis Exclusivos",
      description: "Acesso a imóveis exclusivos e em localizações privilegiadas do mercado de luxo.",
      gradient: "from-orange-500 to-amber-600",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Atendimento VIP",
      description: "Equipe especializada dedicada exclusivamente ao seu atendimento personalizado.",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Segurança Total",
      description: "Transações 100% seguras com documentação completa e assessoria jurídica.",
      gradient: "from-amber-600 to-yellow-700",
    },
    {
      icon: <Award className="h-7 w-7" />,
      title: "Excelência Premiada",
      description: "Reconhecida como uma das melhores imobiliárias de alto padrão da região.",
      gradient: "from-yellow-600 to-amber-700",
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: "Agilidade Premium",
      description: "Processos otimizados e eficientes para economizar seu tempo valioso.",
      gradient: "from-orange-600 to-yellow-700",
    },
  ]

  return (
    <section className="py-24 bg-gradient-section relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl dark:from-primary/30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-3xl dark:from-primary/30"></div>

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
            <p className="text-primary uppercase tracking-widest text-sm font-semibold">Nossos Diferenciais</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Por que escolher a Martins&Silva?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos serviços completos e personalizados para atender todas as suas necessidades imobiliárias com o
            mais alto padrão de qualidade.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative">
              <div className="relative bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 dark:border-primary/20 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-amber-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}
                  >
                    <div className="text-white drop-shadow-sm">{feature.icon}</div>
                  </div>
                  {/* Decorative Ring */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-primary/20 dark:border-primary/30 rounded-2xl group-hover:border-primary/40 transition-colors duration-500"></div>
                </div>

                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-xl font-heading font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-amber-500 group-hover:w-16 transition-all duration-500 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
