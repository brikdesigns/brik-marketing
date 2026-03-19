'use client';

import Link from 'next/link';
import { CardFeature } from '@bds/components/ui/CardFeature/CardFeature';
import { ServiceBadge } from '@bds/components/ui/ServiceBadge/ServiceBadge';
import { Button } from '@bds/components/ui/Button/Button';

type ServiceCategory = 'brand' | 'marketing' | 'information' | 'product' | 'service';

interface ServiceLine {
  name: string;
  slug: string;
  category: ServiceCategory;
  tagline: string;
}

export function ServiceLineGrid({ items }: { items: ServiceLine[] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 'var(--gap-lg)',
      }}
    >
      {items.map((line) => (
        <CardFeature
          key={line.slug}
          icon={
            <ServiceBadge category={line.category} mode="badge" size="lg" />
          }
          title={line.name}
          description={line.tagline}
          action={
            <Link href={`/services/${line.slug}`}>
              <Button variant="ghost" size="sm">
                Learn more
              </Button>
            </Link>
          }
        />
      ))}
    </div>
  );
}
