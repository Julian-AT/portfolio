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
    description:
      'Co-authored a research paper on AI-assisted software development methodologies, exploring real-world applications and developer workflows. Published by OSSBIG in collaboration with industry leaders.',
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
        content:
          'Conducted research exploring the capabilities and limitations of AI-assisted software development tools. Analyzed how large language models and AI agents can augment developer workflows through code generation, pair programming, and automated testing.',
      },
      {
        type: 'bulletList',
        content: [
          'Evaluated effectiveness of AI coding assistants like GitHub Copilot and Amazon CodeWhisperer.',
          'Researched impact of LLMs on developer productivity and code quality.',
          'Analyzed real-world case studies of AI tool adoption in software teams.',
        ],
      },
    ],
    image:
      'https://www.ossbig.at/wp-content/uploads/2021/08/cropped-OSSBIG-Logo_512x512.png',
    invert: true,
  },
  {
    slug: 'brz-knowledge-discovery',
    title: 'Internship',
    description:
      'Developed AI-driven solutions for enterprise automation, focusing on document processing and data retrieval in large-scale SAP environments.',
    endYear: 'Aug. 2024',
    startYear: 'Jul. 2024',
    role: 'Knowledge Discovery Intern',
    url: 'https://www.brz.gv.at/',
    type: 'Full-time',
    company: 'Bundesrechenzentrum (BRZ)',
    location: 'Vienna, Austria',
    content: [
      {
        type: 'paragraph',
        content:
          'Designed and implemented an LLM-based retrieval-augmented chatbot to facilitate intuitive access to SAP data. Improved document processing workflows by integrating OCR-powered automation, reducing manual workload and enhancing accuracy.',
      },
      {
        type: 'bulletList',
        content: [
          'Built a RAG-powered chatbot for efficient SAP data retrieval.',
          'Implemented OCR-driven document automation to streamline processing.',
          'Optimized CI/CD pipelines for AI model deployment and software workflows.',
        ],
      },
    ],
    image: 'https://brz.portal.at/fcc/TwoFactorOTP/assets/img/brz-logo.png',
  },
  {
    slug: 'stamm-automation-engineer',
    title: 'Railway Automation Engineer',
    description:
      'Designed and optimized automation systems for model railway control, enabling efficient scheduling and real-time traffic coordination.',
    endYear: '2024',
    startYear: '2023',
    role: 'Automation Engineer',
    type: 'Part-time',
    company: 'Franz Stamm GmbH',
    location: 'Langenzersdorf, Austria',
    content: [
      {
        type: 'paragraph',
        content:
          'Developed automation logic for railway control systems, ensuring smooth coordination of multiple trains across complex track layouts. Focused on reliability, scalability, and real-time responsiveness in control algorithms.',
      },
      {
        type: 'bulletList',
        content: [
          'Configured scheduling and traffic control systems for model railways.',
          'Developed automation scripts for optimizing track operations.',
          'Integrated real-time monitoring and safety mechanisms.',
        ],
      },
    ],
  },
  {
    slug: 'drei-agile-software-engineer',
    title: 'Internship',
    description:
      'Developed internal automation tools using Python, improving efficiency in business operations and IT workflows.',
    endYear: '2021',
    startYear: '2021',
    role: 'Agile Development Intern',
    url: 'https://www.three.com/',
    type: 'Full-time',
    company: 'Hutchison Drei Austria',
    location: 'Vienna, Austria',
    content: [
      {
        type: 'paragraph',
        content:
          'Worked in an agile team to build Python-based automation tools that streamlined internal processes. Assisted in debugging, testing, and optimizing operational scripts.',
      },
      {
        type: 'bulletList',
        content: [
          'Developed automation scripts to reduce manual IT workload.',
          'Improved internal reporting efficiency with Python-based tools.',
          'Collaborated with teams to enhance workflow automation strategies.',
        ],
      },
    ],
    image:
      'https://upload.wikimedia.org/wikipedia/de/thumb/2/23/Drei-Logo.svg/1200px-Drei-Logo.svg.png',
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
              {role.image || role.url ? (
                <Image
                  src={
                    role.image ||
                    `https://img.logo.dev/${new URL(role.url).hostname}?token=${env.NEXT_PUBLIC_LOGO_DEV_TOKEN}`
                  }
                  width={48}
                  height={48}
                  alt={role.title}
                  className={cn(
                    'block h-12 w-12 object-contain',
                    role.invert && 'dark:invert'
                  )}
                />
              ) : (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-border">
                  <span className="text-muted-foreground text-xl">
                    {role.company.charAt(0)}
                  </span>
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
      ) : (
        <div />
      )}
    </Section>
  );
};
