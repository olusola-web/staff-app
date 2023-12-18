import { useState } from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReclaimEdit = () => {
    
  

  return (
    <div className="container mx-auto">
      <div className="p-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-2 items-center mb-4 md:mb-0">
          <FaHome className="m-1" />
          <p>Home</p>
          <FaChevronRight className="m-1" />
          <p className="text-[#049805]">Reclaim </p>
        </div>
        <div>
          <Link
            to="/home/reclaimrequest"
            className="bg-[#049805] text-white rounded-lg px-4 py-2 inline-block text-center">
            Create Reclaim Request
          </Link>
        </div>
      </div>

      <p className="flex justify-center align-center mt-14 text-gray-500">
        You have no reclaim requests
      </p>
    </div>

  );
};

export default ReclaimEdit
