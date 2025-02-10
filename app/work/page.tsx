import { Clients } from '@julian-at/app/work/components/clients';
import { Hero } from '@julian-at/app/work/components/hero';
import { Roles } from '@julian-at/app/work/components/roles';

export const generateMetadata = () => {
  return {
    title: 'Julian Schmidt - Work',
    description: 'The projects I have worked on.',
  };
};

const Work = () => (
  <>
    <Hero />
    <Roles />
    <Clients />
  </>
);

export default Work;
