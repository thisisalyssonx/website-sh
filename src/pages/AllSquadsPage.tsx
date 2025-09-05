// src/pages/AllSquadsPage.tsx

import React, { useState } from 'react';
import { squads } from '../data/squadsData';
import { Squad } from '../types';
import SquadCard from '../components/SquadCard'; // Apenas importa o card
import SquadDetailModal from '../components/SquadDetailModal'; // Apenas importa o modal

const AllSquadsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSquad, setSelectedSquad] = useState<Squad | null>(null);

  const openModal = (squad: Squad) => {
    setSelectedSquad(squad);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Adicionamos um pequeno delay para a animação de saída do modal ser mais suave
    setTimeout(() => setSelectedSquad(null), 300);
  };

  return (
    <>
      <div className="bg-[#141414] text-white min-h-screen pt-24">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-4">
            Nossos <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">Squads</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
            Conheça todas as nossas equipes de desenvolvimento e os projetos inovadores que elas estão construindo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {squads.map((squad, index) => (
              <SquadCard
                key={squad.id}
                squad={squad}
                index={index}
                openModal={openModal}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* O modal é renderizado aqui, usando o componente importado */}
      <SquadDetailModal isOpen={isModalOpen} onClose={closeModal} squad={selectedSquad} />
    </>
  );
};

export default AllSquadsPage;