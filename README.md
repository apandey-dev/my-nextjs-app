# NextData — Next.js Data Fetching & API Routes

A clean, production-grade Next.js web application built with the **Pages Router**, **Tailwind CSS**, and the Google Font **Mali**. This project demonstrates the core data fetching strategies available in Next.js:

- **Static Site Generation (SSG)**
- **Server-Side Rendering (SSR)**
- **Client-Side Rendering (CSR with SWR)**
- **Custom Next.js API Routes**
- **Overview & Conceptual Analysis of Incremental Static Regeneration (ISR)**

---

## 1. Project Overview

Next.js provides multiple data fetching mechanisms suited for different performance, caching, and real-time requirements. Rather than treating data fetching as a one-size-fits-all approach, this project showcases each pattern across isolated, purpose-built routes:

1. **Homepage (`/`)**: Hub introducing the architecture, demonstrating client-side consumption of our custom API endpoint (`/api/hello`), and providing responsive navigation.
2. **Product Catalog (`/products`)**: Pre-rendered at build time via `getStaticProps` (SSG), fetching catalog items from the Fake Store API.
3. **Product Details (`/products/[id]`)**: Rendered dynamically on every incoming HTTP request via `getServerSideProps` (SSR), fetching individual product data from the Fake Store API with defensive ID validation and error handling.
4. **Live Dashboard (`/dashboard`)**: Rendered entirely on the client (CSR) using the `swr` library, automatically polling JSONPlaceholder posts every 10 seconds (`refreshInterval: 10000`).
5. **Custom API Route (`/api/hello`)**: Serverless endpoint returning `{ message: "Hello from Next.js API Route!" }`.

---

## 2. Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (Pages Router, JavaScript)
- **Library**: [React 18](https://react.dev/)
- **Data Fetching / Caching**: [SWR](https://swr.vercel.app/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: [Mali](https://fonts.google.com/specimen/Mali) (via Google Fonts)
- **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)

---

## 3. Route Summary

| Route | Rendering Strategy | Source API | Description |
| :--- | :--- | :--- | :--- |
| `/` | Static (CSR API fetch) | `/api/hello` | Application introduction and dynamic showcase of custom API route |
| `/products` | **SSG** (`getStaticProps`) | `fakestoreapi.com/products` | E-commerce catalog generated at build time |
| `/products/[id]` | **SSR** (`getServerSideProps`) | `fakestoreapi.com/products/{id}` | Dynamic single-product detail page rendered per request |
| `/dashboard` | **CSR** (`useSWR`) | `jsonplaceholder.typicode.com/posts` | Real-time live feed auto-refreshing every 10 seconds |
| `/api/hello` | **API Route** (Serverless) | Internal Node.js handler | Custom backend endpoint returning JSON response |

---

## 4. In-Depth Explanation of Next.js Rendering Strategies

### 1. Static Site Generation (SSG) — `/products`
- **Mechanism**: `getStaticProps`
- **When it executes**: Once during project build (`next build`) or during subsequent static regeneration.
- **Benefits**:
  - Extremely fast response times (HTML + JSON pre-generated and cached directly at CDN edges).
  - High availability and reduced load on upstream backend servers.
  - Optimal SEO as fully-rendered HTML is immediately served to web crawlers.
- **Best suited for**: Product catalogs, marketing pages, blogs, and documentation where content changes infrequently.

### 2. Server-Side Rendering (SSR) — `/products/[id]`
- **Mechanism**: `getServerSideProps`
- **When it executes**: On the server at incoming HTTP request time for every visitor.
- **Benefits**:
  - Always serves the most recent live data.
  - Access to request-specific context: headers, cookies, authentication tokens, query parameters.
  - Safe handling of private keys or databases that cannot be exposed to the client.
- **Best suited for**: Pages needing real-time stock levels, dynamic pricing, user-specific accounts, or routes with too many dynamic parameters to pre-build statically.

### 3. Client-Side Rendering (CSR with SWR) — `/dashboard`
- **Mechanism**: `useSWR` from the `swr` library
- **When it executes**: In the user's browser runtime after the initial page shell has loaded.
- **Benefits**:
  - Stale-While-Revalidate caching pattern: serves instant cached data while revalidating in the background.
  - Built-in interval polling (`refreshInterval: 10000`), focus tracking, and network reconnect refetching.
  - Zero server compute overhead for repetitive background updates.
- **Best suited for**: Real-time dashboards, notifications, interactive charts, and private feed streams.

### 4. Incremental Static Regeneration (ISR) — Architectural Discussion
- **Mechanism**: `getStaticProps` returning `{ revalidate: <seconds> }`.
- **How it works**: Combines the performance benefits of SSG with the freshness of SSR. When a user requests a page after the `revalidate` window has passed, Next.js serves the cached page while triggering a background regeneration of the static HTML.
- **Why ISR is not implemented as a separate required page**:
  - The assignment requirements specify dedicated implementations for **SSG** (`/products`), **SSR** (`/products/[id]`), and **CSR with SWR** (`/dashboard`).
  - Implementing ISR on `/products` would obscure the clear demonstration of pure build-time Static Site Generation.
  - Therefore, ISR is documented here conceptually to explain how Next.js scales static pages without requiring a full site rebuild.

---

## 5. Custom API Route — `/api/hello`

Located at `pages/api/hello.js`:

```javascript
export default function handler(req, res) {
  res.status(200).json({
    message: "Hello from Next.js API Route!"
  });
}
```

The homepage (`pages/index.js`) queries this endpoint using a client-side `fetch('/api/hello')` on component mount, displaying dynamic loading, error, and success states without hardcoding the payload.

---

## 6. Local Setup and Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### Steps

1. Clone or navigate to the project directory:
   ```bash
   cd my-nextjs-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   [http://localhost:3000](http://localhost:3000)

---

## 7. Testing

A comprehensive automated test suite is provided using Jest and React Testing Library:

- **API Route**: Verifies `/api/hello` responds with HTTP 200 and the exact expected payload.
- **Homepage**: Verifies rendering, navigation links, and dynamic `/api/hello` message resolution.
- **Products Page (SSG)**: Verifies `getStaticProps` integration, product card grid, empty state, and error handling.
- **Product Details Page (SSR)**: Verifies `getServerSideProps` resolution, valid/invalid ID handling, and error states.
- **Dashboard (CSR)**: Verifies `useSWR` fetching, loading skeletons, error states, and list rendering.

### Running Tests Locally
```bash
npm test
```

> **Note on Test Privacy:** Test specifications, configurations, and artifacts are strictly local and ignored from version control via `.gitignore`.

---

## 8. Production Build

To create an optimized production build:

```bash
npm run build
```

To run the production server locally:

```bash
npm start
```

---

## 9. Vercel Deployment

This project is fully configured for deployment on [Vercel](https://vercel.com):

1. Login using Vercel CLI:
   ```bash
   vercel login
   ```

2. Link project (optional if deploying for the first time):
   ```bash
   vercel link
   ```

3. Deploy to production:
   ```bash
   vercel --prod
   ```
