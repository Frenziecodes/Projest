import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showDropDowns,setShowDropDowns]=React.useState(false)
  const [showHamburgerMenu,setShowHamburgerMenu]=React.useState(false)
  const showDropDownHandler=()=>{
    setShowDropDowns(!showDropDowns)
  }
 

  return (
    <div className="flex justify-between items-center align-middle h-16 w-full bg-blue-600 text-white py-2 px-3  mb-10">
    <div className="flex justify-center items-center">
      <Link to="/" className="animate__animated animate__wobble">PROJEST</Link>
    </div>
    <ul className="hidden md:flex md:justify-center md:items-center">
        
        <li className="dropdown m-2 md:m-5">
            <Link onClick={showDropDownHandler}
            >Projects</Link>
           { showDropDowns&& <ul className="dropdown-content p-3 bg-blue-500 absolute">
              <li className="m-2"><Link to="/viewprojects">View Project</Link></li>
              <li className="m-2"><Link to="/addproject">Add Project</Link></li>                  
            </ul>}
        </li>         
        <li className="m-2 md:m-5"><Link to="docs">Docs</Link></li>
        <li className="m-2 md:m-5"><Link to="contributing">Contributing</Link></li>            
    </ul> 
    
    

    <div className="md:hidden">
      <svg onClick={()=>{
        setShowHamburgerMenu(!showHamburgerMenu)
      }}
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      {showHamburgerMenu&& (
         <ul className="dropdown-content p-3 bg-blue-500 mt-10 ">
      
         <li className="dropdown m-2 md:m-5">
             <Link onClick={showDropDownHandler} >Projects</Link>
            { showDropDowns&& <ul className="dropdown-content p-3 bg-blue-500 ">
               <li className="m-2"><Link to="/viewprojects">View Project</Link></li>
               <li className="m-2"><Link to="/addproject">Add Project</Link></li>                  
             </ul>}
         </li>         
         <li className="m-2 md:m-5"><Link to="docs">Docs</Link></li>
         <li className="m-2 md:m-5"><Link to="contributing">Contributing</Link></li>            
     </ul> 
      )}
    </div>   
 </div>
  );
}

export default Navbar;
