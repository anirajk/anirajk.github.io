#!/usr/bin/env bash
set -euo pipefail

REPO="$(cd "$(dirname "$0")" && pwd)"
OUT="$REPO/nextjs-site/out"

echo "Building..."
cd "$REPO/nextjs-site" && npm run build

echo "Syncing to repo root..."
rsync -a --delete \
  --exclude='.git' \
  --exclude='.claude' \
  --exclude='nextjs-site' \
  --exclude='CLAUDE.md' \
  --exclude='README.md' \
  --exclude='LICENSE.md' \
  --exclude='deploy.sh' \
  --exclude='.gitignore' \
  --exclude='.nojekyll' \
  "$OUT/" "$REPO/"

touch "$REPO/.nojekyll"

cd "$REPO"
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')"
git push origin master

echo "Done. Site will be live in ~1 minute."
