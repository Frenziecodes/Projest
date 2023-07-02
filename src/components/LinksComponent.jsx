import React from 'react';

const LinksComponent = ({ label, links }) => {
  return (
    <div className="mb-6">
      <h5 className="mb-2.5 font-bold uppercase text-white">
        {label}
      </h5>

      <ul className="mb-0 list-none">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} className="text-neutral-900 text-sm text-white font-lite">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksComponent;
