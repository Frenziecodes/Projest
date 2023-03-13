import React from 'react'

function HomePage() {
  return (
    <div className="container mt-20 md:mb-10 px-6 mx-auto">    
      <section className="text-gray-800 text-center lg:text-left">

      <div className="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">
          <div className="mb-2 lg:mb-0">
          <h2 className="text-3xl md:text-4xl xl:text-4xl font-bold tracking-tight">
              Ready to share your projects<br />
              <span className="text-blue-600">on projest?</span>
          </h2>
          </div>
          <div className="mb-4 lg:mb-0">            
          <p className="text-gray-500 text-lg">
              Join a community of like-minded individuals and showcase your skills, get recognized for your work and connect with potential collaborators, elevate your career with a professional portfolio on Projest, discover new projects and talents, and find your next job or team member on Projest.
          </p>
          </div>
      </div>
      </section>  
      <div className="container my-10 px-6 mx-auto">    
          <section className="mb-20 text-gray-800">
              <div className="flex justify-center">
                  <div className="text-center max-w-[700px]">
                  <h2 className="text-3xl font-bold mb-6">What makes Projest so great?</h2>
                  <p className="text-gray-500 mb-12">
                      Projest is a powerful platform that empowers users to showcase their work, connect with others in their field, and advance their careers.
                      To make it easy for users to navigate and find what they are looking for, Projest offers a wide range of features such as :
                  </p>
                  </div>
              </div>
          
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-12">
                  <div className="mb-6">
                  <div className="flex">
                      <div className="shrink-0 mt-1">
                      <svg className="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                          </path>
                      </svg>
                      </div>
                      <div className="grow ml-4">
                      <p className="font-bold mb-1">User-friendly project submission form</p>
                      <p className="text-gray-500">Users can easily submit their projects by filling out the form.</p>
                      </div>
                  </div>
                  </div>
          
                  <div className="mb-6">
                  <div className="flex">
                      <div className="shrink-0 mt-1">
                      <svg className="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                          </path>
                      </svg>
                      </div>
                      <div className="grow ml-4">
                      <p className="font-bold mb-1">Dynamic project display</p>
                      <p className="text-gray-500">Users can view all the projects that have been submitted in real-time.</p>
                      </div>
                  </div>
                  </div>
          
                  <div className="mb-6">
                  <div className="flex">
                      <div className="shrink-0 mt-1">
                      <svg className="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                          </path>
                      </svg>
                      </div>
                      <div className="grow ml-4">
                      <p className="font-bold mb-1">Real-time updates</p>
                      <p className="text-gray-500">The projects are stored in a Firebase Realtime Database, ensuring real-time updates and quick access to the most recent projects.</p>
                      </div>
                  </div>
                  </div>
          
                  <div className="mb-6">
                  <div className="flex">
                      <div className="shrink-0 mt-1">
                      <svg className="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                          </path>
                      </svg>
                      </div>
                      <div className="grow ml-4">
                      <p className="font-bold mb-1">User-friendly interface</p>
                      <p className="text-gray-500">The interface is designed to be user-friendly and accessible, making it easy for users to add and view projects.</p>
                      </div>
                  </div>
                  </div>
          
                  <div className="mb-6">
                  <div className="flex">
                      <div className="shrink-0 mt-1">
                      <svg className="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                          </path>
                      </svg>
                      </div>
                      <div className="grow ml-4">
                      <p className="font-bold mb-1">Responsive design</p>
                      <p className="text-gray-500">The site is designed to be responsive, meaning it will adjust to different screen sizes and devices for optimal viewing.</p>
                      </div>
                  </div>
                  </div>
          
                  <div className="mb-6">
                  <div className="flex">
                      <div className="shrink-0 mt-1">
                      <svg className="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                          </path>
                      </svg>
                      </div>
                      <div className="grow ml-4">
                      <p className="font-bold mb-1">Simple navigation</p>
                      <p className="text-gray-500">The navigation is simple and intuitive, making it easy for users to find what they are looking for.</p>
                      </div>
                  </div>
                  </div>     
                            
                  <div className="mb-6">
                  <div className="flex">
                      <div className="shrink-0 mt-1">
                      <svg className="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor"
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                          </path>
                      </svg>
                      </div>
                      <div className="grow ml-4">
                      <p className="font-bold mb-1">Secure data storage</p>
                      <p className="text-gray-500">Firebase provides secure and reliable storage for all the project information.</p>
                      </div>
                  </div>
                  </div>
              </div>
          </section>
  </div>
 </div>  
  )
}

export default HomePage