import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getIndustryPageBySlug } from '@/lib/supabase/queries';
import { HeroButtons } from '@/components/marketing/HeroButtons';

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 86400;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const page = await getIndustryPageBySlug(slug);
    return {
      title: page.name,
      description: page.tagline || `Brik Designs for ${page.name}`,
    };
  } catch {
    return { title: 'Industry Not Found' };
  }
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;

  let page;
  try {
    page = await getIndustryPageBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <section style={{ maxWidth: 800, margin: '0 auto', padding: 'var(--padding-xl) var(--padding-lg)' }}>
        <h1 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-xl)', color: 'var(--text-primary)', margin: 0 }}>
          {page.name}
        </h1>
        {page.tagline && (
          <p style={{ fontFamily: 'var(--font-family-body)', fontSize: 'var(--body-xl)', color: 'var(--text-brand-primary)', marginTop: 'var(--gap-sm)' }}>
            {page.tagline}
          </p>
        )}
        {page.intro_title && (
          <h2 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-md)', color: 'var(--text-primary)', marginTop: 'var(--gap-xl)' }}>
            {page.intro_title}
          </h2>
        )}
        {page.intro_description && (
          <p style={{ fontFamily: 'var(--font-family-body)', fontSize: 'var(--body-lg)', color: 'var(--text-secondary)', marginTop: 'var(--gap-md)', lineHeight: 1.7 }}>
            {page.intro_description}
          </p>
        )}
      </section>

      {/* Topic sections */}
      {page.industry_page_topics
        ?.sort((a: { topic_number: number }, b: { topic_number: number }) => a.topic_number - b.topic_number)
        .map((topic: { topic_number: number; title: string; description: string }) => (
          <section
            key={topic.topic_number}
            style={{
              padding: 'var(--padding-lg) var(--padding-lg)',
              backgroundColor: topic.topic_number % 2 === 0 ? 'var(--surface-secondary)' : 'transparent',
            }}
          >
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              <h3 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-sm)', color: 'var(--text-primary)', margin: 0 }}>
                {topic.title}
              </h3>
              {topic.description && (
                <p style={{ fontFamily: 'var(--font-family-body)', fontSize: 'var(--body-md)', color: 'var(--text-secondary)', marginTop: 'var(--gap-sm)', lineHeight: 1.6 }}>
                  {topic.description}
                </p>
              )}
            </div>
          </section>
        ))}

      {/* CTA */}
      <section style={{ maxWidth: 800, margin: '0 auto', padding: 'var(--padding-xl) var(--padding-lg)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-lg)', color: 'var(--text-primary)', margin: 0 }}>
          Ready to get started?
        </h2>
        <HeroButtons />
      </section>
    </>
  );
}
