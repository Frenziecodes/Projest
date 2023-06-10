import React from 'react';
import LinksComponent from './LinksComponent';

function Footer() {
  const getInVolved = [
    { url: '/addproject', text: 'Add Project' },
    { url: '/viewprojects', text: 'Explore projects', internal: true },
    { url: 'https://github.com/Frenziecodes/Projest/blob/master/Contributing.md', text: 'Become a contributor', internal: false },
  ];
    
  const support = [    
    { url: 'mailto:coderflame3@gmail.com', text: 'Contact Us' },
    { url: 'https://github.com/Frenziecodes/Projest/issues/new?assignees=&labels=bug&projects=&template=bug.yml', text: 'Report an issue' },
    { url: 'https://github.com/Frenziecodes/Projest/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml&title=%5BFEATURE%5D+%3Cdescription%3E', text: 'Request a Feature' },
  ]
  const resources = [
    { url: '#!', text: 'Articles' },
    { url: '/documentation', text: 'Documentation' },
    { url: '#!', text: 'Developer Resources' },
  ]
  const legal = [
    { url: '#!', text: 'License' },
    { url: '#!', text: 'Privacy Policy' },
    { url: '#!', text: 'Terms of service' },
  ]
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="container mx-auto flex flex-col justify-between items-center">
        <div className="text-center mb-4">
          <h2 className="text-3xl mb-3 font-bold">Projest</h2>
          <p className="text-sm px-2 md:px-0">A platform for showcasing and sharing projects. If you find this platform helpful, we would appreciate it if you could <a href="https://github.com/Frenziecodes/Projest" target="_blank" rel="noopener noreferrer">star</a> the project on <a href="https://github.com/Frenziecodes/Projest" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 place-items-center my-2">
        <LinksComponent label="Solutions" links={getInVolved} />
        <LinksComponent label="Support" links={support} />        
        <LinksComponent label="resources" links={resources} />        
        <LinksComponent label="Legal" links={legal} />        
      </div>
      <div className="text-center mt-4">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
