import React from "react";

const FeaturedProject = ({ title, description, projectLink, demoLink }) => {
  const limitedDescription = description.length > 90 ? `${description.substring(0, 90)}...` : description;

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-300 p-6">
      <h3 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-800 mb-4">{limitedDescription}</p>
      <div className="flex justify-between">
        <a href={projectLink} className="bg-gradient-to-r from-blue-500 to-pink-500 hover:bg-gradient-to-l hover:from-blue-500 hover:to-pink-500 text-gray-700 py-2 px-4 rounded-md mr-4">
          Project Link
        </a>
        <a href={demoLink} className="bg-gradient-to-r from-pink-500 to-blue-500 hover:bg-gradient-to-l hover:from-pink-500 hover:to-blue-500 text-gray-700 py-2 px-4 rounded-md">
          Live Link
        </a>
      </div>
    </div>
  );
};

export default FeaturedProject;
