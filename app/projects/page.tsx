import { Apps } from '@julian-at/app/projects/components/apps';
import { Hero } from '@julian-at/app/projects/components/hero';
import { Logos } from '@julian-at/app/projects/components/logos';
import { OpenSource } from '@julian-at/app/projects/components/open-source';
import { Hackathons } from '@julian-at/app/projects/components/hackathons';

export const generateMetadata = () => {
  return {
    title: 'Projects',
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
