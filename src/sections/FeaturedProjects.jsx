import React from 'react';

function FeaturedProjects({ projects }) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl xl:text-4xl font-bold text-center mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg border border-gray-300 p-6 hover:-translate-y-1 hover:scale-110 duration-300">
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                {project.title}
              </h2>
              <p className="text-gray-800 mb-4" style={{ height: '3.75rem' }}>
                {project.description.length > 73 ? `${project.description.slice(0, 73)}...` : project.description}
              </p>
              <div className="flex justify-between">
                <a
                  href={project.userGithubLink}
                  className="bg-gradient-to-r from-blue-500 to-pink-500 hover:bg-gradient-to-l hover:from-blue-500 hover:to-pink-500 text-gray-700 py-2 px-4 rounded-md mr-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Profile
                </a>
                <a
                  href={project.projectGithubLink}
                  className="bg-gradient-to-r from-pink-500 to-blue-500 hover:bg-gradient-to-l hover:from-pink-500 hover:to-blue-500 text-gray-700 py-2 px-4 rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Link
                </a>
              </div>
              {project.userGithubLink && (
                <div className="mt-4 flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src={`https://avatars.githubusercontent.com/${project.userGithubLink.split('/').pop()}`}
                    alt="Profile"
                  />
                  <span className="text-gray-600">
                    {project.userGithubLink.split('/').pop()}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
