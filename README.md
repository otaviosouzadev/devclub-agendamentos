# 📅 AgendaPro

> Sistema de agendamento de serviços desenvolvido com React e TypeScript.

O **AgendaPro** é uma aplicação web responsiva criada para facilitar o agendamento de serviços, oferecendo uma experiência simples para clientes e um painel administrativo para gerenciamento dos atendimentos.

🌐 **Acesse o projeto:** [agendaprobr.vercel.app](https://agendaprobr.vercel.app/)

---

## 🚀 Sobre o Projeto

O projeto foi desenvolvido como parte de um desafio técnico do **DevClub**, com o objetivo de colocar em prática conhecimentos de desenvolvimento front-end, organização de código, criação de interfaces responsivas e gerenciamento de dados.

A aplicação possui dois fluxos principais:

- 👤 **Cliente:** realiza e acompanha um agendamento.
- 🔐 **Administrador:** visualiza e gerencia os atendimentos.

---

## ✨ Funcionalidades

### 👤 Área do Cliente

- 📝 Cadastro de nome e telefone
- 💼 Seleção de serviço
- 📅 Escolha de data
- ⏰ Escolha de horário
- 🗒️ Campo para observações
- ✅ Validação dos dados
- 📱 Máscara de telefone
- 🚫 Bloqueio de datas anteriores
- 🕐 Visualização dos horários disponíveis
- 🔒 Bloqueio de horários já ocupados
- 📋 Confirmação do agendamento
- 📱 Interface responsiva
- 🌙 Tema claro e escuro

### 🔐 Área Administrativa

- 🔑 Login administrativo
- 📊 Dashboard com indicadores
- 📋 Visualização dos agendamentos
- 🔎 Busca por cliente, telefone ou serviço
- 📅 Filtro por data
- 🏷️ Filtro por status
- 🔄 Alteração do status do atendimento
- 🗑️ Exclusão de agendamentos
- ⚠️ Confirmação antes da exclusão
- 📥 Exportação dos dados para CSV

---

## 🛠️ Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_React-000000?style=for-the-badge&logo=lucide&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![LocalStorage](https://img.shields.io/badge/LocalStorage-4CAF50?style=for-the-badge)
![SessionStorage](https://img.shields.io/badge/SessionStorage-FF9800?style=for-the-badge)

- ⚛️ **React** — construção da interface
- 🔷 **TypeScript** — tipagem e organização do código
- ⚡ **Vite** — ambiente de desenvolvimento e build
- 🧭 **React Router DOM** — navegação entre páginas
- 🎨 **CSS3** — estilização e responsividade
- 🧩 **Lucide React** — biblioteca de ícones
- 💾 **LocalStorage** — persistência dos agendamentos
- 🔐 **SessionStorage** — controle da sessão administrativa

---

## 🧩 Estrutura do Projeto

📁 **src/**
- 📂 **components/**
  - `Layout.tsx`
- 📂 **pages/**
  - `ClientPage.tsx`
  - `AdminPage.tsx`
- 📂 **services/**
  - `appointmentService.ts`
- 📂 **types/**
  - `appointment.ts`
- `main.tsx`
- `styles.css`

A aplicação foi organizada separando **componentes, páginas, tipos e serviços**, facilitando a manutenção, leitura e evolução do projeto.

---

## 💾 Persistência de Dados

Atualmente os agendamentos são armazenados utilizando **LocalStorage**.

Essa abordagem permite que o projeto seja executado facilmente sem depender de um banco de dados externo.

A camada de serviço foi criada de forma que futuramente possa ser substituída por uma API ou banco de dados sem precisar alterar toda a estrutura da aplicação.

---

## 🔐 Área Administrativa

A área administrativa possui um login demonstrativo.

📧 **E-mail:** `admin@agendapro.com`

🔑 **Senha:** `123456`

> ⚠️ A autenticação atual é apenas demonstrativa e utiliza `sessionStorage`. Em uma aplicação de produção, seria necessário utilizar autenticação segura no backend.

---

## 🤖 Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento para:

- 🧠 Planejamento da estrutura do projeto
- 🧩 Sugestões de componentes
- 🔍 Revisão de código
- 🧪 Validação de casos de uso
- 🎨 Melhorias de experiência do usuário
- 📝 Organização da documentação
- 💡 Apoio na resolução de problemas durante o desenvolvimento

Todas as decisões técnicas, integrações e testes foram revisados durante o desenvolvimento.

> 🤝 A IA foi utilizada como ferramenta de produtividade e aprendizado, não como substituta da validação técnica.

---

## ▶️ Como Executar

### 📋 Pré-requisitos

- 🟢 Node.js LTS ou superior
- 📦 npm

### 📥 Instalação

Clone o repositório:

`git clone https://github.com/otaviosouzadev/agendapro.git`

Entre na pasta:

`cd agendapro`

Instale as dependências:

`npm install`

Execute o projeto:

`npm run dev`

Depois acesse:

`http://localhost:5173`

---

## 📦 Build de Produção

Para gerar a versão de produção:

`npm run build`

Para visualizar o build:

`npm run preview`

---

## 🌐 Demonstração

🚀 **Projeto online:** [https://agendaprobr.vercel.app/](https://agendaprobr.vercel.app/)

👤 **Área do Cliente:** `/`

🔐 **Área Administrativa:** `/admin`

---

## 🎯 Objetivo Profissional

O AgendaPro representa uma etapa prática da minha evolução como desenvolvedor.

O projeto foi criado para transformar conhecimentos adquiridos durante minha formação em **Análise e Desenvolvimento de Sistemas** em uma aplicação funcional.

Meu objetivo é continuar evoluindo, desenvolver projetos cada vez mais completos e conquistar minha primeira oportunidade na área de tecnologia.

---

## 🔮 Melhorias Futuras

- ☁️ Integração com banco de dados
- 🔐 Autenticação real
- 👥 Controle de usuários e permissões
- ⚡ Atualização dos agendamentos em tempo real
- 🧪 Testes automatizados
- 📧 Confirmação por e-mail
- 💬 Integração com WhatsApp
- ⏱️ Configuração de horários por serviço
- 🕐 Duração personalizada dos serviços
- 📱 Melhorias contínuas na experiência mobile

---

## 👨‍💻 Desenvolvedor

### Otávio Souza dos Santos

🎓 Estudante de **Análise e Desenvolvimento de Sistemas**

💻 Desenvolvedor Web em formação

🚀 Em busca da primeira oportunidade na área de tecnologia

📚 Sempre aprendendo e evoluindo através de projetos práticos.

---

## 📫 Entre em Contato

📧 **E-mail:** [osouza0508@gmail.com](mailto:osouza0508@gmail.com)

💼 **LinkedIn:** [Otávio Souza Santos](https://www.linkedin.com/in/otavio-souza-santos/)

🐙 **GitHub:** [otaviosouzadev](https://github.com/otaviosouzadev)

🌐 **AgendaPro:** [agendaprobr.vercel.app](https://agendaprobr.vercel.app/)

---

<div align="center">

## 🚀 Sempre Aprendendo. Sempre Evoluindo.

💻 Transformando conhecimento em prática e projetos em experiência.

📚 **Aprender → Praticar → Evoluir**

✨ **Obrigado por visitar o projeto!** 👋

</div>
