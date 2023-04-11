import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-600 text-center lg:text-left mt-auto">
    <div className="text-white text-center p-4">
      © {new Date().getFullYear() } All rights reserved    
    </div>
  </footer>
  )
}

export default Footer