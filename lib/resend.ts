import { env } from '@julian-at/lib/env';
import { Resend } from 'resend';

export const resend = new Resend(env.RESEND_TOKEN);
