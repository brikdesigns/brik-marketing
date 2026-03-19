import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Stories',
  description: 'See how Brik Designs has helped small businesses build stronger brands and grow faster.',
};

export default function CustomerStoriesPage() {
  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--padding-xl) var(--padding-lg)' }}>
      <h1 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-xl)', color: 'var(--text-primary)' }}>
        Customer Stories
      </h1>
      <p style={{ fontFamily: 'var(--font-family-body)', fontSize: 'var(--body-lg)', color: 'var(--text-secondary)', marginTop: 'var(--gap-md)' }}>
        Real results from real businesses.
      </p>
      {/* TODO: CustomerStoryCard grid from Supabase */}
    </section>
  );
}
