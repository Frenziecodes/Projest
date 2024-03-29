import { Link } from 'react-router-dom';

function ProjestHero(){
    return(
        <section className="text-gray-800 text-center lg:text-left mt-16 lg:mt-20 px-6">
        <div className="grid md:grid-cols-2 gap-6 xl:gap-8 items-center lg:mb-20">
            <div className="mb-2 lg:mb-0 flex flex-col justify-center items-center lg:items-start">
                <h2 className="text-2xl md:text-2xl xl:text-4xl font-bold tracking-tight">
                    Ready to share your projects<br />
                    <span className="text-blue-600">on Projest?</span>
                </h2>
                <p className="text-gray-500 my-4 text-md max-w-lg lg:max-w-none text-center lg:text-left">
                    Join a vibrant community of developers. Showcase your skills, collaborate on innovative projects, and unlock endless possibilities. Connect, learn, and grow together with Projest.
                </p>

                <Link to="viewprojects">
                    <div className="m-2 md:m-5 py-2 px-6 rounded-md bg-blue-800 hover:bg-blue-900 text-white font-semibold shadow-lg transition duration-300 ease-in-out">
                       Explore Projects
                    </div>
                </Link>
            </div>
            <div className="mb-4 lg:mb-0 justify-center flex">
              <img className="max-h-96" src="https://i.pinimg.com/564x/eb/d5/7e/ebd57e2fcb81ef9fb0ff453d6ab208a6.jpg" alt="Illustration" />
            </div>


        </div>
    </section>
    )
}

export default ProjestHero;