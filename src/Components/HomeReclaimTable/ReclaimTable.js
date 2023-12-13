import React from 'react'
import Table from '../../Utils/Table';
import SingleHomeReclaim from './SingleHomeReclaim'; 

const tableHeader = [
  "S/N",
  "Reclaim Amount",
  "Amount",
  "Date",
  "Status",
];

const ReclaimTable = () => { // For simplicity, using sample data directly
  const displayedData = [
    {
      id: 1,
      reclaim_amount: "5000",
      amount: "10000",
      date: "8/11/2023",
      status: "Not granted"
    },
    {
      id: 2,
      reclaim_amount: "5000",
      amount: "10000",
      date: "8/11/2023",
      status: "Successful"
    }
    // Add more data items as needed
  ];
  return (
    <div>
      <div className="w-full max-w-5xl mb-4 overflow-x-auto table-responsive">
        <Table
          headerContent={tableHeader}
          minSize={"600px"}
          cols={6}
          data={displayedData}
          showSearch={false}
          searchKey=""
        >
          {displayedData?.map((item, index) => (
            <div key={index}>
              <SingleHomeReclaim
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
  )
}

export default ReclaimTable
