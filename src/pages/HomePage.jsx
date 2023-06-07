import React, { useEffect, useState } from 'react';
import ProjestHero from '../sections/ProjestHero';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import TestimonialSection from '../sections/TestimonialSection';
import WhyProjestSection from '../sections/WhyProjest';
import FeaturedDevelopersSection from '../sections/DevelopersSection';
import FeaturedProjects from '../sections/FeaturedProjects';

function HomePage() {
    const [featuredProjects, setFeaturedProjects] = useState([]);
    useEffect(() => {
        const fetchFeaturedProjects = async () => {
          try {
            const projectsCollection = collection(db, 'projects');
            const projectsSnapshot = await getDocs(projectsCollection);
            const projectsData = projectsSnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            // Shuffle the projects and select the first three
            const shuffledProjects = projectsData.sort(() => 0.5 - Math.random());
            const featuredProjects = shuffledProjects.slice(0, 3);
            setFeaturedProjects(featuredProjects);
          } catch (error) {
            console.log('Error fetching featured projects:', error);
          }
        };
      
        fetchFeaturedProjects();
      }, []);
      
    return (
        <div className="lg:mt-20 md:mb-10 px-0 mx-auto w-[100%]">
            <ProjestHero/>
            <WhyProjestSection/>
            <FeaturedDevelopersSection/>
            <FeaturedProjects projects={featuredProjects} />
            <TestimonialSection/>
        </div>
    )
}

export default HomePage;