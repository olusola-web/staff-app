import React from 'react'
import Table from '../../Utils/Table';
import SingleHomePurchReq from './SingleHomePurchReq';

const tableHeader = [
  "S/N",
  "Description",
  "Quantity",
  "Amount",
  "Status",
];

const ReclaimTable = () => { // For simplicity, using sample data directly
  const displayedData = [
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
  ];
  return (
    <div>
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
  )
}

export default ReclaimTable
