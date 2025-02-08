import { Prose } from '@julian-at/components/prose';
import { Section } from '@julian-at/components/section';
import { cn } from '@julian-at/lib/utils';
import { ViewAnimation } from '@julian-at/providers/view-animation';
import Image from 'next/image';

export const Content = () => (
  <Section className="grid items-start divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0">
    <div>
      <ViewAnimation
        initial={{ opacity: 0, translateY: -8 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        delay={0.4}
        className={cn(
          'flex h-full flex-col items-start justify-between gap-4 px-4 py-8',
          'sm:px-8'
        )}
      >
        <div className="flex flex-col gap-2">
          <small className="text-muted-foreground">About me</small>
          <Prose>
            <p>
              As a passionate Full-Stack Developer in Vienna, I thrive on
              turning complex problems into elegant solutions. My expertise lies
              in crafting seamless web experiences, with a particular focus on
              Next.js, React, and TypeScript. I'm driven by clean code
              principles and always eager to embrace cutting-edge technologies.
            </p>
            <p>
              Beyond the screen, I'm an avid chess player and open-source
              enthusiast. You'll often find me diving into system design
              challenges, optimizing performance bottlenecks, or sharing
              knowledge with the developer community. I believe in writing code
              that not only works but tells a story.
            </p>
          </Prose>
        </div>
      </ViewAnimation>
    </div>
    <div className="size-full">
      <ViewAnimation
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="size-full"
      >
        <div className="sticky top-[53px] sm:top-[65px]">
          <Image
            src="/assets/images/profile_hd.jpg"
            alt="Julian Schmidt"
            width={800}
            height={600}
            className="w-full"
          />
        </div>
      </ViewAnimation>
    </div>
  </Section>
);
