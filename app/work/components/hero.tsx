import { HeroSection } from '@julian-at/components/sections/hero';
import { SocialButton } from '@julian-at/components/social-button';
import { Button } from '@julian-at/components/ui/button';
import { social } from '@julian-at/lib/social';
import Link from 'next/link';

export const Hero = () => (
  <HeroSection 
    caption="Work Experience"
    title="Crafting software solutions and pushing technological boundaries"
  >
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <SocialButton data={social.linkedin} />
      <Button asChild>
        <Link href="/contact?type=work">Let's talk about work</Link>
      </Button>
    </div>
  </HeroSection>
);
