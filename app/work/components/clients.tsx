import { Section } from '@julian-at/components/section';
import { env } from '@julian-at/lib/env';
import { cn } from '@julian-at/lib/utils';
import { ViewAnimation } from '@julian-at/providers/view-animation';
import Image from 'next/image';

const CLIENTS = [
  {
    _title: "Raiffeisen Software",
    url: "https://www.r-software.at/"
  },
  {
    _title: "Österreichische Nationalbank",
    url: "https://www.oenb.at/"
  },
  {
    _title: "Österreichische Lotterien",
    url: "https://www.lotterien.at/"
  },
  {
    _title: "Styria Media Group",
    url: "https://www.styria.com/de/brands/styria-it-solutions"
  },
  {
    _title: "Bundeskanzleramt",
    url: "https://www.bundeskanzleramt.gv.at/"
  },
  {
    _title: "BRZ",
    url: "https://www.brz.gv.at/"
  },
  {
    _title: "ITSV",
    url: "https://www.itsv.at/cdscontent/?contentid=10007.697193&portal=itsvportal"
  },
  {
    _title: "Stadt Wien",
    url: "https://www.wien.gv.at/"
  },
  {
    _title: "Magna International",
    url: "https://www.magna.com/"
  },
];

export const Clients = () => {
  if (!CLIENTS.length) {
    return null;
  }

  return (
    <Section className={cn('flex flex-col gap-8 px-4 py-8', 'sm:px-8')}>
      <ViewAnimation
        initial={{ opacity: 0, translateY: -8 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        className="px-4"
      >
        <p className="text-center text-muted-foreground text-sm">
          I've also worked with the following companies
        </p>
      </ViewAnimation>
      <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
        {CLIENTS
          .sort((a, b) => a._title.localeCompare(b._title))
          .map((client, index) => (
            <ViewAnimation
              initial={{ opacity: 0, translateY: -8 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              delay={index * 0.1}
              className={cn(
                'inline-flex rounded-full border bg-background px-3 py-1.5 text-xs shadow-sm',
                'sm:text-sm'
              )}
              key={client._title}
            >
              {client.url ? (
                <div className="flex items-center gap-1.5">
                  {client.url && (
                    <Image
                      src={`https://img.logo.dev/${new URL(client.url).hostname}?token=${env.NEXT_PUBLIC_LOGO_DEV_TOKEN}`}
                      alt=""
                      width={16}
                      height={16}
                    />
                  )}
                  {client._title}
                </div>
              ) : (
                client._title
              )}
            </ViewAnimation>
          ))}
      </div>
    </Section>
  );
};
