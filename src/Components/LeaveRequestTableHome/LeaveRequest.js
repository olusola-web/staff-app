import React, { useEffect } from 'react'; // Combine React imports
import Table from '../../Utils/Table';
import SingleHomeLeaveReq from './SingleHomeLeaveReq';
import { useStateContext } from "../../context/StateContext";

// Define table headers outside of the component for better performance
const tableHeader = [
  <th key="sn" className="py- px-8">S/N</th>,
  <th key="requestType" className="py- px-3">Request Type</th>,
  <th key="date" className="py- px-12">Date</th>,
  <th key="status" className="py- px-[2rem]">Status</th>,
];

const LeaveRequestTable = () => {
const { dashDetails, isLoading, getAllLeaveReq, getDashboardDetails } = useStateContext();
  // console.log('leave_request:', dashDetails.leave_request);
  const { leave_request } = dashDetails;
  //  console.log(dashDetails);
  useEffect(() => {
    getAllLeaveReq(); // call all leave req on the table
    getDashboardDetails() //  call getDashboardDetails on the table 
  }, []); 

  let displayedData = [];

  if (leave_request && Array.isArray(leave_request)) {
    displayedData = leave_request.map((leavereq, index) => ({
      id: index + 1,
      request_type: leavereq.request_type,
      created_at: leavereq.created_at
        ? new Date(leavereq.created_at).toLocaleDateString()
        : "Not Available", // Fallback text if the date is not available
      status: leavereq.status,
    }));
  }

  return (
    <div>
      <div className="w-full max-w-5xl mb-4 overflow-x-auto table-responsive">
        <Table
          headerContent={tableHeader}
          minSize="700px"
          cols={6}
          data={displayedData}
          showSearch={false}
          searchKey=""
        >
          {isLoading ? (
            <div>Loading...</div>
          ) : displayedData && displayedData.length > 0 ? (
            displayedData.map((item, index) => (
              <div key={item.id}>
                <SingleHomeLeaveReq
                  item={item}
                  index={index}
                />
                <hr className="my-5 border-green-50" />
              </div>
            ))
          ) : (
            <div>No leave available</div>
          )}
        </Table>
      </div>
    </div>
  );
}

export default LeaveRequestTable;