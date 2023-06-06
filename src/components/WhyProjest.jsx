import React from "react";
import { Link } from 'react-router-dom';

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

        <section className="my-3 text-center md:text-left">
          <div className="block rounded-lg bg-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-6 text-2xl font-bold">Submit Your Projects with Ease</h2>
                  <p className="mb-6 pb-2 text-neutral-500">
                    Showcase your projects by filling out our user-friendly submission form.
                  </p>
                  <div className="flex justify-center">
                    <Link to="addproject" className="py-2 px-6 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg transition duration-300 ease-in-out">
                      Add Project
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-full md:w-1/2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/097.jpg"
                  alt="Add Project Form"
                  className="w-1/2 h-96"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="my-6 text-center md:text-left">
          <div className="block rounded-lg bg-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex justify-center items-center w-full md:w-1/2">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/097.jpg"
                  alt="Add Project Form"
                  className="w-1/2 h-96"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="px-6 py-12 md:px-12">
                  <h2 className="mb-6 text-3xl font-bold">Explore Exciting Projects</h2>
                  <p className="mb-6 pb-2 text-neutral-500">
                    Discover a wide range of projects submitted by talented individuals.
                  </p>
                  <div className="flex justify-center">
                    <Link to="viewprojects" className="py-2 px-6 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg transition duration-300 ease-in-out">
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
