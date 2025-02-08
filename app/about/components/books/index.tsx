import type { OkuProperties } from '@julian-at/app/api/cron/oku/route';
import { Section } from '@julian-at/components/section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@julian-at/components/ui/tabs';
import { cn } from '@julian-at/lib/utils';
import { ViewAnimation } from '@julian-at/providers/view-animation';
import { get } from '@vercel/edge-config';
import { Book } from '@julian-at/app/about/components/books/book';

export const Books = async () => {
  const books = await get<OkuProperties>('oku');

  if (!books) {
    return null;
  }

  const tabs = [
    {
      id: 'backlog',
      label: 'To Read',
      items: books.backlog,
    },
    {
      id: 'reading',
      label: 'Reading',
      items: books.reading,
    },
    {
      id: 'finished',
      label: 'Read',
      items: books.completed,
    },
  ];

  return (
    <Section className="px-4 py-8 sm:px-8">
      <Tabs defaultValue="backlog" className="grid gap-4">
        <div
          className={cn(
            'flex flex-col gap-4',
            'sm:flex-row sm:items-center sm:justify-between'
          )}
        >
          <ViewAnimation initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h2 className="font-bold text-3xl tracking-tight">Reading List</h2>
          </ViewAnimation>
          <ViewAnimation
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            delay={0.2}
          >
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </ViewAnimation>
        </div>
        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {tab.items.map((book, index) => (
                <ViewAnimation
                  key={book.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  delay={(index % 5) * 0.2}
                >
                  <Book key={book.id} {...book} />
                </ViewAnimation>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
};
