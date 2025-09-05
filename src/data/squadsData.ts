import { Squad, Member } from '../types';

// Importando as imagens locais dos squads
import eduteaImg from '../assets/squads/edutea.jpg';
import loboDeAzevedoImg from '../assets/squads/lobodeazevedo.jpg';
import odontoCareImg from '../assets/squads/odontocare.jpeg';
import healthManagerImg from '../assets/squads/healthmanager.jpg';
import taxSolutionsImg from '../assets/squads/taxsolutions.jpg';
import rePostureImg from '../assets/squads/reposture.jpeg';
import espImg from '../assets/squads/esp.jpg';
import vacinaPlusImg from '../assets/squads/vacinaplus.jpg';
import atraquiImg from '../assets/squads/atraqui.jpeg';

// Lista completa com todos os 23 membros.
const membersList: Member[] = [
  { id: 1, name: 'Bruno da Rocha Borges', role: 'Scrum Master', image: 'https://ui-avatars.com/api/?name=Bruno+Borges&background=010DAD&color=fff&size=400' },
  { id: 2, name: 'Pedro Victor Santos Veloso', role: 'Dev Back-end', image: 'https://ui-avatars.com/api/?name=Pedro+Veloso&background=65C2CA&color=fff&size=400' },
  { id: 3, name: 'Caio Fontes Gondim Silva', role: 'Backend / DevOps', image: 'https://ui-avatars.com/api/?name=Caio+Fontes&background=E92BA6&color=fff&size=400' },
  { id: 4, name: 'Rafael Santos da Silva', role: 'Marketing e Dev Backend', image: 'https://ui-avatars.com/api/?name=Rafael+Silva&background=141414&color=fff&size=400' },
  { id: 5, name: 'Ana Vitória Maciel Rodrigues', role: 'Marketing e Dev Back-end', image: 'https://ui-avatars.com/api/?name=Ana+Vitoria&background=010DAD&color=fff&size=400' },
  { id: 6, name: 'Juliana Sousa Fernandes', role: 'Full-Stack Developer', image: 'https://ui-avatars.com/api/?name=Juliana+Sousa&background=65C2CA&color=fff&size=400' },
  { id: 7, name: 'Matheus Fernandes Barros', role: 'Desenvolvedor Front-End', image: 'https://ui-avatars.com/api/?name=Matheus+Fernandes&background=E92BA6&color=fff&size=400' },
  { id: 8, name: 'Mateus Verissimo Coelho', role: 'Mobile Front-End', image: 'https://ui-avatars.com/api/?name=Mateus+Verissimo&background=141414&color=fff&size=400' },
  { id: 9, name: 'Augusto Cesar Rodrigues Xavier', role: 'IA e Back-End', image: 'https://ui-avatars.com/api/?name=Augusto+Cesar&background=010DAD&color=fff&size=400' },
  { id: 10, name: 'Alysson Lisboa Rodrigues', role: 'Front-End | UX/UI Designer', image: 'https://ui-avatars.com/api/?name=Alysson+Lisboa&background=65C2CA&color=fff&size=400' },
  { id: 11, name: 'Eduarda Helena Santana Reis', role: 'Marketing', image: 'https://ui-avatars.com/api/?name=Eduarda+Helena&background=E92BA6&color=fff&size=400' },
  { id: 12, name: 'Emylle Moraes dos Santos', role: 'Scrum Master', image: 'https://ui-avatars.com/api/?name=Emylle+Moraes&background=141414&color=fff&size=400' },
  { id: 13, name: 'Allyson de Oliveira Pires', role: 'Desenvolvedor Full Stack', image: 'https://ui-avatars.com/api/?name=Allyson+Pires&background=010DAD&color=fff&size=400' },
  { id: 14, name: 'Paulo Sérgio Costa', role: 'Desenvolvedor Full-Stack', image: 'https://ui-avatars.com/api/?name=Paulo+Sergio&background=65C2CA&color=fff&size=400' },
  { id: 15, name: 'Diego Vitor Lopes Gonçalves Souza', role: 'Inovação e Análise de dados', image: 'https://ui-avatars.com/api/?name=Diego+Vitor&background=E92BA6&color=fff&size=400' },
  { id: 16, name: 'Luciano Mualem Beltrão', role: 'Visão Computacional', image: 'https://ui-avatars.com/api/?name=Luciano+Beltrao&background=141414&color=fff&size=400' },
  { id: 17, name: 'Stephanie Adriane', role: 'Frontend e QA', image: 'https://ui-avatars.com/api/?name=Stephanie+Adriane&background=010DAD&color=fff&size=400' },
  { id: 18, name: 'Arthur Guerra Moura Gonçalves', role: 'Back-End/Banco de Dados', image: 'https://ui-avatars.com/api/?name=Arthur+Guerra&background=65C2CA&color=fff&size=400' },
  { id: 19, name: 'Thiago Akira Higashi Amaral', role: 'Desenvolvimento Mobile', image: 'https://ui-avatars.com/api/?name=Thiago+Akira&background=E92BA6&color=fff&size=400' },
  { id: 20, name: 'Lucas Gomes Antunes', role: 'Back-end', image: 'https://ui-avatars.com/api/?name=Lucas+Gomes&background=141414&color=fff&size=400' },
  { id: 21, name: 'Richardson França Serena', role: 'Desenvolvimento Full Stack', image: 'https://ui-avatars.com/api/?name=Richardson+Serena&background=010DAD&color=fff&size=400' },
  { id: 22, name: 'Joberth Emanoel C. M. Castro', role: 'IA, Ciência de dados e Full Stack', image: 'https://ui-avatars.com/api/?name=Joberth+Emanoel&background=65C2CA&color=fff&size=400' },
  { id: 23, name: 'Davi Emmanuel Moraes Ribeiro', role: 'Desenvolvedor Full-Stack', image: 'https://ui-avatars.com/api/?name=Davi+Emmanuel&background=E92BA6&color=fff&size=400' },
];

export const squads: Squad[] = [
  {
    id: 'squad-edutea', name: 'Squad EDUTEA', mission: 'Criar um ecossistema de suporte para responsáveis, profissionais, clínicas e discentes sobre TEA.', image: eduteaImg, 
    members: [membersList[4], membersList[14], membersList[16], membersList[21]],
    projects: [{ id: 1, title: 'EDUTEA', description: 'Ecossistema de suporte para a comunidade TEA.', longDescription: 'Projeto voltado a criar um ecossistema que oferece o suporte necessário para responsáveis, profissionais, clínicas e discentes sobre TEA, viabilizando a acessibilidade a educação e a inclusão de muitos.', technologies: ['Figma', 'React Native', 'Firebase', 'Expo'], status: 'Em Desenvolvimento', team: 4, rating: 4.8, image: eduteaImg, liveUrl: '#' }]
  },
  {
    id: 'squad-lobo-de-azevedo', name: 'Squad DOCSY', mission: 'Extrair informações úteis de holerites para agilizar a montagem de peças processuais.', image: loboDeAzevedoImg,
    members: [membersList[1], membersList[8], membersList[17], membersList[19], membersList[22]],
    projects: [{ id: 2, title: 'DOCSY', description: 'Sistema para extrair informações de holerites e agilizar a montagem de peças processuais.', longDescription: 'O Docsy é um sistema desenvolvido para um escritório de advocacia com o objetivo principal de extrair informações úteis de holerites. A solução foi criada para agilizar a montagem de peças processuais.', technologies: ['JavaScript', 'Tailwind', 'Vite', 'C++', 'OpenCV', 'Tesseract', 'Python', 'Django', 'MongoDB'], status: 'Finalizado', team: 5, rating: 5.0, image: loboDeAzevedoImg, liveUrl: '#' }]
  },
  {
    id: 'squad-odontocare', name: 'Squad OdontoCare', mission: 'Aplicativo para apoiar e acompanhar protocolos de clareamento dental de forma prática.', image: odontoCareImg,
    members: [membersList[7], membersList[18], membersList[20]],
    projects: [{ id: 3, title: 'OdontoCare', description: 'Aplicativo para apoiar protocolos de clareamento dental.', longDescription: 'O Odontocare é um aplicativo desenvolvido para apoiar protocolos de clareamento dental. Ele oferece acompanhamento diário dos pacientes, cálculos automáticos de substâncias e um passo a passo interativo.', technologies: ['React Native', 'TypeScript', 'Tailwind', 'PostgreSQL'], status: 'Em Desenvolvimento', team: 3, rating: 4.9, image: odontoCareImg, liveUrl: '#' }]
  },
  {
    id: 'squad-healthmanager', name: 'Squad HealthManager', mission: 'Plataforma para gestão de saúde e acompanhamento de protocolos clínicos.', image: healthManagerImg,
    members: [membersList[0], membersList[5], membersList[10], membersList[12], membersList[15]],
    projects: [{ id: 4, title: 'HealthManager', description: 'Plataforma para gestão de saúde e acompanhamento de protocolos clínicos.', longDescription: 'O HealthManager é uma plataforma voltada para a gestão de saúde, auxiliando no acompanhamento de protocolos clínicos e oferecendo suporte ao monitoramento diário de pacientes.', technologies: ['React Native'], status: 'Em Desenvolvimento', team: 5, rating: 4.7, image: healthManagerImg, liveUrl: '#' }]
  },
  {
    id: 'squad-tax-solutions', name: 'Squad Tax Solutions', mission: 'Utiliza uma gestão baseada em dados para centralizar as informações fiscais e financeiras.', image: taxSolutionsImg,
    members: [membersList[3], membersList[9], membersList[13], membersList[18]],
    projects: [{ id: 5, title: 'Tax Solutions App', description: 'App que centraliza informações fiscais e financeiras para reduzir custos de empreendedores.', longDescription: 'O Tax Solution App utiliza uma gestão baseada em dados para centralizar as informações fiscais e financeiras em um único local. A solução busca reduzir custos e otimizar processos de Empreendedores. A plataforma oferece um assistente de inteligência artificial chamado BenzAI para análises e relatórios.', technologies: ['Python', 'Inteligência Artificial'], status: 'Em Desenvolvimento', team: 4, rating: 4.8, image: taxSolutionsImg, liveUrl: '#' }]
  },
  {
    id: 'squad-reposture', name: 'Squad RePosture', mission: 'Sistema especializado em análise ergonômica e correção de postura com IA.', image: rePostureImg,
    members: [membersList[15], membersList[22]],
    projects: [{ id: 6, title: 'RePosture', description: 'Sistema especializado em análise ergonômica e correção de postura, que integra múltiplas funcionalidades.', longDescription: 'O RePosture é um sistema especializado em análise ergonômica e correção de postura, que integra múltiplas funcionalidades para processamento de imagens e vídeos. O sistema foi desenvolvido para auxiliar profissionais na avaliação ergonômica e na análise postural, oferecendo ferramentas para detecção de landmarks do corpo, cálculo de ângulos entre articulações e geração de relatórios detalhados.', technologies: ['HTML/CSS/JS', 'Python', 'MediaPipe', 'Yolo', 'Flask'], status: 'Finalizado', team: 2, rating: 4.9, image: rePostureImg, liveUrl: '#' }]
  },
  {
    id: 'squad-esp', name: 'Squad ESP', mission: 'Plataforma online para melhorar a gestão de estágios da Escola de Saúde.', image: espImg,
    members: [membersList[6], membersList[11], membersList[13], membersList[20]],
    projects: [{ id: 7, title: 'Gestão de Estágios ESP', description: 'Plataforma online centralizada para a melhorar a gestão de estágios da Escola de Saúde.', longDescription: 'Projeto voltado a criar uma plataforma online centralizada para a melhorar a gestão de estágios da Escola de Saúde com as Instituições de Ensino, com o principal objetivo de automatizar fluxos e otimizar a comunicação entre a ESPMA, coordenadores e demais responsáveis.', technologies: ['Figma', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'], status: 'Em Desenvolvimento', team: 4, rating: 4.8, image: espImg, liveUrl: '#' }]
  },
  {
    id: 'squad-vacinaplus', name: 'Squad VacinaPlus', mission: 'Aplicativo para facilitar o controle e acompanhamento do calendário de vacinação.', image: vacinaPlusImg,
    members: [membersList[0], membersList[9], membersList[10], membersList[19]],
    projects: [{ id: 8, title: 'VacinaPlus', description: 'Aplicativo para facilitar o controle e acompanhamento do calendário de vacinação.', longDescription: 'VacinaPLUS é um aplicativo desenvolvido para facilitar o controle e acompanhamento do calendário de vacinação. Nossa missão é promover a saúde pública através da tecnologia, oferecendo uma ferramenta intuitiva e confiável para que você nunca perca uma data importante de vacinação.', technologies: ['ReactNative', 'Expo Router', 'Firebase'], status: 'Em Desenvolvimento', team: 4, rating: 4.7, image: vacinaPlusImg, liveUrl: '#' }]
  },
  {
    id: 'squad-atraqui', name: 'Squad ATRAQUI', mission: 'Inovando a Gestão de Filas Portuárias com um Line Up Inteligente.', image: atraquiImg,
    members: [membersList[2], membersList[5], membersList[6], membersList[11], membersList[14], membersList[17], membersList[20], membersList[22]],
    projects: [{ id: 9, title: 'ATRAQUI', description: 'Iniciativa que busca modernizar a gestão logística de filas portuárias.', longDescription: '"Line Up Inteligente: Inovando a Gestão de Filas Portuárias" Desenvolvido por alunos e professores da Software House da UNDB ao longo de dois anos, o ATRAQUI é uma iniciativa que busca modernizar a gestão logística de filas portuárias.', technologies: ['MySQL', 'APIs RESTful', 'React', 'JavaScript', 'Jest'], status: 'Finalizado', team: 8, rating: 5.0, image: atraquiImg, liveUrl: '#' }]
  }
];