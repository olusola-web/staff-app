// PurchaseRequest.js
import React from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PurchaseRequest = () => {
  return (
    <div>
      <div className="p-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-2 items-center mb-4 md:mb-0">
          <FaHome className="m-1" />
          <p>Home</p>
          <FaChevronRight className="m-1" />
          <p className="text-[#049805]">Purchase Request</p>
        </div>
        <Link to="/home/purchaserequest/create" className="bg-[#049805] text-white rounded-lg px-4 py-2 inline-block text-center">
          Create Purchase Request
        </Link>
      </div>
      <div className="flex items-center justify-center m-8 ">
        <p className="text-center">You have 0 purchase requests</p>
      </div>
    </div>
  );
};

export default PurchaseRequest;
