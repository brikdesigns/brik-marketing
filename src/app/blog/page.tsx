import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Marketing tips, design insights, and small business resources from Brik Designs.',
};

export default function BlogPage() {
  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--padding-xl) var(--padding-lg)' }}>
      <h1 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-xl)', color: 'var(--text-primary)' }}>
        Blog
      </h1>
      <p style={{ fontFamily: 'var(--font-family-body)', fontSize: 'var(--body-lg)', color: 'var(--text-secondary)', marginTop: 'var(--gap-md)' }}>
        Marketing tips, design insights, and small business resources.
      </p>
      {/* TODO: Blog post list (MDX-based initially, Supabase later) */}
    </section>
  );
}
