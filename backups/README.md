# Frontend (React + Vite)

Run locally
1. Install:
   npm install

2. Start dev server:
   npm run dev
   (Vite default: http://localhost:5173)

Build & preview production
1. Build:
   npm run build
   (Output: dist/)

2. Preview:
   npx serve -s dist -l 5000
   Open http://localhost:5000

Base path & GitHub Pages
- To deploy to a subpath (GitHub Pages), set VITE_BASE_URL to "/your-repo/" before building.

Env files
- Place secrets in .env (VITE_ prefix for Vite). Do NOT commit .env.

CI & deployment
- CI workflow builds and tests on push/PR.
