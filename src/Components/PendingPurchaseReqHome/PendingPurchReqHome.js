import React from "react";
import Table from "../../Utils/Table";
import SingleHomePurchReq from "./SingleHomePenPurchReq";
import { useStateContext } from "../../context/StateContext";

const tableHeader = ["S/N", "Purchase Req No", "Amount", "date", "Status"];

const PendingPurchReqHome = () => {
  // For simplicity, using sample data directly
  const { dashDetails, isLoading } = useStateContext();
  console.log("purchase_request:", dashDetails.purchase_request);
  const { purchase_request } = dashDetails;
  console.log(dashDetails);

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
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mb-4 overflow-x-auto table-responsive ">
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
  );
};

export default PendingPurchReqHome;
