'use client';

import { mobileMenuOpen } from '@julian-at/components/header/mobile-menu';
import { Button } from '@julian-at/components/ui/button';
import { useAtom } from 'jotai';
import { MenuIcon } from 'lucide-react';

export const MobileMenuTrigger = () => {
  const [isOpen, setIsOpen] = useAtom(mobileMenuOpen);

  return (
    <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)}>
      <MenuIcon size={16} className="text-muted-foreground" />
    </Button>
  );
};
