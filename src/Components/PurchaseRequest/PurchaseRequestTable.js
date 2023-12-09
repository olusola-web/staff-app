import React, { useState } from "react";
import Table from "../../Utils/Table";
import Button from "../Button/ButtonReusable";
import SinglePurchaseRequest from "./SinglePurchaseRequest";

const tableHeader = [
  <th className="py-3 px-6">S/N</th>, 
  <th className="py-3 px-4">Description</th>,
  <th className="py-3 px-4">Quantity</th>,
  <th className="py-3 px-4">Amount</th>,
  <th className="py-3 px-6">Action</th>,
];

const PurchaseRequestTable = () => {
  const [displayedData, setDisplayedData] = useState([
    {
      id: 1,
      description: "I would like to get a printer ",
      quantity: "6",
      amount: "₦40,000",
      status: "Success",
    },
    {
      id: 2,
      description: "Leave Req",
      quantity: "1",
      amount: "₦40,000",
      status: "Pending",
    },
    // Add more data items as needed
  ]);

  const handleDelete = (index) => {
    const newData = displayedData.filter((_, i) => i !== index);
    setDisplayedData(newData);
  };

  const totalQuantity = displayedData.reduce(
    (acc, item) => acc + parseInt(item.quantity, 10),
    0
  );
  const totalAmount = displayedData.reduce(
    (acc, item) =>
      acc + parseInt(item.amount.replace("₦", "").replace(",", ""), 10),
    0
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mb-4 overflow-x-auto table-responsive">
        <Table
          headerContent={tableHeader}
          minSize={"1200px"}
          cols={5}
          data={displayedData}
          showSearch={false}
          searchKey=""
        >
          {displayedData.map((item, index) => (
            <div key={item.id}>
              <SinglePurchaseRequest
                item={item}
                index={index}
                onDelete={() => handleDelete(index)}
                
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
