// In SinglePurchaseRequest.js
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const SinglePurchaseRequest = ({ item, index, onDelete }) => {
  const { description, quantity, price, action } = item || {};

  return (
    <div className="grid text-sm grid-cols-5 gap-2 ">
      <h2 className="px-8">{index + 1}</h2>
      <h2 className="">{description}</h2>
      <h2 className="px-8">{quantity}</h2>
      <h2 className="px-3">{price}</h2>
      <h2>
        {action}
        <div className="flex gap-2 px-8">
          <RiDeleteBin6Line
            className="text-red-600 cursor-pointer"
            onClick={onDelete}
          />
        </div>
      </h2>
    </div>
  );
};

export default SinglePurchaseRequest;
