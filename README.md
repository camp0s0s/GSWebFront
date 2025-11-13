# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

import { useEffect, useState } from "react";


    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mb-6 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 dark:bg-yellow-400 dark:text-gray-900 transition"
      >
        {darkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
      </button>

      <h1 className="text-3xl font-bold mb-4">
        ReSkill Loop — Rede Profissional
      </h1>

      <p className="max-w-lg text-center text-gray-600 dark:text-gray-300">
        Explore perfis profissionais, visualize competências e conecte-se com
        pessoas que estão moldando o futuro do trabalho.
      </p>
    </div>
  

