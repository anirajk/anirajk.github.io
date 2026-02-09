# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio website for Aniraj Kesavan, built with Jekyll using the Lanyon theme (based on Poole). Hosted on GitHub Pages at anirajk.github.io.

## Development Commands

```bash
# Install dependencies (requires Ruby and Bundler)
bundle install

# Run local development server
bundle exec jekyll serve

# Build the site
bundle exec jekyll build
```

## Site Structure

- `_config.yml` - Site configuration (title, social links, pagination)
- `_layouts/` - HTML templates (default.html wraps all pages, page.html and post.html extend it)
- `_includes/` - Reusable components (head.html, sidebar.html)
- `_posts/` - Blog posts in `YYYY-MM-DD-title.md` format
- `public/` - Static assets (CSS, images, favicon variants, resume PDF)
- `index.md` - Homepage with bio, experience, publications, and resume link

## Content Guidelines

- Pages use YAML front matter with `layout: page` to appear in sidebar navigation
- Blog posts go in `_posts/` following Jekyll naming convention
- Resume PDF is at `public/cv-kesavan.pdf`
- Headshot image is at `public/aniraj-kesavan.jpeg`

## Theme Customization

The Lanyon theme supports color themes via body class in `_layouts/default.html`:
```html
<body class="theme-base-08">  <!-- 8 color options: theme-base-08 through theme-base-0f -->
```

Use `layout-reverse` class to flip sidebar to the right side.

## Destructive Actions Protocol

**IMPORTANT:** Before any destructive action (deleting code, removing files, major refactors), follow this workflow:

1. **Stash work in progress** - `git stash` any uncommitted changes
2. **Ensure last known good state is safe** - Verify the codebase is committed and pushed to remote
3. **Apply and commit the stash** - `git stash pop` and commit the WIP changes
4. **Apply the destructive changes** - Now proceed with deletions/removals
5. **Request review** - Ask the user to review the changes before finalizing; run `bundle exec jekyll build` to verify the site still builds correctly
