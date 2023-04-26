import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout'

function SideNav() {
  return (
    <nav className='w-full flex flex-col h-screen align-middle bg-white mt-10'>
      <ul className='relative"'>     

        <li className='relative flex items-center text-sm mb-2 py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded hover:text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out text-gray-900' data-mdb-ripple="true" data-mdb-ripple-color="dark">
          <Link to="/dashboard" className='flex items-center w-full'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            <span className='ml-2'>Dashboard</span>
          </Link>
        </li>
        <li className='relative flex items-center text-sm mb-2 py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded hover:text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out text-gray-900" data-mdb-ripple="true" data-mdb-ripple-color="dark"'>
          <Link to="/viewprojects" className='flex items-center w-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
            <span className='ml-2'>Explore Projects</span>
          </Link>
        </li>
        <li className='relative flex items-center text-sm mb-2 py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded hover:text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out text-gray-900" data-mdb-ripple="true" data-mdb-ripple-color="dark"'>
          <Link to="/myprojects"className='flex items-center w-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
            <span className='ml-2'>My Projects</span>          
          </Link>
        </li>
        <li className='relative flex items-center text-sm mb-2 py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded hover:text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out text-gray-900" data-mdb-ripple="true" data-mdb-ripple-color="dark"'>
          <Link to="/addproject" className='flex items-center w-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
            </svg>
            <span className='ml-2'>Add Project</span>
          </Link>
        </li>
        <li className='relative flex items-center text-sm mb-2 py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded hover:text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out text-gray-900" data-mdb-ripple="true" data-mdb-ripple-color="dark"'>
          <Link to="/notifications"className='flex items-center w-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
            </svg>
            <span className='ml-2'>Notifications</span>
          </Link>
        </li>
        <li className='relative flex items-center text-sm mb-2 py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded hover:text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out text-gray-900" data-mdb-ripple="true" data-mdb-ripple-color="dark"'>
          <Link to="/profile" className='flex items-center w-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className='ml-2'>Profile</span>
          </Link>
        </li>
        <li className='relative flex items-center text-sm mb-2 py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded hover:text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out text-gray-900" data-mdb-ripple="true" data-mdb-ripple-color="dark"'>
          
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
            </svg>
            <Logout/>          
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
