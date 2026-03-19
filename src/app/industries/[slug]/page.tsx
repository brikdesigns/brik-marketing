import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;

  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--padding-xl) var(--padding-lg)' }}>
      <h1 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-xl)', color: 'var(--text-primary)' }}>
        {slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
      </h1>
      {/* TODO: Fetch industry page from Supabase, render topics + related services */}
    </section>
  );
}
