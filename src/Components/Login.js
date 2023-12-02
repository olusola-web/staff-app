import React, { useState } from "react";
import logo from "../Assets/Images/MyAfrimall.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // setIsLoading(true);
    event.preventDefault();
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-8 md:p-12 border-2 w-auto lg:w-[36rem] h-auto lg:h-[33rem] text-center">
        <img src={logo} alt="logo" className="w-32 mb-3" />
        <h1 className="text-2xl font-semibold mb-4">Welcome Admin</h1>
        <p className="text-gray-600 mb-6">Log in with your information</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 lg:mx-8">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Name:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={userData?.email || ""}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-6 lg:mx-8">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData?.password || ""}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-[#049805] text-white py-2 rounded-md focus:outline-none w-full flex items-center justify-center"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
