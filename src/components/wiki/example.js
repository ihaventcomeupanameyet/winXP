import React from 'react';

import Article from './Article';
import Infobox from './Infobox';
import ReferenceList from './ReferenceList';
import Section from './Section';
import TableOfContents from './TableOfContents';
import WikipediaLayout from './WikipediaLayout';

const sections = [
  { id: 'history', label: 'History' },
  { id: 'function', label: 'Function' },
  { id: 'standards', label: 'Standards' },
  { id: 'impact', label: 'Social impact' },
  { id: 'references', label: 'References' },
];

const firstServer = {
  src:
    'https://upload.wikimedia.org/wikipedia/commons/d/d1/First_Web_Server.jpg',
  alt: 'The first web server, a NeXT computer at CERN',
};

function ExampleArticle() {
  return (
    <WikipediaLayout>
      <Article
        title="World Wide Web"
        subtitle="Global information system accessed through the Internet"
        tableOfContents={<TableOfContents items={sections} />}
        infobox={
          <Infobox
            title="World Wide Web"
            image={firstServer}
            caption="The NeXT computer used by Tim Berners-Lee as the first web server"
            rows={[
              ['Inventor', <a href="#tim-berners-lee">Tim Berners-Lee</a>],
              ['Inception', '12 March 1989'],
              ['Available', 'Worldwide'],
              ['Protocols', 'HTTP and HTTPS'],
              ['Primary format', 'HTML'],
            ]}
          />
        }
      >
        <p className="wiki-article__lead" id="top">
          The <strong>World Wide Web</strong> (also known as the{' '}
          <strong>Web</strong>) is an information system that enables content
          sharing over the <a href="#internet">Internet</a> through
          user-friendly ways meant to appeal to users beyond information
          technology specialists and hobbyists. It allows documents and other
          web resources to be accessed over the Internet according to specific
          rules of the Hypertext Transfer Protocol.
        </p>

        <Section id="history" title="History">
          <p>
            English computer scientist{' '}
            <a href="#tim-berners-lee">Tim Berners-Lee</a>
            conceived the Web at CERN in 1989. His proposal joined hypertext
            with the Internet so researchers could publish and connect documents
            across different computer systems. By the end of 1990, he had
            created the first web browser, server, and website.
          </p>
          <p>
            CERN released the Web software into the public domain in 1993. Open
            access, along with the arrival of graphical browsers, encouraged
            rapid adoption by universities, businesses, and the public.
          </p>
        </Section>

        <Section
          id="function"
          title="Function"
          image={{
            ...firstServer,
            caption:
              'The first web server carried a handwritten warning not to switch it off.',
          }}
        >
          <p>
            A web browser requests a resource from a web server using HTTP. The
            server responds with an HTML document and related resources such as
            images and style sheets. The browser interprets these files and
            presents an interactive page to the reader.
          </p>
          <p>
            Hyperlinks connect resources by their uniform resource locators.
            This simple linking model creates a distributed network of documents
            whose publishers do not need to coordinate with one another.
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
