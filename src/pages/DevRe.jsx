import DeveloperResource from "../components/DeveloperResource";

function DeveloperResources(){
    return(
        <section>
            <div className="p-3 min-h-screen bg-gray-200">
                <div className="grid md:grid-cols-2 gap-6 xl:gap-8 items-center lg:mb-20">
                    <div className="mb-2 lg:mb-0 flex flex-col justify-center items-center lg:items-start">
                        <h2 className="text-xl md:text-xl xl:text-3xl font-bold tracking-tight">
                           Web development Hub: Empower Your Projects with Cutting-Edge Web development Resources
                        </h2>
                        <p className="text-gray-500 my-4 text-md max-w-lg lg:max-w-none text-center lg:text-left">
                           Welcome to the web Development Hub on projest! Unlock the full potential of your projects with our comprehensive collection of web development tools, resources, and community support. whether you're a beginner or an experienced web developer, our platform provides you with everything you need to build stunning websites and web applications.
                        </p>

                    </div>
                    <div className="mb-4 lg:mb-0 justify-center flex">
                    <img className="max-h-96" src="https://i.pinimg.com/474x/a7/9f/84/a79f8402cc377c449bd93282b1e4dbc6.jpg" alt="Illustration" />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:mt-16">
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
                        Description="Discover a collection of essential tools for developers. "
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