import React, { useEffect, useState } from 'react';
import MyDataTable from "../../Utils/TableReuse/TableDetails";
import { useStateContext } from '../../context/StateContext';
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PurchaseRequest = () => {
  const { getAllPurchaseReq, allPurchaseReq } = useStateContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllPurchaseReq(); // Fetch purchase requests
  }, []);

  useEffect(() => {
    if (allPurchaseReq.length > 0) {
      // Format the data for DataTables
      const formattedData = allPurchaseReq.map((req, index) => ({
        serialNumber: index + 1, // Assuming you want to use a simple index for S/N
        itemName: req.purchase_request_items.map(item => item.description).join(", "), // Join item names
        purchaseRequestNumber: req.Pr_Number,
        amount: req.total_amount,
        status: req.status.charAt(0).toUpperCase() + req.status.slice(1), // Capitalize the first letter
        action: 'View' // Assuming a static action for now
      }));
      setData(formattedData);
    }
  }, [allPurchaseReq]);

  return (
    <div>
  <div className="p-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-2 items-center mb-4 md:mb-0">
          <FaHome className="m-1" />
          <p>Home</p>
          <FaChevronRight className="m-1" />
          <p className="text-[#049805]">Purchase Request</p>
        </div>
        <Link
          to="/home/purchaserequest/create"
          className="bg-[#049805] text-white rounded-lg px-4 py-2 inline-block text-center"
        >
          Create Purchase Request
        </Link>
      </div>
      <MyDataTable data={data} />;
    </div>
  )
  
};

export default PurchaseRequest;
