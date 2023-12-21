import React, { useState } from "react";
import logo from "../Assets/Images/MyAfrimall.png";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import axios from "axios";
import { Spinner } from "react-activity";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { baseUrl, setIsLoggedIn } = useStateContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    const newErrors = { ...errors };
  delete newErrors[name];
  setErrors(newErrors);
  };
//   const handleChange = (e) => {
//   const { name, value, type, files } = e.target;
//   setFormData({
//     ...formData,
//     [name]: type === "file" ? files[0] : value,
//   });

//   const newErrors = { ...errors };
//   delete newErrors[name];
//   setErrors(newErrors);
// };
const handleBlur = (e) => {
  const { name, value } = e.target;
  setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: value.trim() ? null : `${name.split('_').join(' ')} is required`,
  }));
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "email") {
    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    } else if (!isValidEmail.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
    } else {
      const newErrors = { ...errors };
      delete newErrors.email;
      setErrors(newErrors);
    }
  }
};
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
  const requiredFields = [
  'email',
  'password'
];
const newErrors = {};

requiredFields.forEach((field) => {
  if (!userData[field]) {
    newErrors[field] = `${field.split('_').join(' ')} is required`;
  }
});
if (Object.keys(newErrors).length > 0) {
  setErrors(newErrors);
  return;
}
    setIsLoading(true);
    event.preventDefault();
    const url = `${baseUrl}/login`;
    try {
      const res = await axios.post(url, userData);
      toast.success("Login Successful");
      console.log(res.data);
      await localStorage.setItem("token", res.data.token)
      const user = JSON.stringify(res.data.data)
      localStorage.setItem("user", user)
      setTimeout(() => {
        navigate("/home");
      }, 3000)
      setIsLoggedIn(true);
      setUserData({});
    } catch (error) {
      console.log(error.response);
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
   
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
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={userData?.email || ""}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            {errors.email && <p className="text-red-600 text-left font-bold">{errors.email}</p>}
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
              onBlur={handleBlur}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
            {errors.password && <p className="text-red-600 text-left font-bold">{errors.password}</p>}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#049805] text-white py-2 rounded-md focus:outline-none w-full flex items-center justify-center"
          >
          {isLoading ? <Spinner /> : "Login"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
