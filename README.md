# Monograph

A modern, responsive, and minimal editorial web application built with Next.js, featuring static site generation (SSG), dynamic article routing, Mali typography, and Tailwind CSS.

---

## Features

- **Home Page**: Editorial landing layout with curated featured articles, core principles, and quick actions.
- **Dynamic Articles**: Fast, pre-rendered articles with reading time, author metadata, styled code blocks, blockquotes, and previous/next article pagination.
- **Archive & Search**: Real-time search by keyword and category filters (`Architecture`, `Design Systems`, `Accessibility`, `Frontend`).
- **About Page**: Editorial background, focus areas, and design philosophy.
- **Contact Form**: Clean contact form with client-side field validation, email syntax verification, and submission feedback.
- **Typography & Design System**: Universal Mali typography with a neutral, high-contrast palette and mobile-responsive navigation.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (Pages Router)
- **Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: [Google Fonts (Mali)](https://fonts.google.com/specimen/Mali)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)

---

## Project Structure

```text
my-nextjs-app/
├── __tests__/           # Automated unit and validation tests
├── components/          # Reusable UI components (Navbar, Footer, Layout, BlogCard)
├── data/                # Articles database and helper query functions
├── pages/
│   ├── _app.js          # Global app wrapper with Mali font setup
│   ├── _document.js     # HTML shell with Google Fonts preconnect
│   ├── 404.js           # Custom 404 error page
│   ├── about.js         # About publication page
│   ├── contact.js       # Validated contact form
│   ├── index.js         # Home landing page with featured articles
│   └── blog/
│       ├── [id].js      # Dynamic SSG article details route
│       └── index.js     # Article archive with search and filter
├── styles/              # Global styles and Tailwind directives
├── package.json
└── tailwind.config.js
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Run Automated Tests
```bash
npm test
```

---

## Links

- **GitHub Repository**: [https://github.com/apandey-dev/my-nextjs-app](https://github.com/apandey-dev/my-nextjs-app)
- **Live Demo**: [https://my-nextjs-app-seven-phi.vercel.app](https://vercel.com/new)
