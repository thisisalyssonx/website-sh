// src/components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Pega o caminho da URL atual (ex: "/", "/squads")
  const { pathname } = useLocation();

  // Toda vez que o caminho da URL mudar...
  useEffect(() => {
    // ...rola a janela para o topo.
    window.scrollTo(0, 0);
  }, [pathname]); // O efeito acontece sempre que 'pathname' muda

  return null; // Este componente não renderiza nada na tela
};

export default ScrollToTop;