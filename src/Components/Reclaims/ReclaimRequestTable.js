// import React, { useState } from "react";
// import Table from "../../Utils/Table";
// import SingleReclaimRequest from "./SingleReclaimRequest";

// const tableHeader = [
//   <th className="py-3 px-4">S/N</th>,
//   <th className="py-3 px-4">Name</th>,
//   <th className="py-3 px-4">Details</th>,
//   <th className="py-3 px-4">Date of Expense</th>,
//   <th className="py-3 px-4">Amount</th>,
//   <th className="py-3 px-4">Upload Receipt</th>,
//   <th className="py-3 px-4">Status</th>,
//   <th className="py-3 px-4">Action</th>,
// ];

// const ReclaimRequestTable = () => {
//   const [displayedData, setDisplayedData] = useState([
//     {
//       id: 1,
//       sn: 1,
//       name: "John Doe",
//       details: "Printer purchase",
//       date: "2023-01-15",
//       amount: "₦40,000",
//       receipt: "receipt.jpg",
//       status: "Success",
//     },
//     {
//       id: 2,
//       sn: 2,
//       name: "Jane Doe",
//       details: "Leave request",
//       date: "2023-01-20",
//       amount: "₦30,000",
//       receipt: "leave-receipt.jpg",
//       status: "Pending",
//     },
//     // Add more data items as needed
//   ]);

//   const handleDelete = (index) => {
//     const newData = displayedData.filter((_, i) => i !== index);
//     setDisplayedData(newData);
//   };

//   return (
//     <div className="w-full max-w-5xl mb-4 overflow-x-auto table-responsive">
//       <Table
//         headerContent={tableHeader}
//         minSize={"1200px"}
//         cols={8}
//         data={displayedData}
//         showSearch={false}
//         searchKey=""
//       >
//         {displayedData.map((item, index) => (
//           <div key={item.id}>
//             {/* Adjusted to pass sn prop to SinglePurchaseRequest */}
//             <SingleReclaimRequest
//               item={{ ...item, sn: index + 1 }}
//               index={index}
//               onDelete={() => handleDelete(index)}
//             />
//           </div>
//         ))}
//       </Table>
//     </div>
//   );
// };

// export default ReclaimRequestTable;






import React, { useState } from "react";
import Table from "../../Utils/Table";
import SingleReclaimRequest from "./SingleReclaimRequest";

const tableHeader = [
  <th className="py-3 px-4">S/N</th>,
  <th className="py-3 px-4">Name</th>,
  <th className="py-3 px-4">Details</th>,
  <th className="py-3 px-4">Date of Expense</th>,
  <th className="py-3 px-4">Amount</th>,
  <th className="py-3 px-4">Upload Receipt</th>,
  <th className="py-3 px-4">Status</th>,
  <th className="py-3 px-4">Action</th>,
];

const ReclaimRequestTable = () => {
  const [displayedData, setDisplayedData] = useState([
    {
      id: 1,
      sn: 1,
      name: "John Doe",
      details: "Printer purchase",
      date: "2023-01-15",
      amount: "₦40,000",
      receipt: "receipt.jpg",
      status: "Success",
    },
    {
      id: 2,
      sn: 2,
      name: "Jane Doe",
      details: "Leave request",
      date: "2023-01-20",
      amount: "₦30,000",
      receipt: "leave-receipt.jpg",
      status: "Pending",
    },
    // Add more data items as needed
  ]);

  const handleDelete = (index) => {
    const newData = displayedData.filter((_, i) => i !== index);
    setDisplayedData(newData);
  };

  return (
    <div className="w-full max-w-5xl mb-4 overflow-x-auto table-responsive">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-500">
          Showing {displayedData.length} entries
        </div>
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">Rows:</span>
            <div className="w-4 h-4 border-t border-b border-r border-gray-500"></div>
            <span className="text-gray-500">Cols:</span>
          </div>
          {/* Add your search input here */}
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border border-gray-300 rounded-md ml-2"
          />
        </div>
      </div>

      <Table
        headerContent={tableHeader}
        minSize={"1200px"}
        cols={8}
        data={displayedData}
        showSearch={false}
        searchKey=""
      >
        {displayedData.map((item, index) => (
          <div key={item.id}>
            {/* Adjusted to pass sn prop to SinglePurchaseRequest */}
            <SingleReclaimRequest
              item={{ ...item, sn: index + 1 }}
              index={index}
              onDelete={() => handleDelete(index)}
            />
          </div>
        ))}
      </Table>
    </div>
  );
};

export default ReclaimRequestTable;
