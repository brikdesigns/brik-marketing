import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Branding, marketing, web design, and back-office services for small businesses.',
};

export default function ServicesPage() {
  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--padding-xl) var(--padding-lg)' }}>
      <h1 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-xl)', color: 'var(--text-primary)' }}>
        Our Services
      </h1>
      <p style={{ fontFamily: 'var(--font-family-body)', fontSize: 'var(--body-lg)', color: 'var(--text-secondary)', marginTop: 'var(--gap-md)' }}>
        We offer design services at every stage of your business growth — from establishment to maturity.
      </p>
      {/* TODO: Service category sections with ServiceCard grids from Supabase */}
    </section>
  );
}
