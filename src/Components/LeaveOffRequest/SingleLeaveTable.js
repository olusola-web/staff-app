import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const SingleLeaveTable = ({ item, index, onDelete }) => {
  const { id, request_type, leave_start_date, leave_end_date, status } = item || {};

  const statusClass = status === 'Not granted' 
    ? 'bg-red-500'
    : status === 'Successful' 
      ? 'bg-blue-500'
      : 'bg-green-500';

  // Adjust the width and padding of the status div here
  const statusStyle = `text-white ${statusClass} w-20 p-1  mr-4 my-2 rounded text-center `;
  // 'w-24' sets the width to 6rem (96px), adjust as needed

  return (
    <div className="grid grid-cols-6 gap-2 font-medium text-sm items-center">
      <div>{index + 1}</div>
      <div>{request_type}</div>
      <div>{leave_start_date}</div>
      <div>{leave_end_date}</div>
      <div className={statusStyle} >{status}</div>
      <div>
        <RiDeleteBin6Line
          className="text-red-600 cursor-pointer"
          onClick={() => onDelete(id)} // Use item ID for deletion
        />
      </div>
    </div>
  );
};

export default SingleLeaveTable;
