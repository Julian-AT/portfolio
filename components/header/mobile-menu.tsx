'use client';

import { ActiveLink } from '@julian-at/components/active-link';
import { Button } from '@julian-at/components/ui/button';
import { navigation } from '@julian-at/lib/navigation';
import { cn } from '@julian-at/lib/utils';
import { atom, useAtom } from 'jotai';
import Link from 'next/link';

export const mobileMenuOpen = atom(false);

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useAtom(mobileMenuOpen);

  return (
    <div
      className={cn(
        'fixed top-[53px] right-0 left-0 z-50 flex h-[calc(100vh-53px)] flex-col gap-4 bg-backdrop p-4 md:p-8',
        'sm:top-[69px] sm:h-[calc(100vh-69px)]',
        isOpen ? 'flex' : 'hidden'
      )}
    >
      {navigation.map((link) => (
        <ActiveLink
          key={link.href}
          href={link.href}
          onClick={() => setIsOpen(false)}
        >
          {link.label}
        </ActiveLink>
      ))}
      <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
        <Link href="/contact">Get in touch</Link>
      </Button>
    </div>
  );
};
