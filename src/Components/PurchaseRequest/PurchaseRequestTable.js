import React, { useState } from 'react';
import Table from '../../Utils/Table';
import SinglePurchaseRequest from "./SinglePurchaseRequest";

const tableHeader = [
  "S/N",
  "Description",
  "Quantity",
  "Amount",
  "Action",
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

  return (
    <div>
      <div className="w-full max-w-5xl mb-4 overflow-x-auto table-responsive">
        <Table
          headerContent={tableHeader}
          minSize={"1000px"}
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
        </Table>
      </div>
    </div>
  );
}

export default PurchaseRequestTable;
