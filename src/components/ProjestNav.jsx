import React from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaStar } from 'react-icons/fa';


function ProjestNav() {
  return (
    <Disclosure as="nav" className="bg-white text-gray-700 z-50 fixed top-0 left-0 right-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <div className="flex justify-center items-center">
                    <Link to="/" className="animate__animated animate__wobble font-medium">PROJEST</Link>
                  </div>
                </div>

              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link to="/"><div className="hover:transition-[bg] m-2 md:m-5 hover:bg-opacity-20 hover:backdrop-blur-lg  hover:drop-shadow-lg py-[10px] px-[20px] rounded-[3px]">Home</div></Link>                   
                    <Link to="viewprojects"><div className="hover:transition-[bg] m-2 md:m-5 hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg py-[10px] px-[20px] rounded-[3px]">Projects</div></Link>
                    <Link to="Login"><div className="hover:transition-[bg] m-2 md:m-5 hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg py-[10px] px-[20px] rounded-[3px]">Login</div></Link>
                    <Link to="contributing"><div className="hover:transition-[bg] m-2 md:m-5 hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg py-[10px] px-[20px] rounded-[3px]">Contributing</div></Link>
                    <a href="https://github.com/Frenziecodes/Projest" className="text-yellow-500 hover:text-yellow-300 flex items-center">
                      <FaStar className="mr-1" />
                      Star Project
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-inset">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Link to="/"><div className="hover:transition-[bg] m-2 md:m-5 hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg py-[10px] px-[20px] rounded-[3px]">Home</div></Link>             
              <Link to="viewprojects"><div className="hover:transition-[bg] m-2 md:m-5 hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg py-[10px] px-[20px] rounded-[3px]">Projects</div></Link>
              <Link to="Login"><div className="hover:transition-[bg] m-2 md:m-5 hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg py-[10px] px-[20px] rounded-[3px]">Login</div></Link>
              <Link to="contributing"><div className="hover:transition-[bg] m-2 md:m-5 hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg py-[10px] px-[20px] rounded-[3px]">Contributing</div></Link>
              <a href="https://github.com/Frenziecodes/Projest" className="text-yellow-500 hover:text-yellow-300 flex items-center">
                <FaStar className="mr-1" />
                Star Project
              </a>           
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default ProjestNav;
