// src/types.ts
export interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedinUrl?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: 'Em Desenvolvimento' | 'Finalizado';
  team: number;
  rating: number;
  image?: string;
  liveUrl?: string;
}

export interface Squad {
  id: string;
  name: string;
  mission: string;
  image?: string;
  members: Member[]; // 
  projects: Project[];
}