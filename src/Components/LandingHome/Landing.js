import React from "react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import ReclaimTable from "../HomeReclaimTable/ReclaimTable";

const Landing = () => {
  const reclaimCount = 5;
  return (
    <div>
      <div className="p-3">
        <div className="flex gap-2 text-[#049805]">
          {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M20.5 19.5V11C20.5 10.8448 20.4639 10.6916 20.3944 10.5528C20.325 10.4139 20.2242 10.2931 20.1 10.2L13.1 4.95C12.9269 4.82018 12.7164 4.75 12.5 4.75C12.2836 4.75 12.0731 4.82018 11.9 4.95L4.9 10.2C4.7758 10.2931 4.675 10.4139 4.60557 10.5528C4.53614 10.6916 4.5 10.8448 4.5 11V19.5C4.5 19.7652 4.60536 20.0196 4.79289 20.2071C4.98043 20.3946 5.23478 20.5 5.5 20.5H9.5C9.76522 20.5 10.0196 20.3946 10.2071 20.2071C10.3946 20.0196 10.5 19.7652 10.5 19.5V16.5C10.5 16.2348 10.6054 15.9804 10.7929 15.7929C10.9804 15.6054 11.2348 15.5 11.5 15.5H13.5C13.7652 15.5 14.0196 15.6054 14.2071 15.7929C14.3946 15.9804 14.5 16.2348 14.5 16.5V19.5C14.5 19.7652 14.6054 20.0196 14.7929 20.2071C14.9804 20.3946 15.2348 20.5 15.5 20.5H19.5C19.7652 20.5 20.0196 20.3946 20.2071 20.2071C20.3946 20.0196 20.5 19.7652 20.5 19.5Z"
            stroke="#049805"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg> */}
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
