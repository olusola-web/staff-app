import React from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { useStateContext } from "../context/StateContext";


const Nav = ({ toggleSidebar }) => {
  const { profileDetails, imgUrl } = useStateContext();
  const defaultImageUrl = "https://via.placeholder.com/150?text=Profile";
  const firstname = localStorage.getItem("firstname");
  return (
    <div className="bg-white p-1">
      <nav className="flex items-center justify-between mx-5">
        <div>
          <h1 className="font-bold">Good day, {firstname}</h1>
          <p className="text-xs">Take a look at your home page </p>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-20 rounded-full"
            src={imgUrl + profileDetails?.profile_picture}
            onError={(e) => { e.target.onerror = null; e.target.src = defaultImageUrl; }}alt="Profile-you" />
      
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