import React from 'react';

function Infobox({ title, image, caption, rows }) {
  return (
    <aside className="wiki-infobox" aria-label={`${title} summary`}>
      <h2>{title}</h2>
      <figure>
        <img src={image.src} alt={image.alt} />
        <figcaption>{caption}</figcaption>
      </figure>
      <dl>
        {rows.map(([term, description]) => (
          <React.Fragment key={term}>
            <dt>{term}</dt>
            <dd>{description}</dd>
          </React.Fragment>
        ))}
      </dl>
    </aside>
  );
}

export default Infobox;
