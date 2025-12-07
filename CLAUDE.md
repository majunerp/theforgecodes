# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **The Forge Codes** - a Next.js 16 SEO-optimized website for Roblox game "The Forge". Built with TypeScript, React 19, and Tailwind CSS 4, following Next.js App Router architecture.

**Domain:** https://theforgecodes.org/

## Development Commands

```bash
# Start development server (with hot reload at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Lint code
npm run lint
```

## Architecture

### Site Structure
```
/                 - Home page (SEO-optimized, 800+ words, keyword density 3-5%)
/codes            - Active and expired codes listing
/races            - Race system guide with stats and probabilities
/weapons          - Weapons database with stats
/forging          - Forging mechanics and crafting guide
/islands          - Islands exploration guide
/mechanics        - Game mechanics and tips
```

### App Router Structure
- **app/layout.tsx**: Root layout with SEO meta tags, Open Graph, canonical URLs
- **app/page.tsx**: Home page (1000+ words, optimized for "the forge codes" keyword)
- **app/globals.css**: Forge-themed dark styles with amber/orange accents
- **components/Header.tsx**: Sticky navigation with mobile menu
- **components/Footer.tsx**: Footer with social links and quick navigation

### SEO Configuration
- **Title Length:** 40-60 characters per page
- **Description Length:** 140-160 characters per page
- **Keyword Density:** 3-5% for "the forge codes" on each page
- **Canonical URLs:** Absolute URLs using https://theforgecodes.org/
- **robots.txt:** Located in public/robots.txt
- **sitemap.xml:** Located in public/sitemap.xml
- **Word Count:** Minimum 800 words per page for SEO

### Path Aliases
- `@/*` maps to the root directory (configured in tsconfig.json:22)

### Styling Theme
- **Primary Colors:** Amber-600 (#d97706), Orange-600 (#ea580c)
- **Background:** Zinc-950 (#0a0a0a) - dark theme
- **Accent:** Amber/Orange gradients for forge/metal aesthetic
- **Custom Classes:** `.forge-gradient`, `.forge-border`, `.forge-glow`, `.metal-texture`, `.code-block`
- **Fonts:** Geist Sans (body), Geist Mono (code blocks)

### Content Guidelines
- Natural keyword integration (avoid stuffing)
- User-focused content to maximize time on page
- Comprehensive guides with 800+ words
- Clear heading hierarchy (H1, H2, H3, H4)
- Internal linking between pages
- Mobile-responsive design

## TypeScript Configuration
- Target: ES2017
- Strict mode enabled
- JSX runtime: react-jsx (automatic)
- Module resolution: bundler

## Game Content Reference
Based on Roblox game "The Forge" - a blacksmith/forging RPG with:
- **Race System:** Angel (0.5%), Demon (0.5%), Dragonborn (1.5%), Minotaur (1.75%), Golem (1.25%), Human (25%)
- **Core Mechanics:** Mining, Forging (mini-games), Combat
- **Islands:** Stonewake's Cross, Forgotten Kingdom, and more
- **Codes:** PEAK!, 400K!, SORRYFORSHUTDOWN (provide race rerolls and luck totems)
