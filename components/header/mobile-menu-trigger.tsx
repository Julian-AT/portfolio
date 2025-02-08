'use client';

import { useAtom } from 'jotai';
import { MenuIcon } from 'lucide-react';
import { Button } from '@julian-at/components/ui/button';
import { mobileMenuOpen } from '@julian-at/components/header/mobile-menu';

export const MobileMenuTrigger = () => {
  const [isOpen, setIsOpen] = useAtom(mobileMenuOpen);

  return (
    <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)}>
      <MenuIcon size={16} className="text-muted-foreground" />
    </Button>
  );
};
