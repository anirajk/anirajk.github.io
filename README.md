# anirajk.github.io

Personal portfolio site — [anirajk.github.io](https://anirajk.github.io). Built with Next.js, hosted on GitHub Pages.

All source lives in `nextjs-site/`. The repo root contains the compiled static output that GitHub Pages serves.

## Updating content

### Bio / intro text

Edit `nextjs-site/lib/constants.ts` for name, title, company, and the short description used in SEO metadata.

Edit `nextjs-site/components/sections/Hero.tsx` for the paragraph text shown on the page.

### Work experience

Edit `nextjs-site/content/experience.ts`. Each entry is an object with `company`, `title`, `period`, and `description` (array of bullet strings).

### Publications

Edit `nextjs-site/content/publications.ts`. Each entry has `title`, `authors`, `venue`, `year`, `type`, and an optional `link`.

### Advisors

Edit `nextjs-site/content/advisors.ts`.

### Resume PDF

Replace `nextjs-site/public/documents/cv-kesavan.pdf` with the new file (keep the same filename). The download button in the Resume section links to this path.

### Profile photo

Replace `nextjs-site/public/images/profile.jpeg` with the new photo (800×800 works best — it's the source for all icon sizes).

To regenerate icons after a photo change, run these from the repo root (requires macOS `sips`):

```bash
SRC="nextjs-site/public/images/profile.jpeg"
IMGS="nextjs-site/public/images"

sips -z 300 300 "$SRC" --out "$IMGS/profile-300.jpeg"
sips -z 180 180 -s format png "$SRC" --out "$IMGS/apple-touch-icon.png"
sips -z 32 32 -s format png "$SRC" --out "$IMGS/favicon-32.png"
sips -z 16 16 -s format png "$SRC" --out "$IMGS/favicon-16.png"
```

Then regenerate `favicon.ico`:

```bash
node -e "
const fs = require('fs');
const png16 = fs.readFileSync('nextjs-site/public/images/favicon-16.png');
const png32 = fs.readFileSync('nextjs-site/public/images/favicon-32.png');
const count = 2, dirSize = 6 + count * 16;
const images = [
  { w: 16, png: png16, offset: dirSize, size: png16.length },
  { w: 32, png: png32, offset: dirSize + png16.length, size: png32.length },
];
const buf = Buffer.alloc(dirSize + png16.length + png32.length);
buf.writeUInt16LE(0, 0); buf.writeUInt16LE(1, 2); buf.writeUInt16LE(count, 4);
images.forEach(({ w, png, offset, size }, i) => {
  const p = 6 + i * 16;
  buf.writeUInt8(w, p); buf.writeUInt8(w, p+1); buf.writeUInt8(0, p+2); buf.writeUInt8(0, p+3);
  buf.writeUInt16LE(1, p+4); buf.writeUInt16LE(32, p+6);
  buf.writeUInt32LE(size, p+8); buf.writeUInt32LE(offset, p+12);
  png.copy(buf, offset);
});
fs.writeFileSync('nextjs-site/public/favicon.ico', buf);
console.log('favicon.ico written');
"
```

## Preview changes locally

```bash
cd nextjs-site
npm install        # first time only
npm run dev        # http://localhost:3000
```

## Build and deploy

```bash
cd nextjs-site
npm run build      # outputs to nextjs-site/out/
```

Copy the contents of `nextjs-site/out/` to the repo root, then push to `master`. GitHub Pages serves the root.
