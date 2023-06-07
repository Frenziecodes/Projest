import React, { useEffect, useState } from "react";
import DeveloperCard from "../components/FeaturedDeveloper";

const FeaturedDevelopersSection = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/Frenziecodes/projest/contributors");
        const data = await response.json();

        // Shuffle the contributors randomly
        const shuffledContributors = shuffleArray(data);

        // Get the first 3 contributors
        const selectedDevelopers = shuffledContributors.slice(0, 3);

        setDevelopers(selectedDevelopers);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    };

    fetchContributors();
  }, []);

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-xl md:text-4xl xl:text-4xl font-bold text-center mb-8">Featured Developers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developers.map((developer) => (
            <DeveloperCard
              key={developer.id}
              name={developer.login}
              imageSrc={developer.avatar_url}
              description={developer.bio}
              githubLink={developer.login}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDevelopersSection;
