import { ProjectVideo } from '@julian-at/app/projects/components/video';
import { Prose } from '@julian-at/components/prose';
import { Section } from '@julian-at/components/section';
import { Badge } from '@julian-at/components/ui/badge';
import { env } from '@julian-at/lib/env';
import { cn } from '@julian-at/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

export const APPS = [
  {
    _title: 'Synth UI',
    description:
      'Generate User-Interfaces without writing a single line of code.',
    url: 'https://synthui.design',
    status: 'Archived',
    video: {
      url: '/assets/videos/synth_ui_clip1.mp4',
    },
    image: {
      url: '/assets/images/synth_ui_clip1.jpg',
      alt: 'Synth UI Screenshot',
      width: 1920,
      height: 1080,
    },
  },
  {
    _title: 'Interiorly AI',
    description: 'Collaborative Real-Time Interior Design',
    url: 'https://interiorly.dev',
    status: 'Active',
    image: {
      url: '/assets/images/interiorly_screen.png',
      alt: 'Interiorly AI Screenshot',
      width: 1920,
      height: 1080,
    },
  },
];

export const Apps = () => (
  <Section className="grid md:grid-cols-2">
    {APPS.map((app, index) => (
      <Link
        href={app.url}
        target={
          app.url.includes(env.VERCEL_PROJECT_PRODUCTION_URL)
            ? undefined
            : '_blank'
        }
        rel={
          app.url.includes(env.VERCEL_PROJECT_PRODUCTION_URL)
            ? undefined
            : 'noreferrer noopener'
        }
        key={app._title}
        className={cn(
          'flex flex-col gap-8 px-4 pt-4 transition-all',
          'sm:px-8 sm:pt-8',
          'hover:bg-background hover:shadow-sm',
          index && 'border-t',
          index < 2 && 'sm:border-t-0',
          index % 2 === 0 && 'sm:border-r'
        )}
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-bold text-2xl">{app._title}</h2>
            <Badge
              variant="outline"
              className={cn(
                'rounded-full',
                app.status === 'Active' && 'border-success text-success',
                app.status === 'Acquired' && 'border-warning text-warning',
                app.status === 'Shut Down' &&
                  'border-muted-foreground text-muted-foreground',
                app.status === 'Archived' && 'border-warning text-warning'
              )}
            >
              {app.status}
            </Badge>
          </div>
          <Prose>
            <p className="leading-normal">
              <Balancer>{app.description}</Balancer>
            </p>
          </Prose>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-t-lg border-x border-t">
          {app.video && <ProjectVideo url={app.video.url} />}
          {app.image && (
            <Image
              src={app.image.url}
              alt={app.image.alt}
              width={app.image.width}
              height={app.image.height}
              className="object-cover"
            />
          )}
        </div>
      </Link>
    ))}
    {APPS.length % 2 === 1 && <div className="size-full border-t bg-dashed" />}
  </Section>
);
