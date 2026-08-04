const nodemailer = require('nodemailer');

// ============================================
// HTML SANITIZER — prevents injection in email body
// ============================================
function sanitize(str) {
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#x27;');
}

// ============================================
// CORS HEADERS — required for browser fetch()
// ============================================
const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json'
};

// ============================================
// HANDLER
// ============================================
exports.handler = async function(event, context) {

  // Handle CORS preflight request
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: CORS_HEADERS, body: '' };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: CORS_HEADERS,
      body: JSON.stringify({ success: false, message: 'Method Not Allowed' })
    };
  }

  // Parse body safely
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ success: false, message: 'Invalid JSON body' })
    };
  }

  const { name, email, package: selectedPackage, message } = data;

  // Validate required fields
  if (!name || !email || !message) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ success: false, message: 'Missing required fields: name, email, message' })
    };
  }

  // Input length guards (anti-abuse)
  if (
    String(name).length    > 200  ||
    String(email).length   > 300  ||
    String(message).length > 3000 ||
    (selectedPackage && String(selectedPackage).length > 200)
  ) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ success: false, message: 'Input too long. Please shorten your message.' })
    };
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ success: false, message: 'Invalid email format' })
    };
  }

  // Sanitize all inputs before embedding in HTML email
  const safeName    = sanitize(name.trim());
  const safeEmail   = sanitize(email.trim());
  const safePackage = sanitize((selectedPackage || 'General Inquiry').trim());
  const safeMessage = sanitize(message.trim()).replace(/\n/g, '<br>');

  // Check environment variables are configured
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables');
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        success: false,
        message: 'Server configuration error. Please email directly: majdiabbassi222@gmail.com'
      })
    };
  }

  // Configure transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });

  // Build email
  const mailOptions = {
    from:    `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to:      'majdiabbassi222@gmail.com',
    replyTo: `${safeName} <${email.trim()}>`,
    subject: `New Portfolio Inquiry: ${safePackage} — ${safeName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a2e; background: #f5f5f7; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
          .header { background: linear-gradient(135deg, #a855f7 0%, #c4a3ff 100%); padding: 32px; color: white; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
          .content { padding: 32px; }
          .field { margin-bottom: 20px; }
          .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #6b7280; font-weight: 600; margin-bottom: 6px; display: block; }
          .value { font-size: 15px; color: #1a1a2e; font-weight: 500; }
          .message-box { background: #fafafa; border-radius: 12px; padding: 20px; border-left: 4px solid #a855f7; }
          .footer { background: #fafafa; padding: 24px 32px; border-top: 1px solid #e5e7eb; text-align: center; font-size: 12px; color: #9ca3af; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📨 New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name</span>
              <span class="value">${safeName}</span>
            </div>
            <div class="field">
              <span class="label">Email</span>
              <span class="value">
                <a href="mailto:${safeEmail}" style="color:#a855f7;text-decoration:none;">${safeEmail}</a>
              </span>
            </div>
            <div class="field">
              <span class="label">Service / Package</span>
              <span class="value">${safePackage}</span>
            </div>
            <div class="field">
              <span class="label">Message</span>
              <div class="message-box">${safeMessage}</div>
            </div>
          </div>
          <div class="footer">
            Sent from your portfolio contact form &bull; ${new Date().toLocaleString()}
          </div>
        </div>
      </body>
      </html>
    `,
    text: [
      'New Portfolio Contact Form Submission',
      '',
      `Name:    ${name.trim()}`,
      `Email:   ${email.trim()}`,
      `Package: ${(selectedPackage || 'General Inquiry').trim()}`,
      '',
      'Message:',
      message.trim(),
      '',
      `---`,
      `Sent from portfolio contact form at ${new Date().toLocaleString()}`
    ].join('\n')
  };

  // Send
  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ success: true, message: "Email sent successfully! I'll be in touch soon." })
    };
  } catch (error) {
    console.error('Email send error:', error.message);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        success: false,
        message: 'Failed to send email. Please try again or email directly: majdiabbassi222@gmail.com'
      })
    };
  }
};