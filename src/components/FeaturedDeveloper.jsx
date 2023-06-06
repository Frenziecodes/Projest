import React from "react";

const DeveloperCard = ({ name, role, imageSrc, description, githubLink }) => {
  const limitedDescription = description.length > 80 ? `${description.substring(0, 80)}...` : description;
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-300 p-4">
      <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full overflow-hidden">
        <img src={imageSrc} alt="Developer" className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-800 mb-4">{role}</p>
        <p className="text-gray-700">{limitedDescription}</p>
        <div className="mt-6">
          <a href={githubLink} className="bg-gradient-to-r from-blue-500 to-pink-500 hover:bg-gradient-to-l hover:from-blue-500 hover:to-pink-500 text-gray-700 py-2 px-4 rounded-md font-semibold transition duration-300 ease-in-out">
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
