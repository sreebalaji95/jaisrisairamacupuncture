# Jaisri Sairam Acupuncture Centre

Official website for **Jaisri Sairam Acupuncture Centre** — Dr. Padmanabhan, Tirupur. Built with Angular 17.

## Development

```bash
# Install dependencies
npm install

# Start development server
ng serve
# Navigate to http://localhost:4200/
```

## Build

```bash
# Standard production build (with SSR)
npm run build

# GitHub Pages production build (static, no SSR)
npm run build:gh-pages
```

Build output is stored in `dist/jaisri-sairam-acupuncture/browser/`.

---

## GitHub Pages Deployment

The site is automatically deployed to GitHub Pages whenever changes are pushed to the `master` branch.

**Live URL:** `https://sreebalaji95.github.io/jaisrisairamacupuncture/`

### How It Works

1. **Trigger:** A push to the `master` branch triggers the GitHub Actions workflow (`.github/workflows/deploy-gh-pages.yml`).
2. **Build:** The workflow installs dependencies and runs `npm run build:gh-pages`, which:
   - Builds in production mode with optimizations (tree-shaking, minification, output hashing)
   - Sets `baseHref` to `/jaisrisairamacupuncture/` (matching the repository name)
   - Disables SSR and prerendering (GitHub Pages serves static files only)
3. **SPA Routing:** The workflow copies `index.html` to `404.html` so that Angular's client-side router handles all routes — even on page refresh or direct URL access.
4. **Deploy:** The `dist/jaisri-sairam-acupuncture/browser/` directory is deployed via the GitHub Pages API using `actions/deploy-pages`.

### GitHub Pages Configuration

In your GitHub repository settings:

1. Go to **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow handles everything automatically — no need to select a branch

> **Note:** The deployment uses the modern GitHub Actions Pages workflow (not the legacy `gh-pages` branch approach). The `actions/deploy-pages` action deploys directly via the GitHub Pages API.

### Manual Deployment

If you need to deploy manually without CI:

```bash
# 1. Build for GitHub Pages
npm run build:gh-pages

# 2. Copy index.html as 404.html for SPA routing
cp dist/jaisri-sairam-acupuncture/browser/index.html dist/jaisri-sairam-acupuncture/browser/404.html

# 3. Add .nojekyll to prevent Jekyll processing
touch dist/jaisri-sairam-acupuncture/browser/.nojekyll

# 4. Deploy using angular-cli-ghpages (install first if needed)
npx angular-cli-ghpages --dir=dist/jaisri-sairam-acupuncture/browser
```

### SPA Routing on GitHub Pages

GitHub Pages doesn't natively support single-page application routing. When a user navigates to a deep link (e.g., `/about`) and refreshes, GitHub serves a 404.

**Solution:** The deployment copies `index.html` to `404.html`. GitHub Pages serves `404.html` for any unknown path, which loads the Angular app and lets the Angular router handle the route client-side.

### Static Assets

All static assets (CSS, JavaScript, images, fonts, icons) are served from the `baseHref` path:
- CSS and JS files have content hashes in filenames for cache busting
- Assets in `src/assets/` are copied to the build output
- `favicon.svg` is included at the root of the build output
- Google Fonts are loaded from CDN (no local font files needed)

## Running Tests

```bash
ng test
```

## Further Help

See the [Angular CLI documentation](https://angular.dev/tools/cli) for more information.
