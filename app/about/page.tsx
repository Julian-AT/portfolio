import { Books } from '@julian-at/app/about/components/books';
import { Content } from '@julian-at/app/about/components/content';
import { Hero } from '@julian-at/app/about/components/hero';

export const generateMetadata = () => {
  return {
    title: 'About',
    description: 'About Me',
  };
};

const About = () => (
  <>
    <Hero />
    <Content />
    <Books />
  </>
);

export default About;
