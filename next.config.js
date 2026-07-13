/** @type {import('next').NextConfig} */

// Security headers per JAVERA Security Standards (javera-dev-standards/SECURITY-STANDARDS.md).
// CSP is scoped to what this site actually loads: self-hosted assets/fonts (next/font is
// self-hosted, no fonts.googleapis.com at runtime), Google Maps embed (footer iframe) and
// the Web3Forms API (reserved for a future contact form). Extend this list before adding any
// new third-party script/embed — do not widen with a blanket allow.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://maps.google.com https://www.google.com https://maps.gstatic.com",
  "font-src 'self' data:",
  "frame-src https://maps.google.com https://www.google.com",
  "connect-src 'self' https://api.web3forms.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://api.web3forms.com",
  "frame-ancestors 'self'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
