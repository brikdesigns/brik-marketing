'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ServiceBadge } from '@bds/components/ui/ServiceBadge/ServiceBadge';
import type { ServiceCategory } from '@bds/components/ui/ServiceBadge/ServiceBadge';

interface HomeServiceCardProps {
  name: string;
  slug: string;
  category: ServiceCategory;
  tagline: string;
  imageUrl?: string | null;
}

/**
 * Homepage service line card — matches Webflow .cms-item.stacked.border
 * structure: image frame (accent bg) → badge → title → description → CTA
 */
export function HomeServiceCard({ name, slug, category, tagline, imageUrl }: HomeServiceCardProps) {
  return (
    <Link href={`/services/${slug}`} className="service-card">
      {/* Webflow: .img-frame-service.accent — 1:1 aspect, rounded, accent bg */}
      <div className="service-card__image-frame">
        {imageUrl ? (
          <Image src={imageUrl} alt={name} width={400} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ServiceBadge category={category} size="lg" />
          </div>
        )}
      </div>

      {/* Webflow: .badge-wrapper + .content-wrapper */}
      <div>
        <div className="service-card__badge">
          <ServiceBadge category={category} size="md" />
        </div>
        <h3 className="service-card__title">{name}</h3>
        <p className="service-card__description">{tagline}</p>
      </div>

      {/* Webflow: .button-primary-md */}
      <span className="service-card__cta">Learn more</span>
    </Link>
  );
}
