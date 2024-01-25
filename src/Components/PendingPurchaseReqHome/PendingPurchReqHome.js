import React from "react";
import Table from "../../Utils/Table";
import SingleHomePurchReq from "./SingleHomePenPurchReq";
import { useStateContext } from "../../context/StateContext";
import { Link } from "react-router-dom";

const tableHeader = ["S/N", "Purchase Req No", "Amount", "date", "Status"];

const PendingPurchReqHome = () => {
  // const token = localStorage.getItem("token")
  // For simplicity, using sample data directly
  const { dashDetails, isLoading } = useStateContext();
  // console.log("purchase_request:", dashDetails.purchase_request);
  const { purchase_request } = dashDetails;
  // console.log(dashDetails);

  let displayedData = [];
  if (purchase_request && Array.isArray(purchase_request)) {
    displayedData = purchase_request.map((purchasereq, index) => {
      // Format or handle null dates
      let formattedDate = purchasereq.created_at
        ? new Date(purchasereq.created_at).toLocaleDateString()
        : "Not Available"; // or any default text

      return {
        id: index + 1,
        Pr_Number: purchasereq.Pr_Number,
        total_amount: `₦${new Intl.NumberFormat("en-US").format(
          purchasereq.total_amount
        )}`,
        created_at: formattedDate,
        status: purchasereq.status,
      };
    });
  }
  const prCount = dashDetails?.purchase_request?.length || 0;
  return (
    <div>
      <div className="flex justify-between items-center p-6 gap-2 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-20 bg-white ">
        <h2 className="relative inline-block font-bold text-sm sm:text-md md:text-lg lg:text-xl">
          Pending Purchase Request
          <span className="absolute top-0 -right-2 md:-right-8 bg-red-500 text-white text-xs sm:text-sm px-2 py-1 rounded-full">
            {prCount}
          </span>
        </h2>
        <Link to="purchaserequest" className="text-[#049805] sm:hidden md:block">View PR</Link>
        {/* Make "View all" visible on small screens */}
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl mb-4 overflow-x-auto table-responsive">
          <Table
            headerContent={tableHeader}
            minSize={"1000px"}
            cols={5}
            data={displayedData}
            showSearch={false}
            searchKey=""
          >
            {displayedData?.map((item, index) => (
              <div key={index}>
                <SingleHomePurchReq
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

export default PendingPurchReqHome;
