import Link from 'next/link';

const footerNav = {
  services: [
    { label: 'All Services', href: '/services' },
    { label: 'Support Plans', href: '/plans' },
    { label: 'Free Analysis', href: '/free-marketing-analysis' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Customer Stories', href: '/customer-stories' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--surface-secondary)',
        borderTop: '1px solid var(--border-secondary)',
        padding: 'var(--padding-xl) var(--padding-lg)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--gap-xl)',
        }}
      >
        {/* Brand column */}
        <div>
          <span
            style={{
              fontFamily: 'var(--font-family-heading)',
              fontSize: 'var(--heading-md)',
              fontWeight: 'bold',
              color: 'var(--text-brand-primary)',
            }}
          >
            brik
          </span>
          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: 'var(--body-sm)',
              color: 'var(--text-secondary)',
              marginTop: 'var(--gap-sm)',
            }}
          >
            Marketing that works. Design that builds.
          </p>
        </div>

        {/* Services */}
        <FooterColumn title="Services" links={footerNav.services} />

        {/* Company */}
        <FooterColumn title="Company" links={footerNav.company} />

        {/* Legal */}
        <FooterColumn title="Legal" links={footerNav.legal} />
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          marginTop: 'var(--gap-xl)',
          paddingTop: 'var(--padding-md)',
          borderTop: '1px solid var(--border-muted)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-family-body)',
            fontSize: 'var(--body-xs)',
            color: 'var(--text-muted)',
          }}
        >
          &copy; {new Date().getFullYear()} Brik Designs LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4
        style={{
          fontFamily: 'var(--font-family-label)',
          fontSize: 'var(--label-md)',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: 'var(--gap-md)',
        }}
      >
        {title}
      </h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {links.map((link) => (
          <li key={link.href} style={{ marginBottom: 'var(--gap-xs)' }}>
            <Link
              href={link.href}
              style={{
                fontFamily: 'var(--font-family-body)',
                fontSize: 'var(--body-sm)',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
