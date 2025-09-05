// src/App.tsx

// 1. IMPORTAR useEffect e useLocation
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';


import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Members from './components/Members';
import AllSquadsPage from './pages/AllSquadsPage';
import Coordinators from './components/Coordinators';
import Partners from './components/PartnersSection';
import CTA from './components/CTA';

// 2. MODIFICAR A HomePage PARA INCLUIR A LÓGICA DE SCROLL
const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // location.hash contém a parte da URL que vem depois do '#', ex: '#about'
    if (location.hash) {
      // Remove o '#' para termos apenas o id, ex: 'about'
      const id = location.hash.substring(1); 
      
      // Usamos um pequeno delay para garantir que a página já renderizou
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]); // Este código vai rodar toda vez que a URL mudar

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Members />
      <Coordinators />
      <Partners />
      <CTA />
    </main>
  );
};

function App() {
  return (
    <>
      <ScrollToTop /> 
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/squads" element={<AllSquadsPage />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;