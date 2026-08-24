# 📅 AgendaPro

> Sistema web de agendamento de serviços desenvolvido com React e TypeScript.

O **AgendaPro** é uma aplicação responsiva criada para facilitar o processo de agendamento de serviços, oferecendo uma experiência simples para clientes e um painel administrativo para gerenciamento dos atendimentos.

O projeto foi desenvolvido como parte de um desafio técnico e também como forma de colocar em prática conceitos de desenvolvimento front-end, organização de código, validações e experiência do usuário.

---

## 🌐 Demonstração

🚀 **Acesse o projeto online:**

👉 https://agendaprobr.vercel.app/

### 🔐 Acesso administrativo

O projeto possui uma área administrativa demonstrativa.

**E-mail:** `admin@agendapro.com`

**Senha:** `123456`

> ⚠️ O login administrativo é apenas demonstrativo e utiliza `sessionStorage`. Em uma aplicação real, a autenticação deverá ser realizada por um backend com mecanismos seguros de sessão e autorização.

---

## ✨ Funcionalidades

### 👤 Área do cliente

- 📝 Cadastro de nome, telefone, serviço, data, horário e observações
- 📱 Máscara e validação de telefone
- ✅ Validação dos campos do formulário
- 📅 Bloqueio de datas anteriores
- 🕐 Visualização dos horários disponíveis
- 🚫 Bloqueio de horários já ocupados
- 💼 Seleção de serviços através de cards
- 📋 Modal de confirmação da reserva
- 🌓 Tema claro e escuro
- 📱 Interface responsiva

### 🛠️ Painel administrativo

- 🔐 Tela de login
- 📊 Dashboard com indicadores
- 🔎 Busca por cliente, telefone ou serviço
- 📅 Filtro por data
- 🔄 Filtro por status
- ✏️ Alteração do status dos atendimentos
- 🗑️ Exclusão de agendamentos com confirmação
- 📥 Exportação dos dados filtrados em CSV
- 💾 Persistência automática dos agendamentos

---

## 🛠️ Tecnologias utilizadas

<div align="left">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

</div>

---

## 🧠 O que foi praticado

Durante o desenvolvimento do projeto, foram colocados em prática conceitos como:

- Componentização com React
- Tipagem com TypeScript
- Gerenciamento de rotas
- Organização de componentes
- Validação de formulários
- Manipulação de estado
- Persistência de dados
- Responsividade
- Temas claro e escuro
- Organização de regras de negócio
- Experiência do usuário
- Exportação de dados
- Boas práticas de desenvolvimento

---

## 🤖 Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como **ferramenta de apoio ao desenvolvimento**, principalmente para:

- 💡 Planejamento da arquitetura e fluxo das telas
- 🧩 Sugestões para componentes
- 🎨 Melhorias de experiência do usuário
- 🔎 Revisão de validações
- 🐛 Análise de possíveis problemas
- 📝 Apoio na documentação

As decisões de implementação, integrações e testes foram revisadas durante o desenvolvimento.

> A IA foi utilizada como ferramenta de produtividade e aprendizado, não como substituta da validação técnica.

---

## 📂 Estrutura do projeto

```text
src/
├── components/
│   └── Layout.tsx
│
├── pages/
│   ├── ClientPage.tsx
│   └── AdminPage.tsx
│
├── services/
│   └── appointmentService.ts
│
├── types/
│   └── appointment.ts
│
├── main.tsx
└── styles.css
