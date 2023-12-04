import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Layout/SideBar";
import Nav from "../Layout/Nav";
// import { useStateContext } from "pages/context/StateContext";

const HomeLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <div className="w-full">
      <div className="max-width2 relative overflow-x-hidden">
        <div
          className={`${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:block lg:w-[25%] xl:w-[20%] fixed top-0 left-0 z-10 bg-white transition`}
        >
          <SideBar closeSidebar={closeSidebar} />
        </div>
        <div className="lg:w-[75%] xl:w-[80%] ml-auto ">
          <Nav toggleSidebar={toggleSidebar} />
          <div className="bg-gray-50 min-h-screen w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
