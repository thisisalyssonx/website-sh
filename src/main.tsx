// src/main.tsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Verifique este import
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. Garanta que o <BrowserRouter> está aqui, envolvendo o <App /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);