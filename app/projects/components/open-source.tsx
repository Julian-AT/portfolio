import { StickyList } from '@julian-at/components/sections/sticky-list';
import { octokit } from '@julian-at/lib/github';
import { cn } from '@julian-at/lib/utils';
import { ViewAnimation } from '@julian-at/providers/view-animation';
import { StarIcon } from 'lucide-react';

const username = 'julian-at';
const projects = ['synth-ui', 'interiorly'];

export const OpenSource = async () => {
  const repositories = await octokit.rest.repos.listForUser({
    username,
    per_page: 100,
    type: 'all',
  });

  const repos = repositories.data
    .filter((item) => !item.archived)
    .filter((item) => item.name !== username)
    .filter((item) => item.name !== 'portfolio')
    .filter((item) => !projects.includes(item.name))
    .filter((item) => item.stargazers_count && item.stargazers_count > 0)
    .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0));

  return (
    <StickyList
      title="Open Source"
      description="I'm passionate about open source software and giving back to the community. Here are some of my contributions."
    >
      <div className="grid sm:col-span-2 sm:grid-cols-2">
        {repos.map((item, index) => (
          <div
            key={item.name}
            className={cn(
              index && 'border-t',
              index < 2 && 'sm:border-t-0',
              index % 2 === 0 && 'sm:border-r'
            )}
          >
            <ViewAnimation
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              delay={index % 2 ? 0.2 : 0}
              className="h-full"
            >
              <a
                key={item.name}
                className={cn(
                  'flex h-full flex-col items-start justify-between gap-4 px-4 py-8 transition-colors hover:bg-background',
                  'sm:px-8'
                )}
                href={`https://github.com/${item.owner.login}/${item.name}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <StarIcon size={12} />
                  <small className="text-sm">
                    {item.stargazers_count} stars
                  </small>
                </div>
              </a>
            </ViewAnimation>
          </div>
        ))}
        {repos.length % 2 === 1 && (
          <div className="size-full border-t bg-dashed" />
        )}
      </div>
    </StickyList>
  );
};
