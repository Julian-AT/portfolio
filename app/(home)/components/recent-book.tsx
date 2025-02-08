import { cn } from "@julian-at/lib/utils";
import { ViewAnimation } from "@julian-at/providers/view-animation";
import { get } from "@vercel/edge-config";
import Image from "next/image";
import type { ReactElement } from "react";
import type { OkuProperties } from "@julian-at/app/api/cron/oku/route";

export const RecentBook = async (): Promise<ReactElement> => {
  const books = await get<OkuProperties>("oku");

  if (!books) {
    return <div />;
  }

  const recentBook = books.completed[0];

  return (
    <ViewAnimation initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <a
        className={cn(
          "flex max-h-80 flex-col justify-between gap-2 rounded-lg border bg-background p-8 shadow-sm transition-all",
          "hover:-translate-y-0.5 hover:shadow"
        )}
        href={recentBook.link}
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className="relative h-full w-fit flex-1 overflow-hidden">
          {recentBook.image ? (
            <Image
              src={recentBook.image}
              alt={recentBook.title}
              width={72}
              height={72}
              className="size-full object-contain"
            />
          ) : (
            <div className="flex aspect-[128/193] w-full items-center justify-center bg-muted p-4">
              <span className="line-clamp-3 font-medium text-muted-foreground text-xs">
                {recentBook.title}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <small className="text-muted-foreground">Recently Read</small>
          <h2 className="font-bold text-2xl tracking-tight sm:text-3xl">
            {recentBook.title}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            by {recentBook.author}
          </p>
        </div>
      </a>
    </ViewAnimation>
  );
};
