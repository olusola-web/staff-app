import React, { useState } from "react";
import Table from "../../Utils/Table";
import Button from "../Button/ButtonReusable";
import SinglePurchaseRequest from "./SinglePurchaseRequest";
import { useStateContext } from "../../context/StateContext";

const tableHeader = [
  <th className="py-3 px-6">S/N</th>,
  <th className="py-3 px-4">Description</th>,
  <th className="py-3 px-4">Quantity</th>,
  <th className="py-3 px-4">Amount</th>,
  <th className="py-3 px-6">Action</th>,
];

const PurchaseRequestTable = () => {
  const { purchaseRequests, setPurchaseRequests } = useStateContext();
  console.log("setPurchaseRequests in context:", setPurchaseRequests);

  const handleDelete = (id) => {
    // Filter out the item with the matching id
    const newData = purchaseRequests.filter(item => item.id !== id);
    setPurchaseRequests(newData);
  };

  const totalQuantity = purchaseRequests.reduce(
    (acc, item) => acc + parseInt(item.quantity, 10),
    0
  );
  const totalAmount = purchaseRequests.reduce((acc, item) => {
    // Ensure item.amount exists and is a string before calling replace
    if (item.amount && typeof item.amount === 'string') {
      return acc + parseInt(item.amount.replace("₦", "").replace(",", ""), 10);
    }
    return acc;
  }, 0);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mb-4 overflow-x-auto table-responsive">
        <Table
          headerContent={tableHeader}
          minSize={"1200px"}
          cols={5}
          data={purchaseRequests}
          showSearch={false}
          searchKey=""
        >
          {purchaseRequests.map((item, index) => (
            <div key={item.id}>
              <SinglePurchaseRequest
                item={item}
                index={index}
                onDelete={() => handleDelete(item.id)}
              />
              <hr className="my-4 border-green-50" />
            </div>
          ))}

          {/* Totals row */}
          <div className="grid text-sm grid-cols-5 gap-2  font-bold">
            <h2></h2> {/* Empty cell for description */}
            {/* <h2>{totalQuantity}</h2> */}
            <h2></h2> {/* Empty cell for action */}
            <h2 className="px-6"> Total</h2>
            <h2 className="px-3">₦{totalAmount.toLocaleString()}</h2>
          </div>
        </Table>
      </div>
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-2">
        <Button
          type="submit"
          className="w-full bg-[#049805] text-white rounded"
        >
          Submit Purchase Request
        </Button>
      </div>
    </div>
  );
};

export default PurchaseRequestTable;
