// PurchaseRequest.js
import React from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SinglePurReqMain from "./SinglePurReqMain";
import Table from "../../Utils/Table";

const tableHeader = [
  "S/N",
  "Item Name",
  "Purchase Request Number",
  "Amount",
  "Status",
  "Action",
];

// For simplicity, using sample data directly
const PurchaseRequest = () => {
  const displayedData = [
    {
      id: 1,
      purchase_request_number: "122345543466 ",
      item_name: "Printer",
      amount: "₦40,000",
      status: "Successful",
      action: "view all",
    },
    {
      id: 2,
      purchase_request_number: "122345543466 ",
      item_name: "Printer",
      amount: "₦40,000",
      status: "Pending",
      action: "view all",
    },
    // Add more data items as needed
  ];
  return (
    <div>
      <div className="p-6 flex flex-col md:flex-row justify-between items-center">
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
      {/* <div className="flex items-center justify-center m-8 ">
        <p className="text-center">You have 0 purchase requests</p>
      </div> */}

      {/* table */}
      <div className="flex flex-col items-center justify-center py-8">
        <div className="w-full max-w-5xl mb-4 overflow-x-auto table-responsive ">
          <Table
            headerContent={tableHeader}
            minSize={"1000px"}
            cols={6}
            data={displayedData}
            showSearch={false}
            searchKey=""
          >
            {displayedData?.map((item, index) => (
              <div key={index}>
                <SinglePurReqMain
                  item={item}
                  index={index}
                  // openModal and openEditModal can be passed if needed
                />
                <hr className="my-4 border-green-50" />
              </div>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default PurchaseRequest;
