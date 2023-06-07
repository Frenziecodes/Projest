import React from "react";
import { Link } from 'react-router-dom';
import addProjectImage from '../images/addProject.png';
import ViewprojectImage from '../images/explore.png'

const WhyProjestSection = () => {
  return (
    <div className="my-10 mx-auto">
      <section className="mb-18 text-gray-800">
        <div className="flex justify-center w-full mb-20">
          <div className="text-center max-w-[700px] my-10 mx-10">
            <div className="flex flex-col justify-center items-center">                
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">Why Choose Projest?</h2>
                <div className="h-1 bg-gray-600 mb-10 w-40"></div>
            </div>
            <p className="text-gray-500 text-left lg:text-center">
              Projest is a powerful platform that empowers users to showcase their work, connect with others in their field, and advance their careers.
            </p>
          </div>
        </div>

        <section className="my-3 text-center mx-6 md:text-left bg-gradient-to-r from-blue-900 to-violet-500 rounded-md">
          <div className="block rounded-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-6 text-2xl font-bold">Submit Your Projects with Ease</h2>
                  <p className="mb-6 pb-2 text-white">
                    Showcase your projects by filling out our user-friendly submission form.
                  </p>
                  <div className="">
                    <Link to="addproject" className="py-2 px-6 rounded-md bg-white text-blue-900 font-semibold shadow-lg transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white">
                      Add Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-full md:w-1/2 p-6">
                <img
                  src={addProjectImage}
                  alt="Add Project Form"
                  className="h-64 md:h-96"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="my-6 mx-6 text-center md:text-left bg-gradient-to-r from-blue-900 to-violet-500 rounded-md">
          <div className="block rounded-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex justify-center items-center w-full md:w-1/2 p-6">
                <img
                  src={ViewprojectImage}
                  alt="View Project"
                  className="h-64 md:h-96"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-6 text-3xl font-bold md:text-right">Explore Exciting Projects</h2>
                  <p className="mb-6 pb-2 text-white md:text-right">
                    Discover a wide range of projects submitted by talented individuals.
                  </p>
                  <div className="flex justify-center md:justify-end">
                    <Link to="viewprojects" className="py-2 px-6 rounded-md bg-white text-blue-900 font-semibold shadow-lg transition duration-300 ease-in-out hover:bg-blue-400 hover:text-white">
                      Explore Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default WhyProjestSection;
