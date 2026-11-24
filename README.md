# Eli Twaine — Portfolio

A responsive personal portfolio for **Elijah Twaine Marquez**, built to present my web development and graphic design work, experience, certifications, and contact information. The site includes interactive 3D visuals, project details and case studies, and a gallery of selected graphics.

## Features

- Responsive navigation and page layouts for desktop and mobile
- Animated hero section with interactive 3D elements
- About, selected projects, graphic design, experience, certifications, and contact sections
- Expandable case studies for TranspoGAPO and FlowBuddy
- Project previews and a draggable graphics carousel
- Certificate selector with certificate previews and a downloadable resume
- Contact form integrated with EmailJS

## Built with

- [React](https://react.dev/) and JavaScript (ES modules)
- [Vite](https://vite.dev/) for local development and production builds
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Three.js](https://threejs.org/), [React Three Fiber](https://r3f.docs.pmnd.rs/), and [Drei](https://github.com/pmndrs/drei) for 3D scenes
- [Motion for React](https://motion.dev/) for interface animations
- EmailJS for the contact form
- Shiki, Cobe, and OGL for interactive visual components

## Getting started

### Requirements

- Node.js and npm
- Git

### Install and run locally

```bash
git clone https://github.com/twaainee/3d_portfolio.git
cd 3d_portfolio
npm ci
npm run dev
```

Vite prints a local URL in the terminal (usually `http://localhost:5173`). Open it in a browser to view the portfolio. The development server supports hot reloading while you edit files.

### Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally after building |
| `npm run lint` | Run ESLint across the project |

## Project structure

```text
public/
  assets/                  Images, icons, project artwork, certificates, and resume
  models/                   3D model assets
src/
  components/               Reusable interface and visual components
  constants/index.js         Project, social, and experience content
  sections/                 Portfolio sections and project case studies
  App.jsx                    Page composition
  index.css                  Global styles and theme
```

## Updating portfolio content

- Edit project details, technologies, social URLs, and experience entries in `src/constants/index.js`.
- Add graphic files under `public/assets/graphics/` and update the `graphicWorks` list in `src/sections/GraphicWorks.jsx`.
- Certificate previews and downloadable files are stored under `public/assets/certificate-previews/` and `public/assets/certificates/`; update the certificate list in `src/sections/Certifications.jsx` when adding or replacing one.
- The contact form uses EmailJS. Update the service ID, template ID, and public key in `src/sections/Contact.jsx` to connect it to your own EmailJS account.

## Production build

Run `npm run build` to generate the static site in `dist/`. Deploy the contents of that folder to a static hosting provider, or connect the repository to a host with Vite support. Before publishing, configure the contact form with your own EmailJS account and confirm that the required public assets are included.
