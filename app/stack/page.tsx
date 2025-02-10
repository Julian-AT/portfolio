import { Apps } from '@julian-at/app/stack/components/apps';
import { Attribution } from '@julian-at/app/stack/components/attribution';
import { Hero } from '@julian-at/app/stack/components/hero';

export const generateMetadata = () => {
  return {
    title: 'Julian Schmidt - Stack',
    description: 'The tools I use to build things.',
  };
};

const Stack = () => (
  <>
    <Hero />
    <Apps />
    <Attribution />
  </>
);

export default Stack;
