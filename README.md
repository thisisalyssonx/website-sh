# UNDB Software House

> Portal oficial da iniciativa acadêmica onde transformamos conhecimento em soluções reais e preparamos nossos membros para os desafios do mercado de tecnologia.

## 🚀 Tecnologias

- **React** - Biblioteca para construção de interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Ferramenta de build rápida
- **React Router** - Roteamento para aplicações React

## 📋 Sobre o Projeto

Este é o website institucional da Software House UNDB, uma "empresa escola" onde estudantes de tecnologia vivenciam o ciclo completo do desenvolvimento de software. O portal serve como vitrine para nossos projetos, plataforma de apresentação dos membros e ponto central de contato para clientes e parceiros.

### Objetivos

- Apresentar a iniciativa e seus valores
- Exibir projetos e squads ativos
- Conectar membros, coordenadores e interessados
- Captar novos clientes e parcerias
- Demonstrar as competências técnicas dos estudantes

## ✨ Funcionalidades

### Página Principal

- **Header Inteligente**: Navegação que se adapta ao scroll da página
- **Hero Section**: Apresentação impactante com call-to-action
- **Sobre Nós**: Missão, visão e valores da Software House
- **Nossos Squads**: Preview dos principais times em atividade
- **Membros**: Apresentação da equipe atual
- **Coordenadores**: Professores e orientadores do projeto
- **Call to Action**: Seção de engajamento final

### Página de Squads

- Listagem completa de todos os squads
- Cards detalhados com informações de cada time
- Modal interativo com detalhes completos dos projetos
- Tecnologias utilizadas e membros participantes

### Recursos Globais

- **Design Responsivo**: Adaptação completa para todos os dispositivos
- **WhatsApp Float**: Botão flutuante com opções de contato rápido
- **Navegação Suave**: Transições animadas entre seções
- **Performance Otimizada**: Carregamento rápido e experiência fluida

## 🛠️ Como Executar

### Pré-requisitos

- Node.js (versão 16+)
- npm ou yarn
- Git

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/undb-software-house.git
   cd undb-software-house
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   
   Abra http://localhost:5173 no seu navegador

### Scripts Disponíveis

```bash
npm run dev        # Servidor de desenvolvimento
npm run build      # Build para produção
npm run preview    # Preview da build
npm run lint       # Verificação de código
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx      # Cabeçalho e navegação
│   ├── Footer.tsx      # Rodapé
│   ├── SquadCard.tsx   # Card de squad
│   ├── SquadModal.tsx  # Modal de detalhes
│   └── WhatsAppFloat.tsx # Botão flutuante
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Página principal
│   └── Squads.tsx      # Página de squads
├── data/               # Dados mockados
│   ├── squads.ts       # Lista de squads
│   └── members.ts      # Lista de membros
├── types/              # Definições TypeScript
│   └── index.ts        # Tipos da aplicação
├── assets/             # Recursos estáticos
│   ├── images/         # Imagens
│   └── icons/          # Ícones
├── App.tsx             # Componente principal
└── main.tsx           # Ponto de entrada
```

## 🎨 Componentes Principais

### Header
- Navegação responsiva com menu mobile
- Mudança de estilo baseada no scroll
- Links com navegação suave para seções

### SquadCard
- Componente versátil para exibição de squads
- Utilizado tanto na home quanto na página dedicada
- Design moderno com hover effects

### SquadModal
- Modal detalhado com informações completas
- Lista de membros e tecnologias
- Design responsivo e acessível

### WhatsAppFloat
- Botão flutuante interativo
- Múltiplas opções de contato
- Animações suaves de expansão


## 👥 Equipe

Desenvolvido pelos membros da UNDB Software House


---

**UNDB Software House** - Transformando conhecimento em soluções reais
