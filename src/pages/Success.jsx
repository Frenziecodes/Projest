import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col bg-white text-gray-700 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Thank you for your Submission!</h1>
      <p className="text-gray-600">Your project has been submitted</p>
      <Link className="text-blue-600" to={"/"}>Go back to the homepage?</Link>     
    </div>
  );
}

export default NotFound;
