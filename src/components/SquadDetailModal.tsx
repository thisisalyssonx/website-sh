import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Squad } from '../types';
import { Users, X, Rocket, Star, Link as LinkIcon, Code } from 'lucide-react';

interface SquadDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  squad: Squad | null;
}

const SquadDetailModal: React.FC<SquadDetailModalProps> = ({ isOpen, onClose, squad }) => {
  if (!squad) return null;

  const mainProject = squad.projects[0];

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />
        </Transition.Child>
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
            <Dialog.Panel className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gray-900 text-white border border-gray-700 p-8 transform-gpu transition-all">
              <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X className="h-6 w-6" /></button>
              
              <div className="text-center mb-6">
                <Dialog.Title className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">{squad.name}</Dialog.Title>
                <p className="text-gray-400 mt-2 text-lg">{mainProject.title}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img src={squad.image} alt={squad.name} className="w-full h-56 object-cover rounded-lg mb-4"/>
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">Sobre o Projeto</h3>
                  <p className="text-gray-400 text-sm">{mainProject.longDescription}</p>
                </div>

                <div className="flex flex-col space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-cyan-400">Detalhes do Projeto</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <p className="text-2xl font-bold">{mainProject.team}</p>
                        <p className="text-xs text-gray-400">Membros</p>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <p className="text-2xl font-bold flex items-center justify-center">
                          <Star className="h-5 w-5 text-yellow-400 fill-current mr-1"/>
                          {mainProject.rating}
                        </p>
                        <p className="text-xs text-gray-400">Avaliação</p>
                      </div>
                      <div className="bg-gray-800 p-3 rounded-lg">
                        
                        {/* ===== CORREÇÃO AQUI ===== */}
                        <p className={`text-base font-bold ${mainProject.status === 'Finalizado' ? 'text-green-400' : 'text-yellow-400'}`}>
                          {mainProject.status === 'Em Desenvolvimento' ? 'Em Dev' : 'Finalizado'}
                        </p>
                        {/* ========================= */}

                        <p className="text-xs text-gray-400">Status</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-cyan-400">Tecnologias Utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {mainProject.technologies.map(tech => (
                        <span key={tech} className="flex items-center px-3 py-1 text-sm font-medium rounded-full bg-gray-700 text-cyan-300">
                          <Code className="h-3 w-3 mr-1.5" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                   {mainProject.liveUrl && mainProject.liveUrl !== '#' && (
                    <a href={mainProject.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full p-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold transition-colors">
                      <LinkIcon className="h-5 w-5 mr-2"/>
                      Ver Projeto Online
                    </a>
                   )}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SquadDetailModal;