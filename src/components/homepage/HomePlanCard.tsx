'use client';

import Link from 'next/link';
import Image from 'next/image';

interface HomePlanCardProps {
  name: string;
  slug: string;
  price: string;
  description: string;
  imageUrl?: string | null;
}

/**
 * Homepage support plan card — matches Webflow .cms-item.stacked
 * structure: image frame → price → name → description → CTA
 */
export function HomePlanCard({ name, slug, price, description, imageUrl }: HomePlanCardProps) {
  return (
    <Link href={`/plans#${slug}`} className="plan-card">
      {/* Webflow: .img-frame-service — 1:1 aspect, rounded */}
      <div className="plan-card__image-frame">
        {imageUrl ? (
          <Image src={imageUrl} alt={name} width={400} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--surface-accent)' }} />
        )}
      </div>

      <div>
        <p className="plan-card__price">{price}</p>
        <h3 className="plan-card__name">{name}</h3>
        <p className="plan-card__description">{description}</p>
      </div>

      <span className="service-card__cta" style={{ alignSelf: 'flex-start' }}>Learn More</span>
    </Link>
  );
}
