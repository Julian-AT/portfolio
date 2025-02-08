import { Octokit } from '@octokit/rest';
import { env } from '@julian-at/lib/env';

export const octokit = new Octokit({
  auth: env.GITHUB_TOKEN,
});
