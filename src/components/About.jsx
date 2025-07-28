import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Target } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: 'beforeChildren',
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const stats = [
    {
      icon: <Building className="h-10 w-10 text-secondary" />,
      label: 'Projetos Inovadores',
    },
    {
      icon: <Users className="h-10 w-10 text-secondary" />,
      label: 'Equipe Qualificada',
    },
    {
      icon: <Target className="h-10 w-10 text-secondary" />,
      label: 'Foco no Cliente',
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Sua Visão, <span className="gradient-text">Nossa Construção</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              A NTC Brasil atua com excelência no setor da construção,
              dedicando-se a projetos e construções que superam expectativas.
              Contamos com uma equipe de profissionais qualificados e
              comprometidos com a qualidade, segurança e a satisfação total dos
              nossos clientes.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nossa missão é materializar suas ideias, transformando cada
              desafio em uma estrutura sólida e duradoura. Acreditamos que a
              base de um grande projeto é a confiança e a parceria.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-lg"
                >
                  {stat.icon}
                  <p className="mt-2 font-semibold text-dark-text">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative h-96 lg:h-full w-full"
            variants={imageVariants}
          >
            <motion.img
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Equipe de construção analisando um projeto"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-secondary rounded-2xl -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
