import { Prose } from '@julian-at/components/prose';
import { Section } from '@julian-at/components/section';
import { env } from '@julian-at/lib/env';
import { cn } from '@julian-at/lib/utils';
import { ViewAnimation } from '@julian-at/providers/view-animation';
import Image from 'next/image';
import Link from 'next/link';

export const ROLES = [
  {
    slug: 'ossbig-paper',
    title: 'AI-Assisted Dev Paper',
    description: 'Co-authored a technical research paper exploring AI-assisted software development methodologies and practical applications, published by OSSBIG. The paper examines implementation patterns and developer workflows.',
    endYear: '2024',
    startYear: '2024',
    role: 'Co-author',
    url: 'https://www.ossbig.at/',
    type: 'Research Publication', 
    company: 'OSSBIG',
    location: 'Vienna, Austria',
    content: [
      {
        type: 'paragraph',
        content: 'Detailed description of paper and findings...'
      }
    ],
    image: 'https://www.ossbig.at/wp-content/uploads/2021/08/cropped-OSSBIG-Logo_512x512.png',
    invert: true
  },
  {
    slug: 'brz-knowledge-discovery',
    title: 'Internship',
    description: 'Built a RAG-powered chatbot interface for intuitive SAP data access and retrieval. Implemented document automation with OCR technology for efficient processing. Enhanced development workflows through CI/CD pipeline implementation.',
    endYear: 'Aug. 2024',
    startYear: 'Jul. 2024',
    role: 'Knowledge Discovery',
    url: 'https://www.brz.gv.at/',
    type: 'Full-time',
    company: 'Bundesrechenzentrum (BRZ)',
    location: 'Vienna, Austria',
    content: [
      {
        type: 'paragraph',
        content: 'Detailed description of role and achievements...'
      }
    ],
    image: 'https://brz.portal.at/fcc/TwoFactorOTP/assets/img/brz-logo.png'
  },
  {
    slug: 'stamm-automation-engineer',
    title: 'Railway Automation Engineer',
    description: 'Configured and managed automation systems for model railway layouts. Set up scheduling and traffic control for coordinating multiple trains across complex track configurations.',
    endYear: '2024',
    startYear: '2023',
    role: 'Automation Engineer',
    type: 'Part-time',
    company: 'Franz Stamm GmbH',
    location: 'Langenzersdorf, Austria',
    content: [
      {
        type: 'paragraph',
        content: 'Detailed description of role and achievements...'
      }
    ],
  },
  {
    slug: 'drei-agile-software-engineer',
    title: 'Internship',
    description: 'Developed and maintained Python-based internal tools to streamline workflows and enhance operational efficiency. Collaborated in an agile team environment to deliver impactful process improvements.',
    endYear: '2021',
    startYear: '2021',
    role: 'Agile Development',
    url: 'https://www.three.com/',
    type: 'Full-time',
    company: 'Hutchison Drei Austria',
    location: 'Vienna, Austria',
    content: [
      {
        type: 'paragraph',
        content: 'Detailed description of role and achievements...'
      }
    ],
    image: 'https://upload.wikimedia.org/wikipedia/de/thumb/2/23/Drei-Logo.svg/1200px-Drei-Logo.svg.png'
  },
];


export const Roles = () => {
  if (!ROLES.length) {
    return <div>No roles found</div>;
  }

  return (
    <Section className="grid sm:grid-cols-2">
      {ROLES.map((role, index) => (
        <ViewAnimation
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          delay={index % 2 ? 0.2 : 0}
          className={cn(
            index % 2 === 0 ? 'sm:border-r' : '',
            index < ROLES.length - 2 ? 'border-b' : ''
          )}
          key={role.slug}
        >
          <Link
            href={`/work/${role.slug}`}
            className={cn(
              'flex flex-col items-start gap-6 px-4 py-8 transition-colors hover:bg-background',
              'sm:flex-row sm:px-8'
            )}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center">
            { role.image || role.url ? (
              <Image
              src={role.image || `https://img.logo.dev/${new URL(role.url).hostname}?token=${env.NEXT_PUBLIC_LOGO_DEV_TOKEN}`}
              width={48}
              height={48}
              alt={role.title}
              className={cn("block h-12 w-12 object-contain", role.invert && "dark:invert")}
            />
            ) : (
            <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-border'>
              <span className='text-muted-foreground text-xl'>{role.company.charAt(0)}</span>
              </div>
            )}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-xl tracking-tight">
                <span className="block leading-tight">{role.role}</span>
                <span className="block text-muted-foreground">
                  {role.title}
                </span>
              </h2>
              <Prose className="prose-sm">
                <p>{role.description}</p>
              </Prose>
              <p className="text-muted-foreground text-sm">
                {role.type} &bull; {role.startYear} &mdash;{' '}
                {role.endYear ?? 'Present'} &bull; {role.location}
              </p>
            </div>
          </Link>
        </ViewAnimation>
      ))}
      {ROLES.length % 2 ? (
        <div className="hidden border-t bg-dashed sm:block" />
      ) : <div />}
    </Section>
  );
};
