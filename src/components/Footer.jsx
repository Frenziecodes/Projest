import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-600 text-center lg:text-left relative bottom-0 right-0 left-0">
    <div className="text-white text-center p-4">
      © {new Date().getFullYear() } All rights reserved    
    </div>
  </footer>
  )
}

export default Footer