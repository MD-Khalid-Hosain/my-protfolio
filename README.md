# MD Khalid Hosain — Portfolio

Personal software engineer portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. Content is sourced from the CV in `public/MD_Khalid_Hosain_Resume.pdf`.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm build
pnpm start
```

## Update content

Edit the TypeScript files in `src/data/`:

- `profile.ts` — name, summary, contact, GitHub, LinkedIn
- `experience.ts` — work history
- `projects.ts` — selected projects
- `skills.ts` — skill groups
- `education.ts` / `certifications.ts`

Set `NEXT_PUBLIC_SITE_URL` to your production domain before deploying (used for sitemap, robots, and Open Graph URLs). Add your LinkedIn URL in `src/data/profile.ts` when you have it.

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: Next.js. Build command: `pnpm build`. Output: default.
4. Add environment variable `NEXT_PUBLIC_SITE_URL` = `https://your-domain.vercel.app`.
5. Deploy.
