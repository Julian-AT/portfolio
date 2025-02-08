import type { NextConfig } from 'next';
import { createSecureHeaders } from 'next-secure-headers';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { hostname: 'www.gravatar.com', protocol: 'https' },
      { hostname: 'assets.basehub.com', protocol: 'https' },
      { hostname: 'img.logo.dev', protocol: 'https' },
      { hostname: 'i.scdn.co', protocol: 'https' },
      { hostname: 'shared.akamai.steamstatic.com', protocol: 'https' },
      { hostname: 'oku.ams3.cdn.digitaloceanspaces.com', protocol: 'https' },
      { hostname: 'upload.wikimedia.org', protocol: 'https' },
      { hostname: 'www.ossbig.at', protocol: 'https' },
      { hostname: 'brz.portal.at', protocol: 'https' },
    ],
  },

  // biome-ignore lint/suspicious/useAwait: "headers" is async
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          // HSTS Preload: https://hstspreload.org/
          forceHTTPSRedirect: [
            true,
            { maxAge: 63072000, includeSubDomains: true, preload: true },
          ],
        }),
      },
    ];
  },

  // biome-ignore lint/suspicious/useAwait: "redirects" is async
  async redirects() {
    return [
      {
        source: '/apps',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/service',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/code',
        destination: 'https://github.com/julian-at',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
