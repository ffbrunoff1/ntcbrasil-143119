import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
export default function Footer() {
  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Pilares', href: '#servicos' },
    { name: 'Contato', href: '#contato' },
  ];
  const socialLinks = [
    { icon: <Facebook />, href: '#' },
    { icon: <Instagram />, href: '#' },
    { icon: <Linkedin />, href: '#' },
  ];
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
  return (
    <motion.footer
      className="bg-accent text-light-text"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#hero" className="mb-4">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1752713604222_0.png"
                alt="NTC Brasil Logo"
                className="h-14 w-auto filter brightness-0 invert"
              />
            </a>
            <p className="max-w-xs text-gray-400">
              Arrumando com qualidade e confiança.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Siga-nos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                  aria-label={`Link para ${social.icon.type.displayName}`}
                >
                  {React.cloneElement(social.icon, { size: 24 })}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
