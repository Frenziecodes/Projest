import DeveloperResource from "../components/DeveloperResource";

function DeveloperResources(){
    return(
        <section>
            <div className="p-3 min-h-screen bg-red-200">
                <div className="grid md:grid-cols-2 gap-6 xl:gap-8 items-center lg:mb-20">
                    <div className="mb-2 lg:mb-0 flex flex-col justify-center items-center lg:items-start">
                        <h2 className="text-2xl md:text-2xl xl:text-4xl font-bold tracking-tight">
                            Ready to share your projects<br />
                            <span className="text-blue-600">on Projest?</span>
                        </h2>
                        <p className="text-gray-500 my-4 text-md max-w-lg lg:max-w-none text-center lg:text-left">
                            Join a vibrant community of developers. Showcase your skills, collaborate on innovative projects, and unlock endless possibilities. Connect, learn, and grow together with Projest.
                        </p>

                    </div>
                    <div className="mb-4 lg:mb-0 justify-center flex">
                    <img className="max-h-96" src="https://i.pinimg.com/564x/eb/d5/7e/ebd57e2fcb81ef9fb0ff453d6ab208a6.jpg" alt="Illustration" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <DeveloperResource
                        icon="video"
                        name= "video Tutorials"
                        Description="Learn through step by step video tutorials"
                        link=""
                    />
                    <DeveloperResource
                        icon="book"
                        name= "Recommended Books"
                        Description="Discover must read books for developers"
                        link=""
                    />
                    <DeveloperResource
                        icon="tool"
                        name= "Developer Tools"
                        Description="Discover a collection of essential tools for developers,including code validators, syntax highlighters, performance analyzers and many other tools "
                        link=""
                    />
                    <DeveloperResource
                        icon="website"
                        name= "Useful websites"
                        Description="Explore websites with valuable development resources"
                        link=""
                    />
                    
                 
                </div>
            </div>
        </section>
    )
}

export default DeveloperResources;