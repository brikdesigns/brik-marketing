import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Brik Designs serves dental practices, real estate, SaaS companies, and small businesses.',
};

export default function IndustriesPage() {
  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--padding-xl) var(--padding-lg)' }}>
      <h1 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-xl)', color: 'var(--text-primary)' }}>
        Who We Support
      </h1>
      {/* TODO: Industry page cards from Supabase */}
    </section>
  );
}
