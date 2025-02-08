import { HeroSection } from '@julian-at/components/sections/hero';
import { Button } from '@julian-at/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => (
  <HeroSection
    caption={"Hi, I'm Julian"}
    title="Software Engineer building modern web applications in 🇦🇹 Vienna, Austria"
    image={
      <div className="relative hidden sm:block">
        <Image
          src="/assets/images/profile.jpg"
          alt="Julian Schmidt"
          width={48}
          height={48}
          className="h-12 w-12 overflow-hidden rounded-full object-cover"
        />
        <div className="faded-line-bottom" />
        <div className="faded-line-top" />
        <div className="faded-line-left" />
        <div className="faded-line-right" />
      </div>
    }
  >
    <div className="flex items-center justify-center gap-4">
      <Button asChild variant="outline">
        <Link href="/work">View my work</Link>
      </Button>
      <Button asChild>
        <Link href="/contact">Get in touch</Link>
      </Button>
    </div>
  </HeroSection>
);
