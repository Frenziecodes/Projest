import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import TestimonialSection from '../components/TestimonialSection';
import WhyProjestSection from '../components/WhyProjest';
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
            <section className="text-gray-800 text-center lg:text-left mt-16 lg:mt-20 px-6">
                <div className="grid lg:grid-cols-2 gap-6 xl:gap-8 items-center lg:mb-20">
                    <div className="mb-2 lg:mb-0 flex flex-col justify-center items-center lg:items-start">
                        <h2 className="text-3xl md:text-4xl xl:text-4xl font-bold tracking-tight">
                            Ready to share your projects<br />
                            <span className="text-blue-600">on Projest?</span>
                        </h2>
                        <p className="text-gray-500 my-4 text-lg max-w-lg lg:max-w-none text-center lg:text-left">
                            Join a vibrant community of developers. Showcase your skills, collaborate on innovative projects, and unlock endless possibilities. Connect, learn, and grow together with Projest.
                        </p>

                        <Link to="viewprojects">
                            <div className="m-2 md:m-5 py-2 px-6 rounded-md bg-gradient-to-r from-blue-500 to-pink-500 hover:bg-gradient-to-l hover:from-blue-500 hover:to-pink-500 text-gray-700 font-semibold shadow-lg transition duration-300 ease-in-out">
                               Explore Projects
                            </div>
                        </Link>
                    </div>
                    <div className="mb-4 lg:mb-0 justify-center flex">
                        <img className="w-full max-h-40 lg:max-h-96" src="https://i.pinimg.com/564x/eb/d5/7e/ebd57e2fcb81ef9fb0ff453d6ab208a6.jpg" alt="Illustration" />
                    </div>

                </div>
            </section>

            <WhyProjestSection/>
            <FeaturedDevelopersSection/>

           {/* add featured projects here */}
           <FeaturedProjects projects={featuredProjects} />
            <TestimonialSection/>
        </div>
    )
}

export default HomePage