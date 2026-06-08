# Tech & Path

A Next.js, TypeScript, and Supabase project for technology career guidance.

## Quick Start

Prerequisites:
- Node.js v18+ recommended
- pnpm recommended, or npm/yarn
- Supabase account if you are using auth/database features

Install dependencies:

```bash
pnpm install
```

Run the dev server:

```bash
pnpm run dev
```

Build and start production:

```bash
pnpm run build
pnpm run start
```

## Useful Commands

- Check outdated packages: `pnpm outdated --json`
- Update safe/wanted versions: `pnpm up`
- Update to latest versions: `pnpm up --latest`
- Search for symbol references: `node scripts/find-references.js`

## Notes

- Avoid `latest` in `package.json` when possible so installs stay reproducible.
- Major dependency upgrades can break imports or runtime behavior, so test after updating.

## Unused File Analysis

I scanned the repository with `ts-prune` and a repository-wide reference search. The following files or exports appear unused and are good candidates for review before deleting:

- `components/ui/cyber-elements.tsx`
- `components/ui/floating-elements.tsx`
- `components/ui/loading-spinner.tsx`
- `components/ui/matrix-rain.tsx`
- `components/ui/toaster.tsx`
- `lib/supabase.ts` - exported `getCurrentUser` appears unused

## Safe Removal Workflow

1. Create a branch.
2. Double-check references with `node scripts/find-references.js`.
3. Remove the file or export.
4. Run `pnpm run dev` and test the affected pages.
5. Push the branch and open a pull request.
