import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero: React.FC = () => {
  const typewriterText = useTypewriter({
    words: [
      'Criando soluções, formando talentos.',
      'Inovação através da educação.',
      'Desenvolvendo o futuro da tecnologia.',
    ],
    typeSpeed: 80,
    deleteSpeed: 40,
    delayBetweenWords: 3000,
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #141414 0%, #010DAD 35%, #65C2CA 70%, #E92BA6 100%)'
      }}
    >
      {/* Shimmer/Glow Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 transform -skew-x-12 animate-shimmer" style={{
          background: 'linear-gradient(90deg, transparent, rgba(101, 194, 202, 0.3), transparent)'
        }}></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(101, 194, 202, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(101, 194, 202, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-float" style={{ backgroundColor: '#65C2CA20' }}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-float-delayed" style={{ backgroundColor: '#E92BA620' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse-slow" style={{ backgroundColor: '#010DAD15' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-twinkle" style={{ backgroundColor: '#65C2CA80' }}></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 rounded-full animate-twinkle-delayed" style={{ backgroundColor: '#E92BA680' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 rounded-full animate-twinkle-slow" style={{ backgroundColor: '#65C2CA60' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full animate-twinkle" style={{ backgroundColor: '#010DAD80' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="relative">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in relative">
            <span className="relative z-10">Software House</span>
            <div className="absolute inset-0 text-white/20 blur-sm scale-105 animate-glow">Software House</div>
          </h1>
        </div>
       
        <div className="text-xl md:text-2xl font-light min-h-[2em] flex items-center justify-center animate-slide-up" style={{ color: '#65C2CA' }}>
          <span className="border-r-2 animate-blink pr-1" style={{ 
            borderColor: '#65C2CA',
            color: '#FFF'
          }}>
            {typewriterText}
          </span>
        </div>

        <p className="text-lg mt-8 max-w-2xl mx-auto leading-relaxed animate-slide-up-delayed" style={{ color: '#FFF' }}>
          Unimos educação e inovação, oferecendo aos nossos estudantes a oportunidade de desenvolver soluções tecnológicas reais que impactam o mercado e transformam o futuro.
        </p>

        <div className="mt-12 animate-bounce-gentle">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110 group"
          >
            <div className="relative">
              <svg className="w-8 h-8 mx-auto group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
       
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200vw) skewX(-12deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        @keyframes twinkle-delayed {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }

        @keyframes twinkle-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        @keyframes glow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        @keyframes blink {
          0%, 50% { border-color: #65C2CA; }
          51%, 100% { border-color: transparent; }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
       
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
       
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.5s both;
        }

        .animate-slide-up-delayed {
          animation: slide-up 1s ease-out 0.8s both;
        }

        .animate-shimmer {
          animation: shimmer 8s infinite linear;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-twinkle-delayed {
          animation: twinkle-delayed 4s ease-in-out infinite;
        }

        .animate-twinkle-slow {
          animation: twinkle-slow 5s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;