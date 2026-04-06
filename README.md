# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Mockup Polishment Operations

This repository has been optimized with the `github-repository-mockup-polishment` workflow:

1. **Package Management**: Validated `package.json` dependencies. System verified via `npm run build`.
2. **GitHub Actions Deployment**: Setup `.github/workflows/deploy.yml` to automatically deploy to GitHub Pages on pushes to `main`.
3. **Environment Security**: Updated `.gitignore` to prevent committing `.env` and `.env.local` files to protect environment variables.
4. **Base Path Configuration**: Configured `base: '/construction-staging-site/'` in `vite.config.js` to ensure static assets load correctly when hosted on GitHub Pages subpaths.
