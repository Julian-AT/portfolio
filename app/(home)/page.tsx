import { Currently } from '@julian-at/app/(home)/components/currently';
import { FeaturedNews } from '@julian-at/app/(home)/components/featured-news';
import { Feed } from '@julian-at/app/(home)/components/feed';
import { GitHubActivity } from '@julian-at/app/(home)/components/github-activity';
import { Hero } from '@julian-at/app/(home)/components/hero';
import { Spotify } from '@julian-at/app/(home)/components/spotify';
import { Section } from '@julian-at/components/section';
import { RecentBook } from './components/recent-book';

export const generateMetadata = () => {
  return {
    title: 'Julian Schmidt - Home',
    description: 'Software Engineer',
  };
};

const Home = () => (
  <>
    <Hero />
    <Currently />
    <Feed />
    <FeaturedNews />
    <GitHubActivity />
    <Section className="grid divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0">
      <div className="p-4">
        <Spotify />
      </div>
      <div className="p-4">
        <RecentBook />
      </div>
    </Section>
  </>
);

export default Home;
