# CCVelidator Portal Frontend

Frontend for the **CCVelidator Portal**, an enterprise-style validator operations workspace built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Motion**, **GSAP**, and **React Three Fiber**.

This project combines a polished public landing experience with static internal product surfaces for validator operations, rewards intelligence, communications, compliance, and leaderboard visibility.

## Highlights

- **Enterprise landing page** with premium motion and dark-theme presentation
- **Static product workspace routes** for operational demos and frontend review
- **Reusable portal shell** for internal dashboard pages
- **Centralized seeded content** for realistic states and UI population
- **Responsive UI** designed for modern desktop-first operations tooling
- **Next.js App Router** architecture with shared metadata and routing patterns

## Implemented Pages

### Public pages

- **Landing page**
- **Request access**

### Internal product surfaces

- **Dashboard**
- **Rewards**
- **Communication Hub**
- **Compliance & Profile**
- **Leaderboard**

## Key Frontend Features

- **Hero section** with animated presentation and live-style metrics
- **Institutional validator wall**
- **Problem vs portal comparison sections**
- **Competitive gap matrix**
- **Workspace preview and CTA sections**
- **Shared portal layout** for internal pages
- **Metadata and branding** aligned to `CCVelidator Portal`
- **React Bits registry configuration** in `components.json`

## Tech Stack

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **motion/react**
- **GSAP**
- **React Three Fiber / Drei**
- **Lucide React**

## Project Structure

```text
app/
  page.tsx                 Public landing page
  dashboard/page.tsx       Validator operations dashboard
  rewards/page.tsx         Rewards analytics surface
  comms/page.tsx           Communication Hub
  compliance/page.tsx      Compliance & profile view
  leaderboard/page.tsx     Public leaderboard view
  request-access/page.tsx  Access request experience

components/
  hero.tsx
  header.tsx
  footer.tsx
  portal-shell.tsx
  problem-comparison.tsx
  institutional-validator-wall.tsx
  competitive-gap.tsx
  workspace-preview.tsx
  portal-cta.tsx

lib/
  config.ts
  metadata.ts
  portal-data.ts
  site-content.ts
  utils.ts
```

## Local Development

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the project for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format project files with Prettier |
| `npm run format:check` | Check formatting |
| `npm run typecheck` | Run TypeScript type checking |

## Content and Branding

Core branding and shared metadata live in:

- `lib/config.ts`
- `lib/metadata.ts`
- `lib/portal-data.ts`

## Notes on Contributors

This repository is being normalized under **Kinjal Jain** ownership. GitHub's contributor graph is based on commit history and can take time to refresh after history rewrites.

## Ownership

- **GitHub owner:** `kinjaljain04`
- **Maintained for:** CCVelidator Portal frontend

## License

See `LICENSE` for repository licensing details.
