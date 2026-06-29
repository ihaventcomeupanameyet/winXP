import React from 'react';

import Article from './Article';
import Infobox from './Infobox';
import ReferenceList from './ReferenceList';
import Section from './Section';
import TableOfContents from './TableOfContents';
import WikipediaLayout from './WikipediaLayout';

const sections = [
  { id: 'earlyLife', label: 'Early Life' },
  { id: 'Education', label: 'Education' },
  { id: 'interests', label: 'Interests' },
  { id: 'external-links', label: 'External links' },
  { id: 'references', label: 'References' },
];

const grad = {
  src: '/grad.jpg',
  alt:
    'Song Shi at his graduation ceremony from the University of British Columbia',
};

const dad = {
  src: '/song_with_dad.jpg',
  alt: 'Song with his dad',
};

const mom = {
  src: '/song_with_mom.jpg',
  alt: 'Song with his mom',
};

const hiking = {
  src: '/hiking.jpeg',
  alt: 'Song hiking with friends near Vancouver.',
};

function ExampleArticle() {
  return (
    <WikipediaLayout>
      <Article
        title="Song Shi"
        subtitle="Software developer and computer science graduate"
        tableOfContents={<TableOfContents items={sections} />}
        infobox={
          <Infobox
            title="Song Shi"
            image={grad}
            caption=""
            rows={[
              ['Born', '2000'],
              [
                'Education',
                <a href="#education">University of British Columbia</a>,
              ],
              ['Occupation', 'Software developer'],
              [
                'Interested in',
                'AI applications, RAG systems, and computer graphics',
              ],
            ]}
          />
        }
      >
        <p className="wiki-article__lead" id="top">
          <strong>Song Shi</strong> is a Canadian-based software developer and
          computer science graduate whose work focuses on artificial
          intelligence, computer graphics, and interactive web technologies. His
          projects primarily explore the intersection of modern AI systems,
          real-time 3D graphics, and user experience, with an emphasis on
          building practical software and visually distinctive applications.
        </p>

        <Section
          id="earlyLife"
          title="Early Life"
          images={[
            {
              ...dad,
              caption: 'Song with his dad, hiking.',
            },
            {
              ...mom,
              caption: 'Song with his mom, walking in the park.',
            },
          ]}
        >
          <p>
            Song was born in <a href="#china">China</a> in 2000 and was
            introduced to
            <a href="#personal-computer"> personal computers </a> at an early
            age through his family. His father used a desktop computer for
            office work, although Song was rarely allowed to use it himself.
            Instead, he often visited his grandparents' home, where his aunt
            owned a computer that became his main opportunity to explore
            software and <a href="#video-games">video games</a>. He frequently
            downloaded new games from the <a href="#internet">Internet</a>, only
            to find that many of them had been deleted by the time he returned
            the following week because they occupied too much disk space.
          </p>

          <p>
            One of Song's earliest memories of learning about computers came
            from a conversation with his father, who explained that data moved
            between hardware components through something called a{' '}
            <a href="#bus">bus</a>. As a child, Song believed the term referred
            to a vehicle carrying information around inside the computer. Years
            later, while studying
            <a href="#computer-architecture">computer architecture</a>, he
            discovered that "bus" was in fact the formal engineering term for
            the communication system connecting hardware components.
          </p>
        </Section>

        <Section
          id="Education"
          title="Education"
          images={[
            {
              ...grad,
              caption: 'Song at graduation ceremony(2025)',
            },
          ]}
        >
          <p>
            Song completed his primary and middle school education in
            <a href="#china"> China</a>. At the age of sixteen, he moved to
            <a href="#canada"> Canada</a>, where he attended
            <a href="#ballenas-secondary-school">
              {' '}
              Ballenas Secondary School
            </a>{' '}
            in Parksville, British Columbia. During this period, he adapted to a
            new language, culture, and educational system while completing his
            secondary education.
          </p>

          <p>
            Following high school, Song spent time at{' '}
            <a href="#vancouver-island-university">
              Vancouver Island University (VIU)
            </a>{' '}
            before transferring to the{' '}
            <a href="#university-of-british-columbia">
              University of British Columbia
            </a>{' '}
            to pursue a degree in
            <a href="#computer-science"> Computer Science</a>.
          </p>

          <p>
            At UBC, Song developed interests in software engineering, computer
            graphics, computer systems, and artificial intelligence. Alongside
            his coursework, he participated in undergraduate research involving
            statistical methods and data analysis, while also building personal
            projects in web development, graphics programming, and AI
            applications.
          </p>
        </Section>

        <Section
          id="interests"
          title="Interests"
          images={[
            {
              ...hiking,
              caption: 'Song hiking with friends near Vancouver.',
            },
          ]}
        >
          <p>
            Song's technical interests include artificial intelligence, computer
            graphics, operating systems, and interactive web technologies. He is
            particularly interested in projects that combine practical software
            engineering with visual and interactive user experiences.
          </p>

          <p>
            Outside of software development, Song enjoys hiking and exploring
            the mountains, forests, and coastal trails around
            <a href="#vancouver"> Vancouver</a> and
            <a href="#british-columbia"> British Columbia</a>. He frequently
            visits regional parks and mountain viewpoints, often bringing a
            camera to document landscapes and seasonal scenery.
          </p>

          <p>
            He also enjoys experimenting with new technologies through personal
            projects, particularly those involving React, Three.js, backend
            systems, and large language models.
          </p>
        </Section>

        <Section id="external-links" title="External links">
          <ul>
            <li>
              <a
                href="https://github.com/ihaventcomeupanameyet"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/song-shi-2b5250278/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </Section>

        <ReferenceList
          references={[
            {
              author: 'University of British Columbia',
              title: 'Bachelor of Science in Computer Science',
              href: '#ubc-degree',
              details: 'Graduation records, 2025',
            },
            {
              author: 'University of British Columbia Department of Statistics',
              title: 'Undergraduate Research Assistant',
              href: '#ubc-research',
              details: 'Research project, 2023',
            },
            {
              author: 'GitHub',
              title: 'Song Shi',
              href: 'https://github.com/yourusername',
              details: 'Software projects and source code',
            },
            {
              author: 'LinkedIn',
              title: 'Song Shi',
              href: 'https://linkedin.com/in/yourusername',
              details: 'Professional profile',
            },
            {
              author: 'Personal Archives',
              title: 'Family Photograph Collection',
              href: '#family-photos',
              details: 'Childhood and education photographs',
            },
            {
              author: 'Personal Notes',
              title: 'Early Computing Experiences',
              href: '#early-life',
              details: 'Compiled from personal recollections',
            },
          ]}
        />
      </Article>
    </WikipediaLayout>
  );
}

export default ExampleArticle;
