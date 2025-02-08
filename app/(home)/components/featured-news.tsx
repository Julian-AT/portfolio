import { ThirdsSection } from '@julian-at/components/sections/thirds';
import { cn } from '@julian-at/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export const FeaturedNews = () => (
  <ThirdsSection
    title="AI Assisted Dev Paper"
    description="AI Assisted Software Development is a new way of developing software that uses AI to assist developers in their work. It is a new way of developing software that uses AI to assist developers in their work."
    caption="Latest feature"
    reverse
    buttons={[
      {
        label: 'Keep reading',
        href: 'https://www.ossbig.at/verein/ai-assisted-software-development/',
      },
    ]}
  >
    <div
      className={cn(
        'relative aspect-video overflow-hidden bg-dashed px-4 pt-3',
        'sm:px-8 sm:pt-8'
      )}
    >
      <Link href="https://www.ossbig.at/verein/ai-assisted-software-development/">
        <Image
          src="/assets/images/ossbig_header.png"
          alt="Featured news image"
          width={800}
          height={450}
          className="h-full w-full rounded-t-lg border border-secondary object-cover sm:rounded-t-2xl"
        />
      </Link>
      <div className="dashed-line-top" />
      <div className="dashed-line-left" />
      <div className="dashed-line-right" />
    </div>
  </ThirdsSection>
);
