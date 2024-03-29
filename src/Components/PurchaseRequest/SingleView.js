import React from "react";

const SingleView = ({ item, index }) => {
  const { description, price, quantity } = item || {};
  console.log(item);
  return (
    <div className="grid text-sm grid-cols-4 gap-2 ">
      <h2 className="px-8">{index + 1}</h2>
      <h2 className="">{description}</h2>
      <h2 className="px-3">{quantity}</h2>
      <h2 className="px-3">{price}</h2>
    </div>
  );
};

export default SingleView;
