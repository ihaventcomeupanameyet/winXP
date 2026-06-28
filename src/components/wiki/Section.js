import React from 'react';

function Section({ id, title, image, children }) {
  return (
    <section className="wiki-section" id={id}>
      <h2>{title}</h2>
      {image && (
        <figure className="wiki-section__figure">
          <img src={image.src} alt={image.alt} />
          <figcaption>{image.caption}</figcaption>
        </figure>
      )}
      {children}
    </section>
  );
}

export default Section;
