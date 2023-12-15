// PurchaseRequest.js
import React from "react";
import { useEffect } from "react";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SinglePurReqMain from "./SinglePurReqMain";
import Table from "../../Utils/Table";
import { useStateContext } from "../../context/StateContext";

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
  const { allPurchaseReq, isLoading, getAllPurchaseReq } = useStateContext();


  useEffect(() => {
    getAllPurchaseReq();
  }, []);

  let displayedData;
  if (allPurchaseReq && allPurchaseReq.data) {
    displayedData = allPurchaseReq.data.map((req, index) => ({
      id: index + 1,
      purchase_request_number: req.Pr_Number,
      item_name: req.purchase_request_items.map(item => item.description).join(", "),
      amount: `₦${req.total_amount}`,
      status: req.status,
      action: "view all"
    }));
  }
 
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
        {isLoading ? (
            <p>Loading...</p>
          ) : displayedData && displayedData.length > 0 ? (
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
              ) : (
                <p className="text-center">You have 0 purchase requests</p>
              )}
        </div>
      </div>
    </div>
  );
};

export default PurchaseRequest;
