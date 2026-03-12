# erdongli.com

Personal site built with React, TypeScript, MUI, and Vite.

## Local development

This repo uses Yarn 1 through Corepack.

```bash
corepack yarn install
corepack yarn dev
```

## Production build

```bash
corepack yarn build
```

Vite writes the production bundle to `dist/`.

## Cloudflare Pages

This project is set up to deploy as a static single-page app on Cloudflare Pages.

- Framework preset: `Vite`
- Build command: `corepack yarn build`
- Build output directory: `dist`
- Environment variable: `NODE_VERSION=20.19.0` or newer

Client-side routing is handled with [`react-router-dom`](https://reactrouter.com/), and `public/_redirects` ensures direct requests like `/projects` resolve to the SPA entrypoint instead of returning a 404.
