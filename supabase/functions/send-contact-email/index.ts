import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { firstName, lastName, email, company, message }: ContactFormData = await req.json();

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from('contact_submissions')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email: email,
        company: company,
        message: message,
        submitted_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      throw new Error(`Failed to save contact submission: ${error.message}`);
    }

    try {
      const emailBody = `
New Contact Form Submission

----------------------------

Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company}

Message:
${message}

----------------------------
Submitted at: ${new Date().toISOString()}

To reply, send an email to: ${email}
      `;

      await fetch('https://api.smtp2go.com/v3/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: Deno.env.get('SMTP2GO_API_KEY') || 'demo',
          to: ['office@4hsafety.com'],
          sender: 'noreply@4hsafety.com',
          subject: `New Contact Form: ${firstName} ${lastName} from ${company}`,
          text_body: emailBody,
        }),
      });
    } catch (emailError) {
      console.error('Email sending failed (non-critical):', emailError);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Contact form submitted successfully', data }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to process contact form' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});