import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { GithubAuthProvider } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';

function ProjestNav() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("code")) {
      auth
        .getRedirectResult()
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  
    return () => {
      unsubscribe();
    };
  }, []);
  

  const handleGitHubLogin = () => {
    const provider = new GithubAuthProvider();
    auth.signInWithRedirect(provider);
  };
  

  return (
    <Disclosure as="nav" className="bg-blue-900 text-white z-50 fixed top-0 left-0 right-0">
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
                    <Link to="/addproject"><div className="hover:transition-[bg] m-2 md:m-5 hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg py-[10px] px-[20px] rounded-[3px]">Add Project</div></Link>                 
                    {/* <Link to="contributing"><div className="hover:transition-[bg] m-2 md:m-5 hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg py-[10px] px-[20px] rounded-[3px]">Contributing</div></Link> */}
                    <a href="https://github.com/Frenziecodes/Projest" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.58 31.77" height="24">
                      <path d="M16.29,0A16.29,16.29,0,0,0,.42,17.54c0,7.29,4.72,13.49,11.28,15.67.82.15,1.11-.36,1.11-.79,0-.39,0-1.42,0-2.79-4.59,1-5.56-2.21-5.56-2.21A4.39,4.39,0,0,0,4.2,25.17c-1.51-.84.11-.82.11-.82a3.47,3.47,0,0,1,2.53,1.71,3.48,3.48,0,0,0,4.77,1.36,3.49,3.49,0,0,1,1-2.19c-3.6-.41-7.4-1.8-7.4-8a6.28,6.28,0,0,1,1.68-4.34,5.81,5.81,0,0,1,.16-4.29s1.36-.43,4.45,1.66a15.3,15.3,0,0,1,8.12,0C22.77,6.43,24.13,7.86,24.13,7.86a5.8,5.8,0,0,1,.16,4.29,6.27,6.27,0,0,1,1.68,4.34c0,6.23-3.81,7.58-7.44,7.98a3.9,3.9,0,0,1,1.12,3,.79.79,0,0,0,.09.32c0,.38.09,1.4,0,2.79,0,.43.29.94,1.12.79A16.29,16.29,0,0,0,16.29,0Z" fill="#ffffff" />
                    </svg>
                    </a>

                    {user ? (
                      <img src={user.photoURL} alt="Profile" className="h-8 w-8 rounded-full" />
                    ) : (
                      <a
                        href="https://github.com/login/oauth/authorize?client_id=0897b2b55024d54e3d6b&redirect_uri=https://projest.vercel.app/addproject&scope=user"
                        onClick={handleGitHubLogin}
                        className="hover:transition-[bg] m-2 md:m-5 hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg py-[10px] px-[20px] rounded-[3px]"
                      >
                        Login
                      </a>
                    )}

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
              <Link to="/addproject"><div className="hover:transition-[bg] m-2 md:m-5 hover:bg-opacity-20 hover:backdrop-blur-lg hover:drop-shadow-lg py-[10px] px-[20px] rounded-[3px]">Add Project</div></Link> 
              {/* <a href="https://github.com/Frenziecodes/Projest" className="m-2 flex items-center py-[10px] px-[20px] rounded-[3px]">
                Star Project
              </a>            */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default ProjestNav;
