import type { SpotifyProperties } from '@julian-at/app/api/cron/spotify/route';
import { cn } from '@julian-at/lib/utils';
import { ViewAnimation } from '@julian-at/providers/view-animation';
import { get } from '@vercel/edge-config';
import Image from 'next/image';
import type { ReactElement } from 'react';
import Vinyl from '@julian-at/app/(home)/components/spotify/vinyl.png';

export const Spotify = async (): Promise<ReactElement> => {
  const song = await get<SpotifyProperties>('spotify');

  console.log("song", song);
  

  if (!song) {
    return <div />;
  }

  return (
    <ViewAnimation initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <a
        className={cn(
          'flex h-80 flex-col justify-between gap-16 rounded-lg border bg-background p-8 shadow-sm transition-all',
          'hover:-translate-y-0.5 hover:shadow'
        )}
        href={song.href}
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="relative w-fit">
          <Image
            src={Vinyl}
            alt=""
            width={196}
            height={196}
            className="m-0 block aspect-square h-[107px] w-auto"
            quality={100}
            loading="eager"
            priority
          />
          <Image
            src={song.image}
            alt=""
            width={640}
            height={640}
            className="-rotate-12 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 aspect-square h-[50px] w-auto shrink-0 rounded-full"
            sizes="56px"
            quality={100}
          />
        </div>
        <div className="flex flex-col gap-2">
          <small className="text-muted-foreground">Recently listened</small>
          <h2 className="font-bold text-2xl tracking-tight sm:text-3xl">
            {song.name}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            by {song.artist}
          </p>
        </div>
      </a>
    </ViewAnimation>
  );
};
