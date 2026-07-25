# D1 God Rolls

Search any Destiny 1 legendary weapon and see its PvE and PvP god rolls.

Built with Next.js, Tailwind CSS, and shadcn/ui. Weapon roll data is
sourced from the Destiny 1 Discord community roll threads.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Data

Weapon and perk data lives in [`src/data/weapons.ts`](src/data/weapons.ts),
transcribed from the source PvE and PvP roll threads (`pve.md` / `pvp.md`).
