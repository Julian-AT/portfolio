import { StickyList } from '@julian-at/components/sections/sticky-list';
import { cn } from '@julian-at/lib/utils';
import { ViewAnimation } from '@julian-at/providers/view-animation';
import { ClockIcon, TrophyIcon } from 'lucide-react';
import Image from 'next/image';

export const HACKATHONS = [
  {
    name: '35th School CCC 2021',
    logo: '/assets/images/cf_logo.png',
    rank: '29',
    time: '00:20:00',
    date: '05.11.2021',
    location: 'Vienna, Austria',
    url: 'https://register.codingcontest.org/',
  },
  {
    name: '36th School CCC 2022',
    logo: '/assets/images/cf_logo.png',
    rank: '45',
    time: '00:53:14',
    date: '11.11.2022',
    location: 'Vienna, Austria',
    url: 'https://register.codingcontest.org/',
  },
  {
    name: '36th Classic CCC 2022',
    logo: '/assets/images/cf_logo.png',
    rank: '97',
    time: '00:21:47',
    date: '11.11.2022',
    location: 'Vienna, Austria',
    url: 'https://register.codingcontest.org/',
  },
  {
    name: '37th School CCC',
    logo: '/assets/images/cf_logo.png',
    rank: '39',
    time: '01:58:45',
    date: '31.03.2023',
    location: 'Vienna, Austria',
    url: 'https://register.codingcontest.org/',
  },
  {
    name: '37th Classic CCC',
    logo: '/assets/images/cf_logo.png',
    rank: '92',
    time: '03:47:29',
    date: '31.03.2023',
    location: 'Vienna, Austria',
    url: 'https://register.codingcontest.org/',
  },
  {
    name: '39th School CCC',
    logo: '/assets/images/cf_logo.png',
    rank: '86',
    time: '01:19:02',
    date: '19.04.2024',
    location: 'Vienna, Austria',
    url: 'https://register.codingcontest.org/',
  },
  {
    name: '40th School CCC',
    logo: '/assets/images/cf_logo.png',
    rank: '48',
    time: '00:18:24',
    date: '25.10.2024',
    location: 'Vienna, Austria',
    url: 'https://register.codingcontest.org/',
  },
].reverse();

export const Hackathons = () => {
  return (
    <StickyList
      title="Hackathons"
      description="I participate in competitive programming contests to sharpen my problem-solving skills. Here are my recent competition results."
    >
      <div className="grid sm:col-span-2 sm:grid-cols-2">
        {HACKATHONS.map((item, index) => (
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
                  'flex h-full items-start gap-4 px-4 py-8 transition-colors hover:bg-background',
                  'sm:px-8'
                )}
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="aspect-square size-12 rounded-full object-cover"
                />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col gap-1">
                      <h3 className="-my-2 font-semibold text-lg">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <TrophyIcon size={12} />
                      <small className="text-sm">#{item.rank}</small>
                    </div>
                    <span>&bull;</span>
                    <div className="flex items-center gap-1">
                      <ClockIcon size={12} />
                      <small className="text-sm">{item.time}</small>
                    </div>
                  </div>
                </div>
              </a>
            </ViewAnimation>
          </div>
        ))}
        {HACKATHONS.length % 2 === 1 ? (
          <div className="size-full border-t bg-dashed" />
        ) : null}
      </div>
    </StickyList>
  );
};
