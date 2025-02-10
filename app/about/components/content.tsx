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
              I'm a software engineer based in Vienna, specializing in AI-driven
              applications and modern web development. My focus is on building
              scalable, efficient systems with technologies like Next.js, React,
              and TypeScript. I enjoy solving complex technical challenges and
              designing architectures that are both performant and maintainable.
            </p>

            <h3>What I Do</h3>
            <ul>
              <li>
                Develop AI-powered applications and generative UI solutions.
              </li>
              <li>Optimize performance bottlenecks in large-scale systems.</li>
              <li>Explore machine learning and system design.</li>
            </ul>

            <h3>Beyond Code</h3>
            <p>
              Outside of development, I'm passionate about chess, open-source
              innovation, and exploring new technologies. I enjoy discussing AI,
              software architecture, and automation in modern applications.
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
