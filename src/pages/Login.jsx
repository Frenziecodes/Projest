import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg border border-gray-300 px-4 py-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Welcome Back</h2>
        <p className="text-center mb-4">Please Login to Projest to continue</p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-gray-300 bg-gray-100 rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="block mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-gray-300 bg-gray-100 rounded-lg px-3 py-2"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Login
          </button>
        </form>       
      </div>
    </div>
  );
};
export default Login;