import { Books } from '@julian-at/app/about/components/books';
import { Content } from '@julian-at/app/about/components/content';
import { Hero } from '@julian-at/app/about/components/hero';
import Certificates from './components/certificates';

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
    <Certificates />
    <Books />
  </>
);

export default About;
