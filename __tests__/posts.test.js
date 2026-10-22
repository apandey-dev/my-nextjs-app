import { getAllPosts, getFeaturedPosts, getPostById } from '../data/posts';

describe('Blog Data API & Lookup Functions', () => {
  test('getAllPosts returns at least 3 blog posts with required fields', () => {
    const posts = getAllPosts();
    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThanOrEqual(3);

    posts.forEach((post) => {
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('excerpt');
      expect(post).toHaveProperty('date');
      expect(post).toHaveProperty('readTime');
      expect(post).toHaveProperty('category');
      expect(post).toHaveProperty('content');
      expect(Array.isArray(post.content)).toBe(true);
      expect(post.content.length).toBeGreaterThan(0);
    });
  });

  test('getFeaturedPosts returns exactly 3 posts', () => {
    const featured = getFeaturedPosts();
    expect(featured.length).toBe(3);
    expect(featured[0].id).toBe('1');
    expect(featured[1].id).toBe('2');
    expect(featured[2].id).toBe('3');
  });

  test('getPostById retrieves the correct post by numeric or string ID', () => {
    const post = getPostById('1');
    expect(post).not.toBeNull();
    expect(post.id).toBe('1');
    expect(post.slug).toBe('architecting-clean-routing-nextjs');

    // Also supports number coercion
    const postByNumber = getPostById(2);
    expect(postByNumber).not.toBeNull();
    expect(postByNumber.id).toBe('2');
  });

  test('getPostById returns null for nonexistent ID', () => {
    const missing = getPostById('9999');
    expect(missing).toBeNull();
  });
});
