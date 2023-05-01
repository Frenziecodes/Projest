import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import NavBar from '../components/Navbar'

const Registration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/Login");
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <section>
      <NavBar />
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          {/* <div className="max-w-md mx-auto text-center">
            <p className="text-lg font-medium text-gray-800">
              Currently we are not allowing account registration.
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Head over to login page and login using Demo details:
            </p>
            <ul className="mt-2 text-sm text-gray-600">
              <li>Email: test@gmail.com</li>
              <li>Password: 123456</li>
            </ul>
          </div> */}

          <div className="w-full max-w-md bg-white rounded-lg border border-gray-300 px-4 py-6">
            <h2 className="text-3xl font-bold mb-2">Welcome to Projest!</h2>
            <p className="mb-3">Register your account by filling the form below</p>
            <p className="text-red-500 mb-4">{error}</p>
            <form className="space-y-4" onSubmit={handleRegistration}>
              <div>
                <label className="block mb-2" for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-gray-300 bg-gray-100 px-3 py-2 w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block mb-2" for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-gray-300 bg-gray-100 px-3 py-2 w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white rounded-md py-2 hover:bg-indigo-600 transition duration-200"
              >
                Register
              </button>
            </form>
            <p className="mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
                    Login here
              </Link>
            </p>
          </div>          
        </div>  
    </section>
    
  );
};

export default Registration;
