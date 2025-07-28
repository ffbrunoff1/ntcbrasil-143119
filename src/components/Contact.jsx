import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Enviando...');
    // Simulação de envio
    setTimeout(() => {
      setStatus('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-secondary" />,
      text: '+55 44 99104-0774',
      href: 'tel:+5544991040774',
    },
    {
      icon: <Mail className="h-6 w-6 text-secondary" />,
      text: 'ffbrunoff@yahoo.com.br',
      href: 'mailto:ffbrunoff@yahoo.com.br',
    },
    {
      icon: <MapPin className="h-6 w-6 text-secondary" />,
      text: 'Padre Lebret 801, G05 Bloco 03',
      href: '#',
    },
  ];

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Entre em Contato</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Tem uma ideia ou um projeto em mente? Adoraríamos ouvir sobre ele.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={infoVariants}
          >
            <h3 className="text-2xl font-bold text-dark-text">
              Vamos Conversar
            </h3>
            <p className="text-gray-600">
              Preencha o formulário ou entre em contato através dos nossos
              canais. Nossa equipe está pronta para atender você e transformar
              seu projeto em realidade.
            </p>
            <ul className="space-y-6">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-secondary transition-colors duration-300"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={formVariants}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary transition"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary transition"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary transition"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-secondary text-primary font-bold py-3 px-6 rounded-md hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensagem
              </button>
            </div>
            {status && (
              <p className="text-center text-gray-600 mt-4">{status}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
