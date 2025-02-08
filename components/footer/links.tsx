import { APPS } from '@julian-at/app/projects/components/apps';
import { ROLES } from '@julian-at/app/work/components/roles';
import { ActiveLink } from '@julian-at/components/active-link';
import { navigation } from '@julian-at/lib/navigation';
import { social } from '@julian-at/lib/social';
import { ViewAnimation } from '@julian-at/providers/view-animation';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const Links = async () => {
  const lists: {
    title: string;
    href?: string;
    external?: boolean;
    items: {
      href: string;
      children: ReactNode;
    }[];
  }[] = [
    {
      title: 'Pages',
      items: navigation.map((link) => ({
        href: link.href,
        children: link.label,
      })),
    },
    {
      title: 'Work',
      href: '/work',
      items: ROLES.map((role) => ({
        href: `/work/${role.slug}`,
        children: `${role.company}`,
      })),
    },
    {
      title: 'Projects',
      href: '/projects',
      items: APPS.map((app) => ({
        href: app.url,
        children: app._title,
      })),
    },
    {
      title: 'Social',
      items: Object.values(social).map((link) => ({
        href: link.href,
        children: (
          <div className="flex items-center gap-2">
            <Image
              src={link.icon}
              alt={link.label}
              width={14}
              height={14}
              className="h-3.5 w-3.5 opacity-50 brightness-0 dark:invert"
            />
            {link.label}
          </div>
        ),
        external: true,
      })),
    },
  ];

  return (
    <div className="grid gap-8 text-muted-foreground text-sm sm:grid-cols-4">
      {lists.map((list, index) => (
        <ViewAnimation
          initial={{ opacity: 0, translateY: -8 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          delay={index * 0.1}
          key={list.title}
          className="flex flex-col gap-6"
        >
          <div className="font-medium text-foreground">
            {list.href ? (
              <Link href={list.href}>{list.title}</Link>
            ) : (
              <p>{list.title}</p>
            )}
          </div>
          <ul className="flex flex-col gap-3">
            {list.items.map((item) => (
              <li key={item.href}>
                <ActiveLink
                  href={item.href}
                  target={list.external ? '_blank' : undefined}
                  rel={list.external ? 'noopener noreferrer' : undefined}
                >
                  {item.children}
                </ActiveLink>
              </li>
            ))}
          </ul>
        </ViewAnimation>
      ))}
    </div>
  );
};
