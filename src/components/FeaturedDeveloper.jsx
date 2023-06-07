import React, { useEffect, useState } from "react";

const DeveloperCard = ({ name, imageSrc, description, githubLink }) => {
  const [developer, setDeveloper] = useState(null);

  useEffect(() => {
    const fetchDeveloperDetails = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubLink}`);
        const data = await response.json();
        setDeveloper(data);
      } catch (error) {
        console.error("Error fetching developer details:", error);
      }
    };

    fetchDeveloperDetails();
  }, [githubLink]);

  if (!developer) {
    return <p>Loading developer details...</p>;
  }

  const limitedDescription = developer.bio ? (developer.bio.length > 65 ? `${developer.bio.substring(0, 65)}...` : developer.bio) : '';

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-300 p-4 hover:-translate-y-1 hover:scale-110 duration-300">
      <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full overflow-hidden">
        <img src={developer.avatar_url} alt="Developer" className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-md font-bold text-gray-900 mb-2">{developer.name || name}</h3>
        <p className="text-gray-700 h-18 md:h-24 lg:h-20 overflow-hidden">{limitedDescription}</p>
        <div className="mt-3 flex justify-center">
          <a
            href={developer.html_url}
            className="bg-gradient-to-r from-blue-500 to-pink-500 hover:bg-gradient-to-l hover:from-blue-500 hover:to-pink-500 text-gray-700 py-2 px-4 rounded-md font-semibold transition duration-300 ease-in-out"
            style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
