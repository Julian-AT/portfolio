import { HeroSection } from '@julian-at/components/sections/hero';
import { SocialButton } from '@julian-at/components/social-button';
import { social } from '@julian-at/lib/social';

export const Hero = () => (
  <HeroSection
    caption="Projects"
    title="A collection of side projects and experiments I've built along the way."
  >
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <SocialButton data={social.linkedin} />
      <SocialButton data={social.github} />
    </div>
  </HeroSection>
);
