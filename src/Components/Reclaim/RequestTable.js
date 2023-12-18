// import React from "react";
// import Table from "../../Utils/Table";
// // import SingleHomeReclaim from "../HomeReclaimTable/SingleHomeReclaim";
// import { useStateContext } from "../../context/StateContext";

// const tableHeader = [
//   "S/N",
//   "Name",
//   "Details",
//   "Date of expenses",
//   "Amount",
//   "Upload",
//   "Status",
//   "Action",
// ];

// const ReclaimTable = () => {
//   const { dashDetails, isLoading } = useStateContext();
//   const { reclaim_request } = dashDetails;

//   let displayedData = [];

//   // Check if reclaim_request is loaded and is an array
//   if (reclaim_request && Array.isArray(reclaim_request)) {
//     displayedData = reclaim_request.map((reclaim, index) => ({
//       id: index + 1,
//       reclaim_number: reclaim.reclaim_number,
//       amount_to_reclaim: `₦${reclaim.amount_to_reclaim}`,
//       date: reclaim.date_of_expenses,
//       status: reclaim.status,
//     }));
//   }

//   return (
//     <div className="w-full max-w-6xl mb-4 overflow-x-auto table-responsive my-4">
//       <Table
//         headerContent={tableHeader}
//         minSize={"800px"}
//         cols={8}
//         data={displayedData}
//         showSearch={false}
//         searchKey=""
//         // horizontalHeader={true} // Add this prop to enable horizontal headers
//       >
//         {isLoading ? (
//           <div>Loading...</div>
//         ) : displayedData && displayedData.length > 0 ? (
//           displayedData.map((item, index) => (
//             <div key={index}>
//               {/* <SingleHomeReclaim
//                 item={item}
//                 index={index}
               
//               /> */}
//               <hr className="my-4 border-green-50" />
//             </div>
//           ))
//         ) : (
//           <div>No reclaims available</div>
//         )}
//       </Table>
//     </div>
//   );
// };

// export default ReclaimTable;
