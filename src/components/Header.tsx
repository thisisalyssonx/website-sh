// src/components/Header.tsx

import React, { useEffect, useState } from 'react';
// 1. Importações essenciais do React Router
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoWhite from '../assets/logo.png';
import logoColorida from '../assets/logo-colorida.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 2. Hooks para obter a localização atual e para navegar
  const location = useLocation();
  const navigate = useNavigate();

  // Efeito para estilizar o header ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função que rola a tela até uma seção
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 3. A NOVA FUNÇÃO INTELIGENTE DE NAVEGAÇÃO
  const handleNavClick = (sectionId: string) => {
    // Fecha o menu mobile, se estiver aberto
    setIsMobileMenuOpen(false);

    // Verifica se já estamos na página principal
    if (location.pathname === '/') {
      // Se sim, apenas rola a tela
      scrollToSection(sectionId);
    } else {
      // Se não, navega para a página principal e adiciona a #tag
      navigate(`/#${sectionId}`);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Quem somos' },
    { id: 'projects', label: 'Squads' },
    { id: 'members', label: 'Membros' },
    { id: 'coordinators', label: 'Coordenadores' },
    { id: 'partners', label: 'Parceiros' },
    { id: 'contact', label: 'Contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <img 
              src={isScrolled ? logoColorida : logoWhite}
              alt="UNDB Software House Logo" 
              className="h-8 w-auto object-contain"
            />
            <span className={`font-bold text-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Software House
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                // 4. USAR A NOVA FUNÇÃO NO ONCLICK
                onClick={() => handleNavClick(item.id)}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                // 5. USAR A NOVA FUNÇÃO AQUI TAMBÉM
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;