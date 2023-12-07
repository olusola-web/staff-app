// In SinglePurchaseRequest.js
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const SinglePurchaseRequest = ({ item, index, onDelete }) => {
  const { description, quantity, amount, action } = item || {};

  return (
    <div className="grid text-sm grid-cols-5 gap-2">
      <h2>{index + 1}</h2>
      <h2>{description}</h2>
      <h2>{quantity}</h2>
      <h2>{amount}</h2>
      <h2>
        {action}
        <div className="flex gap-2">
          <RiDeleteBin6Line className="text-red-600 cursor-pointer" onClick={onDelete}/> 
        </div>
      </h2>
    </div>
  );
};

export default SinglePurchaseRequest;
