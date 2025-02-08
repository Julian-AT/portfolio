import { cn } from '@julian-at/lib/utils';
import { ViewAnimation } from '@julian-at/providers/view-animation';
import { Links } from '@julian-at/components/footer/links';
import { Status } from '@julian-at/components/footer/status';
import { ThemeSwitcher } from '@julian-at/components/footer/theme-switcher';

export const Footer = () => (
  <footer
    className={cn(
      'container mx-auto flex flex-col gap-4 px-4 py-8',
      'sm:gap-16 sm:px-8 sm:py-16'
    )}
  >
    <Links />
    <div className="grid items-center gap-4 sm:grid-cols-3">
      <ViewAnimation
        initial={{ opacity: 0, translateY: -8 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        delay={0.4}
      >
        <Status />
      </ViewAnimation>
      <div className="flex items-center sm:justify-center">
        <ViewAnimation
          initial={{ opacity: 0, translateY: -8 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          delay={0.8}
        >
          <p className="whitespace-nowrap text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Julian Schmidt. All rights
            reserved.
          </p>
        </ViewAnimation>
      </div>
      <div className="flex items-center sm:justify-end">
        <ViewAnimation
          initial={{ opacity: 0, translateY: -8 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          delay={1.2}
        >
          <ThemeSwitcher />
        </ViewAnimation>
      </div>
    </div>
  </footer>
);
