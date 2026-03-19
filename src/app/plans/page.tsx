import type { Metadata } from 'next';
import { getSupportPlans } from '@/lib/supabase/queries';
import { PlanTabs } from '@/components/marketing/PlanTabs';

export const metadata: Metadata = {
  title: 'Support Plans',
  description: 'Monthly subscription plans for ongoing marketing, design, and back-office support.',
};

export const revalidate = 3600;

export default async function PlansPage() {
  const rawPlans = await getSupportPlans();

  const plans = rawPlans.map((plan) => ({
    name: plan.name,
    slug: plan.slug,
    monthlyPrice: plan.monthly_price_display || 'Contact',
    annualPrice: plan.annual_price_display || 'Contact',
    description: plan.description || '',
    features: [] as string[], // TODO: populate from support_plan_services join
    discount: plan.discount_label || undefined,
    highlighted: plan.slug === 'product-support',
  }));

  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: 'var(--padding-xl) var(--padding-lg)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--gap-xl)' }}>
        <h1 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-xl)', color: 'var(--text-primary)', margin: 0 }}>
          Support Plans
        </h1>
        <p style={{ fontFamily: 'var(--font-family-body)', fontSize: 'var(--body-lg)', color: 'var(--text-secondary)', marginTop: 'var(--gap-md)', maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
          Get an experienced, done-for-you team to manage your marketing, back-office systems, or product design — without the cost of full-time hires.
        </p>
      </div>
      <PlanTabs plans={plans} />
    </section>
  );
}
