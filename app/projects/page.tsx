import { Apps } from '@julian-at/app/projects/components/apps';
import { Hackathons } from '@julian-at/app/projects/components/hackathons';
import { Hero } from '@julian-at/app/projects/components/hero';

export const generateMetadata = () => {
  return {
    title: 'Julian Schmidt - Projects',
    description: 'My Projects',
  };
};

const Projects = () => (
  <>
    <Hero />
    {/* <Logos /> */}
    <Apps />
    <Hackathons />
    {/* <OpenSource /> */}
  </>
);

export default Projects;
