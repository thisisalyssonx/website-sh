// src/components/Coordinators.tsx
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Linkedin, Mail } from 'lucide-react';

// Importe as imagens locais dos coordenadores
import rodrigoAlmeidaImg from '../assets/coordinators/rodrigo.jpg';
import felipeImg from '../assets/coordinators/felipe.jpg';

interface Coordinator {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
  bio?: string;
}

const coordinatorsData: Coordinator[] = [
  {
    name: 'Felipe Gomes',
    role: 'Coordenador da Software House',
    image: felipeImg, 
    linkedin: 'https://www.linkedin.com/in/felipe-barbosa-85a1a9187/',
    email: 'felipe.barbosa@undb.edu.br',
    bio: 'Professor, engenheiro e entusiasta de tecnologia, lidera a Software House da UNDB, guiando alunos em projetos inovadores.',
  },
  {
    name: 'Rodrigo Almeida',
    role: 'Coordenador da Escola de Tecnologia',
    image: rodrigoAlmeidaImg,
    linkedin: 'https://www.linkedin.com/in/rodrigo--lima/',
    email: 'rodrigo.lima@undb.edu.br',
    bio: 'Lidera a Escola de Tecnologia, com foco em inovação educacional e na formação de novos talentos para o mercado.',
  },
];

const Coordinators: React.FC = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollReveal({ triggerOnce: true });

  return (
    <section id="coordinators" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className={`text-4xl font-extrabold text-center mb-12 text-gray-900 
          ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0'}`}
        >
          Nossa Coordenação
        </h2>
        <p className={`text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16 
          ${sectionVisible ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0'}`}
        >
          Conheça os líderes que impulsionam a inovação e o aprendizado na Software House e na Escola de Tecnologia da UNDB.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {coordinatorsData.map((coordinator, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300
              ${sectionVisible ? `opacity-100 translate-y-0 delay-${300 + index * 100}` : 'opacity-0'}`}
            >
              {/* ✅ LAYOUT CORRIGIDO: Voltamos com o md:flex */}
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img 
                    // ✅ TAMANHO DA IMAGEM AUMENTADO
                    className="h-48 w-full object-cover md:h-full md:w-56" 
                    src={coordinator.image} 
                    alt={coordinator.name} 
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">{coordinator.role}</div>
                  <h3 className="block mt-1 text-2xl leading-tight font-bold text-gray-900">{coordinator.name}</h3>
                  <p className="mt-2 text-gray-600">{coordinator.bio}</p>
                  <div className="mt-4 flex space-x-4">
                    {coordinator.linkedin && (
                      <a 
                        href={coordinator.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 hover:text-blue-700 transition-colors"
                        aria-label={`LinkedIn de ${coordinator.name}`}
                      >
                        <Linkedin size={24} />
                      </a>
                    )}
                    {coordinator.email && (
                      <a 
                        href={`mailto:${coordinator.email}`} 
                        className="text-red-500 hover:text-red-700 transition-colors"
                        aria-label={`Email de ${coordinator.name}`}
                      >
                        <Mail size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coordinators;