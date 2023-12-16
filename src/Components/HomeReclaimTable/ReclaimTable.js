import React from 'react'
import Table from '../../Utils/Table';
import SingleHomeReclaim from './SingleHomeReclaim'; 
import { useStateContext } from "../../context/StateContext";
import { useEffect } from "react";

const tableHeader = [
  "S/N",
  "RN",
  "Amount",
  "Date",
  "Status",
];

const ReclaimTable = () => { // For simplicity, using sample data directly
  const { dashDetails, isLoading } = useStateContext();
  console.log('Reclaim Requests:', dashDetails.reclaim_request);
  const { reclaim_request } = dashDetails;
   console.log(dashDetails);

  let displayedData = [];

  // Check if reclaim_request is loaded and is an array
  if (reclaim_request && Array.isArray(reclaim_request)) {
    displayedData = reclaim_request.map((reclaim, index) => {
      // Format the amount to include commas as thousands separators
      const formattedAmount = new Intl.NumberFormat('en-US').format(reclaim.amount_to_reclaim);
  
      return {
        id: index + 1,
        reclaim_number: reclaim.reclaim_number, 
        amount_to_reclaim: `₦${formattedAmount}`, // Using the formatted amount here
        date: reclaim.date_of_expenses,
        status: reclaim.status 
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
}

export default ReclaimTable
