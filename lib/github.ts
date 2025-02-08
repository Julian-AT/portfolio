import { env } from '@julian-at/lib/env';
import { Octokit } from '@octokit/rest';

export const octokit = new Octokit({
  auth: env.GITHUB_TOKEN,
});
