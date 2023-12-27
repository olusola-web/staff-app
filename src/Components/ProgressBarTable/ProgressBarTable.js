import React from "react";
import Table from "../../Utils/Table";
import Singletable from "./Singletable";
import ProgressBar from "./ProgressbarChart";
import { useStateContext } from "../../context/StateContext";

const tableHeader = ["Date", "Details", "Point"];

const ProgressBarTable = () => {
  const { dashDetails } = useStateContext();
  const { point_tranaction, total_point } = dashDetails;
  // console.log(point_tranaction)
  let displayedData = [];

  if (point_tranaction && Array.isArray(point_tranaction)) {
    displayedData = point_tranaction.map((point, index) => {
      // console.log(displayedData)
      let formattedDate = point.created_at
        ? new Date(point.created_at).toLocaleDateString()
        : "Not Available";

      return {
        id: index + 1,
        created_at: formattedDate,
        reason_for_point: point.reason_for_point,
        point: point.point,
      };
    });
  }

  const maxPointValue = displayedData.length * 100;

  // Determine color based on totalPoints and table data
  let progressBarColor = "green"; // Default to green
  let progressBarValue = total_point || 0; // Set to 0 if total_point is falsy
  
  if (total_point === 0) {
      progressBarColor = "green"; // When total points are 0
  } else if (total_point > 0 && total_point <= 2) {
      progressBarColor = "yellow"; // When total points are greater than 0 and up to 2
  } else if (total_point > 2 && total_point <= 3) {
      progressBarColor = "red"; // When total points are more than 2 and up to 3
  }
  
  return (
    <div>
      <div className="bg-white">
        <h2 className="relative inline-block font-bold text-sm sm:text-md md:text-lg lg:text-xl p-1">
          Progress
        </h2>
        <div className="py-4">
        <ProgressBar value={progressBarValue} max={total_point} color={progressBarColor} />
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
