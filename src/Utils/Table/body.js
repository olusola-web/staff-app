import React from "react";
import { Spinner } from "react-activity";

const TableBody = ({ loadingState, data, children, minSize }) => {
  return (
    <div>
      {loadingState ? (
        <div className="flex flex-col items-center justify-center min-h-[50px] p-5">
          <Spinner size={20} />
        </div>
      ) : data?.length < 1 ? (
        <>
          <h2 className="p-5 font-medium">No data at the moment</h2>
        </>
      ) : (
        <div style={{ minWidth: minSize }} className={`p-5`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default TableBody;
