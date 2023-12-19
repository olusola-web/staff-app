
// SingleReclaimRequest.js
import React from "react";

const SingleReclaimRequest = ({ item, index }) => {
  const { sn, name, details, dateOfExpense, amount, uploadReceipt, status, button, action } = item || {};

  return (
    <div className="grid text-sm grid-cols-9 gap-2">
      <h2>{sn}</h2>
      <h2>{name}</h2>
      <h2>{details}</h2>
      <h2>{dateOfExpense}</h2>
      <h2>{amount}</h2>
      <h2>{uploadReceipt}</h2>
      <h2>{status}</h2>
      <h2>{button}</h2>
      {/* <h2>
        {action}
        <div className="flex gap-2">
          <RiDeleteBin6Line
            className="text-red-600 cursor-pointer"
            onClick={onDelete}
          />
        </div>
      </h2> */}
    </div>
  );
};

export default SingleReclaimRequest;
