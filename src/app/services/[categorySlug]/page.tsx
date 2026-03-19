import type { Metadata } from 'next';

type Props = { params: Promise<{ categorySlug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = await params;
  return { title: categorySlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) };
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { categorySlug } = await params;

  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--padding-xl) var(--padding-lg)' }}>
      <h1 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-xl)', color: 'var(--text-primary)' }}>
        {categorySlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
      </h1>
      {/* TODO: Fetch service category + services from Supabase */}
    </section>
  );
}
