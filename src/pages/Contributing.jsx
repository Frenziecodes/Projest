import React from 'react'
import Navbar from '../components/Navbar'

function Contributing() {
    return (
        <div>
            <Navbar/>
            <section className="my-3 md:my-16 flex flex-col items-center justify-center md:w-full">
                <h2 className="p-2 text-3xl font-bold mb-4 text-center text-black">Contribution Guidelines</h2>
                <div className='border-b-[3px] border-blue-600 mb-10 w-[200px]'></div>
                <p className='p-4 py-4 font-medium text-lg bg-blue-100 w-[100%] text-center'>Welcome to the Projest project! We are grateful for your interest in contributing to our project. With your help, we can continue to improve Projest and provide a platform for users to showcase their projects.</p>
                <div className="flex flex-col md:flex-row justify-center items-start">
                    <div className="p-4 flex justify-center flex-col py-4 md:w-[40%]">
                        <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">
                            Code of Conduct
                        </h4>
                        <p>We expect all contributors to Projest to adhere to our code of conduct. This code outlines the standards of behavior expected of all contributors, including respecting the opinions and contributions of others, avoiding harassment and discrimination, and maintaining a positive and productive environment for all contributors.</p>
                    </div>
                    <div className="p-4 flex justify-center flex-col py-4 md:w-[40%]">
                        <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">
                            Issues
                        </h4>
                        <div>
                            <p>If you encounter any issues while using Projest, please report them to our issues tracker. To ensure your issue is quickly resolved, please provide the following information:</p>
                            <p>1. A clear and concise description of the issue.</p>
                            <p>2. Steps to reproduce the issue. </p>
                            <p>3. Screenshots or video demonstrating the issue.</p>
                            <p>4. The version of Projest you are using.</p>
                            <p>5. Pull Requests</p>
                        </div>
                    </div>

                    <div className="p-4 flex justify-center flex-col py-4 md:w-[40%]">
                        <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">
                            Pull Request
                        </h4>
                        <p>If you would like to contribute to Projest by fixing an issue or adding a new feature, please follow these steps:</p>
                        <p>1. Fork the Projest repository on GitHub.</p>
                        <p>2. Create a new branch for your changes.</p>
                        <p>3. Make your changes and push them to your fork.</p>
                        <p>4. Submit a pull request to the Projest repository.</p>
                        <p>N/B: In your pull request, please provide a clear and concise description of your changes and why they are necessary. Your changes will be reviewed by our development team and, if approved, will be merged into the Projest repository.</p>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row justify-center items-start">
                    <div className="p-4 flex justify-center flex-col py-4 md:w-[40%]">
                        <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">
                            Development Workflow
                        </h4>
                        <p>Projest uses a GitHub-based workflow for managing contributions. Our development team will review all pull requests and provide feedback on any changes that need to be made before they are merged into the Projest repository.</p>
                    </div>
                    <div className="p-4 flex justify-center flex-col py-4 md:w-[40%]">
                        <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 md:mb-1 text-blue-600">
                            Documentation
                        </h4>
                        <p>We welcome contributions to the Projest documentation. Please see our documentation guidelines for information on how to contribute to the documentation.</p>
                    </div>
                    <div className="p-4 flex justify-center flex-col py-4 md:w-[40%]">
                        <h4 className="font-medium leading-tight text-2xl mt-0 mb-2 text-blue-600">
                            Credits
                        </h4>
                        <p>We would like to extend a special thank you to all of the contributors who have helped make Projest a success. Your contributions are greatly appreciated and help make Projest a better platform for users everywhere.</p>
                    </div>
                </div>
                <p className='mt-8 py-4 font-medium text-lg bg-blue-100 w-[100%] text-center'>Thank you for considering a contribution to Projest. We look forward to working with you!</p>
            </section>
        </div>
    )
}

export default Contributing