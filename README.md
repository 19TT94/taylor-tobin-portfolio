# Taylor Tobin Portfolio

Personal portfolio site showcasing selected projects, a featured case study, and contact information.

## Tech Stack

- [Vue 3](https://vuejs.org/) with Composition API
- [Vite](https://vitejs.dev/) for development and production builds
- [Vue Router](https://router.vuejs.org/) for client-side routing
- [Vuex](https://vuex.vuejs.org/) for global UI state
- SCSS for styling

## Features

- Featured Hero Builder case study with full project write-up
- Interactive project carousel on the Projects page
- Light and dark theme support
- Netlify-powered contact form
- Responsive layout for mobile and desktop

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later recommended
- npm (included with Node.js) or [Yarn](https://yarnpkg.com/)

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Build the app for production |
| `npm run serve` | Preview the production build locally |
| `npm run lint` | Lint and auto-fix files in `src/` |

## Project Structure

```
src/
├── components/   # Shared UI (navigation, slider, forms, etc.)
├── data/         # Static content (case study copy)
├── router/       # Route definitions
├── store/        # Vuex state
├── views/        # Page-level components
└── assets/       # Images, styles, and documents
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/featured/hero-builder` | Hero Builder case study |
| `/featured` | Projects carousel |
| `/contact` | Contact form |

## Author

Taylor Tobin — [GitHub](https://github.com/19TT94) · [LinkedIn](https://www.linkedin.com/in/taylor-tobin/)
