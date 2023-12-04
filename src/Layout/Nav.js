import React from "react";
// import officer from "../Assest/images/Customercare.png";
import { RiMenu5Fill } from "react-icons/ri";
import logo from "../Assets/Images/MyAfrimall.png";
const Nav = ({ toggleSidebar }) => {
  // const stored = localStorage.getItem("user");
  // const { firstname, lastname } = JSON.parse(stored);
  return (
    <div className="bg-white p-1">
      <nav className="flex items-center justify-between mx-5">
        <div>
          <h1 className="font-bold">Good day, wale</h1>
          <p className="text-xs">Take a look at your home page</p>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-20" src={logo} alt="admin-officer" />
          <p className="font-bold">
            {/* {firstname} {lastname} */}
          </p>
        </div>
        <RiMenu5Fill
          className="text-2xl text-pry lg:hidden"
          onClick={toggleSidebar}
        />
      </nav>
    </div>
  );
};

export default Nav;