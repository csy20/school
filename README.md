# School Vite React App

This project is a [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) application configured with [Tailwind CSS](https://tailwindcss.com/).

## Prerequisites

- Node.js 18 or later
- npm 9 or later

## Getting Started

Install project dependencies:

```bash
npm install
```

> **Note:** If you are working in a restricted environment, you might need to configure npm to use an accessible registry.

## Available Scripts

- `npm run dev` – Start the development server with hot module replacement.
- `npm run build` – Type-check and create an optimized production build.
- `npm run preview` – Preview the production build locally.

## Tailwind CSS

Tailwind is configured in `tailwind.config.js` with JIT mode enabled through Vite. Global Tailwind layers are defined in `src/index.css`.

## Project Structure

```
.
├── index.html
├── package.json
├── postcss.config.js
├── src
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

Start hacking by editing `src/App.tsx`.
