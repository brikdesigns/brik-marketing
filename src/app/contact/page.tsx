import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Brik Designs. We\'d love to hear about your project.',
};

export default function ContactPage() {
  return (
    <section style={{ maxWidth: 700, margin: '0 auto', padding: 'var(--padding-xl) var(--padding-lg)' }}>
      <h1 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--heading-xl)', color: 'var(--text-primary)' }}>
        Get in Touch
      </h1>
      <p style={{ fontFamily: 'var(--font-family-body)', fontSize: 'var(--body-lg)', color: 'var(--text-secondary)', marginTop: 'var(--gap-md)' }}>
        Starting a new project or want to collaborate with us?
      </p>
      {/* TODO: Contact form → POST /api/contact */}
    </section>
  );
}
