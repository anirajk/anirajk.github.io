# Aniraj Kesavan - Portfolio

Personal portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + @tailwindcss/typography
- **Icons**: lucide-react
- **Deployment**: Vercel (static export)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build (static export to ./out/)
npm run build

# Preview production build locally
npx serve out
```

## Project Structure

```
nextjs-site/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, header/footer)
│   ├── page.tsx            # Home page (composes all sections)
│   ├── globals.css         # Tailwind imports
│   └── not-found.tsx       # 404 page
├── components/
│   ├── layout/
│   │   ├── Container.tsx   # Max-width content wrapper
│   │   ├── Header.tsx      # Sticky nav with mobile menu
│   │   └── Footer.tsx      # Footer with social links
│   └── sections/
│       ├── Hero.tsx        # Bio with headshot
│       ├── Experience.tsx  # Work history
│       ├── Advisors.tsx    # Academic advisors
│       ├── Publications.tsx # Research papers
│       └── Resume.tsx      # PDF download link
├── content/
│   ├── experience.ts       # Work experience data
│   ├── publications.ts     # Publications data
│   └── advisors.ts         # Advisors data
├── lib/
│   ├── constants.ts        # Site config, social links, nav links
│   ├── types.ts            # TypeScript interfaces
│   └── utils.ts            # Utility functions (cn helper)
└── public/
    ├── images/profile.jpeg # Headshot
    ├── documents/cv-kesavan.pdf # Resume
    └── favicon.ico
```

## Editing Content

### Personal Info

Edit `lib/constants.ts` to update:
- Name, title, company, email
- Social links (Twitter, GitHub, LinkedIn)
- Navigation links

### Experience

Edit `content/experience.ts` to add/modify work history entries.

### Publications

Edit `content/publications.ts` to add/modify research papers.

### Advisors

Edit `content/advisors.ts` to add/modify academic advisors.

### Resume

Replace `public/documents/cv-kesavan.pdf` with updated resume.

### Profile Photo

Replace `public/images/profile.jpeg` with new headshot.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically on push

### GitHub Pages

The site is configured for static export. After building:

1. Contents of `./out/` can be deployed to any static host
2. For GitHub Pages, configure the repository to serve from the `out` directory or use a GitHub Action

## Development Notes

- **Static Export**: Configured in `next.config.ts` with `output: "export"`
- **Smooth Scrolling**: Enabled via CSS in `globals.css`
- **Responsive**: Mobile-first design with breakpoints at `sm`, `md`, `lg`
- **SEO**: Metadata configured in `app/layout.tsx` including OpenGraph and Twitter cards
