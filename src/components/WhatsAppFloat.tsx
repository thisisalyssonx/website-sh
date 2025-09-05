import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  // Número do WhatsApp da SH 
  const whatsappNumber = "5598987423919"; // Número oficial da SH
  const message = "Olá! Vim do site da Software House e gostaria de saber mais! 👋";
  const messageservicos = "Olá! Vim do site da Software House e gostaria de saber mais sobre os serviços! 👋";
  const messageorcamento = "Olá! Vim do site da Software House e gostaria de fazer um orçamento! 👋";

  // Mostrar após 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Parar animação após hover
  const handleMouseEnter = () => {
    setIsAnimating(false);
  };

  // Abrir WhatsApp usando a URL da API oficial
  const openWhatsApp = () => {
    const url = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const txtServicos = () => {
    const url = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(messageservicos)}`;
    window.open(url, '_blank');
  };

  const txtOrcamento = () => {
    const url = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(messageorcamento)}`;
    window.open(url, '_blank');
  };


  // Expandir/Recolher
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    setIsAnimating(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay para fechar quando expandido */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Botão Principal */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-16'
        }`}
      >
        {/* Card Expandido */}
        {isExpanded && (
          <div 
            className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-80 transform transition-all duration-300 animate-in slide-in-from-bottom-4"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.98))',
              backdropFilter: 'blur(10px)'
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold"
                  style={{ background: 'linear-gradient(135deg, #832589ff, #2f0745ff)' }}
                >
                  SH
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Software House</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-medium">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            </div>

            {/* Mensagem */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                👋 <strong>Olá!</strong> Somos a Software House, uma empresa escola focada em inovação tecnológica.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Como podemos tornar sua ideia em realidade?
              </p>
            </div>

            {/* Botões de Ação */}
            <div className="space-y-2">
              <button
                onClick={openWhatsApp}
                className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold py-3 px-4 rounded-xl hover:from-[#22c55e] hover:to-[#16a34a] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="inline-block h-5 w-5 mr-2" />
                Conversar no WhatsApp
              </button>
              
              <div className="grid grid-cols-2 gap-2">
                <button 
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-sm"
                  onClick={txtServicos}
                >
                  🚀 Serviços
                </button>
                <button 
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-3 rounded-lg transition-colors duration-200 text-sm"
                  onClick={txtOrcamento}
                >
                  💰 Orçamento
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Resposta rápida • Suporte especializado
              </p>
            </div>
          </div>
        )}

        {/* Botão Fluuante */}
        <button
          onClick={toggleExpanded}
          onMouseEnter={handleMouseEnter}
          className={`relative w-16 h-16 rounded-full text-white font-bold text-lg shadow-2xl transition-all duration-300 transform hover:scale-110 group ${
            isAnimating ? 'animate-bounce' : ''
          }`}
          style={{
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            boxShadow: '0 8px 32px rgba(37, 211, 102, 0.4)'
          }}
          title="Fale conosco no WhatsApp!"
        >
          {/* Ícone */}
          <div className="relative z-10">
            {isExpanded ? (
              <X className="h-7 w-7 mx-auto transition-transform duration-200" />
            ) : (
              <MessageCircle className="h-7 w-7 mx-auto transition-transform duration-200 group-hover:scale-110" />
            )}
          </div>

          {/* Efeito de Pulso */}
          <div 
            className="absolute inset-0 rounded-full animate-ping opacity-75"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
          />

          {/* Badge de Notificação */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
            1
          </div>
        </button>

        {/* Tooltip */}
        {!isExpanded && (
          <div className="absolute bottom-20 right-0 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Fale conosco! 💬
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
          </div>
        )}
      </div>

      {/* Estilos CSS inline para animações */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: -1
        }}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes animate-in {
              from {
                opacity: 0;
                transform: translateY(16px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            .animate-in {
              animation: animate-in 0.3s ease-out;
            }
            
            .slide-in-from-bottom-4 {
              animation: slideInFromBottom 0.3s ease-out;
            }
            
            @keyframes slideInFromBottom {
              from {
                transform: translateY(16px);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
          `
        }} />
      </div>
    </>
  );
};

export default WhatsAppFloat;