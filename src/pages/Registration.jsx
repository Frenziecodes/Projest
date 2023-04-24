import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
    <div className="max-w-md mx-auto">
    <h2 className="text-2xl font-bold mb-4">Register</h2>
    {error && <p className="text-red-500 mb-4">{error}</p>}
    <form onSubmit={handleRegistration} className="space-y-4">
      <div>
        <label className="block mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label className="block mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border-gray-800 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
      Already have an account? <Link to="/Login" className="text-blue-500 hover:text-blue-600 transition-colors duration-300">Login here</Link>.
    </p>
  </div>
  
  );
};

export default Registration;
