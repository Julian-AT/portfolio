import { Resend } from 'resend';
import { env } from '@julian-at/lib/env';

export const resend = new Resend(env.RESEND_TOKEN);
