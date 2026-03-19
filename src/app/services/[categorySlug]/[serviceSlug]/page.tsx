import type { Metadata } from 'next';

type Props = { params: Promise<{ categorySlug: string; serviceSlug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug } = await params;
  return { title: serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { categorySlug, serviceSlug } = await params;

  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--padding-xl) var(--padding-lg)' }}>
      <p style={{ fontFamily: 'var(--font-family-label)', fontSize: 'var(--label-sm)', color: 'var(--text-secondary)' }}>
        {categorySlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
      </p>
      <h1 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-xl)', color: 'var(--text-primary)', marginTop: 'var(--gap-xs)' }}>
        {serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
      </h1>
      {/* TODO: Fetch service detail + offerings from Supabase */}
    </section>
  );
}
