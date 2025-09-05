import React from 'react';

// --- Caminhos corrigidos para usar caminhos relativos padrão ---
import logoCreajr from '../assets/partners/creajrmalogo.png';
import logoEspma from '../assets/partners/espmalogo.jpg';
import logoBaites from '../assets/partners/logoBAITES.png';
import logoEverest from '../assets/partners/logoeverest.png';
import logoMaker from '../assets/partners/makerlogo.png';
import logoSebrae from '../assets/partners/sebraelogo.png';
import logoSemispe from '../assets/partners/semispelogo.png';
import logoSesi from '../assets/partners/sesilogo.png';

const partners = [
  { name: 'CREA JR - MA', logoSrc: logoCreajr },
  { name: 'Escola de Saúde Pública do Maranhão', logoSrc: logoEspma },
  { name: 'Núcleo de Inovação e Tecnologia da Universidade Federal do Maranhão', logoSrc: logoBaites },
  { name: 'Everest - Equipe de robótica do SESI Maranhão', logoSrc: logoEverest },
  { name: 'Maker', logoSrc: logoMaker },
  { name: 'Sebrae', logoSrc: logoSebrae },
  { name: 'Secretaria Municipal de Inovação', logoSrc: logoSemispe },
  { name: 'SESI', logoSrc: logoSesi },
];

const PartnersSection: React.FC = () => {
  const extendedPartners = [...partners, ...partners];

  return (
    <section id="partners" className="bg-gray-900 py-20 sm:py-24 relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Quem <span className="text-purple-400">Confia</span> em Nosso Trabalho
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Construímos o futuro da tecnologia ao lado de parceiros incríveis que acreditam na nossa missão de inovar e educar.
        </p>

        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mb-16"></div>

        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          }}
        >
          <div className="flex animate-scroll group-hover:pause">
            {extendedPartners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-4 sm:mx-6 py-4">
                <img
                  src={partner.logoSrc}
                  alt={partner.name}
                  className="h-12 sm:h-16 w-auto object-contain grayscale-70 transition-all duration-300 hover:grayscale-0 hover:scale-110 cursor-pointer"
                  title={partner.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#contact" aria-label="Rolar para a próxima seção" className="cursor-pointer">
          <svg 
            className="w-6 h-6 text-gray-600 animate-bounce hover:text-purple-400 transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }
        .group-hover\\:pause:hover .animate-scroll,
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;

