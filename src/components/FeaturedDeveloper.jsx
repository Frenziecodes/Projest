import React from "react";

const DeveloperCard = ({ name, role, imageSrc, description, githubLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-center bg-gray-200 w-24 h-24 mx-auto rounded-full overflow-hidden">
        <img src={imageSrc} alt="Developer" className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{role}</p>
        <p className="text-gray-500 mt-4">{description}</p>
        <div className="mt-6">
          <a href={githubLink} className="text-blue-500 font-semibold hover:text-blue-600">View Github Profile</a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
