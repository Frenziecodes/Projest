import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'


function Navbar() {
  const [showHamburgerMenu, setShowHamburgerMenu] = React.useState(false)


  return (
    <div className="flex justify-between items-center align-middle h-16 w-full bg-blue-600 text-white py-2 px-3  mb-10">
      <div className="flex justify-center items-center">
        <Link to="/" className="animate__animated animate__wobble">PROJEST</Link>
      </div>
      <ul className="hidden md:flex md:justify-center md:items-center">

        <li className="m-2 md:m-5"><Link to="">Home</Link></li>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="m-2 mb-0 md:m-5 ">
              Projects
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 -mt-3 w-56 origin-top-right rounded-md bg-blue-500 text-white focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/viewprojects"
                      className={'block px-4 py-2 text-sm hover:bg-blue-600'}
                    >
                      View Project
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/addproject"
                      className={'block px-4 py-2 text-sm hover:bg-blue-600'}
                    >
                      Add Project
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <li className="m-2 md:m-5"><Link to="docs">Docs</Link></li>
        <li className="m-2 md:m-5"><Link to="contributing">Contributing</Link></li>
      </ul>



      <div className="md:hidden">
        <svg onClick={() => {
          setShowHamburgerMenu(!showHamburgerMenu)
        }}
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        {showHamburgerMenu && (
          <ul className="dropdown-content p-3 bg-blue-500 mt-10 ">
            <li className="m-2 md:m-5"><Link to="">Home</Link></li>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="m-2 mb-0 md:m-5 ">
                  Projects
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 -mt-3 w-56 origin-top-right rounded-md bg-blue-500 text-white focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/viewprojects"
                          className={'block px-4 py-2 text-sm hover:bg-blue-600'}
                        >
                          View Project
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/addproject"
                          className={'block px-4 py-2 text-sm hover:bg-blue-600'}
                        >
                          Add Project
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <li className="m-2 md:m-5"><Link to="docs">Docs</Link></li>
            <li className="m-2 md:m-5"><Link to="contributing">Contributing</Link></li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
