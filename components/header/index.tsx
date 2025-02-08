import { ActiveLink } from '@julian-at/components/active-link';
import { MobileMenu } from '@julian-at/components/header/mobile-menu';
import { MobileMenuTrigger } from '@julian-at/components/header/mobile-menu-trigger';
import { Button } from '@julian-at/components/ui/button';
import { navigation } from '@julian-at/lib/navigation';
import { HeaderProvider } from '@julian-at/providers/header';
import { ViewAnimation } from '@julian-at/providers/view-animation';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => (
  <>
    <HeaderProvider className="container fixed top-0 right-0 left-0 z-50 mx-auto flex items-center justify-between border-x bg-backdrop/90 px-4 py-2 backdrop-blur-md transition-all sm:py-4">
      <div className="w-32">
        <ViewAnimation
          initial={{ opacity: 0, translateY: -8 }}
          whileInView={{ opacity: 1, translateY: 0 }}
        >
          <Link href="/" aria-label="Julian Schmidt">
            <Image
              src="/assets/images/profile.jpg"
              alt="Julian Schmidt"
              width={32}
              height={32}
              className="h-8 w-8 overflow-hidden rounded-full object-cover"
              priority
            />
          </Link>
        </ViewAnimation>
      </div>
      <nav className="hidden gap-6 md:flex">
        {navigation.map((link, index) => (
          <ViewAnimation
            key={link.href}
            initial={{ opacity: 0, translateY: -8 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            delay={0.4 + index * 0.1}
          >
            <ActiveLink href={link.href}>{link.label}</ActiveLink>
          </ViewAnimation>
        ))}
      </nav>
      <div className="hidden w-32 justify-end md:flex">
        <ViewAnimation
          initial={{ opacity: 0, translateY: -8 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          delay={0.8}
        >
          <Button variant="outline" size="sm" asChild>
            <Link href="/contact">Get in touch</Link>
          </Button>
        </ViewAnimation>
      </div>
      <div className="flex w-32 justify-end md:hidden">
        <ViewAnimation
          initial={{ opacity: 0, translateY: -8 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          delay={0.8}
        >
          <MobileMenuTrigger />
        </ViewAnimation>
      </div>
    </HeaderProvider>
    <MobileMenu />
  </>
);
