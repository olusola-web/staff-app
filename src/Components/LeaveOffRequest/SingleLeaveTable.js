import React from "react";

const SingleLeaveTable = ({ item }) => {
  const { id, SN, startDate, endDate} = item || {};

  return (
    <div className="grid grid-cols-4 gap-2 font-medium text-sm">
      <div>{id}</div>
      <div>{SN}</div>
      <div>{startDate}</div>
      <div>{endDate}</div>
    </div>
  );
};

export default SingleLeaveTable;
