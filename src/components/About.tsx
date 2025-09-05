import React from 'react';
import { Code, Users, Lightbulb, Target, Zap, Rocket, Heart, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal({ triggerOnce: true });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollReveal({ triggerOnce: true });
  const { elementRef: featuresRef, isVisible: featuresVisible } = useScrollReveal({ triggerOnce: true });
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollReveal({ triggerOnce: true });

  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Desenvolvimento Prático',
      description: 'Projetos reais que conectam teoria e prática no desenvolvimento de software.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Formação de Talentos',
      description: 'Ambiente colaborativo onde estudantes desenvolvem habilidades técnicas e soft skills.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Inovação Tecnológica',
      description: 'Soluções inovadoras utilizando as mais modernas tecnologias do mercado.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Impacto Real',
      description: 'Projetos que geram valor para a comunidade acadêmica e o mercado.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { number: '10+', label: 'Projetos Desenvolvidos', icon: <Rocket className="h-6 w-6" /> },
    { number: '20+', label: 'Alunos em Projetos', icon: <Award className="h-6 w-6" /> },
    { number: '20+', label: 'Tecnologias Utilizadas', icon: <Zap className="h-6 w-6" /> },
    { number: '5', label: 'Anos de Experiência', icon: <Heart className="h-6 w-6" /> }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Title Section */}
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
            Quem Somos?
            <span className="absolute -top-4 -right-4 text-blue-500 animate-bounce">
              <Zap className="h-8 w-8" />
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse"></div>
          </div>
        </div>

        {/* Content Section */}
        <div 
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 delay-300 ${
            contentVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:scale-105">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 relative">
              A UNDB Software House é o núcleo de desenvolvimento de software da Universidade Dom Bosco, 
              onde alunos criam soluções reais para o mercado sob orientação especializada dos professores.
              <span className="absolute -top-2 -left-2 text-blue-300 opacity-50">
                <Code className="h-6 w-6" />
              </span>
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Nosso objetivo é formar profissionais capacitados através da experiência prática, 
              desenvolvendo projetos que impactam positivamente a comunidade acadêmica e o ecossistema 
              tecnológico de São Luís - MA.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div 
          ref={featuresRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-600 ${
            featuresVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden border border-gray-100 animate-float"
              style={{
                transformStyle: 'preserve-3d',
                animationDelay: `${index * 0.5}s`
              }}
              onMouseEnter={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'translateY(-12px) rotateX(5deg) rotateY(5deg) scale(1.02)';
                card.style.zIndex = '10';
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';
                card.style.zIndex = '1';
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 8;
                const rotateY = (centerX - x) / 8;
                
                card.style.transform = `translateY(-12px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
              }}
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}></div>
              
              {/* Icon Container */}
              <div className={`relative mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                {feature.icon}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-500"></div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-gray-100 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-gray-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-1000 delay-900 ${
            statsVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Nossos Números
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white mb-3 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `
      }} />
    </section>
  );
};

export default About;