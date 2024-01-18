import React from "react";

const SingleAcctview = ({ item, index }) => {
  const { description, price, quantity } = item || {};

  return (
    <div className='grid text-sm grid-cols-4 gap-2 '>
      <h2 className='px-8'>{index + 1}</h2>
      <h2 className=''>{description}</h2>
      <h2 className='px-3'>{quantity}</h2>
      <h2 className='px-3'>{price}</h2>
    </div>
  );
};

export default SingleAcctview;
