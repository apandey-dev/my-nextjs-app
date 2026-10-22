export const posts = [
  {
    id: "1",
    slug: "architecting-clean-routing-nextjs",
    title: "Architecting Clean Routing & Static Generation in Next.js",
    excerpt:
      "A deep exploration of the Pages Router lifecycle, how getStaticPaths pre-renders pages at build time, and patterns for resilient production routing.",
    date: "October 14, 2026",
    readTime: "5 min read",
    category: "Architecture",
    author: {
      name: "Alex Morgan",
      role: "Frontend Engineer",
      initials: "AM",
    },
    content: [
      {
        type: "paragraph",
        text: "Modern web applications demand both instant user perception and robust search engine indexing. Next.js achieved its foundational prominence through static site generation (SSG), enabling developers to generate HTML files at build time while maintaining dynamic client-side interactivity upon hydration.",
      },
      {
        type: "heading",
        text: "The Role of getStaticPaths and getStaticProps",
      },
      {
        type: "paragraph",
        text: "In the Next.js Pages Router, dynamic routes with bracket notation like [id].js require two essential functions working in concert. getStaticPaths tells Next.js which paths need to be pre-rendered into static HTML during next build. Each path is mapped to the param schema matching your route.",
      },
      {
        type: "code",
        code: `export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: false, // 404 on unmapped paths
  };
}`,
      },
      {
        type: "paragraph",
        text: "Setting fallback: false ensures that any route parameter not present in paths immediately results in an HTTP 404 page, preventing broken page renders and ensuring crawl integrity. If your catalog grows into thousands of pages, fallback: 'blocking' or fallback: true allows on-demand background static generation.",
      },
      {
        type: "heading",
        text: "Why Static Generation Remains the Benchmark",
      },
      {
        type: "paragraph",
        text: "Static pages can be distributed globally across edge networks and Content Delivery Networks (CDNs) with zero database overhead at request time. This delivers sub-50ms Time to First Byte (TTFB) to users worldwide, resilient to traffic spikes.",
      },
      {
        type: "quote",
        text: "A well-structured static route is the fastest possible response the web can provide: pure HTML, ready for immediate browser rendering.",
      },
      {
        type: "heading",
        text: "Key Takeaways for Production Routing",
      },
      {
        type: "list",
        items: [
          "Always validate query parameters inside getStaticProps before fetching backend data.",
          "Return notFound: true inside getStaticProps if an entity is deleted or unpublished.",
          "Keep shared layouts persistent across navigation to avoid unnecessary re-mounts and flicker.",
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "crafting-functional-design-systems",
    title: "Crafting Functional Design Systems: Beyond AI Generic Templates",
    excerpt:
      "Why restrained palettes, intentional typography scales, and tactile spacing create enduring digital products that respect the user's attention.",
    date: "October 18, 2026",
    readTime: "4 min read",
    category: "Design Systems",
    author: {
      name: "Jordan Lee",
      role: "Product Designer",
      initials: "JL",
    },
    content: [
      {
        type: "paragraph",
        text: "Over the past two years, web software has experienced an explosion of boilerplate designs. Heavy neon gradients, blurred glassmorphic cards, and decorative empty graphs often conceal a lack of functional hierarchy. Real software, however, thrives on clarity, consistency, and typographic poise.",
      },
      {
        type: "heading",
        text: "The Power of Restrained Color Palettes",
      },
      {
        type: "paragraph",
        text: "A mature design system begins with an honest neutral scale: warm off-whites (#FAFAF8), crisp surface white (#FFFFFF), and low-contrast charcoal (#20231F) instead of harsh pitch black. A single, purposeful accent—such as a deep evergreen (#1F6E56)—guides attention without sensory overload.",
      },
      {
        type: "heading",
        text: "Typographic Consistency with Mali",
      },
      {
        type: "paragraph",
        text: "Typography establishes the voice of an application. By pairing the natural, humanistic warmth of Mali with disciplined vertical rhythm and controlled weights (400, 500, 600), interfaces retain personality while maintaining serious editorial dignity.",
      },
      {
        type: "quote",
        text: "Design is not what it looks like and feels like. Design is how it works — and how easily users can accomplish their goals.",
      },
      {
        type: "paragraph",
        text: "Forms, buttons, and navigation must feel cohesive. When every component shares identical border tokens, focus ring behaviors, and padding conventions, users move through the application with confidence and ease.",
      },
    ],
  },
  {
    id: "3",
    slug: "accessible-forms-and-resilient-validation",
    title: "Accessible Forms & Resilient Client-Side Validation",
    excerpt:
      "Practical strategies for building forms that delight real humans: semantic labels, keyboard navigation, instant error recovery, and honest feedback.",
    date: "October 20, 2026",
    readTime: "6 min read",
    category: "Accessibility",
    author: {
      name: "Alex Morgan",
      role: "Frontend Engineer",
      initials: "AM",
    },
    content: [
      {
        type: "paragraph",
        text: "Web forms are the primary bridge of communication between users and software. Yet forms are often the most frustrating touchpoint: ambiguous error alerts, disappearing inputs, missing labels, and broken focus states frequently alienate users.",
      },
      {
        type: "heading",
        text: "Rule 1: Never Rely on Placeholders Alone",
      },
      {
        type: "paragraph",
        text: "Placeholder text disappears as soon as a user starts typing. This strains short-term memory, especially on complex or multi-field forms. A visible, semantic <label> element linked via htmlFor is strictly mandatory for accessibility, screen readers, and usability.",
      },
      {
        type: "heading",
        text: "Honest Feedback and Accessible States",
      },
      {
        type: "paragraph",
        text: "When a form submission completes on a frontend-only prototype, never falsify a backend success message claiming a database record or email was delivered when it wasn't. Clearly confirm that client validation succeeded and explain the exact simulation behavior.",
      },
      {
        type: "list",
        items: [
          "Use aria-invalid and aria-describedby to link input elements to their specific error text.",
          "Ensure focus indicators remain visibly prominent for keyboard navigators.",
          "Disable buttons only during active asynchronous submission, preserving clear visual states.",
        ],
      },
    ],
  },
  {
    id: "4",
    slug: "responsive-editorial-layouts",
    title: "Responsive Editorial Layouts: From 375px to Ultra-Wide",
    excerpt:
      "Techniques for crafting reading experiences that effortlessly adapt across mobile viewports, tablet proportions, and wide desktop screens.",
    date: "October 21, 2026",
    readTime: "4 min read",
    category: "Frontend",
    author: {
      name: "Jordan Lee",
      role: "Product Designer",
      initials: "JL",
    },
    content: [
      {
        type: "paragraph",
        text: "Responsive design is not simply scaling down desktop layouts until nothing breaks. True responsiveness requires rethinking typographic density, navigation accessibility, and touch target sizes for handheld devices.",
      },
      {
        type: "heading",
        text: "Optimal Measure & Reading Widths",
      },
      {
        type: "paragraph",
        text: "Reading long-form content on an ultrawide desktop monitor without a constrained container causes severe eye fatigue. By capping the article content measure at 65–75 characters (around max-w-2xl or max-w-3xl), the reading flow remains rhythmic and natural.",
      },
      {
        type: "heading",
        text: "Mobile-First Touch Architecture",
      },
      {
        type: "paragraph",
        text: "On 375px screens, interactive buttons should provide at least a 44px by 44px tap target. Hamburger menus should provide smooth transitions, prevent body scrolling when open, and close gracefully upon ESC key press or route change.",
      },
    ],
  },
];

export function getAllPosts() {
  return posts;
}

export function getFeaturedPosts() {
  return posts.slice(0, 3);
}

export function getPostById(id) {
  return posts.find((p) => p.id === String(id)) || null;
}
