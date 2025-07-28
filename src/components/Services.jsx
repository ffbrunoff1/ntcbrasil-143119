import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardList,
  HardHat,
  CheckCircle,
  DraftingCompass,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <DraftingCompass className="h-12 w-12 text-secondary mb-4" />,
      title: 'Planejamento e Design',
      description:
        'Desenvolvemos projetos detalhados e personalizados, alinhando design inovador com funcionalidade e viabilidade técnica.',
    },
    {
      icon: <HardHat className="h-12 w-12 text-secondary mb-4" />,
      title: 'Execução de Qualidade',
      description:
        'Nossa equipe de especialistas gerencia cada etapa da obra com rigor, utilizando materiais de ponta e as melhores práticas do mercado.',
    },
    {
      icon: <ClipboardList className="h-12 w-12 text-secondary mb-4" />,
      title: 'Gestão de Projetos',
      description:
        'Oferecemos um gerenciamento completo, garantindo o cumprimento de prazos, orçamentos e a comunicação transparente com o cliente.',
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-secondary mb-4" />,
      title: 'Entrega e Pós-Obra',
      description:
        'Compromisso com a entrega final impecável e suporte contínuo para garantir a longevidade e a satisfação com o seu investimento.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold">
            Nossos Pilares de Atuação
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Fundamentamos nosso trabalho em quatro pilares essenciais que
            garantem a excelência em cada projeto que realizamos.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-primary p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              variants={cardVariants}
            >
              <div className="flex-shrink-0">{service.icon}</div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
