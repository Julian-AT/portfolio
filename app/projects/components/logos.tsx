import { Section } from '@julian-at/components/section';
import { cn } from '@julian-at/lib/utils';
import { ViewAnimation } from '@julian-at/providers/view-animation';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const LOGOS = [
  {
    name: 'Company 1',
    image: '/images/logos/logo1.png'
  },
  {
    name: 'Company 2', 
    image: '/images/logos/logo2.png'
  },
  {
    name: 'Company 3',
    image: '/images/logos/logo3.png'
  },
  {
    name: 'Company 4',
    image: '/images/logos/logo4.png'
  },
  {
    name: 'Company 5',
    image: '/images/logos/logo5.png'
  }
];

export const Logos = () => (
  <Section className={cn('flex flex-col gap-8 py-8', 'sm:py-16')}>
    <ViewAnimation
      initial={{ opacity: 0, translateY: -8 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      className="px-4"
    >
      <p className="text-center text-muted-foreground text-sm">
        My projects have been used by the world&apos;s most innovative
        companies
      </p>
    </ViewAnimation>

    <div className="relative">
      <Marquee autoFill>
        {LOGOS.map((logo, index) => (
          <ViewAnimation
            initial={{ opacity: 0, filter: 'blur(0px)' }}
            animate={{ opacity: 1 }}
            key={logo.image}
            delay={0.4 + index * 0.1}
          >
            <Image
              src={logo.image}
              alt={logo.name}
              width={80}
              height={40}
              className="mx-12 h-10 w-20 object-contain opacity-50 invert dark:invert-0"
            />
          </ViewAnimation>
        ))}
      </Marquee>
      <div className="absolute top-0 bottom-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-backdrop to-transparent" />
      <div className="absolute top-0 right-0 bottom-0 z-10 h-full w-24 bg-gradient-to-l from-backdrop to-transparent" />
    </div>
  </Section>
);
