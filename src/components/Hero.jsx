import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center text-primary"
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <motion.div
        className="relative z-10 container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-light-text mb-4"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
        >
          Construindo o futuro com
          <br />
          <span className="text-secondary">Qualidade e Confiança</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
        >
          Na NTC Brasil, cada projeto é uma obra-prima. Transformamos sua visão
          em realidade com excelência e compromisso.
        </motion.p>

        <motion.div variants={itemVariants}>
          <a
            href="#contato"
            className="inline-block bg-secondary text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Transforme seu Sonho em Realidade
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#sobre" aria-label="Rolar para baixo">
          <ArrowDown className="text-primary h-8 w-8" />
        </a>
      </motion.div>
    </section>
  );
}
