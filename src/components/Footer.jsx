import React from 'react';
import LinksComponent from './LinksComponent';

function Footer() {
  const solutions = [
    { url: '#!', text: 'Explore projects' },
    { url: '#!', text: 'Add Project' },
    { url: '#!', text: 'Contribution' },
  ]
  const support = [
    { url: '#!', text: 'Report Bug' },
    { url: '#!', text: 'Request Feature' },
    { url: '#!', text: 'Documentation' },
  ]
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="container mx-auto flex flex-col justify-between items-center">
        <div className="text-center mb-4">
          <h2 className="text-3xl mb-3 font-bold">Projest</h2>
          <p className="text-sm px-2 md:px-0">A platform for showcasing and sharing projects. If you find this platform helpful, we would appreciate it if you could <a href="https://github.com/Frenziecodes/Projest" target="_blank" rel="noopener noreferrer">star</a> the project on <a href="https://github.com/Frenziecodes/Projest" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 place-items-center my-2">
        <LinksComponent label="Solutions" links={solutions} />
        <LinksComponent label="Support" links={support} />        
      </div>
      <div className="text-center mt-4">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
