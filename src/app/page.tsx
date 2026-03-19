export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: 'var(--padding-huge) var(--padding-lg)',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-family-heading)',
            fontSize: 'var(--heading-huge)',
            color: 'var(--text-primary)',
            lineHeight: 1.1,
          }}
        >
          Marketing That Works.
          <br />
          Design That Builds.
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-family-body)',
            fontSize: 'var(--body-lg)',
            color: 'var(--text-secondary)',
            maxWidth: 640,
            margin: 'var(--gap-lg) auto 0',
          }}
        >
          We help small businesses show up better, work smarter, and grow faster
          — brik by brik.
        </p>
        <div style={{ marginTop: 'var(--gap-xl)', display: 'flex', gap: 'var(--gap-md)', justifyContent: 'center' }}>
          <a
            href="/services"
            style={{
              fontFamily: 'var(--font-family-label)',
              fontSize: 'var(--label-md)',
              backgroundColor: 'var(--background-brand-primary)',
              color: 'var(--text-inverse)',
              padding: 'var(--padding-sm) var(--padding-lg)',
              borderRadius: 'var(--border-radius-md)',
              textDecoration: 'none',
            }}
          >
            Explore Design Services
          </a>
          <a
            href="/contact"
            style={{
              fontFamily: 'var(--font-family-label)',
              fontSize: 'var(--label-md)',
              backgroundColor: 'transparent',
              color: 'var(--text-brand-primary)',
              padding: 'var(--padding-sm) var(--padding-lg)',
              borderRadius: 'var(--border-radius-md)',
              border: '1px solid var(--border-brand-primary)',
              textDecoration: 'none',
            }}
          >
            Let&apos;s Talk
          </a>
        </div>
      </section>

      {/* Services preview — will be CMS-driven */}
      <section
        style={{
          backgroundColor: 'var(--surface-secondary)',
          padding: 'var(--padding-xl) var(--padding-lg)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--font-family-heading)',
              fontSize: 'var(--heading-lg)',
              color: 'var(--text-primary)',
            }}
          >
            What We Do
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: 'var(--body-md)',
              color: 'var(--text-secondary)',
              maxWidth: 600,
              margin: 'var(--gap-md) auto 0',
            }}
          >
            From branding to websites to behind-the-scenes systems, we help you
            build a business that looks good and works better.
          </p>
          {/* TODO: ServiceCard grid from Supabase */}
          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: 'var(--body-sm)',
              color: 'var(--text-muted)',
              marginTop: 'var(--gap-xl)',
            }}
          >
            [Service cards will render here from Supabase data]
          </p>
        </div>
      </section>

      {/* Plans preview */}
      <section style={{ padding: 'var(--padding-xl) var(--padding-lg)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--font-family-heading)',
              fontSize: 'var(--heading-lg)',
              color: 'var(--text-primary)',
            }}
          >
            Monthly Subscription
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: 'var(--body-md)',
              color: 'var(--text-secondary)',
              maxWidth: 600,
              margin: 'var(--gap-md) auto 0',
            }}
          >
            We&apos;re more than a design studio — we&apos;re your strategic marketing
            partner.
          </p>
          {/* TODO: PlanCard grid from Supabase */}
          <p
            style={{
              fontFamily: 'var(--font-family-body)',
              fontSize: 'var(--body-sm)',
              color: 'var(--text-muted)',
              marginTop: 'var(--gap-xl)',
            }}
          >
            [Plan cards will render here from Supabase data]
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: 'var(--surface-brand-primary)',
          padding: 'var(--padding-xl) var(--padding-lg)',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-family-heading)',
            fontSize: 'var(--heading-lg)',
            color: 'var(--text-inverse)',
          }}
        >
          Get in Touch
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-family-body)',
            fontSize: 'var(--body-md)',
            color: 'var(--text-inverse)',
            opacity: 0.9,
            margin: 'var(--gap-md) auto 0',
          }}
        >
          Starting a new project or want to collaborate with us?
        </p>
        <a
          href="/contact"
          style={{
            display: 'inline-block',
            marginTop: 'var(--gap-lg)',
            fontFamily: 'var(--font-family-label)',
            fontSize: 'var(--label-md)',
            backgroundColor: 'var(--grayscale--white)',
            color: 'var(--brand--primary)',
            padding: 'var(--padding-sm) var(--padding-lg)',
            borderRadius: 'var(--border-radius-md)',
            textDecoration: 'none',
          }}
        >
          Let&apos;s Talk
        </a>
      </section>
    </>
  );
}
