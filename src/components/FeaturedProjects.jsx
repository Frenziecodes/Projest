import React from "react";

const FeaturedProject = ({ title, description, projectLink, demoLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between">        
        <a href={projectLink} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mr-4">
          Visit Project
        </a>
        <a href={demoLink} className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md">
          Demo
        </a>
      </div>
    </div>
  );
};

export default FeaturedProject;
