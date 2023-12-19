import React from "react";
import Table from "../../Utils/Table";
import Singletable from "./Singletable";
import ProgressBar from "./ProgressbarChart";
import { useStateContext } from "../../context/StateContext";

const tableHeader = ["Date", "Details", "Point"];

const ProgressBarTable = () => {
  const { dashDetails } = useStateContext();
  console.log("progress:", dashDetails.point_tranaction);
  const { point_tranaction } = dashDetails;
  console.log(dashDetails);
  let displayedData = [];
 
  if (point_tranaction && Array.isArray(point_tranaction)) {
    displayedData = point_tranaction.map((point, index) => {
      let formattedDate = point.created_at
        ? new Date(point.created_at).toLocaleDateString()
        : "Not Available";

      return {
        id: index +1, // Assuming index as a unique identifier for each item
        created_at: formattedDate,
        details: point.details,
        point: point.point, // Changed from points to point to match tableHeader
      };
    });
  }

  const totalPoints = displayedData.reduce(
    (total, item) => total + (item.point || 0),
    0
  );
  const maxPointValue = displayedData.length * 100;

  return (
    <div>
      <div className="bg-white">
        <h2 className="relative inline-block font-bold text-sm sm:text-md md:text-lg lg:text-xl p-1">
          Progress
        </h2>
        <div className="py-4">
          <ProgressBar value={totalPoints} max={maxPointValue} />
        </div>
      </div>

      <div className="w-full sm:max-w-full mb-4 overflow-x-auto table-responsive">
        <Table
          headerContent={tableHeader}
          minSize={"200px"}
          cols={3}
          data={displayedData}
          showSearch={false}
          searchKey=""
        >
          {displayedData.map((item, index) => (
            <div key={item.id}>
              <Singletable item={item} index={index} />
              <hr className="my-4 border-green-50" />
            </div>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ProgressBarTable;
