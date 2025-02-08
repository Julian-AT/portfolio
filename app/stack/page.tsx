import { Apps } from '@julian-at/app/projects/components/apps';
import { Attribution } from '@julian-at/app/stack/components/attribution';
import { Hero } from '@julian-at/app/projects/components/hero';

export const generateMetadata = () => {
  return {
    title: 'Stack',
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
