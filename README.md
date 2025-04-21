# 🧠 mdp-eslint-config

A powerful and modern ESLint config package designed to boost productivity, enforce best practices, and keep your codebase consistent and clean — especially in **TypeScript**, **React**, **Next.js**, and **Tailwind CSS** projects.

## ✨ Features

- 🌟 Pre-configured with the best ESLint rules for modern development
- 🔌 Optional support for:
  - TypeScript
  - React
  - Next.js
  - Prettier
  - Tailwind CSS
- 🧼 Removes unused imports
- 🦄 Includes modern plugins like `unicorn`, `perfectionist`, `functional`, etc.
- 💨 Fast, modular, and extensible

---

## 📦 Installation

```bash
pnpm add -D mdp-eslint-config
# or
npm install -D mdp-eslint-config
```

> ⚠️ **Peer dependencies required**:
>
> - `eslint >= 9`
> - `prettier >= 3` (optional)
> - `react >= 18` (optional)
> - `next >= 14` (optional)
> - `typescript >= 5` (optional)

---

## ⚙️ Usage in a Next.js Project

```ts
// eslint.config.ts

import { initializeConfig } from 'mdp-eslint-config';

const baseConfig = initializeConfig({
  disableHeavyRules: false,
  enableNextJs: true,
  enablePrettier: false,
  enableReact: true,
  enableTypescript: true,
  projectPathAliasRegex: '^@.*(?:/.*)?$',
  typescriptOptions: {
    tsconfigRootDir: import.meta.dirname,
  },
});

const eslintConfig = [
  {
    files: ['src/**/*.{ts,tsx}'],
  },
  ...baseConfig,
];

export default eslintConfig;
```

---

## 📁 Folder structure recommendation

Make sure to follow a scalable project structure and set up aliases accordingly in your `tsconfig.json`.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

---

## 🛠 Development

- Built with TypeScript
- Uses `tsup` for bundling
- Publish-ready with `release-it`
- Includes spell checker and linting tools

---

## 🔗 Links

- [Repository](#)
- [Issue Tracker](#)
- [Changelog](#)

---

## 📄 License

Licensed under the **ISC License**.

---

Created by **Mahmoud Delavar** clean code.
