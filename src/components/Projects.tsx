// src/components/Projects.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import { squads as allSquads } from '../data/squadsData';
import { Squad } from '../types';
import SquadCard from '../SquadCard';
import SquadDetailModal from './SquadDetailModal';

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSquad, setSelectedSquad] = useState<Squad | null>(null);
  
  const openModal = (squad: Squad) => {
    setSelectedSquad(squad);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const featuredSquads = allSquads.slice(0, 3);

  return (
    <>
      <section id="projects" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#141414' }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border mb-6" style={{ borderColor: '#65C2CA', backgroundColor: 'rgba(101, 194, 202, 0.1)' }}>
              <Zap className="h-4 w-4" style={{ color: '#65C2CA' }} />
              <span className="text-sm font-medium" style={{ color: '#65C2CA' }}>Nossos Squads</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Conheça nossos{' '}<span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">Squads</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredSquads.map((squad, index) => (
              <SquadCard key={squad.id} squad={squad} index={index} openModal={openModal} />
            ))}
          </div>
          <div className="text-center mt-20">
            <Link
              to="/squads"
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full font-bold text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #010DAD, #E92BA6)' }}
            >
              <span>Ver Todos os Squads</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      <SquadDetailModal isOpen={isModalOpen} onClose={closeModal} squad={selectedSquad} />
    </>
  );
};

export default Projects;