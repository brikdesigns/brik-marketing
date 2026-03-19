import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Brik Designs helps small businesses show up better, work smarter, and grow faster.',
};

export default function AboutPage() {
  return (
    <section style={{ maxWidth: 800, margin: '0 auto', padding: 'var(--padding-xl) var(--padding-lg)' }}>
      <h1 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-xl)', color: 'var(--text-primary)' }}>
        Who We Are
      </h1>
      {/* TODO: About page content */}
    </section>
  );
}
