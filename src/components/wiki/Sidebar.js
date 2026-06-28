import React from 'react';

const navigation = [
  ['Main page', '#main-page'],
  ['Contents', '#contents'],
  ['Current events', '#current-events'],
  ['Random article', '#random-article'],
  ['About Wikipedia', '#about'],
  ['Contact us', '#contact'],
];

const contribute = [
  ['Help', '#help'],
  ['Learn to edit', '#learn-to-edit'],
  ['Community portal', '#community'],
  ['Recent changes', '#recent-changes'],
];

function SidebarGroup({ title, links }) {
  return (
    <section className="wiki-sidebar__group">
      <h2>{title}</h2>
      <ul>
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Sidebar() {
  return (
    <aside className="wiki-sidebar" aria-label="Wikipedia navigation">
      <SidebarGroup title="Navigation" links={navigation} />
      <SidebarGroup title="Contribute" links={contribute} />
      <SidebarGroup
        title="Languages"
        links={[
          ['Deutsch', '#deutsch'],
          ['Espanol', '#espanol'],
          ['Francais', '#francais'],
          ['Chinese', '#chinese'],
        ]}
      />
    </aside>
  );
}

export default Sidebar;
