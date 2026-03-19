import { ServiceLineGrid } from '@/components/marketing/ServiceLineGrid';
import { SupportPlanGrid } from '@/components/marketing/SupportPlanGrid';
import { FeaturedTestimonial } from '@/components/marketing/FeaturedTestimonial';
import { HeroButtons } from '@/components/marketing/HeroButtons';
import { AnalysisCta, BottomCta, ViewStoriesButton } from '@/components/marketing/CtaButtons';

// TODO: Replace with Supabase queries once migration is run
// import { getServiceCategories, getSupportPlans, getCustomerStories } from '@/lib/supabase/queries';

const serviceLines = [
  { name: 'Brand Design', slug: 'brand-design', category: 'brand' as const, tagline: 'Build a lasting, consistent brand that builds trust' },
  { name: 'Marketing Design', slug: 'marketing-design', category: 'marketing' as const, tagline: 'Show up where it matters — and make it count' },
  { name: 'Information Design', slug: 'information-design', category: 'information' as const, tagline: 'Make the complicated simple' },
  { name: 'Back-Office Design', slug: 'back-office-design', category: 'service' as const, tagline: 'The systems behind the scenes that keep you running' },
  { name: 'Product Design', slug: 'product-design', category: 'product' as const, tagline: 'Build digital products people actually use' },
];

const supportPlans = [
  { name: 'Marketing Support', slug: 'marketing-support', price: '$1,250', period: '/month', description: 'We act as your marketing department — handling everything from campaigns and emails to graphics and strategy.', features: ['Web design & updates', 'Email marketing', 'Social media graphics', 'Landing pages', 'Marketing strategy'] },
  { name: 'Back-Office Support', slug: 'back-office-support', price: '$1,250', period: '/month', description: 'We handle the behind-the-scenes work — SOPs, file organization, CRM setup, and process automation.', features: ['SOP creation', 'File organization', 'CRM setup & cleanup', 'Automation & AI', 'Software audits'] },
  { name: 'Product Support', slug: 'product-support', price: '$2,500', period: '/month', description: 'Ongoing product design — UX/UI, design systems, and development for SaaS, apps, and digital products.', features: ['UX/UI design', 'Design systems', 'Prototyping', 'Mobile & web apps', 'Content design'], highlighted: true },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--padding-huge) var(--padding-lg)', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-huge)', color: 'var(--text-primary)', lineHeight: 1.1, margin: 0 }}>
          Marketing That Works.
          <br />
          Design That Builds.
        </h1>
        <p style={{ fontFamily: 'var(--font-family-body)', fontSize: 'var(--body-lg)', color: 'var(--text-secondary)', maxWidth: 640, margin: 'var(--gap-lg) auto 0' }}>
          We help small businesses show up better, work smarter, and grow faster — brik by brik.
        </p>
        <HeroButtons />
      </section>

      {/* Services */}
      <section style={{ backgroundColor: 'var(--surface-secondary)', padding: 'var(--padding-xl) var(--padding-lg)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--gap-xl)' }}>
            <h2 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-lg)', color: 'var(--text-primary)', margin: 0 }}>
              What We Do
            </h2>
            <p style={{ fontFamily: 'var(--font-family-body)', fontSize: 'var(--body-md)', color: 'var(--text-secondary)', maxWidth: 600, margin: 'var(--gap-md) auto 0' }}>
              From branding to websites to behind-the-scenes systems, we help you build a business that looks good and works better.
            </p>
          </div>
          <ServiceLineGrid items={serviceLines} />
        </div>
      </section>

      {/* Support Plans */}
      <section style={{ padding: 'var(--padding-xl) var(--padding-lg)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--gap-xl)' }}>
            <h2 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-lg)', color: 'var(--text-primary)', margin: 0 }}>
              Monthly Subscription
            </h2>
            <p style={{ fontFamily: 'var(--font-family-body)', fontSize: 'var(--body-md)', color: 'var(--text-secondary)', maxWidth: 600, margin: 'var(--gap-md) auto 0' }}>
              We&apos;re more than a design studio — we&apos;re your strategic marketing partner.
            </p>
          </div>
          <SupportPlanGrid items={supportPlans} />
        </div>
      </section>

      {/* Free Analysis CTA */}
      <section style={{ backgroundColor: 'var(--surface-secondary)', padding: 'var(--padding-xl) var(--padding-lg)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnalysisCta />
        </div>
      </section>

      {/* Customer Story */}
      <section style={{ padding: 'var(--padding-xl) var(--padding-lg)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-lg)', color: 'var(--text-primary)', margin: 0 }}>
            Latest Customer Story
          </h2>
          <div style={{ marginTop: 'var(--gap-lg)' }}>
            <FeaturedTestimonial
              quote="Brik Designs has been the best and most transparent marketing company we have ever worked with."
              authorName="Dr. Haneen Matalgah"
              authorRole="Co-Founder, Memphis Dental Studio"
              rating={5}
            />
          </div>
          <ViewStoriesButton />
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: 'var(--surface-brand-primary)', padding: 'var(--padding-xl) var(--padding-lg)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-lg)', color: 'var(--text-inverse)', margin: 0 }}>
          Get in Touch
        </h2>
        <p style={{ fontFamily: 'var(--font-family-body)', fontSize: 'var(--body-md)', color: 'var(--text-inverse)', opacity: 0.9, margin: 'var(--gap-md) auto 0' }}>
          Starting a new project or want to collaborate with us?
        </p>
        <BottomCta />
      </section>
    </>
  );
}
