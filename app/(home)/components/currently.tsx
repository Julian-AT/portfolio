'use client';

import { ThirdsSection } from '@julian-at/components/sections/thirds';
import Image from 'next/image';
import { useState } from 'react';

export const Currently = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <ThirdsSection
      caption="Now"
      title="Synth UI"
      description="An open source approach to generative UI with natural language. Transform natural language input into ready-to-use React components, reduce manual effort, and enable non-technical users to generate functional UI components without deep programming skills. Currently in experimental stage exploring the possibilities of AI-powered UI generation."
      buttons={[
        {
          label: 'Learn more',
          href: 'https://synthui.design/',
        },
        {
          label: 'Awarded at BWKI 2024 🏆',
          href: 'https://www.linkedin.com/posts/bwki-austria_yesterday-the-award-ceremony-of-the-third-activity-7260698072022679552-cXmH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdvsakBa7hYpfkJgYkvBwYkW96bz3KC4jg',
        },
      ]}
    >
      <div className="pt-4 pl-4 sm:pt-8 sm:pl-8">
        <div className="dashed-line-top" />
        <div className="dashed-line-left" />
        <div className="relative">
          {!isVideoLoaded && (
            <Image
              src="/assets/images/header_light.webp"
              alt="Video thumbnail"
              width={800}
              height={600}
              className="w-full rounded-tl-lg border-t border-l sm:rounded-tl-2xl"
            />
          )}
          <video
            className={`w-full rounded-tl-lg border-t border-l sm:rounded-tl-2xl ${
              isVideoLoaded ? 'block' : 'hidden'
            }`}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src="/assets/videos/synth_ui_clip1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </ThirdsSection>
  );
};
