import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support Plans',
  description: 'Monthly subscription plans for ongoing marketing, design, and back-office support.',
};

export default function PlansPage() {
  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--padding-xl) var(--padding-lg)' }}>
      <h1 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-xl)', color: 'var(--text-primary)' }}>
        Support Plans
      </h1>
      <p style={{ fontFamily: 'var(--font-family-body)', fontSize: 'var(--body-lg)', color: 'var(--text-secondary)', marginTop: 'var(--gap-md)', maxWidth: 700 }}>
        Get an experienced, done-for-you team to manage your marketing, back-office systems, or product design — without the cost of full-time hires.
      </p>
      {/* TODO: Monthly/Annual tabbed PlanCard grid from Supabase */}
    </section>
  );
}
