# Lovegraphy Media - Landing Page

A professional landing page for Lovegraphy Media, a digital marketing agency based in Maharashtra, India.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Package Manager**: npm

## Project Structure

```
/
├── index.html          # HTML entry point
├── src/
│   ├── main.tsx        # React entry point
│   ├── App.tsx         # Main app component (entire landing page)
│   └── index.css       # Global styles + Tailwind imports
├── public/
│   └── *.png           # Static assets (logo)
├── vite.config.ts      # Vite config (port 5000, host 0.0.0.0)
├── tailwind.config.js  # Tailwind config
└── tsconfig.json       # TypeScript config
```

## Development

```bash
npm install
npm run dev        # Starts dev server on port 5000
npm run build      # Builds to /dist
```

## Deployment

Configured as a static site deployment:
- **Build command**: `npm run build`
- **Public directory**: `dist`
