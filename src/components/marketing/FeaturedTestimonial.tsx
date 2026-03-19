'use client';

import { CardTestimonial } from '@bds/components/ui/CardTestimonial/CardTestimonial';

interface Props {
  quote: string;
  authorName: string;
  authorRole?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
}

export function FeaturedTestimonial({ quote, authorName, authorRole, rating }: Props) {
  return (
    <CardTestimonial
      quote={quote}
      authorName={authorName}
      authorRole={authorRole}
      rating={rating}
    />
  );
}
