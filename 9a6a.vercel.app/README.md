# 9A6A – Amateur Radio Journal

Responsive Next.js site prepared for deployment on Vercel. The current archive contains 14 identified public posts/pages from the accessible WordPress homepage and page 2, plus a profile page and an editorial summary of the long America report.

## Run locally

Requirements: Node.js 18.17+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Extract this ZIP on your computer.
2. Create a GitHub repository named `9a6a-vercel-site` and upload the contents of this folder (not the enclosing folder).
3. Sign in to https://vercel.com and choose **Add New → Project**.
4. Import the GitHub repository. Vercel should detect Next.js automatically.
5. Click **Deploy**.
6. In Vercel → Project → Settings → Domains, add `9a6a.vercel.app` if it is available. If Vercel reports it is already assigned, the account currently owning that project/domain must release it or another project name must be chosen.

The site has been prepared locally; it is NOT yet published. Publishing requires the owner's GitHub/Vercel login and authorization.

## Add your photographs

Copy original photos into `public/images/`. To attach a photo automatically to an article, name the file exactly after its article slug (supported formats: JPG, JPEG, PNG, WEBP). For example:

- `cn3a-safi-2017-01.jpg`
- `w3lpl-station-2014.jpg`
- `arrl-headquarters.jpg`
- `cern-geneva.jpg`

The article page detects a matching image automatically. No original photos were copied from WordPress in this build; image areas remain placeholders until you add your own photographs.

## Content and migration status

- `lib/articles.ts` contains 14 records identified in the publicly accessible WordPress homepage and page 2, with dates, categories, concise editorial summaries, and source links.
- The 2014 America report has a multi-section editorial summary based on its public original text.
- The biography page contains a concise summary of publicly posted professional/amateur-radio background.
- The original HF linear amplifier PDF is linked as a source; it has not yet been bundled into this project.
- This is not a complete WordPress export. It may not include every old post, image, comment, attachment, or page. The old account is inaccessible, so a full migration cannot be guaranteed.
- Some source posts are only represented by titles/captions and brief excerpts visible in the public archive. The new pages label themselves as summaries rather than claiming to be full reproductions.

## Project structure

- `app/` – Next.js pages and layout
- `components/` – navigation and footer
- `lib/articles.ts` – archive data and article summaries
- `public/images/` – add original photographs here
