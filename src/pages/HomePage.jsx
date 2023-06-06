import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjestNav from '../components/ProjestNav'
import { Link } from 'react-router-dom';

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
                            <div className="m-2 md:m-5 py-2 px-6 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg transition duration-300 ease-in-out">
                               Explore Projects
                            </div>
                        </Link>
                    </div>
                    <div className="mb-4 lg:mb-0 justify-center flex">
                        <img className="w-full max-h-40 lg:max-h-96" src="https://i.pinimg.com/564x/eb/d5/7e/ebd57e2fcb81ef9fb0ff453d6ab208a6.jpg" alt="Illustration" />
                    </div>

                </div>
            </section>

            <section className=" py-12">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl xl:text-4xl font-bold text-center mb-8">Featured Developers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div class="flex items-center justify-center bg-gray-200 w-24 h-24 mx-auto rounded-full overflow-hidden">
                            <img src="https://i.pinimg.com/474x/f6/38/53/f63853a21cc19ca9c150619527396b1a.jpg" alt="Developer" class="w-full h-full object-cover" />
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-2">John Doe</h3>
                            <p class="text-gray-600">Full Stack Developer</p>
                            <p class="text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ante eget eros pretium efficitur.</p>
                            <div class="mt-6">
                            <a href="#" class="text-blue-500 font-semibold hover:text-blue-600">View Github Profile</a>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div class="flex items-center justify-center bg-gray-200 w-24 h-24 mx-auto rounded-full overflow-hidden">
                            <img src="https://i.pinimg.com/474x/f6/38/53/f63853a21cc19ca9c150619527396b1a.jpg" alt="Developer" class="w-full h-full object-cover" />
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-2">John Doe</h3>
                            <p class="text-gray-600">Full Stack Developer</p>
                            <p class="text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ante eget eros pretium efficitur.</p>
                            <div class="mt-6">
                            <a href="#" class="text-blue-500 font-semibold hover:text-blue-600">View Github Profile</a>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div class="flex items-center justify-center bg-gray-200 w-24 h-24 mx-auto rounded-full overflow-hidden">
                            <img src="https://i.pinimg.com/474x/f6/38/53/f63853a21cc19ca9c150619527396b1a.jpg" alt="Developer" class="w-full h-full object-cover" />
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-semibold mb-2">John Doe</h3>
                            <p class="text-gray-600">Full Stack Developer</p>
                            <p class="text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ante eget eros pretium efficitur.</p>
                            <div class="mt-6">
                            <a href="#" class="text-blue-500 font-semibold hover:text-blue-600">View Github Profile</a>
                            </div>
                        </div>
                    </div>           
                        
                    </div>
                </div>
            </section>

            <section className="py-12">
    <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl xl:text-4xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="project1.jpg" alt="Project" className="w-full h-40 object-cover" />
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Ecommerce Website</h3>
                    <p className="text-gray-600">by John Doe</p>
                    <p className="text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ante eget eros pretium efficitur.</p>
                    <div className="mt-6">
                        <a href="#" className="text-blue-500 font-semibold hover:text-blue-600">View Project</a>
                    </div>
                </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="project2.jpg" alt="Project" className="w-full h-40 object-cover" />
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Mobile App Design</h3>
                    <p className="text-gray-600">by Jane Smith</p>
                    <p className="text-gray-500 mt-4">Duis et lectus ac mauris faucibus eleifend. Nulla consectetur velit nec arcu semper, et fermentum nulla commodo.</p>
                    <div className="mt-6">
                        <a href="#" className="text-blue-500 font-semibold hover:text-blue-600">View Project</a>
                    </div>
                </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="project3.jpg" alt="Project" className="w-full h-40 object-cover" />
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Data Visualization Dashboard</h3>
                    <p className="text-gray-600">by Alex Johnson</p>
                    <p className="text-gray-500 mt-4">Aenean commodo urna eget dolor malesuada congue. Maecenas iaculis purus sed ultrices consequat.</p>
                    <div className="mt-6">
                        <a href="#" className="text-blue-500 font-semibold hover:text-blue-600">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

            <div className="my-10 mx-auto">
                <section className="mb-20 text-gray-800">
                    <div className="flex justify-center bg-blue-100 w-[100%] mb-[20px]">
                        <div className="text-center flex flex-col justify-center items-center max-w-[700px] my-[50px] mx-[30px]">
                            <h2 className="text-2xl lg:text-3xl font-bold mb-4">What makes Projest so great?</h2>
                            <div className='border-b-[3px] border-blue-600 mb-10 w-[200px]'></div>
                            <p className="text-gray-500 text-start lg:text-center">
                                Projest is a powerful platform that empowers users to showcase their work, connect with others in their field, and advance their careers.
                                To make it easy for users to navigate and find what they are looking for, Projest offers a wide range of features described belows 👇
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-12 mx-[30px] lg:mx-[100px] my-[50px]">
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