import React from 'react';

const CTA: React.FC = () => {
  // A função de scroll foi removida

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-4xl font-bold mb-4" style={{ color: '#141414' }}>
            Tem uma ideia ou projeto?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Nossa equipe de jovens talentos está pronta para colaborar em desafios tecnológicos e desenvolver soluções inovadoras para sua empresa ou startup.
          </p>
          
          <a 
            href="https://linktr.ee/softwarehouse.undb"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full font-semibold text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ 
              background: 'linear-gradient(135deg, #65C2CA, #010DAD)',
            }}
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;