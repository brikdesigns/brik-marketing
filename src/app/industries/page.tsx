import type { Metadata } from 'next';
import Link from 'next/link';
import { getIndustryPages } from '@/lib/supabase/queries';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Brik Designs serves dental practices, real estate, SaaS companies, and small businesses.',
};

export const revalidate = 86400;

export default async function IndustriesPage() {
  const industries = await getIndustryPages();

  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--padding-xl) var(--padding-lg)' }}>
      <h1 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-xl)', color: 'var(--text-primary)', margin: 0 }}>
        Who We Support
      </h1>
      <p style={{ fontFamily: 'var(--font-family-body)', fontSize: 'var(--body-lg)', color: 'var(--text-secondary)', marginTop: 'var(--gap-md)' }}>
        We specialize in industries where trust, credibility, and clear communication matter most.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 'var(--gap-lg)',
          marginTop: 'var(--gap-xl)',
        }}
      >
        {industries.map((ind) => (
          <Link
            key={ind.slug}
            href={`/industries/${ind.slug}`}
            style={{
              display: 'block',
              padding: 'var(--padding-lg)',
              backgroundColor: 'var(--surface-primary)',
              border: '1px solid var(--border-secondary)',
              borderRadius: 'var(--border-radius-lg)',
              textDecoration: 'none',
              transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-md)', color: 'var(--text-primary)', margin: 0 }}>
              {ind.name}
            </h3>
            {ind.tagline && (
              <p style={{ fontFamily: 'var(--font-family-body)', fontSize: 'var(--body-md)', color: 'var(--text-secondary)', marginTop: 'var(--gap-sm)' }}>
                {ind.tagline}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
