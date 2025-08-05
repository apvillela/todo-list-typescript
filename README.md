# Semiotics Weather App

A melhor aplicação para prever o tempo! Agora com Dark Mode e Sob desenvolvimento 

## Responsáveis

- Alexandre Pereira Villela
- Léo
- Lucas

## Descrição da Aplicação

O Weather App é uma aplicação web que permite aos usuários:

- Consultar informações meteorológicas em tempo real de qualquer cidade/local
- Visualizar histórico meteorológico de períodos específicos
- Acompanhar previsões do tempo
- Alterar entre tema claro/escuro
- Interagir intuitivamente sem dificuldade

## Estrutura do Projeto

```
src/
├── api/           # Integrações com o WeatherApi
├── components/    # Componentes React reutilizáveis
│   ├── ui/       # Componentes de interface do usuário
│   └── weather/  # Componentes específicos do clima
├── contexts/     # Contextos React (ex: tema)
├── hooks/        # Hooks personalizados
├── lib/          # Utilitários e funções auxiliares
├── pages/        # Páginas da aplicação
├── services/     # Serviços e mocks
├── types/        # Definições de tipos TypeScript
└── utils/        # Funções utilitárias
```

## 🛠️ Tecnologias Utilizadas

- **Framework**: React 19
- **Linguagem**: TypeScript
- **Build Tool**: Vite 7
- **Estilização**:
  - TailwindCSS
  - Radix UI
  - Class Variance Authority
- **HTTP Client**: Axios
- **Desenvolvimento**:
  - ESLint
  - Prettier
  - Husky
  - Lint-staged
- **Testes**: Vitest

## 📡 Origem dos Dados

A aplicação utiliza a [WeatherAPI](https://www.weatherapi.com/) como fonte de dados meteorológicos. A API fornece:

- Dados meteorológicos em tempo real
- Histórico meteorológico
- Previsão do tempo
- Suporte pra vários idiomas

## ✨ Funcionalidades Extras

1. **Tema Claro/Escuro**
   - Alternância automática de tema
   - Persistência da preferência do usuário

2. **Interface Responsiva**
   - Design adaptativo para diferentes tamanhos de tela
   - Experiência otimizada em dispositivos móveis

3. **Componentes Reutilizáveis**
   - Biblioteca de componentes UI personalizados
   - Estilização consistente com TailwindCSS

4. **Internacionalização**
   - Suporte nativo a português nas informações meteorológicas
   - Interface preparada para múltiplos idiomas

## 🚀 Como Executar

Siga os passos abaixo para executar o projeto localmente:

1. **Crie o arquivo de ambiente:**
   - Renomeie o arquivo `.env.example` para `.env`.
   - Abra o arquivo `.env` e adicione sua chave da API da WeatherAPI:
     ```
     VITE_WEATHER_API_KEY=SUA_CHAVE_API_AQUI
     ```

1. **Instale as dependências:**

   ```bash
   npm install
   ```

1. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

A aplicação estará disponível em `http://localhost:5173` (ou em outra porta, se a 5173 estiver em uso).

<!--- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
``` --->
