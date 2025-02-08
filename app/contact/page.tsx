import { Section } from '@julian-at/components/section';
import { Suspense } from 'react';
import { ContactForm } from '@julian-at/app/contact/components/contact-form';
import { Hero } from '@julian-at/app/contact/components/hero';

export const generateMetadata = () => {
  return {
    title: 'Contact',
    description: 'Contact Me',
  };
};

const ContactPage = () => (
  <Section className="grid divide-y border-t sm:grid-cols-2 sm:divide-x sm:divide-y-0">
    <div className="p-8">
      <Hero />
    </div>
    <div className="p-8">
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </div>
  </Section>
);

export default ContactPage;
