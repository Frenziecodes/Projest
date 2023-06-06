import React from "react";

const FeaturedProject = ({ title, description, projectLink, demoLink }) => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex justify-between">        
        <a href={projectLink} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-4">
          Project Link
        </a>
        <a href={demoLink} className="bg-white hover:bg-blue-300 text-blue-600 hover:text-black py-2 px-4 rounded-md">
          Live Link
        </a>
      </div>
    </div>
  );
};

export default FeaturedProject;
