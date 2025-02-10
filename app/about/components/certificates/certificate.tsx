import React from 'react';
import { Prose } from '@julian-at/components/prose';
import { Section } from '@julian-at/components/section';
import { env } from '@julian-at/lib/env';
import { cn } from '@julian-at/lib/utils';
import { ViewAnimation } from '@julian-at/providers/view-animation';
import Image from 'next/image';
import Link from 'next/link';

interface Certificate {
  title: string;
  description: string;
  date: string;
  image: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    title: 'Cisco CCNA',
    description:
      'Cisco Certified Network Associate - Comprehensive networking certification covering routing, switching, security and network management',
    date: '2023-06-15', // Using a more realistic past date
    image:
      'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html',
  },
  {
    title: 'Elmayer Business Etiquette',
    description:
      'Professional business etiquette certification from the renowned Elmayer School - Covering international business protocols, communication standards and corporate culture',
    date: '2023-09-01',
    image: 'https://elmayer.at/etikette/',
  },
  {
    title: 'Sicherheitsvertrauenspersonen',
    description:
      'Austrian Safety Representative Certification - Qualified to oversee workplace safety standards and emergency protocols in corporate environments',
    date: '2023-11-30',
    image:
      'https://www.htl-donaustadt.at/aktivitaeten/details?tx_ttnews%5Btt_news%5D=262&cHash=c163afdffb41225669a7fbf93353b137',
  },
];

const PersonalCertificate = () => {
  return (
    <Section className="grid sm:grid-cols-2">
      {CERTIFICATES.map((certificate, index) => (
        <ViewAnimation
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          delay={index % 2 ? 0.2 : 0}
          className={cn(
            index % 2 === 0 ? 'sm:border-r' : '',
            index < CERTIFICATES.length - 2 ? 'border-b' : ''
          )}
          key={index}
        >
          <Link
            href={`/work/${certificate.title}`}
            className={cn(
              'flex flex-col items-start gap-6 px-4 py-8 transition-colors hover:bg-background',
              'sm:flex-row sm:px-8'
            )}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center">
              {certificate.image ? (
                <Image
                  src={`https://img.logo.dev/${
                    new URL(certificate.image).hostname
                  }?token=${env.NEXT_PUBLIC_LOGO_DEV_TOKEN}`}
                  alt={certificate.image}
                  width={40}
                  height={40}
                  className="rounded-md ring-1 ring-foreground/5"
                  quality={100}
                />
              ) : (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-border">
                  <span className="text-muted-foreground text-xl">
                    {certificate.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-xl tracking-tight">
                <span className="block leading-tight">{certificate.title}</span>
                <span className="block text-muted-foreground">
                  {certificate.description}
                </span>
              </h2>
              <Prose className="prose-sm">
                <p>{certificate.description}</p>
              </Prose>
              <p className="text-muted-foreground text-sm">
                {certificate.date}
              </p>
            </div>
          </Link>
        </ViewAnimation>
      ))}
      {CERTIFICATES.length % 2 ? (
        <div className="hidden border-t bg-dashed sm:block" />
      ) : (
        <div />
      )}
    </Section>
  );
};

export default PersonalCertificate;
