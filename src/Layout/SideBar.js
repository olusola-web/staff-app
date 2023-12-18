import React, { useEffect, useState } from "react";
import { getLinks } from "./sideBardata";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import logo from "../Assest/images/MyAfrimall.png";
import { IoCloseOutline } from "react-icons/io5";
import { useStateContext } from "../context/StateContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Spinner } from "react-activity";


const SideBar = ({ closeSidebar }) => {
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const { baseUrl, config, setIsLoggedIn } = useStateContext();

  useEffect(() => {
    const link = getLinks();
    setLinks(link);
  }, []);

  const navigate = useNavigate()

  const handleLogOut = async () => {
    setIsLoading(true);
    try {
      const url = `${baseUrl}/logout`;
      const res = await axios.post(url, {}, config());
      toast.success(res?.data?.message);
      console.log(res.data)
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      localStorage.clear()
      setIsLoading(false);
      setIsLoggedIn(false)
      navigate("/")
  };
}
  return (
    <div className="shadow-md h-screen p-4 overflowHide">
      <div className="flex justify-between">
        {/* <img src={logo} className="md:w-40 w-24" alt="logo" /> */}
        <IoCloseOutline
          className="text-3xl text-pry lg:hidden"
          onClick={closeSidebar}
        />
      </div>
      <div className="mt-10">
        <ul className="space-y-6 w-auto">
          {links.map((link) => (
            <li key={link.id} className="mb-2 px-2">
              <NavLink
                to={link.url}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  isActive
                    ? "space-x-2 py-2 bg-[#049805] text-white"
                    : "flex items-center space-x-2 text-black hover:bg-green-300 rounded-lg"
                }
                end
              >
                <div className="bg-inherit flex items-center rounded-lg py-2 px-3">
                  {link.icon && <span className="w-6 h-6">{link.icon}</span>}
                  <p className="text-sm ml-2">{link.text}</p>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
        <button onClick={()=>handleLogOut()}
          className="bg-gray-100 p-2 rounded-md w-full block text-center mt-10">
            {isLoading ? <Spinner /> : "Logout"}
        </button>
        {/* <Link
          onClick={()=>handleLogOut()}
          to="/"
          className="bg-gray-100 p-2 rounded-md w-full block text-center mt-10"
        >
          {isLoading ? <Spinner /> : "Logout"}
        </Link> */}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default SideBar;
