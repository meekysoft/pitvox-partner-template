# PitVox Partner Template

A ready-to-deploy website template for PitVox partner communities. Built with React, Vite, and Tailwind CSS. Uses the [`@pitvox/partner-react`](https://github.com/meekysoft/pitvox-partner-react) SDK for leaderboards and competitions.

## Getting started

### 1. Create your repo

Click **"Use this template"** on GitHub, or clone manually:

```bash
git clone https://github.com/meekysoft/pitvox-partner-template.git my-community
cd my-community
rm -rf .git && git init
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your partner slug

Open `src/main.jsx` and replace `"your-slug"` with your PitVox partner slug:

```jsx
<PitVoxPartnerProvider
  partnerSlug="my-community"   // ← your slug here
  apiKey="partner_..."         // ← your API key (for registration features)
  getSteamId={() => null}      // ← wire up if you add authentication
>
```

### 4. Customise

- **Site name** — update `index.html` title, `Layout.jsx` navbar, and `Home.jsx` heading
- **Branding** — replace `public/favicon.svg` with your logo
- **Theme** — override SDK CSS variables in `src/index.css`:

```css
@import "tailwindcss";

:root {
  --pvx-accent: #e11d48;      /* your brand colour */
  --pvx-bg-card: #1a1a2e;     /* card background */
}
```

### 5. Run locally

```bash
npm run dev
```

## Deploying

This is a static site — deploy it anywhere. Run `npm run build` and serve the `dist/` directory:

- **Vercel** — connect your repo, auto-detected as Vite
- **Netlify** — connect your repo, build command `npm run build`, publish directory `dist`
- **Cloudflare Pages** — same as Netlify
- **GitHub Pages** — use the `peaceiris/actions-gh-pages` action or similar

> Looking for Steam authentication, user dashboards, and a full AWS backend? See the [Amplify Partner Template](https://github.com/meekysoft/pitvox-partner-template-amplify).

## What's included

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with competition/leaderboard counts |
| Competitions | `/competitions` | Full competition experience (card grid, standings, round results, entry lists) |
| Leaderboards | `/leaderboards` | 4-layer drill-down (tracks → cars → drivers → lap history) |

Both the competitions and leaderboards pages are powered by single drop-in components from the SDK. See the [SDK documentation](https://github.com/meekysoft/pitvox-partner-react) for customisation options.

## Stack

- [Vite](https://vite.dev/) 7 — build tool
- [React](https://react.dev/) 19 — UI framework
- [Tailwind CSS](https://tailwindcss.com/) 4 — utility-first styling
- [React Router](https://reactrouter.com/) 7 — client-side routing
- [TanStack Query](https://tanstack.com/query) 5 — data fetching (used by the SDK)
- [`@pitvox/partner-react`](https://github.com/meekysoft/pitvox-partner-react) — PitVox SDK

## License

MIT
