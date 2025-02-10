import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    RESEND_TOKEN: z.string().min(1).startsWith('re_'),
    BETTERSTACK_API_KEY: z.string().min(1),
    BETTERSTACK_URL: z.string().min(1),
    GITHUB_TOKEN: z.string().min(1).startsWith('ghp_'),
    KV_REST_API_URL: z.string().min(1).url(),
    KV_REST_API_TOKEN: z.string().min(1),
    RESEND_FROM: z.string().min(1).email(),
    RESEND_TO: z.string().min(1).email(),
    VERCEL_TOKEN: z.string().min(1).optional(),
    EDGE_CONFIG: z.string().min(1).url(),
    EDGE_CONFIG_ID: z.string().min(1).startsWith('ecfg_'),
    SPOTIFY_CLIENT_ID: z.string().min(1),
    SPOTIFY_CLIENT_SECRET: z.string().min(1),
    SPOTIFY_REFRESH_TOKEN: z.string().min(1),
    VERCEL_PROJECT_PRODUCTION_URL: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_LOGO_DEV_TOKEN: z.string().min(1).startsWith('pk_'),
  },
  runtimeEnv: {
    RESEND_TOKEN: process.env.RESEND_TOKEN,
    BETTERSTACK_API_KEY: process.env.BETTERSTACK_API_KEY,
    BETTERSTACK_URL: process.env.BETTERSTACK_URL,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    KV_REST_API_URL: process.env.KV_REST_API_URL,
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
    RESEND_FROM: process.env.RESEND_FROM,
    RESEND_TO: process.env.RESEND_TO,
    VERCEL_TOKEN: process.env.VERCEL_TOKEN,
    EDGE_CONFIG: process.env.EDGE_CONFIG,
    EDGE_CONFIG_ID: process.env.EDGE_CONFIG_ID,
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
    NEXT_PUBLIC_LOGO_DEV_TOKEN: process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN,
    VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
  },
});
