// In SinglePurchaseRequest.js
import React from "react";
// import { RiDeleteBin6Line } from "react-icons/ri";

const SinglePurReqMain = ({ item, index, onDelete }) => {
  const { item_name, purchase_request_number, amount, status, action } =
    item || {};

  // Determine the Tailwind class based on the status
  const statusClass =
    status === "Pending"
      ? "bg-green-500" // Red background for 'not granted'
      : status === "Successful"
      ? "bg-blue-500" // Blue background for 'Success'
      : ""; // Default background for other statuses

  return (
    <div className="grid text-sm grid-cols-6 gap-2 ">
      <h2 className="px-">{index + 1}</h2>
      <h2 className="">{item_name}</h2>
      <h2 className="px-">{purchase_request_number}</h2>
          <h2 className="px-">{amount}</h2>
          <div>
              <div className={`text-white ${statusClass} p-2 w-[4.7rem]  rounded`}>{status}</div>
              </div>
      <h2 className="px-"> {action}</h2>
    </div>
  );
};

export default SinglePurReqMain;
