# Case Study: Diagnosing a Broken Résumé Download on a Live Site

**Type:** Production bug fix and deployment coordination
**Stack:** Next.js (static export), GitHub Pages, GitHub Actions

## The problem

The "Download résumé" button on my portfolio site returned a 404 in production, even though the button worked fine locally and the file was clearly present in the repo. No error was visible to a site visitor beyond a broken link.

## Investigation

1. **Ruled out the obvious first.** Confirmed the PDF existed in `public/` and that the component code referencing it looked correct at a glance — three separate buttons (header, hero, footer) all pointed to `/Sun_Cerrae_Quinones_Resume.pdf`.
2. **Checked the deployment config**, not just the component. `next.config.mjs` had `output: 'export'` and `basePath: '/suncerrae'` — the site was building as a static export and deploying to a GitHub Pages *project* site (`cerrae.github.io/suncerrae/`), not the domain root.
3. **Found the root cause.** Next.js only rewrites the configured `basePath` automatically for framework-aware elements (`<Link>`, `next/image`, asset imports). A plain hardcoded string in a raw `<a href="...">` is left untouched. So the button was linking to `cerrae.github.io/Sun_Cerrae_Quinones_Resume.pdf` — one directory level above where the file actually lived after export.

## Fix

- Made the `basePath` available at runtime via a public env var in `next.config.mjs`, instead of hardcoding it in two places.
- Updated the shared `resumeUrl` constant to read that env var, so all three download links stay correct even if the `basePath` changes later.

```js
// next.config.mjs
const basePath = '/suncerrae';
const nextConfig = {
  output: 'export',
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
};
```

```tsx
// components/portfolio.tsx
const resumeUrl = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/Sun_Cerrae_Quinones_Resume.pdf`
```

## What went sideways during rollout — and how it got resolved

Applying the fix through GitHub's web editor introduced two new issues along the way:

- A diff I'd been given as a reference got pasted into `next.config.mjs` as literal file content (including the `+`/`-` markers), which would have broken the build entirely.
- While cleaning up a duplicated file, the *active* `components/portfolio.tsx` was deleted instead of the stray duplicate at the repo root.

Both were caught by re-cloning the repo and diffing the live state against what was intended, rather than assuming the edits had landed correctly. The stray file (which already had the fix applied) was renamed back into `components/portfolio.tsx` to restore the working import path, and the config file was replaced with clean, valid content.

## Outcome

- Confirmed via a fresh clone that `next.config.mjs` was valid, `components/portfolio.tsx` resolved correctly from `app/page.tsx`, and the résumé PDF matched the intended file byte-for-byte.
- GitHub Actions rebuilt and redeployed automatically on push.
- All three download links on the live site now resolve correctly.

## Takeaway

The bug itself was a one-line fix, but the real work was in isolating *where* the failure actually was (deployment config, not component code) and in verifying each step of the rollout against the live repo state instead of assuming a change had been applied as intended — the same habit of checking status against source-of-truth rather than assumption that matters in claims and project tracking work.
