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
  { id: 'standards', label: 'Standards' },
  { id: 'impact', label: 'Social impact' },
  { id: 'references', label: 'References' },
];

const grad = {
  src: './grad.jpg',
  alt:
    'Song Shi at his graduation ceremony from the University of British Columbia',
};

const dad = {
  src: './song_with_dad.jpg',
  alt: 'Song with his dad',
};

const mom = {
  src: './song_with_mom.jpg',
  alt: 'Song with his mom',
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
              caption: 'Song with his dad, hiking',
            },
            {
              ...mom,
              caption:
                'Song with his mom, walking in the park during his childhood in China.',
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
            Following high school, Song spent time at
            <a href="#vancouver-island-university">
              {' '}
              Vancouver Island University (VIU){' '}
            </a>
            before transferring to the
            <a href="#university-of-british-columbia">
              {' '}
              University of British Columbia{' '}
            </a>
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

        <Section id="standards" title="Standards">
          <p>
            The <a href="#w3c">World Wide Web Consortium</a> develops many of
            the Web's core technical standards. HTML describes document
            structure, CSS controls presentation, and JavaScript enables
            behavior. Accessibility standards help authors make those documents
            usable by more people.
          </p>
        </Section>

        <Section id="impact" title="Social impact">
          <p>
            The Web made publishing available to individuals and organizations
            at global scale. It reshaped communication, education, commerce,
            entertainment, and public administration, while also creating
            ongoing debates about privacy, misinformation, access, and platform
            power.
          </p>
        </Section>

        <ReferenceList
          references={[
            {
              author: 'Berners-Lee, Tim',
              title: 'Information Management: A Proposal',
              href: '#cern-proposal',
              details: 'CERN, March 1989',
            },
            {
              author: 'World Wide Web Consortium',
              title: 'A Little History of the World Wide Web',
              href: '#web-history',
            },
            {
              author: 'Gillies, James and Cailliau, Robert',
              title: 'How the Web Was Born',
              href: '#how-the-web-was-born',
              details: 'Oxford University Press, 2000',
            },
          ]}
        />
      </Article>
    </WikipediaLayout>
  );
}

export default ExampleArticle;
