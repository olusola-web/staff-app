import React from "react";
import Table from "../../Utils/Table";
import SingleHomeReclaim from "./SingleHomeReclaim";
import { useStateContext } from "../../context/StateContext";
import { useEffect } from "react";

const tableHeader = ["S/N", "RN", "Amount", "Date", "Status"];

const ReclaimTable = () => {
  const { dashDetails, isLoading } = useStateContext();
  const { reclaim_request } = dashDetails;
  
  let displayedData = [];
  if (reclaim_request && Array.isArray(reclaim_request)) {
    displayedData = reclaim_request.map((reclaim, index) => {
      console.log("Original created_at:", reclaim.created_at);
      // Format or handle null dates
      let formattedDate = reclaim.created_at
      ? new Date(reclaim.created_at).toLocaleDateString()
      : "Not Available";
        console.log("Formatted date:", formattedDate);

      return {
        id: index + 1,
        reclaim_number: reclaim.reclaim_number, // Correct field from the endpoint
        amount_to_reclaim: `₦${new Intl.NumberFormat("en-US").format(
          reclaim.amount_to_reclaim
        )}`,
        created_at: formattedDate,
        status: reclaim.status,
      };
    });
  }
  
  return (
    <div className="w-full max-w-5xl mb-4 overflow-x-auto table-responsive">
      <Table
        headerContent={tableHeader}
        minSize={"600px"}
        cols={5}
        data={displayedData}
        showSearch={false}
        searchKey=""
      >
        {isLoading ? (
          <div>Loading...</div>
        ) : displayedData && displayedData.length > 0 ? (
          displayedData.map((item, index) => (
            <div key={index}>
              <SingleHomeReclaim
                item={item}
                index={index}
                // Additional props if needed
              />
              <hr className="my-4 border-green-50" />
            </div>
          ))
        ) : (
          <div>No reclaims available</div>
        )}
      </Table>
    </div>
  );
};

export default ReclaimTable;
