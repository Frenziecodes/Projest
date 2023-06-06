import React from 'react'
import FeaturedProject from '../components/FeaturedProjects';
import ProjestNav from '../components/ProjestNav'
import { Link } from 'react-router-dom';
import TestimonialSection from '../components/TestimonialSection';
import WhyProjestSection from '../components/WhyProjest';
import FeaturedDevelopersSection from '../sections/DevelopersSection';

function HomePage() {
    return (
        <div className="lg:mt-20 md:mb-10 px-0 mx-auto w-[100%]">
            <ProjestNav/>
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

            {/* <section className=" py-12">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl xl:text-4xl font-bold text-center mb-8">Featured Developers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <DeveloperCard
                        name="John Doe"
                        role="Full Stack Developer"
                        imageSrc="https://i.pinimg.com/474x/f6/38/53/f63853a21cc19ca9c150619527396b1a.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ante eget eros pretium efficitur."
                        githubLink="#"
                    />
                    <DeveloperCard
                        name="John Doe"
                        role="Full Stack Developer"
                        imageSrc="https://i.pinimg.com/474x/f6/38/53/f63853a21cc19ca9c150619527396b1a.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ante eget eros pretium efficitur."
                        githubLink="#"
                    />
                    <DeveloperCard
                        name="John Doe"
                        role="Full Stack Developer"
                        imageSrc="https://i.pinimg.com/474x/f6/38/53/f63853a21cc19ca9c150619527396b1a.jpg"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ante eget eros pretium efficitur."
                        githubLink="#"
                    />          
                        
                    </div>
                </div>
            </section> */}

            <section className="py-12">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl xl:text-4xl font-bold text-center mb-8">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                    <FeaturedProject
                        title="Noptin"
                        description="Noptin is the best email newsletter plugin for WordPress."
                        projectLink="https://github.com/hizzle-co/noptin"
                        demoLink="https://noptin.com"
                    />
                    <FeaturedProject
                        title="Tesla UI"
                        description="Developed UI for a Tesla clone website using React, HTML, CSS, and JavaScript. UI is completely responsive and has animation effects (React Reveal)"
                        projectLink="https://github.com/munnokd/Tesla-UI/"
                        demoLink="https://tesla-clone-b0e1e.web.app/"
                    />
                    <FeaturedProject
                        title="ArcFox"
                        description="ArcFox is a pack of firefox improvements that brings the appearance and some of the features of arc browser to firefox."
                        projectLink="https://github.com/use-arcfox/arcfox"
                        demoLink="https://arcfox.vercel.app/"
                    />

                    </div>
                </div>
            </section>
            <TestimonialSection/>
        </div>
    )
}

export default HomePage