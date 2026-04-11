# AXIOM Studio – Design Agency Homepage

A modern design agency homepage built with React 18 + Vite.

## Tech Stack
- React 18
- Vite
- Vanilla CSS (no UI libraries)
- Google Fonts (Bebas Neue + DM Sans + DM Mono)

## Setup Instructions

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment (Vercel)

```bash
npm install -g vercel
vercel
```

## Features
- Animated canvas dot-grid hero background
- 4 service cards with SVG icons and hover animations
- 6-project portfolio grid with hover overlays
- Contact form with validation and success state
- Dark / Light mode toggle
- Scrolling marquee ticker
- Fully responsive (mobile-first)
- SEO metadata

## Folder Structure

```
src/
├── main.jsx
├── App.jsx
├── App.css
├── index.css
└── components/
    ├── Navbar.jsx / Navbar.css
    ├── Hero.jsx / Hero.css
    ├── Services.jsx / Services.css
    ├── Portfolio.jsx / Portfolio.css
    ├── Contact.jsx / Contact.css
    └── Footer.jsx / Footer.css
```

## Assumptions
- No backend — contact form simulates submission with a 1.5s timeout
- Portfolio thumbnails use CSS gradients + emoji (swap with real images via `<img>` tags)
- Dark mode is the default theme
