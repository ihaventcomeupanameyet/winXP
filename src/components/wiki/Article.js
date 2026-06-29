import React from 'react';

function Article({ title, subtitle, tableOfContents, infobox, children }) {
  return (
    <main className="wiki-article" id="main-page">
      <header className="wiki-article__header">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </header>
      <div className="wiki-article__tabs">
        <nav aria-label="Page">
          <a className="is-active" href="#article">
            Article
          </a>
          <a href="#talk">Talk</a>
        </nav>
        <nav aria-label="Page tools">
          <a className="is-active" href="#read">
            Read
          </a>
          <a href="#view-source">View source</a>
          <a href="#history">View history</a>
        </nav>
      </div>
      <div className="wiki-article__notice">
        From Wikipedia, the free encyclopedia
      </div>
      <div className="wiki-article__grid">
        {tableOfContents}
        <article className="wiki-article__content" id="article">
          {children}
        </article>
        {infobox}
      </div>
      <footer className="wiki-article__footer">
        This page was last edited on 28 June 2026. Text is available under the
        Creative Commons Attribution-ShareAlike License.
      </footer>
    </main>
  );
}

export default Article;
