"use client"

import { motion } from "framer-motion"
import { Building, Award, Users, Clock, MapPin, Phone, Mail } from "lucide-react"

export default function SobrePage() {
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
            <h1 className="text-4xl font-bold mb-4">Sobre a Martins&Silva</h1>
            <p className="text-muted-foreground">
              Conheça nossa história, valores e compromisso com a excelência no mercado imobiliário.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <p className="text-muted-foreground mb-4">
                Fundada em 2024 por Carla Martins, uma profissional experiente e reconhecida no mercado imobiliário, a
                Martins & Silva Imobiliária nasceu com a missão de transformar sonhos em realidade. Com mais de 10 anos
                de atuação no setor e registro no CRECI, Carla traz sua expertise para oferecer um atendimento
                personalizado, auxiliando cada cliente na busca pelo imóvel ideal.
              </p>
              <p className="text-muted-foreground mb-4">
                Nosso compromisso vai além da compra e venda de imóveis — queremos proporcionar segurança, transparência
                e a melhor experiência para quem deseja investir, morar ou realizar o sonho da casa própria. Seja para
                encontrar um lar acolhedor ou uma oportunidade de investimento, estamos aqui para guiar você em cada
                etapa do processo.
              </p>
              <p className="text-muted-foreground">
                Entre em contato e descubra como podemos ajudar você a encontrar o imóvel perfeito!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden card-enhanced img-hover-zoom"
            >
              <img
                src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=800&h=600&auto=format&fit=crop"
                alt="Escritório Martins&Silva"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-muted-foreground">Princípios que guiam nossas ações e decisões todos os dias.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="bg-card p-6 rounded-lg card-enhanced">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Excelência</h3>
              <p className="text-muted-foreground text-center">
                Buscamos a excelência em tudo o que fazemos, desde o atendimento ao cliente até a seleção dos imóveis em
                nosso portfólio.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-card p-6 rounded-lg card-enhanced">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Transparência</h3>
              <p className="text-muted-foreground text-center">
                Acreditamos que relacionamentos duradouros são construídos com base na honestidade e transparência em
                todas as negociações.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-card p-6 rounded-lg card-enhanced">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Inovação</h3>
              <p className="text-muted-foreground text-center">
                Estamos sempre em busca de novas tecnologias e métodos para melhorar a experiência dos nossos clientes.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-card p-6 rounded-lg card-enhanced">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Comprometimento</h3>
              <p className="text-muted-foreground text-center">
                Estamos comprometidos com o sucesso de cada cliente, dedicando tempo e recursos para encontrar a solução
                ideal.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-card p-6 rounded-lg card-enhanced">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Conhecimento Local</h3>
              <p className="text-muted-foreground text-center">
                Nossa equipe possui profundo conhecimento do mercado local, oferecendo insights valiosos para nossos
                clientes.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-card p-6 rounded-lg card-enhanced">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Responsabilidade Social</h3>
              <p className="text-muted-foreground text-center">
                Acreditamos na importância de contribuir positivamente para as comunidades onde atuamos.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-muted-foreground">
              Conheça a profissional dedicada que faz da Martins&Silva uma referência no mercado imobiliário.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex justify-center"
          >
            <motion.div variants={fadeIn} className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto img-hover-zoom card-enhanced">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop"
                  alt="Carla Martins"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Carla Martins</h3>
              <p className="text-primary">Fundadora e Corretora</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-muted-foreground">
              Estamos à disposição para atender você e responder todas as suas dúvidas.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeIn}
              className="flex flex-col items-center text-center card-enhanced bg-card p-6 rounded-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Endereço</h3>
              <p className="text-muted-foreground">
                Edificio HZ Brasil - Q. 02, 01
                <br />
                Sobreloja 02 - Valparaizo I<br />
                Valparaíso de Goiás - GO, 72876-005
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-col items-center text-center card-enhanced bg-card p-6 rounded-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
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
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex flex-col items-center text-center card-enhanced bg-card p-6 rounded-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">E-mail</h3>
              <p className="text-muted-foreground">
                <a href="mailto:imobiliariamartinssilva@gmail.com" className="hover:text-primary transition-colors">
                  imobiliariamartinssilva@gmail.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Nossa Localização</h2>
            <p className="text-muted-foreground">Venha nos visitar e conheça nosso escritório.</p>
          </motion.div>

          <div className="rounded-lg overflow-hidden card-enhanced">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.0661095115!2d-47.97553492394826!3d-16.0478599419305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2e0c5a7d2a7d%3A0x1d0d7e1d3f9c5e0!2sEdificio%20HZ%20Brasil%20-%20Q.%2002%2C%2001%20-%20sobreloja%2002%20-%20Valparaizo%20I%2C%20Valpara%C3%ADso%20de%20Goi%C3%A1s%20-%20GO%2C%2072876-005!5e0!3m2!1spt-BR!2sbr!4v1710271845018!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
