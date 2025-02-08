import { StickyList } from '@julian-at/components/sections/sticky-list';
import { env } from '@julian-at/lib/env';
import { cn } from '@julian-at/lib/utils';
import { ViewAnimation } from '@julian-at/providers/view-animation';
import { VerifiedIcon } from 'lucide-react';
import Image from 'next/image';

const APPS = [
  {
    title: 'Cursor',
    description:
      'Modern code editor with powerful AI pair programming capabilities',
    url: 'https://cursor.com',
    category: 'AI',
    featured: true,
  },
  {
    title: 'Perplexity',
    description:
      'AI-powered search that provides detailed answers with cited sources',
    url: 'https://perplexity.ai',
    category: 'AI',
    featured: true,
  },
  {
    title: 'ChatGPT',
    description:
      'Versatile AI assistant for writing, analysis, and problem-solving',
    url: 'https://chatgpt.com',
    category: 'AI',
    featured: true,
  },
  {
    title: 'Midjourney',
    description:
      'Advanced AI art generator creating stunning visuals from text descriptions',
    url: 'https://midjourney.com',
    category: 'AI',
    featured: true,
  },
  {
    title: 'Git',
    description: 'Distributed version control system',
    url: 'https://git-scm.com',
    category: 'Development',
    featured: true,
  },
  {
    title: 'Github Desktop',
    description:
      'Streamlined Git workflow with visual interface for repository management',
    url: 'https://desktop.github.com',
    category: 'Development',
    featured: true,
  },
  {
    title: 'Postman',
    description:
      'Comprehensive platform for API testing, documentation and collaboration',
    url: 'https://postman.com',
    category: 'Development',
    featured: true,
  },
  {
    title: 'Visual Studio',
    description:
      'Integrated development environment for building modern web and mobile apps',
    url: 'https://visualstudio.microsoft.com',
    category: 'Development',
    featured: true,
  },
  {
    title: 'Intellij IDEA Ultimate',
    description:
      'Feature-rich Java IDE with advanced debugging and framework support',
    url: 'https://www.jetbrains.com/idea/',
    category: 'Development',
    featured: true,
  },
  {
    title: 'PyCharm Professional',
    description:
      'Powerful Python IDE with scientific tools and web development features',
    url: 'https://www.jetbrains.com/pycharm/',
    category: 'Development',
    featured: true,
  },
  {
    title: 'WebStorm',
    description:
      'Sophisticated JavaScript IDE with full-stack development capabilities',
    url: 'https://www.jetbrains.com/webstorm/',
    category: 'Development',
    featured: true,
  },
  {
    title: 'Resend',
    description: 'Email delivery service for developers',
    url: 'https://resend.com',
    category: 'Development',
    featured: true,
  },
  {
    title: 'Cyberghost',
    description: 'Secure VPN service with global servers and strong encryption',
    url: 'https://cyberghost.com',
    category: 'Security',
    featured: true,
  },
  {
    title: 'KeePassXC',
    description: 'Free, open-source, cross-platform password manager',
    url: 'https://keepassxc.org',
    category: 'Security',
    featured: true,
  },
  {
    title: 'JIRA',
    description:
      'Robust agile project management tool for software development teams',
    url: 'https://jira.com',
    category: 'Productivity',
    featured: true,
  },
  {
    title: 'Trello',
    description:
      'Visual kanban-style board for flexible task and project organization',
    url: 'https://trello.com',
    category: 'Productivity',
    featured: true,
  },
  {
    title: 'Slack',
    description:
      'Real-time messaging platform with powerful integrations for teams',
    url: 'https://slack.com',
    category: 'Productivity',
    featured: true,
  },
  {
    title: 'Notion',
    description:
      'All-in-one workspace for notes, docs, and collaborative knowledge bases',
    url: 'https://notion.so',
    category: 'Productivity',
    featured: true,
  },
  {
    title: 'Zoom',
    description:
      'Professional video conferencing with screen sharing and recording',
    url: 'https://zoom.us',
    category: 'Productivity',
    featured: true,
  },
  {
    title: 'Discord',
    description:
      'Voice and text chat platform with customizable servers and community features',
    url: 'https://discord.com',
    category: 'Productivity',
    featured: true,
  },
  {
    title: 'Figma',
    description:
      'Collaborative interface design tool with real-time editing capabilities',
    url: 'https://figma.com',
    category: 'Design',
    featured: true,
  },
  {
    title: 'Ray.so',
    description:
      'Clean and customizable code snippet image generator for sharing',
    url: 'https://ray.so',
    category: 'Design',
    featured: true,
  },
  {
    title: 'Unsplash',
    description:
      'High-quality royalty-free photos from professional photographers',
    url: 'https://unsplash.com',
    category: 'Design',
    featured: true,
  },
  {
    title: 'Framer',
    description:
      'Interactive prototyping tool for creating responsive web designs',
    url: 'https://framer.com',
    category: 'Design',
    featured: true,
  },
  {
    title: 'Dribbble',
    description:
      'Community-driven platform for showcasing and discovering design work',
    url: 'https://dribbble.com',
    category: 'Design',
    featured: true,
  },
  {
    title: 'Behance',
    description:
      'Showcase and discover creative work from designers and creatives worldwide',
    url: 'https://behance.net',
    category: 'Design',
    featured: true,
  },
];

export const Apps = () => {
  const groups = APPS.reduce(
    (acc, app) => {
      if (!acc[app.category]) {
        acc[app.category] = [];
      }
      acc[app.category].push(app);
      return acc;
    },
    {} as Record<string, typeof APPS>
  );

  return Object.entries(groups).map(([category, apps]) => (
    <StickyList title={category} key={category}>
      <div className="grid sm:col-span-2 sm:grid-cols-2">
        {apps
          .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
          .map((app, index) => (
            <div
              key={app.title}
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
              >
                <a
                  key={app.title}
                  className={cn(
                    'flex items-start gap-4 px-4 py-8 transition-colors hover:bg-background',
                    'sm:px-8'
                  )}
                  href={app.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src={`https://img.logo.dev/${
                      new URL(app.url).hostname
                    }?token=${env.NEXT_PUBLIC_LOGO_DEV_TOKEN}`}
                    alt={app.url}
                    width={40}
                    height={40}
                    className="rounded-md ring-1 ring-foreground/5"
                    quality={100}
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-semibold tracking-tight">
                        {app.title}
                      </h3>
                      {app.featured && (
                        <VerifiedIcon className="text-success" size={16} />
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {app.description}
                    </p>
                  </div>
                </a>
              </ViewAnimation>
            </div>
          ))}
        {apps.length % 2 === 1 && (
          <div className="size-full border-t bg-dashed" />
        )}
      </div>
    </StickyList>
  ));
};
