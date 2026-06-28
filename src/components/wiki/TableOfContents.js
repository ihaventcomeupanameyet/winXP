import React from 'react';

function TableOfContents({ items }) {
  return (
    <nav className="wiki-toc" aria-label="Contents" id="contents">
      <h2>Contents</h2>
      <a className="is-active" href="#top">
        Beginning
      </a>
      {items.map((item, index) => (
        <a key={item.id} href={`#${item.id}`}>
          <span>{index + 1}</span>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default TableOfContents;
