import React from 'react';
import { FaStar, FaCodeBranch } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-6">
      <div className="container mx-auto flex flex-col justify-between items-center">
        <div className="text-center mb-4">
          <h2 className="text-3xl mb-3 font-bold">Projest</h2>
          <p className="text-sm">A platform for showcasing and sharing projects. For any issues or feature requests, feel free to open an issue on our GitHub repository.</p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/Frenziecodes/Projest" className="text-white hover:text-yellow-300 flex items-center">
            <FaStar className="mr-1" />
            Star Project
          </a>
          <a href="https://github.com/Frenziecodes/Projest/fork" className="text-white hover:text-blue-200 flex items-center">
            <FaCodeBranch className="mr-1" />
            Fork Project
          </a>
        </div>
      </div>
      <div className="text-center mt-4 text-gray-200">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
