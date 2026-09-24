# Jaisri Sairam Acupuncture Centre

Official website for **Jaisri Sairam Acupuncture Centre** — Dr. Padmanabhan, Tirupur. Built with Angular 22.

**Live URL:** https://jaisrisairamacupuncture.pages.dev/ (Cloudflare Pages)

## Development

Requires Node.js `^22.22.3 || ^24.15.0` (pinned to 24 in `.node-version`).

```bash
# Install dependencies
npm install

# Start development server
ng serve
# Navigate to http://localhost:4200/
```

## Build

```bash
# Production build
npm run build
```

Build output is stored in `dist/jaisri-sairam-acupuncture/browser/`.

## Cloudflare Pages Deployment

The live site is hosted on Cloudflare Pages. Its build image defaults to Node.js 22.16, which is too old for Angular 22 and ignores `engines` in `package.json`, so the Node version comes from `.node-version` (or a `NODE_VERSION` environment variable in the Pages project settings).

- **Build command:** `npm run build`
- **Output directory:** `dist/jaisri-sairam-acupuncture/browser`

If a custom domain is connected later, update the canonical, `og:*` and JSON-LD URLs in `src/index.html`.

## Running Tests

```bash
ng test
```

## Further Help

See the [Angular CLI documentation](https://angular.dev/tools/cli) for more information.
