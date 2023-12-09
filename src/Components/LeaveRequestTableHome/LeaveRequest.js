import React from 'react'
import Table from '../../Utils/Table';
import SingleHomeLeaveReq from './SingleHomeLeaveReq';

const tableHeader = [
  <th className="py- px-8">S/N</th>, 
<th className="py-  px-3">Request Type</th>,
 <th className="py-  px-12">Date</th>,
<th className="py-  px-[2rem]">Status</th>,
];

const LeaveRequestTable = () => { // For simplicity, using sample data directly
  const displayedData = [
    {
      id: 1,
      request_type: "Leave Req",
      date: "8/11/2023",
      status: "Pending"
    },
    {
      id: 2,
      request_type: "Off Request",
      date: "8/11/2023",
      status: "Successful"
    }
    // Add more data items as needed
  ];
  return (
    <div >
      <div className="w-full max-w-5xl mb-4 overflow-x-auto table-responsive ">
        <Table
          headerContent={tableHeader}
          minSize={"700px"}
          cols={6}
          data={displayedData}
          showSearch={false}
          searchKey=""
        >
          {displayedData?.map((item, index) => (
            <div key={index}>
              <SingleHomeLeaveReq
                item={item}
                index={index}
                // openModal and openEditModal can be passed if needed
              />
              <hr className="my-5 border-green-50" />
            </div>
          ))}
        </Table>
      </div>
    </div>
  )
}

export default LeaveRequestTable
