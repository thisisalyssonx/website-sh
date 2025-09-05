import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Imports organizados em ordem alfabética
import allysonPiresImg from "../assets/members/alyssonoliveirapires.jpg";
import alyssonRodriguesImg from "../assets/members/alyssonrodrigues.jpg";
import anaVitoriaImg from "../assets/members/anavitoria.jpg";
import arthurGuerraImg from "../assets/members/arthurguerra.jpg";
import augustoCesarImg from "../assets/members/augustocesar.jpg";
import brunoBorgesImg from "../assets/members/brunoborges.jpg";
import caioFontesImg from "../assets/members/caiofontes.jpg";
import daviEmmanuelImg from "../assets/members/daviemmanuelmoares.jpg";
import diegoSouzaImg from "../assets/members/diegovitorlopes.jpg";
import eduardaHelenaImg from "../assets/members/eduardahelena.jpg";
import ellenMonroeImg from "../assets/members/ellenmonroe.jpg";
import emylleMoraesImg from "../assets/members/emyllemoraes.jpg";
import joberthEmanoelImg from "../assets/members/joberthemanoel.jpg";
import julianaSousaImg from "../assets/members/julianasousa.jpg";
import lucasGomesImg from "../assets/members/lucasgomes.jpg";
import lucianoBeltraoImg from "../assets/members/lucianobeltrão.jpg";
import matheusBarrosImg from "../assets/members/matheusfernandes.jpg";
import mateusVerissimoImg from "../assets/members/mateusverissimo.jpg";
import pauloSergioImg from "../assets/members/paulosergiocosta.jpg";
import pedroVelosoImg from "../assets/members/pedrovictorsantosveloso.jpg";
import rafaelSilvaImg from "../assets/members/rafaelsousa.jpg";
import richardsonFrancaImg from "../assets/members/richardsonfrança.jpg";
import stephanieAdrianeImg from "../assets/members/stephanieadriane.jpg";
import thiagoAkiraImg from "../assets/members/thiagoakira.jpg";

// Interface para tipagem do membro
interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  location: string;
  email: string;
  skills: string[];
  github: string;
  linkedin: string;
}

// Interface para estatísticas do time
interface TeamStat {
  number: string;
  label: string;
  color: string;
}

const Members: React.FC = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal({
    triggerOnce: true,
  });
  const { elementRef: carouselRef, isVisible: carouselVisible } = useScrollReveal({ 
    triggerOnce: true 
  });
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollReveal({
    triggerOnce: true,
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  // Array de membros organizado em ordem alfabética pelo nome
  const members: Member[] = [
    {
      id: 13,
      name: "Allyson de Oliveira Pires",
      role: "Desenvolvedor Full Stack",
      image: allysonPiresImg,
      bio: "Tenho 20 anos e sou universitário do Centro Universitário Dom Bosco - UNDB, curso Análise e Desenvolvimento de Sistemas.",
      location: "São Luís, MA",
      email: "devallyson@outlook.com",
      skills: ["React Native", "JavaScript", "Python"],
      github: "https://github.com/Allyson-Dev1Hub",
      linkedin: "https://www.linkedin.com/in/allyson-pires-26a4a4233",
    },
    {
      id: 10,
      name: "Alysson Lisboa Rodrigues",
      role: "Desenvolvedor Front-End | UX/UI Designer",
      image: alyssonRodriguesImg,
      bio: "Atuo como UX/UI Designer e Desenvolvedor Front-end, para criar as melhores interfaces e experiências para os usuários, buscando sempre entregar soluções criativas e funcionais.",
      location: "São Luís, MA",
      email: "alyssonrodrigues1303@gmail.com",
      skills: ["React JS", "React Native", "JavaScript", "Figma"],
      github: "https://github.com/thisisalyssonx",
      linkedin: "https://www.linkedin.com/in/thisisalysson/",
    },
    {
      id: 5,
      name: "Ana Vitória Maciel Rodrigues",
      role: "Marketing e Dev Back-end",
      image: anaVitoriaImg,
      bio: "Programadora Back-end com experiência prática no desenvolvimento de soluções em Java e Python.",
      location: "São Luís, MA",
      email: "anavitoriamacielr@gmail.com",
      skills: ["Java", "Python", "JavaScript", "Excel"],
      github: "https://github.com/anavitoriamaciel",
      linkedin: "https://www.linkedin.com/in/anavitoriamaciel",
    },
    {
      id: 18,
      name: "Arthur Guerra Moura Gonçalves",
      role: "Desenvolvedor Back-End/Banco de Dados",
      image: arthurGuerraImg,
      bio: "Estudante de Engenharia de Software com ênfase em projetos de comunicação e adaptabilidade criativa.",
      location: "São Luís, MA",
      email: "arthurguerra.2005@gmail.com",
      skills: ["Python", "C#", "PostgreSQL"],
      github: "https://github.com/CudsSmoky",
      linkedin: "https://www.linkedin.com/in/arthur-guerra-478a3229a/",
    },
    {
      id: 9,
      name: "Augusto Cesar Rodrigues Xavier",
      role: "Inteligência Artificial e Back-End",
      image: augustoCesarImg,
      bio: "Programador especialista em desenvolvimento de inteligência artificial e construção de APIs.",
      location: "São Luís, MA",
      email: "augustocrx.eng@gmail.com",
      skills: ["Django", "Tensorflow", "Pytorch"],
      github: "https://github.com/AugustoCRX",
      linkedin: "https://www.linkedin.com/in/augustocrx/",
    },
    {
      id: 1,
      name: "Bruno da Rocha Borges",
      role: "Scrum Master",
      image: brunoBorgesImg,
      bio: "Sólida experiência em desenvolvimento de soluções tecnológicas e na gestão de projetos e equipes, atuando como Scrum Master.",
      location: "São Luís, MA",
      email: "rock.borgs@gmail.com",
      skills: ["Scrum", "Planejamento estratégico", "Lógica de programação"],
      github: "https://github.com/brunoborgesr",
      linkedin: "https://www.linkedin.com/in/brunoborgesr/",
    },

    {
      id: 3,
      name: "Caio Fontes Gondim Silva",
      role: "Backend / DevOps",
      image: caioFontesImg,
      bio: "Apaixonado por tecnologia, resolução de problemas e aprender coisas novas. Atualmente com foco nas áreas de backend e DevOps.",
      location: "São Luís, MA",
      email: "caio.fontes.gondin@hotmail.com",
      skills: ["C++", "Python", "React-Native"],
      github: "https://github.com/CaioFontesG",
      linkedin: "https://www.linkedin.com/in/caiofontesg/",
    },
    {
      id: 23,
      name: "Davi Emmanuel Moraes Ribeiro",
      role: "Desenvolvedor Full-Stack",
      image: daviEmmanuelImg,
      bio: "Programando desde 2022.",
      location: "São Luís, MA",
      email: "daviemmamr@gmail.com",
      skills: ["Python", "C", "JavaScript", "TypeScript"],
      github: "https://github.com/p4tor",
      linkedin: "https://www.linkedin.com/in/davi-emmanuel-ribeiro-b55654272",
    },
    {
      id: 15,
      name: "Diego Vitor Lopes Gonçalves Souza",
      role: "Inovação e Análise de dados",
      image: diegoSouzaImg,
      bio: "Especialista em Educação e Tecnologia, com foco em Metodologias Ativas, Jogos e Gamificação.",
      location: "São Luís, MA",
      email: "diego.vitor1390@gmail.com",
      skills: ["Python", "Java", "JavaScript"],
      github: "https://github.com/diegovitor90",
      linkedin: "https://www.linkedin.com/in/diego-souza-31992a186",
    },
    {
      id: 11,
      name: "Eduarda Helena Santana Reis",
      role: "Marketing",
      image: eduardaHelenaImg,
      bio: "Estudante de psicologia, apaixonada por comportamento humano e pelo mundo do marketing.",
      location: "São Luís, MA",
      email: "Eduardahsreis@gmail.com",
      skills: ["Edição de videos", "Capcut", "TikTok"],
      github: "#",
      linkedin: "#",
    },

    {
      id: 24,
      name: "Ellen Monroe Franco De Sá Diniz",
      role: "Desenvolvedor Front-End | UX/UI Designer",
      image: ellenMonroeImg,
      bio: "Apaixonada por inovação, atuo como Front-End na SH, procuro sempre automatizar processos e tenho habilidades em várias areas do UX/UI.",
      location: "São Luís, MA",
      email: "ellenmonroediniz@gmail.com",
      skills: ["React", "TypeScript", "Scrum", "Design"],
      github: "https://github.com/ellenmwnore",
      linkedin: "https://www.linkedin.com/in/ellen-monroe-b3411a188",
    },

    {
      id: 12,
      name: "Emylle Moraes dos Santos",
      role: "Scrum Master",
      image: emylleMoraesImg,
      bio: "Busco sempre aprender, colaborar em equipe e entregar valor com organização e eficiência.",
      location: "São Luís, MA",
      email: "emymoraes.dev@gmail.com",
      skills: ["Python", "HTML", "CSS"],
      github: "https://github.com/emymoraesj",
      linkedin: "https://www.linkedin.com/in/emylle-moraes-1413a124a",
    },

    {
      id: 22,
      name: "Joberth Emanoel C. M. Castro",
      role: "IA, Ciência de dados e Full Stack",
      image: joberthEmanoelImg,
      bio: "Especialista em Inteligência Artificial e Ciência de Dados, criando soluções inovadoras para automação e análise de dados.",
      location: "São Luís, MA",
      email: "joberthemanoel13@gmail.com",
      skills: ["Python", "Machine Learning", "Deep Learning"],
      github: "https://github.com/JoberthCastro",
      linkedin: "http://www.linkedin.com/in/joberth-castro-013840252",
    },

    {
      id: 6,
      name: "Juliana Sousa Fernandes",
      role: "Full-Stack Developer",
      image: julianaSousaImg,
      bio: "Full-Stack Developer com experiência em JavaScript, React Native e HTML, atuando no desenvolvimento de aplicações web e mobile.",
      location: "São Luís, MA",
      email: "julianasousafernandes0764@gmail.com",
      skills: ["JavaScript", "ReactNative", "HTML"],
      github: "https://github.com/Jsousa39",
      linkedin: "http://www.linkedin.com/in/juliana-sousa-ab74a6302",
    },

    {
      id: 20,
      name: "Lucas Gomes Antunes",
      role: "Back-end",
      image: lucasGomesImg,
      bio: "Cursando o 3º período de Engenharia de Software na UNDB, com foco e entusiasmo no desenvolvimento de softwares.",
      location: "São Luís, MA",
      email: "lucaszgomes44@gmail.com",
      skills: ["Python", "Java", "JavaScript"],
      github: "https://github.com/lxvlucas",
      linkedin: "http://www.linkedin.com/in/lucas-gomes-antunes-79a535314",
    },

    {
      id: 16,
      name: "Luciano Mualem Beltrão",
      role: "Visão Computacional",
      image: lucianoBeltraoImg,
      bio: "Trabalho hoje com visão computacional e IA, mas tenho interesse principalmente pelas áreas de desenvolvimento mobile e web.",
      location: "São Luís, MA",
      email: "lucbeltros@gmail.com",
      skills: ["OpenCV", "PyTorch", "TensorFlow", "Mediapipe"],
      github: "https://github.com/lucbeltrao",
      linkedin: "https://www.linkedin.com/in/lucianobeltrao",
    },

    {
      id: 7,
      name: "Matheus Fernandes Barros",
      role: "Desenvolvedor Front-End",
      image: matheusBarrosImg,
      bio: "Profissional apaixonado por tecnologia, com experiência em desenvolvimento Front-End para web e mobile, utilizando React JS e React Native.",
      location: "São Luís, MA",
      email: "fer.matheusbarros@gmail.com",
      skills: ["React JS", "React Native", "JavaScript"],
      github: "https://github.com/FerMatheus",
      linkedin: "http://www.linkedin.com/in/matheus-fernandes-45464834b",
    },

    {
      id: 8,
      name: "Mateus Verissimo Coelho",
      role: "Mobile Front-End",
      image: mateusVerissimoImg,
      bio: "Desenvolvedor mobile com foco em React Native e Expo.",
      location: "São Luís, MA",
      email: "mateusverisismocoelho@gmail.com",
      skills: ["TypeScript", "Expo", "React Native"],
      github: "http://github.com/mateusverissimo",
      linkedin: "https://www.linkedin.com/in/mateusverissimoc",
    },

    {
      id: 14,
      name: "Paulo Sérgio Costa",
      role: "Desenvolvedor Full-Stack",
      image: pauloSergioImg,
      bio: "Desenvolvedor web e mobile fullstack que se destaca também pela experiência em análise de dados e criação de dashboards.",
      location: "São Luís, MA",
      email: "paulofigueiredofilho@gmail.com",
      skills: ["TypeScript", "React Native", "PostgreSQL"],
      github: "https://github.com/paulosergiofig",
      linkedin: "https://www.linkedin.com/in/paulosergiofigueiredo",
    },
    {
      id: 2,
      name: "Pedro Victor Santos Veloso",
      role: "Dev Back-end",
      image: pedroVelosoImg,
      bio: "Sou um dev backend em aprendizado, atualmente trabalho com python e procuro aperfeiçoar meus conhecimentos.",
      location: "São Luís, MA",
      email: "pedrovictor044@gmail.com",
      skills: ["Python", "Javascript", "C++"],
      github: "https://github.com/PedroVelos",
      linkedin: "https://www.linkedin.com/in/pedro-veloso-94312734a",
    },
    {
      id: 4,
      name: "Rafael Santos da Silva",
      role: "Marketing e Dev Backend",
      image: rafaelSilvaImg,
      bio: "Desenvolvedor Backend especializado em DevOps, com experiência em estratégias de Marketing Digital.",
      location: "São Luís, MA",
      email: "hadessds@gmail.com",
      skills: ["Figma", "Java", "Arduino"],
      github: "https://github.com/hadesds",
      linkedin: "https://www.linkedin.com/in/rafael-silva-664359218",
    },
    {
      id: 21,
      name: "Richardson França Serena",
      role: "Desenvolvimento Full Stack",
      image: richardsonFrancaImg,
      bio: "Estudante do 3º período de Engenharia de Software, sempre em busca de aprender novas tecnologias.",
      location: "São Luís, MA",
      email: "richardson0723@outlook.com",
      skills: ["Python", "Java", "JavaScript"],
      github: "https://github.com/richardson0723",
      linkedin: "https://www.linkedin.com/in/richardson-serena-0a2788247/",
    },
    {
      id: 17,
      name: "Stephanie Adriane",
      role: "Frontend e QA",
      image: stephanieAdrianeImg,
      bio: "Fascinada por tecnologia desde criança, amo aprender e busco sempre novas habilidades e conhecimentos para aprimorar meu trabalho.",
      location: "São Luís, MA",
      email: "stephanieadriane70@gmail.com",
      skills: ["React", "React Native", "JavaScript"],
      github: "https://github.com/stephc7",
      linkedin: "https://www.linkedin.com/in/stephanie-adriane-qa/",
    },

    {
      id: 19,
      name: "Thiago Akira Higashi Amaral",
      role: "Desenvolvimento Mobile",
      image: thiagoAkiraImg,
      bio: "Responsável por desenvolver e manter aplicações mobile com React Native, além de gerenciar equipes como Scrum Master.",
      location: "São Luís, MA",
      email: "thiagoakira00@gmail.com",
      skills: ["React Native", "TypeScript", "Python"],
      github: "https://github.com/AkiraGitDev",
      linkedin: "https://www.linkedin.com/in/akiradeveloper/",
    },
  ];

  // Constantes extraídas
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(members.length / itemsPerPage);


  // Estatísticas do time
  const teamStats: TeamStat[] = [
    { number: "20+", label: "Desenvolvedores Talentosos", color: "#65C2CA" },
    { number: "5+", label: "Mentores", color: "#010DAD" },
    { number: "5+", label: "Anos de Experiência", color: "#E92BA6" },
    { number: "100%", label: "Dedicação e Paixão", color: "#141414" },
  ];

  // Cores para as skills
  const skillColors = ['#65C2CA', '#010DAD', '#E92BA6'];



  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Render member card
  const renderMemberCard = (member: Member) => (
    <div 
      key={member.id}
      className="group cursor-pointer"
      onMouseEnter={() => setHoveredMember(member.id)}
      onMouseLeave={() => setHoveredMember(null)}
    >
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-4 border border-gray-100 flex flex-col h-full">
        <div className="relative overflow-hidden h-80">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-90 transition-all duration-500"
            style={{ background: 'linear-gradient(135deg, #65C2CA80, #010DAD80, #E92BA680)' }}
          />
          <div className="absolute bottom-6 left-6 right-6 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
            <div className="flex justify-center space-x-4">
              <a 
                href={member.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:text-white hover:scale-110 transition-all duration-300" 
                style={{ backgroundColor: hoveredMember === member.id ? '#141414' : 'rgba(255,255,255,0.9)' }}
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:text-white hover:scale-110 transition-all duration-300" 
                style={{ backgroundColor: hoveredMember === member.id ? '#010DAD' : 'rgba(255,255,255,0.9)' }}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href={`mailto:${member.email}`} 
                className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:text-white hover:scale-110 transition-all duration-300" 
                style={{ backgroundColor: hoveredMember === member.id ? '#E92BA6' : 'rgba(255,255,255,0.9)' }}
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="p-8 flex flex-col flex-1">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#141414' }}>
              {member.name}
            </h3>
            <p className="font-semibold text-lg mb-3" style={{ color: '#010DAD' }}>
              {member.role}
            </p>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {member.bio}
          </p>
          
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <MapPin className="h-4 w-4 mr-2" style={{ color: '#65C2CA' }} />
            {member.location}
          </div>
          
          <div className="flex flex-wrap items-start gap-2 mt-auto pt-4">
            {member.skills.slice(0, 3).map((skill, skillIndex) => {
              const bgColor = skillColors[skillIndex % skillColors.length];
              return (
                <span 
                  key={skill} 
                  className="px-2.5 py-1 text-[11px] font-semibold rounded-md text-white" 
                  style={{ backgroundColor: bgColor + 'E6' }}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="members" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-5 transform -translate-x-32 -translate-y-32">
        <div className="w-full h-full rounded-full" style={{ background: 'linear-gradient(135deg, #65C2CA, #010DAD)' }} />
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5 transform translate-x-48 translate-y-48">
        <div className="w-full h-full rounded-full" style={{ background: 'linear-gradient(135deg, #E92BA6, #65C2CA)' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <div className="inline-block mb-4">
            <span 
              className="text-sm font-semibold px-4 py-2 rounded-full tracking-wide uppercase"
              style={{ 
                background: 'linear-gradient(135deg, #65C2CA20, #010DAD20)',
                color: '#010DAD',
                border: '1px solid #65C2CA30'
              }}
            >
              Nosso Time
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#141414' }}>
            Conheça Nossos
            <span className="block bg-gradient-to-r from-[#65C2CA] via-[#010DAD] to-[#E92BA6] bg-clip-text text-transparent">
              Talentos
            </span>
          </h2>
          
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 rounded-full" style={{ background: 'linear-gradient(90deg, #65C2CA, #010DAD, #E92BA6)' }} />
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estudantes apaixonados por tecnologia, unidos pela inovação e dedicados a criar 
            soluções que transformam ideias em realidade digital.
          </p>
        </div>

        {/* Team Stats */}
        <div 
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            statsVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          {teamStats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
                style={{ color: stat.color }}
              >
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Members Carousel */}
        <div 
          ref={carouselRef as React.RefObject<HTMLDivElement>}
          className={`relative max-w-7xl mx-auto transition-all duration-1000 delay-400 ${
            carouselVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <div 
          ref={carouselRef as React.RefObject<HTMLDivElement>}
          className={`relative max-w-7xl mx-auto transition-all duration-1000 delay-400 ${
            carouselVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        ></div>
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                    {members
                      .slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage)
                      .map(renderMemberCard)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border group z-10"
            style={{ 
              color: '#010DAD',
              borderColor: '#65C2CA30'
            }}
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border group z-10"
            style={{ 
              color: '#010DAD',
              borderColor: '#65C2CA30'
            }}
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-400 hover:scale-125 ${
                  currentSlide === index 
                    ? 'w-12' 
                    : 'w-3 hover:w-6'
                }`}
                style={{
                  backgroundColor: currentSlide === index 
                    ? '#010DAD' 
                    : '#65C2CA40'
                }}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        
        
      </div>
    </section>
  );
};

export default Members;
