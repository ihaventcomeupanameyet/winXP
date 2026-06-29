import React from 'react';

function Section({ id, title, images = [], children }) {
  return (
    <section className="wiki-section" id={id}>
      <h2>{title}</h2>
      {images.length > 0 && (
        <div className="wiki-section__figures">
          {images.map((image, index) => (
            <figure
              className="wiki-section__figure"
              key={`${image.src}-${index}`}
            >
              <img src={image.src} alt={image.alt} />
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}
      {children}
    </section>
  );
}

export default Section;
