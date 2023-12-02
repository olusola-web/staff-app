import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import ReclaimTable from "../HomeReclaimTable/ReclaimTable";

const Landing = () => {
  const reclaimCount = 5;
  return (
    <div>
      <div className="p-3">
        <div className="flex gap-2 text-[#049805]">
          <h1>Home</h1>
        </div>

        {/* 1st card */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center my-12 ">
          <div className=" bg-white rounded-lg shadow-md w-full md:w-23rem lg:w-23rem h-40 md:h-[8rem] flex flex-col justify-center items-center gap-8">
            <h2 className="text-lg md:text-xl ">Total Purchase Request</h2>
            <div className="flex justify-between  items-center gap-[9rem]">
              <p className="text-gray-600 font-bold">2</p>
              <FaRegMoneyBillAlt className="bg-[#049805]" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md w-full md:w-23rem lg:w-23rem h-40 md:h-[8rem] flex flex-col justify-center items-center gap-8">
            <h2 className="text-lg md:text-xl ">Total Purchase Request</h2>
            <div className="flex justify-between  items-center gap-[9rem]">
              <p className="text-gray-600 font-bold">2</p>
              <FaRegMoneyBillAlt className="bg-[#FC6A5A]" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md w-full md:w-23rem lg:w-23rem h-40 md:h-[8rem] flex flex-col justify-center items-center gap-8">
            <h2 className="text-lg md:text-xl ">Total Purchase Request</h2>
            <div className="flex justify-between  items-center gap-[9rem]">
              <p className="text-gray-600 font-bold">2</p>
              <FaRegMoneyBillAlt className="bg-[#FC6A5A]" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md w-full md:w-23rem lg:w-23rem h-40 md:h-[8rem] flex flex-col justify-center items-center gap-8">
            <h2 className="text-lg md:text-xl ">Total Purchase Request</h2>
            <div className="flex justify-between  items-center gap-[9rem]">
              <p className="text-gray-600 font-bold">2</p>
              <FaRegMoneyBillAlt className="bg-[#FC6A5A]" />
            </div>
          </div>
        </div>

        {/* 2nd card  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center my-12">
          <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-23rem lg:w-23rem h-full md:h-full flex flex-col justify-center items-center">
            <div className="flex justify-between items-center gap-4 md:gap-20 lg:gap-[18rem] pb-6">
            <h2 className="relative inline-block">
              Reclaim
              <span className="absolute -top-0 -right-8 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {reclaimCount}
              </span>
            </h2>
              <h2 className="text-[#049805]">View all</h2>
            </div>

            <div className="text-gray-600 font-bold overflow-x-auto">
              <ReclaimTable />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md w-full md:w-23rem lg:w-23rem h-40 md:h-48 flex flex-col justify-center items-center">
            <h2 className="text-lg md:text-xl font-bold">
            Leave/Off Requests
            </h2>
            <p className="text-gray-600 font-bold">c</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
