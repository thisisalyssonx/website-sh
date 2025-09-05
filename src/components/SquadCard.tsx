import React, { useState } from 'react';
import { Squad } from '../types';
import { ArrowRight, Users, Star, ExternalLink } from 'lucide-react';

interface SquadCardProps {
  squad: Squad;
  index: number;
  openModal: (squad: Squad) => void;
}

const SquadCard: React.FC<SquadCardProps> = ({ squad, index, openModal }) => {
  const [hoveredSquadId, setHoveredSquadId] = useState<string | null>(null);
  
  // ✅ CORREÇÃO DEFINITIVA: Verifica se existe um projeto antes de tentar usá-lo.
  const mainProject = squad.projects && squad.projects.length > 0 ? squad.projects[0] : null;

  const getStatusColor = (status?: string) => {
    if (!status) return 'bg-gray-400';
    return status === 'Finalizado'
      ? 'bg-gradient-to-r from-green-400 to-emerald-500'
      : 'bg-gradient-to-r from-yellow-400 to-orange-500';
  };

  // Se um squad não tiver nenhum projeto, ele não será renderizado.
  if (!mainProject) {
    return null; 
  }

  return (
    <div
      onClick={() => openModal(squad)}
      onMouseEnter={() => setHoveredSquadId(squad.id)}
      onMouseLeave={() => setHoveredSquadId(null)}
      className={`relative bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800/50 hover:border-cyan-400/50 transition-all duration-700 hover:transform hover:-translate-y-4 hover:scale-105 cursor-pointer group ${
        index % 3 === 1 ? 'lg:translate-y-8' : ''
      }`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="relative z-10">
        <div className="relative overflow-hidden">
          <img 
            src={squad.image || mainProject.image} 
            alt={squad.name}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg ${getStatusColor(mainProject.status)}`}>
            {mainProject.status === 'Em Desenvolvimento' ? 'Em Dev' : 'Finalizado'}
          </div>
          <div className="absolute top-4 left-4 flex items-center space-x-1 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full"><Star className="h-3 w-3 text-yellow-400 fill-current" /><span className="text-xs font-medium text-white">{mainProject.rating}</span></div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">{squad.name}</h3>
          <p className="text-gray-300 mb-6 leading-relaxed text-sm">{squad.mission}</p>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-400"><Users className="h-4 w-4" style={{ color: '#65C2CA' }} /><span>{mainProject.team} membros</span></div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {mainProject.technologies.slice(0, 3).map((tech) => (<span key={tech} className="px-3 py-1 text-xs font-medium rounded-full border" style={{ backgroundColor: 'rgba(101, 194, 202, 0.1)', borderColor: '#65C2CA', color: '#65C2CA' }}>{tech}</span>))}
            {mainProject.technologies.length > 3 && <span className="px-3 py-1 text-xs font-medium rounded-full border" style={{ backgroundColor: 'rgba(101, 194, 202, 0.1)', borderColor: '#65C2CA', color: '#65C2CA' }}>+ {mainProject.technologies.length - 3}</span>}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 font-medium" style={{ color: '#E92BA6' }}><span className="text-sm">Ver detalhes</span><ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></div>
            {hoveredSquadId === squad.id && (<div className="animate-bounce"><ExternalLink className="h-5 w-5" style={{ color: '#010DAD' }} /></div>)}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" style={{ backgroundColor: '#E92BA6' }}></div>
    </div>
  );
};

export default SquadCard;