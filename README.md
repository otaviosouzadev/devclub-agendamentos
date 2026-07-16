# AgendaPro — Desafio Técnico DevClub

Aplicação responsiva de agendamento de serviços com fluxo para clientes e painel administrativo. O projeto foi desenvolvido para demonstrar organização de código, experiência do usuário, validações, persistência e uso consciente de Inteligência Artificial.

## Demonstração

- Área do cliente: `/`
- Administração: `/admin`
- E-mail: `admin@agendapro.com`
- Senha: `123456`

> O login é demonstrativo e utiliza `sessionStorage`. Em produção real, a autenticação seria feita no backend com sessão segura.

## Funcionalidades

### Cliente
- Cadastro de nome, telefone, serviço, data, horário e observações;
- Máscara de telefone e validação de campos;
- Bloqueio de datas passadas;
- Consulta visual dos horários disponíveis;
- Bloqueio de horários já ocupados;
- Seleção de serviço por cards;
- Modal de confirmação com resumo da reserva;
- Layout responsivo e tema claro/escuro.

### Administração
- Tela de login demonstrativa;
- Dashboard com indicadores;
- Busca por cliente, telefone ou serviço;
- Filtro por data e status;
- Alteração do status do atendimento;
- Exclusão com confirmação;
- Exportação dos dados filtrados em CSV;
- Persistência automática dos agendamentos.

## Tecnologias

- React
- TypeScript
- Vite
- React Router DOM
- Lucide React
- CSS responsivo com variáveis de tema
- LocalStorage e SessionStorage

## Inteligência Artificial

A IA foi utilizada como ferramenta de apoio para:

- Planejamento da arquitetura e fluxo das telas;
- Geração e revisão de componentes;
- Sugestões de experiência do usuário;
- Revisão de validações e casos de borda;
- Documentação e organização do README.

Todas as decisões, integrações e testes foram revisados durante o desenvolvimento. A IA foi tratada como ferramenta de produtividade, não como substituta da validação técnica.

## Executar localmente

Requisitos: Node.js LTS ou superior.

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Decisões técnicas

A aplicação foi organizada em páginas, componentes, tipos e uma camada de serviço responsável pela persistência. Essa separação evita que regras de negócio fiquem misturadas à interface.

O LocalStorage foi escolhido para que o avaliador consiga executar o desafio imediatamente, sem precisar configurar credenciais externas. A camada `appointmentService` pode ser substituída por Firebase, Supabase ou uma API REST sem reescrever as telas.

Os horários cancelados voltam a ficar disponíveis. A verificação de conflito também é feita no momento da criação para reduzir riscos de duplicidade na experiência local.

## Estrutura

```text
src/
├── components/
│   └── Layout.tsx
├── pages/
│   ├── ClientPage.tsx
│   └── AdminPage.tsx
├── services/
│   └── appointmentService.ts
├── types/
│   └── appointment.ts
├── main.tsx
└── styles.css
```

## Melhorias futuras

- API e banco de dados em nuvem;
- Autenticação segura com controle de acesso;
- Atualização em tempo real entre dispositivos;
- Testes automatizados;
- Envio de confirmação por e-mail ou WhatsApp;
- Configuração de duração e disponibilidade por serviço.
