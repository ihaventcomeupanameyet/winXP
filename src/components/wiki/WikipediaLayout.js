import React from 'react';

import Sidebar from './Sidebar';

function WikipediaLayout({ children }) {
  return (
    <div className="wiki">
      <header className="wiki__masthead">
        <div className="wiki__brand" aria-label="Wikipedia">
          <span className="wiki__brand-mark">W</span>
          <span>
            <strong>WIKIPEDIA</strong>
            <small>The Free Encyclopedia</small>
          </span>
        </div>
        <form
          className="wiki__search"
          onSubmit={event => event.preventDefault()}
        >
          <label className="wiki__visually-hidden" htmlFor="wiki-search">
            Search Wikipedia
          </label>
          <input
            id="wiki-search"
            type="search"
            placeholder="Search Wikipedia"
          />
          <button type="submit">Search</button>
        </form>
        <nav className="wiki__account" aria-label="Account">
          <a href="#create-account">Create account</a>
          <a href="#log-in">Log in</a>
        </nav>
      </header>
      <div className="wiki__layout">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export default WikipediaLayout;
