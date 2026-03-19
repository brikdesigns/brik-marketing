import { NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/server';

/**
 * Lead capture endpoint.
 * Called from the Get Started and Free Marketing Analysis forms.
 * Creates a company (type: 'lead') and contact in Supabase.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company_name, phone, plan, service, message, source } = body;

    // Basic validation
    if (!name || !email || !company_name) {
      return NextResponse.json(
        { error: 'Name, email, and company name are required.' },
        { status: 400 }
      );
    }

    // TODO: Verify reCAPTCHA token
    // const recaptchaValid = await verifyRecaptcha(body.recaptcha_token);
    // if (!recaptchaValid) return NextResponse.json({ error: 'Invalid captcha' }, { status: 400 });

    const supabase = createServiceClient();

    // Create company as lead
    const { data: company, error: companyError } = await supabase
      .from('companies')
      .insert({
        name: company_name,
        type: 'lead',
        status: 'new',
        notes: [
          source && `Source: ${source}`,
          plan && `Interested in plan: ${plan}`,
          service && `Interested in service: ${service}`,
          message && `Message: ${message}`,
        ]
          .filter(Boolean)
          .join('\n'),
      })
      .select()
      .single();

    if (companyError) throw companyError;

    // Create primary contact
    const { error: contactError } = await supabase.from('contacts').insert({
      company_id: company.id,
      full_name: name,
      email,
      phone: phone || null,
      role: 'admin',
      is_primary: true,
    });

    if (contactError) throw contactError;

    // TODO: Send confirmation email via Resend
    // TODO: Notify Brik team (Slack/email)

    return NextResponse.json({
      success: true,
      message: "Thanks! We'll be in touch within 1 business day.",
    });
  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
