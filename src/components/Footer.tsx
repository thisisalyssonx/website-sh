import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Quem somos' },
    { id: 'projects', label: 'Squads' },
    { id: 'members', label: 'Membros' },
    { id: 'coordinators', label: 'Coordenadores' },
    { id: 'partners', label: 'Parceiros' },
    { id: 'contact', label: 'Contato' },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: '#', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/company/software-house-undb/', label: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/softwarehouseundb/', label: 'Instagram' },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                <Code2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">UNDB Software House</h3>
                <p className="text-gray-400">Universidade Dom Bosco</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              O núcleo de desenvolvimento de software da UNDB, formando talentos e 
              criando soluções tecnológicas inovadoras em São Luís - MA.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 hover:scale-110 group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:softwarehouse@undb.edu.br"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    softwarehouse@undb.edu.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Universidade Dom Bosco</p>
                  <p>São Luís - MA, Brasil</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <a
  href="https://wa.me/5598987423919"
  className="text-gray-300 hover:text-white transition-colors"
  aria-label="Abrir chat no WhatsApp com (98) 98742-3919"
>
  (98) 98742-3919
</a>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 UNDB Software House. Todos os direitos reservados. 
            </p>
            <p className="text-gray-500 text-sm mt-4 md:mt-0">
              Desenvolvido com ❤️ pela equipe da Software House
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;