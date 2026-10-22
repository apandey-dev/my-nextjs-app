# Monograph (`my-nextjs-app`)
> **Assignment 1 — Next.js: Getting Started, Dynamic Routing & Editorial Platform**

A modern, responsive, and thoughtfully crafted Next.js web application built with the **Pages Router**, static generation (**SSG**) via `getStaticPaths` and `getStaticProps`, disciplined **Mali** typography, and **Tailwind CSS**.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Routing & Architecture](#routing--architecture)
   - [Shared Layout](#shared-layout)
   - [Dynamic Routes & SSG](#dynamic-routes--ssg)
   - [Contact Form & Validation](#contact-form--validation)
6. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Development Server](#development-server)
   - [Production Build](#production-build)
7. [Testing & Verification](#testing--verification)
8. [Available Scripts](#available-scripts)
9. [Deployment](#deployment)
   - [GitHub Publication](#github-publication)
   - [Deploying to Vercel](#deploying-to-vercel)
10. [Links](#links)

---

## Project Overview

**Monograph** was created to fulfill the complete specification for **Assignment 1: Getting Started & Routing**. Rather than relying on generic, over-decorated AI starter templates with excessive gradients and superficial cards, Monograph embraces an intentional, typography-led editorial design system.

The application demonstrates foundational Next.js patterns:
- **Pages Router** architecture (`pages/` directory).
- **Static Site Generation (SSG)** delivering pre-rendered HTML at build time for sub-50ms TTFB.
- Universal **Mali** typography applied across every heading, label, paragraph, button, and form control.
- Accessible, validated user input handling.
- Strict responsive design adapting fluidly from 375px mobile viewports to desktop displays.

---

## Key Features

- **Welcoming Home Page (`/`)**:
  - Clear headline, engaging subtitle, and dual primary/secondary action buttons.
  - Featured section highlighting 3 dummy articles.
  - Architectural pillars detailing static generation, typography, and clean routing.
  - Closing inquiry CTA.

- **Editorial About Page (`/about`)**:
  - Editorial profile card detailing the project's purpose and principles.
  - Four guiding technical values: Static Pre-generation, Predictable Navigation, Disciplined Typography, and Honest Interactions.
  - Responsive action buttons leading to the blog or contact form.

- **Dynamic Blog Section (`/blog` and `/blog/[id]`)**:
  - **Archive View (`/blog`)**: Displays all dummy articles with real-time text search and category filter pills (`Architecture`, `Design Systems`, `Accessibility`, `Frontend`). Includes empty state handling.
  - **Dynamic Article View (`/blog/[id]`)**: Fully pre-rendered with `getStaticPaths` and `getStaticProps`. Features reading time, publication date, author details, formatted code blocks, blockquotes, key takeaway lists, and previous/next article navigation.
  - **Custom 404 Page (`/404`)**: Gracefully handles non-existent article IDs and unmatched routes.

- **Accessible Contact Form (`/contact`)**:
  - Controlled inputs for **Name**, **Email**, and **Message**.
  - Visible `<label>` elements linked with `htmlFor` attributes.
  - Field-level validation: checks for empty fields, minimum length (name ≥ 2 chars, message ≥ 10 chars), and strict email format regex.
  - Inline error messages connected via `aria-invalid` and `aria-describedby`.
  - Realistic loading state during submission with disabled button feedback.
  - Accessible success confirmation card with submission summary and reset button.
  - **Honest Feedback**: Clearly informs the user that validation succeeded on the frontend prototype without fabricating a false email/database delivery.

- **Cohesive Design System & Typography**:
  - **Primary Font**: **Mali** configured via `next/font/google` and fallback `@import`.
  - **Warm Editorial Palette**: Background `#FAFAF8`, surface `#FFFFFF`, text `#20231F`, secondary text `#5C6159`, border `#E4E5DF`, and deep evergreen accent `#1F6E56`.
  - Accessible focus outlines (`:focus-visible`) and generous touch targets (≥ 44px).

---

## Tech Stack

| Technology | Role |
| :--- | :--- |
| **Next.js 14** | React Framework (Pages Router architecture) |
| **React 18** | UI component architecture and client state |
| **Tailwind CSS v3** | Utility-first styling and custom design tokens |
| **Google Fonts (Mali)** | Universal handwritten-style typography |
| **Lucide React** | Clean, accessible vector icons |
| **Jest & Testing Library** | Automated test suite for data lookups and validation |

---

## Project Structure

```text
my-nextjs-app/
├── __tests__/
│   ├── contact-validation.test.js # Contact form validation unit tests
│   └── posts.test.js             # Data lookup & SSG helper tests
├── components/
│   ├── BlogCard.js               # Reusable article preview card
│   ├── Footer.js                 # Shared semantic footer with navigation
│   ├── Layout.js                 # Global document shell with Head & Navbar
│   ├── Navbar.js                 # Responsive header with mobile drawer
│   └── PageHeader.js             # Reusable title and breadcrumb header
├── data/
│   └── posts.js                  # Dummy blog database & SSG lookup functions
├── pages/
│   ├── _app.js                   # Application wrapper with Mali font
│   ├── _document.js              # HTML document shell with font preconnect
│   ├── 404.js                    # Custom 404 error page
│   ├── about.js                  # About editorial page
│   ├── contact.js                # Contact form with validation & states
│   ├── index.js                  # Home landing page with featured posts
│   └── blog/
│       ├── [id].js               # Dynamic blog post route (SSG)
│       └── index.js              # Blog archive with search & filter
├── styles/
│   └── globals.css               # Global styles, Tailwind directives, & Mali setup
├── .eslintrc.json                # Next.js ESLint configuration
├── .gitignore                    # Git exclusion rules
├── jest.config.js                # Jest testing setup with Next.js
├── jest.setup.js                 # Testing Library matchers
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies and execution scripts
├── postcss.config.js             # PostCSS plugins (Tailwind, Autoprefixer)
├── README.md                     # Comprehensive project documentation
└── tailwind.config.js            # Custom colors, tokens, and font scale
```

---

## Routing & Architecture

### Shared Layout
The application uses a reusable `Layout` component (`components/Layout.js`) that wraps every page:
- **`Navbar`**: Text logo, primary navigation links with active state highlighting (using `useRouter().pathname`), and a mobile hamburger menu that closes automatically on route change.
- **`Footer`**: Dynamic copyright year, semantic navigation, and architecture badges.
- **`next/head`**: Dynamic page `<title>` and `<meta name="description">` tags configured per page.

### Dynamic Routes & SSG
Dynamic blog posts are handled in `pages/blog/[id].js`:
- **`getStaticPaths`**: Reads all posts from `data/posts.js` and returns paths containing `{ params: { id: post.id } }`. `fallback: false` is configured so unmatched parameters immediately return a 404.
- **`getStaticProps`**: Extracts `params.id`, retrieves the matching post, calculates previous/next navigation links, or returns `{ notFound: true }` if the post ID does not exist.
- All HTML for every article is generated during `npm run build`, resulting in zero database lookups at runtime and near-instant edge responses.

### Contact Form & Validation
Located in `pages/contact.js`:
- Handles form submission with complete client-side error checking.
- Validates that Name and Message are not blank or purely whitespace, and verifies that the Email matches standard email syntax.
- Displays inline accessible error hints with SVG warning icons.
- Submits asynchronously with a loading spinner before presenting a submission summary.

---

## Getting Started

### Prerequisites
- **Node.js**: v18.17.0 or higher (v20+ recommended)
- **npm**: v9 or higher

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/my-nextjs-app.git
cd my-nextjs-app
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Create an optimized static production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## Testing & Verification

Run the automated test suite:

```bash
npm test
```

Run code quality linting:

```bash
npm run lint
```

The test suite validates:
1. Retrieval of all blog posts and required schema fields.
2. Featured posts isolation (`getFeaturedPosts`).
3. Single post lookup and ID type coercion.
4. Correct `null` return on non-existent IDs.
5. Form validation behavior for required fields, short messages, and invalid email formats.

---

## Available Scripts

- `npm run dev`: Runs Next.js development server on port 3000.
- `npm run build`: Compiles and pre-renders static HTML pages.
- `npm run start`: Launches the compiled production application.
- `npm run lint`: Checks for Next.js and React code quality issues.
- `npm test`: Executes the Jest automated test suite.

---

## Deployment

### GitHub Publication

1. Initialize git and commit the codebase:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Next.js Assignment 1 with Pages Router, SSG, Mali font and validation"
   git branch -M main
   ```

2. Add your GitHub remote and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/my-nextjs-app.git
   git push -u origin main
   ```

### Deploying to Vercel

The application is fully pre-configured for one-click deployment on [Vercel](https://vercel.com/new):

1. Go to [https://vercel.com/new](https://vercel.com/new).
2. Connect your GitHub account and select the `my-nextjs-app` repository.
3. Framework Preset will be automatically detected as **Next.js**.
4. Root Directory should remain as `./`.
5. No custom environment variables are required for this frontend SSG assignment.
6. Click **Deploy**.
7. Once deployed, verify all routes (`/`, `/about`, `/contact`, `/blog`, `/blog/1`, `/blog/2`, `/blog/3`, `/blog/4`, and `/404`).

---

## Links

- **GitHub Repository**: [https://github.com/YOUR_USERNAME/my-nextjs-app](https://github.com/YOUR_USERNAME/my-nextjs-app) *(Replace with your repository URL)*
- **Live Vercel Demo**: [https://my-nextjs-app.vercel.app](https://my-nextjs-app.vercel.app) *(Update after deployment)*
