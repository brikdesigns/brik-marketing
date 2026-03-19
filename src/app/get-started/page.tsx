import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started',
  description: 'Start your project with Brik Designs. Tell us about your business and what you need.',
};

export default function GetStartedPage() {
  return (
    <section style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--padding-xl) var(--padding-lg)' }}>
      <h1 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-xl)', color: 'var(--text-primary)' }}>
        Get Started
      </h1>
      <p style={{ fontFamily: 'var(--font-family-body)', fontSize: 'var(--body-lg)', color: 'var(--text-secondary)', marginTop: 'var(--gap-md)' }}>
        Tell us about your business and what you&apos;re looking for. We&apos;ll be in touch within 1 business day.
      </p>
      {/* TODO: LeadCaptureForm component → POST /api/leads */}
    </section>
  );
}
