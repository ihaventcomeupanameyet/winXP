import React from 'react';

function ReferenceList({ references }) {
  return (
    <section className="wiki-section wiki-references" id="references">
      <h2>References</h2>
      <ol>
        {references.map(reference => (
          <li key={reference.title}>
            {reference.author && `${reference.author}. `}
            <a href={reference.href}>{reference.title}</a>
            {reference.details && `. ${reference.details}`}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ReferenceList;
