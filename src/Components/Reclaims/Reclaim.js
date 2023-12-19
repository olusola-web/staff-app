import { useState } from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Reclaim = () => {
  return (
    <div className="mx-auto mt-0 p-4 bg-white min-h-screen flex flex-col justify-between">
      <div className="p-2 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-2 items-center md:mb-0 pt-7 mb-5">
          <FaHome className="m-0" />
          <p className="text-black">Home</p>
          <FaChevronRight className="m-1 text-[#049805]" />
          <p className="text-[#049805]"> Reclaim</p>
        </div>
        <div>
          <Link
            to="/home/reclaim/reclaimrequest"
            className="bg-[#049805] text-white rounded-lg px-4 py-2 inline-block text-center"
          >
            Create Reclaim Request
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center flex-grow bg-white">
        <p className="text-3x1 text-center text-gray-500">
          You have 0 reclaim requests
        </p>
      </div>
    </div>
  );
};

export default Reclaim;
